import type { DataItem } from "../../../types"

export const reiWarden: DataItem = {
  id: "rei-warden",
  name: "ウォーデン",
  groups: [
    {
      title: "必殺技",
      skills: [
        {
          name: "パリィ",
          command: "↓↙←+斬",
          notes: ["武器攻撃・必殺技当て身 / 飛び道具反射"],
        },
        {
          name: "ショルダーバッシュ",
          command: "↓↘→+斬",
          notes: [
            "ボタン継続押しでタメ可能（2段階強化） / 最大タメでガードポイント＋G不能",
          ],
          tags: [{ name: "怒", color: 2 }],
        },
      ],
    },
    {
      title: "特殊",
      skills: [
        {
          name: "クラッシングカウンターストライク",
          command: "近距離M",
          skills: [
            {
              name: "ヴァンガードの行軍",
              command: "M",
              skills: [
                {
                  name: "ヴァンガードの行軍（2）",
                  command: "M",
                },
                {
                  name: "ヴァンガードの行軍（キャンセル）",
                  command: "蹴",
                },
              ],
            },
          ],
        },
        {
          name: "ヴァンガードの行軍",
          command: "踏み込みM中にM",
          skills: [
            {
              name: "ヴァンガードの行軍（2）",
              command: "M",
            },
            {
              name: "ヴァンガードの行軍（キャンセル）",
              command: "蹴",
            },
          ],
        },
        {
          name: "守護者の襲撃",
          command: "遠距離M中にM",
        },
        {
          name: "守護者の襲撃（キャンセル）",
          command: "遠距離M中に蹴",
        },
        {
          name: "ウォーデンの怒り",
          command: "近距離H中にH",
        },
        {
          name: "ウォーデンの怒り（キャンセル）",
          command: "近距離H中に蹴",
        },
      ],
    },
    {
      title: "武器飛ばし必殺技",
      titleColor: 2,
      skills: [
        {
          name: "ブラックストーンバッシュ",
          command: "↓↘→+MH",
        },
      ],
    },
    {
      title: "秘奥義",
      titleColor: 3,
      skills: [
        {
          name: "投石機",
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
          name: "SAMURAI SPIRITS ウォーデン - 究極攻略最前線",
          href: "https://gamers-high.com/samurai-spirits/character/warden.html",
        },
        {
          name: "ウォーデン - SAMURAI SPIRITS user's Wiki*",
          href: "https://wikiwiki.jp/samurai2019/%E3%82%A6%E3%82%A9%E3%83%BC%E3%83%87%E3%83%B3",
        },
        {
          name: "ウォーデン - SAMURAI SPIRITS公式サイト | コマンドリスト",
          href: "https://www.snk-corp.co.jp/official/samuraispirits/img/command/25.pdf",
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
