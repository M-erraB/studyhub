import Header from "../components/Header";
import DashboardCard from "../components/DashboardCard";
import Navbar from "../components/Navbar";
function Home() {
    return (
        <>
            <Header name="Mustafa" />
            <Navbar />

            <h2 className="dashboard-title">Dashboard</h2>

            <div className="dashboard-grid">
                <DashboardCard
                    icon="📚"
                    title="My Courses"
                    path="/courses"
                />

                <DashboardCard
                    icon="📝"
                    title="Assignments"
                    path="/assignments"
                />

                <DashboardCard
                    icon="📅"
                    title="Calendar"
                    path="/calendar"
                />

                <DashboardCard
                 icon="⏱"
                 title="Study Timer"
                path="/timer"
                />
            </div>
        </>
    );
}

export default Home;