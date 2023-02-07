import { CardInformation } from ".";
import { useCharacters } from "../../hooks/useCharcter";
import { romanNumerals } from "../../utils/romanNumerals";
import { Erro } from "../Erro";
import { Information } from "../Information";
import { Loading } from "../Loading";
import { Section } from "./style";

export function Character() {
  const { character, filmsCharacter, isLoadingFilms, openModal } = useCharacters()
  return (
    <CardInformation title={character?.name ?? ''} nameButton="Change character" onClickButton={openModal}>
      <Section>
        {
          character ?
            <>
              <article>
                <Information info="Gender" value={character?.gender} />
                <Information info="Birth year" value={character?.birth_year} />
                <Information info="Eye color" value={character?.eye_color} />
                <Information info="Height" value={character?.height} />
                <Information info="Mass" value={character?.mass} />
              </article>
              <article>
                <Information info="Films" />
                {
                  isLoadingFilms ?
                    <Loading />
                    :
                    <ul>
                      {
                        filmsCharacter?.map(({ url, episode_id, title }) => (
                          <li key={url}>Episode {romanNumerals[Number(episode_id)]} - <strong>{title}</strong></li>
                        ))
                      }
                    </ul>
                }
              </article>
            </>
            :
            <Erro />
        }
      </Section>
    </CardInformation>
  )
}