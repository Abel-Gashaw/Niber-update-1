import { useState } from "react";
import "./Login.css";

function Login() {
  const [isLogin, setIsLogin] = useState(true);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isLogin) {
      // Call login API
    } else {
      // Call register API
    }
  };

  return (
    <div className="login-container ">
      <h2>{isLogin ? "Login" : "Register"}</h2>

      <form onSubmit={handleSubmit} className="login-form">
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit">{isLogin ? "Login" : "Register"}</button>

        {isLogin && (
          <p>
            Don't have an account?{" "}
            <button onClick={() => setIsLogin(false)}>Register</button>
          </p>
        )}

        {!isLogin && (
          <p>
            Already registered?{" "}
            <button onClick={() => setIsLogin(true)}>Login</button>
          </p>
        )}
      </form>
    </div>
  );
}

export default Login;
