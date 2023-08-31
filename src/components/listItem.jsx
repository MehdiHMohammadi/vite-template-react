import PropTypes from "prop-types";

const ListItem = ({ url, title, author, points }) => {
  ListItem.propTypes = {
    url: PropTypes.string,
    title: PropTypes.string,
    author: PropTypes.string,
    points: PropTypes.number,
  };

  console.log("List Items");
  return (
    <>
      {/* <li key={props.item.id}> */}
      <li>
        <span className="font-semibold text-gray-900 dark:text-white">
          <a href={url}>{title + "\xa0\xa0"}</a>
        </span>
        for
        <span>{"\xa0\xa0" + author + "\xa0\xa0"}</span>
        with points of
        <span className="font-semibold text-gray-900 dark:text-white">
          {"\xa0\xa0" + points}
        </span>
      </li>
    </>
  );
};

export default ListItem;
