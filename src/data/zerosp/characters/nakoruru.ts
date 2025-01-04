import type { DataItem } from "../../../types"

export const zerospNakoruru: DataItem = {
  id: "zerosp-nakoruru",
  name: "ナコルル",
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
              name: "追加攻撃",
              command: "斬連打",
            },
          ],
        },
        {
          name: "アムベヤトロ",
          command: "↓↙←+斬",
        },
        {
          name: "鷹につかまる",
          command: "↓↙←+C",
          skills: [
            {
              name: "鷹から降りる",
              command: "↙ or ↓ or ↘+D",
            },
            {
              name: "鷹つかまり攻撃",
              command: "斬",
            },
            {
              name: "ヤトロポック",
              command: "↓↘→+斬",
            },
            {
              name: "カムイ ムツベ",
              command: "BC",
            },
          ],
        },
        {
          name: "アペフチ カムイ リㇺセ",
          command: "素手時↘↓↙←→↓↘+BC",
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
          name: "カムイ フㇺ ケスㇷ゚",
          command: "空中で↓+C",
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
          name: "エレルㇱ カムイ リㇺセ",
          command: "↓↘→+CD",
        },
      ],
    },
    {
      title: "絶命奥義",
      titleColor: 2,
      skills: [
        {
          name: "トゥルセ サンベ キク ムツベ",
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
          name: "キャラ別攻略 ナコルル | 零SP | 明鏡止水｡◇ﾟ in 雨峠",
          href: "https://amatoge.static.jp/meikyo/zerosp/character/02nako.htm",
        },
        {
          name: "変更点～ナコルル～ サムライスピリッツ零SPECIAL - ぽんしゃぶ弐号",
          href: "https://www5b.biglobe.ne.jp/~hitokiri/zerosp/01_nakoruru.htm",
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
