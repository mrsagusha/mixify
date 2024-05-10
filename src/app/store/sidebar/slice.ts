import { createSlice } from '@reduxjs/toolkit';

import type { Artist } from '@/lib/types/api';

interface AuthInitialState {
  isSidebarVisible: boolean;
  selectedItem: Artist | null;
  isItemLoading: boolean;
}

const initialState: AuthInitialState = {
  isSidebarVisible: false,
  isItemLoading: false,
  selectedItem: null,
};

const sidebarSlice = createSlice({
  name: 'sidebar',
  initialState,
  reducers: {
    showSidebar: (state): void => {
      state.isSidebarVisible = true;
    },
    hideSidebar: (state): void => {
      state.isSidebarVisible = false;
    },
    setIsLoading: (state, action): void => {
      state.isItemLoading = action.payload;
    },
    setSelectedItem: (state, action): void => {
      state.selectedItem = action.payload;
      state.isItemLoading = false;
    },
  },
});

export const { showSidebar, hideSidebar, setSelectedItem, setIsLoading } = sidebarSlice.actions;

export default sidebarSlice.reducer;
