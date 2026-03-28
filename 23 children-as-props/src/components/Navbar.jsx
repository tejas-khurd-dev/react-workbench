// const Navbar = (props) => {
//   console.log(props);
//   console.log(props.children[0].props.children);
//   return (
//     <div>
//       <h1>Navbar</h1>
//       {props.children[0]}
//       {props.children[1]}
//     </div>
//   )
// }

// OR use destructuring

const Navbar = ({theme, children}) => {
  console.log(theme);
  console.log(children);
  return (
    <div>
      <h1>Navbar</h1>
      {/* {children[0]} */}
      {/* {children[1]} */}

      {/* OR */}
      
      {children}
    </div>
  )
}

export default Navbar