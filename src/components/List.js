import "../styles.css";
import Item from "./Item";
import info from "../info";

const List = () => {
  const list = info.map((data) => <Item key={data.id} info={data} />);
  console.log(list);
  return <ul className="timeline">{list}</ul>;
};

export default List;
