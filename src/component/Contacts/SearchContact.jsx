import {PURPLE , COMMENT } from "../../helpers/color";

const SearchContact = () => {
  return (
    <div className="input-group mx-2 w-75" dir="ltr">
      <span
        className="input-group-text"
        id="basic-addon1"
        style={{ backgroundColor: PURPLE }}
      >
        <i className="fas fa-search" />
      </span>
      <input
        dir="rtl"
        type="text"
        style={{ backgroundColor: COMMENT, borderColor: PURPLE}}
        className="form-control"
        placeholder="حستحوی مخاطبین"
        aria-label="Search"
        aria-describedby="basic-addon1"
        color=""
      />
    </div>
  );
};
export default SearchContact;