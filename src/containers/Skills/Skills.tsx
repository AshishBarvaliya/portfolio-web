import { motion } from "framer-motion";

import { urlFor, client } from "../../sanityClient";
import "./Skills.scss";
import { useEffect, useState } from "react";

interface Skill {
  name: string;
  bgColor: string;
  icon: string;
}

const Skills: React.FC = () => {
  const [skills, setSkills] = useState<Skill[]>([]);

  useEffect(() => {
    const skillsQuery = '*[_type == "skills"]';

    client.fetch(skillsQuery).then((data) => {
      setSkills(data);
    });
  }, []);

  return (
    <div id="skills" className="app__skills">
      <h2 className="head-text">Skills</h2>

      <div className="app__skills-container">
        <motion.div className="app__skills-list">
          {skills.map((skill) => (
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className="app__skills-item app__flex"
              key={skill.name}
            >
              <div
                className="app__flex"
                style={{ backgroundColor: skill.bgColor }}
              >
                <img
                  src={urlFor(skill.icon) as unknown as string}
                  alt={skill.name}
                />
              </div>
              <p className="p-text">{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Skills;
