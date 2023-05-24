import { useParams } from 'react-router-dom';
import { useGetProductItem } from '../../store/react-query';
import ItemHeader from './ProductItem/ItemHeader';
import ItemDescription from './ProductItem/ItemDescription';
import ItemHero from './ProductItem/ItemHero';
import { CarouselContextProvider } from '../../components/Carousel';

const ProductItemPage = () => {
	const { productId } = useParams();
	const { isLoading, productItem, isError } = useGetProductItem(productId);

	if (isLoading) {
		return <h4 className="mt-[3rem] text-center text-[3rem] font-bold">Loading...</h4>;
	}

	if (isError) {
		return (
			<h4 className="mt-[3rem] rounded-[2px_2px] text-center font-roboto text-[3rem] font-medium text-rose-500">
				Error: Product not found
			</h4>
		);
	}

	return (
		<section className="p-[1rem_2rem_3rem] lg:pt-[2rem]">
			<header className="mx-[0.5rem] flex items-center justify-between lg:mx-[3rem]">
				<ItemHeader productItem={productItem} />
			</header>
			<div className="mt-[3rem] md:mt-[4.5rem] md:flex md:h-[47rem] md:justify-around md:gap-[4rem] md:p-[0_3rem_0_1rem] lg:gap-[8rem]">
				<CarouselContextProvider slideImages={productItem.images}>
					<ItemHero />
				</CarouselContextProvider>

				<ItemDescription productItem={productItem} />
			</div>
		</section>
	);
};

export default ProductItemPage;