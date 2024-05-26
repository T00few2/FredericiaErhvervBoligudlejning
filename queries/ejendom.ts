export interface Ejendom {
    _id: string;
    navn: string;
    status: boolean;
    beskrivelse: string;
    beliggenhed: {
      latitude: number;
      longitude: number;
    }
    billeder: { url: string }[];
  }