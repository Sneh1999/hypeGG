import { HypeForm } from "@/constants/constants";
import { create } from "zustand";

interface CreateHypeState {
  collection: string;
  community: string;
  addresses: string[];
  image: string;
  form: HypeForm;
  setCollection: (collection: string) => void;
  setCommunity: (community: string) => void;
  addAddress: (address: string) => void;
  removeAddress: (address: string) => void;
  setImage: (image: string) => void;
  setForm: (form: HypeForm) => void;
}

export const useCreateHypeStore = create<CreateHypeState>()((set) => ({
  collection: "",
  community: "",
  addresses: [],
  image: "",
  csv: "",
  form: HypeForm.CREATE_HYPE,
  setCollection(collection) {
    set((state) => {
      return {
        ...state,
        collection: collection,
      };
    });
  },
  setCommunity(community) {
    set((state) => {
      return {
        ...state,
        community: community,
      };
    });
  },
  addAddress(address) {
    set((state) => {
      return {
        ...state,
        addresses: [...state.addresses, address],
      };
    });
  },
  removeAddress(address) {
    set((state) => {
      const index = state.addresses.findIndex((a) => a === address);
      if (index < 0) {
        return state;
      }
      return {
        ...state,
        addresses: state.addresses.splice(index, 1),
      };
    });
  },
  setImage(image) {
    set((state) => {
      return {
        ...state,
        image: image,
      };
    });
  },
  setForm(form) {
    set((state) => {
      return {
        ...state,
        form: form,
      };
    });
  },
}));
