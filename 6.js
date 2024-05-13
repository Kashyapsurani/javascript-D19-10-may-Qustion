function containsString() {
    var arr = ["Apple", "Banana", "Mango", "Pineapple", "Pineapple", "Papaya", ]

    var val = arr.includes("Banana")

    if (val) {
        console.log(true)
    } else {
        console.log(false)
    }

}

var add = containsString()
console.log(add);