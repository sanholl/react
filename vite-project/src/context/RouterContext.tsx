import { createContext } from 'react';

type Type = {
  path: string;
  changePath: (path: string) => void;
};

const RouterContext = createContext<Type>({
  path: '',
  changePath: () => { },
});

export default RouterContext;