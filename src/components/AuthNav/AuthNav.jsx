import { Link, List } from "./AuthNav.styled"


export const AuthNav = () => {
    return (
        <List>
            <li>
                <Link to="/register">Register</Link>
            </li>
            <li>
                <Link to="/login">Log In</Link>
            </li>
        </List>
    )
}