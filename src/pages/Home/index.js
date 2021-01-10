import React from 'react';
import {useHistory} from 'react-router-dom';

import { Button, Card, Container } from './styles';

function Home() {
  const history = useHistory();

  return (
    <Container>
      <Card>
        <Button onClick={() => history.push('/regex')}>
          Expressões Regulares (ER)
        </Button>
      </Card>
    </Container>
  );
}

export default Home;
