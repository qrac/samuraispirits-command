import type { DataItem } from "../../../types"

export const kenGenjuro: DataItem = {
  id: "ken-genjuro",
  name: "牙神幻十郎",
  groups: [
    {
      title: "必殺技",
      skills: [
        {
          name: "裏桜華・菖蒲",
          command: "↓↙←+斬",
          notes: ["与ガード時ボタン継続押しで跳ね返り"],
        },
        {
          name: "桐覇 光翼刃",
          command: "→↓↘+斬",
        },
        {
          name: "三連殺",
          command: "↓↘→+斬",
          notes: ["3回まで連続入力可能"],
        },
        {
          name: "百鬼殺",
          command: "→←→+斬",
        },
        {
          name: "酒振舞",
          command: "←↓↙+斬",
        },
      ],
    },
    {
      title: "特殊",
      skills: [
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
          name: "桐覇 光翼刃・鬼面割り【真】",
          command: "→↘↓↙←→+BC",
        },
        {
          name: "桐覇 光翼刃・鬼面割り【剣】",
          command: "↓↘→+BC",
        },
      ],
    },
    {
      title: "武器飛ばし技・武器破壊技",
      titleColor: 2,
      skills: [
        {
          name: "五光斬",
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
          name: "牙神幻十郎 - サムライスピリッツ天下一剣客伝攻略 - Seesaa Wiki",
          href: "https://seesaawiki.jp/w/givingleaf/d/%b2%e7%bf%c0%b8%b8%bd%bd%cf%ba",
        },
        {
          name: "牙神幻十郎 - キャラクターとコマンドリスト | 剣サム | 明鏡止水｡◇ﾟ in 雨峠",
          href: "http://amtug.html.xdomain.jp/meikyo/kenkaku/waza.htm#sin-genjuro",
        },
        {
          name: "牙神幻十郎攻略 - サムライスピリッツ天下一剣客伝 攻略サイト",
          href: "https://kensamu.web.fc2.com/genzyuro/genzyuro.html",
        },
      ],
    },
    {
      title: "もっと詳しい動画",
      links: [
        {
          name: "サムライスピリッツ天下一剣客伝 連続技動画 ～牙神幻十郎～ - YouTube",
          href: "https://youtu.be/Q-NNbZ_l1ik",
        },
      ],
    },
  ],
}
