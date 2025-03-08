import type { DataItem } from "../../../types"

export const reiKyoshiro: DataItem = {
  id: "rei-kyoshiro",
  name: "千両狂死郎",
  groups: [
    {
      title: "必殺技",
      skills: [
        {
          name: "大津波",
          command: "↓↘→+斬",
        },
        {
          name: "回天曲舞",
          command: "→↓↘+斬",
        },
        {
          name: "火炎曲舞",
          command: "←↓↙+斬",
        },
        {
          name: "跳尾獅子",
          command: "↓↙←+L or M",
        },
        {
          name: "跳尾獅子・乱心",
          command: "↓↙←+H",
          tags: [{ name: "怒", color: 2 }],
        },
        {
          name: "蝦蟇地獄",
          command: "↓↙←+蹴",
        },
        {
          name: "血煙曲輪",
          command: "空中で↓+斬",
        },
      ],
    },
    {
      title: "特殊",
      skills: [
        {
          name: "屈み歩き",
          command: "↙ or ↘",
        },
      ],
    },
    {
      title: "武器飛ばし必殺技",
      titleColor: 2,
      skills: [
        {
          name: "荒事師狂死郎“血肉の舞”",
          command: "↓↘→+MH",
        },
      ],
    },
    {
      title: "秘奥義",
      titleColor: 3,
      skills: [
        {
          name: "歌舞伎十八番“回り舞台”",
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
          name: "SAMURAI SPIRITS 千両狂死郎 - 究極攻略最前線",
          href: "https://gamers-high.com/samurai-spirits/character/kyoshiro.html",
        },
        {
          name: "千両狂死郎 - SAMURAI SPIRITS user's Wiki*",
          href: "https://wikiwiki.jp/samurai2019/%E5%8D%83%E4%B8%A1%E7%8B%82%E6%AD%BB%E9%83%8E",
        },
        {
          name: "千両狂死郎 - SAMURAI SPIRITS公式サイト | コマンドリスト",
          href: "https://www.snk-corp.co.jp/official/samuraispirits/img/command/06.pdf",
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
