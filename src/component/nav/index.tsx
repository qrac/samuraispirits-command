import type { RefObject } from "react"
import { Link } from "react-router-dom"
import { clsx } from "clsx"

import type { NavItem } from "../../types"
import "./index.css"
import { dataNav } from "../../data/nav"
import { getNavigatePath } from "../../utils"

type Mode = "game" | "character" | "type"
type NavGroup = {
  mode: Mode
  navItems: NavItem[]
  activeId: string
  onClickAction: (id: string) => void
  scrollRef?: RefObject<HTMLDivElement>
}

export function ComponentNav({
  navGroups,
  gameId,
  characterId,
  typeId,
}: {
  navGroups: NavGroup[]
  gameId: string
  characterId: string
  typeId: string
}) {
  const filterdNavGroups = navGroups.filter(
    (navGroup) => navGroup.navItems.length > 0
  )
  function getLinkPath(id: string, mode: Mode) {
    if (mode === "game") {
      let linkPath = getNavigatePath(dataNav, id, characterId, typeId)
      if (linkPath.split("/")[1] === characterId) {
        return linkPath
      } else {
        linkPath = getNavigatePath(dataNav, id, "root", "shura")
        return linkPath
      }
    }
    if (mode === "character") {
      let linkPath = getNavigatePath(dataNav, gameId, id, "shura")
      return linkPath
    }
    if (mode === "type") {
      let linkPath = getNavigatePath(dataNav, gameId, characterId, id)
      return linkPath
    }
    return "404"
  }
  return (
    <nav className="nav">
      {filterdNavGroups.map((navGroup, navGroupIndex) => (
        <div className="nav-group" key={navGroupIndex} ref={navGroup.scrollRef}>
          <div className="nav-group-grid">
            {navGroup.navItems.map(([id, item], itemIndex) => (
              <Link
                key={itemIndex}
                to={getLinkPath(id, navGroup.mode)}
                className={clsx(
                  "nav-button",
                  navGroup.activeId === id && "is-active"
                )}
                data-id={id}
                onClick={() => navGroup.onClickAction(id)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      ))}
    </nav>
  )
}
