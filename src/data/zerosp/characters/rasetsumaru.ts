import type { DataItem } from "../../../types"

export const zerospRasetsumaru: DataItem = {
  id: "zerosp-rasetsumaru",
  name: "羅刹丸",
  groups: [
    {
      title: "必殺技",
      skills: [
        {
          name: "旋風裂斬・刹",
          command: "↓↘→+斬",
        },
        {
          name: "旋風波",
          command: "↓↘→+C",
        },
        {
          name: "凪刃",
          command: "→↓↘+斬",
        },
        {
          name: "剛破",
          command: "→↓↘+C",
        },
        {
          name: "死祟",
          command: "↓↙←+C",
        },
      ],
    },
    {
      title: "武器飛ばし技",
      titleColor: 2,
      skills: [
        {
          name: "天覇断空烈斬",
          command: "↓↘→+CD",
        },
      ],
    },
    {
      title: "絶命奥義",
      titleColor: 2,
      skills: [
        {
          name: "臓腑抉り",
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
          name: "キャラ別攻略 羅刹丸 | 零SP | 明鏡止水｡◇ﾟ in 雨峠",
          href: "https://amatoge.static.jp/meikyo/zerosp/character/21rasetsu.htm",
        },
        {
          name: "変更点～羅刹丸～ サムライスピリッツ零SPECIAL - ぽんしゃぶ弐号",
          href: "https://www5b.biglobe.ne.jp/~hitokiri/zerosp/12_rasetumaru.htm",
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
