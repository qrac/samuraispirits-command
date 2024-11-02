import { clsx } from "clsx"

import type { DataItem } from "../../types"
import "./index.css"
import { ComponentSkills } from "../skills"

export function ComponentContent({ dataItem }: { dataItem: DataItem }) {
  return (
    <div className={clsx("content", dataItem?.layout && dataItem?.layout)}>
      <h2 className="content-name">{dataItem.name}</h2>
      <div className="content-groups">
        {dataItem.groups.map((group, groupIndex) => (
          <div
            key={groupIndex}
            className={clsx("content-group", group?.layout && group?.layout)}
          >
            {group.title && (
              <div className="content-group-title">
                <h3
                  className={clsx(
                    "content-group-title-label",
                    group.titleColor && `is-ac-${group.titleColor}`
                  )}
                >
                  {group.title}
                </h3>
                {group.titleNote && (
                  <p className="content-group-title-note">{group.titleNote}</p>
                )}
              </div>
            )}
            <ComponentSkills skills={group.skills} />
          </div>
        ))}
      </div>
    </div>
  )
}
