export interface Ejendom {
    _id: string;
    navn: string;
    status: boolean;
    beliggenhed: {
      latitude: number;
      longitude: number;
    }
    billeder: { url: string }[];
  }