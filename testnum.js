var numeric = require("numeric")



var x=[[1/3,2,0.5],[2/3,4,0.5],[3/3,7,0.5],[4/3,5,0.5]]
//var y=[[2],[3],[4]]
var y=[2,3,4,5]

var res = numeric.dot(numeric.dot(numeric.inv(numeric.dot(numeric.transpose(x),x)),numeric.transpose(x)),y)
console.log(res)

var x1=[1,0.5,2,3]
var y1=[1,2,2,4]
var res1= numeric.dot(x1,y1)
console.log(res1) 