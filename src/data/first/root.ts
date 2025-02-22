import type { DataItem } from "../../types"

export const firstRoot: DataItem = {
  id: "first-root",
  name: "基本操作",
  layout: "slim",
  groups: [
    {
      title: "ボタン説明",
      skills: [
        {
          name: "弱斬り",
          command: "A",
        },
        {
          name: "中斬り",
          command: "B",
        },
        {
          name: "強斬り",
          command: "AB",
        },
        {
          name: "弱蹴り",
          command: "C",
        },
        {
          name: "中蹴り",
          command: "D",
        },
        {
          name: "強蹴り",
          command: "CD",
        },
      ],
    },
    {
      title: "共通動作",
      skills: [
        {
          name: "投げ",
          command: "近距離で→ or ←+中 or 強攻撃",
        },
        {
          name: "踏み込み",
          command: "→→",
        },
        {
          name: "引き込み",
          command: "←←",
        },
      ],
    },
  ],
  sources: [
    {
      title: "もっと詳しいサイト",
      links: [
        {
          name: "初心者向け対戦基礎 - 初代サムライスピリッツ 攻略Wiki - atwiki",
          href: "https://w.atwiki.jp/samurai1/pages/36.html",
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
          name: "サムライスピリッツ ネオジオコレクション 対戦攻略ガイド",
        },
        {
          name: "初代サムライスピリッツ 攻略Wiki - atwiki",
          href: "https://w.atwiki.jp/samurai1/pages/1.html",
        },
        {
          name: "サムライスピリッツINDEX -SNK PERFECT DATABASE-",
          href: "https://snkpd.2-d.jp/samurai/samurai-index.html",
        },
        {
          name: "侍•真侍(SNK) - kakugame @ ウィキ - atwiki",
          href: "https://w.atwiki.jp/kakugame/pages/1730.html",
        },
      ],
    },
    {
      title: "検証環境",
      links: [
        {
          name: "サムライスピリッツ ネオジオコレクション / Steam",
        },
        {
          name: "サムライスピリッツ 六番勝負 / PS2",
        },
      ],
    },
  ],
}
