let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")

let count = 0

// console.log(countEl)
// console.log(saveEl)

function increment(){
    // count = count + 1
    count += 1
    countEl.innerText = count
    console.log(count)
    // console.log("clicked")
}

function save() {
    let countStr = count + " - "
    // saveEl.innerText += countStr
    saveEl.textContent += countStr
    countEl.textContent = 0
    // console.log(count)
}
