import { useParams } from 'react-router-dom';
import { useGetProductItem } from '../../store/react-query';
import { CarouselContextProvider } from '../../components/Carousel';
import ItemHeader from './ProductItem/ItemHeader';
import ItemDescription from './ProductItem/ItemDescription';
import ItemHero from './ProductItem/ItemHero';
import { LoadingSkeleton } from '../../components';

const ProductItemPage = () => {
	const { productId } = useParams();
	const { isLoading, productItem } = useGetProductItem(productId);

	if (true) {
		return <LoadingSkeleton itemDescription={true} />;
	}

	return (
		<section className="p-[1rem_2rem_3rem] lg:pt-[3rem]">
			<header className="mx-[0.5rem] flex items-center justify-between lg:mx-[3rem]">
				<ItemHeader productItem={productItem} />
			</header>

			<div className="mt-[3rem] md:mt-[4.5rem] md:flex md:h-[47rem] md:justify-around md:gap-[4rem] md:px-[1rem] lg:mt-[6rem] lg:gap-[8rem]">
				<CarouselContextProvider slideImages={productItem.images}>
					<ItemHero />
				</CarouselContextProvider>

				<ItemDescription productItem={productItem} />
			</div>
		</section>
	);
};

export default ProductItemPage;
