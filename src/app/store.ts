import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { hnApi } from "../services/hn/hn.slice";

export const store = configureStore({
  reducer: {
    [hnApi.reducerPath]: hnApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(hnApi.middleware),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
