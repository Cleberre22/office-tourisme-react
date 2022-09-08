import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Menu from "../../../components/Menu";
import Footer from "../../../components/Footer";
import Logo from "../../../components/Logo";

const AddArticle = () => {
  const navigate = useNavigate();

  const [titleArticle, setTitleArticle] = useState("");
  const [contentArticle, setContentArticle] = useState("");
  const [image, setImage] = useState("");
  const [users, setUsers] = useState("");
  const [user_id, setUser_id] = useState("");
  const [validationError, setValidationError] = useState({});

  const changeHandler = (event) => {
    setImage(event.target.files[0]);
  };

  //Fonction d'ajout de club
  const addArticle = async (e) => {
    e.preventDefault();

    const formData = new FormData();

    formData.append("titleArticle", titleArticle);
    formData.append("contentArticle", contentArticle);
    formData.append("user_id", user_id);
    formData.append("image", image);

  //   await axios.get("http://127.0.0.1:8000/users", {
  //     "headers" : { "Authorization":"Bearer"+localStorage.getItem('access_token') }
  // }).then((actualData) => { setUsers(actualData.data.data) });
  // console.log(localStorage);

    await axios
      .post(`http://localhost:8000/api/articles`, formData)
      .then(navigate("/dashboard/articles"))
      .catch(({ response }) => {
        if (response.status === 422) {
          setValidationError(response.data.errors);
        }
      });
  };

  return (
    <div>
      <Logo />
      <Menu />

    

      {/* {users.map((user) => 
      <div className='App'>
        <p>
          {user.id} {user.name} {user.idade}
        </p>
        
      </div>
      )} */}





      <div className="container mt-5 addArticle">
        <div className="row justify-content-center">
          <div className="col-12 col-sm-12 col-md-6">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Création d'un nouvel article</h4>
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
                  <Form onSubmit={addArticle}>
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
                      Créer l'article
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

export default AddArticle;
