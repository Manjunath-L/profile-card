import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import './index.css'

const skills = [
  {
    skill: "HTML+CSS",
    level: "advanced",
    color: "#2662EA"
  },
  {
    skill: "JavaScript",
    level: "advanced",
    color: "#EFD81D"
  },
  {
    skill: "Web Design",
    level: "advanced",
    color: "#C3DCAF"
  },
  {
    skill: "Git and GitHub",
    level: "intermediate",
    color: "#E84F33"
  },
  {
    skill: "React",
    level: "advanced",
    color: "#60DAFB"
  },
  {
    skill: "Svelte",
    level: "beginner",
    color: "#FF3B00"
  }
];


function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        <SkillList />
      </div>
    </div>
  );
}

function Avatar() {
  return (
    <img className="avatar" src="./profile.jpeg" alt="profile" />
  )
}
function Intro() {
  return (
    <div>
      <h1>Manjunath L</h1>
      <p>
        full-stack web developer ,like reading books(self-help),explore new places(like temples),enjoye listening music
      </p>
    </div>
  )
}

function SkillList(props) {
  return (
    <div className="skill-list">
      {skills.map(skill => <Skill skill={skill.skill} color={skill.color} level={skill.level} />)}
    </div>
  )
}

function Skill({ skill, color, level }) {
  return <div className="skill" style={{ backgroundColor: color }}>
    <span>{skill}</span>
    <span>{level === "beginner" && '🤓'}
      {level === "intermediate" && "👍"}
      {level === "advanced" && "💪"}
    </span>
  </div>
}

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
)