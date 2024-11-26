import type { DataNav, DataItem, Source } from "../../types"
import "./index.css"
import { ComponentLinkbox } from "../linkbox"

const sourcesOther: Source[] = [
  {
    links: [
      {
        name: "アイヌ語（小書き） - Wikipedia",
        href: "https://ja.wikipedia.org/wiki/%E3%82%A2%E3%82%A4%E3%83%8C%E8%AA%9E%E4%BB%AE%E5%90%8D",
      },
    ],
  },
]

const sourcesDev: Source[] = [
  {
    links: [
      {
        head: "開発者",
        name: "クラク",
        href: "https://x.com/Qrac_JP",
      },
      {
        head: "更新情報",
        name: "GitHub Releases",
        href: "https://github.com/qrac/samuraispirits-command/releases",
      },
      {
        head: "ソースコード",
        name: "GitHub Repository",
        href: "https://github.com/qrac/samuraispirits-command",
      },
    ],
  },
]

export function ComponentArticleRoot() {
  return (
    <article className="article">
      <div className="article-content">
        <p>
          このサイトは、サムスピシリーズのコマンドをスマホで素早く確認するために作りました！ゲーセンでインスト代わりに使ってもらえると幸いです。
        </p>
        <p>
          間違いが見つかった場合は、お手数ですが開発者の
          <a
            className="article-text-link"
            href="https://x.com/Qrac_JP"
            target="_blank"
          >
            X
          </a>
          か
          <a
            className="article-text-link"
            href="https://github.com/qrac/samuraispirits-command/issues"
            target="_blank"
          >
            GitHub Issues
          </a>
          までお知らせください。なるべく早く修正します。
        </p>
        <ComponentLinkbox sources={sourcesDev} />
      </div>
    </article>
  )
}

export function ComponentArticleSource({
  dataNav,
  dataList,
}: {
  dataNav: DataNav
  dataList: DataItem[]
}) {
  const title = dataNav.source?.fullName || ""
  const filterdDataList = dataList.filter((item) => {
    const parts = item.id.split("-")
    return parts[1] === "root" && item.sources
  })
  return (
    <article className="article">
      {title && <h2 className="article-title">{title}</h2>}
      <div className="article-content">
        {filterdDataList.map((item, index) => {
          const parts = item.id.split("-")
          const fullName = dataNav[parts[0]]?.fullName || ""
          return (
            <div className="article-content-box" key={index}>
              {fullName && <h3 className="article-heading">{fullName}</h3>}
              <ComponentLinkbox sources={item.sources} />
            </div>
          )
        })}
        <div className="article-content-box">
          <h3 className="article-heading">その他</h3>
          <ComponentLinkbox sources={sourcesOther} />
        </div>
        <div className="article-content-box">
          <h3 className="article-heading">開発情報</h3>
          <ComponentLinkbox sources={sourcesDev} />
        </div>
      </div>
    </article>
  )
}
