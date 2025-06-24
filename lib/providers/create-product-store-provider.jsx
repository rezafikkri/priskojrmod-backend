'use client';

import { createContext, useRef, useContext } from 'react';
import { useStore } from 'zustand';
import { createProductCreateStore } from '../stores/create-product-store';

export const CreateProductStoreContext = createContext(undefined);

export const CreateProductStoreProvider = ({ children }) => {
  const storeRef = useRef(null);

  if (storeRef.current === null) {
    storeRef.current = createProductCreateStore();
  }

  return (
    <CreateProductStoreContext.Provider value={storeRef.current}>
      {children}
    </CreateProductStoreContext.Provider>
  );
}

export const useCreateProductStore = (selector) => {
  const createProductStoreContext = useContext(CreateProductStoreContext);

  if (!createProductStoreContext) {
    throw new Error('useCreateProductStore must be used within CreateProductStoreProvider');
  }

  return useStore(createProductStoreContext, selector);
}
