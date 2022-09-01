import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import Menu from "../../components/Menu";
import axios from "axios";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer";

const index = () => {
  return (
    <div>
      <Menu />
      <h1>DASHBOARD</h1>
      <Link to={`/dashboard/articles/add`} className="btn btn-primary me-2 m-3">
        Ajouter un nouvel article
      </Link>
      <Link
        to={`/dashboard/placeTypes/add`}
        className="btn btn-primary me-2 m-3"
      >
        Ajouter un nouveau type de lieu
      </Link>
      <Footer />
    </div>
  );
};

export default index;
