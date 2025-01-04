import type { DataItem } from "../../../types"

export const kenSieger: DataItem = {
  id: "ken-sieger",
  name: "ナインハルト・ズィーガー",
  groups: [
    {
      title: "必殺技",
      skills: [
        {
          name: "ヴルカーン・ヴァイネン",
          command: "↓↘→+A",
          skills: [
            {
              name: "ヴルカーン・ドリュッケン",
              command: "A連打",
              skills: [
                {
                  name: "ヴルカーン・エクスプロイズン",
                  command: "A連打",
                },
              ],
            },
          ],
        },
        {
          name: "ティーガー・コップ",
          command: "↓↘→+D",
          skills: [
            {
              name: "ファルケ・ナーゲル",
              command: "↓↘→+B",
              skills: [
                {
                  name: "エレファント・グリード",
                  command: "→↘↓↙←+C",
                },
              ],
            },
          ],
        },
        {
          name: "ブリッツ・イェーガー",
          command: "→↘↓↙←+斬（空中も可）",
        },
        {
          name: "ファイヤー・ストゥーム",
          command: "←↓↙+斬",
        },
      ],
    },
    {
      title: "特殊",
      skills: [
        {
          name: "ぬいぐるみ変化【真】",
          command: "→↘↓↙←→←+E",
        },
      ],
    },
    {
      title: "秘奥義",
      titleColor: 3,
      skills: [
        {
          name: "オペラツィオン・ティーガー【真】",
          command: "→↘↓↙←→+BC",
        },
        {
          name: "オペラツィオン・ティーガー【剣】",
          command: "↓↘→+BC",
        },
      ],
    },
    {
      title: "武器飛ばし技・武器破壊技",
      titleColor: 2,
      skills: [
        {
          name: "ドラグーン・ファウスト",
          command: "↓↘→+AB",
        },
      ],
    },
  ],
  sources: [
    {
      title: "もっと詳しいサイト",
      links: [
        {
          name: "ナインハルト・ズィーガー - サムライスピリッツ天下一剣客伝攻略 - Seesaa Wiki",
          href: "https://seesaawiki.jp/w/givingleaf/d/%a5%ca%a5%a4%a5%f3%a5%cf%a5%eb%a5%c8%a1%a6%a5%ba%a5%a3%a1%bc%a5%ac%a1%bc",
        },
        {
          name: "ナインハルト・ズィーガー - キャラクターとコマンドリスト | 剣サム | 明鏡止水｡◇ﾟ in 雨峠",
          href: "https://amatoge.static.jp/meikyo/kenkaku/waza.htm#sin-sieger",
        },
      ],
    },
    /*{
      title: "もっと詳しい動画",
      links: [
        {
          name: "",
          href: "https://youtu.be/xxx",
        },
      ],
    },*/
  ],
}
