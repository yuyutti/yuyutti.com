'use client';
import { createContext, useContext, useState } from 'react';

type NavbarContextType = {
    typingDone: boolean;
    setTypingDone: (v: boolean) => void;
};

const NavbarContext = createContext<NavbarContextType | null>(null);

export function NavbarProvider({ children }: { children: React.ReactNode }) {
    const [typingDone, setTypingDone] = useState(false);

    return (
        <NavbarContext.Provider value={{ typingDone, setTypingDone }}>
            {children}
        </NavbarContext.Provider>
    );
}

export const useNavbar = () => {
    const ctx = useContext(NavbarContext);
    if (!ctx) throw new Error('useNavbar must be used within NavbarProvider');
    return ctx;
};
