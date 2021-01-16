import styled from 'styled-components';

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
  width: 460px;
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

export const Input = styled.input`
  border: 1px solid ${props => {
    switch (props.valid) {
      case true:
        return '#64dd17';

      case false:
        return '#ff3d00';

      default:
        return '#212121';
    }
  }};
  height: 40px;
  margin-bottom: 10px;
  padding-left: 10px;
  width: 100%;
`;

export const Text = styled.span`
  font-size: 14px;
`;

export const Title = styled.span`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 20px;
`;
