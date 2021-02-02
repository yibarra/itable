export interface IElement {
  atomicMass: string;
  atomicNumber: number;
  atomicRadius: number;
  boilingPoint: number;
  bondingType: string;
  cpkHexColor: string,
  density: string;
  color: string;
  electronAffinity: number;
  electronegativity: number;
  electronicConfiguration: string;
  groupBlock: string;
  ionRadius: string;
  ionizationEnergy: number;
  meltingPoint: number;
  name: string;
  oxidationStates: string;
  period: number;
  shells: number[];
  source: string; // https://en.wikipedia.org/wiki/Hydrogen,
  spectral_img: string; // https://en.wikipedia.org/wiki/File:Hydrogen_Spectra.jpg,
  standardState: string;
  summary: string;
  symbol: string;
  vanDelWaalsRadius: number;
  xpos: number;
  yearDiscovered: number;
  ypos: number;
  index: number;
}