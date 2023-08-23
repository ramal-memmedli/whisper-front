import { Route, Routes } from "react-router-dom"
import LoginRegister from "./pages/LoginRegister"
import Chat from "./pages/Chat"

function App() {
  return (
    <Routes>
      <Route path="/" element={
        <div className="w-screen h-screen flex bg-white dark:bg-black">
          <Chat />
        </div>
      } />
      <Route path="/account" element={<LoginRegister/>}/>
    </Routes>
  )
}

export default App
