import { createContext, Dispatch, ReactNode, SetStateAction, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ICharacter } from "../models/character";
import { IFilms } from "../models/films";
import { IListAll } from "../models/listAll";
import { api } from "../services/api";
import { getNumberUrl } from "../utils/getNumberUrl";

interface CharactersProviderProps {
  children: ReactNode
}

interface CharacterContextProps {
  characters: IListAll | undefined;
  researchedCharacters: IListAll | undefined;
  character: ICharacter | undefined;
  filmsCharacter: IFilms[] | undefined;
  isOpenModal: boolean;
  isLoading: boolean;
  thereIsMore: boolean;
  isLoadingMore: boolean;
  searchValue: string;
  getCharacter: (url: string) => void;
  searchCharacter: (value: string) => void
  openModal: () => void;
  closeModal: () => void;
  loadMore: () => void;
  clearSearch: () => void;
  setIsLoading: Dispatch<SetStateAction<boolean>>
  setSearchValue: Dispatch<SetStateAction<string>>
}

export const CharacterContext = createContext({} as CharacterContextProps)

export function CharactersProvider({ children }: CharactersProviderProps) {

  const navigate = useNavigate()

  const [characters, setCharacters] = useState<IListAll>()
  const [researchedCharacters, setResearchedCharacters] = useState<IListAll>()
  const [character, setCharacter] = useState<ICharacter>()
  const [filmsCharacter, setFilmsCharacter] = useState<IFilms[]>()
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false)
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [isLoadingMore, setIsLoadingMore] = useState<boolean>(false)
  const [nextPage, setNextPage] = useState<string>()
  const [thereIsMore, setThereIsMore] = useState<boolean>(false)
  const [searchValue, setSearchValue] = useState('');

  async function listCharacters() {
    setIsLoading(true)
    try {
      const { data } = await api.get<IListAll>('/people')
      setCharacters(data)
      setThereIsMore(!!data.next)
      setNextPage(getNumberUrl(data?.next ?? '0'))
      setIsLoading(false)
    } catch (err) {
      setIsLoading(false)
    }
  }

  async function loadMore() {
    setIsLoadingMore(true)
    try {
      const { data } = await api.get<IListAll>(`/people/?page=${nextPage}`)
      setCharacters(prevState => prevState ? ({
        ...prevState,
        results: [
          ...prevState.results,
          ...data.results
        ]
      }) : data)
      setThereIsMore(!!data.next)
      setNextPage(getNumberUrl(data?.next ?? '0'))
      setIsLoadingMore(false)
    } catch (err) {
      setIsLoadingMore(false)
    }
  }

  async function getCharacter(url: string) {
    const idCharacter = getNumberUrl(url)
    setFilmsCharacter(undefined)
    setIsLoading(true)
    try {
      const { data } = await api.get<ICharacter>(`/people/${idCharacter}`)
      setCharacter(data)
      setIsLoading(false)
      handleSetFilms(data.films)
      navigate('/character')
      closeModal()
    } catch (err) {
      setIsLoading(false)
    }
  }

  async function handleSetFilms(filmsUrl: string[]){
    const films = await Promise.all(filmsUrl.map( async (url) => {
      return await listFilms(url).then(response => response)
    }))

    const filmsFiltered = films.filter(film => film !== undefined)

    //@ts-ignore
    setFilmsCharacter(filmsFiltered)
  }

  async function listFilms(url: string) {
    const idFilm = getNumberUrl(url)
    try {
      const { data } = await api.get<IFilms>(`/films/${idFilm}`)
      return data
    } catch (err) {
      return;
    }    
  }

  async function searchCharacter(value: string) {
    if(!value.trim()) return clearSearch();
    setIsLoading(true)
    try {
      const { data } = await api.get<IListAll>(`/people/?search=${value}`)
      setResearchedCharacters(data)
      setIsLoading(false)
    } catch (err) {
      setIsLoading(false)
    }
  }

  function clearSearch() {
    setResearchedCharacters(undefined)
    setSearchValue('')
  }

  function openModal() {
    setIsOpenModal(true)

    !characters && listCharacters()
  }

  const closeModal = () => setIsOpenModal(false)

  return (
    <CharacterContext.Provider value={
      {
        characters,
        researchedCharacters,
        character,
        filmsCharacter,
        isOpenModal,
        isLoading,
        thereIsMore,
        isLoadingMore,
        searchValue,
        getCharacter,
        searchCharacter,
        closeModal,
        openModal,
        loadMore,
        clearSearch,
        setIsLoading,
        setSearchValue
      }
    }
    >
      {children}
    </CharacterContext.Provider>
  )
}