import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import { SelectedSquareProvider } from "./contexts/SelectedSquareContext";
import Home from "./pages/Home";
import Practice from "./pages/Practice";
import Layout from "./components/Layout";
import "./App.css";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route
          path="/practice/:cluster"
          element={
            <SelectedSquareProvider>
              <Practice />
            </SelectedSquareProvider>
          }
        />
      </Route>
    )
  );

  return (
    <div className="app-container h-screen bg-gradient-to-b from-[#f7e3cb] to-[#dfb499] text-[#5c3a00]">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
