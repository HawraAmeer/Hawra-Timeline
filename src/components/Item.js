import "../styles.css";

const Item = (props) => {
  const side = () => {
    if (props.info.id % 2 === 0) return "";
    else return "timeline-inverted";
  };
  return (
    <li className={side()}>
      <div className="timeline-image">
        <img
          className="rounded-circle img-fluid"
          src={props.info.image}
          alt={props.info.date}
        />
      </div>
      <div className="timeline-panel">
        <div className="timeline-heading">
          <h4>{props.info.date}</h4>
          <h4 class="subheading">{props.info.highlight}</h4>
        </div>
        <div className="timeline-body">
          <p className="text-muted">{props.info.event}</p>
        </div>
      </div>
    </li>
  );
};

export default Item;
