
var ss = require("simple-statistics")
var numeric = require("numeric")

main() 

function main() {
    predict(27)
}

function testPredict(predictMatchday) {
    var data = new getGameData()
    setTimeout(function() {
        var dataMatrix = parseGameData(data.getData())
//        console.log(dataMatrix.teams[0].homeGames[2])
//        console.log(dataMatrix.games[0][19])
        console.log("Predicting Matchday "+predictMatchday)
        var teamGoalsStat = teamGoalsInfo(dataMatrix, predictMatchday)
        var playedGames = getAllPlayedGames(dataMatrix.games,predictMatchday)
        var XinfoNeeded = {"hometeamData":["goalsAvg","goalsAllowedAvg","homeGameGoalsAvg","homeGameGoalsAllowedAvg","goalsStd","goalsAllowedStd","homeGameGoalsStd","homeGameGoalsAllowedStd"],
                      "awayteamData":["goalsAvg","goalsAllowedAvg","awayGameGoalsAvg","awayGameGoalsAllowedAvg","goalsStd","goalsAllowedStd","awayGameGoalsStd","awayGameGoalsAllowedStd"]}
        var YinfoNeeded = ["homeGoals","awayGoals"]
        var dataXandY = getMatrixXandY(playedGames,teamGoalsStat,XinfoNeeded,YinfoNeeded)
        var analyses = []
        analyses[0] = multipleLinearRegression(dataXandY.Xmatrix,dataXandY.Ymatrix[0])
        analyses[1] = multipleLinearRegression(dataXandY.Xmatrix,dataXandY.Ymatrix[1])
        
        testMatchdayPredict(analyses, XinfoNeeded, teamGoalsStat, predictMatchday, dataMatrix.teams)
        console.log(analyses)
    }, 15)
}

function predict(predictMatchday) {
    var data = new getGameData()
    setTimeout(function() {
        var dataMatrix = parseGameData(data.getData())
//        console.log(dataMatrix.teams[0].homeGames[2])
//        console.log(dataMatrix.games[0][19])
        console.log("Predicting Matchday "+predictMatchday)
        var teamGoalsStat = teamGoalsInfo(dataMatrix, predictMatchday)
        var playedGames = getAllPlayedGames(dataMatrix.games,predictMatchday)
        var XinfoNeeded = {"hometeamData":["goalsAvg","goalsAllowedAvg","homeGameGoalsAvg","homeGameGoalsAllowedAvg","goalsStd","goalsAllowedStd","homeGameGoalsStd","homeGameGoalsAllowedStd"],
                      "awayteamData":["goalsAvg","goalsAllowedAvg","awayGameGoalsAvg","awayGameGoalsAllowedAvg","goalsStd","goalsAllowedStd","awayGameGoalsStd","awayGameGoalsAllowedStd"]}
        var YinfoNeeded = ["homeGoals","awayGoals"]
        var dataXandY = getMatrixXandY(playedGames,teamGoalsStat,XinfoNeeded,YinfoNeeded)
        var analyses = []
        analyses[0] = multipleLinearRegression(dataXandY.Xmatrix,dataXandY.Ymatrix[0])
        analyses[1] = multipleLinearRegression(dataXandY.Xmatrix,dataXandY.Ymatrix[1])
        
        giveMatchdayPredict(analyses, XinfoNeeded, teamGoalsStat, predictMatchday, dataMatrix.teams)
        console.log(analyses)
    }, 15)
}



function getGameData() {
    var files = ["premierleague.txt"]
    var fs = require('fs')
    var readline = require('readline')
    var stream = require('stream')
    var res = []
    this.length = files.length
    for (var i = 0; i < files.length; i++) {
        var instream = fs.createReadStream(files[i])
        var outstream = new stream
        var rl = readline.createInterface(instream, outstream)

        rl.on('line', function(line) {
            // process line here
            if (line.length > 0) res.push(line)
        })

        rl.on('close', function() {})
    }

    this.getData = function() {
        return res
    }
}


