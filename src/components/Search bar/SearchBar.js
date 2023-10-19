import { useContext, useEffect, useRef } from "react";
import styles from "./SearchBar.module.css";
import tempIcon from "../../icons/white-temp-icon.png";
import searchIcon from "../../icons/search-icon-white.png";
import LocaleContext from "../../hooks/locale-context";

function SearchBar(props) {
  const searchRef = useRef();
  const locale = useContext(LocaleContext);

  useEffect(() => {
    if (props.data.location) {
      if (props.data.location.name !== "" && props.data.location.country !== "")
        searchRef.current.value =
          props.data.location.name + "," + props.data.location.country;
    }
  }, [props]);

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
        <img className={styles.tempIcon} src={tempIcon} />
        <input placeholder=" Search any place" ref={searchRef} type="text" />
        <img
          onClick={() =>
            props.setState(
              searchRef.current.value.length > 2
                ? searchRef.current.value
                : alert("Not a valid location")
            )
          }
          className={styles.searchIcon}
          src={searchIcon}
        />{" "}
      </form>
    </div>
  );
}
export default SearchBar;
