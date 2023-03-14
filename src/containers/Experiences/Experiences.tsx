import { client } from "../../sanityClient";
import "./Experiences.scss";
import { useEffect, useState } from "react";

interface Experience {
  title: string;
  company: string;
  desc: string;
  year: string;
}

const Experiences: React.FC = () => {
  const [experiences, setExperiences] = useState<Experience[]>([]);

  useEffect(() => {
    const query = '*[_type == "experiences"]';

    client.fetch(query).then((data) => {
      setExperiences(data);
    });
  }, []);

  return (
    <div id="experiences" className="app__experiences">
      <h2 className="head-text">Experiences</h2>
      <div className="app__experiences-container">
        <ul className="app__experiences-timeline">
          {experiences.map((work) => (
            <li className="app__experiences-timeline-event">
              <label className="app__experiences-timeline-event-icon"></label>
              <div className="app__experiences-timeline-event-copy">
                <p className="app__experiences-timeline-event-thumbnail">
                  {work.year}
                </p>
                <h3>{work.company}</h3>
                <h4>{work.title}</h4>
                <p dangerouslySetInnerHTML={{ __html: work.desc }} />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Experiences;
