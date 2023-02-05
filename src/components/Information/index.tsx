import { StyledInformation } from "./styles";

interface InformationProps {
  info: string;
  value?: string;
}

export function Information({ info, value }: InformationProps) {
  return (
    <StyledInformation>
      {info}: <strong>{value}</strong>
    </StyledInformation>
  )
}