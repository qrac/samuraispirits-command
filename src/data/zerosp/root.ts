import type { DataItem } from "../../types"

export const zerospRoot: DataItem = {
  id: "zerosp-root",
  name: "基本操作（零SP）",
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
          name: "蹴り",
          command: "C",
        },
        {
          name: "特殊動作",
          command: "D",
        },
        {
          name: "瞑想",
          command: "D押し継続（怒ゲージ消費）",
        },
        {
          name: "上段蹴り",
          command: "レバーニュートラル or ←+C",
        },
        {
          name: "下段狙い蹴り",
          command: "→+C",
        },
        {
          name: "牽制攻撃",
          command: "↙ or ↓+C",
        },
        {
          name: "足払い",
          command: "↘+C",
        },
        {
          name: "防御崩し",
          command: "近距離で→+CD同時押し or ←+CD同時押し",
          skills: [
            {
              name: "崩し斬り",
              command: "斬",
            },
          ],
        },
        {
          name: "不意打ち",
          command: "BC同時押し",
        },
        {
          name: "小追い打ち",
          command: "与ダウン時↘+BC同時押し",
        },
        {
          name: "大追い打ち",
          command: "与ダウン時↑+BC同時押し",
        },
        {
          name: "踏み込み",
          command: "→→",
        },
        {
          name: "引き込み",
          command: "←←",
        },
        {
          name: "下段避け",
          command: "←+D",
        },
        {
          name: "跳び込み",
          command: "→+D",
        },
        {
          name: "前転",
          command: "↘+D",
        },
        {
          name: "後転",
          command: "↙+D",
        },
        {
          name: "伏せ",
          command: "↓+D",
        },
        {
          name: "移動起き上がり",
          command: "被ダウン時← or →",
        },
        {
          name: "クイック起き上がり",
          command: "被ダウン時↑",
        },
        {
          name: "弾き",
          command: "武器あり時↓↙←→+D",
        },
        {
          name: "真剣白羽取り",
          command: "素手時↓↙←→+D",
        },
        {
          name: "武器捨て挑発",
          command: "スタート x 3回",
        },
        {
          name: "自決",
          command: "←→↘↓+スタート",
        },
        {
          name: "武器飛ばし技",
          command: "怒ゲージ最大時に↓↘→+CD同時押し",
        },
        {
          name: "怒り爆発",
          command: "ABC同時押し",
          skills: [
            {
              name: "絶命奥義",
              command: "勝負が決まるラウンド・相手が体力青の時↓↙←+CD同時押し",
            },
          ],
        },
        {
          name: "無の境地",
          command: "体力青でBCD同時押し",
          skills: [
            {
              name: "一閃",
              command: "BCD同時押し",
            },
          ],
        },
      ],
    },
  ],
}
