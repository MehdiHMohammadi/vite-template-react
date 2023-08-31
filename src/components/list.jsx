import ListItem from "./listItem";
import PropTypes from "prop-types";

const List = ({ list }) => {
  List.propTypes = {
    list: PropTypes.array,
  };

  console.log("List");
  return (
    <>
      <ol className="max-w-md space-y-1 text-gray-500 list-decimal list-inside dark:text-gray-400">
        <h2 className="text-left mb-2 text-lg font-semibold text-gray-900 dark:text-white">
          Top Lists:
        </h2>
        {list.map(({ id, ...item }) => (
          <ListItem key={id} {...item} />
        ))}
      </ol>
    </>
  );
};

export default List;