function parseGameData(dataLines) {
    var n = dataLines.length
    //	console.log(n)
    var matchday = 0
    var matchDate = ""
    var i = 2
    var res = new leagueData()
    while (i < n) {
        if (dataLines[i].indexOf("Matchday") != -1) {
            matchday++
            i++
        }
        if (dataLines[i][0] == "[") {
            matchDate = dataLines[i]
            i++
        }
        var gameDetail = parseOneGame(dataLines[i])
        res.update(gameDetail, matchday, matchDate)
        i++
    }
    return res
}


function parseOneGame(gameSample) {
    var gameString = gameSample
    var scores = findOneGameScores(gameString)
    var teams = findOneGameTeams(gameString)

    var homeGoals = scores.homeGoals
    var awayGoals = scores.awayGoals
    if (homeGoals>=0) {
    var res = {
        "homeTeam": teams.homeTeam,
        "awayTeam": teams.awayTeam,
        "homeGoals":homeGoals,
        "awayGoals": awayGoals,
        "totalGoals": homeGoals+awayGoals,
        "homeDiff": homeGoals-awayGoals,
        "awayDiff": awayGoals-homeGoals,
        "isPlayed": true,
        "isHomeWin": homeGoals>awayGoals,
        "isTie": homeGoals==awayGoals,
        "isAwayWin": homeGoals<awayGoals
    }
} else {
	res = {
		"homeTeam": teams.homeTeam,
        "awayTeam": teams.awayTeam,
        "isPlayed": false,
	}
}
//    console.log(res)
    return res
}


function findOneGameScores(sample) {
    var point = sample.indexOf("-")
    var res = {
        homeGoals: parseInt(sample[point-1]),
        awayGoals: parseInt(sample[point+1])
    }
    return res
}

function findOneGameTeams(sample) {
    var teams = []
    for (var i = 0; i < teamNumber; i++) {
        if (sample.indexOf(teamLongNmaeList[i])!=-1) teams.push(i)
    }

    if (teams.length!=2) console.log("sth is wrong on game teams")
    if (sample.indexOf(teamLongNmaeList[teams[0]])>sample.indexOf(teamLongNmaeList[teams[1]])) {
        var res = {
            homeTeam: teams[1],
            awayTeam: teams[0]
        }
    } else {
        var res = {
            homeTeam: teams[0],
            awayTeam: teams[1]
        }
    }
    return res
}

function leagueData() {
	var teamArray = []
	var gameArray = []
	for (var i = 0; i < teamNumber; i++) {
		var teamInfo = {
			id: i,
			teamShortName: teamShortNameList[i],
			teamLongName: teamLongNmaeList[i],
			homeGames: [],
			awayGames: [],
            games: []
		}
		teamArray.push(teamInfo)
		gameArray[i]=[]
        gameArray[i][i] ={
            isPlayed: false
        }
	}
    this.teams = teamArray
    this.games = gameArray

    this.update = function(gameDetail, matchday, matchDate) {
        var oneGame = gameDetail
        var homeTeam = oneGame.homeTeam
        var awayTeam = oneGame.awayTeam
        oneGame.matchday = matchday
        oneGame.marchDate = matchDate
        this.teams[homeTeam].homeGames.push(oneGame)
        this.teams[homeTeam].games[matchday]=oneGame
        this.teams[awayTeam].awayGames.push(oneGame)
        this.teams[awayTeam].games[matchday]=oneGame
        this.games[homeTeam][awayTeam]=oneGame
    }
}


