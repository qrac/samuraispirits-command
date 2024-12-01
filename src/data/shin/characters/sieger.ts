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
          command: "→←↙↓↘+AB",
        },
        {
          name: "ブリッツ・イェーガー",
          command: "→↘↓↙←+蹴",
        },
        {
          name: "ファイヤー・ストゥーム",
          command: "↘+BC",
        },
      ],
    },
    {
      title: "投げ",
      skills: [
        {
          name: "シューデル・エアオーベルング",
          command: "近距離で→ or ←+B or AB",
        },
        {
          name: "レーベ・シュトースツァーン・シュトゥルムアングリフ",
          command: "近距離で→ or ←+D or CD",
        },
        {
          name: "フォアスト・ツヴァングスマースナーメ",
          command: "空中近距離で↙ or ↓ or ↘+B or AB",
        },
        {
          name: "プロカーデ・バイン",
          command: "アースクェイクに対して投げ",
        },
      ],
    },
    {
      title: "特殊",
      skills: [
        {
          name: "ぬいぐるみ変化",
          command: "→↘↓↙←→←+A",
        },
      ],
    },
    {
      title: "武器破壊技",
      titleColor: 2,
      skills: [
        {
          name: "オペラツィオン・ティーガー",
          command: "→↘↓↙←→+CD",
        },
      ],
    },
  ],
  sources: [
    {
      title: "もっと詳しいサイト",
      links: [
        {
          name: "ナインハルト・ズィーガー - 真刃繚乱",
          href: "http://shinjin.starfree.jp/chara_data/sie/sie_mainframe.htm",
        },
        {
          name: "ナインハルト・ズィーガーの連続技 - 真刃繚乱",
          href: "http://shinjin.starfree.jp/combo/sie/sie_comboframe.htm",
        },
      ],
    },
    {
      title: "もっと詳しい動画",
      links: [
        {
          name: "真サムライスピリッツ(SAMURAI SHODOWN 2)初心者講習会 第2回 その2(ナインハルト・ズィーガー) - YouTube",
          href: "https://youtu.be/8xWbe8CcaOg",
        },
      ],
    },
  ],
}
