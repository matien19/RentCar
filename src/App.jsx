import Home from "./pages/Home";
import Kontak from "./pages/Kontak";
import Armada from "./pages/Armada";
import TentangKami from "./pages/TentangKami";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/AfterLogin/HomePage";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DetailPesanan from "./pages/AfterLogin/DetailPesanan";
import MetodePembayaran from "./pages/AfterLogin/MetodePembayaran";
import HutanPinus from "./pages/AfterLogin/HutanPinus";
import Woodland from "./pages/AfterLogin/Woodland";
import TelagaBiru from "./pages/AfterLogin/TelagaBiru";

import PondokCai from "./pages/AfterLogin/PondokCai";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/Kontak" Component={Kontak} />
          <Route path="/Armada" Component={Armada} />
          <Route path="/Tentang_Kami" Component={TentangKami} />
          <Route path="/Login" Component={LoginPage} />
          <Route path="/HomePage" Component={HomePage} />
          <Route path="/Detail" Component={DetailPesanan}/>
          <Route path="/MetodePembayaran" Component={MetodePembayaran}/>
          <Route path="/HutanPinus" Component={HutanPinus}/>
          <Route path="/Woodland" Component={Woodland}/>
          <Route path="/TelagaBiru" Component={TelagaBiru}/>
          <Route path="/PondokCai" Component={PondokCai}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
