import { clsx } from "clsx"

import type { Skill } from "../../types"
import "./index.css"

export function ComponentSkills({ skills }: { skills: Skill[] }) {
  return (
    <div className="skills">
      {skills.map((item, itemIndex) => (
        <div key={itemIndex} className="skill">
          <div className="skill-set">
            <div className="skill-name">{item.name}</div>
            <div className="skill-command">
              <ComponentCommand command={item.command} />
            </div>
          </div>
          {item.skills && <ComponentSkills skills={item.skills} />}
        </div>
      ))}
    </div>
  )
}

function ComponentCommand({ command }: { command: string }) {
  return command.split("").map((char, index) => {
    const regCommand = /[↙↓↘←→↖↑↗ABCDE斬蹴]/
    const commandMap = {
      "↙": "arrow-1",
      "↓": "arrow-2",
      "↘": "arrow-3",
      "←": "arrow-4",
      "→": "arrow-6",
      "↖": "arrow-7",
      "↑": "arrow-8",
      "↗": "arrow-9",
      A: "button-a",
      B: "button-b",
      C: "button-c",
      D: "button-d",
      E: "button-e",
      斬: "button-zan",
      蹴: "button-kick",
    }
    if (regCommand.test(char)) {
      const symbolId = commandMap[char]
      return (
        <span key={index} className="skill-command-icon">
          <span className="skill-command-icon-text">{char}</span>
          <svg
            className={clsx("skill-command-icon-svg", `is-${symbolId}`)}
            role="img"
          >
            <use href={"/assets/icons.svg#" + symbolId}></use>
          </svg>
        </span>
      )
    } else {
      return char
    }
  })
}
