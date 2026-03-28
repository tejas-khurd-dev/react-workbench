const User = (props) => {
  return (
    <div style={{ color: "blue", margin: "5px" }}>{props.name}</div> 
    // Outer {} → "This is JavaScript"
    // Inner {} → An actual JavaScript object
  );
};

export default User;
