import type { DataItem } from "../../types"

export const reiRoot: DataItem = {
  id: "rei-root",
  name: "基本操作",
  layout: "slim",
  groups: [
    {
      title: "ボタン説明",
      skills: [
        {
          name: "弱斬り",
          command: "L",
        },
        {
          name: "中斬り",
          command: "M",
        },
        {
          name: "強斬り",
          command: "H",
        },
        {
          name: "蹴り",
          command: "蹴",
        },
      ],
    },
    {
      title: "共通",
      skills: [
        {
          name: "足払い",
          command: "↘+蹴",
        },
        {
          name: "防御崩し",
          command: "近距離で← or →+H蹴",
        },
        {
          name: "見極め",
          command: "攻撃を受ける直前にガード",
          skills: [
            {
              name: "押し返し",
              command: "立ち状態で成功時LM",
            },
          ],
        },
        {
          name: "避け",
          command: "LM",
        },
        {
          name: "弾き返し",
          command: "武器あり時↓↘→+LM",
        },
        {
          name: "白羽取り",
          command: "素手時↓↘→+LM",
        },
        {
          name: "不意打ち",
          command: "MH",
        },
        {
          name: "踏み込み",
          command: "→→継続",
        },
        {
          name: "飛び退き",
          command: "←←",
        },
        {
          name: "移動起き上がり",
          command: "被ダウン時← or →",
        },
        {
          name: "武器外し",
          command: "↓+MH蹴",
        },
        {
          name: "武器拾い",
          command: "武器の近くでL",
        },
        {
          name: "武器飛ばし必殺技",
          command: "怒ゲージ最大時に↓↘→+MH",
        },
        {
          name: "怒り爆発",
          command: "LMH",
          notes: ["1試合につき1回のみ使用可能 ※怒ゲージ消失"],
          skills: [
            {
              name: "一閃",
              command: "LMH",
            },
          ],
        },
        {
          name: "秘奥義",
          command: "→←↙↓↘→+H蹴",
          notes: ["1試合につき1回のみ使用可能 / 通常技キャンセル不可"],
        },
      ],
    },
  ],
  sources: [
    {
      title: "もっと詳しいサイト",
      links: [
        {
          name: "SAMURAI SPIRITS user's Wiki*",
          href: "https://wikiwiki.jp/samurai2019/",
        },
      ],
    },
    /*{
      title: "もっと詳しい動画",
      links: [
        {
          name: "",
          href: "https://youtu.be/xxx",
        },
      ],
    },*/
  ],
  rootSources: [
    {
      title: "参考資料",
      links: [
        {
          name: "SAMURAI SPIRITS | ウェブマニュアル",
          href: "https://www.snk-corp.co.jp/webmanual/samuraispirits/jp/index.php",
        },
        {
          name: "SAMURAI SPIRITS公式サイト | コマンドリスト",
          href: "https://www.snk-corp.co.jp/official/samuraispirits/command/",
        },
        {
          name: "SAMURAI SPIRITS user's Wiki*",
          href: "https://wikiwiki.jp/samurai2019/",
        },
      ],
    },
    {
      title: "検証環境",
      links: [
        {
          name: "SAMURAI SPIRITS / PS5(PS4版)",
        },
      ],
    },
  ],
}
