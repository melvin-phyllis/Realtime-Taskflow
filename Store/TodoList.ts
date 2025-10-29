'use client';

import { TodoStore } from '@/types';
import { create } from 'zustand';


export const useTodoStore = create<TodoStore>()((set) => ({
    ListTAsk: [],
    usersinfo: null,
    GetTask: (item) => set(() => ({ ListTAsk: item })),
    add: (item) => set((state) => ({ ListTAsk: [...state.ListTAsk, item] })),
    Update: (id, stackupdate) =>
        set((state) => ({
            ListTAsk: state.ListTAsk.map((task) =>
                task.id === id ? { ...task, ...stackupdate } : task
            ),
        })),

    GetinfoUser: () =>
        set(() => ({
            usersinfo:
                typeof window !== 'undefined'
                    ? JSON.parse(localStorage.getItem('user') || 'null')
                    : null,
        })),
}));



