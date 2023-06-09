import { noScrollOnOpen } from '@/utils/noScrollOnOpen';

// NOTE - Prevents flicker of wrong theme onLoad
const theme = JSON.parse(localStorage.getItem('colorScheme') ?? '')?.state?.theme as string;
document.documentElement.dataset.theme = theme;

// NOTE - Adding and Removing Loader after load
const loaderElement = document.querySelector('.loader-container') as HTMLDivElement;
noScrollOnOpen(true);

const handleLoaderRemoval = () => {
	loaderElement.style.opacity = '0';
	noScrollOnOpen(false);

	const loaderTimeout = setTimeout(() => {
		loaderElement.remove();
		window.removeEventListener('DOMContentLoaded', handleLoaderRemoval);
		clearTimeout(loaderTimeout);
	}, 1300);
};

window.addEventListener('DOMContentLoaded', handleLoaderRemoval);

// NOTE - Scroll restoration for moxilla browser
window.history.scrollRestoration = 'auto';
