var numeric = require("numeric")
var ss = require("simple-statistics")
var x=[[1/3,2,1],[2/3,4,0],[3/3,7,3],[4/3,5,8],[6,6,3],[7,3,9]]
var y=[2,3,4,5,7,8]
var res = numeric.dot(numeric.dot(numeric.inv(numeric.dot(numeric.transpose(x),x)),numeric.transpose(x)),y)
console.log(res)

var x1=[1,0.5,2,3]
var y1=[1,2,2,4]
var res1= numeric.dot(x1,y1)
console.log(res1) 

var x2=[[1/3,2,1],[6,6,3],[7,3,9],[3/3,7,3],[4/3,5,8],[2/3,4,0]]
var y2=[2,7,8,4,5,3]
var res2 = numeric.dot(numeric.dot(numeric.inv(numeric.dot(numeric.transpose(x2),x2)),numeric.transpose(x2)),y2)
console.log(res2)


var a = [[1,2,3,4],[3,4,5,6]]
console.log(numeric.sum(a))
console.log(ss.factorial(5))
console.log("ok "+ss.mean(y1)+1)
console.log("ok "+(ss.mean(y1)+1))