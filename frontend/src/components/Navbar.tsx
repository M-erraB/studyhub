import { NavLink } from "react-router-dom";

function Navbar() {
    return (
        <nav className="navbar">
            <NavLink
                to="/"
                className={({ isActive }) => (isActive ? "active" : "")}
            >
                Home
            </NavLink>

            <NavLink
                to="/courses"
                className={({ isActive }) => (isActive ? "active" : "")}
            >
                Courses
            </NavLink>

            <NavLink
                to="/assignments"
                className={({ isActive }) => (isActive ? "active" : "")}
            >
                Assignments
            </NavLink>

            <NavLink
                to="/calendar"
                className={({ isActive }) => (isActive ? "active" : "")}
            >
                Calendar
            </NavLink>

            <NavLink
                to="/timer"
                className={({ isActive }) => (isActive ? "active" : "")}
            >
                Study Timer
            </NavLink>
        </nav>
    );
}

export default Navbar;