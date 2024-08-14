import { clsx } from "clsx"

import type { DataItem } from "../../types"
import "./index.css"
import { ComponentSkills } from "../skills"

export function ComponentContent({ dataItem }: { dataItem: DataItem }) {
  return (
    <div className={clsx("content", dataItem?.layout === "slim" && "is-slim")}>
      <h2 className="content-name">{dataItem.name}</h2>
      <div className="content-groups">
        {dataItem.groups.map((group, groupIndex) => (
          <div key={groupIndex} className="content-group">
            {group.title && (
              <h3
                className={clsx(
                  "content-group-title",
                  group.titleColor && `is-ac-${group.titleColor}`
                )}
              >
                {group.title}
              </h3>
            )}
            <ComponentSkills skills={group.skills} />
          </div>
        ))}
      </div>
    </div>
  )
}
