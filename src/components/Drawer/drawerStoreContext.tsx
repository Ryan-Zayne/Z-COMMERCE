import { assertDefined } from '@/global-helpers.types';
import { useCallbackRef } from '@/hooks';
import { createContext } from '@/hooks/context-hook';
import { useEffect, useState } from 'react';
import { createStore, useStore } from 'zustand';
import { DrawerProviderProps, DrawerStore, DrawerStoreApi } from './drawer.types';

const [Provider, useContext] = createContext<DrawerStoreApi | null>({
	name: 'DrawerStoreContext',
	hookName: 'useDrawerStore',
	strict: true,
	providerName: 'DrawerContextProvider',
	defaultValue: null,
});

const createDrawerStore = () =>
	createStore<DrawerStore>(() => ({
		isOpen: false,
		onOpen: () => {},
		onClose: () => {},
		onToggle: () => {},
	}));

function DrawerContextProvider({ children, storeValues }: DrawerProviderProps) {
	const [drawerStore] = useState(() => createDrawerStore());

	useEffect(() => {
		drawerStore.setState(storeValues);
	}, [drawerStore, storeValues]);

	return <Provider value={drawerStore}>{children}</Provider>;
}

const useDrawerStore = <T,>(callbackFn: (state: DrawerStore) => T) => {
	const store = useContext();
	const selector = useCallbackRef(callbackFn);

	return useStore<DrawerStoreApi, T>(assertDefined(store), selector);
};

export { DrawerContextProvider, useDrawerStore };
