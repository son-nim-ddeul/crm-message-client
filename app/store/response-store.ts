import { create } from "zustand";

export interface MessageResult {
  title: string;
  content: string;
  estimation: string;
  conclusion: string;
}

export type MessageType = "aspirational_dreamer" | "empathetic_supporter" | "playful_entertainer" | "rational_advisor";

export interface FinalReportResponse {
  playful_entertainer: MessageResult;
  empathetic_supporter: MessageResult;
  aspirational_dreamer: MessageResult;
  rational_advisor: MessageResult;
}

interface ResponseStore {
  messageResponse: FinalReportResponse | null;
  setMessageResponse: (response: FinalReportResponse | null) => void;
  reset: () => void;
}

export const useResponseStore = create<ResponseStore>((set) => ({
  messageResponse: null,
  setMessageResponse: (response) => set({ messageResponse: response }),
  reset: () => set({ messageResponse: null }),
}));


