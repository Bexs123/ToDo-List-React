import "./Item.css";

const Item = ({ value, checked, handleChecked, handleDelete, date }) => {
  return (
    <li className={`${checked ? "checked" : undefined}`}>
      <div className="itemContainer">
        <p>{value}</p>
        <div>
          <input
            type="checkbox"
            name=""
            id=""
            checked={checked}
            onChange={handleChecked}
          />
          <button onClick={handleDelete}>🗑</button>
        </div>
      </div>
      <p className="date">{date.getDate()}/{date.getMonth()}: {date.getHours()}</p>
    </li>
  );
};

export default Item;