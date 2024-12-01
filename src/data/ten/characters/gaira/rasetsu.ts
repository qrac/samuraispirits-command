import type { DataItem } from "../../../../types"

export const tenGairaRasetsu: DataItem = {
  id: "ten-gaira-rasetsu",
  name: "花諷院骸羅（羅刹）",
  groups: [
    {
      title: "必殺技",
      skills: [
        {
          name: "喝！",
          command: "↓↘→+斬",
        },
        {
          name: "地震丸",
          command: "↓↓+AB",
        },
        {
          name: "円心殺",
          command: "↓↙←→+斬",
          notes: ["発動後レバー回転でダメージ増加"],
        },
        {
          name: "百貫落とし",
          command: "空中で↓+D",
        },
      ],
    },
    {
      title: "武器飛ばし技",
      titleColor: 2,
      skills: [
        {
          name: "仁王爆震殺",
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
          name: "攻略～花諷院骸羅～ サムライスピリッツ天草降臨 - ぽんしゃぶ弐号",
          href: "https://www5b.biglobe.ne.jp/~hitokiri/kouryku/11gaira.htm",
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
