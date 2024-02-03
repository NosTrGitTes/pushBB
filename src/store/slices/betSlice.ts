// src/store/slices/betSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Definindo a interface para o estado
interface BetState {
  bets: Array<any>; // Substitua `any` pelo tipo específico de suas apostas
}

// Definindo o estado inicial com base na interface
const initialState: BetState = {
  bets: [],
};

export const betSlice = createSlice({
  name: "bet",
  initialState,
  reducers: {
    // Use `PayloadAction` para definir o tipo do payload
    addBet: (state, action: PayloadAction<any>) => {
      // Substitua `any` pelo tipo específico do payload
      state.bets.push(action.payload);
    },
    // mais reducers conforme necessário
  },
});

// Ações geradas pelo slice
export const { addBet } = betSlice.actions;

// O reducer
export default betSlice.reducer;
