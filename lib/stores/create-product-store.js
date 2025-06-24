import { v4 } from 'uuid';
import { createStore } from 'zustand/vanilla';

export const defaultInitState = {
  basic: {
    name: '',
    category_id: '',
    owner_id: '',
    license_id: '',
    download_link: '',
  },
  content: {
    description: {
      id: '',
      en: '',
    },
  },
  extras: {
    variants: [
      {
        id: v4(),
        name: '',
        download_link: '',
      },
    ],
    images: [],
    discount: {
      value: '',
      expired_at: '',
    },
    coupon: {
      code: '',
      discount: '',
      expired_at: '',
    },
  },
  pricing: {
    price_type: '',
    prices: [],
    is_published: false,
  },
};

export const createProductCreateStore = (initState = defaultInitState) => {
  return createStore((set) => ({
    ...initState,
    setBasic: (data) => set(state => ({ ...state, basic: data })),
    setContent: (data) => set(state => ({ ...state, content: data })),
    setExtras: (data) => set(state => ({ ...state, extras: data })),
    setPricing: (data) => set(state => ({ ...state, pricing: data })),
    clearDraft: () => set({ ...initState }),
  }));
}
