let button = document.querySelector('.btn') 

button.addEventListener('click',()=>{
    document.querySelector('.box').style.backgroundColor = 'black'
    

})


let green = document.querySelector('.btn1')

green.addEventListener('click',()=>{
    document.querySelector('.box').style.backgroundColor = 'lightgreen'
    

})

let purple = document.querySelector('.btn2')

purple.addEventListener('click',()=>{
    document.querySelector('.box').style.backgroundColor = 'purple'
    

})

function createColor(){
    var num = Math.ceil(Math.random()*255)
    var num1 = Math.ceil(Math.random()*255)
    var num2 = Math.ceil(Math.random()*255)
    return `rgb(${num} ${num1} ${num2})`
    
}
createColor()

let rand = document.querySelector('.btn3')

rand.addEventListener('click',(e)=>{
    // e.stopPropagation()
    document.querySelector('.box').style.backgroundColor = createColor()
    

})
let container = document.querySelector('.cont')

container.addEventListener('click',()=>{
    document.querySelector('.container').style.backgroundColor = createColor()
    

})

// setInterval(() => {
//     document.querySelector('.box').style.backgroundColor = createColor()
    
// }, 1000);

// setTimeout(() => {
//         document.querySelector('.box').style.backgroundColor = createColor()
// }, 2000);
// document.querySelector('.box').style.backgroundColor = createColor()

// let btnn = document.querySelectorAll('.btnn')
// btnn.addEventListener('click',(e)=>{
//     e.stopPropagation()

// })

// let box = document.querySelector('.box')

// box.addEventListener('click',(e)=>{ // event bubbling
//     e.stopPropagation() // used to avoid event bubbling
//     alert('hey im a box')
// })
// let cont = document.querySelector('.container')

// cont.addEventListener('click',(e)=>{

//     alert('hey im a container')
// })
let len = document.querySelector('.len')

len.addEventListener('click',()=>{
    

    document.querySelector('.box').style.width = '70vw'
})
let small_len = document.querySelector('.len')

len.addEventListener('dblclick',()=>{

    document.querySelector('.box').style.width = '30vw'
})
let rotate = document.querySelector('.rotate')

rotate.addEventListener('dblclick',()=>{

    document.querySelector('.box').style.transform = 'rotate(90deg)'
})
let rotate_normal = document.querySelector('.rotate')

rotate_normal.addEventListener('click',()=>{

    document.querySelector('.box').style.transform = 'rotate(180deg)'
})


// let len = document.querySelector('.len')

// len.addEventListener('click',()=>{
//     document.querySelector('.box').style.width = '70vw'
// })

