function areAllPositive() {
    var arr = [1, 2, 3, 4, 5, 6, 7, 81]
    var v = arr.every((value) => value > 0)
    console.log(v)

}

var add = areAllPositive()
console.log(add);