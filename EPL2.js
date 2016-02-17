//main()


function main() {
    var data = new getGameData()
    setTimeout(function() {
        var dataMatrix = parseGameData(data.getData())
        
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
    var matchDay = 0
    var matchDate = ""
    var i = 2
    var res = new leagueData()
    while (i < n) {
        if (dataLines[i].indexOf("Matchday") != -1) {
            matchDay++
            i++
        }
        if (dataLines[i][0] == "[") {
            matchDate = dataLines[i]
            i++
        }
        var gameDetail = parseOneGame(dataLines[i])
        res.update(gameDetail, matchDay, matchDatea)
        i++
    }
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
    console.log(res)
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
    for (var i = 0; i < 20; i++) {
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
	for (var i = 0; i < 20; i++) {
		var teamInfo = {
			id: i,
			teamShortName: teamShortNameList[i],
			teamLongName: teamLongNmaeList[i],
			homeGames: [],
			awayGames: []
		}
		teamArray.push(teamInfo)
		
	}
}




var teamShortNameList = "ARS,AST,BOU,CHE,CRY,EVE,LEI,LFC,MC,MU,NEW,NOR,SOU,STO,SUN,SWA,TOT,WAT,WBA,WHA".split(",")
var teamLongNmaeList="Arsenal FC,Aston Villa,AFC Bournemouth,Chelsea FC,Crystal Palace,Everton FC,Leicester City,Liverpool FC,Manchester City,Manchester United,Newcastle United,Norwich City,Southampton FC,Stoke City,Sunderland AFC,Swansea City,Tottenham Hotspur,Watford FC,West Bromwich Albion,West Ham United".split(",")

