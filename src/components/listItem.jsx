import PropTypes from "prop-types";

const ListItem = ({ id, url, title, author, points, onRemoveItem }) => {
  ListItem.propTypes = {
    url: PropTypes.string,
    title: PropTypes.string,
    author: PropTypes.string,
    points: PropTypes.number,
    onRemoveItem: PropTypes.func,
  };
  const handleRemoveItem = () => {
    onRemoveItem(id);
  };

  console.log("List Items");
  return (
    <>
      {/* <li key={props.item.id}> */}
      <li className="flex justify-between">
        <div>
          <span className="font-semibold text-gray-900 dark:text-white">
            <a href={url}>{title + "\xa0\xa0"}</a>
          </span>
          for
          <span>{"\xa0\xa0" + author + "\xa0\xa0"}</span>
          with points of
          <span className="font-semibold text-gray-900 dark:text-white">
            {"\xa0\xa0" + points}
          </span>
        </div>

        <div className="flex">
          <button
            onClick={handleRemoveItem}
            // type="submit"
            className="ml-8 text-white  right-2.5 bottom-2.5 bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-blue-800"
          >
            Remove
          </button>
        </div>
      </li>
    </>
  );
};

export default ListItem;
