import ukFlag from "@assets/images/logos/uk.svg";
import russianFlag from "@assets/images/logos/russia.svg";
import armenianFlag from "@assets/images/logos/armenia.svg";

export interface ILanguage {
  flag: string;
  name: string;
  proficiency: number;
  level: string;
}

export const knownLanguages: ILanguage[] = [
  {
    flag: armenianFlag,
    name: "Armenian",
    proficiency: 100,
    level: "Native",
  },
  {
    flag: ukFlag,
    name: "English",
    proficiency: 85,
    level: "Fluent",
  },
  {
    flag: russianFlag,
    name: "Russian",
    proficiency: 85,
    level: "Fluent",
  },
];
