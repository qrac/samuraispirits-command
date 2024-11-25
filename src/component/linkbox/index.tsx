import { Link as RouterLink } from "react-router-dom"

import type { Source } from "../../types"
import "./index.css"

export function ComponentLinkbox({ sources }: { sources: Source[] }) {
  return (
    <div className="linkbox">
      {sources.map((source, sourceIndex) => (
        <div key={sourceIndex} className="linkbox-group">
          {source.title && (
            <div className="linkbox-group-title">{source.title}</div>
          )}
          <ul className="linkbox-list">
            {source.links.map((link, linkIndex) => (
              <li className="linkbox-item" key={linkIndex}>
                {link.head && <span>{link.head}: </span>}
                {link.href ? (
                  <ComponentLinkboxLink href={link.href}>
                    {link.name}
                  </ComponentLinkboxLink>
                ) : (
                  <span>{link.name}</span>
                )}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}

export function ComponentLinkboxLink({
  href,
  children,
}: {
  href: string
  children: React.ReactNode
}) {
  if (/^https?:\/\//.test(href)) {
    return (
      <a href={href} target="_blank">
        {children}
      </a>
    )
  }
  return (
    <RouterLink
      to={href}
      onClick={() => {
        window.scrollTo({ top: 0 })
      }}
    >
      {children}
    </RouterLink>
  )
}
