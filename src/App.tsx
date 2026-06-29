import { BrowserRouter, Routes, Route } from "react-router-dom";
import { TrangGioiThieu } from "./pages/TrangGioiThieu";
import { TrangChuyenMon } from "./pages/TrangChuyenMon";
import { TrangHoatDong } from "./pages/TrangHoatDong";
import { TrangCamNhan } from "./pages/TrangCamNhan";
import { TrangDatLich } from "./pages/TrangDatLich";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TrangGioiThieu />} />
        <Route path="/chuyen-mon" element={<TrangChuyenMon />} />
        <Route path="/hoat-dong" element={<TrangHoatDong />} />
        <Route path="/cam-nhan" element={<TrangCamNhan />} />
        <Route path="/dat-lich" element={<TrangDatLich />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;