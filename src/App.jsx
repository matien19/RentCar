import Home from "./pages/Home";
import Kontak from "./pages/Kontak";
import Armada from "./pages/Armada";
import TentangKami from "./pages/TentangKami";
import LoginPage from "./pages/LoginPage";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/armada' element={<Armada />} />
          <Route path='/tentang_kami' element={<TentangKami />} />
          <Route path='/kontak' element={<Kontak />} />
          <Route path='/login' element={<LoginPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
