import type { DataItem } from "../../../types"

export const firstHanzo: DataItem = {
  id: "first-hanzo",
  name: "服部半蔵",
  groups: [
    {
      title: "必殺技",
      skills: [
        {
          name: "忍法 爆炎龍",
          command: "←タメ→+斬",
        },
        {
          name: "忍法 うつせみ天舞",
          command: "→↘↓↙←+BCD",
        },
        {
          name: "忍法 うつせみ地斬",
          command: "被ダメージ中にBCD",
        },
        {
          name: "忍法 影分身",
          command: "→←↙↓↘→+A or B or C or D",
        },
        {
          name: "もず落とし",
          command: "近距離で→↓↘+蹴",
        },
      ],
    },
    {
      title: "投げ",
      skills: [
        {
          name: "空転投げ",
          command: "近距離で→ or ←+B or AB",
        },
        {
          name: "首投げ斬り",
          command: "近距離で→ or ←+D or CD",
        },
        {
          name: "首投げ",
          command: "素手時に近距離で→ or ←+D or CD",
        },
        {
          name: "空転撃",
          command: "空中近距離で↙ or ↓ or ↘+B or AB",
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
  ],
  sources: [
    {
      title: "もっと詳しいサイト",
      links: [
        {
          name: "服部半蔵 - 初代サムライスピリッツ 攻略Wiki - atwiki（アットウィキ）",
          href: "https://w.atwiki.jp/samurai1/pages/30.html",
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
