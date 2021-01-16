import styled from 'styled-components';
import { Graph } from 'react-d3-graph';

export const Button = styled.button`
  cursor: pointer;
  background: #fff;
  border: 1px solid #bdbdbd;
  border-radius: 5px;
  bottom: 40px;
  right: 40px;
  height: 40px;
  margin-bottom: 10px;
  position: absolute;
  transition: ease all .3s;
  width: 200px;

  :hover {
    border-color: #2962ff;
    background: #2962ff;
    color: #fff;
  }
`;

export const Container = styled.div`
  height: 100vh;
  overflow: hidden;
  width: auto;
`;

export const MyGraph = styled(Graph)`
  height: 100%;
  width: 100%;
`;
