import type { DataItem } from "../../../types"

export const zerospShizumaru: DataItem = {
  id: "zerosp-shizumaru",
  name: "緋雨閑丸",
  groups: [
    {
      title: "必殺技",
      skills: [
        {
          name: "緋刀流 霧雨刃",
          command: "↓↘→+斬",
        },
        {
          name: "緋刀流 梅雨円殺陣",
          command: "→↓↘+斬",
        },
        {
          name: "緋刀流 五月雨斬り",
          command: "↓↙←+斬",
        },
        {
          name: "緋刀流 氷雨返し",
          command: "↓↘→+C",
        },
        {
          name: "緋刀流 時雨",
          command: "空中で↓+斬",
        },
        {
          name: "緋刀流 小雨",
          command: "空中で↑+斬",
          skills: [
            {
              name: "緋刀流 雷雨",
              command: "AB",
            },
          ],
        },
        {
          name: "緋刀流 真・雨流れ狂落斬",
          command: "いずれかのボタン継続押し後離す",
        },
      ],
    },
    {
      title: "特殊",
      skills: [
        {
          name: "三角飛び",
          command: "空中画面端で↗ or → or ↘",
        },
      ],
    },
    {
      title: "武器飛ばし技",
      titleColor: 2,
      skills: [
        {
          name: "緋刀流禁じ手 暴雨狂風斬",
          command: "↓↘→+CD",
        },
      ],
    },
    {
      title: "絶命奥義",
      titleColor: 2,
      skills: [
        {
          name: "鬼の記憶 無限砲",
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
          name: "キャラ別攻略 緋雨閑丸 | 零SP | 明鏡止水｡◇ﾟ in 雨峠",
          href: "http://amtug.html.xdomain.jp/meikyo/zerosp/character/11shiz.htm",
        },
        {
          name: "変更点～緋雨閑丸～ サムライスピリッツ零SPECIAL - ぽんしゃぶ弐号",
          href: "https://www5b.biglobe.ne.jp/~hitokiri/zerosp/09_sizumaru.htm",
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
