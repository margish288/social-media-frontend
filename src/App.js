import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";
import HomePage from "pages/homePage";
import LoginPage from "pages/loginPage";
import ProfilePage from "pages/profilePage";
import SeachPage from "pages/searchPage";
import { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { themeSettings } from "./theme";
import Layout from "components/Layout";
import NotFound from "pages/notfound";
import "./css/App.css";

function App() {
  const mode = useSelector((state) => state.localStore.mode);
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
  const authUser = useSelector((state) => state.auth);
  const token = authUser?.user?.token || "";
  const user = authUser?.user?.user;
  const isAuth = Boolean(token);

  // TODO:
  // Fix like button
  // Fix ADD friend

  return (
    <div className="app">
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route
              path="/home"
              element={
                isAuth ? (
                  <Layout>
                    <HomePage />
                  </Layout>
                ) : (
                  <Navigate to="/" />
                )
              }
            />
            <Route
              path="/profile/:userId"
              element={
                isAuth ? (
                  <Layout>
                    <ProfilePage user={user} />
                  </Layout>
                ) : (
                  <Navigate to="/" />
                )
              }
            />
            <Route
              path="/search"
              element={
                isAuth ? (
                  <Layout>
                    <SeachPage />
                  </Layout>
                ) : (
                  <Navigate to="/" />
                )
              }
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
