import { useEffect, useState } from "react";
import { Modal } from ".";
import { useCharacters } from "../../hooks/useCharcter";
import { Button } from "../Button";
import { Loading } from "../Loading";
import { AreaButton, List, SearchSection } from "./styles";

export function SearchModal() {

  const {
    characters,
    researchedCharacters,
    isLoading,
    isOpenModal,
    thereIsMore,
    isLoadingMore,
    searchValue,
    searchCharacter,
    setSearchValue,
    getCharacter,
    closeModal,
    loadMore,
    clearSearch,
    setIsLoading
  } = useCharacters()

  const [timer, setTimer] = useState<number | null>(null);

  useEffect(() => {
    return () => {
      timer && clearTimeout(timer);
    };
  }, [timer]);

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    timer && clearTimeout(timer);
    setSearchValue(event.target.value);
    setIsLoading(true)
    setTimer(
      window.setTimeout(() => {
        searchCharacter(event.target.value)
        setIsLoading(false)
      }, 1000)
    );
  };

  return (
    <Modal
      isOpen={isOpenModal}
      closeModal={closeModal}
    >
      <SearchSection>
        <input type='text' placeholder="Search character" value={searchValue} onChange={handleChange}/>
        {
          isLoading ?
            <Loading />
            :
            <List>
              {
                researchedCharacters ?
                researchedCharacters.results.map(({ url, name }) => (
                  <li key={url} onClick={() => getCharacter(url)}>{name}</li>
                ))
                :
                characters && characters.results.map(({ url, name }) => (
                  <li key={url} onClick={() => getCharacter(url)}>{name}</li>
                ))
              }
              {
                thereIsMore &&
                <AreaButton>
                  {
                    isLoadingMore ?
                      <Loading />
                      :
                      researchedCharacters ?
                      <Button onClick={clearSearch} name='Clear Search' />
                      :
                      <Button onClick={loadMore} name='Load more' />
                  }
                </AreaButton>
              }
            </List>
        }
      </SearchSection>
    </Modal>
  )
}