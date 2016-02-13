var numeric = require("numeric")
main()

function main() {
    var teamNumber = 20
    var matchup=",ARS,AST,BOU,CHE,CRY,EVE,LEI,LFC,MC,MU,NEW,NOR,SOU,STO,SUN,SWA,TOT,WAT,WBA,WHA,Arsenal,,5ÔÂ15ÈÕ,2:00,0:01,4ÔÂ16ÈÕ,2:01,2ÔÂ14ÈÕ,0:00,2:01,3:00,1:00,4ÔÂ30ÈÕ,0:00,2:00,3:01,2ÔÂ3ÈÕ,1:01,2ÔÂ4ÈÕ,12ÔÂ3ÈÕ,0:02,Aston Villa,0:02,,9ÔÂ4ÈÕ,2ÔÂ4ÈÕ,1:00,1ÔÂ3ÈÕ,1:01,2ÔÂ14ÈÕ,0:00,0:01,7ÔÂ5ÈÕ,2:00,4ÔÂ23ÈÕ,0:01,2:02,1:02,12ÔÂ3ÈÕ,2:03,0:01,1:01,Bournemouth,0:02,0:01,,4ÔÂ23ÈÕ,0:00,3:03,1:01,4ÔÂ16ÈÕ,2ÔÂ4ÈÕ,2:01,0:01,3:00,1ÔÂ3ÈÕ,2ÔÂ13ÈÕ,2:00,12ÔÂ3ÈÕ,1:05,1:01,7ÔÂ5ÈÕ,1:03,Chelsea,2:00,2:00,0:01,,1:02,3:03,5ÔÂ15ÈÕ,1:03,4ÔÂ16ÈÕ,1:01,2ÔÂ13ÈÕ,1:00,1:03,5ÔÂ3ÈÕ,3:01,2:02,4ÔÂ30ÈÕ,2:02,2:02,3ÔÂ19ÈÕ,Crystal Palace,1:02,2:01,1:02,0:03,,4ÔÂ23ÈÕ,3ÔÂ19ÈÕ,6ÔÂ3ÈÕ,0:01,0:00,5:01,9ÔÂ4ÈÕ,1:00,7ÔÂ5ÈÕ,0:01,0:00,1:03,2ÔÂ13ÈÕ,2:00,1:03,Everton,3ÔÂ19ÈÕ,4:00,4ÔÂ30ÈÕ,3:01,1:01,,2:03,1:01,0:02,0:03,3:00,5ÔÂ15ÈÕ,4ÔÂ16ÈÕ,3:04,6:02,1:02,1:01,2:02,2ÔÂ13ÈÕ,5ÔÂ3ÈÕ,Leicester,2:05,3:02,0:00,2:01,1:00,7ÔÂ5ÈÕ,,2:00,0:00,1:01,3ÔÂ14ÈÕ,2ÔÂ27ÈÕ,2ÔÂ4ÈÕ,3:00,4:02,4ÔÂ23ÈÕ,1:01,2:01,1ÔÂ3ÈÕ,4ÔÂ16ÈÕ,Liverpool,3:03,3:02,1:00,3ÔÂ13ÈÕ,1:02,,1:00,,2ÔÂ3ÈÕ,0:01,4ÔÂ23ÈÕ,1:01,1:01,9ÔÂ4ÈÕ,2:02,1:00,2ÔÂ4ÈÕ,7ÔÂ5ÈÕ,2:02,0:03,Man City,7ÔÂ5ÈÕ,5ÔÂ3ÈÕ,5:01,3:00,4:00,0:00,1:03,1:04,,3ÔÂ20ÈÕ,6:01,2:01,3:01,4ÔÂ23ÈÕ,4:01,2:01,2ÔÂ14ÈÕ,2:00,9ÔÂ4ÈÕ,1:02,Man Utd,2ÔÂ28ÈÕ,4ÔÂ16ÈÕ,5ÔÂ15ÈÕ,0:00,12ÔÂ3ÈÕ,2ÔÂ4ÈÕ,4ÔÂ30ÈÕ,3:01,0:00,,0:00,1:02,0:01,3:00,3:00,2:01,1:00,2ÔÂ3ÈÕ,2:00,0:00,Newcastle,0:01,1:01,5ÔÂ3ÈÕ,2:02,4ÔÂ30ÈÕ,0:01,0:03,2:00,,3:03,,6:02,2:02,0:00,3ÔÂ20ÈÕ,4ÔÂ16ÈÕ,5ÔÂ15ÈÕ,1:02,1:00,2:01,Norwich,1:01,2:00,3:01,1ÔÂ3ÈÕ,1:03,1:01,1:02,4:05,12ÔÂ3ÈÕ,7ÔÂ5ÈÕ,2ÔÂ4ÈÕ,,1:00,1:01,4ÔÂ16ÈÕ,1:00,0:03,4ÔÂ23ÈÕ,0:01,2ÔÂ13ÈÕ,Southampton,4:00,1:01,2:00,2ÔÂ27ÈÕ,5ÔÂ15ÈÕ,0:03,2:02,3ÔÂ19ÈÕ,4ÔÂ30ÈÕ,2:03,9ÔÂ4ÈÕ,3:00,,0:01,5ÔÂ3ÈÕ,3:01,0:02,2:00,3:00,1:00,Stoke,0:00,2ÔÂ27ÈÕ,2:01,1:00,1:02,0:03,2:02,0:01,2:00,2:00,2ÔÂ3ÈÕ,3:01,12ÔÂ3ÈÕ,,4ÔÂ30ÈÕ,2ÔÂ4ÈÕ,4ÔÂ16ÈÕ,0:02,0:01,5ÔÂ15ÈÕ,Sunderland,4ÔÂ23ÈÕ,3:01,1:01,7ÔÂ5ÈÕ,1ÔÂ3ÈÕ,12ÔÂ3ÈÕ,9ÔÂ4ÈÕ,0:01,0:01,2ÔÂ13ÈÕ,3:00,1:03,0:01,2:00,,1:01,0:01,0:01,2ÔÂ4ÈÕ,2:02,Swansea,0:03,3ÔÂ19ÈÕ,2:02,9ÔÂ4ÈÕ,1:01,0:00,0:03,4ÔÂ30ÈÕ,5ÔÂ15ÈÕ,2:01,2:00,5ÔÂ3ÈÕ,2ÔÂ13ÈÕ,0:01,2:04,,2:02,1:00,1:00,0:00,Tottenham,5ÔÂ3ÈÕ,3:01,3ÔÂ19ÈÕ,0:00,1:00,0:00,0:01,0:00,4:01,9ÔÂ4ÈÕ,1:02,3:00,7ÔÂ5ÈÕ,2:02,4:01,2ÔÂ28ÈÕ,,1:00,4ÔÂ23ÈÕ,4:01,Watford,0:03,4ÔÂ30ÈÕ,2ÔÂ27ÈÕ,0:00,0:01,9ÔÂ4ÈÕ,5ÔÂ3ÈÕ,3:00,1:02,1:02,2:01,2:00,0:00,3ÔÂ19ÈÕ,5ÔÂ15ÈÕ,1:00,1:02,,0:00,2:00,West Bromwich,2:01,0:00,1:02,2:03,2ÔÂ27ÈÕ,2:03,2:03,5ÔÂ15ÈÕ,0:03,6ÔÂ3ÈÕ,1:00,3ÔÂ19ÈÕ,0:00,2:01,1:00,1:01,1:01,4ÔÂ16ÈÕ,,4ÔÂ30ÈÕ,West Ham,9ÔÂ4ÈÕ,2:00,3:04,2:01,2ÔÂ4ÈÕ,1:01,1:02,2:00,2:02,4ÔÂ23ÈÕ,2:00,2:02,2:01,0:00,2ÔÂ27ÈÕ,7ÔÂ5ÈÕ,2ÔÂ3ÈÕ,12ÔÂ3ÈÕ,1:01,,"
    var teamStats = "1,3,Arsenal,25,14,6,5,39,22,17,48,12,7,3,2,16,7,9,24,13,7,3,3,23,15,8,24,2,20,Aston Villa,25,3,7,15,20,40,-20,16,12,2,4,6,10,14,-4,10,13,1,3,9,10,26,-16,6,3,15,Bournemouth,25,7,7,11,29,41,-12,28,12,3,4,5,14,18,-4,13,13,4,3,6,15,23,-8,15,4,13,Chelsea,25,7,9,9,33,35,-2,30,13,4,5,4,21,20,1,17,12,3,4,5,12,15,-3,13,5,12,Crystal Palace,25,9,5,11,26,30,-4,32,13,4,2,7,14,17,-3,14,12,5,3,4,12,13,-1,18,6,8,Everton,25,8,11,6,46,34,12,35,13,4,4,5,27,22,5,16,12,4,7,1,19,12,7,19,7,1,Leicester,25,15,8,2,47,27,20,53,12,7,4,1,21,13,8,25,13,8,4,1,26,14,12,28,8,9,Liverpool,25,9,8,8,32,36,-4,35,12,4,5,3,16,17,-1,17,13,5,3,5,16,19,-3,18,9,4,Man City,25,14,5,6,47,26,21,47,13,9,1,3,34,15,19,28,12,5,4,3,13,11,2,19,10,5,Man Utd,25,11,8,6,32,22,10,41,12,6,4,2,15,5,10,22,13,5,4,4,17,17,0,19,11,17,Newcastle,25,6,6,13,26,44,-18,24,13,4,5,4,20,18,2,17,12,2,1,9,6,26,-20,7,12,18,Norwich,25,6,5,14,28,48,-20,23,12,4,3,5,16,18,-2,15,13,2,2,9,12,30,-18,8,13,7,Southampton,25,10,7,8,33,24,9,37,13,7,2,4,23,13,10,23,12,3,5,4,10,11,-1,14,14,11,Stoke,25,9,6,10,24,31,-7,33,12,5,2,5,13,13,0,17,13,4,4,5,11,18,-7,16,15,19,Sunderland,25,5,5,15,30,49,-19,20,12,3,3,6,13,13,0,12,13,2,2,9,17,36,-19,8,16,16,Swansea,25,6,9,10,24,33,-9,27,13,4,5,4,13,17,-4,17,12,2,4,6,11,16,-5,10,17,2,Tottenham,25,13,9,3,45,19,26,48,13,7,4,2,23,9,14,25,12,6,5,1,22,10,12,23,18,10,Watford,25,9,6,10,27,27,0,33,13,5,3,5,13,11,2,18,12,4,3,5,14,16,-2,15,19,14,West Bromwich,25,7,8,10,23,32,-9,29,13,4,4,5,15,18,-3,16,12,3,4,5,8,14,-6,13,20,6,West Ham,25,10,9,6,38,29,9,39,12,5,5,2,20,14,6,20,13,5,4,4,18,15,3,19,"
    var teamAndGames=splitGameResult(matchup,teamNumber)
//    console.log(teamAndGames.teams)
    var gameScoresMatrix=splitGameScores(teamAndGames,teamNumber)
    //console.log(figureScores("2:01",4,5))
    var teamGoalsStat = splitTeamStats(teamStats,teamNumber)
//    console.log(gameScoresMatrix[0])
    var playedGames = getPlayedGames(gameScoresMatrix, teamNumber)
    var XinfoNeeded = {"hometeamData":["avgGoals","avgGoalsAllowed","avgHomeGoals","avgHomeGoalsAllowed"],
                      "awayteamData":["avgGoals","avgGoalsAllowed","avgAwayGoals","avgAwayGoalsAllowed"]}
    var YinfoNeeded = ["homeGoals","awayGoals"]
    var dataXandY = getMatrixXandY(playedGames,teamGoalsStat,XinfoNeeded,YinfoNeeded)
    var analyses = []
    analyses[0] = multipleLinearRegression(dataXandY.Xmatrix,dataXandY.Ymatrix[0])
    analyses[1] = multipleLinearRegression(dataXandY.Xmatrix,dataXandY.Ymatrix[1])
//    console.log(analyses)
/*        
    var hometeam = 11
    var awayteam = 19
    givePredict(analyses, XinfoNeeded, teamGoalsStat, hometeam, awayteam, teamAndGames.teams)

    hometeam = 0
    awayteam = 6
    givePredict(analyses, XinfoNeeded, teamGoalsStat, hometeam, awayteam, teamAndGames.teams)
    */

    var hometeams = [14,2,4,5,11,15,3,0,1,8]
    var awayteams = [9,13,17,18,19,12,10,6,7,16]
    for (var i=1; i<11; i++) {
        givePredict(analyses, XinfoNeeded, teamGoalsStat, hometeams[i-1], awayteams[i-1], teamAndGames.teams, i)
    }
}


