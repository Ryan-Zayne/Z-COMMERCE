import { useMemo } from 'react';
import { twMerge } from 'tailwind-merge';
import Portal from '../Portal';
import { DrawerContextProvider, useDrawerContext } from './drawerContext';

const Drawer = ({ children, isOpen, onClose, onOpen, onToggle }) => {
	const contextValue = useMemo(
		() => ({ isOpen, onOpen, onClose, onToggle }),
		[isOpen, onOpen, onClose, onToggle]
	);

	return (
		<DrawerContextProvider value={contextValue}>
			<Portal>
				<aside id="CartDrawer Portal">{children}</aside>
			</Portal>
		</DrawerContextProvider>
	);
};

const DrawerOverlay = () => {
	const { isOpen, onClose } = useDrawerContext();

	return (
		<div
			id="Drawer Overlay"
			onClick={onClose}
			className={twMerge(
				`fixed z-[200] w-0 bg-[hsl(0,0%,0%,0.5)] [inset:0_0_0_auto]`,
				isOpen && 'w-screen'
			)}
		/>
	);
};

const DrawerContent = ({ className = '', children, placement = 'right' }) => {
	const { isOpen } = useDrawerContext();

	const placementObject = {
		right: 'right-0 translate-x-full',
		left: 'left-0 translate-x-[-100%]',
	};

	return (
		<main
			id="Drawer Content Container"
			className={twMerge(
				`custom-scrollbar fixed bottom-0 top-0 z-[500] flex flex-col overflow-y-auto bg-body transition-transform duration-[250ms] ease-slide-out ${placementObject[placement]} ${className}`,
				[isOpen && 'translate-x-0 duration-[650ms] ease-slide-in']
			)}
		>
			{children}
		</main>
	);
};

const DrawerCloseButton = ({ children, className = '', icon }) => {
	const { onClose } = useDrawerContext();

	return (
		<button className={twMerge(`absolute ${className}`)} onClick={onClose}>
			{children ?? icon}
		</button>
	);
};

const DrawerHeader = ({ children, className = '' }) => {
	return (
		<header id="Drawer Header" className={className}>
			{children}
		</header>
	);
};

const DrawerBody = ({ children, className = '' }) => {
	return (
		<div id="Drawer Body" className={className}>
			{children}
		</div>
	);
};

const DrawerFooter = ({ children, className = '' }) => {
	return (
		<footer id="Drawer Footer" className={className}>
			{children}
		</footer>
	);
};

Drawer.Overlay = DrawerOverlay;
Drawer.Content = DrawerContent;
Drawer.CloseButton = DrawerCloseButton;
Drawer.Header = DrawerHeader;
Drawer.Body = DrawerBody;
Drawer.Footer = DrawerFooter;

export default Drawer;