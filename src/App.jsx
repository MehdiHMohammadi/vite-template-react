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
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const getAsyncStories = () =>
    new Promise((resolve, reject) => {
      setTimeout(() => {
        // resolve({ data: { stories: initialStories } });
        reject();
      }, 2000);
    });

  useEffect(() => {
    setIsLoading(true);
    getAsyncStories()
      .then((result) => {
        setStories(result.data.stories);
        setIsLoading(false);
      })
      .catch(() => setIsError(true));
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

  // if (isLoading) {
  //   return <h1>loading...</h1>;
  // }

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
        {isError && <h1>Error in Loading Data !!!!?</h1>}
        {isLoading ? (
          <h1 className="text-left mb-2 text-lg font-semibold text-gray-900 dark:text-white">
            loading...
          </h1>
        ) : (
          <List list={searchedStoreis} onRemoveItem={handleRemoveStory} />
        )}
      </div>
    </>
  );
};

export default App;
