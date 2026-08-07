import Header from "./components/Header";
import DashboardCard from "./components/DashboardCard";
import "./App.css";
import CourseList from "./components/CourseList";
function App() {
  return (
    <div>
      <Header name = "Mustafa"/>

      <h2 className="dashboard-title">Dashboard</h2>    
    
    <div className="dashboard-grid">
      <DashboardCard
        title="My Courses"
        icon="📚"
      />

      <DashboardCard
        title="Assignments"
        icon="📝"
      />

      <DashboardCard
        title="Calendar"
        icon="📅"
      />

      <DashboardCard
        title="Study Timer"
        icon="⏱️"
        />
      </div>
      <CourseList
      />
    </div>
    
  );
}
export default App;