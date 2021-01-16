import { useState } from 'react';

import { Button, Container, MyGraph } from './styles';

function Automato() {
  const [counter, setCounter] = useState(3);
  const [data, setData] = useState({
    nodes: [{ id: "q0" }, { id: "q1" }, { id: "q2" }],
    links: [
      { source: "q0", target: "q1", label: 'a' },
      { source: "q1", target: "q2", label: 'b' },
    ],
  });

  const myConfig = {
    nodeHighlightBehavior: true,
    linkHighlightBehavior: true,
    height: window.innerHeight,
    width: window.innerWidth,
    directed: true,
    maxZoom: 7,
    node: {
      color: '#6ec6ff',
      size: 120,
      highlightStrokeColor: '#2196f3',
      labelPosition: 'top'
    },
    link: {
      highlightColor: "lightblue",
      renderLabel: true
    },
  };

  const onClickNode = function(nodeId) {
    window.alert(`Clicked node ${nodeId}`);
  };

  const onClickLink = function(source, target) {
    window.alert(`Clicked link between ${source} and ${target}`);
  };

  function addState() {
    const newData = data;

    newData.nodes.push({ id: `q${counter}` });

    setCounter(counter + 1);

    setData(newData);
  }

  return (
    <Container>
      <Button onClick={addState}>+ Estado</Button>
      <MyGraph
        id="graph-id" // id is mandatory
        data={data}
        config={myConfig}
        onClickNode={onClickNode}
        onClickLink={onClickLink}
      />
    </Container>
  );
}

export default Automato;
