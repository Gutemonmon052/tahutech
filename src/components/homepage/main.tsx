import { Jumbotron } from "./jumbotron";
import { PopularCtg } from "./popctg";
import { Recently } from "./recently";
import { Subscribe } from "./subscribe";

export function Homepage () {
  return (
    <div>
      <Jumbotron/>
      <Recently/>
      <PopularCtg/>
      <Subscribe/>
    </div>
  );
}
