import { atomFamily } from "recoil";
import { beautifulColor } from "./color";

export const buttonColorAtoms = atomFamily({
  key: "buttonColor",
  default: () => beautifulColor(),
});

console.log(beautifulColor());
