import { Link } from "react-router-dom"
import { useContext } from "react"
import { AuthContext } from "../context/AuthContext"

function Navbar() {
  const { user, setUser } = useContext(AuthContext)

  function logout() {
    setUser(null)
  }

  return (
    <nav>
      <Link to="/">Listings</Link>

      {user ? (
        <>
            {" | "}
            <Link to="/create">Create</Link>
            {" | "}
            <span>{user.email}</span>
            {" | "}
            <button onClick={logout}>Logout</button>
        </>
        ) : (
        <>
          {" | "}
          <Link to="/login">Login</Link>
          {" | "}
          <Link to="/register">Register</Link>
        </>
      )}
    </nav>
  )
}

export default Navbar
