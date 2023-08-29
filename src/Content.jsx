import { useContext, useEffect, useState } from "react";
import objOffer from "./data.json";
import Offert from "./Offert";
import { func } from "./App";
export default function Content() {
  const [sortedOffert, setSortedOffert] = useState(objOffer);
  const search = useContext(func);
  function check() {
    if(search["tags"].length != 0) {
      setSortedOffert([])
      objOffer.forEach(e => {
        const copy = [e["level"],e["role"],...e["languages"],...e["tools"]]
        const accuracy = search["tags"].every(e => copy.includes(e))
        if(accuracy) setSortedOffert((prev) => [...prev,e])
      })
      return
    }
    setSortedOffert(objOffer)
  }
  useEffect(()=> {
    check()
  },[search["tags"]])
  return (
    <div className="content">
      {sortedOffert.map((e, index) => (
        <Offert data={e} key={index} />
      ))}
    </div>
  );
}
