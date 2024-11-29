import type { DataItem } from "../../../types"

export const zerospZankuro: DataItem = {
  id: "zerosp-zankuro",
  name: "壬無月斬紅郎",
  groups: [
    {
      title: "必殺技",
      skills: [
        {
          name: "無限流 疾風斬",
          command: "↓↘→+斬",
        },
        {
          name: "無限流 無法拳",
          command: "↓↘→+C",
        },
        {
          name: "無限流 天崩斬",
          command: "→↓↘+斬",
        },
        {
          name: "無限流 不動",
          command: "↓↙←+C",
        },
      ],
    },
    {
      title: "武器飛ばし技",
      titleColor: 2,
      skills: [
        {
          name: "無限流 無限砲",
          command: "↓↘→+CD",
        },
      ],
    },
    {
      title: "絶命奥義",
      titleColor: 2,
      skills: [
        {
          name: "無限流極意 無双剣",
          command: "↓↙←+CD",
        },
      ],
    },
  ],
  sources: [
    {
      title: "もっと詳しいサイト",
      links: [
        {
          name: "キャラ別攻略 壬無月斬紅郎 | 零SP | 明鏡止水｡◇ﾟ in 雨峠",
          href: "http://amtug.html.xdomain.jp/meikyo/zerosp/character/26zankuro.htm",
        },
        {
          name: "簡易攻略～壬無月斬紅郎～ サムライスピリッツ零SPECIAL - ぽんしゃぶ弐号",
          href: "https://www5b.biglobe.ne.jp/~hitokiri/zerosp/0d_zannkurou.htm",
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
