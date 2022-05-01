let count = 0
let saveEl = document.getElementById("save-el")
let countEl =  document.getElementById("count-el")
function increment() {
    count += 1
    setCounter(count)
}
function decrement() {
    if(count > 0) {
        count -= 1
    }
    setCounter(count)
}
function save() {
    let countStr = count + " - "
    saveEl.innerHTML += countStr
    countEl.innerHTML = 0
    count = 0
}
function reset() {
    count = 0
    setCounter(count)
}

function setCounter(count) {
    countEl.innerHTML = count
}


