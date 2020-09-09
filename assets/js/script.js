const $ = document.querySelector.bind(document)

var preloader = $("#preloader")

window.addEventListener("load", () => {
  setTimeout(() => {
    preloader.classList.add("hidden")

    setTimeout(() => {
      let body = $("body")
      body.removeChild(preloader)
    }, 400)
  }, 2000)
  
  var width = window.innerWidth

  if (width >= 1024) {
    cardAnimation()
  }
 })


var scrollOffset

window.addEventListener("load", () => {
  let nav = $(".navigation").offsetHeight

  if (window.innerWidth <= 610) {
    nav = 0
  }

  scrollOffset = {
    "info": $("#info").offsetTop - nav,
    "commands": $("#commands").offsetTop - nav
  }
})

const scrollWindow = (offset) => {
  switch (offset) {
    case "info":
      offset = scrollOffset.info
      break

    case "commands":
      offset = scrollOffset.commands
      break
  
    default:
      offset = 0
      break
  }
  
  window.scrollTo({
    top: offset,
    left: 0,
    behavior: "smooth"
  })
}

const cardAnimation = () => {
  var svg = document.querySelectorAll("svg")

  svg.forEach(item => {
    let id = item.getAttribute("id")
    if (id != "wave") {
      item.style.borderRadius = "10px"

      item.addEventListener("mousemove", e => {
        let mouseX = e.offsetX
        let mouseY = e.offsetY

        let svgW = item.clientWidth
        let svgH = item.clientHeight

        let max = 15

        let x = ((mouseX / svgW) * (max * 2) - ((max * 2) / 2)) * -1
        let y = ((mouseY / svgH) * (max * 2) - ((max * 2) / 2))

        item.style.transition = "all 0.2s"
        item.style.willChange = "transform"
        item.style.transform = `perspective(700px) rotateX(${y}deg) rotateY(${x}deg) scale3d(1, 1, 1)`
        item.style.boxShadow = `${y}px ${x * -1}px 20px rgba(0,0,0,0.4)`
      })
      
      item.addEventListener("mouseleave", () => {
        item.style.transition = "all 0.5s"
        item.style.transform = `perspective(700px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`
        item.style.boxShadow = `0 0 0 transparent`
      })
    }
  })
}