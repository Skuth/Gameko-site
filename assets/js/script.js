const $ = document.querySelector.bind(document)

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