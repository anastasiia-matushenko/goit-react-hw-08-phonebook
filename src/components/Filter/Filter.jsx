import PropTypes from "prop-types";
import { Input, Label, Span } from "./Filter.styled";

export const Filter = ({ value, onChange }) => {
    return (
        <>
            <Label>
                <Span>Find contacts by name</Span>
                <Input
                    value={value} type="text" onChange={onChange}
                />
            </Label>
        </>
    )
};

Filter.propTypes = {
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
};