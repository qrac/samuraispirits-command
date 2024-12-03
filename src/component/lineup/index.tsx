import { Link } from "react-router-dom"

import { NavItem } from "../../types"
import "./index.css"
import { dataNav } from "../../data/nav"
import { getNavigatePath } from "../../utils"

export function ComponentLineup({
  navItems,
  onClickAction,
}: {
  navItems: NavItem[]
  onClickAction: (id: string) => void
}) {
  function getLinkPath(id: string) {
    return getNavigatePath(dataNav, id, "root", "shura")
  }
  return (
    <div className="lineup">
      <ul className="lineup-list">
        {navItems.map(([id, item], index) => {
          const title = item?.fullName || item.name
          return (
            <li className="lineup-item" key={index}>
              <Link
                to={getLinkPath(id)}
                className="lineup-button"
                onClick={() => onClickAction(id)}
              >
                <span className="lineup-button-title">{title}</span>
                {item.category && (
                  <span className="lineup-button-category">
                    {item.category}
                  </span>
                )}
              </Link>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
