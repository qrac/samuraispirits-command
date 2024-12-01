import type { DataItem } from "../../../types"

export const shinGenan: DataItem = {
  id: "shin-genan",
  name: "不知火幻庵",
  groups: [
    {
      title: "必殺技",
      skills: [
        {
          name: "毒吹雪",
          command: "↓↘→+斬",
        },
        {
          name: "肉転突き",
          command: "→↓↘+斬",
        },
        {
          name: "爪つまみ",
          command: "→↘↓↙←+斬",
        },
        {
          name: "幻庵うつせみ脱皮",
          command: "↘↓↙+BCD",
        },
        {
          name: "幻庵脱皮",
          command: "被ダメージ中にBCD",
        },
      ],
    },
    {
      title: "投げ",
      skills: [
        {
          name: "ヒザ蹴り",
          command: "近距離で→ or ←+中 or 強攻撃",
        },
        {
          name: "ケケ二段蹴り",
          command: "アースクェイクに対して投げ",
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
        {
          name: "しゃがみ移動",
          command: "↙ or ↘",
        },
        {
          name: "ぬいぐるみ変化",
          command: "↘↓↙←↓↙+C",
        },
      ],
    },
    {
      title: "武器破壊技",
      titleColor: 2,
      skills: [
        {
          name: "M.D.C（魔道ダイビングクロー）",
          command: "→↘↓↙←→+AB",
        },
      ],
    },
  ],
  sources: [
    {
      title: "もっと詳しいサイト",
      links: [
        {
          name: "不知火幻庵 - 真刃繚乱",
          href: "http://shinjin.starfree.jp/chara_data/genan/genan_mainframe.htm",
        },
        {
          name: "不知火幻庵の連続技 - 真刃繚乱",
          href: "http://shinjin.starfree.jp/combo/genan/genan_comboframe.htm",
        },
      ],
    },
    {
      title: "もっと詳しい動画",
      links: [
        {
          name: "真サムライスピリッツ(SAMURAI SHODOWN 2)初心者講習会 第4回 その1（不知火幻庵） - YouTube",
          href: "https://youtu.be/c1dZ_a8Gk4o",
        },
      ],
    },
  ],
}
