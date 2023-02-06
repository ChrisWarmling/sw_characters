import { useCharacters } from "../../hooks/useCharcter";
import { Card } from "../Card";

export function CardsHome() {

  const {openModal} = useCharacters()

  return (
    <>
      <Card height={10} width={15} title='Characters' onClick={openModal} />
      <Card height={10} width={15} title='Films' />
    </>
  )
}