type CardProps = {
	as?: React.ElementType;
	children: React.ReactNode;
	className?: string;
	aosAnimation?: string;
	aosDuration?: string;
	aosEasing?: string;
};

type CardHeaderProps = Pick<CardProps, 'as' | 'children' | 'className'>;

type OtherCardProps = Pick<CardProps, 'children' | 'className'>;

function Card({
	as: Element = 'article',
	children,
	className = '',
	aosAnimation = '',
	aosDuration = '',
	aosEasing = '',
}: CardProps) {
	return (
		<Element
			id="Card"
			data-aos={aosAnimation}
			data-aos-duration={aosDuration}
			data-aos-anchor-easing={aosEasing}
			className={className}
		>
			{children}
		</Element>
	);
}

const CardHeader = ({ as: Element = 'header', children, className = '' }: CardHeaderProps) => {
	return (
		<Element id="Card_Header" className={className}>
			{children}
		</Element>
	);
};

const CardBody = ({ children, className = '' }: OtherCardProps) => (
	<div id="Card_Body" className={className}>
		{children}
	</div>
);

const CardFooter = ({ children, className = '' }: OtherCardProps) => (
	<div id="Card_Footer" className={className}>
		{children}
	</div>
);

Card.Header = CardHeader;
Card.Body = CardBody;
Card.Footer = CardFooter;

export default Card;
