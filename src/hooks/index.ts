import { TypedUseSelectorHook, useDispatch, useSelector, useStore } from 'react-redux';
import type { State, AppDispatch } from '../types/state';
import { store } from '../store';

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<State> = useSelector;
export const useAppStore: () => typeof store = useStore;
