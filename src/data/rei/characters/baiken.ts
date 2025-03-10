import type { DataItem } from "../../../types"

export const reiBaiken: DataItem = {
  id: "rei-baiken",
  name: "梅喧",
  groups: [
    {
      title: "必殺技",
      skills: [
        {
          name: "畳返し",
          command: "↓↘→+蹴（空中も可）",
        },
        {
          name: "妖斬扇",
          command: "空中で→↓↘+斬",
          tags: [{ name: "怒", color: 2 }],
        },
        {
          name: "亞坐身（立ち）",
          command: "L蹴 or ←+L蹴",
          notes: ["上中段当て身"],
          skills: [
            {
              name: "口無",
              command: "L",
            },
            {
              name: "裂羅",
              command: "M",
            },
            {
              name: "六根削ぎ",
              command: "H",
            },
            {
              name: "回り込み",
              command: "蹴",
            },
          ],
        },
        {
          name: "亞坐身（しゃがみ）",
          command: "↓+L蹴 or ↙+L蹴",
          notes: ["下段当て身"],
          skills: [
            {
              name: "口無",
              command: "L",
            },
            {
              name: "裂羅",
              command: "M",
            },
            {
              name: "六根削ぎ",
              command: "H",
            },
            {
              name: "回り込み",
              command: "蹴",
            },
          ],
        },
        {
          name: "爵走",
          command: "→↘↓↙←+蹴",
          notes: ["移動中ガードポイント"],
          skills: [
            {
              name: "口無",
              command: "L",
            },
            {
              name: "裂羅",
              command: "M",
            },
            {
              name: "六根削ぎ",
              command: "H",
            },
            {
              name: "回り込み",
              command: "蹴",
            },
          ],
        },
        {
          name: "蚊鉤",
          command: "←↙↓↘→+M or H",
          skills: [
            {
              name: "閑割",
              command: "L",
              notes: ["投げ技"],
            },
            {
              name: "鉄斬扇",
              command: "M",
            },
            {
              name: "六根削ぎ",
              command: "H",
            },
          ],
        },
      ],
    },
    {
      title: "特殊",
      skills: [
        {
          name: "特殊技1",
          command: "→+L",
        },
        {
          name: "特殊技2",
          command: "空中でMH",
        },
        {
          name: "ガトリングコンビネーション1",
          command: "近立ちM or 踏み込みM中にH",
        },
        {
          name: "ガトリングコンビネーション1",
          command: "ジャンプM中にMH",
        },
      ],
    },
    {
      title: "武器飛ばし必殺技",
      titleColor: 2,
      skills: [
        {
          name: "連ね三途渡し",
          command: "↓↘→+MH",
        },
      ],
    },
    {
      title: "秘奥義",
      titleColor: 3,
      skills: [
        {
          name: "光芒一閃",
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
          name: "SAMURAI SPIRITS 梅喧 - 究極攻略最前線",
          href: "https://gamers-high.com/samurai-spirits/character/baiken.html",
        },
        {
          name: "梅喧 - SAMURAI SPIRITS user's Wiki*",
          href: "https://wikiwiki.jp/samurai2019/%E6%A2%85%E5%96%A7",
        },
        {
          name: "梅喧 - SAMURAI SPIRITS公式サイト | コマンドリスト",
          href: "https://www.snk-corp.co.jp/official/samuraispirits/img/command/30.pdf",
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
