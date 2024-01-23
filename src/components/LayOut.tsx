import { Outlet } from "react-router-dom"
import Header from "./Header"
import Footer from "./Footer"

const LayOut = () => {
  return (
    <main className="min-h-screen max-w-7xl mx-auto">
        <Header />
        <Outlet />
        <Footer />
    </main>
  )
}

export default LayOut