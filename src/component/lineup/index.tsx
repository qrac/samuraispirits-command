import { NavItem } from "../../types"
import "./index.css"

export function ComponentLineup({
  navItems,
  onClickAction,
}: {
  navItems: NavItem[]
  onClickAction: (id: string) => void
}) {
  const filteredItems = navItems.filter((item) => item[0] !== "root")
  return (
    <div className="lineup">
      <ul className="lineup-list">
        {filteredItems.map(([id, game], index) => {
          const title = game?.fullName || game.name
          return (
            <li className="lineup-item" key={index}>
              <button
                type="button"
                className="lineup-button"
                onClick={() => onClickAction(id)}
              >
                <span className="lineup-button-title">{title}</span>
                <span className="lineup-button-subtitle">Command List</span>
              </button>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
