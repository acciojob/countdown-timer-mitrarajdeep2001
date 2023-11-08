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
  countDown.innerText = time
  let interval = setInterval(() => {
    countDown.innerText = --time
    if (time === 0) {
      clearInterval(interval)
    }
  }, timer.value * 10000)
})