import { createContext, ReactNode } from "react";

interface CharactersProviderProps {
  children: ReactNode
}

interface CharacterContextProps {
  idCharacter: number
}

export const CharacterContext = createContext({} as CharacterContextProps)

export function CharactersProvider({ children }: CharactersProviderProps) {
  const idCharacter = 1
  
  return (
    <CharacterContext.Provider value={{idCharacter}}>
      {children}
    </CharacterContext.Provider>
  )
}