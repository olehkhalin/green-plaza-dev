import React from "react"

const Footer = () => (
  <footer className="footer">
    <div className="container">
      <div className="row v-center space-around">
        © {new Date().getFullYear()} Green Plaza, Все права защищены
      </div>
    </div>
  </footer>
)

export default Footer
