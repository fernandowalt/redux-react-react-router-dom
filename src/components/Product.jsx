/** @format */

import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { deleteProductAction, uploadEditedProduct } from "../actions/productActions";


import Swal from "sweetalert2";

export const Product = ({ product }) => {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const confirmDeleteProduct = id => {
		Swal.fire({
			title: "Estas Seguro?",
			text: "el producto que se elimina no puede ser recuperado",
			icon: "warning",
			showCancelButton: true,
			confirmButtonColor: "#3085d6",
			cancelButtonColor: "#d33",
			confirmButtonText: "si, eliminar!",
			cancelButtonText: "Cancelar",
		}).then(result => {
			if (result.isConfirmed) {
				dispatch(deleteProductAction(id));
			}
		});
	};

	const redirection = product => {
		dispatch(uploadEditedProduct(product))
		navigate(`/products/edit/${product.id}`, { replace: true });
	};

	return (
		<tr>
			<td>{product.name}</td>
			<td>
				{" "}
				<span className="font-weight-bold">$ {product.price}</span>
			</td>
			<td className="acciones">
				<button type="button" className="btn btn-primary mr-2" onClick={() => redirection(product)}>
					Editar
				</button>
				<button type="button" className="btn btn-danger" onClick={() => confirmDeleteProduct(product.id)}>
					Eliminar
				</button>
			</td>
		</tr>
	);
};
