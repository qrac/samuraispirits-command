import { clsx } from "clsx"

import type { Skill } from "../../types"
import "./index.css"

export function ComponentSkills({ skills }: { skills: Skill[] }) {
  return (
    <div className="skills">
      {skills.map((item, itemIndex) => (
        <div key={itemIndex} className="skill">
          <div className={clsx("skill-set", item.layout && item.layout)}>
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
                    <ComponentCommand chars={note} />
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
  const elements: JSX.Element[] = []
  const items: { group: string; values: string }[] = []
  const regCommand = /[↙↓↘←→↖↑↗NABCDE斬蹴○×]/
  const commandMap: { [key: string]: string } = {
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
    "○": "circle",
    "×": "close",
  }

  let group = ""
  let values = ""

  for (const char of chars) {
    let newGroup: string

    if (regCommand.test(char)) {
      newGroup = "icons"
    } else {
      newGroup = "texts"
    }
    if (newGroup === group) {
      values += char
    } else {
      if (values) items.push({ group, values })
      values = char
      group = newGroup
    }
  }
  if (values) items.push({ group, values })

  items.forEach((item, index) => {
    const { group, values } = item
    if (group === "icons") {
      elements.push(
        <span key={`icons-${index}`} className="skill-command-icons">
          {values.split("").map((char, charIndex) => {
            const symbolId = commandMap[char]
            return (
              <ComponentIcon
                key={`icon-${index}-${charIndex}`}
                symbolId={symbolId}
                char={char}
              />
            )
          })}
        </span>
      )
    }
    if (group === "texts") {
      elements.push(<span key={`texts-${index}`}>{values}</span>)
    }
  })

  return <>{elements}</>
}

function ComponentIcon({ symbolId, char }: { symbolId: string; char: string }) {
  return (
    <span className="skill-command-icon">
      <span className="skill-command-icon-text">{char}</span>
      <svg
        className={clsx("skill-command-icon-svg", `is-${symbolId}`)}
        role="img"
      >
        <use href={`/assets/icons.svg#${symbolId}`}></use>
      </svg>
    </span>
  )
}
