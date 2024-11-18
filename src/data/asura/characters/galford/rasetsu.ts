import type { DataItem } from "../../../../types"

export const asuraGalfordRasetsu: DataItem = {
  id: "asura-galford-rasetsu",
  name: "ガルフォード（羅刹）",
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
          notes: ["下段", "○"],
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
          name: "ミドルアッパースラッシュ",
          command: "↘+A",
          notes: ["中段", "×"],
        },
        {
          name: "ミドルローリングスラスト",
          command: "↘+B",
          notes: ["中段", "×"],
        },
        {
          name: "スピニングローキック",
          command: "↓+C",
          notes: ["下段", "×"],
        },
        {
          name: "スラッシュエルボー",
          command: "↘+C",
          notes: ["中段", "×"],
        },
        {
          name: "ライトニングサマー",
          command: "↖+C",
          notes: ["中段", "×"],
        },
        {
          name: "トルネードキック",
          command: "↗+C",
          notes: ["中段", "×"],
        },
        {
          name: "ローリングスラッシュ",
          command: "→→+A",
          notes: ["上段", "×"],
        },
        {
          name: "グランドローリングスラッシュ",
          command: "→→+B",
          notes: ["下段", "×"],
        },
        {
          name: "ライジングニー",
          command: "↘↘+C",
          notes: ["中段", "×"],
        },
        {
          name: "バク転",
          command: "←←+D",
        },
      ],
    },
    {
      title: "必殺技",
      skills: [
        {
          name: "プラズマブレード",
          command: "↓↘→+A or B or 怒時AB",
          skills: [
            {
              name: "プラズマスパーク",
              command: "A or B or C or D",
            },
          ],
        },
        {
          name: "ライトニングスラッシュ",
          command: "↓↘→+C",
        },
        {
          name: "プラズマブレイク",
          command: "→↓↘+A or B or 怒時AB",
        },
        {
          name: "ストライクヘッズ",
          command: "→↓↘+C",
          notes: ["上段投げ / 投げ抜け:C"],
        },
        {
          name: "レプリカアタック",
          command: "→↘↓↙←+A or B",
        },
        {
          name: "シャドーコピー",
          command: "→←↙↓↘→+A or B",
        },
        {
          name: "プラズマファクト",
          command: "←↓↙+D",
          notes: ["強化 / 時間で体力減少 / 体力枯渇で解除"],
          skills: [
            {
              name: "解除",
              command: "←↓↙+D",
            },
            {
              name: "HLK",
              command: "↓↙←+C",
              notes: ["ガード不能 / 飛びげり"],
              skills: [
                {
                  name: "HLU",
                  command: "C",
                  notes: ["中段アッパー / HLKのタメ中に入力"],
                },
                {
                  name: "HLF",
                  command: "D",
                  notes: ["フェイント / HLKのタメ中に入力"],
                },
              ],
            },
            {
              name: "プラズマフィスト",
              command: "→→+C",
            },
            {
              name: "プラズマフラッシュ",
              command: "←+C",
              notes: ["使用後に強化解除"],
            },
            {
              name: "ライジングサマー",
              command: "↖+C",
            },
          ],
        },
        {
          name: "L.S.T.（ライトニングストライクスリー）",
          command: "怒時←↙↓↘→+AB",
        },
      ],
    },
    {
      title: "秘奥義",
      titleColor: 2,
      skills: [
        {
          name: "T.B.C.（サンダーブレイクキャノン）",
          command: "→↓↘+BC",
        },
      ],
    },
  ],
}
