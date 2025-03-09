import type { DataItem } from "../../../types"

export const reiHibiki: DataItem = {
  id: "rei-hibiki",
  name: "高嶺響",
  groups: [
    {
      title: "必殺技",
      skills: [
        {
          name: "遠間にて斬る也",
          command: "↓↘→+斬",
          tags: [{ name: "怒", color: 2 }],
        },
        {
          name: "近寄りて斬る也",
          command: "→↓↘+斬",
          notes: ["ボタン継続押しで走り続ける"],
          skills: [
            {
              name: "近寄りて斬る也（停止）",
              command: "継続押し中に←← or 蹴",
            },
            {
              name: "遠間にて斬る也",
              command: "裏回り時に↓↘→+斬",
              tags: [{ name: "怒", color: 2 }],
            },
            {
              name: "発勝する神気也",
              command: "怒最大・裏回り時に↓↘→+MH",
              notes: ["M or H版のボタン継続押しによる裏回り時限定"],
            },
          ],
        },
        {
          name: "水月を突く也",
          command: "→↓↘+蹴",
          notes: ["ボタン継続押しでタメ可能 / タメ版はキャンセル可能"],
        },
        {
          name: "居を合わす也",
          command: "↓↙←+斬",
          notes: ["上中段当て身"],
          skills: [
            {
              name: "抜かば斬る也",
              command: "斬",
              skills: [
                {
                  name: "発勝する神気也",
                  command: "怒最大時に↓↘→+MH",
                },
              ],
            },
            {
              name: "抜かずば斬らぬ也",
              command: "蹴",
              skills: [
                {
                  name: "遠間にて斬る也",
                  command: "↓↘→+斬",
                  tags: [{ name: "怒", color: 2 }],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      title: "武器飛ばし必殺技",
      titleColor: 2,
      skills: [
        {
          name: "発勝する神気也",
          command: "↓↘→+MH",
        },
      ],
    },
    {
      title: "秘奥義",
      titleColor: 3,
      skills: [
        {
          name: "死を恐れぬ心也",
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
          name: "SAMURAI SPIRITS 高嶺響 - 究極攻略最前線",
          href: "https://gamers-high.com/samurai-spirits/character/hibiki.html",
        },
        {
          name: "高嶺響 - SAMURAI SPIRITS user's Wiki*",
          href: "https://wikiwiki.jp/samurai2019/%E9%AB%98%E5%B6%BA%E9%9F%BF",
        },
        {
          name: "高嶺響 - SAMURAI SPIRITS公式サイト | コマンドリスト",
          href: "https://www.snk-corp.co.jp/official/samuraispirits/img/command/28.pdf",
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
