import type { DataItem } from "../../types"

export const shinRoot: DataItem = {
  id: "shin-root",
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
          command: "→→ or 引き込み中に→",
        },
        {
          name: "引き込み",
          command: "←←",
        },
        {
          name: "前転",
          command: "↘↘ or 踏み込み中に↘",
        },
        {
          name: "後転",
          command: "↙↙",
        },
        {
          name: "伏せ",
          command: "↓↓",
        },
        {
          name: "下段避け",
          command: "BC or 攻撃を受ける直前に↙",
        },
        {
          name: "受け返し",
          command: "攻撃を受ける直前に←",
        },
        {
          name: "真剣白羽取り",
          command: "素手時←↙↓↘→",
        },
        {
          name: "挑発",
          command: "AC or BD",
        },
        {
          name: "怒り頂点ポーズ",
          command: "怒ゲージ最大化後の行動可能時に自動発動",
        },
        {
          name: "武器破壊技",
          command: "怒ゲージ最大時にキャラ別コマンド",
        },
      ],
    },
    {
      title: "隠し動作",
      skills: [
        {
          name: "ぬいぐるみ変化",
          command: "キャラ別コマンド",
        },
        {
          name: "秘奥義",
          command: "キャラ別コマンド",
          notes: ["覇王丸・ナコルル・服部半蔵・ガルフォードのみ"],
        },
      ],
    },
  ],
  sources: [
    {
      title: "もっと詳しいサイト",
      links: [
        {
          name: "真刃繚乱 - 真侍魂の解析・攻略専門サイト",
          href: "https://ss843087.stars.ne.jp/SinSamurai_Main.htm",
        },
      ],
    },
    {
      title: "もっと詳しい動画",
      links: [
        {
          name: "真サムライスピリッツ(SAMURAI SHODOWN 2)初心者講習会 第1回 その1（基本行動） - YouTube",
          href: "https://youtu.be/22IUvThTNqM",
        },
      ],
    },
  ],
  rootSources: [
    {
      title: "参考資料",
      links: [
        {
          name: "サムライスピリッツ ネオジオコレクション 対戦攻略ガイド",
        },
        {
          name: "真刃繚乱 - 真侍魂の解析・攻略専門サイト",
          href: "https://ss843087.stars.ne.jp/SinSamurai_Main.htm",
        },
        {
          name: "真サムライスピリッツ 覇王丸地獄変 -SNK PERFECT DATABASE-",
          href: "https://snkpd.2-d.jp/samurai/samurai2.html",
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
