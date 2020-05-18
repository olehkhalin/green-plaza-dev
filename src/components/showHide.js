export const enableScroll = () => {
  const scrollPosition = parseInt(document.getElementsByTagName("body")[0].style.top)
  document.getElementsByTagName("html")[0].style = ""
  document.getElementsByTagName("body")[0].style.removeProperty("overflow")
  document.getElementsByTagName("body")[0].style.removeProperty("position")
  document.getElementsByTagName("body")[0].style.removeProperty("top")
  document.getElementsByTagName("body")[0].style.removeProperty("width")
  window.scrollTo(0, -scrollPosition)
}

export const disableScroll = () => {
  const scrollPosition = window.pageYOffset
  document.getElementsByTagName("html")[0].style.overflow = "hidden"
  document.getElementsByTagName("body")[0].style.overflow = "hidden"
  document.getElementsByTagName("body")[0].style.position = "fixed"
  document.getElementsByTagName("body")[0].style.top = `-${scrollPosition}px`
  document.getElementsByTagName("body")[0].style.width = "100%"
}
