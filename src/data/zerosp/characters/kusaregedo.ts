import type { DataItem } from "../../../types"

export const zerospKusaregedo: DataItem = {
  id: "zerosp-kusaregedo",
  name: "妖怪腐れ外道",
  groups: [
    {
      title: "必殺技",
      skills: [
        {
          name: "悪霊呼び",
          command: "↓↘→+斬",
        },
        {
          name: "胃液吐き",
          command: "↓↙←+斬",
        },
        {
          name: "肉持ち上げ",
          command: "←↓↙+C",
        },
        {
          name: "外道の烙印押し",
          command: "近距離で→←↓↑+C",
        },
        {
          name: "泥投げ",
          command: "↘←↙↓↘→←↓↙+BC",
        },
      ],
    },
    {
      title: "武器飛ばし技",
      titleColor: 2,
      skills: [
        {
          name: "飛び頭突き",
          command: "↓↘→+CD",
        },
        {
          name: "外道の獲物狩り",
          command: "近距離で→↗↑↖←↙↓↑+CD",
        },
      ],
    },
    {
      title: "絶命奥義",
      titleColor: 2,
      skills: [
        {
          name: "外道の晩餐",
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
          name: "キャラ別攻略 妖怪腐れ外道 | 零SP | 明鏡止水｡◇ﾟ in 雨峠",
          href: "https://amatoge.static.jp/meikyo/zerosp/character/20kusaregedo.htm",
        },
        {
          name: "変更点～妖怪腐れ外道～ サムライスピリッツ零SPECIAL - ぽんしゃぶ弐号",
          href: "https://www5b.biglobe.ne.jp/~hitokiri/zerosp/19_gedo.htm",
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
