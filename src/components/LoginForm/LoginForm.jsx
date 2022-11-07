import { useState } from "react"
import { useDispatch } from "react-redux";
import { login } from "redux/auth/authOperations";
import { Input, Button } from '@chakra-ui/react'
import { Form, Label, Span, TitleForm } from "./LoginForm.styled";

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
        <Form onSubmit={handleSubmit}>
            <TitleForm>Log In</TitleForm>
            <Label>
                <Span>Email</Span>
                <Input
                    variant='flushed'
                    autoComplete="off"
                    borderColor="gray"
                    size='md'
                    type="email"
                    name="email"
                    value={email}
                    onChange={handleChange}
                    required
                    placeholder="example@example.com"
                />
            </Label>
            <Label>
                <Span>Password</Span>
                <Input
                    variant='flushed'
                    autoComplete="off"
                    borderColor="gray"
                    size='md'
                    type="password"
                    name="password"
                    value={password}
                    onChange={handleChange}
                    required
                    placeholder="Your password"
                />
            </Label>
            <Button colorScheme='teal' size='md' display="flex" width='150px' mt="25px" mx="auto" type="submit">Login</Button>
        </Form>
    )
}