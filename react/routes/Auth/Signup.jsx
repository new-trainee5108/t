import { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";
import styles from "../../css/Auth/Signup.module.css";
import { Form, Link, useActionData, Navigate } from "react-router";
import { useState, useEffect } from "react";
import { BounceLoader } from "react-spinners";

const baseUrl = import.meta.env.VITE_API_URL;

// eslint-disable-next-line react-refresh/only-export-components
export async function action({ request }) {
  const formData = await request.formData();
  const updates = Object.fromEntries(formData);
  const response = await fetch(`${baseUrl}/signup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(updates),
  }).then((data) => data.json());
  if (response.status === 404) throw new Error("Server ERROR");

  localStorage.setItem("username", response.username);
  return response;
}

export function Signup() {
  const data = useActionData();
  const { setAuth } = useContext(AuthContext);

  const [connection, setConnection] = useState("pending");

  useEffect(() => {
    if (data !== undefined) {
      if (data.message === "Success") {
        setAuth(true);
      }
    }
    async function dbMongo() {
      const db = await fetch(`${baseUrl}/database/mongo`).then(
        (data) => data.json(),
      );
      if (db === 500) setConnection("error");
      else setConnection("connected");
    }
    dbMongo();
  }, [data, setAuth]);

  if (connection === "error") throw new Error();

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

      <div>
        {data && data.message === "Success" && (
          <BounceLoader size={60} color="#403eb6" />
        )}
      </div>

      <div hidden>
        {data && data.message === "Success" && connection === "connected" && (
          <Navigate to={`/profile/${data.user_id}`} />
        )}
      </div>
    </div>
  );
}
