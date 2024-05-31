import { create } from "zustand";
import { persist } from "zustand/middleware";


export interface Istore {
    token: string;
    setToken: (token: string) => void
}

export const storage = create<Istore, [["zustand/persist", unknown]]>(
    persist(
        (set) =>
        (
            {
                setToken: (token: string) => { set({ token: token }) },
                token: ""

            }
        ),




        { name: "store" })
)