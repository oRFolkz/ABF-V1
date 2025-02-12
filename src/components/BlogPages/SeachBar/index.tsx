import React, { useState } from "react";
import {
  SearchBarBackground,
  SearchBarCard,
  SearchDiv,
  SearchIcons,
  SearchTxt,
} from "./style.ts";

const SeachBar = () => {
  const [searchTxt, setSearchTxt] = useState("");
  const [artigosTxt, setArtigosTxt] = useState("Todos os artigos");

  const searchBtn = (value) => {
    if (searchTxt === "") {
      setArtigosTxt("Todos os artigos");
    } else {
      setArtigosTxt(`Pesquisando por : '${value}'`);
    }
  };
  return (
    <>
      <SearchBarBackground>
        <SearchBarCard>
          <SearchDiv>
            <input
              type="text"
              name=""
              id=""
              placeholder="Pesquisar Artigo"
              onChange={(e) => setSearchTxt(e.target.value)}
              value={searchTxt}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  searchBtn(searchTxt);
                }
              }}
            />
            <SearchIcons>
              <button
                type="button"
                onClick={() => {
                  setSearchTxt("");
                  setArtigosTxt("Todos os artigos");
                }}
              >
                <i className="fa-solid fa-xmark"></i>
              </button>
              <button
                type="button"
                onClick={() => {
                  searchBtn(searchTxt);
                }}
              >
                <i className="fa-solid fa-magnifying-glass"></i>
              </button>
            </SearchIcons>
          </SearchDiv>
        </SearchBarCard>
        <SearchTxt>
          {}
          <p>{artigosTxt}</p>
        </SearchTxt>
      </SearchBarBackground>
    </>
  );
};

export default SeachBar;
