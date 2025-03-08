import type { DataItem } from "../../../types"

export const reiGenjuro: DataItem = {
  id: "rei-genjuro",
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
          tags: [{ name: "怒", color: 2 }],
        },
        {
          name: "三連殺・牙",
          command: "↓↘→+斬",
          skills: [
            {
              name: "三連殺・角",
              command: "↓↘→+斬",
              skills: [
                {
                  name: "三連殺・燐",
                  command: "↓↘→+斬",
                },
              ],
            },
          ],
        },
        {
          name: "百鬼殺",
          command: "←↓↙+斬",
        },
        {
          name: "雫刃",
          command: "近距離で→↓↘+蹴",
        },
      ],
    },
    {
      title: "武器飛ばし必殺技",
      titleColor: 2,
      skills: [
        {
          name: "五光斬",
          command: "↓↘→+MH",
        },
      ],
    },
    {
      title: "秘奥義",
      titleColor: 3,
      skills: [
        {
          name: "裏・五光斬",
          command: "→←↙↓↘→+H蹴",
        },
      ],
    },
  ],
  sources: [
    {
      title: "もっと詳しいサイト",
      links: [
        {
          name: "SAMURAI SPIRITS 牙神幻十郎 - 究極攻略最前線",
          href: "https://gamers-high.com/samurai-spirits/character/genjuro.html",
        },
        {
          name: "牙神幻十郎 - SAMURAI SPIRITS user's Wiki*",
          href: "https://wikiwiki.jp/samurai2019/%E7%89%99%E7%A5%9E%E5%B9%BB%E5%8D%81%E9%83%8E",
        },
        {
          name: "牙神幻十郎 - SAMURAI SPIRITS公式サイト | コマンドリスト",
          href: "https://www.snk-corp.co.jp/official/samuraispirits/img/command/10.pdf",
        },
      ],
    },
    /*{
      title: "もっと詳しい動画",
      links: [
        {
          name: "xxxx - YouTube",
          href: "https://youtu.be/xxxx",
        },
      ],
    },*/
  ],
}
