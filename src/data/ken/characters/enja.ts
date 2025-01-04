import type { DataItem } from "../../../types"

export const kenEnja: DataItem = {
  id: "ken-enja",
  name: "炎邪",
  groups: [
    {
      title: "必殺技",
      skills: [
        {
          name: "六道烈火・地獄道",
          command: "↓↘→+A",
          skills: [
            {
              name: "六道烈火・餓鬼道",
              command: "↓↘→+B",
              skills: [
                {
                  name: "六道烈火・天道",
                  command: "↓↘→+C",
                },
                {
                  name: "六道烈火・天道（MAX版）",
                  command: "ゲージ最大時に↓↘→↗↑↖←↙↓+AB",
                },
              ],
            },
          ],
        },
        {
          name: "愚連脚",
          command: "→↓↘+D",
          skills: [
            {
              name: "追加攻撃",
              command: "→+D・←+Dを交互に入力",
            },
          ],
        },
        {
          name: "絶焼・全焦土",
          command: "←↙↓↘→+C",
        },
        {
          name: "炎滅",
          command: "←↓↙+D",
        },
      ],
    },
    {
      title: "特殊",
      skills: [
        {
          name: "三角降り",
          command: "空中画面端で↘",
        },
        {
          name: "特殊技",
          command: "→+B",
        },
      ],
    },
    {
      title: "秘奥義",
      titleColor: 3,
      skills: [
        {
          name: "紅蓮黒縄【真】",
          command: "→↓↘→↓↘+BC",
        },
        {
          name: "紅蓮黒縄【剣】",
          command: "↓↘→+BC",
        },
      ],
    },
    {
      title: "武器飛ばし技・武器破壊技",
      titleColor: 2,
      skills: [
        {
          name: "炎邪爆熱",
          command: "↓↘→+AB",
          skills: [
            {
              name: "中断",
              command: "ABCD",
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
          name: "炎邪 - サムライスピリッツ天下一剣客伝攻略 - Seesaa Wiki",
          href: "https://seesaawiki.jp/w/givingleaf/d/%b1%ea%bc%d9",
        },
        {
          name: "炎邪 - キャラクターとコマンドリスト | 剣サム | 明鏡止水｡◇ﾟ in 雨峠",
          href: "https://amatoge.static.jp/meikyo/kenkaku/waza.htm#zero-enja",
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
