
import { Routes,Route } from "react-router-dom"
import Register from "./page/Register"
import Genre from "./page/Genre"
import Browse from "./page/Browse"
import Movies from "./page/Movies"

function App() {


  return (
    <>
    <Routes>
      <Route path="/register" element={<Register/>}/>
      <Route path="/" element={<Genre/>}/>
      <Route path="/browse" element={<Browse/>}/>
      <Route path="/movies" element={<Movies/>} />
    </Routes>
    </>
  )
}

export default App
