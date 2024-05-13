function doubleNumbers(a) {
    var arr = [1, 2, 3, 4, 5]

    var v = arr.map((val) => {
        return val * val
    })
    return v
}

var add = doubleNumbers()
console.log(add)