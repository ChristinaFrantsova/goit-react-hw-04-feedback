import styled from 'styled-components';

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 15px;
`;

export const Text = styled.span`
  font-size: 16px;
  font-family: Roboto, Arial, sans-serif;
  background-color: #2aa5a0;
  background-image: linear-gradient(90deg, #e3535d, #2aa5a0);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;