function teamGoalsInfo(data, matchday) {
    var res = []
    for (var i =0; i < teamNumber; i++) {
        var goals=[], goalsAllowed=[], homeGameGoals=[], homeGameGoalsAllowed=[], awayGameGoals=[], awayGameGoalsAllowed=[]
        for (var j=1; j<matchday; j++) {
            var theGame=data.teams[i].games[j]
            if (theGame.homeTeam == i) {
                goals.push(theGame.homeGoals)
                goalsAllowed.push(theGame.awayGoals)
                homeGameGoals.push(theGame.homeGoals)
                homeGameGoalsAllowed.push(theGame.awayGoals)
            } else {
                goals.push(theGame.awayGoals)
                goalsAllowed.push(theGame.homeGoals)
                awayGameGoals.push(theGame.awayGoals)
                awayGameGoalsAllowed.push(theGame.homeGoals)
            }
        }
        res.push({
            goalsAvg: ss.mean(goals),
            goalsStd: ss.sampleStandardDeviation(goals),
            goalsAllowedAvg: ss.mean(goalsAllowed),
            goalsAllowedStd: ss.sampleStandardDeviation(goalsAllowed),
            homeGameGoalsAvg: ss.mean(homeGameGoals),
            homeGameGoalsStd: ss.sampleStandardDeviation(homeGameGoals),
            homeGameGoalsAllowedAvg: ss.mean(homeGameGoalsAllowed),
            homeGameGoalsAllowedStd: ss.sampleStandardDeviation(homeGameGoalsAllowed),
            awayGameGoalsAvg: ss.mean(awayGameGoals),
            awayGameGoalsStd: ss.sampleStandardDeviation(awayGameGoals),
            awayGameGoalsAllowedAvg: ss.mean(awayGameGoalsAllowed),
            awayGameGoalsAllowedStd: ss.sampleStandardDeviation(awayGameGoalsAllowed),
        })
    }
    return res
}

function getAllPlayedGames(gameMatrix, matchday) {
    var res = []
    for (var i = 0; i < teamNumber; i++)
        for (var j=0; j< teamNumber; j++)
            if (gameMatrix[i][j].isPlayed==true && gameMatrix[i][j].matchday<matchday) res.push(gameMatrix[i][j])
    return res
}

function getMatrixXandY(gamesInfo, teamsInfo, Xneeded,Yneeded) {
    var Xres = []
    var Yres = []
    var n = gamesInfo.length
    console.log("game Played: "+n)
    var hometeamNeededN = Xneeded["hometeamData"].length
    var awayteamNeededN = Xneeded["awayteamData"].length
    var YneededN = Yneeded.length
    for (var i=0; i<YneededN; i++) {
        Yres[i] = []
    }
    for (var i=0; i < n; i++) {
        var game = gamesInfo[i]
        var hometeam = game.homeTeam
        var awayteam = game.awayTeam
        var gameres = [1]
        for (var j=0; j<hometeamNeededN; j++) {
            gameres.push(teamsInfo[hometeam][Xneeded["hometeamData"][j]])
        }
        for (var j=0; j<awayteamNeededN; j++) {
            gameres.push(teamsInfo[awayteam][Xneeded["awayteamData"][j]])
        }
        
        Xres.push(gameres)

        for (var j=0; j<YneededN; j++) {
            Yres[j].push(game[Yneeded[j]])
        }

    }
    return {Xmatrix: Xres,
        Ymatrix: Yres}
}

function multipleLinearRegression(X,Y) {
    var res = numeric.dot(numeric.dot(numeric.inv(numeric.dot(numeric.transpose(X),X)),numeric.transpose(X)),Y)
    return res
}

function giveMatchdayPredict(analyses, XinfoNeeded, teamGoalsStat, matchday, gameTeams) {
    var matchTeams = getTeams(matchday, gameTeams)
//    console.log(matchTeams)
    console.log()
    for (var i=0; i<teamNumber/2; i++) {
        givePredict(analyses, XinfoNeeded, teamGoalsStat, matchTeams.homeTeams[i], matchTeams.awayTeams[i], i)
    }
}

function getTeams(matchday, games) {
    var res = {
        homeTeams: [],
        awayTeams: []
    }
    for (var i=0; i < teamNumber; i++) {
        if (games[i].games[matchday].homeTeam == i) {
            res.homeTeams.push(i)
            res.awayTeams.push(games[i].games[matchday].awayTeam)
        }
    }
    return res
}

