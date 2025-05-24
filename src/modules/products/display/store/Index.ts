import { defineStore } from 'pinia';
import { useProductsState } from './State';
import * as actions from './Actions';

export const useProductsStore = defineStore('products-store', {
  state: () => ({ ...useProductsState() }),
  actions: { ...actions },
  getters: {},
});
