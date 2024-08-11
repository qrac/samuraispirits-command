import type { DataItem } from "../../../types"

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
          command: "↓↘→+AB同時押し（与ガード時のみヒット）",
          skills: [
            {
              name: "柳生 双月陣（弍の太刀）",
              command: "壱の太刀中に↓↘→+A",
              skills: [
                {
                  name: "柳生 双月陣（参の太刀）",
                  command: "弍の太刀中に↓↘→+B",
                },
              ],
            },
          ],
        },
      ],
    },
    {
      title: "武器飛ばし",
      titleColor: 2,
      skills: [
        {
          name: "激 双嵐陣",
          command: "←→↘↓+AB同時押し",
        },
      ],
    },
  ],
}
