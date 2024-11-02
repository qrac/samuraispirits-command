import { clsx } from "clsx"

import type { Skill } from "../../types"
import "./index.css"

export function ComponentSkills({ skills }: { skills: Skill[] }) {
  return (
    <div className="skills">
      {skills.map((item, itemIndex) => (
        <div key={itemIndex} className="skill">
          <div className={clsx("skill-set", item.isShort && "is-short")}>
            {item.name && <div className="skill-name">{item.name}</div>}
            {item.command && (
              <div className="skill-command">
                <ComponentCommand chars={item.command} />
              </div>
            )}
            {item?.notes && item.notes.length > 0 && (
              <div className="skill-notes">
                {item.notes.map((note, noteIndex) => (
                  <div key={noteIndex} className="skill-note">
                    <ComponentNote chars={note} />
                  </div>
                ))}
              </div>
            )}
          </div>
          {item.skills && <ComponentSkills skills={item.skills} />}
        </div>
      ))}
    </div>
  )
}

function ComponentCommand({ chars }: { chars: string }) {
  return chars.split("").map((char, index) => {
    const regCommand = /[↙↓↘←→↖↑↗NABCDE斬蹴]/
    const commandMap = {
      "↙": "arrow-1",
      "↓": "arrow-2",
      "↘": "arrow-3",
      "←": "arrow-4",
      "→": "arrow-6",
      "↖": "arrow-7",
      "↑": "arrow-8",
      "↗": "arrow-9",
      N: "lever-neutral",
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

function ComponentNote({ chars }: { chars: string }) {
  return chars.split("").map((char, index) => {
    const regCommand = /[○×]/
    const commandMap = {
      "○": "circle",
      "×": "close",
    }
    if (regCommand.test(char)) {
      const symbolId = commandMap[char]
      return (
        <span key={index} className="skill-note-icon">
          <span className="skill-note-icon-text">{char}</span>
          <svg
            className={clsx("skill-note-icon-svg", `is-${symbolId}`)}
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
