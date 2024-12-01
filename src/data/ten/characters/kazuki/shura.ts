import type { DataItem } from "../../../../types"

export const tenKazukiShura: DataItem = {
  id: "ten-kazuki-shura",
  name: "風間火月（修羅）",
  groups: [
    {
      title: "必殺技",
      skills: [
        {
          name: "災炎",
          command: "↓↙←+斬 or D",
          notes: ["3つまでストック可能"],
        },
        {
          name: "焦熱魂",
          command: "↓↘→+斬 or D",
        },
        {
          name: "大爆殺",
          command: "→↓↘+斬 or D",
        },
        {
          name: "炎滅",
          command: "←↓↙+斬 or D",
        },
        {
          name: "炎返し",
          command: "炎ストック時 被吹っ飛び中にAC",
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
      title: "連斬",
      skills: [
        {
          name: "火月専用①",
          command: "CD後にC・C",
        },
        {
          name: "火月専用②",
          command: "CD後にC・B・B・B",
        },
      ],
    },
    {
      title: "武器飛ばし技",
      titleColor: 2,
      skills: [
        {
          name: "暴爆、火炎撃",
          command: "←→↘↓+AB",
        },
      ],
    },
  ],
  sources: [
    {
      title: "もっと詳しいサイト",
      links: [
        {
          name: "攻略～風間火月～ サムライスピリッツ天草降臨 - ぽんしゃぶ弐号",
          href: "https://www5b.biglobe.ne.jp/~hitokiri/kouryku/16kazuki.htm",
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
