import { useContext, useState } from "react";
import { func } from "./App";

export default function SearchEngine() {
  const search = useContext(func);
  return (
    <div className="search-engine">
      <div className="tags-container">
        {search["tags"].map((e, index) => {
          return (
            <div className="tag-box" key={index}>
              <p>{e}</p>
              <button onClick={() => search["removeTag"](e)}>
                <img src="images/icon-remove.svg" alt="remove mark" />
              </button>
            </div>
          );
        })}
      </div>
      <button onClick={() => search["close"]()}>Clear</button>
    </div>
  );
}
