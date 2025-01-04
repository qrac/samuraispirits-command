import type { DataItem } from "../../../types"

export const kenGenan: DataItem = {
  id: "ken-genan",
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
          command: "→↘↓↙←+D",
        },
        {
          name: "壁張り付き",
          command: "↓↙←+斬",
          skills: [
            {
              name: "壁に張り付く",
              command: "ボタン継続押し",
              skills: [
                {
                  name: "壁から降りる",
                  command: "D",
                },
                {
                  name: "壁から飛ぶ",
                  command: "ボタンを離す",
                  skills: [
                    {
                      name: "首刈り",
                      command: "斬",
                    },
                  ],
                },
              ],
            },
            {
              name: "首刈り",
              command: "斬",
            },
          ],
        },
      ],
    },
    {
      title: "特殊",
      skills: [
        {
          name: "三角飛び",
          command: "空中画面端で↗",
        },
        {
          name: "三角降り",
          command: "空中画面端で↘",
        },
        {
          name: "特殊技",
          command: "→+D",
        },
        {
          name: "ぬいぐるみ変化【真】",
          command: "↘↓↙←↓↙+E",
        },
      ],
    },
    {
      title: "秘奥義",
      titleColor: 3,
      skills: [
        {
          name: "肉転地獄突き【真】",
          command: "→↘↓↙←→+BC",
        },
        {
          name: "肉転地獄突き【剣】",
          command: "↓↘→+BC",
        },
      ],
    },
    {
      title: "武器飛ばし技・武器破壊技",
      titleColor: 2,
      skills: [
        {
          name: "M.D.C（魔道ダイビングクロー）",
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
          name: "不知火幻庵 - サムライスピリッツ天下一剣客伝攻略 - Seesaa Wiki",
          href: "https://seesaawiki.jp/w/givingleaf/d/%c9%d4%c3%ce%b2%d0%b8%b8%b0%c3",
        },
        {
          name: "不知火幻庵 - キャラクターとコマンドリスト | 剣サム | 明鏡止水｡◇ﾟ in 雨峠",
          href: "https://amatoge.static.jp/meikyo/kenkaku/waza.htm#syo-genan",
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
