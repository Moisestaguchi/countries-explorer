export interface Country {
  cca3: string;
  name: {
    common: string;
    official: string;
  };
  population: number;
  region: string;
  subregion?: string;
  capital?: string[];
  flags: {
    svg: string;
    png: string;
    alt?: string;
  };
  languages?: Record<string, string>;
  currencies?: Record<string, {
    name: string;
    symbol: string;
  }>;
  borders?: string[];
}