import type { DataItem } from "../../../types"

export const kenGaoh: DataItem = {
  id: "ken-gaoh",
  name: "兇國日輪守我旺",
  groups: [
    {
      title: "必殺技",
      skills: [
        {
          name: "忌神楽 火途",
          command: "↓↘→+A",
          skills: [
            {
              name: "忌神楽 血途",
              command: "↓↘→+B",
              skills: [
                {
                  name: "忌神楽 刀途",
                  command: "↓↘→+C",
                },
              ],
            },
          ],
        },
        {
          name: "忌神楽 無間",
          command: "↓↘→+B",
        },
        {
          name: "忌神楽 成道",
          command: "↓↘→+C",
        },
        {
          name: "兜独楽",
          command: "→↓↘+斬",
        },
        {
          name: "朧囃子",
          command: "→↘↓↙←+斬",
        },
        {
          name: "燻雅",
          command: "↓↙←+D",
        },
        {
          name: "鉄砕",
          command: "近距離で→↓↘+D",
        },
      ],
    },
    {
      title: "特殊",
      skills: [
        {
          name: "特殊技",
          command: "→+B",
        },
        {
          name: "ぬいぐるみ変化【真】",
          command: "←↙↓↙←→+E",
        },
      ],
    },
    {
      title: "秘奥義",
      titleColor: 3,
      skills: [
        {
          name: "金剛砕【真】",
          command: "→↘↓↙←→↘↓↙←+BC",
        },
        {
          name: "金剛砕【剣】",
          command: "↓↘→+BC",
        },
      ],
    },
    {
      title: "武器飛ばし技・武器破壊技",
      titleColor: 2,
      skills: [
        {
          name: "奈落吼",
          command: "↓↘→+AB",
        },
      ],
    },
  ],
  sources: [
    {
      title: "もっと詳しいサイト",
      links: [
        {
          name: "兇國日輪守我旺 - キャラクターとコマンドリスト | 剣サム | 明鏡止水｡◇ﾟ in 雨峠",
          href: "http://amtug.html.xdomain.jp/meikyo/kenkaku/waza.htm#zero",
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
