import "./LandingPage.css";
import image from "../LandingPage/bg_logo.png";
import SearchBar from "./SearchBar/SearchBar";
import { useUser } from "@clerk/clerk-react";
import { useState } from "react";
import RecipeCard from "../RecipeCard";
import { Button } from "@mui/material";
import cblogo from '../LandingPage/logocropped.png';




const BE_HOST = process.env.REACT_APP_BACKEND_DOMAIN;

const LandingPage = () => {
  const [searchResult, setSearchResult] = useState([]);
  const [nextLink, setNextLink] = useState(null);
  const { isSignedIn, user } = useUser();

  if (isSignedIn) {
    //send userData to BE
    const { primaryEmailAddress, id } = user;
    const userData = {
      email: primaryEmailAddress.emailAddress,
      id: id,
    };
    fetch(BE_HOST + "/api/user", {
      body: JSON.stringify(userData),
      cache: "no-cache",
      mode: "cors",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  const getNextRecipes = async () => {
    let response = await fetch(nextLink);
    let data = await response.json();
    const { hits, _links } = data;
    let result = searchResult;
    if (Object.keys(_links).length !== 0) {
      const { next } = _links;
      setNextLink(next.href);
    } else {
      setNextLink(null);
    }
    hits.forEach((hit) => {
      const { recipe } = hit;
      const {
        image,
        label,
        totalTime,
        url,
        mealType,
        uri,
        cautions,
        cuisineType,
        dietLabels,
        ingredientLines,
        calories,
      } = recipe;
      const id = uri.slice(uri.indexOf("recipe_"));
      result.push({
        image,
        label,
        totalTime,
        url,
        mealType,
        id,
        cautions,
        cuisineType,
        dietLabels,
        ingredientLines,
        calories,
      });
    });
    setSearchResult(result);
    return;
  };

  return (
    
      <div>

        <img src={cblogo} id="logo" />

        <SearchBar
          placeholder="Start browsing for recipes!"
          setSearchResult={setSearchResult}
          setNextLink={setNextLink}
        />
        {searchResult.map((result) => {
          return <RecipeCard recipe={result} key={result.id} />;
        })}
        {nextLink ? (
          <Button
            className="landing-page__pagination-btn"
            variant="contained"
            onClick={getNextRecipes}
          >
            {" "}
            NEXT{" "}
          </Button>
        ) : (
          ""
        )}
      </div>
 
  );
};

export default LandingPage;
