import { useDispatch } from "react-redux"
import { logout } from "redux/auth/authOperations";
import { Box } from "./UserMenu.styled";

export const UserMenu = () => {
    const dispatch = useDispatch();

    return (
        <Box>
            <p>mango@mail.com</p>
            <button type="button" onClick={() => dispatch(logout())}>Log Out</button>
        </Box>
    )
}