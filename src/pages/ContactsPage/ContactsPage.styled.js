import styled from 'styled-components';

const Title = styled.h2`
  margin-top: 15px;
  margin-bottom: 10px;
  text-align: center;
  font-weight: 600;
  font-size: 24px;
  line-height: 1.17;
  letter-spacing: 0.01em;
  color: #1f3349;
`;

const Message = styled.p`
  color: red;
  letter-spacing: 0.02em;
`;

const Container = styled.div`
  display: flex;
  gap: 20px;
  width: 1200px;
  min-height: 360px;
  margin: 0 auto;
  padding: 0 20px;
`;

const BoxForm = styled.div`
  width: 400px;
  padding: 0 20px;
  background-color: #e6eeff;
  border-radius: 10px;
`;

const BoxContacts = styled.div`
  width: calc(100% - 420px);
  padding: 0 20px;
  background-color: #e6eeff;
  border-radius: 10px;
`;

export { Title, Message, Container, BoxForm, BoxContacts };
