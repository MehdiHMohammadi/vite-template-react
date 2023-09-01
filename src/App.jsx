import "./App.css";
import List from "./components/list";
import InputWithLabel from "./components/InputWithLabel";
import initialStories from "./data/stories";
import useStorageState from "./hooks/useStorageState";
import { useState, useEffect } from "react";

const App = () => {
  console.log("APP");

  const [stories, setStories] = useState([]);
  const [searchText, setSearchText] = useStorageState("search", "");

  const getAsyncStories = () =>
    new Promise((resolve) => {
      setTimeout(() => resolve({ data: { stories: initialStories } }), 2000);
    });

  useEffect(() => {
    getAsyncStories().then((result) => {
      setStories(result.data.stories);
      console.log(stories);
    });
  }, []);

  const handleSearch = (event) => {
    setSearchText(event.value);
  };

  const handleRemoveStory = (id) => {
    // setStories((prev) => prev.filter(({ id: storyId }) => storyId !== id));
    const newStories = stories.filter((story) => story.id !== id);
    setStories(newStories);
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
          isFocused="true"
        />

        <List list={searchedStoreis} onRemoveItem={handleRemoveStory} />
      </div>
    </>
  );
};

export default App;
