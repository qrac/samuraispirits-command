import type { DataItem } from "../../../types"

export const kenHaoumaru: DataItem = {
  id: "ken-haoumaru",
  name: "覇王丸",
  groups: [
    {
      title: "必殺技",
      skills: [
        {
          name: "奥義 旋風裂斬",
          command: "↓↘→+斬",
        },
        {
          name: "奥偽 旋風裂斬",
          command: "↓↘→+D",
        },
        {
          name: "奥義 弧月斬",
          command: "→↓↘+斬",
        },
        {
          name: "奥義 疾風弧月斬",
          command: "踏み込み中に→↓↘+斬",
        },
        {
          name: "奥義 烈震斬",
          command: "←↓↙+斬",
        },
        {
          name: "斬鋼閃",
          command: "→↘↓↙←→+AB",
        },
        {
          name: "酒攻撃",
          command: "↓↙←+D",
        },
      ],
    },
    {
      title: "特殊",
      skills: [
        {
          name: "特殊技",
          command: "↘+B",
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
          name: "天覇封神斬【真】",
          command: "↘←↙↓↘→←↓↙+BC",
        },
        {
          name: "天覇封神斬【剣】",
          command: "↓↘→+BC",
        },
      ],
    },
    {
      title: "武器飛ばし技・武器破壊技",
      titleColor: 2,
      skills: [
        {
          name: "天覇凄煌斬",
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
          name: "覇王丸 - サムライスピリッツ天下一剣客伝攻略 - Seesaa Wiki",
          href: "https://seesaawiki.jp/w/givingleaf/d/%c7%c6%b2%a6%b4%dd",
        },
        {
          name: "覇王丸 - キャラクターとコマンドリスト | 剣サム | 明鏡止水｡◇ﾟ in 雨峠",
          href: "http://amtug.html.xdomain.jp/meikyo/kenkaku/waza.htm#syo-haoumaru",
        },
        {
          name: "覇王丸攻略 - サムライスピリッツ天下一剣客伝 攻略サイト",
          href: "https://kensamu.web.fc2.com/haomaru/haomaru.html",
        },
      ],
    },
    {
      title: "もっと詳しい動画",
      links: [
        {
          name: "サムライスピリッツ天下一剣客伝 連続技動画 ～覇王丸～ - YouTube",
          href: "https://youtu.be/XVc1o69V-o0",
        },
      ],
    },
  ],
}
