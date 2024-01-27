import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TodoList from "./TodoList"
import LandingPage from "./pages/LandingPage";
import SignUp from "./authentication/SignUp";
import Login from "./authentication/Login";

function App(){
  
  return (
     <div className="w-full min-h-[100vh] bg-[#181819] text-black">
        <Router>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/todolist" element={<TodoList />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </Router>
      </div>      
  )
}

export default App
