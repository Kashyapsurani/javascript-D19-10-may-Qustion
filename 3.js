function printSquare(a) {
    let arr = [2, 3, 4, 5, 6]

    arr.forEach((value) => {
        var sum = value * value
        console.log(sum);
    })
    return a
}
var add = printSquare()
console.log(add)