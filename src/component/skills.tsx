import type { Skill } from "../types"

import { ComponentCommand } from "./command"

export function ComponentSkills({ skills }: { skills: Skill[] }) {
  return (
    <div className="data-skills">
      {skills.map((item, itemIndex) => (
        <div key={itemIndex} className="data-skill">
          <div className="data-skill-set">
            <div className="data-skill-name">{item.name}</div>
            <div className="data-skill-command">
              <ComponentCommand command={item.command} />
            </div>
          </div>
          {item.skills && <ComponentSkills skills={item.skills} />}
        </div>
      ))}
    </div>
  )
}
