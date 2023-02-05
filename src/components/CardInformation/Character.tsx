import { CardInformation } from ".";
import { Information } from "../Information";
import { Section } from "./style";

export function Character() {
  return (
    <CardInformation title="Darth Vader">
      <Section>
        <div>
          <Information info="Gender" value="Male" />
          <Information info="Birth year" value="41.9BBY" />
          <Information info="Eye color" value="Yellow" />
          <Information info="Height" value="202" />
          <Information info="Mass" value="136" />
        </div>
        <div>
          <Information info="Films" />
          <section>
            <strong>Episode IV - A new Hope</strong>
            <strong>Episode V - The Empire Strikes Back</strong>
            <strong>Episode VI - Return of the Jedi</strong>
            <strong>Episode IV - A new Hope</strong>
            <strong>Episode V - The Empire Strikes Back</strong>
            <strong>Episode VI - Return of the Jedi</strong>
            <strong>Episode IV - A new Hope</strong>
            <strong>Episode V - The Empire Strikes Back</strong>
            <strong>Episode VI - Return of the Jedi</strong>
          </section>
        </div>
      </Section>
    </CardInformation>
  )
}