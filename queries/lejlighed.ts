export interface Lejlighed {
    _id: string;
    navn: string;
    beliggenhed: {
      latitude: number;
      longitude: number;
    }
    beskrivelse: string;
    vrelser: string;
    kvadratmeter: string;
    mnedlig_leje: string;
    billeder: { url: string }[];
  }