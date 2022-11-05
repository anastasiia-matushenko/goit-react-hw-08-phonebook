import { useState } from "react"
import { useDispatch } from "react-redux";
import { register } from "redux/auth/authOperations";

export const RegisterForm = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const dispatch = useDispatch();

    const handleChange = ({ target: { name, value } }) => {
        switch (name) {
            case "name":
                setName(value);
                break;
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
        dispatch(register({ name, email, password }));
        setName("");
        setEmail("");
        setPassword("");
    }


    return (
        <form onSubmit={handleSubmit}>
            <label>
                <span>Name</span>
                <input
                    type="text"
                    name="name"
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    required
                    value={name}
                    onChange={handleChange}
                    placeholder="Enter name"

                />
            </label>
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
            <button>Register</button>
        </form>
    )
}