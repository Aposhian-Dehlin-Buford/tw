import React from "react"
import useInput from "../hooks/useInput"
import { useHistory } from "react-router-dom"
import { setUser } from "../redux/authReducer"
import { connect, useDispatch } from "react-redux"
import axios from "axios"

const Login = ({ setUser }) => {
  const [{ email, password }, { setInput, resetInputs }] = useInput({
    email: "",
    password: "",
  })
  const { push } = useHistory()
  //   const dispatch = useDispatch()
  const login = (e) => {
    e.preventDefault()
    axios.post("/auth/login", { email, password }).then((results) => {
      setUser(results.data)
      console.log(email, password)
      resetInputs()
      push("/dashboard")
    })
  }
  return (
    <div>
      <div>Login</div>
      <form onSubmit={login}>
        <input
          name="email"
          value={email}
          placeholder="enter email"
          onChange={setInput}
        />
        <input
          name="password"
          value={password}
          placeholder="enter password"
          onChange={setInput}
        />
        <button>Login</button>
      </form>
    </div>
  )
}

export default connect(null, { setUser })(Login)
