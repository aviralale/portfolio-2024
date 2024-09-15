import React from "react";
import Layout from "./pages/Layout";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import { ThemeProvider } from "./utils/theme/ThemeProvider";

export default function App() {
  return (
    <ThemeProvider>
      <div className="p-4 h-screen w-screen flex items-center justify-center">
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </Layout>
      </div>
    </ThemeProvider>
  );
}
