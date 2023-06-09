import { twMerge } from 'tailwind-merge';

type DropDownProps = {
	id?: string;
	children: React.ReactNode;
	className?: string;
	isOpen: boolean;
};

type DropDownPanelProps = Omit<DropDownProps, 'isOpen'>;

function DropDown({ id = 'DropDown', isOpen = false, children, className = '' }: DropDownProps) {
	return (
		<div
			id={id}
			className={twMerge(
				`invisible grid grid-rows-[0fr] transition-[visibility,grid-template-rows] duration-[500ms]`,
				[isOpen && 'visible grid-rows-[1fr]'],
				[className]
			)}
		>
			{children}
		</div>
	);
}

function DropDownPanel({ id = 'DropDown Panel', children, className }: DropDownPanelProps) {
	return (
		<ul id={id} className={twMerge(`overflow-y-hidden [transition:padding_500ms]`, className)}>
			{children}
		</ul>
	);
}

DropDown.Panel = DropDownPanel;

export default DropDown;
