export interface Lejlighed {
    _id: string;
    navn: string;
    status: boolean;
    ledig_pr: Date;
    beliggenhed: {
      latitude: number;
      longitude: number;
    }
    beskrivelse: string;
    vrelser: string;
    kvadratmeter: string;
    mnedlig_leje: string;
    aconto: string;
    depositum: string;
    billeder: { url: string }[];
  }