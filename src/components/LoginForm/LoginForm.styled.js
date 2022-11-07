import styled from 'styled-components';

const Form = styled.form`
  width: 440px;
  margin: 0 auto;
  padding: 20px 20px;
  border-radius: 10px;
  background: rgb(224, 224, 235)
    radial-gradient(
      circle at 0 0,
      rgba(255, 255, 255, 0.65),
      rgba(255, 255, 255, 0.35)
    );
  box-shadow: inset rgba(0, 0, 0, 0.5) -3px -3px 8px,
    inset rgba(255, 255, 255, 0.9) 3px 3px 8px,
    rgba(0, 0, 0, 0.8) 3px 3px 8px -3px;
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
