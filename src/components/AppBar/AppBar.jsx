import { useSelector } from "react-redux"
import { selectToken } from "redux/auth/authSelectors"
import { UserMenu } from "components/UserMenu/UserMenu";
import { AuthNav } from "components/AuthNav/AuthNav";
import { Navigation } from "components/Navigation/Navigation";
import { Container, Header } from "./AppBar.styled";

export const AppBar = () => {
    const token = useSelector(selectToken);

    return (
        <Header>
            <Container>
                <Navigation />
                {token ? <UserMenu /> : <AuthNav />}
            </Container>
        </Header>
    )
}