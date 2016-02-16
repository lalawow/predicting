main()


function main() {
	var data = new getGameData()
	setTimeout(function(){
		var dataMatrix = parseGameData(data.getData())

	},15)
	

}



function getGameData() {
var files=["premierleague.txt"]
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
  if (line.length>0) res.push(line)
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
    	if (dataLines[i].indexOf("Matchday")!=-1) {
    		matchDay++
    		i++
    	}
    	if (dataLines[i][0]=="[") {
    		matchDate = dataLines[i]
    		i++
    	}
    	var gameDetail = parseOneGame(dataLines[i])
        res.update(gameDetail, matchDay, matchDatea)
        i++
    }
}