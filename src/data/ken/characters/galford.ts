import type { DataItem } from "../../../types"

export const kenGalford: DataItem = {
  id: "ken-galford",
  name: "ガルフォード",
  groups: [
    {
      title: "必殺技",
      skills: [
        {
          name: "プラズマブレード",
          command: "↓↘→+斬",
        },
        {
          name: "プラズマブレイク",
          command: "→↘↓↙←→+AC",
        },
        {
          name: "ラッシュドッグ",
          command: "↓↙←+A",
          skills: [
            {
              name: "フェイクドッグ ラッシュ",
              command: "↓↙←+A",
            },
            {
              name: "フェイクドッグ レプリカ",
              command: "↓↙←+B",
            },
            {
              name: "フェイクドッグ ストライク",
              command: "↓↙←+C",
            },
          ],
        },
        {
          name: "マシンガンドッグ",
          command: "↓↙←+B",
          skills: [
            {
              name: "フェイクドッグ ラッシュ",
              command: "↓↙←+A",
            },
            {
              name: "フェイクドッグ レプリカ",
              command: "↓↙←+B",
            },
            {
              name: "フェイクドッグ ストライク",
              command: "↓↙←+C",
            },
          ],
        },
        {
          name: "レプリカドッグ",
          command: "↓↙←+C",
        },
        {
          name: "オーバーヘッドクラッシュ",
          command: "↓↙←+D",
        },
        {
          name: "レプリカアタック（ヘッド）",
          command: "→↘↓↙←+AD",
        },
        {
          name: "レプリカアタック（リア）",
          command: "→↘↓↙←+CE",
        },
        {
          name: "イミテイトレプリカ（ヘッド）",
          command: "被ダメージ中→←→←→←↓+AD",
        },
        {
          name: "イミテイトレプリカ（リア）",
          command: "被ダメージ中→←→←→←↓+CE",
        },
        {
          name: "ストライクヘッズ",
          command: "近距離で→↓↘+斬",
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
          name: "スターダストドロップ",
          command: "空中近距離で← or →+D",
        },
        {
          name: "特殊技",
          command: "↓↙←+E",
        },
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
          name: "メガストライクドッグ【真】",
          command: "→↘↓↙←→+BC",
        },
        {
          name: "メガストライクドッグ【剣】",
          command: "↓↘→+BC",
        },
      ],
    },
    {
      title: "武器飛ばし技・武器破壊技",
      titleColor: 2,
      skills: [
        {
          name: "ダブルメガストライクヘッズ（ヘッド）",
          command: "↓↘→+AB",
        },
        {
          name: "ダブルメガストライクヘッズ（リア）",
          command: "↓↘→+AD",
        },
      ],
    },
  ],
  sources: [
    {
      title: "もっと詳しいサイト",
      links: [
        {
          name: "ガルフォード - サムライスピリッツ天下一剣客伝攻略 - Seesaa Wiki",
          href: "https://seesaawiki.jp/w/givingleaf/d/%a5%ac%a5%eb%a5%d5%a5%a9%a1%bc%a5%c9",
        },
        {
          name: "ガルフォード - キャラクターとコマンドリスト | 剣サム | 明鏡止水｡◇ﾟ in 雨峠",
          href: "https://amatoge.static.jp/meikyo/kenkaku/waza.htm#syo-galford",
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
