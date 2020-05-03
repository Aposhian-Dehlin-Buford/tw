import React from "react"
import { useHistory } from "react-router-dom"

const Header = (props) => {
  const { push } = useHistory()
  return (
    <div>
      <button onClick={() => push("/")}>Landing Page</button>
      <button onClick={() => push("/login")}>Login</button>
      <button onClick={() => push("/register")}>Register</button>
      <button onClick={() => push("/dashboard")}>Dashboard</button>
    </div>
  )
}

export default Header
