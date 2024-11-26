import { clsx } from "clsx"

import type { DataItem, Accordion, AccordionId } from "../../types"
import "./index.css"
import { ComponentSkills } from "../skills"
import { ComponentLinkbox } from "../linkbox"

export function ComponentContent({
  dataItem,
  accordion,
  onClickAccordion,
}: {
  dataItem: DataItem
  accordion: Accordion
  onClickAccordion: (id: AccordionId) => void
}) {
  return (
    <div className={clsx("content", dataItem?.layout && dataItem?.layout)}>
      <h2 className="content-name">{dataItem.name}</h2>
      <div className="content-main">
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
                    <div
                      className={clsx(
                        "content-group-title-note",
                        group.accordion && "is-accordion",
                        group.accordion &&
                          accordion[group.accordion] &&
                          "is-open"
                      )}
                    >
                      <div>
                        <p>{group.titleNote}</p>
                      </div>
                    </div>
                  )}
                  {group.accordion && (
                    <button
                      type="button"
                      className={clsx(
                        "content-group-title-button",
                        accordion[group.accordion] && "is-open"
                      )}
                      onClick={() => onClickAccordion(group.accordion)}
                    />
                  )}
                </div>
              )}
              <div
                className={clsx(
                  "content-group-body",
                  group.accordion && "is-accordion",
                  group.accordion && accordion[group.accordion] && "is-open"
                )}
              >
                <div>
                  <ComponentSkills skills={group.skills} />
                </div>
              </div>
            </div>
          ))}
        </div>
        {dataItem.sources && <ComponentLinkbox sources={dataItem.sources} />}
      </div>
    </div>
  )
}
