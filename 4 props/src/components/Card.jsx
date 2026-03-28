// --> instead of props (properties) you can write any name also, and you have to pass data from parent to child, vice-versa is not possible

const Card = (props) => {
  console.log(props, props.user, props.age, props.img); 
  return (
    <div className="card">
        <img src={props.img} /> 
        <h1>{props.user}</h1> {/* Use curly bracket for calling property */}
        <p>I am pro coder and I am {props.age} yrs old, currently learning react </p>
        <button>view profile</button>
      </div>
  )
}

export default Card