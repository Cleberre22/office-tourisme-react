import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import Menu from "../../../components/Menu";
import axios from "axios";
import { Link } from "react-router-dom";

const Articles = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    displayArticles();
  }, []); // Sans les crochets ça tourne en boucle

  const displayArticles = async () => {
    await axios.get("http://localhost:8000/api/articles").then((res) => {
      setArticles(res.data);
      console.log(res.data);
    });
  };
  // console.log(articles);
  const deleteArticle = (id) => {
    axios
      .delete(`http://localhost:8000/api/articles/${id}`)
      .then(displayArticles);
  };

  return (
    <div>
      <Menu />
      <Link to={`/dashboard/articles/add`} className="btn btn-primary me-2 m-3">
        Ajouter un nouvel article
      </Link>
      <div className="container mt-5">
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Titre de l'article</th>
              <th>Contenu de l'article</th>
              <th>Image</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {articles.map((article) => (
              <tr key={article.id}>
                <td>{article.titleArticle}</td>
                <td>{article.contentArticle}</td>
                <td>
                  <img
                    src={`http://localhost:8000/storage/uploads/${article.image}`}
                    width="75px"
                  />
                </td>
                <td>
                  <Link
                    to={`/dashboard/articles/edit/${article.id}`}
                    className="btn btn-success me-2"
                  >
                    Modifier
                  </Link>
                  <Button
                    variant="danger"
                    onClick={() => {
                      deleteArticle(article.id);
                    }}
                  >
                    Supprimer
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default Articles;
