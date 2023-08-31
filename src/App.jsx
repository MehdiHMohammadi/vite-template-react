import "./App.css";
import List from "./components/list";
import InputWithLabel from "./components/InputWithLabel";
import initialStories from "./data/stories";
import useStorageState from "./hooks/useStorageState";
import { useState } from "react";

const App = () => {
  console.log("APP");

  const [stories, setStories] = useState(initialStories);
  const [searchText, setSearchText] = useStorageState("search", "");

  const handleSearch = (event) => {
    setSearchText(event.value);
  };

  const handleRemoveStory = (id) => {
    setStories((prev) => prev.filter(({ id: storyId }) => storyId !== id));
  };

  const searchedStoreis = stories.filter((story) =>
    story.title.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <>
      <div className="h-screen  flex flex-col justify-center items-center gap-6 bg-slate-700">
        <InputWithLabel
          id="search"
          label="Search"
          value={searchText}
          onInputeChange={handleSearch}
          type="search"
          isFocused="false"
        />

        <List list={searchedStoreis} onRemoveItem={handleRemoveStory} />
      </div>
    </>
  );
};

export default App;
