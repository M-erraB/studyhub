import { useNavigate } from "react-router-dom";

type DashboardCardProps = {
    title: string;
    icon: string;
    path: string;
};

function DashboardCard({ title, icon, path }: DashboardCardProps) {
    const navigate = useNavigate();

    return (
        <div
            className="dashboard-card"
            onClick={() => navigate(path)}
        >
            <h2>
                {icon} {title}
            </h2>
        </div>
    );
}

export default DashboardCard;