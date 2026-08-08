import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Courses from "./pages/Courses";
import Assignments from "./pages/Assignments";
import Calendar from "./pages/Calendar";
import StudyTimer from "./pages/StudyTimer";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/assignments" element={<Assignments />} />
            <Route path="/calendar" element={<Calendar />} />
            <Route path="/timer" element={<StudyTimer />} />
        </Routes>
    );
}

export default App;