import React from "react"
import useInput from "../hooks/useInput"
import { useHistory } from "react-router-dom"
import { setUser } from "../redux/authReducer"
import { connect, useDispatch } from "react-redux"
import axios from "axios"

const Register = (props) => {
  const [{ email, username, password }, { setInput, resetInputs }] = useInput({
    email: "",
    username: "",
    password: "",
  })
  const { push } = useHistory()
  //   const dispatch = useDispatch()
  const register = (e) => {
    e.preventDefault()
    axios
      .post("/auth/register", { email, username, password })
      .then((results) => {
        setUser(results.data)
        console.log(email, username, password)
        resetInputs()
        push("/dashboard")
      })
  }
  return (
    <div>
      <div>Register</div>
      <form onSubmit={register}>
        <input
          name="email"
          value={email}
          placeholder="enter email"
          onChange={setInput}
        />
        <input
          name="username"
          value={username}
          placeholder="enter username"
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

export default Register
