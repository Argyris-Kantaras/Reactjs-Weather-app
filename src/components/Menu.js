import classes from "./menu.module.css";

function Menu() {
  return (
    <ul className={classes.menuList}>
      <li className={classes.listItem}>Forecasts</li>
      <li className={classes.listItem}>Astronomy</li>
      <li className={classes.listItem}>Sports</li>
    </ul>
  );
}

export default Menu;
