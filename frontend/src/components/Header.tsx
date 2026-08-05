type HeaderProps = {
    name: string;
};
function Header({name} : HeaderProps) {
    return (
        <header>
            <h1>StudyHub</h1>
            <h2>Welcome, {name}!</h2>
        </header>
    )
}
export default Header;