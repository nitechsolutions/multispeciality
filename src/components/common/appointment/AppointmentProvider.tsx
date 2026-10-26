"use client";

import {
  createContext,
  useCallback,
  useContext,
  useState,
  type ReactNode,
} from "react";
import AppointmentModal from "./AppointmentModal";

type AppointmentContextType = {
  isOpen: boolean;
  openAppointment: () => void;
  closeAppointment: () => void;
};

const AppointmentContext = createContext<AppointmentContextType | null>(null);

export function AppointmentProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  const openAppointment = useCallback(() => setIsOpen(true), []);
  const closeAppointment = useCallback(() => setIsOpen(false), []);

  return (
    <AppointmentContext.Provider
      value={{ isOpen, openAppointment, closeAppointment }}
    >
      {children}
      <AppointmentModal />
    </AppointmentContext.Provider>
  );
}

export function useAppointment() {
  const context = useContext(AppointmentContext);

  if (!context) {
    throw new Error(
      "useAppointment must be used inside AppointmentProvider.",
    );
  }

  return context;
}