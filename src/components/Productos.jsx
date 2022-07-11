/** @format */

import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getProductsAction } from "../actions/productActions";
import { Product } from "./Product";

export const Products = () => {
	const { products } = useSelector(state => state.products);
	const { error, loading } = useSelector(state => state.products);
	const dispatch = useDispatch();

	useEffect(() => {
		const cargarProductos = () => dispatch(getProductsAction());

		cargarProductos();
		//eslint-disable-next-line
	}, []);

	return (
		<>
			<h2 className="text-center my-3">Listado de productos</h2>
			{error ? <p className="font-weight-bold alert alert-danger text-center mt-4">Hubo un error</p> : null}
			{loading ? <p className="text-center">Cargando</p> : null}
			<table className="table table-striped">
				<thead className="bg-primary table-dark">
					<tr>
						<th scope="col">nombre</th>
						<th scope="col">precio</th>
						<th scope="col">Acciones</th>
					</tr>
				</thead>

				<tbody>{products.length !== 0 && products.map(product => <Product key={product.id} product={product} />)}</tbody>
			</table>
		</>
	);
};
