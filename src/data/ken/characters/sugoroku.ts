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
          command: "←↙↓↘→↓↘+BC同時押し",
        },
        {
          name: "江戸っ子の男気【剣】",
          command: "↓↘→+BC同時押し",
        },
      ],
    },
    {
      title: "武器飛ばし技・武器破壊技",
      titleColor: 2,
      skills: [
        {
          name: "神輿突進 男の花道",
          command: "↓↘→+AB同時押し",
        },
      ],
    },
  ],
}
