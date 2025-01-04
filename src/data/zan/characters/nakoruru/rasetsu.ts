import type { DataItem } from "../../../../types"

export const zanNakoruruRasetsu: DataItem = {
  id: "zan-nakoruru-rasetsu",
  name: "ナコルル（羅刹）",
  groups: [
    {
      title: "必殺技",
      skills: [
        {
          name: "アンヌ ムツベ",
          command: "←↙↓+斬",
        },
        {
          name: "レラ ムツベ",
          command: "↓↘→+斬",
        },
        {
          name: "カムイ リㇺセ",
          command: "←↓↙+斬",
          skills: [
            {
              name: "カムイ リㇺセの返し",
              command: "斬 or D",
            },
          ],
        },
        {
          name: "狼にまたがる",
          command: "↓↙←+D",
          skills: [
            {
              name: "狼から降りる",
              command: "↖︎ or ↑ or ↗︎+D",
            },
            {
              name: "狼またがり攻撃",
              command: "斬",
            },
            {
              name: "メㇽ シキテ",
              command: "←↙↓+C",
              skills: [
                {
                  name: "分離攻撃",
                  command: "↖ or ↑ or ↗ or →+C",
                },
              ],
            },
            {
              name: "カント シキテ",
              command: "↓↘→+C",
              skills: [
                {
                  name: "分離攻撃",
                  command: "レバー上下以外+C",
                },
              ],
            },
            {
              name: "イメル シキテ",
              command: "空中で→↓↘+C",
            },
          ],
        },
        {
          name: "エプンキネ シキテ",
          command: "被ダウン時AC",
        },
        {
          name: "レラ オ チキリ",
          command: "近距離で→↓↘+D",
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
          name: "レラ キシマ テㇰ",
          command: "空中近距離で↙ or ↓ or ↘+C",
        },
      ],
    },
    {
      title: "武器飛ばし技",
      titleColor: 2,
      skills: [
        {
          name: "ヌペキ カムイ シキテ",
          command: "←↙↓↘→↓↘+BC",
        },
      ],
    },
  ],
  sources: [
    {
      title: "もっと詳しいサイト",
      links: [
        {
          name: "ナコルル - キャラクターとコマンドリスト | 斬サム | 明鏡止水｡◇ﾟ in 雨峠",
          href: "https://amatoge.static.jp/meikyo/zan/command.htm#nak",
        },
        {
          name: "ナコルル - ド定番連続技ガイド | 斬サム | 明鏡止水｡◇ﾟ in 雨峠",
          href: "https://amatoge.static.jp/meikyo/zan/combo.htm#nak",
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
