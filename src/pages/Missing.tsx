import { Link } from "react-router-dom"


const Missing = () => {
  return (
    <div>
        <h1 className="text-2xl font-bold">Page not found</h1>
        <Link to='/'>To Home page</Link>
    </div>
  )
}

export default Missing