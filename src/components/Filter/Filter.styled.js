import styled from 'styled-components';

const Input = styled.input`
  display: block;
  width: 100%;
  padding: 11px 16px;
  outline: none;
  background: #f4f4f4;
  border: 1px solid #c5c5c5;
  border-radius: 6px;

  &:focus {
    border: 1px solid #4cc6f5;
    background-color: #ffffff;
  }
`;

const Label = styled.label`
  display: block;
  padding: 15px 0;
`;

const Span = styled.span`
  display: block;
  margin-bottom: 8px;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  color: #7f8e9d;
`;

export { Input, Label, Span };
