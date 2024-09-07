import styled, { ThemeProvider } from "styled-components";
import { lightTheme } from "./utils/Themes";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import { useState } from "react";
import Authentication from "./pages/Authentication";
import ShopListing from "./pages/ShopListing";
import Favourite from "./pages/Favourite";
import Cart from "./pages/Cart";
import ProductDetails from "./pages/ProductDetails";
import { useDispatch, useSelector } from "react-redux";
import ToastMessage from "./components/ToastMessage";
import Footer from "./components/Footer";

const Container = styled.div`
  width: 100%;
  min-height: 100vh; /* Allows the container to grow with content */
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.bg};
  color: ${({ theme }) => theme.text_primary};
  overflow-x: hidden;
  transition: all 0.2s ease;
`;

const MainContent = styled.div`
  flex: 1; /* Ensures this takes up the remaining space, pushing the footer to the bottom */
`;

function App() {
  const { currentUser } = useSelector((state) => state.user);
  const { open, message, severity } = useSelector((state) => state.user);
  const [openAuth, setOpenAuth] = useState(false);

  return (
    <ThemeProvider theme={lightTheme}>
      <BrowserRouter>
        <Container>
          <Navbar setOpenAuth={setOpenAuth} currentUser={currentUser} />
          
          <MainContent>
            <Routes>
              <Route path="/" exact element={<Home />} />
              <Route path="/shop" exact element={<ShopListing />} />
              <Route path="/favorite" exact element={<Favourite />} />
              <Route path="/cart" exact element={<Cart />} />
              <Route path="/shop/:id" exact element={<ProductDetails />} />
            </Routes>
          </MainContent>
          
          {openAuth && (
            <Authentication openAuth={openAuth} setOpenAuth={setOpenAuth} />
          )}
          {open && (
            <ToastMessage open={open} message={message} severity={severity} />
          )}
          
          <Footer />
        </Container>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
