let count = 0
function increment() {
    count = count + 1
    setCounter(count)
}
function decrement() {
    if(count > 0) {
        count = count - 1
    }
    setCounter(count)
}
function reset() {
    count = 0
    setCounter(count)
}

function setCounter(count) {
    document.getElementById("count-el").innerHTML = count
}
