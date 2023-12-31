const IdCard = (props) => {
  return (
    <div className="IdCard">
      <img src={props.picture} alt={props.firstName} />
      <div>
        <p>
          <strong>First name: </strong>
          {props.firstName}
        </p>
        <p>
          <strong>Last name: </strong>
          {props.lastName}
        </p>
        <p>
          <strong>Gender: </strong>
          {props.gender}
        </p>
        <p>
          <strong>Heigt: </strong>
          {props.height}
        </p>
        <p>
          <strong>Birth: </strong>
          {props.birth.toDateString()}
        </p>
      </div>
    </div>
  );
};

export default IdCard;
