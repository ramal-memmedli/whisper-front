import { Route, Routes } from "react-router-dom"
import Layout from "./components/Layout"
import LoginRegister from "./pages/LoginRegister"

function App() {
  return (
    <Routes>
      <Route path="/" element={
        <div className="w-screen h-screen flex bg-white dark:bg-black">
          <Layout />
        </div>
      } />
      <Route path="/account" element={<LoginRegister/>}/>
    </Routes>
  )
}

export default App
