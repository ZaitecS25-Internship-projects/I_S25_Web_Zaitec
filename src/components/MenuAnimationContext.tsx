import React, { createContext, useContext, useState } from 'react';

interface MenuAnimationContextType {
  isMenuOpen: boolean;
  setMenuOpen: (open: boolean | ((prev: boolean) => boolean)) => void;
}

const MenuAnimationContext = createContext<MenuAnimationContextType | undefined>(undefined);

export const MenuAnimationProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  return (
    <MenuAnimationContext.Provider value={{ isMenuOpen, setMenuOpen }}>
      {children}
    </MenuAnimationContext.Provider>
  );
};

export const useMenuAnimation = () => {
  const context = useContext(MenuAnimationContext);
  if (context === undefined) {
    throw new Error('useMenuAnimation must be used within a MenuAnimationProvider');
  }
  return context;
};