import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";
import { App } from "./App";
import { store } from "./store/store";
import { GlobalStyle } from "./ui";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);

root.render(
  <Provider store={store}>
    <BrowserRouter>
        <GlobalStyle />
        <App />
    </BrowserRouter>
  </Provider>,
);
