import { useRef } from "react";
import styles from "./SearchBar.module.css";

function SearchBar(props) {
  const searchRef = useRef();

  return (
    <div className={styles.header}>
      <form
        className={styles.form}
        onSubmit={(e) => {
          e.preventDefault();
          props.setState(
            searchRef.current.value.length > 2
              ? searchRef.current.value
              : alert("Not a valid location")
          );
        }}
      >
        <input placeholder="Search any place" ref={searchRef} type="text" />
        <div className={styles.goBtn}>Go</div>
      </form>
    </div>
  );
}
export default SearchBar;
