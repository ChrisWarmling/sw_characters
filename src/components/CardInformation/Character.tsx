import { CardInformation } from ".";
import { useCharacters } from "../../hooks/useCharcter";
import { Erro } from "../Erro";
import { Information } from "../Information";
import { Section } from "./style";

export function Character() {
  const { character, filmsCharacter, openModal } = useCharacters()
  return (
    <CardInformation title={character?.name ?? ''} nameButton="Change character" onClickButton={openModal}>
      <Section>
        {
          character ?
            <>
              <div>
                <Information info="Gender" value={character?.gender} />
                <Information info="Birth year" value={character?.birth_year} />
                <Information info="Eye color" value={character?.eye_color} />
                <Information info="Height" value={character?.height} />
                <Information info="Mass" value={character?.mass} />
              </div>
              <div>
                <Information info="Films" />
                <section>
                  {
                    filmsCharacter?.map(({title}) => (
                      <strong>{title}</strong>
                    ))
                  }
                </section>
              </div>
            </>
            :
            <Erro />
        }
      </Section>
    </CardInformation>
  )
}