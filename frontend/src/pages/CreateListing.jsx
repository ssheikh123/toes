import { useState, useContext, useEffect } from "react"
import { AuthContext } from "../context/AuthContext"
import { useNavigate } from "react-router-dom"

function CreateListing() {
  const [title, setTitle] = useState("")
  const [price, setPrice] = useState("")
  const { user } = useContext(AuthContext)
  const navigate = useNavigate()

  useEffect(() => {
    if (!user) {
      navigate("/login")
    }
  }, [user, navigate])

  function submit() {
    navigate("/")
  }

  return (
    <div>
      <h2>Create Listing</h2>

      <input
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <input
        placeholder="Price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />

      <button onClick={submit}>Post</button>
    </div>
  )
}

export default CreateListing
