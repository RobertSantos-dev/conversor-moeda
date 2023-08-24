import { Dispatch, SetStateAction, useState } from "react";

import {
  Container,
  ContainerInteraction,
  ResultText,
  Text,
  TextTwo
} from "./style";

import Header from '../../components/Header';
import Input from '../../components/Input';
import Button from "../../components/Button";


const eventClick = (valueConv: string, setResult: Dispatch<SetStateAction<number>>) => {
  setResult(Number(valueConv) * 4.94);
}

export default function Home() {
  const [valueConv, setValueConv] = useState('');
  const [result, setResult] = useState(0);

  return (
    <Container>
      <Header />
      <Text>Cotação do Dolar: R$ 4.94</Text>
      <ContainerInteraction>
        <Input conversor={ valueConv } setConversor={ setValueConv } />
        <Button eventClick={ () => eventClick(valueConv, setResult) } />
      </ContainerInteraction>
      <TextTwo>Valor Convertido</TextTwo>
      <ResultText>
        R$
        {' '}
        { result.toFixed(2) }
      </ResultText>
    </Container>
  );
}