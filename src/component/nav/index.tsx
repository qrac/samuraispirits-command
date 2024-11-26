import type { RefObject } from "react"
import { clsx } from "clsx"

import type { NavItem } from "../../types"
import "./index.css"

type NavGroup = {
  navItems: NavItem[]
  activeId: string
  onClickAction: (id: string) => void
  scrollRef?: RefObject<HTMLDivElement>
}

export function ComponentNav({ navGroups }: { navGroups: NavGroup[] }) {
  const filterdNavGroups = navGroups.filter(
    (navGroup) => navGroup.navItems.length > 0
  )
  return (
    <nav className="nav">
      {filterdNavGroups.map((navGroup, navGroupIndex) => (
        <div className="nav-group" key={navGroupIndex} ref={navGroup.scrollRef}>
          <div className="nav-group-grid">
            {navGroup.navItems.map(([id, item], itemIndex) => (
              <button
                key={itemIndex}
                type="button"
                className={clsx(
                  "nav-button",
                  navGroup.activeId === id && "is-active"
                )}
                data-id={id}
                onClick={() => navGroup.onClickAction(id)}
              >
                {item.name}
              </button>
            ))}
          </div>
        </div>
      ))}
    </nav>
  )
}
