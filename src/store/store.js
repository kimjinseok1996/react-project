import { atom, selector } from "recoil";

export const user = atom({
  key: "user",
  default: {
    id: "Admin",
    pwd: "Admin",
  },
});

export const counting = atom({
  key: "counting",
  default: 10,
});

export const countSelector = selector({
  key: "countSelector",
  get: ({ get }) => get(counting) + 1400,
  set: ({ set }, count) => set(counting, count + 5500),
});
