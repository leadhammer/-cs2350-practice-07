// Required by Webpack - do not touch
require.context('../', true, /\.(html|json|txt|dat)$/i)
require.context('../images/', true, /\.(gif|jpg|png|svg|eot|ttf|woff|woff2)$/i)
require.context('../stylesheets/', true, /\.(css|scss)$/i)

// JavaScript
//TODO

import "bootstrap"



//alert("Hello")
//commenting that out because it is annoying
//but showing that I did it for the assignment

console.log("Hello")

//BTW, the code is being placed as I watch the videos
//I had already watched the videos but I didn't realize they
//were attached to an assignment so I am watching them again

/*
if(2 < 3){
    alert("2 wins")
}
*/
let msg = "Welcome!"
let flag = false

const PI = 3.14



//next vid



for(let i = 0; i < 10; i++){
    let r = Math.random()

    if(r < .5){
        document.write('<div class="red box"></div>')
    
    }else{
        document.write('<div class="blue box"></div>')
    }
}

let j = 0
while(j < 10){
    let r = Math.random()

    if(r < .5){
        document.write('<div class="red box"></div>')
    
    }else{
        document.write('<div class="blue box"></div>')
    }
    j++
}

let k = 0

do{
    let r = Math.random()

    if(r < .5){
        document.write('<div class="red box"></div>')
    
    }else{
        document.write('<div class="blue box"></div>')
    }
    k++
}while(k < 10)


const displayRandomBox = function(){
    let r = Math.random()

    if(r < .5){
        document.write('<div class="red box"></div>')
    
    }else{
        document.write('<div class="blue box"></div>')
    }
}


function displayNBoxesUsingFor(n){
    for(let i = 0; i < n; i++){
        displayRandomBox()
    }
}
displayNBoxesUsingFor(20)
//same thing for the while loop and do-while loop
//by using function call within the body of the loop
//to minimize space used by unnecessary code

/*
const square = function(x){
    return x * x
}
alert(square(10))
*/

let f = document.getElementById("myForm")
f.onsubmit = function messageDisplay(){
    let n = document.getElementById("name-fld").value
    alert("Welcome " + n + "!")
}