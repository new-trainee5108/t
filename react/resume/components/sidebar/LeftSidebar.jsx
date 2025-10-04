import "../../styles/sidebar/LeftSidebar.css";
import { Link } from "react-router";
import logout from "../../assets/logout.svg";
import download from "../../assets/download.svg";

function LeftSidebar() {
  return (
    <div className="leftsidebar">
      <section>
        <div>
          <img src={logout} alt="edit" width="20px" />
        </div>
        <Link to="/logout">Logout</Link>
      </section>

      <section>
        <div>
          <img src={download} alt="edit" width="20px" />
        </div>
        <Link to="print">Preview</Link>
      </section>
    </div>
  );
}

export default LeftSidebar;
