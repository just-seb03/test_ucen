import { Link } from 'react-router-dom'

export default function LoginButton() {
  return (
    <Link
      to="/login"
      id="login-btn"
      className="btn-login"
      aria-label="Login"
    >
      Login
    </Link>
  )
}
