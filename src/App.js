/** @format */

import { Header } from "./components/Header.jsx";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Products } from "./components/Productos.jsx";
import { NewProduct } from "./components/NuevoProducto.jsx";
import { EditProduct } from "./components/EditarProducto.jsx";

import { Provider } from "react-redux";
import store from "./store";

function App() {
	return (
		<BrowserRouter>
			<Provider store={store}>
				<Header />
				<div className="container mt-3">
					<Routes>
						<Route exact path="/" element={<Products />} />
						<Route exact path="/products/new" element={<NewProduct />} />
						<Route exact path="/products/edit/:id" element={<EditProduct />} />
					</Routes>
				</div>
			</Provider>
		</BrowserRouter>
	);
}

export default App;
