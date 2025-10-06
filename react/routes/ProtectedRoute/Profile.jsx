import { Form, redirect, Link, useLoaderData, useNavigate } from "react-router";
import { createPortal } from "react-dom";
import "../../css/Protected/Profile.css";
import { useState } from "react";
import ModalContent from "./ModelContent.jsx";

const baseUrl = import.meta.env.VITE_API_URL;

// eslint-disable-next-line react-refresh/only-export-components
export async function loader({ params }) {
  const titleList = await fetch(
    `${baseUrl}/profile/${params.pid}`,
  ).then((data) => data.json());
  localStorage.setItem("pid", params.pid);
  return { titleList, params };
}

// eslint-disable-next-line react-refresh/only-export-components
export async function action({ request, params }) {
  const formData = await request.formData();
  const form = Object.fromEntries(formData);

  if (form.type === "logout") {
    await fetch(`${baseUrl}/login`, {
      method: "POST",
    });
    return redirect("/logout");
  } else if (request.method === "POST") {
    await fetch(`${baseUrl}/profile/${params.pid}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title: form.title }),
    });
  }
}

export function Profile() {
  const data = useLoaderData();

  const [showModal, setShowModal] = useState(false);

  return (
    <div className="profilePage">
      <header>
        <img src="/public/scroll.svg" alt="" width="40px" />
        <div>Home</div>
      </header>

      <nav>
        <ul role="list">
          <li>{localStorage.getItem("username")}</li>
          <li>
            <img src="/public/profile.svg" alt="" width="40px" />
          </li>
          <li>
            <Form method="post">
              <button type="submit">Logout</button>
              <input type="text" name="type" value="logout" readOnly hidden />
            </Form>
          </li>
        </ul>
      </nav>

      <aside>
        <div className="dialog">
          <button onClick={() => setShowModal(true)}>New Project +</button>
        </div>

        {showModal &&
          createPortal(
            <ModalContent onClose={() => setShowModal(false)} />,
            document.querySelector("main"),
          )}
      </aside>

      <main>
        <div>All Projects</div>
        <input type="search" name="" id="" placeholder="Search" />
        <div className="grid">
          <ul role="grid">
            <li>Title</li>
            <li>Last Modified</li>
            <li>Actions</li>
          </ul>
          {data.titleList.map((list) => (
            <ResumeList list={list} key={list._id} />
          ))}
        </div>
      </main>
    </div>
  );
}

function ResumeList({ list }) {
  const Navigate = useNavigate();

  function handleResumeRoute() {
    Navigate(`/resume/${list._id}`);
  }

  return (
    <ul role="grid" onClick={handleResumeRoute}>
      <li>{list.title}</li>
      <li> {list.createdAt} </li>
      <li className="action">
        <span>
          <img src="/public/down.svg" alt="" width="20px" />
        </span>
        <span>
          <img src="/public/trash.svg" alt="" width="20px" />
        </span>
      </li>
    </ul>
  );
}
