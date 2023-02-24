import { atom } from "recoil";

interface LayoutState {
  name: string;
}

export const LayoutState = atom<LayoutState>({
  default: {
    name: "",
  },
  key: "layoutState",
});
