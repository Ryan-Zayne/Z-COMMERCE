import { assertDefined } from '@/global-helpers.types';
import { useCallbackRef } from '@/hooks/useCallbackRef';
import { useStore } from 'zustand';
import { CarouselStore, CarouselStoreApi } from './carousel.types';
import { useContext } from './carouselStoreContext';

const useCarouselStore = <T>(callbackFn: (store: CarouselStore) => T) => {
	const store = useContext();
	const selector = useCallbackRef(callbackFn);

	return useStore<CarouselStoreApi, unknown>(assertDefined(store), selector) as T;
};

export { useCarouselStore };
