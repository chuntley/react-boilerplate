import React, { createContext, useContext, useState } from "react";

interface AppContextProps {
  countIncrement: React.Dispatch<React.SetStateAction<number>>;
  count: number;
}

interface AppContextProviderProps {
  children: React.ReactNode;
}

export const AppContext = createContext<AppContextProps>({
  countIncrement: () => 0,
  count: 0,
});

const AppContextProvider = ({
  children,
}: AppContextProviderProps): JSX.Element => {
  const [count, countIncrement] = useState(0);

  return (
    <AppContext.Provider value={{ count, countIncrement }}>
      {children}
    </AppContext.Provider>
  );
};

const useAppContext = (): AppContextProps => {
  return useContext(AppContext);
};

export { AppContextProvider, useAppContext };
