import type { DataItem } from "../../../../types"

export const asuraShikiShura: DataItem = {
  id: "asura-shiki-shura",
  name: "色（修羅）",
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
          notes: ["中・中", "×・×"],
        },
        {
          name: "",
          command: "→+A",
          notes: ["上段", "○"],
        },
        {
          name: "",
          command: "→+B",
          notes: ["上・上", "×・×"],
        },
        {
          name: "",
          command: "屈A",
          notes: ["下段", "×"],
        },
        {
          name: "",
          command: "屈B",
          notes: ["下・下", "○・○"],
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
          notes: ["下・下", "○・○"],
        },
        {
          name: "",
          command: "（背面）屈C",
          notes: ["下・下", "×・×"],
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
          name: "第十八の斬り",
          command: "↘+B",
          notes: ["中段", "×"],
        },
        {
          name: "第四十一の斬り",
          command: "↘+C",
          notes: ["中・上", "×・×"],
        },
        {
          name: "第一の斬り",
          command: "↖+B",
          notes: ["中段", "×"],
        },
        {
          name: "第ニの斬り",
          command: "↓+B",
          notes: ["中段", "×"],
        },
        {
          name: "第百十の斬り",
          command: "↓+C",
          notes: ["下・上", "×・×"],
        },
        {
          name: "第三の斬り",
          command: "→→+B",
          notes: ["上段", "×"],
        },
        {
          name: "第四の斬り",
          command: "→→+C",
          notes: ["G不能・キャンセル発動可能", "×"],
        },
        {
          name: "第五の斬り",
          command: "←←+B",
          notes: ["上段", "×"],
        },
        {
          name: "第八の斬り",
          command: "↘↘+C",
          notes: ["上・下", "×・×"],
        },
      ],
    },
    {
      title: "必殺技",
      skills: [
        {
          name: "天咆輪",
          command: "→↓↘+A or B or 怒時AB",
        },
        {
          name: "露祓",
          command: "↓↘→+A or B or 怒時AB",
        },
        {
          name: "首刀",
          command: "←↓↙+C",
          notes: ["上段投げ / 投げ抜け:C"],
        },
        {
          name: "黄泉落とし",
          command: "→↓↘+C",
          notes: ["上段投げ / 投げ抜け:C"],
          skills: [
            {
              name: "顎",
              command: "←→+A",
              notes: ["投げ抜け:B / 相手は起き上がり行動可能"],
            },
            {
              name: "奈落落とし",
              command: "←→+B",
              notes: ["投げ抜け不可 / 相手は起き上がり行動可能"],
              skills: [
                {
                  name: "影践",
                  command: "↓↓+A",
                  notes: ["投げ抜け不可"],
                },
              ],
            },
          ],
        },
        {
          name: "蓮華舞",
          command: "空中で↓↘→+C",
          notes: ["ガード不能"],
          skills: [
            {
              name: "結跏趺",
              command: "",
              notes: ["相手の肩に乗った状態"],
              skills: [
                {
                  name: "昇華",
                  command: "A",
                },
                {
                  name: "散華",
                  command: "B",
                },
              ],
            },
          ],
        },
        {
          name: "空華「阿」",
          command: "↓↘→+D",
          skills: [
            {
              name: "蓮華舞",
              command: "C",
              notes: ["ガード不能"],
              skills: [
                {
                  name: "結跏趺",
                  command: "",
                  notes: ["相手の肩に乗った状態"],
                  skills: [
                    {
                      name: "昇華",
                      command: "A",
                    },
                    {
                      name: "散華",
                      command: "B",
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          name: "空華「吽」",
          command: "↓↙←+D",
          skills: [
            {
              name: "蓮華舞",
              command: "C",
              notes: ["ガード不能"],
              skills: [
                {
                  name: "結跏趺",
                  command: "",
                  notes: ["相手の肩に乗った状態"],
                  skills: [
                    {
                      name: "昇華",
                      command: "A",
                    },
                    {
                      name: "散華",
                      command: "B",
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      title: "秘奥義",
      titleColor: 2,
      skills: [
        {
          name: "天魔波旬",
          command: "→↓↘+BC",
        },
      ],
    },
  ],
  sources: [
    {
      title: "もっと詳しいサイト",
      links: [
        {
          name: "アスラ斬魔伝 / キャラ雑感 色（修羅） - 数字置き場",
          href: "https://seesaawiki.jp/kakugesouko/d/%a5%a2%a5%b9%a5%e9%bb%c2%cb%e2%c5%c1%20/%20%a5%ad%a5%e3%a5%e9%bb%a8%b4%b6%a4%ca%a4%c9#sikA",
        },
        {
          name: "アスラ斬魔伝 / 色 - 数字置き場",
          href: "https://seesaawiki.jp/kakugesouko/d/%a5%a2%a5%b9%a5%e9%bb%c2%cb%e2%c5%c1/%bf%a7",
        },
      ],
    },
    {
      title: "もっと詳しい動画",
      links: [
        {
          name: "サムライスピリッツ2アスラ斬魔伝 修羅色技一覧 - YouTube",
          href: "https://youtu.be/QRQGxNqD2aA",
        },
      ],
    },
  ],
}
