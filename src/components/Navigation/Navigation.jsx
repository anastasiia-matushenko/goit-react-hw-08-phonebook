import { useSelector } from "react-redux";
import { selectToken } from "redux/auth/authSelectors";
import { Link, List } from "./Navigation.styled";

export const Navigation = () => {
    const token = useSelector(selectToken);

    return (
        <nav>
            <List>
                <li>
                    <Link to='/' end>Home</Link>
                </li>
                {token && <li>
                    <Link to='/contacts'>Contacts</Link>
                </li>}
            </List>
        </nav>
    )
}