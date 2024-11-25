import { Link as RouterLink } from "react-router-dom"

import type { Source } from "../../types"
import "./index.css"

export function ComponentLinkbox({ sources }: { sources: Source[] }) {
  return (
    <div className="linkbox">
      {sources.map((source, sourceIndex) => (
        <div key={sourceIndex} className="linkbox-group">
          {source.title && (
            <div className="linkbox-group-title">
              <h3 className="linkbox-group-title-label">{source.title}</h3>
            </div>
          )}
          <ul className="linkbox-list">
            {source.links.map((link, linkIndex) => (
              <li className="linkbox-item" key={linkIndex}>
                {link.href ? (
                  <ComponentLinkboxLink href={link.href}>
                    {link.name}
                  </ComponentLinkboxLink>
                ) : (
                  <span className="linkbox-text">{link.name}</span>
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
      <a href={href} target="_blank" className="linkbox-link is-external">
        {children}
        <svg
          viewBox="0 0 512 512"
          xmlns="http://www.w3.org/2000/svg"
          className="linkbox-link-icon"
        >
          <path d="m340 412h-240v-240h130v-60h-190v360h360v-190h-60z" />
          <path d="m282 40v60h87.57l-179.78 179.79 42.42 42.42 179.79-179.78v87.57h60v-190z" />
        </svg>
      </a>
    )
  }
  return (
    <RouterLink
      to={href}
      className="linkbox-link is-internal"
      onClick={() => {
        window.scrollTo({ top: 0 })
      }}
    >
      {children}
    </RouterLink>
  )
}
