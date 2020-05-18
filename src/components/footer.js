import React from "react"

const Footer = ({lang}) => {
  let text
  if (lang !== "kk") {
    text = `Все права защищены`
  } else {
    text = `Все права защищены`
  }

  return(
    <footer className="footer">
      <div className="container">
        <div className="row v-center space-around">
          © {new Date().getFullYear()} Green Plaza, {text}
        </div>
      </div>
    </footer>
  )
}

export default Footer
