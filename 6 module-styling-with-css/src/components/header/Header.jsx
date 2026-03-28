import styles from "./Header.module.css"

const Header = () => {
  return (
    <div className={styles.header}>
      <h2>Shop Name</h2>
      <ul>
        <li>Home</li>
        <li>about</li>
        <li>shop</li>
        <li>contact</li>
      </ul>
      <button className={styles.btn}>Cart</button>
    </div>
  )
}

export default Header