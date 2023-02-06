import { Lightsaber } from "./style";

/*
  Créditos: Sam García
  Link: https://codepen.io/samvgm/pen/LVzpJW
**/

export function Loading() {
  return (
    <Lightsaber>
      <div className="ls-particles ls-part-1"></div>
      <div className="ls-particles ls-part-2"></div>
      <div className="ls-particles ls-part-3"></div>
      <div className="ls-particles ls-part-4"></div>
      <div className="ls-particles ls-part-5"></div>
      <div className="lightsaber ls-left ls-green"></div>
      <div className="lightsaber ls-right ls-red"></div>
    </Lightsaber>
  )
}