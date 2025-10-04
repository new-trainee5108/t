import styles from "../../css/Auth/Signup.module.css";
import { Form, redirect, Link } from "react-router";
import { BounceLoader } from "react-spinners";

// eslint-disable-next-line react-refresh/only-export-components
export async function action({ request }) {
  const formData = await request.formData();
  const updates = Object.fromEntries(formData);
  const response = await fetch("http://localhost:3000/signup", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(updates),
  }).then((data) => data);
  if (response.status === 404) throw new Error("sERVER ERROR");

  return redirect("/");
}

export function Signup() {
  return (
    <div className={styles.signup}>
      <div>
        <p>Create your account</p>
        <p>
          Have an account? <Link to="/login">Log in now</Link>
        </p>
      </div>
      <Form method="post" className={styles.form}>
        <section>
          <label htmlFor="username">Username</label>
          <input type="text" name="username" id="username" />
        </section>
        <section>
          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="password" />
        </section>
        <button type="submit">Sign up</button>
      </Form>
    </div>
  );
}
