import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Index from "./pages/dashboard/Index";

import Articles from "./pages/dashboard/articles/Articles";
import AddArticle from "./pages/dashboard/articles/AddArticle";
import EditArticle from "./pages/dashboard/articles/EditArticle";

import PlaceTypes from "./pages/dashboard/placeTypes/PlaceTypes";
import AddPlaceType from "./pages/dashboard/placeTypes/AddPlaceType";
import EditPlaceType from "./pages/dashboard/placeTypes/EditPlaceType";

import Places from "./pages/dashboard/places/Places";
import AddPlace from "./pages/dashboard/places/AddPlace";
import EditPlace from "./pages/dashboard/places/EditPlace";

import Home from "./pages/Home";

function App() {

  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/dashboard/index" element={<Index />} />

        <Route path="/dashboard/articles" element={<Articles />} />
        <Route path="/dashboard/articles/add" element={<AddArticle />} />
        <Route path="/dashboard/articles/edit/:article" element={<EditArticle />} />

        <Route path="/dashboard/placeTypes" element={<PlaceTypes />} />
        <Route path="/dashboard/placeTypes/add" element={<AddPlaceType />} />
        <Route path="/dashboard/placeTypes/edit/:placeType" element={<EditPlaceType />} />

        <Route path="/dashboard/places" element={<Places />} />
        <Route path="/dashboard/places/add" element={<AddPlace />} />
        <Route path="/dashboard/places/edit/:place" element={<EditPlace />} />

        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
