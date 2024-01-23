import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import UpdateTodo from "./pages/UpdateTodo"
import LayOut from "./components/LayOut"

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<LayOut />}>
        <Route index element={<Home />} />
        <Route path="/update/:id" element={<UpdateTodo />} />
      </Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App
