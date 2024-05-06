import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./slice/counterSlice";
import registerSlice from "./slice/registerSlice";
import pokemonService from "@services/pokemonService";
import { setupListeners } from "@reduxjs/toolkit/query";

const store = configureStore({
  reducer: {
    counter: counterSlice,
    register: registerSlice,
    [pokemonService.reducerPath]: pokemonService.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(pokemonService.middleware),
});

setupListeners(store.dispatch);

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
