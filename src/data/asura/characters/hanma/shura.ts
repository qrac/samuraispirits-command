import type { DataItem } from "../../../../types"

export const asuraHanmaShura: DataItem = {
  id: "asura-hanma-shura",
  name: "柳生磐馬（修羅）",
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
          name: "鉄肘落し",
          command: "↘+A",
          notes: ["中段", "×"],
        },
        {
          name: "圧破（アッパー）",
          command: "↘+B",
          notes: ["中段", "×"],
        },
        {
          name: "鉛蹴り",
          command: "↓+C",
          notes: ["下段", "×"],
        },
        {
          name: "頭進突",
          command: "→→+A",
          notes: ["中段", "×"],
        },
        {
          name: "打ち下ろし手甲（パンチ）",
          command: "→→+B",
          notes: ["中段", "×"],
        },
        {
          name: "象躍",
          command: "→→+C",
          notes: ["中段", "×"],
        },
      ],
    },
    {
      title: "必殺技",
      skills: [
        {
          name: "鉄砕丸",
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
          name: "顔砕旋風打",
          command: "→↘↓↙←+C or 怒時AB",
          notes: ["投げ抜け:C"],
        },
        {
          name: "腕打遠心投",
          command: "←↙↓↘→+C",
          notes: ["上段投げ / 投げ抜け:C"],
          skills: [
            {
              name: "四肢破壊固め",
              command: "←↙↓↘→+A",
              notes: ["投げ抜け:A"],
            },
            {
              name: "粉砕大落下",
              command: "←↙↓↘→+B",
              notes: ["投げ抜け:B"],
            },
          ],
        },
        {
          name: "大折檻",
          command: "→↓↘+C",
          notes: ["上段投げ / 投げ抜け:C"],
        },
        {
          name: "大外刈り",
          command: "つかみ（→+C）中にA",
          notes: ["投げ抜け:A"],
        },
        {
          name: "巴投げ",
          command: "つかみ（→+C）中にB",
          notes: ["投げ抜け:B"],
        },
        {
          name: "山嵐",
          command: "怒時つかみ（→+C）中にAB",
          notes: ["投げ抜け:AB"],
        },
        {
          name: "頚椎粉砕",
          command: "相手が屈時に↘+C",
          notes: ["下段投げ / 投げ抜け:C"],
        },
        {
          name: "放り上げ",
          command: "与ダウン時に↙ or ↓ or ↘+C",
          notes: ["ダウン投げ"],
          skills: [
            {
              name: "四肢破壊固め",
              command: "←↙↓↘→+A",
              notes: ["投げ抜け:A"],
            },
            {
              name: "粉砕大落下",
              command: "←↙↓↘→+B",
              notes: ["投げ抜け:B"],
            },
          ],
        },
        {
          name: "原爆固め",
          command: "相手の背後から→↓↘+C",
          notes: ["中段投げ / 投げ抜け:C"],
        },
      ],
    },
    {
      title: "秘奥義",
      titleColor: 2,
      skills: [
        {
          name: "天地大洛",
          command: "←↙↓↘→+BC",
          notes: ["中段投げ / 投げ抜け不可"],
          skills: [
            {
              name: "",
              command: "→↓↘+A",
              skills: [
                {
                  name: "",
                  command: "→↓↘+B",
                },
              ],
            },
          ],
        },
      ],
    },
  ],
  sources: [
    {
      title: "もっと詳しいサイト",
      links: [
        {
          name: "アスラ斬魔伝 / キャラ雑感 柳生磐馬（修羅） - 数字置き場",
          href: "https://seesaawiki.jp/kakugesouko/d/%a5%a2%a5%b9%a5%e9%bb%c2%cb%e2%c5%c1%20/%20%a5%ad%a5%e3%a5%e9%bb%a8%b4%b6%a4%ca%a4%c9#hnmA",
        },
        {
          name: "アスラ斬魔伝 / 柳生磐馬 - 数字置き場",
          href: "https://seesaawiki.jp/kakugesouko/d/%a5%a2%a5%b9%a5%e9%bb%c2%cb%e2%c5%c1/%c8%d8%c7%cf",
        },
      ],
    },
    {
      title: "もっと詳しい動画",
      links: [
        {
          name: "サムライスピリッツ2アスラ斬魔伝 修羅柳生磐馬技一覧 - YouTube",
          href: "https://youtu.be/GwfMwJyFziU",
        },
      ],
    },
  ],
}
