import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import { PersistGate } from 'redux-persist/integration/react'
import returnStoreAndPersistor  from "./redux/store";
const {store,persistor} = returnStoreAndPersistor();



const root = createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>

      <App />
      </PersistGate>

    </Provider>
  </React.StrictMode>,
   
);
 