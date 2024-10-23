import type { DataItem } from "../../types"

export const shinRoot: DataItem = {
  id: "shin-root",
  name: "基本操作（真サム）",
  layout: "slim",
  groups: [
    {
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
          command: "AB同時押し",
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
          command: "CD同時押し",
        },
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
          command: "BC同時押し or 攻撃を受ける直前に↙",
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
          command: "AC or BD同時押し",
        },
        {
          name: "ぬいぐるみ変化",
          command: "キャラ別コマンド",
        },
        {
          name: "秘奥義",
          command:
            "キャラ別コマンド（覇王丸,ナコルル,服部半蔵,ガルフォードのみ）",
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
  ],
}
