import styled from 'styled-components';

const Button = styled.button`
  margin-left: 10px;
`;

const Item = styled.li`
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  align-content: center;
`;

const Name = styled.span`
  font-weight: 600;
  font-size: 16px;
  line-height: 18px;
  letter-spacing: 0.03em;

  color: #1f3349;
`;

const Phone = styled.span`
  margin-left: 8px;
  font-weight: 400;
  font-size: 16px;
  line-height: 18px;
  letter-spacing: 0.03em;

  color: #1f3349;
`;

export { Button, Item, Name, Phone };
