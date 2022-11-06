import styled from 'styled-components';

const Form = styled.form`
  width: 440px;
  margin: 0 auto;
  padding: 20px 20px;
  box-shadow: 0px 1px 4px rgba(126, 147, 255, 0.2);
  border-radius: 8px;
  /* background-color: aliceblue; */
  background-color: #e0e0eb;
`;

const TitleForm = styled.h2`
  margin-bottom: 15px;
  text-align: center;
  font-size: 20px;
  text-transform: uppercase;
  letter-spacing: 0.6rem;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 20px;
`;

const Span = styled.span`
  display: block;
  margin-bottom: 4px;
`;

export { Form, Label, Span, TitleForm };
