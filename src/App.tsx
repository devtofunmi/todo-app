import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TodoList from "./TodoList"
import LandingPage from "./pages/LandingPage";
import SignUp from "./authentication/SignUp";
import Login from "./authentication/Login";
import Tasks from "./pages/Tasks";
import Notes from "./pages/Notes";
import Reminder from "./pages/Reminder";
import Archive from "./pages/Archive";
import Bin from "./pages/Bin";

function App(){
  
  return (
     <div className="w-full min-h-[100vh] bg-[#181819] text-black">
        <Router>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/todolist" element={<TodoList />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
            <Route path="/task" element={<Tasks />} />
            <Route path="/note" element={<Notes />} />
            <Route path="/reminder" element={<Reminder />} />
            <Route path="/archive" element={<Archive />} />
            <Route path="/bin" element={<Bin />} />
          </Routes>
        </Router>
      </div>      
  )
}

export default App
