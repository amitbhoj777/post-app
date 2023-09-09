import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LoginComponent, SignupComponent, PostListing } from "./components";
import "./styles.css";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginComponent />} />
        <Route path="/signup" element={<SignupComponent />} />
        <Route path="/listing" element={<PostListing />} />
      </Routes>
    </BrowserRouter>
  );
}
