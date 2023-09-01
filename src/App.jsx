import "./App.css";
import List from "./components/list";
import InputWithLabel from "./components/InputWithLabel";
import initialStories from "./data/stories";
import useStorageState from "./hooks/useStorageState";
import { useReducer, useEffect } from "react";

const storiesReducer = (state, action) => {
  switch (action.type) {
    case "STORIES_FETCH_INIT":
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case "STORIES_FETCH_SUCCESS":
      return {
        ...state,
        isLoading: false,
        isError: false,
        data: action.payload,
      };
    case "STORIES_FETCH_FAILURE":
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    case "SET_STORIES":
      return action.payload;
    case "REMOVE_STORY":
      return {
        ...state,
        data: state.data.filter((story) => story.id !== action.payload),
      };

    default:
      return state;
  }
};

const App = () => {
  console.log("APP");

  const [stories, dispatchStories] = useReducer(storiesReducer, {
    data: [],
    isLoading: false,
    isError: false,
  });
  const [searchText, setSearchText] = useStorageState("search", "");

  const getAsyncStories = () =>
    new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({ data: { stories: initialStories } });
        // reject();
      }, 2000);
    });

  useEffect(() => {
    dispatchStories({ type: "STORIES_FETCH_INIT" });
    getAsyncStories()
      .then((result) => {
        // setStories(result.data.stories);
        dispatchStories({
          type: "STORIES_FETCH_SUCCESS",
          payload: result.data.stories,
        });
      })
      .catch(() => dispatchStories({ type: "STORIES_FETCH_FAILURE" }));
  }, []);

  const handleSearch = (event) => {
    setSearchText(event.value);
  };

  const handleRemoveStory = (id) => {
    dispatchStories({ type: "REMOVE_STORY", payload: id });
  };

  const searchedStoreis = stories.data.filter((story) =>
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
        {/* {isError && <h1>Error in Loading Data !!!!?</h1>} */}
        {stories.isError ? <h1>Error in Loading Data !!!!?</h1> : ""}
        {stories.isLoading ? (
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
