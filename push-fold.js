const hidden = document.querySelector(".hidden")

const pairs = document.querySelectorAll(".pairs")
const eightTen = document.querySelectorAll(".eight-ten")
const sixSeven = document.querySelectorAll(".six-seven")
const five = document.querySelectorAll(".five")

eightTen.forEach((i) => {
    i.addEventListener("mouseover",(e) => {
        // console.dir(e.target);
        console.dir(hidden);
        hidden.textContent = '8-10 bb'
    })
})

eightTen.forEach((i) => {
    i.addEventListener("mouseout",(e) => {
        hidden.textContent = ''
    })
})


sixSeven.forEach((i) => {
    i.addEventListener("mouseover",(e) => {
        // console.dir(e.target);
        console.dir(hidden);
        hidden.textContent = '6-7 bb'
    })
})

sixSeven.forEach((i) => {
    i.addEventListener("mouseout",(e) => {
        hidden.textContent = ''
    })
})

five.forEach((i) => {
    i.addEventListener("mouseover",(e) => {
        // console.dir(e.target);
        console.dir(hidden);
        hidden.textContent = '5 bb'
    })
})

five.forEach((i) => {
    i.addEventListener("mouseout",(e) => {
        hidden.textContent = ''
    })
})

pairs.forEach((i) => {
    i.addEventListener("mouseover",(e) => {
        // console.dir(e.target);
        console.dir(hidden);
        hidden.textContent = 'pair - GO!'
    })
})

pairs.forEach((i) => {
    i.addEventListener("mouseout",(e) => {
        hidden.textContent = ''
    })
})