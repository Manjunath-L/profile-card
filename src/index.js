import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import './index.css'


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
      <Skill skill="React js" emoji="💪" color='blue' />
      <Skill skill="HTML-CSS" emoji="💪" color='orangered' />
      <Skill skill="Svelte" emoji="😒" color='yellow' />
      <Skill skill="Javascript" emoji="💪" color='orange' />
    </div>
  )
}

function Skill(props) {
  return <div className="skill" style={{ backgroundColor: props.color }}>
    <span>{props.skill}</span>
    <span>{props.emoji}</span>
  </div>
}

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
)