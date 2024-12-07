import { Link } from "react-router-dom"

import { NavItem } from "../../types"
import "./index.css"
import { dataNav } from "../../data/nav"
import { getNavigatePath, getNavItemCount } from "../../utils"

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
  function getCountText(navItem: NavItem) {
    const { charactersCount, typesCount } = getNavItemCount(navItem)
    const charactersText = charactersCount
      ? `${charactersCount} characters`
      : ""
    const typesText = typesCount.max ? `${typesCount.max} types` : ""
    const texts = [charactersText, typesText].filter((text) => text)
    return texts.join(" x ")
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
                  <span className="lineup-button-subtext">
                    {item.category === "Command List"
                      ? getCountText([id, item])
                      : item.category}
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
