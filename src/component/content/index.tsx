import { clsx } from "clsx"

import type { DataItem, NavItem, Accordion, AccordionId } from "../../types"
import "./index.css"
import { ComponentSkills } from "../skills"
import { ComponentLinkbox } from "../linkbox"

export function ComponentContent({
  dataItem,
  games,
  accordion,
  onClickAccordion,
}: {
  dataItem: DataItem
  games: NavItem[]
  accordion: Accordion
  onClickAccordion: (id: AccordionId) => void
}) {
  const gameId = dataItem.id.split("-").filter((str) => str)[0]
  const game = games.find((item) => item[0] === gameId)
  const gameName = game?.[1]?.fullName || ""
  return (
    <article className={clsx("content", dataItem?.layout && dataItem?.layout)}>
      <header className="content-header">
        {gameName && <p className="content-game">{gameName}</p>}
        <h2 className="content-name">{dataItem.name}</h2>
      </header>
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
    </article>
  )
}
