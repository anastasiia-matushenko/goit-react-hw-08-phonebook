import { useState } from "react"
import { useDispatch } from "react-redux";
import { register } from "redux/auth/authOperations";
import { Button } from '@chakra-ui/react'
import { Input } from '@chakra-ui/react'
import { Form, Label, Span, TitleForm } from "./RegisterForm.styled";

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
        <Form onSubmit={handleSubmit}>
            <TitleForm>Registration</TitleForm>
            <Label>
                <Span>Name</Span>
                <Input
                    variant='flushed'
                    size='md'
                    type="text"
                    name="name"
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    required
                    value={name}
                    onChange={handleChange}
                    placeholder="Enter name"

                />
            </Label>
            <Label>
                <Span>Email</Span>
                <Input
                    variant='flushed'
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
                    type="password"
                    name="password"
                    value={password}
                    onChange={handleChange}
                    required
                    placeholder="Your password"
                />
            </Label>
            <Button colorScheme='teal' size='md' display="flex" width='150px' mt="25px" mx="auto">Register</Button>
        </Form>
    )
}