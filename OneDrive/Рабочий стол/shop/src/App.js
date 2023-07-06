import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import Navigation from "./routes/Navigation";
import Auth from "./routes/Auth/Auth";
import Shop from "./routes/shop/Shop";
import Checkout from "./routes/Checkout/Checkout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop/*" element={<Shop />} />
        <Route path="auth" element={<Auth />} />
        <Route path="checkout" element={<Checkout />} />
      </Route>
    </Routes>
  );
}

export default App;
