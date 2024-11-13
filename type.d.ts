declare module "*.md" {
  let MDXComponent: (props) => JSX.Element
  export default MDXComponent
}

declare module "*.mdx" {
  import { MDXProps } from "mdx/types"
  export default function MDXContent(props: MDXProps): JSX.Element
}
