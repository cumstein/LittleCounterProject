let count = 0
function increment() {
    count = count + 1
    document.getElementById("count-el").innerHTML = count
}
function decrement() {
    if(count < 1) {
        count = 0
    } else {
        count = count - 1
    }
    document.getElementById("count-el").innerHTML = count
}
function reset() {
    count = 0
    document.getElementById("count-el").innerHTML = count
}
