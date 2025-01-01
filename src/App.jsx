import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./Components/LoginPage"; 
import SignupPage from "./Components/SignupPage";
import Dashboard from "./Components/Dashboard";
import RegisterStudentForm from "./Components/RegisterStudentForm";
import CreateHostelForm from "./Components/CreateHostelForm";
import Home from "./student view/Home";
import MaintenanceRequests from "./student view/MaintenanceRequests";
import MessScheduleFeedback from "./student view/MessScheduleFeedback";
import RequestRoomChange from "./student view/RequestRoomChange";
import RulesRegulations from "./student view/RulesRegulations";
//import Contacts from "./student view/Contacts";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/register" element={<RegisterStudentForm/>} />
        <Route path="/create-hostel" element={<CreateHostelForm/>}/>
        <Route path="/home" element={<Home />} />
        <Route path="/maintenance-requests" element={<MaintenanceRequests/>} />
        <Route path="/mess-schedule-feedback" element={<MessScheduleFeedback/>}/>
        <Route path="/request-room-change" element={<RequestRoomChange/>}/>
        <Route path="/rules-and-regulations" element={<RulesRegulations/>} />
        {/* <Route path="/contacts" element={<Contacts/>}/> */}
      </Routes>
    </Router>
  );
}

export default App;
