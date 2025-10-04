import { useEffect } from "react";
import styles from "../../styles/personal/Section-Personal.module.css"
import { Form } from "react-router";

function SectionPersonal({ personalDetails, setPersonalDetails }) {
  function handleChange(e) {
    setPersonalDetails({
      ...personalDetails,
      [e.target.name]: e.target.value,
    });
  }

  useEffect(() => {
    return async () => {
      await fetch(
        `http://localhost:3000/profile/${localStorage.getItem("pid")}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(personalDetails),
        },
      );
    };
  }, [personalDetails]);

  return (
    <div className={styles.personal}>
      <div>Personal Details</div>

      <Form method="PUT" className={styles.personalForm}>
        <section>
          <label htmlFor="name">Full Name</label>
          <input
            id="name"
            value={personalDetails.name}
            placeholder="First and Last name"
            name="name"
            onChange={handleChange}
            className={styles.input}
          />
        </section>

        <section>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            value={personalDetails.email}
            placeholder="Enter Email"
            name="email"
            onChange={handleChange}
            className={styles.input}
          />
        </section>

        <section>
          <label htmlFor="number">Phone Number</label>
          <input
            id="number"
            value={personalDetails.number}
            placeholder="Enter Phone Number"
            name="number"
            onChange={handleChange}
            className={styles.input}
          />
        </section>

        <section>
          <label htmlFor="address">Address</label>
          <input
            id="address"
            value={personalDetails.address}
            placeholder="City, Country"
            name="address"
            onChange={handleChange}
            className={styles.input}
          />
        </section>
      </Form>
    </div>
  );
}

export default SectionPersonal;
