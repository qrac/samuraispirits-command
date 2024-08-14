import type { DataItem } from "../../../types"

export const shinSieger: DataItem = {
  id: "shin-sieger",
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
          command: "↓↘→+C",
          skills: [
            {
              name: "ファルケ・ナーゲル",
              command: "↓↘→+B",
              skills: [
                {
                  name: "エレファント・グリード",
                  command: "→↘↓↙←+A",
                },
              ],
            },
          ],
        },
        {
          name: "ヴォルフ・ファンゲン",
          command: "→←↙↓↘+AB同時押し",
        },
        {
          name: "ブリッツ・イェーガー",
          command: "→↘↓↙←+蹴",
        },
        {
          name: "ファイヤー・ストゥーム",
          command: "↘+BC同時押し",
        },
      ],
    },
    {
      title: "特殊技",
      skills: [
        {
          name: "フォアスト・ツヴァングスマースナーメ",
          command: "空中近距離で↙ or ↓ or ↘+B or AB同時押し",
        },
        {
          name: "ぬいぐるみ変化",
          command: "→↘↓↙←→←+A",
        },
      ],
    },
    {
      title: "武器破壊",
      titleColor: 2,
      skills: [
        {
          name: "オペラツィオン・ティーガー",
          command: "→↘↓↙←→+CD同時押し",
        },
      ],
    },
  ],
}
