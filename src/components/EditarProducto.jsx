/** @format */

import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { editingProduct } from "../actions/productActions";

export const EditProduct = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const { productEdit } = useSelector(state => state.products);
	const [product, setProduct] = useState({ name: "", price: "" });

	useEffect(() => {
		setProduct(productEdit);
	}, [productEdit]);

	const handleChange = e => {
		setProduct({ ...product, [e.target.name]: e.target.value });
	};

	const handleSubmit = e => {
		e.preventDefault();

		dispatch(editingProduct(product));
		navigate("/");
	};

	return (
		<div className="row justify-content-center">
			<div className="col-md-8">
				<div className="card">
					<div className="card-body">
						<h2 className="text-center mb-2 font-weight-bold">Editar Producto</h2>
						<form onSubmit={handleSubmit} className="form-group">
							<div>
								<label htmlFor="nombre">Nombre</label>
								<input
									// defaultValue={product?.name}
									type="text"
									className="form-control"
									placeholder="Nombre Producto"
									name="name"
									onChange={handleChange}
									value={product?.name || ""}
								/>
							</div>
							<div>
								<label htmlFor="">Precio</label>
								<input
									// defaultValue={product?.price}
									type="number"
									className="form-control"
									placeholder="precio "
									name="price"
									onChange={handleChange}
									value={product?.price || ""}
								/>
							</div>

							<button type="submit" className="btn btn-primary font-weight-bold text-uppercase d-block w-100">
								Guardar Cambios
							</button>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};
