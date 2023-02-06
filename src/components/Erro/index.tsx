import { ErrorMessage } from "./styles";

export function Erro() {
  return (
    <ErrorMessage>
      <img src="/images/erro.png" alt='Error message'/>
      <aside>
      <h1>NOOOOOO!!</h1>
      <strong>Character not found or not selected</strong>
      </aside>
    </ErrorMessage>
  )
}