function splitGameResult(matchup,teamNumber) {
    var datas=matchup.split(",")
    var teams=[]
    var games=[]
    var counter = 1
    for (var i=0; i<teamNumber; i++) {
        teams[i]=datas[counter]
        counter++
    }
    for (var i=0; i<teamNumber; i++) {
        games[i]=[]
        counter++
        for (var j=0; j<teamNumber; j++) {
            games[i][j]=datas[counter]
            counter++
        }
//        console.log(games[i][0])
    }
//    console.log(teams)
    return {"teams": teams, "games":games}
}

function splitGameScores(stringdata, teamNumber) {
    var res=[]
    var teams = stringdata['teams']
    var data = stringdata['games']
    var counter = 0
    for (var i = 0; i<teamNumber; i++) {
        res[i]=[]
        for (var j=0; j<teamNumber; j++) {
            if (data[i][j].indexOf(":")!==-1) {
                counter++
                res[i].push(figureScores(data[i][j],i,j))
            } else {
                res[i].push({"isPlayed":false})
            }
        }
    }
//    console.log(counter)
    return res
}

function figureScores(str,i,j) {
    if (str.length!==4) {
        console.log("strange socre, sth is wrong!")
        return {}
    }
    var homeGoals=parseInt(str[0])
    var awayGoals=parseInt(str[3])
    var res={}
    res = {
        "homeTeam": i,
        "awayTeam": j,
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
    return res
}

/*
[ { isPlayed: false },
  { isPlayed: false },
  { homeTeam: 0,
    awayTeam: 2,
    homeGoals: 2,
    awayGoals: 0,
    totalGoals: 2,
    homeDiff: 2,
    awayDiff: -2,
    isPlayed: true,
    isHomeWin: true,
    isTie: false,
    isAwayWin: false },
    ...]
    */

function splitTeamStats(stringData, teamNumber) {

    var datas = stringData.split(",")
    var res = []
    for (var i = 0; i<teamNumber; i++) {
        var base = i*27
        if ((i+1)!=parseInt(datas[base])) console.log("something is wrong on team stats data!")
        var thisTeam = {
            "id": i,
            "teamName": datas[base+2],
            "avgGoals": parseInt(parseInt(datas[base+7])/parseInt(datas[base+3])*100000)/100000,
            "avgGoalsAllowed": parseInt(parseInt(datas[base+8])/parseInt(datas[base+3])*100000)/100000,
            "avgHomeGoals": parseInt(parseInt(datas[base+15])/parseInt(datas[base+11])*100000)/100000,
            "avgHomeGoalsAllowed": parseInt(parseInt(datas[base+16])/parseInt(datas[base+11])*100000)/100000,
            "avgAwayGoals": parseInt(parseInt(datas[base+23])/parseInt(datas[base+19])*100000)/100000,
            "avgAwayGoalsAllowed": parseInt(parseInt(datas[base+24])/parseInt(datas[base+19])*100000)/100000
        }
        res.push(thisTeam)
    }
    return res
}
/*
{ id: 8,
  teamName: 'Man City',
  avgGoals: 1.88,
  avgGoalsAllowed: 1.04,
  avgHomeGoals: 2.61538,
  avgHomeGoalsAllowed: 1.15384,
  avgAwayGoals: 1.08333,
  avgAwayGoalsAllowed: 0.91666 }
*/

function multipleLinearRegression(X,Y) {
    var res = numeric.dot(numeric.dot(numeric.inv(numeric.dot(numeric.transpose(X),X)),numeric.transpose(X)),Y)
    return res
}

function getPlayedGames(gameMatrix, teamNumber) {
    var res = []
    for (var i = 0; i < teamNumber; i++)
        for (var j=0; j< teamNumber; j++)
            if (gameMatrix[i][j].isPlayed==true) res.push(gameMatrix[i][j])
    return res
}

function getMatrixXandY(gamesInfo, teamsInfo, Xneeded,Yneeded) {
    var Xres = []
    var Yres = []
    var n = gamesInfo.length
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
        var gameres = []
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

function givePredict(constArrays, Xneeded, teamsInfo, hometeam, awayteam, teams, gameNumber) {
    var hometeamNeededN = Xneeded["hometeamData"].length
    var awayteamNeededN = Xneeded["awayteamData"].length
    var Xarray = []
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
        console.log("Game "+gameNumber+", "+teams[hometeam]+" will win. diff: "+diff)
    } else if (diff<-0.5) {
        console.log("Game "+gameNumber+", "+teams[awayteam]+" will win. diff: "+diff)
    } else {
        console.log("Game "+gameNumber+", "+"it could be tie. diff: "+diff)
    }
    console.log("Hometeam: "+teams[hometeam]+" will have goals: "+homeGoalsPredict, "Awayteam: "+teams[awayteam]+" will have goals: "+awayGoalsPredict)
    console.log("\n")
}