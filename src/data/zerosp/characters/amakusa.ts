import type { DataItem } from "../../../types"

export const zerospAmakusa: DataItem = {
  id: "zerosp-amakusa",
  name: "天草四郎時貞",
  groups: [
    {
      title: "必殺技",
      skills: [
        {
          name: "死霊刃",
          command: "↓↘→+斬",
        },
        {
          name: "天照封凰拏",
          command: "↓↙←+斬",
        },
        {
          name: "汝、暗転入滅せよ",
          command: "→↓↘+斬",
          skills: [
            {
              name: "攻撃",
              command: "斬",
            },
            {
              name: "中止",
              command: "D",
            },
          ],
        },
        {
          name: "逢魔刻（前）",
          command: "↓↘→+C",
        },
        {
          name: "逢魔刻（後）",
          command: "↓↙←+C",
        },
        {
          name: "戒烈掌",
          command: "→↓↘+C",
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
      ],
    },
    {
      title: "武器飛ばし技",
      titleColor: 2,
      skills: [
        {
          name: "凶冥十殺陣",
          command: "↓↘→+CD",
        },
      ],
    },
    {
      title: "絶命奥義",
      titleColor: 2,
      skills: [
        {
          name: "汝、懺悔せよ。我、滅罪せん。",
          command: "↓↙←+CD",
        },
      ],
    },
  ],
  sources: [
    {
      title: "もっと詳しいサイト",
      links: [
        {
          name: "キャラ別攻略 天草四郎時貞 | 零SP | 明鏡止水｡◇ﾟ in 雨峠",
          href: "https://amatoge.static.jp/meikyo/zerosp/character/25amakusa.htm",
        },
        {
          name: "簡易攻略～天草四郎時貞～ サムライスピリッツ零SPECIAL - ぽんしゃぶ弐号",
          href: "https://www5b.biglobe.ne.jp/~hitokiri/zerosp/0b_amakusa.htm",
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
