import type { DataItem } from "../../../types"

export const zeroMina: DataItem = {
  id: "zero-mina",
  name: "真鏡名ミナ",
  groups: [
    {
      title: "必殺技",
      skills: [
        {
          name: "地弓心",
          command: "←タメ→+斬",
        },
        {
          name: "天弓心",
          command: "←タメ→+C",
        },
        {
          name: "シニマブイの嘆き",
          command: "→↓↘+斬",
        },
        {
          name: "スンガンの誘い",
          command: "←↓↙+A",
          notes: ["3つまでストック可能"],
        },
        {
          name: "スンガンの迎え",
          command: "矢ストック時 ←↓↙+B",
        },
        {
          name: "カジフチ",
          command: "空中で↓+C",
        },
        {
          name: "チャンプル、こっちおいで",
          command: "↓↙←+B",
          notes: ["再入力で解除"],
        },
        {
          name: "チャンプル、おやすみなさい",
          command: "↓↙←+C",
          notes: ["再入力で解除"],
        },
      ],
    },
    {
      title: "特殊",
      skills: [
        {
          name: "三角飛び",
          command: "空中画面端で↗ or → or ↘",
        },
      ],
    },
    {
      title: "武器飛ばし技",
      titleColor: 2,
      skills: [
        {
          name: "ウミチムンの怒り",
          command: "↓↘→+CD",
        },
      ],
    },
  ],
}
