import { useEffect, useState } from 'react';

import { Card, Container, Input, Title } from './styles';

function Regex() {
  const [isOneValid, setIsOneValid] = useState(null);
  const [isTwoValid, setIsTwoValid] = useState(null);
  const [regexString, setRegexString] = useState('');
  const [testOne, setTestOne] = useState('');
  const [testTwo, setTestTwo] = useState('');

  useEffect(() => {
    if (regexString !== '') {
      const regex = new RegExp(regexString);

      const isTestOneValid = regex.test(testOne);

      if (isTestOneValid) {
        setIsOneValid(true);
      } else {
        setIsOneValid(false);
      }

      const isTestTwoValid = regex.test(testTwo);

      if (isTestTwoValid) {
        setIsTwoValid(true);
      } else {
        setIsTwoValid(false);
      }

    } else {
      setIsOneValid(null);
      setIsTwoValid(null);
    }
  }, [regexString, testOne, testTwo]);

  return (
    <Container>
      <Card>
        <Title>Teste de Expressões Regulares (REGEXP)</Title>
        <Input
          onChange={e => setRegexString(e.target.value)}
          placeholder="Expressão Regular"
          type="text"
        />
        <Input
          onChange={e => setTestOne(e.target.value)}
          placeholder="Teste 1"
          type="text"
          valid={isOneValid}
        />
        <Input
          onChange={e => setTestTwo(e.target.value)}
          placeholder="Teste 2"
          type="text"
          valid={isTwoValid}
        />
      </Card>
    </Container>
  );
}

export default Regex;
