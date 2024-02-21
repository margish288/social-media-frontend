import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";
import HomePage from "pages/homePage";
import LoginPage from "pages/loginPage";
import ProfilePage from "pages/profilePage";
import SeachPage from "pages/searchPage";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { themeSettings } from "./theme";
import Layout from "components/Layout";
import NotFound from "pages/notfound";
import { getUserToken } from "misc/getUserToken";
import "./css/App.css";

function App() {
  const mode = useSelector((state) => state.localStore.mode);
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
  const { user } = useSelector((state) => state.auth);
  const isAuth = Boolean(user?.token);

  if (!getUserToken()) {
    localStorage.setItem("token", user?.token);
  }

  // TODO:
  // Fix like button
  // Fix ADD friend
  // Fix Profile page
  // Fix Search API
  // Fix logout and accesstoken removal on logout
  // Fix register page

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
                    <ProfilePage />
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
