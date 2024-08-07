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
