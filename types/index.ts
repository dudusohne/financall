export type Bill = {
  id: string;
  name: string;
  description?: string;
  value?: string;
  date?: string;
  payd?: boolean;
};

export interface User {
  name?: string;
  email?: string;
  bills?: Bill[];
  balance?: string;
}
