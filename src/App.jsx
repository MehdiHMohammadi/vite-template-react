import "./App.css";
import List from "./components/list";
import InputWithLabel from "./components/InputWithLabel";
import stories from "./data/stories";
import useStorageState from "./hooks/useStorageState";

const App = () => {
  console.log("APP");

  // const [searchText, setSearchText] = useState(
  //   localStorage.getItem("search") || ""
  // );

  const [searchText, setSearchText] = useStorageState("search", "");

  const handleSearch = (event) => {
    // console.log(e.value);
    setSearchText(event.value);
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
        {/* <List props={list} /> */}
        {/* <List list={stories} /> */}
        <List list={searchedStoreis} />
        {/* <h1>{searchText}</h1> */}
      </div>
    </>
  );
};

export default App;
