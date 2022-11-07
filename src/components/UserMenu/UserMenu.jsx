import { useDispatch, useSelector } from "react-redux"
import { logout } from "redux/auth/authOperations";
import { selectEmail } from "redux/auth/authSelectors";
import { Box } from "./UserMenu.styled";

export const UserMenu = () => {
    const email = useSelector(selectEmail)
    const dispatch = useDispatch();

    return (
        <Box>
            <p>{email}</p>
            <button type="button" onClick={() => dispatch(logout())}>Log Out</button>
        </Box>
    )
}