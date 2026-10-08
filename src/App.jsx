import { Routes, Route, Navigate } from "react-router-dom";

import CommonLoginScreen from "./Components-Login/CommonLoginScreen";
import ForgotPassword from "./Components-ForgotPassword/ForgotPassword";
import PlacementReset from "./Components-PlacementReset/PlacementReset";
import ResetPassword from "./ResetPassword/ResetPassword";
import SuccessfulPage from "./SuccessfulPage/SuccessfulPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" replace />} />
      <Route path="/login" element={<CommonLoginScreen />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/reset-link-sent" element={<PlacementReset />} />
      <Route path="/reset-password" element={<ResetPassword />} />
      <Route path="/success" element={<SuccessfulPage />} />
      <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
  );
}

export default App;
