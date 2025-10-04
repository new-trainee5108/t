import { Link, Outlet } from "react-router";
import "../../css/Root/Root-Layout.css";

export function RootLayout() {
  return (
    <div className="wrapper">
      <Header />
      <Main />
    </div>
  );
}
function Header() {
  return (
    <header className="header">
      <div>
        <img src="/public/a.svg" alt="" width="40px" />
        <div>
          <Link to={"/"}>CV Maker</Link>
        </div>
      </div>
      <div>
        <div>
          <Link to="login">Log In</Link>
        </div>
        <div>
          <Link to="signup">Sign up</Link>
        </div>
      </div>
    </header>
  );
}

function Main() {
  return (
    <main className="main">
      <Outlet />
    </main>
  );
}
