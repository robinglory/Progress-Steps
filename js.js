// var progress = document.getElementById('progress')
// var prev = document.getElementById('prev')
// var next = document.getElementById('next')
// var circle = document.querySelectorAll('.circle')

// let currentActive = 1;
// next.addEventListener('click',() => {
//    currentActive++;
//    if(currentActive>circle.length){
//       currentActive = 4;
//    }
//    update();
// })


// prev.addEventListener('click',() => {
//    currentActive--;
//    if(currentActive<1){
//       currentActive = 1;
//    }
//    update();
// })

// function update(){
//    circle.forEach((circle, index) =>{
//       if(index < currentActive) {
//          circle.classList.add('active')
//       }
//       else{
//          circle.classList.remove('active')
//       }
//    })
// }

// const actives = document.querySelectorAll('.active');
// console.log(actives  ,circle)

const progress = document.getElementById('progress')
const prev = document.getElementById('prev')
const next = document.getElementById('next')
const circles = document.querySelectorAll('.circle')

let currentActive = 1

next.addEventListener('click', () => {
    currentActive++

    if(currentActive > circles.length) {
        currentActive = circles.length
    }

    update()
})

prev.addEventListener('click', () => {
    currentActive--

    if(currentActive < 1) {
        currentActive = 1
    }

    update()
})

function update() {
    circles.forEach((circle, idx) => {
        if(idx < currentActive) {
            circle.classList.add('active')
        } else {
            circle.classList.remove('active')
        }
    })

    const actives = document.querySelectorAll('.active')

    progress.style.width = (actives.length - 1) / (circles.length - 1) * 100 + '%'

    if(currentActive === 1) {
        prev.disabled = true
    } else if(currentActive === circles.length) {
        next.disabled = true
    } else {
        prev.disabled = false
        next.disabled = false
    }
}

