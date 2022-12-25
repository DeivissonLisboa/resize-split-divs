const root = document.querySelector(":root")
const handle = document.querySelector(".handle")
let mdown = false

handle.addEventListener("mousedown", (e) => {
  mdown = true
})
document.addEventListener("mouseup", (e) => {
  mdown = false
})
document.addEventListener("mousemove", (e) => {
  if (mdown) {
    const size = (e.clientX * 100) / window.innerWidth
    if (size <= 100) {
      root.style.setProperty("--left-size", `${size}%`)
    }
  }
})
