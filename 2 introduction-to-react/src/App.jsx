// Using grandparent div-
// const App = () => {
//   return (
//     <div id="grandparent">
//       <div id="parent1, div1">
//         <h1 id="child-p1.1">Welcome to React</h1>
//         <p  id="child-p1.2">-Tejas Sandeep Khurd</p>
//       </div>

//       <div id="chacha, div2">
//         <br />
//         <h1 id="child-p1.1">Hello</h1>
//       </div>
//     </div>

//   )
// }



// Using fragment(empty tags - dikhenge nahi render hone pr)-
const App = () => {
  return (
    <>
      <div id="parent1, div1">
        <h1 id="child-p1.1">Welcome to React</h1> {/* Comment */}
        <p  id="child-p1.2">-Tejas Sandeep Khurd</p>
      </div>

      <div id="chacha, div2">
        <br />
        <h2 id="child-p1.1">Hello, I am from India</h2>
      </div>
    </>
    
  )
}

export default App