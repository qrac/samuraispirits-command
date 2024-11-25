import { Link as RouterLink } from "react-router-dom"

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
                <span className="lineup-button-subtitle">Command List</span>
              </button>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export function ComponentLineupOther({
  items,
}: {
  items: { id: string; fullName: string }[]
}) {
  return (
    <div className="lineup">
      <ul className="lineup-list">
        {items.map((item, index) => {
          return (
            <li className="lineup-item" key={index}>
              <RouterLink
                className="lineup-button"
                to={`/${item.id}`}
                onClick={() => {
                  window.scrollTo({ top: 0 })
                }}
              >
                <span className="lineup-button-title">{item.fullName}</span>
              </RouterLink>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
