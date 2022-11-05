import { useState } from "react"
import { useDispatch } from "react-redux";
import { login } from "redux/auth/authOperations";

export const LoginForm = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const dispatch = useDispatch();

    const handleChange = ({ target: { name, value } }) => {
        switch (name) {
            case "email":
                setEmail(value);
                break;
            case "password":
                setPassword(value);
                break;
            default:
                break;
        }
    }

    const handleSubmit = evt => {
        evt.preventDefault();
        dispatch(login({ email, password }));
        setEmail("");
        setPassword("");
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>
                <span>Email</span>
                <input
                    type="email"
                    name="email"
                    value={email}
                    onChange={handleChange}
                    required
                    placeholder="example@example.com"
                />
            </label>
            <label>
                <span>Password</span>
                <input
                    type="password"
                    name="password"
                    value={password}
                    onChange={handleChange}
                    required
                    placeholder="Your password"
                />
            </label>
            <button>Login</button>
        </form>
    )
}