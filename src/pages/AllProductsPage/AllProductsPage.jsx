import { useNavigate } from 'react-router-dom';
import { TiArrowBack } from 'react-icons/ti';
import { ProductCard } from '../../components';
import { useGetAllProducts } from '../../store/react-query';

const AllProductsPage = () => {
	const { isLoading, isError, allProductsArray } = useGetAllProducts();
	const navigate = useNavigate();

	if (isLoading) {
		return (
			<h4 className="mt-[3rem] text-center font-roboto text-[3rem] font-medium text-rose-500">
				Loading...
			</h4>
		);
	}

	if (isError) {
		return (
			<h4 className="mt-[3rem] text-center font-roboto text-[3rem] font-medium text-rose-500">
				Error: Something went wrong
			</h4>
		);
	}

	const allProductCards = allProductsArray.map((product) => (
		<ProductCard key={product.id} to={`${product.id}`} image={product.images[1]} product={product} />
	));

	return (
		<section className="mt-[3rem]">
			<header className="flex flex-row-reverse items-center justify-center px-[3rem]">
				<h1 className="mx-auto text-[3rem] font-[700] lg:text-[4rem]">All Products</h1>
				<button className="text-[3rem]" onClick={() => navigate(-1)}>
					<TiArrowBack />
				</button>
			</header>
			<article className="mt-[8rem] px-[3rem]">
				<ul className="grid grid-cols-[repeat(auto-fit,_minmax(24rem,1fr))] justify-items-center gap-[5rem_2rem]">
					{allProductCards}
				</ul>
			</article>
		</section>
	);
};

export default AllProductsPage;
