var smr = require('smr')
var regression1 = new smr.Regression({ numX: 3, numY: 1 })

regression1.push({ x: [1/3,2,0.5], y: [2] })
regression1.push({ x: [2/3,4,0.5], y: [3] })
regression1.push({ x: [3/3,7,0.5], y: [4] })

console.log("test1",regression1.calculateCoefficients()) //return [[3],[0],[2]] instead of [[0],[2],[3]]

var regression2 = new smr.Regression({ numX: 2, numY: 1 })

regression2.push({ x: [1/3,0.5], y: [2] })
regression2.push({ x: [2/3,0.5], y: [3] })
regression2.push({ x: [3/3,0.5], y: [4] })
console.log("test2",regression2.calculateCoefficients()) //return [[3],[2]]

var regression3 = new smr.Regression({ numX: 4, numY: 1 })

regression3.push({ x: [1/3,2,0.5,8], y: [2] })
regression3.push({ x: [2/3,4,0.5,3], y: [3] })
regression3.push({ x: [3/3,7,0.5,2], y: [4] })
regression3.push({ x: [4/3,7,0.5,7], y: [5] })

console.log("test3",regression3.calculateCoefficients()) //return [[3],[0],[2],[0]] instead of others


var regression4 = new smr.Regression({ numX: 4, numY: 1 })

regression4.push({ x: [1/3,1/4,1/5,8], y: [3] })
regression4.push({ x: [2/3,3/4,1/5,3], y: [6] })
regression4.push({ x: [3/3,4/4,1/5,2], y: [8] })
regression4.push({ x: [4/3,2/4,1/5,7], y: [7] })

console.log("test4",regression4.calculateCoefficients()) //return [[3],[4],[5],[0]] 









