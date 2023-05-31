import { useHref } from 'react-router-dom';
import useGetAllProducts from './useGetAllProducts';

const useGetProductCategory = (productCategory) => {
	const href = useHref();
	const { allProductsArray, isError, isLoading } = useGetAllProducts();
	const possibleCategories = ['smartphones', 'laptops', 'watches', 'vehicles', 'lighting'];
	const errorMessageDefaults = {
		'/wishlist': 'WishList page still under construction',
		'/contact': 'Contact page still under construction',
	};

	if (!possibleCategories.includes(productCategory)) {
		throw Error(errorMessageDefaults[href] ?? 'Category not found!');
	}

	const PRODUCTS_LOOKUP = {
		[productCategory]: allProductsArray.filter((item) => item?.category === productCategory),

		vehicles: [
			...allProductsArray.filter((item) => item?.category === 'motorcycle'),
			...allProductsArray.filter((item) => item?.category === 'automotive'),
		],

		watches: [
			...allProductsArray.filter((item) => item?.category === 'mens-watches'),
			...allProductsArray.filter((item) => item?.category === 'womens-watches'),
		],
	};

	return { isLoading, isError, productsArray: PRODUCTS_LOOKUP[productCategory] };
};

export default useGetProductCategory;
