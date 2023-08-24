import { Dispatch, SetStateAction } from "react";
import { InputText } from "./style";

type Props = {
  conversor: string,
  setConversor: Dispatch<SetStateAction<string>> ,
}

export default function Input({ conversor, setConversor }: Props) {
  return (
    <InputText
      value={ conversor }
      onChangeText={ setConversor }
      keyboardType="numeric"
      placeholder="Digite o valor aqui..."
    />
  );
}