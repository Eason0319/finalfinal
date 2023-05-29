import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ConfigProvider } from 'antd';
import { useSelector } from "react-redux";
import { HelmetProvider } from 'react-helmet-async'
import Buy from './pages/Buy'
import Product from './pages/Product';
import { darkTheme, lightTheme } from './theme';
import { selectLightMode } from "./redux/colorSlice";
import Home from './pages/Home';
import ScrollToTop from './ScrollToTop';

function Router() {
  const lightMode = useSelector(selectLightMode);
  const theme = lightMode ? lightTheme : darkTheme;
  return (
      <ConfigProvider theme={theme} >
        <HelmetProvider context={{}}>
          <BrowserRouter>
          <ScrollToTop />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="buy" element={<Buy />} />
              <Route path="products">
                <Route path="category/:categoryName" element={<Buy />} />
                <Route path="id/:productId" element={<Product />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </HelmetProvider>
      </ConfigProvider>
  );
}

export default Router;
