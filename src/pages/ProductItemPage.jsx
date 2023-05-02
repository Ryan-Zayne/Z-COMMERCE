import { useParams } from 'react-router-dom';
import { useGetAllProducts } from '../hooks';
import ItemHero from '../components/ProductItem/ItemHero';
import ItemDescription from '../components/ProductItem/ItemDescription';
import ItemHeader from '../components/ProductItem/ItemHeader';

const ProductItemPage = () => {
	const { allProducts, allProductsArray } = useGetAllProducts();
	const { productId } = useParams();

	if (allProducts.some((item) => item.isLoading === true)) {
		return <h4 className="mt-[3rem] text-center text-[3rem] font-bold">Loading...</h4>;
	}

	if (allProducts.some((item) => item.isError === true)) {
		return (
			<h4 className="mt-[3rem] text-center font-roboto text-[3rem] font-medium text-rose-500">
				Error: Product not found
			</h4>
		);
	}

	const productItem = allProductsArray.find((item) => item.id === Number(productId));

	return (
		<section className="p-[1rem_2rem_5rem] lg:pt-[2rem]">
			<header className="flex items-center justify-between px-[2rem]">
				<ItemHeader productItem={productItem} />
			</header>

			<div className="mt-[1.4rem] md:flex md:justify-around md:gap-[4rem] md:px-[4rem] lg:mt-[4rem] lg:gap-[9rem]">
				<ItemHero productItem={productItem} />
				<ItemDescription productItem={productItem} />
			</div>
		</section>
	);
};

export default ProductItemPage;