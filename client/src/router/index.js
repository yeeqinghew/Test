import React from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import OverallLayout from "../layouts/Layout";
import HomePage from "../components/HomePage";
import toast, { Toaster } from "react-hot-toast";

import "mapbox-gl/dist/mapbox-gl.css";
import "react-confirm-alert/src/react-confirm-alert.css"; // Import css

export default () => {
  return (
    <div className="App">
      <script src="https://api.mapbox.com/mapbox-gl-js/v3.1.2/mapbox-gl.js"></script>
      <link
        href="https://api.mapbox.com/mapbox-gl-js/v3.1.2/mapbox-gl.css"
        rel="stylesheet"
      />
      <script src="path-to-the-file/splide.min.js"></script>
      <style>
        @import
        url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap')
      </style>
      <link
        href="http://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.3.0/css/font-awesome.css"
        rel="stylesheet"
        type="text/css"
      ></link>
      <Toaster />
      <Routes>
        <Route element={<OverallLayout />}>
          <Route path="/" element={<HomePage />} />
        </Route>
      </Routes>
    </div>
  );
};
