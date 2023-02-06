import { ICharacter } from "./character";

export interface IListAll {
  count: number;
  next: string | null;
  previous: string | null;
  results: ICharacter[];
}