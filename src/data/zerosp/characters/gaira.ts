import type { DataItem } from "../../../types"

export const zerospGaira: DataItem = {
  id: "zerosp-gaira",
  name: "花諷院骸羅",
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
          command: "↓↓+A or B or C",
        },
        {
          name: "つかむぞ～組み天井",
          command: "←↓↙+A",
        },
        {
          name: "つかむぞ～石頭",
          command: "←↓↙+B",
        },
        {
          name: "つかむぞ～尻めくり",
          command: "←↓↙+C",
        },
        {
          name: "百貫落とし",
          command: "空中で↓+AB",
        },
        {
          name: "円心殺",
          command: "近距離で←↖↑↗→+AB",
          notes: ["発動後レバー回転でダメージ増加"],
        },
      ],
    },
    {
      title: "武器飛ばし技",
      titleColor: 2,
      skills: [
        {
          name: "仁王爆震殺",
          command: "↓↘→+CD",
        },
      ],
    },
    {
      title: "絶命奥義",
      titleColor: 2,
      skills: [
        {
          name: "カチ割るぞこらぁ！",
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
          name: "キャラ別攻略 花諷院骸羅 | 零SP | 明鏡止水｡◇ﾟ in 雨峠",
          href: "http://amtug.html.xdomain.jp/meikyo/zerosp/character/14gaira.htm",
        },
        {
          name: "変更点～花諷院骸羅～ サムライスピリッツ零SPECIAL - ぽんしゃぶ弐号",
          href: "https://www5b.biglobe.ne.jp/~hitokiri/zerosp/0a_gaira.htm",
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
