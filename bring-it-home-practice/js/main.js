// *Variables*
// Create a variable and console log the value

let value = 5
console.log(value)



// Create a variable, add 10 to it, and alert the value

let v2 = 5
alert(v2+10)

// *Functions*
// Create a function that subtracts 4 numbers and alerts the difference

function subFourNums(zebra1,zebra2,zebra3,zebra4){
    alert(zebra1 - zebra2 - zebra3 - zebra4)
}
subFourNums(50,10,5,7)

// Create a function that divides one number by another and returns the remainder

function divOneNum(div1,div2){
    return div1 /div2

}

console.log(divOneNum(6,3))

// *Conditionals*
// Create a function that adds two numbers and if the sum is greater than 50 alert Jumanji

function addTwoNumbers(c1,c2){
    let product = (c1 + c2)
    console.log(product)

    if (product > 50){
        alert( " Jumanji")
    }



}
addTwoNumbers(30,30)
// Create a function that multiplys three numbers and if the product is divisible by 3 alert ZEBRA

function multyThreenums(m1,m2,m3){
    const product = (m1 * m2 * m3 )
    if (product / 3){
        alert( " ZEBRA")
    }

}

console.log(multyThreenums(3,3,3))













