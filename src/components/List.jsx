import Item from "./Item";

const List = (props) => {
  return (
    <ul>
      {props.todos.map((element, index) => {
        return (
          <Item 
            value={element.value} 
            checked={element.checked} 
            key={index} 
            date={element.date}
            handleDelete={() => props.handleDelete(index)}
            handleChecked={() => props.handleChecked(index)} 
          />
        );
      })}
    </ul>
  );
};

export default List;