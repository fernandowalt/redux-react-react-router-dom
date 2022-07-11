/** @format */
import clientAxios from "../config/axios";
import Swal from "sweetalert2";
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
	START_EDITING_PRODUCT,
	GET_PRODUCT_EDIT_EXIT,
	GET_PRODUCT_EDIT_ERROR,
} from "../types";

// creating new products

const addProduct = () => ({
	type: ADD_PRODUCT,
	payload: true,
});

const addProductTrue = product => ({
	type: ADD_PRODUCT_EXIT,
	payload: product,
});

const addProductfalse = state => ({
	type: SAVE_PRODUCT_ERROR,
	payload: state,
});

export const getProductsAction = () => {
	return async dispatch => {
		dispatch(downloadProducts());

		try {
			const { data } = await clientAxios.get("/products");
			dispatch(loadingProductsExit(data));
		} catch (error) {
			dispatch(loadingProductserror());
		}
	};
};
const downloadProducts = () => ({
	type: LOADING_PRODUCTS,
	payload: true,
});

export const creatingNewProducts = product => {
	return async dispatch => {
		dispatch(addProduct());

		try {
			//insert in api
			await clientAxios.post("/products", product);
			dispatch(addProductTrue(product));

			Swal.fire("Correcto", "El producto se agrego exitosamente", "success");
		} catch (error) {
			console.log(error);
			dispatch(addProductfalse(true));
			dispatch(editProductError(true));

			Swal.fire({ icon: "error", title: "Hubo un error", text: "hubo un error, por favor intenta de nuevo" });
		}
	};
};

const loadingProductsExit = products => ({
	type: LOADING_PRODUCTS_EXIT,
	payload: products,
});
const loadingProductserror = () => ({
	type: LOADING_PRODUCTS_ERROR,
	payload: true,
});

//selecionar y eliminar el producto

export const deleteProductAction = id => {
	return async dispatch => {
		dispatch(getProductRemove(id));

		try {
			await clientAxios.delete(`/products/${id}`);
			dispatch(deleteProductExit());
			Swal.fire("Eliminado!", "el producto se eliminó exitosamente", "success");
		} catch (error) {
			dispatch(deleteProductError());
		}
	};
};

const getProductRemove = id => ({
	type: GET_PRODUCT_REMOVE,
	payload: id,
});

const deleteProductExit = () => ({
	type: GET_PRODUCT_EXIT,
});
const deleteProductError = () => ({
	type: GET_PRODUCT_ERROR,
	payload: true,
});

export const uploadEditedProduct = product => {
	return dispatch => {
		dispatch(getProductAction(product));
	};
};

const getProductAction = product => ({
	type: GET_PRODUCT_EDIT,
	payload: product,
});
//funcion que edita el registro del producto en la api y state
export const editingProduct = product => {
	return async dispatch => {
		dispatch(editProduct());

		try {
			await clientAxios.put(`/products/${product.id}`, product);
			dispatch(productEditExit(product));
		} catch (error) {}
	};
};

const editProduct = () => ({
	type: START_EDITING_PRODUCT,
});

const productEditExit = product => ({
	type: GET_PRODUCT_EDIT_EXIT,
	payload: product,
});

const editProductError = () => ({
	type: GET_PRODUCT_EDIT_ERROR,
	payload: true,
});
