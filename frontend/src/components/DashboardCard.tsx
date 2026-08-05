type DashboardCardProps = {
    title: string;
    icon: string;
}
function DashboardCard({ title, icon }: DashboardCardProps) {
    return (
        <div className="dashboard-card">
            <h2>
                {icon} {title}
            </h2>
        </div>
    );
}
export default DashboardCard;