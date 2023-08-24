import { ButtonOk, TextButton } from "./style";

export default function Button({ eventClick }: { eventClick: any }) {
  return (
    <ButtonOk onPress={ eventClick }>
      <TextButton>OK</TextButton>
    </ButtonOk>
  );
}