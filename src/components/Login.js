// Login.js
import { Link } from 'react-router-dom';
import './App.css';
function Login() {
  return (
    <div className="form-container">
      <h2>Login Page</h2>
      <form>
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button type="submit">Login</button>
      </form>
      <p>
        Don’t have an account? <Link to="/signup">Signup</Link>
      </p>
    </div>
  );
}
export default Login;


