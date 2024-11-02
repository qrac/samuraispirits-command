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
}
