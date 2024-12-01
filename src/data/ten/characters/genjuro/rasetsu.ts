import type { DataItem } from "../../../../types"

export const tenGenjuroRasetsu: DataItem = {
  id: "ten-genjuro-rasetsu",
  name: "牙神幻十郎（羅刹）",
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
          name: "三空殺",
          command: "↓↘→+斬",
          notes: ["3回まで連続入力可能"],
        },
        {
          name: "紫暮",
          command: "←↓↙+斬",
        },
        {
          name: "百鬼殺",
          command: "↓↙←→+斬",
        },
      ],
    },
    {
      title: "武器飛ばし技",
      titleColor: 2,
      skills: [
        {
          name: "裏五光",
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
          name: "攻略～牙神幻十郎～ サムライスピリッツ天草降臨 - ぽんしゃぶ弐号",
          href: "https://www5b.biglobe.ne.jp/~hitokiri/kouryku/08gennzyurou.htm",
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
