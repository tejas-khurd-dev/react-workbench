const Button = (props) => {
  
  console.log(props);

  const changeTheme = ()=>{
    console.log(props.theme);
    
    if(props.theme === "dark")
      props.settheme("light")
    else 
      props.settheme("dark")
  }

  return (
    <>
      <button onClick={changeTheme}>Change Theme</button>
    </>
  )
}

export default Button