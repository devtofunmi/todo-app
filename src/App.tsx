import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TodoList from "./TodoList"
import LandingPage from "./pages/LandingPage";

function App(){
  
  return (
     <div className="w-full min-h-[100vh] bg-[#181819] text-black">
        <Router>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/todolist" element={<TodoList />} />
          </Routes>
        </Router>
      </div>      
  )
}

export default App
