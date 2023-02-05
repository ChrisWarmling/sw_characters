import { useContext } from "react";
import { CharacterContext } from "../context/CharactersContext";

export const useCharacters = () => useContext(CharacterContext)