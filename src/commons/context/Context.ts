import { createContext } from 'react';
import { UserType } from 'types/types';

export interface IContext {
  user: UserType | null;
  setUser: (user: UserType) => void;
}

export const defaultState = {
  user: null,
  setUser: () => {},
};

export const Context = createContext<IContext>(defaultState);
