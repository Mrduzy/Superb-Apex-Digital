import React, { createContext, useContext, useEffect } from 'react';
import { BrandConfig, brandConfig } from '../data/brandConfig';

interface BrandContextType {
  brand: BrandConfig;
}

const BrandContext = createContext<BrandContextType | undefined>(undefined);

export const BrandProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  useEffect(() => {
    document.title = `${brandConfig.name} — ${brandConfig.tagline}`;
  }, []);

  return (
    <BrandContext.Provider value={{ brand: brandConfig }}>
      {children}
    </BrandContext.Provider>
  );
};

export const useBrand = () => {
  const context = useContext(BrandContext);
  if (!context) {
    throw new Error('useBrand must be used within a BrandProvider');
  }
  return context;
};
