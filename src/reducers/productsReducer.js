/** @format */
import {
	ADD_PRODUCT,
	ADD_PRODUCT_EXIT,
	SAVE_PRODUCT_ERROR,
	LOADING_PRODUCTS,
	LOADING_PRODUCTS_EXIT,
	LOADING_PRODUCTS_ERROR,
	GET_PRODUCT_REMOVE,
	GET_PRODUCT_EXIT,
	GET_PRODUCT_ERROR,
	GET_PRODUCT_EDIT,
	GET_PRODUCT_EDIT_EXIT,
	GET_PRODUCT_EDIT_ERROR,
} from "../types";
const initialState = {
	products: [],
	error: null,
	loading: false,
	productdelete: null,
	productEdit: null,
};

export default function productsReducer(state = initialState, action) {
	switch (action.type) {
		case LOADING_PRODUCTS:
		case ADD_PRODUCT:
			return { ...state, loading: action.payload };

		case ADD_PRODUCT_EXIT:
			return { ...state, loading: false, products: [...state.products, action.payload] };

		case SAVE_PRODUCT_ERROR:
		case LOADING_PRODUCTS_ERROR:
		case GET_PRODUCT_ERROR:
		case GET_PRODUCT_EDIT_ERROR:
			return { ...state, loading: false, error: action.payload };
		case LOADING_PRODUCTS_EXIT:
			return { ...state, loading: false, error: null, products: action.payload };

		case GET_PRODUCT_REMOVE:
			return { ...state, productdelete: action.payload };

		case GET_PRODUCT_EXIT:
			return { ...state, products: state.products.filter(element => element.id !== state.productdelete), productdelete: null };

		case GET_PRODUCT_EDIT:
			return { ...state, productEdit: action.payload };

		case GET_PRODUCT_EDIT_EXIT:
			return { ...state, productEdit: null, products: state.products.map(element => (element.id === action.payload.id ? action.payload : element)) };

		default:
			return state;
	}
}
