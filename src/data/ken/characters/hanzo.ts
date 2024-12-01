import type { DataItem } from "../../../types"

export const kenHanzo: DataItem = {
  id: "ken-hanzo",
  name: "服部半蔵",
  groups: [
    {
      title: "必殺技",
      skills: [
        {
          name: "忍法 爆炎龍",
          command: "↓↙←+斬",
        },
        {
          name: "烈風手裏剣",
          command: "空中で↓↘→+斬",
        },
        {
          name: "忍法 うつせみ天舞",
          command: "→↘↓↙←+AD",
        },
        {
          name: "忍法 うつせみ地斬",
          command: "→↘↓↙←+CE",
        },
        {
          name: "忍法 身代わりの術・仏",
          command: "被ダメージ中→←→←→←↓+AD",
        },
        {
          name: "忍法 身代わりの術・鬼",
          command: "被ダメージ中→←→←→←↓+CE",
        },
        {
          name: "モズ落とし",
          command: "近距離で→↓↘+斬",
        },
        {
          name: "モズ落とし -颯-",
          command: "踏み込み中近距離で→↓↘+斬",
        },
        {
          name: "忍法 静音",
          command: "↓↓+斬",
        },
        {
          name: "忍法 猿舞",
          command: "←↓↙+A or B or C or D",
        },
        {
          name: "忍法 車菱",
          command: "↓↓↓+AE",
        },
        {
          name: "忍法 影臥",
          command: "→←→←→←↓+BCD",
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
          name: "空転撃",
          command: "空中近距離で← or →+D",
        },
        {
          name: "ぬいぐるみ変化【真】",
          command: "→←→←→←↓+E",
        },
      ],
    },
    {
      title: "秘奥義",
      titleColor: 3,
      skills: [
        {
          name: "真モズ落とし【真】",
          command: "近距離で↙→↘↓↙←↘+BC",
        },
        {
          name: "真モズ落とし【剣】",
          command: "近距離で↓↘→+BC",
        },
      ],
    },
    {
      title: "武器飛ばし技・武器破壊技",
      titleColor: 2,
      skills: [
        {
          name: "忍法 天魔覆滅",
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
          name: "服部半蔵 - サムライスピリッツ天下一剣客伝攻略 - Seesaa Wiki",
          href: "https://seesaawiki.jp/w/givingleaf/d/%c9%fe%c9%f4%c8%be%c2%a2",
        },
        {
          name: "服部半蔵 - キャラクターとコマンドリスト | 剣サム | 明鏡止水｡◇ﾟ in 雨峠",
          href: "http://amtug.html.xdomain.jp/meikyo/kenkaku/waza.htm#syo",
        },
        {
          name: "服部半蔵攻略 - サムライスピリッツ天下一剣客伝 攻略サイト",
          href: "https://kensamu.web.fc2.com/hanzo/hanzo.html",
        },
      ],
    },
    {
      title: "もっと詳しい動画",
      links: [
        {
          name: "サムライスピリッツ天下一剣客伝 連続技動画 ～服部半蔵～ - YouTube",
          href: "https://youtu.be/qHzCsiBdCOs",
        },
      ],
    },
  ],
}
