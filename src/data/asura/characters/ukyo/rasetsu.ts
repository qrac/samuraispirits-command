import type { DataItem } from "../../../../types"

export const asuraUkyoRasetsu: DataItem = {
  id: "asura-ukyo-rasetsu",
  name: "橘右京（羅刹）",
  groups: [
    {
      title: "通常技",
      titleNote: "入力 / 属性 / キャンセル",
      layout: "note",
      accordion: "normal",
      skills: [
        {
          name: "",
          command: "A",
          notes: ["上段", "○"],
        },
        {
          name: "",
          command: "B",
          notes: ["上段", "○"],
        },
        {
          name: "",
          command: "C",
          notes: ["中段", "×"],
        },
        {
          name: "",
          command: "→+A",
          notes: ["上段", "○"],
        },
        {
          name: "",
          command: "→+B",
          notes: ["上段", "×"],
        },
        {
          name: "",
          command: "屈A",
          notes: ["下段", "×"],
        },
        {
          name: "",
          command: "屈B",
          notes: ["上段", "○"],
        },
        {
          name: "",
          command: "屈C",
          notes: ["下段", "×"],
        },
        {
          name: "",
          command: "（背面）A",
          notes: ["上段", "○"],
        },
        {
          name: "",
          command: "（背面）B",
          notes: ["上段", "○"],
        },
        {
          name: "",
          command: "（背面）C",
          notes: ["中段", "×"],
        },
        {
          name: "",
          command: "（背面）屈A",
          notes: ["下段", "○"],
        },
        {
          name: "",
          command: "（背面）屈B",
          notes: ["下段", "○"],
        },
        {
          name: "",
          command: "（背面）屈C",
          notes: ["下段", "×"],
        },
        {
          name: "",
          command: "空中でA",
          notes: ["中段", "×"],
        },
        {
          name: "",
          command: "空中でB",
          notes: ["中段", "×"],
        },
        {
          name: "",
          command: "空中でC",
          notes: ["中段", "×"],
        },
        {
          name: "",
          command: "起き上がり時A",
          notes: ["中段", "×"],
        },
        {
          name: "",
          command: "起き上がり時B",
          notes: ["下段", "×"],
        },
      ],
    },
    {
      title: "固有技",
      titleNote: "入力 / 属性 / キャンセル",
      layout: "note",
      accordion: "unique",
      skills: [
        {
          name: "こじり打突",
          command: "↘+C",
          notes: ["中段", "×"],
        },
        {
          name: "鞘打ち下段払い",
          command: "↓+C",
          notes: ["下段", "×"],
        },
        {
          name: "踏み込み斬り",
          command: "→→+A",
          notes: ["下段", "×"],
        },
        {
          name: "夢想二連斬り",
          command: "→→+B",
          notes: ["上・上", "×・×"],
        },
        {
          name: "かちあげ鞘打ち",
          command: "→→+C",
          notes: ["上段", "×"],
        },
        {
          name: "百日紅",
          command: "↘↘+C",
          notes: ["下段", "×"],
        },
        {
          name: "飛びこみ斬り",
          command: "↗+B",
          notes: ["中段", "×"],
        },
      ],
    },
    {
      title: "必殺技",
      skills: [
        {
          name: "燕返し",
          command: "空中で↓↘→+A or B or 怒時AB",
        },
        {
          name: "夢想 霞",
          command: "↓↙←+A or B or C or怒時AB",
          notes: ["A:上 B:中 C:下 / AB:上 キャンセル発動可"],
        },
        {
          name: "朧刀",
          command: "↓↘→+A or B",
          skills: [
            {
              name: "",
              command: "↓↘→+A or B",
              notes: ["派生前と同一ボタンを使用"],
              skills: [
                {
                  name: "",
                  command: "↓↘→+A or B",
                  notes: ["派生前と同一ボタンを使用"],
                },
              ],
            },
          ],
        },
        {
          name: "朝凪",
          command: "←↓↙+A",
          notes: ["上中段当て身"],
        },
        {
          name: "夕凪",
          command: "←↓↙+B",
          notes: ["下段当て身"],
        },
        {
          name: "雪崩",
          command: "→↓↘+C",
          notes: ["上段投げ / 投げ抜け不可"],
        },
        {
          name: "春夢二連華",
          command: "←↙↓↘→+B",
          notes: ["ガード不能"],
        },
      ],
    },
    {
      title: "秘奥義",
      titleColor: 2,
      skills: [
        {
          name: "夢想残光霞 ",
          command: "←↙↓↘→+BC",
        },
      ],
    },
  ],
}