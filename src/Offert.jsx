import { useContext, useEffect, useState } from "react";
import { func } from "./App.jsx";

export default function Offert({ data }) {
  const [tags, setTags] = useState([
    data["role"],
    data["level"],
    ...data["languages"],
    ...data["tools"],
  ]);
  useEffect(() => {
    setTags([
      data["role"],
      data["level"],
      ...data["languages"],
      ...data["tools"],
    ]);
  }, [data]);
  const search = useContext(func);
  return (
    <div className="offert">
      <div className="introductory-information">
        <img src={data["logo"]} alt="profile picture" />
        <div className="details">
          <p className="name">
            {data["company"]}
            {data["new"] && <span className="current">NEW!</span>}
            {data["featured"] && <span className="featured">FEATURED</span>}
          </p>
          <h2>{data["position"]}</h2>
          <ul>
            <li>{data["postedAt"]}</li>
            <li>{data["contract"]}</li>
            <li>{data["location"]}</li>
          </ul>
        </div>
      </div>
      <ul className="tags">
        {tags.map((e, index) => {
          return (
            <li key={index}>
              <button
                onClick={(e) => {
                  search["open"]();
                  search["checkCopy"](e.target.textContent);
                }}>
                {e}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
