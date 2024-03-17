import React, { useEffect, useState } from "react";

export default function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [title, setTitle] = useState('Welcome')

  const buttonDisabled = !email || password.length < 6

  useEffect(() => {
    // setEmail(input.target.value)
    setTitle('Welcome, '.concat(email))
    console.log('use effect: ', title)
  }, [email])

  const login = ({ email, password }) => {
    const delay = (0.7 + Math.random() * 2) * 1000;
    return new Promise((resolve, reject) => {
      setTimeout(function () {
        if (password === "password123" && !!email) {
          resolve();
        } else {
          reject(new Error("Invalid email or password"));
        }
      }, delay);
    });
  };

  const handleLogin = async () => {
    setErrorMessage('')
    console.log(email, password)
    try {
      await login({ email, password });
      alert('Login successful')
    } catch(error) {
      console.error(error);
      setErrorMessage(error.message)
    }
  };

  const updateEmail = (input) => {
    console.log('input: ', input.target.value)
    setEmail(input.target.value)
    console.log('email: ', email)
    // setTitle('Welcome, '.concat(email))
  }

  return (
    <div>
      <h1>{title}</h1>
      <div className="emailRow">
        <label>Email</label>
        <input onChange={(e) => updateEmail(e)}></input>
      </div>
      <div className="passwordRow">
        <label>Password</label>
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        ></input>
      </div>
      <div className="errorMessage">{errorMessage}</div>
      <div className="loginButton">
        <button disabled={buttonDisabled} onClick={handleLogin}>Login</button>
      </div>
    </div>
  );
}