function givePredict(constArrays, Xneeded, teamsInfo, hometeam, awayteam, gameNumber) {
    var hometeamNeededN = Xneeded["hometeamData"].length
    var awayteamNeededN = Xneeded["awayteamData"].length
    var Xarray = [1]
    for (var j=0; j<hometeamNeededN; j++) {
        Xarray.push(teamsInfo[hometeam][Xneeded["hometeamData"][j]])
    }
    for (var j=0; j<awayteamNeededN; j++) {
        Xarray.push(teamsInfo[awayteam][Xneeded["awayteamData"][j]])
    }
    var homeGoalsPredict = parseInt(numeric.dot(constArrays[0],Xarray)*100)/100
    var awayGoalsPredict = parseInt(numeric.dot(constArrays[1],Xarray)*100)/100
    var diff = parseInt((homeGoalsPredict - awayGoalsPredict)*100)/100
    if (diff>0.5) {
        console.log("Game "+(gameNumber+1)+": "+teamShortNameList[hometeam]+" - "+teamShortNameList[awayteam]+", "+teamShortNameList[hometeam]+" will win. diff: "+diff)
    } else if (diff<-0.5) {
        console.log("Game "+(gameNumber+1)+": "+teamShortNameList[hometeam]+" - "+teamShortNameList[awayteam]+", "+teamShortNameList[awayteam]+" will win. diff: "+diff)
    } else {
        console.log("Game "+(gameNumber+1)+": "+teamShortNameList[hometeam]+" - "+teamShortNameList[awayteam]+", "+"it could be tie. diff: "+diff)
    }
    console.log("Hometeam: "+teamShortNameList[hometeam]+" will have goals: "+homeGoalsPredict, "Awayteam: "+teamShortNameList[awayteam]+" will have goals: "+awayGoalsPredict)
    console.log("\n")
}

function testMatchdayPredict(analyses, XinfoNeeded, teamGoalsStat, matchday, gameTeams) {
    var matchTeams = getTeams(matchday, gameTeams)
//    console.log(matchTeams)
    console.log()
    for (var i=0; i<teamNumber/2; i++) {
        testPredict(analyses, XinfoNeeded, teamGoalsStat, matchTeams.homeTeams[i], matchTeams.awayTeams[i], i)
    }
}

function testPredict(constArrays, Xneeded, teamsInfo, hometeam, awayteam, gameNumber) {
    var hometeamNeededN = Xneeded["hometeamData"].length
    var awayteamNeededN = Xneeded["awayteamData"].length
    var Xarray = [1]
    for (var j=0; j<hometeamNeededN; j++) {
        Xarray.push(teamsInfo[hometeam][Xneeded["hometeamData"][j]])
    }
    for (var j=0; j<awayteamNeededN; j++) {
        Xarray.push(teamsInfo[awayteam][Xneeded["awayteamData"][j]])
    }
    var homeGoalsPredict = parseInt(numeric.dot(constArrays[0],Xarray)*100)/100
    var awayGoalsPredict = parseInt(numeric.dot(constArrays[1],Xarray)*100)/100
    var diff = parseInt((homeGoalsPredict - awayGoalsPredict)*100)/100
    if (diff>0.5) {
        console.log("Game "+(gameNumber+1)+": "+teamShortNameList[hometeam]+" - "+teamShortNameList[awayteam]+", "+teamShortNameList[hometeam]+" will win. diff: "+diff)
    } else if (diff<-0.5) {
        console.log("Game "+(gameNumber+1)+": "+teamShortNameList[hometeam]+" - "+teamShortNameList[awayteam]+", "+teamShortNameList[awayteam]+" will win. diff: "+diff)
    } else {
        console.log("Game "+(gameNumber+1)+": "+teamShortNameList[hometeam]+" - "+teamShortNameList[awayteam]+", "+"it could be tie. diff: "+diff)
    }
    console.log("Hometeam: "+teamShortNameList[hometeam]+" will have goals: "+homeGoalsPredict, "Awayteam: "+teamShortNameList[awayteam]+" will have goals: "+awayGoalsPredict)
    console.log("\n")
}

var teamShortNameList = "ARS,AST,BOU,CHE,CRY,EVE,LEI,LFC,MC,MU,NEW,NOR,SOU,STO,SUN,SWA,TOT,WAT,WBA,WHA".split(",")
var teamLongNmaeList="Arsenal FC,Aston Villa,AFC Bournemouth,Chelsea FC,Crystal Palace,Everton FC,Leicester City,Liverpool FC,Manchester City,Manchester United,Newcastle United,Norwich City,Southampton FC,Stoke City,Sunderland AFC,Swansea City,Tottenham Hotspur,Watford FC,West Bromwich Albion,West Ham United".split(",")
var teamNumber = 20

