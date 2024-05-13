function hasAnyEvenNumber() {
    var arr = [1, 2, 3, 4, 5, 6, 7]

    var v = arr.some((value) => value % 2 == 0)
    return v
}

var add = hasAnyEvenNumber()
console.log(add);