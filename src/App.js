import "./App.scss";
import { Routes, Route } from "react-router-dom";
import { MainLayout, WebPageLayout } from "./Layouts";
import { Home, WebPage, Error404 } from "./pages";
import { LanguageProvider } from "./context";
import { FixedButton } from "./components/FixedButton/FixedButton";

function App() {
  return (
    <div className="App">
      <LanguageProvider>
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
        <FixedButton />
      </LanguageProvider>
    </div>
  );
}

export default App;
