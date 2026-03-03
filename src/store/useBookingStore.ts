import { create } from 'zustand';

interface BookingState {
  isModalOpen: boolean;
  selectedDate: Date | null;
  category: string;
  transmission: 'manual' | 'automatic';
  openModal: (date: Date, category?: string, transmission?: 'manual' | 'automatic') => void;
  closeModal: () => void;
  setCategory: (cat: string) => void;
  setTransmission: (trans: 'manual' | 'automatic') => void;
}

export const useBookingStore = create<BookingState>((set) => ({
  isModalOpen: false,
  selectedDate: null,
  category: 'B',
  transmission: 'manual',
  openModal: (date, category = 'B', transmission = 'manual') => 
    set({ isModalOpen: true, selectedDate: date, category, transmission }),
  closeModal: () => set({ isModalOpen: false, selectedDate: null }),
  setCategory: (category) => set({ category }),
  setTransmission: (transmission) => set({ transmission }),
}));

