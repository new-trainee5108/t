import "../../styles/sidebar/TopSidebar.css";
import del from "../../assets/delete.svg";
import account from "../../assets/account.svg";

function TopSidebar({
  setPersonalDetails,
  educationDetails,
  setEducationDetails,
  experienceDetails,
  setExperienceDetails,
}) {
  function handleClear() {
    setPersonalDetails({});
    setEducationDetails([]);
    setExperienceDetails([]);
  }

  function handleLoad() {
    setPersonalDetails({
      name: "Anna Speckhart",
      email: "pconcern606@gmail.com",
      number: "011 23895420",
      address: "Sg. Long",
    });

    setEducationDetails([
      ...educationDetails,
      {
        edu_id: 96,
        school: "Harvard",
        degree: "Mathematics",
        dateStart: "2018",
        dateEnd: "2022",
        location: "Massachusetts",
      },
    ]);

    setExperienceDetails([
      ...experienceDetails,
      {
        exp_id: 96,
        resume_id: 1,
        company: "Stanford University",
        title: "Machine Learning Engineer",
        dateStart: "2024",
        dateEnd: "present",
        location: "Stanford, California",
        description:
          "Create Machine Learning Models using Pytorch to analyse Financial Data",
      },
    ]);
  }

  return (
    <div className="top_sidebar">
      <section onClick={handleClear}>
        <div>
          <img src={del} alt="doc" width="20px" />
        </div>
        <div>Clear Resume</div>
      </section>

      <section onClick={handleLoad}>
        <div>
          <img src={account} alt="doc" width="20px" />
        </div>
        <div>Load Example</div>
      </section>
    </div>
  );
}

export default TopSidebar;
