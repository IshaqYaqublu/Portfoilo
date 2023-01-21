import React from "react";
// import { PersistGate } from "redux-persist/integration/react";
import { BrowserRouter } from "react-router-dom";
// import { persistStore } from "redux-persist";
// import { Provider } from "react-redux";
// import { store } from "redux/store";
import Router from "./pages";

function App() {
  // let persistor = persistStore(store);
  return (
    // <Provider store={store}>
    // <PersistGate loading={null} persistor={persistor}>
    <BrowserRouter>
      <Router />
    </BrowserRouter>
    // </PersistGate>
    // </Provider>
  );
}

export default App;
