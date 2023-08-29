import { createContext, useState } from "react";
import Content from "./Content";
import SearchEngine from "./SearchEngine";

const func = createContext();
export default function App() {
  const [search, setSearch] = useState(false);
  const [tags,setTags] = useState([])

function checkCopy(item) {
  if(tags.includes(item)) return
  addTag(item)
}

  function addTag(item) {
    setTags(prev => [...prev,item])
  }
  function removeTag(item) {
    const copy = [...tags]
    const indexFound = copy.findIndex(e => e == item)
    copy.splice(indexFound,1)
    setTags(copy)
  }
  function open() {
    setSearch(true);
  }
  function close() {
    setSearch(false);
    setTags([])
  }
  return (
    <main>
      <picture>
        <source srcSet="/images/bg-header-mobile.svg" media="(width < 600px)" />
        <img src="/images/bg-header-desktop.svg" alt="decoration" />
      </picture>
      <func.Provider value={{open,close,checkCopy,removeTag,tags}}>
        {search && <SearchEngine  />}
        <Content />
      </func.Provider>
    </main>
  );
}

export {func}