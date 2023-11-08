// Your script here.
const btn = document.querySelector("#btn")
const countDown = document.querySelector("#countDown")
const endTime = document.querySelector("#endTime")
btn.addEventListener("click", () => { 
  const timer = document.querySelector("input")
  const currentTime = new Date()
  const futureTime = new Date(currentTime.getTime() + timer.value * 60000)
  endTime.innerText = futureTime.toLocaleTimeString()
  let time = timer.value
  setInterval(() => {
    countDown.innerText = --time
  }, timer.value * 10000)
})