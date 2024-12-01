import type { DataItem } from "../../../../types"

export const tenJubeiRasetsu: DataItem = {
  id: "ten-jubei-rasetsu",
  name: "柳生十兵衛（羅刹）",
  groups: [
    {
      title: "必殺技",
      skills: [
        {
          name: "喝咄 水月刀",
          command: "↓↘→+斬",
        },
        {
          name: "柳生 心眼刀・水月",
          command: "↓↙←+A",
        },
        {
          name: "柳生 心眼刀・相破",
          command: "↓↙←+B",
        },
        {
          name: "柳生 心眼刀・天羅",
          command: "↓↙←+C",
        },
        {
          name: "柳生 双月陣（壱の太刀）",
          command: "↓↘→+AB",
          notes: ["与ガード時のみヒット"],
          skills: [
            {
              name: "柳生 双月陣（弍の太刀）",
              command: "↓↘→+A",
              skills: [
                {
                  name: "柳生 双月陣（参の太刀）",
                  command: "↓↘→+B",
                },
              ],
            },
          ],
        },
      ],
    },
    {
      title: "武器飛ばし技",
      titleColor: 2,
      skills: [
        {
          name: "激 双嵐陣",
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
          name: "攻略～柳生十兵衛～ サムライスピリッツ天草降臨 - ぽんしゃぶ弐号",
          href: "https://www5b.biglobe.ne.jp/~hitokiri/kouryku/13zyuubee.htm",
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
