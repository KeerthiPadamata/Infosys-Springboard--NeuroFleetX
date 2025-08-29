// Signup.js
import './App.css';

function Signup() {
  return (
    <div className="form-container">
      <h2>Signup Page</h2>
      <form>
        <input type="text" placeholder="Name" required />
        <input type="email" placeholder="Email" required />
        <input type="password" placeholder="Password" required />
        <button type="submit">Signup</button>
      </form>
    </div>
  );
}
export default Signup;
