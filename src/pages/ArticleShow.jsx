import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Logo from "../components/Logo";
import Menu from "../components/Menu";
import Footer from "../components/Footer";

const ArticleShow = (id) => {

    const { articleId } = useParams();
    // console.log(article);
    const [article, setArticle] = useState([]);


    useEffect(() => {
        displayArticles();
      }, []); // Sans les crochets ça tourne en boucle
    
      const displayArticles = async () => {
        await axios.get("http://localhost:8000/api/articles/"+articleId)
        .then((res) => {
          setArticle(res.data);
        //   console.log(res.data);
        });
      };
console.log(article);
  return (
    <div>
      <Logo />
      <Menu />
 
        <section className="articleShow" >
            <img 
                className="imageShowArticle"
                src={`http://localhost:8000/storage/uploads/${article.image}`} 
                alt="{article.titleArticle}" />
          <p>{article.titleArticle}</p> 
          <p>{article.contentArticle}</p> 
        </section>
   
      <Footer />
    </div>
  );
};

export default ArticleShow;
