import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { INITIAL_Z_INDEX, WINDOW_CONFIG } from "../constants/index.js";

const useWindowStore = create(
  immer((set) => ({
    windows: WINDOW_CONFIG,
    nextZIndex: INITIAL_Z_INDEX + 1,

    openWindow: (windowKey, data = null) =>
      set((state) => {
        if (!Object.hasOwn(state.windows, windowKey)) {
          console.error(`openWindow: invalid windowKey "${windowKey}"`);
          return;
        }
        const win = state.windows[windowKey];
        win.isOpen = true;
        win.isMinimized = false;
        win.zIndex = state.nextZIndex;
        win.data = data ?? win.data;
        if (data?.animationType) {
          win.animationType = data.animationType;
        }
        if (data?.position) {
          win.position = data.position;
        }
        state.nextZIndex++;
      }),

    closeWindow: (windowKey) =>
      set((state) => {
        if (!state.windows || !state.windows[windowKey]) {
          console.error(`closeWindow: invalid windowKey "${windowKey}"`);
          return;
        }
        const win = state.windows[windowKey];
        win.isOpen = false;
        win.isMinimized = false;
        win.zIndex = INITIAL_Z_INDEX;
        win.data = null;
        win.animationType = null;
        win.position = null;
      }),

    focusWindow: (windowKey) =>
      set((state) => {
        if (!state.windows || !state.windows[windowKey]) {
          return;
        }
        const win = state.windows[windowKey];
        win.zIndex = state.nextZIndex;
        state.nextZIndex++;
      }),

    minimizeWindow: (windowKey) =>
      set((state) => {
        if (!state.windows || !state.windows[windowKey]) {
          return;
        }
        const win = state.windows[windowKey];
        win.isMinimized = true;
      }),

    restoreWindow: (windowKey) =>
      set((state) => {
        if (!state.windows || !state.windows[windowKey]) {
          return;
        }
        const win = state.windows[windowKey];
        win.isMinimized = false;
        win.zIndex = state.nextZIndex;
        state.nextZIndex++;
      }),
  }))
);

export default useWindowStore;
