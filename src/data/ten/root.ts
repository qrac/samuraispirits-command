import type { DataItem } from "../../types"

export const tenRoot: DataItem = {
  id: "ten-root",
  name: "基本操作（天サム）",
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
          command: "近距離で→+C or ←+C",
        },
        {
          name: "見切り",
          command: "AB同時押し",
        },
        {
          name: "回り込み",
          command: "近距離でAB同時押し",
        },
        {
          name: "不意打ち",
          command: "BC同時押し",
        },
        {
          name: "小追い打ち",
          command: "与ダウン時↘+斬",
        },
        {
          name: "大追い打ち",
          command: "与ダウン時↑+斬",
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
          name: "体力回復",
          command: "被ダウン時↓+ボタン連打",
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
          name: "連斬",
          command: "CD同時押し",
          skills: [
            {
              name: "ルート①",
              command: "A,A,A",
            },
            {
              name: "ルート②",
              command: "A,B,C",
            },
            {
              name: "ルート③",
              command: "B,B,C",
            },
            {
              name: "ルート④",
              command: "→+A,A,B,B,C,C,A,B,C,C,C,C,C",
            },
          ],
        },
        {
          name: "怒り爆発",
          command: "ABC同時押し",
          skills: [
            {
              name: "連ね斬り",
              command: "ABC同時押し",
            },
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
