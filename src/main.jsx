import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./redux/store.jsx";
import "./api/apiConfig.jsx";

const isProduction = import.meta.env.PROD;
if (isProduction) {
	console.log = () => {};
	console.error = () => {};
	console.debug = () => {};
}

ReactDOM.createRoot(document.getElementById("root")).render(
    <Provider store={store}>
        <App />
    </Provider>
);
