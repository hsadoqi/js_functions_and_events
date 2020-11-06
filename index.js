const header = document.getElementById("header")

// const header = document.querySelector(".header")
// const header = document.getElementsByClassName("header")
// console.log(header)

// const pTags = document.getElementsByTagName("p")
// const pTag = document.querySelector("div > div > p")

// console.log(pTag)

// window.addEventListener("click", handleHeaderClick)

function handleHeaderClick(e){
    // e.preventDefault()
    console.log('clicked')
}

// document.addEventListener("click", handleHeaderClick)

// document.addEventListener("mousedown", function(){alert("mouseup")})


const form = document.getElementById("form")
const btn = document.getElementById("btn")

form.addEventListener("submit", function(e){
    e.preventDefault()
    let val = e.target.children[1].value
    console.log(val)
})


const div1 = document.getElementById('div1')
const div2 = document.getElementById('div2')

const pTag1 = document.getElementById('ptag1')
const pTag2 = document.getElementById('ptag2')

div1.addEventListener("click", function(){console.log('div1')})
div2.addEventListener("click", function(){console.log('div2')}, true)

pTag1.addEventListener("click", function(){console.log('pTag1')})
pTag2.addEventListener("click", function(){console.log('pTag2')})