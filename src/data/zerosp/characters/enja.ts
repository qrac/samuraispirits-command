import type { DataItem } from "../../../types"

export const zerospEnja: DataItem = {
  id: "zerosp-enja",
  name: "炎邪",
  groups: [
    {
      title: "必殺技",
      skills: [
        {
          name: "愚連脚",
          command: "→↓↘+A or B or C",
          skills: [
            {
              name: "追加攻撃",
              command: "→+A or B or C・←+A or B or Cを交互に入力",
            },
          ],
        },
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
              ],
            },
          ],
        },
        {
          name: "炎滅",
          command: "←↓↙+斬",
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
          name: "炎邪爆熱",
          command: "↓↘→+CD",
          skills: [
            {
              name: "中断",
              command: "ABCD",
            },
          ],
        },
      ],
    },
    {
      title: "絶命奥義",
      titleColor: 2,
      skills: [
        {
          name: "三千大千世界全焦土",
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
          name: "キャラ別攻略 炎邪 | 零SP | 明鏡止水｡◇ﾟ in 雨峠",
          href: "https://amatoge.static.jp/meikyo/zerosp/character/23en.htm",
        },
        {
          name: "変更点～炎邪～ サムライスピリッツ零SPECIAL - ぽんしゃぶ弐号",
          href: "https://www5b.biglobe.ne.jp/~hitokiri/zerosp/14_ennzya.htm",
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
