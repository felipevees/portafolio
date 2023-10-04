import "./App.scss";
import { Routes, Route } from "react-router-dom";
import { MainLayout, WebPageLayout } from "./Layouts";
import { Home, WebPage, Error404 } from "./pages";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <MainLayout>
              <Home />
            </MainLayout>
          }
        />
        <Route
          path="/tecnocredito"
          element={
            <WebPageLayout>
              <WebPage />
            </WebPageLayout>
          }
        />
        <Route
          path="/icard"
          element={
            <WebPageLayout>
              <WebPage />
            </WebPageLayout>
          }
        />
        <Route
          path="/recipeapp"
          element={
            <WebPageLayout>
              <WebPage />
            </WebPageLayout>
          }
        />
        <Route
          path="*"
          element={
            <MainLayout>
              <Error404 />
            </MainLayout>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
