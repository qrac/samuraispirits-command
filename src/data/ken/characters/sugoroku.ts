import type { DataItem } from "../../../types"

export const kenSugoroku: DataItem = {
  id: "ken-sugoroku",
  name: "祭囃子双六",
  groups: [
    {
      title: "必殺技",
      skills: [
        {
          name: "男車",
          command: "←↙↓↘→+斬連打",
        },
        {
          name: "江戸っ子の心意気",
          command: "→↓↘+斬",
        },
        {
          name: "千輪菊被せ打ち",
          command: "→↓↘+D",
        },
        {
          name: "昇銀竜斜め打ち",
          command: "←↙↓↘→+D",
        },
        {
          name: "歌留多！",
          command: "↓↙←+D",
          skills: [
            {
              name: "祭囃子花火・江戸の華",
              command: "着火後→↘↓↙←→+D",
            },
          ],
        },
      ],
    },
    {
      title: "特殊",
      skills: [
        {
          name: "特殊技",
          command: "←+D",
        },
        {
          name: "ぬいぐるみ変化【真】",
          command: "→←↙↓↘→←+E",
        },
      ],
    },
    {
      title: "秘奥義",
      titleColor: 3,
      skills: [
        {
          name: "江戸っ子の男気【真】",
          command: "←↙↓↘→↓↘+BC",
        },
        {
          name: "江戸っ子の男気【剣】",
          command: "↓↘→+BC",
        },
      ],
    },
    {
      title: "武器飛ばし技・武器破壊技",
      titleColor: 2,
      skills: [
        {
          name: "神輿突進 男の花道",
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
          name: "祭囃子双六 - サムライスピリッツ天下一剣客伝攻略 - Seesaa Wiki",
          href: "https://seesaawiki.jp/w/givingleaf/d/%ba%d7%d3%f2%bb%d2%c1%d0%cf%bb",
        },
        {
          name: "祭囃子双六 - キャラクターとコマンドリスト | 剣サム | 明鏡止水｡◇ﾟ in 雨峠",
          href: "https://amatoge.static.jp/meikyo/kenkaku/waza.htm#ken-sugoroku",
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
