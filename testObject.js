var ok=new okObj()
ok.update()
console.log(ok.x)

function okObj() {
	this.x = 2
	this.update = function() {
		console.log("updateX")
		this.x = 3
	}
	if (this.x==2) console.log("okey then")
}