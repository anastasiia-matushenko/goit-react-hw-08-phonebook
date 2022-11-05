import { useSelector } from "react-redux"
import { selectToken } from "redux/auth/authSelectors"
import { UserMenu } from "components/UserMenu/UserMenu";
import { AuthNav } from "components/AuthNav/AuthNav";
import { Navigation } from "components/Navigation/Navigation";

export const AppBar = () => {
    const token = useSelector(selectToken);

    return (
        <header>
            <Navigation />
            {token ? <UserMenu /> : <AuthNav />}
        </header>
    )
}