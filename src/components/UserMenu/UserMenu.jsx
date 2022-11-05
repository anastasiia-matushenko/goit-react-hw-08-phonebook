import { useDispatch } from "react-redux"
import { logout } from "redux/auth/authOperations";

export const UserMenu = () => {
    const dispatch = useDispatch();

    return (
        <div>
            <p>mango@mail.com</p>
            <button type="button" onClick={() => dispatch(logout())}>Log Out</button>
        </div>
    )
}