import ListItem from "./listItem";
import PropTypes from "prop-types";

const List = ({ list, onRemoveItem }) => {
  List.propTypes = {
    list: PropTypes.array,
    onRemoveItem: PropTypes.func,
  };

  console.log("List");
  return (
    <>
      <ol className="max-w-3xl space-y-1 text-gray-500 list-decimal list-inside dark:text-gray-400">
        <h2 className="text-left mb-2 text-lg font-semibold text-gray-900 dark:text-white">
          Top Lists:
        </h2>
        {list.map((item) => (
          <ListItem key={item.id} {...item} onRemoveItem={onRemoveItem} />
        ))}
      </ol>
    </>
  );
};

export default List;
