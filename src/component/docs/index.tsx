import type { MDXProps } from "mdx/types"
import { Link } from "react-router-dom"

import "./index.css"

const components = {
  a: ComponentDocsLink,
}

export function ComponentDocs({
  MdxData,
}: {
  MdxData: (props: MDXProps) => JSX.Element
}) {
  return (
    <div className="docs">
      <MdxData components={components} />
    </div>
  )
}

export function ComponentDocsLink({
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
  return <Link to={href}>{children}</Link>
}
