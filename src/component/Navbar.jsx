import SearchContact from "./Contacts/SearchContact";
import { BACKGROUND , PURPLE ,FOREGROUND} from "../helpers/color";

const Navbar = () => {
  return (
    <nav className="navbar navbar-dark navbar-expand-sm shadow-lg"
    style={{backgroundColor : BACKGROUND}}>
      <div className="container">
        <div className="row w-100">
          <div className="col">
            <i className="fas fa-id-badge" style={{color : PURPLE}}/>
            <span style={{color : FOREGROUND}}>وب اپلیکیشن مدیریت{"  "}</span>
            <span style={{ color :PURPLE }}>مخاطبین</span>
          </div>
          <div className="col">
            <SearchContact />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;