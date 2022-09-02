import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import Menu from "../../../components/Menu";
import Footer from "../../../components/Footer";

const EditArticle = () => {

  const { article } = useParams();
  const navigate = useNavigate();

  const [titleArticle, setTitleArticle] = useState("");
  const [contentArticle, setContentArticle] = useState("");
  const [image, setImage] = useState(null);
  const [user_id, setUser_id] = useState(1);
  const [validationError, setValidationError] = useState({});

  useEffect(() => {
    getArticle();
  }, []);

  // GET - Récupère les valeurs de la fiche avec l'API
  const getArticle = async () => {
    await axios
      .get(`http://localhost:8000/api/articles/${article}`)
      .then((res) => {
        console.log(res.data);
        setTitleArticle(res.data.titleArticle);
        setContentArticle(res.data.contentArticle);
      })
      .catch((error) => {
        console.log(error);
      });
  };



  

  const changeHandler = (event) => {
    setImage(event.target.files[0]);
  };

  //Fonction d'ajout de club
  const updateArticle = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("_method", "PATCH");
    formData.append("titleArticle", titleArticle);
    formData.append("contentArticle", contentArticle);
    formData.append("user_id", user_id);
    formData.append("image", image);
    if (image !== null) {
      formData.append("image", image);
    }

    await axios
      .post(`http://localhost:8000/api/articles/${article}`, formData)
      .then(navigate("/dashboard/articles"))
      .catch(({ response }) => {
        if (response.status === 422) {
          setValidationError(response.data.errors);
        }
      });
  };

  return (
    <div>
      <Menu />
      <div className="container mt-5 addArticle">
        <div className="row justify-content-center">
          <div className="col-12 col-sm-12 col-md-6">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Modifier un article</h4>
                <hr />
                <div className="form-wrapper">
                  {Object.keys(validationError).length > 0 && (
                    <div className="row">
                      <div className="col-12">
                        <div className="alert alert-danger">
                          <ul className="mb-0">
                            {Object.entries(validationError).map(
                              ([key, value]) => (
                                <li key={key}>{value}</li>
                              )
                            )}
                          </ul>
                        </div>
                      </div>
                    </div>
                  )}

                  <Form onSubmit={updateArticle}>

                    <Row>
                      <Col>
                        <Form.Group controlId="Title">
                          <Form.Label>Titre de l'article</Form.Label>
                          <Form.Control
                          className="mb-3"
                            type="text"
                            value={titleArticle}
                            onChange={(event) => {
                              setTitleArticle(event.target.value);
                            }}
                          />
                        </Form.Group>
                      </Col>
                    </Row>

                    <Row>
                      <Col>
                      <Form.Group
                          className="mb-3"
                          controlId="Content"
                        >
                          <Form.Label>Contenu de l'article</Form.Label>
                          <Form.Control 
                          as="textarea" 
                          rows={7}
                          value={contentArticle}
                          onChange={(event) => {
                            setContentArticle(event.target.value);
                          }}
                          />
                        </Form.Group>
                      </Col>
                    </Row>

                    <Row>
                      <Col>
                        <Form.Group controlId="Image">
                          <Form.Label>Image</Form.Label>
                          <Form.Control type="file" onChange={changeHandler} />
                        </Form.Group>
                      </Col>
                    </Row>

                    <Button
                      variant="primary"
                      className="mt-3"
                      size="lg"
                      block="block"
                      type="submit"
                    >
                      Modifier
                    </Button>
                  </Form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
    
  );

};

export default EditArticle;
