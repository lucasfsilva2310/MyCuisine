import { createContext, useState } from "react";

export const HamburguerContext = createContext({});

export const HamburguerMenuProvider = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <HamburguerContext.Provider value={{ isMenuOpen, setIsMenuOpen }}>
      {children}
    </HamburguerContext.Provider>
  );
};
