import { create } from "zustand";
import { Persona } from "@/app/new/persona/_data";

export interface Purpose {
  id: number;
  name: string;
  description: string;
}

export interface KPI {
  id: number;
  acronym: string;
  fullName: string;
  description: string;
}

export interface Tone {
  id: number;
  name: string;
  description: string;
}

interface MessageStore {
  // Persona
  persona: Persona | null;
  setPersona: (persona: Persona | null) => void;

  // Purpose
  purpose: Purpose | null;
  setPurpose: (purpose: Purpose | null) => void;
  kpis: KPI[];
  setKpis: (kpis: KPI[]) => void;
  date: string;
  setDate: (date: string) => void;

  // Tone
  tone: Tone | null;
  setTone: (tone: Tone | null) => void;
  additionalRequests: string;
  setAdditionalRequests: (text: string) => void;

  // Reset function
  reset: () => void;
}

export const useMessageStore = create<MessageStore>((set) => ({
  // Persona
  persona: null,
  setPersona: (persona) => set({ persona }),

  // Purpose
  purpose: null,
  setPurpose: (purpose) => set({ purpose }),
  kpis: [],
  setKpis: (kpis) => set({ kpis }),
  date: "",
  setDate: (date) => set({ date }),

  // Tone
  tone: null,
  setTone: (tone) => set({ tone }),
  additionalRequests: "",
  setAdditionalRequests: (text) => set({ additionalRequests: text }),

  // Reset
  reset: () =>
    set({
      persona: null,
      purpose: null,
      kpis: [],
      date: "",
      tone: null,
      additionalRequests: "",
    }),
}));
