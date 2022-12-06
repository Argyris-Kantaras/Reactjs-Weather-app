import { useRef } from "react";

function Header(props) {
  const searchRef = useRef();

  return (
    <div>
      <h2>Worldwide Weather</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          props.setState(
            searchRef.current.value.length > 2
              ? searchRef.current.value
              : alert("Not a valid location")
          );
        }}
      >
        <input ref={searchRef} type="text" />
        <button>Go</button>
      </form>
    </div>
  );
}
export default Header;
