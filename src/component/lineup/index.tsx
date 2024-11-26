import { NavItem } from "../../types"
import "./index.css"

export function ComponentLineup({
  navItems,
  onClickAction,
}: {
  navItems: NavItem[]
  onClickAction: (id: string) => void
}) {
  return (
    <div className="lineup">
      <ul className="lineup-list">
        {navItems.map(([id, item], index) => {
          const title = item?.fullName || item.name
          return (
            <li className="lineup-item" key={index}>
              <button
                type="button"
                className="lineup-button"
                onClick={() => onClickAction(id)}
              >
                <span className="lineup-button-title">{title}</span>
                {item.category && (
                  <span className="lineup-button-category">
                    {item.category}
                  </span>
                )}
              </button>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
