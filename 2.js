function getEvenNumbers() {

    var arr = [1, 2, 3, 4, 5, 6]

    arr.forEach((value) => {
        if (value % 2 == 0) {
            console.log(value)
        }
    })
}

var add = getEvenNumbers();
console.log(add);