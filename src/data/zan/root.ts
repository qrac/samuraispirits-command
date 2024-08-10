import type { DataItem } from "../../types"

export const zanRoot: DataItem = {
  id: "zan-root",
  name: "基本操作",
  layout: "slim",
  groups: [
    {
      list: [
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
          command: "C",
        },
        {
          name: "蹴り",
          command: "D",
        },
        {
          name: "上段蹴り",
          command: "レバーニュートラル or ←+D",
        },
        {
          name: "下段狙い蹴り",
          command: "→+D",
        },
        {
          name: "牽制攻撃",
          command: "↙ or ↓+D",
        },
        {
          name: "足払い",
          command: "↘+D",
        },
        {
          name: "防御崩し",
          command: "接近して→+C or ←+C",
        },
        {
          name: "見切り",
          command: "AB同時押し",
        },
        {
          name: "回り込み",
          command: "接近してAB同時押し",
        },
        {
          name: "不意打ち",
          command: "BC同時押し",
        },
        {
          name: "怒りゲージ溜め",
          command: "ABC同時押し（継続）",
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
          name: "移動起き上がり",
          command: "被ダウン時← or →",
        },
        {
          name: "クイック起き上がり",
          command: "被ダウン時↑",
        },
        {
          name: "当て身",
          command: "武器あり時←↙↓↘→",
        },
        {
          name: "真剣白羽取り",
          command: "素手時←↙↓↘→",
        },
      ],
    },
  ],
}
