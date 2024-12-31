import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./Components/LoginPage"; 
import SignupPage from "./Components/SignupPage";
import Dashboard from "./Components/Dashboard";
import RegisterStudentForm from "./Components/RegisterStudentForm";
import CreateHostelForm from "./Components/CreateHostelForm";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/register" element={<RegisterStudentForm/>} />
        <Route path="/create-hostel" element={<CreateHostelForm/>}/>
      </Routes>
    </Router>
  );
}

export default App;
