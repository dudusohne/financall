export type Bill = {
  id: string;
  name: string;
  description?: string;
  value?: string;
  date?: string;
  payd?: boolean;
};

export interface User {
  uid?: string;
  name?: string;
  email?: string;
  bills?: Bill[];
  balance?: string;
  photoURL?: string;
  displayName?: string;
  stsTokenManager?: TokenProps;
}

interface TokenProps {
  accessToken?: string;
}

export interface EntryProps {
  name: string;
  desc?: string;
  date: string;
  value: string;
  payd?: boolean;
  remove?: () => void;
  check?: () => void;
}
