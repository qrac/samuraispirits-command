import type { DataItem } from "../../../../types"

export const asuraHanmaRasetsu: DataItem = {
  id: "asura-hanma-rasetsu",
  name: "カラクリ磐馬（羅刹）",
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
          notes: ["上段（怒時は下段）", "○"],
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
          name: "カラクリ圧破（アッパー）",
          command: "↘+A",
          notes: ["中段", "×"],
        },
        {
          name: "カラクリ追い討ち兵頭（ヘッド）",
          command: "↘+B",
          notes: ["中段", "×"],
        },
        {
          name: "カラクリ繰流繰流鬼苦（クルクルキック）",
          command: "↘+C",
          notes: ["中段", "×"],
        },
        {
          name: "カラクリ弐位鬼苦（ニーキック）",
          command: "屈↘+C",
          notes: ["上段", "×"],
        },
        {
          name: "カラクリ顔面兵頭（ヘッド）",
          command: "→→+A",
          notes: ["中段", "×"],
        },
        {
          name: "カラクリ駄々児腕々（ダダッコワンワン）",
          command: "→→+B",
          notes: ["上段", "×"],
        },
        {
          name: "カラクリ崇歯直拳（スーパーストレート）",
          command: "→→+C",
          notes: ["上段", "×"],
        },
        {
          name: "カラクリ崇歯圧破（スーパーアッパー）",
          command: "↘↘+C",
          notes: ["中段", "×"],
        },
      ],
    },
    {
      title: "必殺技",
      skills: [
        {
          name: "カラクリ壱番起動 鉄砕丸",
          command: "↓↘→+A or B or 怒時AB",
          skills: [
            {
              name: "待機",
              command: "そのままボタン継続押し",
              notes: ["レバーで発射角度変更（斜め上・水平・斜め下）"],
            },
          ],
        },
        {
          name: "カラクリ弐番起動 蛇威炉（ジャイロ）",
          command: "←↙↓↘→+C",
        },
        {
          name: "カラクリ四番起動 歯止刀（シシトウ）",
          command: "←↓↙+C",
          notes: ["上中段当て身"],
        },
        {
          name: "カラクリ伍番起動 怒裏流（ドリル）",
          command: "→↘↓↙←+A or B",
        },
        {
          name: "カラクリ九番起動 常沌埒手（トコトンラッシュ）",
          command: "→↓↘+A or B",
          skills: [
            {
              name: "追加攻撃",
              command: "B",
            },
          ],
        },
        {
          name: "カラクリ拾七番起動 熱々罵穴（アツアツバーナー）",
          command: "←↓↙+A or B or 怒時AB",
        },
      ],
    },
    {
      title: "秘奥義",
      titleColor: 2,
      skills: [
        {
          name: "カラクリ四拾参番起動 魔神丸（マシンガン）",
          command: "↓↘→+BC",
        },
      ],
    },
  ],
}
