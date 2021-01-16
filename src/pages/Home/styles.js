import styled from 'styled-components';

export const Button = styled.button`
  cursor: pointer;
  background: #fff;
  border: 1px solid #bdbdbd;
  border-radius: 5px;
  height: 40px;
  margin-bottom: 10px;
  transition: ease all .3s;
  width: 200px;

  :hover {
    border-color: #2962ff;
    background: #2962ff;
    color: #fff;
  }
`;

export const Card = styled.div`
  align-items: center;
  background: #fff;
  border-radius: 5px;
  box-shadow: 0 12.5px 10px rgba(0, 0, 0, 0.035),
    0 100px 80px rgba(0, 0, 0, 0.07);
  display: flex;
  flex-direction: column;
  font-size: 16px;
  justify-content: center;
  margin-top: 48px;
  min-height: 200px;
  padding: 24px 32px;
  width: 360px;
`;

export const Container = styled.div`
  align-items: center;
  background: #fafafa;
  display: flex;
  height: 100vh;
  flex-direction: column;
  padding: 48px;
  width: 100%;
`;
