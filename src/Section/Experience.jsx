import React from "react";
import Heading from "../Components/Heading";
import ExperienceCard from "../Components/ExperienceCard";

const Experience = React.forwardRef(function Experience(props, ref) {
  return (
    <section ref={ref} data-name="Experience" className="scroll-mt-28">
      <div>
        <Heading FWord="RELEVANT" LWord="EXPERIENCE" />
      </div>
      <div className="mt-10 stagger-reveal">
                <ExperienceCard
          heading="Junior Software Developer"
          para="Currently working as a Software Developer at QI Solutions, developing new software systems based on client requirements using Python and Odoo.
          Conducting data migration efforts, transitioning critical business data from legacy systems to modern platforms with zero downtime.
          Developed dashboards and reports in PowerBI to visualize key metrics for stakeholders."
          date="February 2022 – Present"
          active
        />
        <ExperienceCard
          heading="Software Developer Intern"
          para="Worked as an Intern at Digititan, contributed to the development of websites using PHP, HTML, CSS, SQL. Assisted in maintaining and troubleshooting company's systems."
          date="February 2021 – January 2022"
        />
      </div>
    </section>
  );
});

export default Experience;
