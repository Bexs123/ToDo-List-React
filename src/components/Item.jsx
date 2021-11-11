import "./Item.css";
import Date from "./Date"

const Item = ({ value, checked, handleChecked, handleDelete, date }) => {
  return (
    <li className={`itemWrapper ${checked ? "checked" : undefined}`}>
      <div className="itemContainer">
        <p>{value}</p>
        <div className="actionWrapper">
          <input
            type="checkbox"
            className="actionButton"
            name=""
            id=""
            checked={checked}
            onChange={handleChecked}
          />
          <p className="actionButton bin" onClick={handleDelete}>☠️</p>
        </div>
      </div>
      <Date todoDate={date} />
    </li>
  );
};

export default Item;