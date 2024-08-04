export default {
  id: "zan-nakoruru-shura",
  name: "ナコルル（修羅）",
  groups: [
    {
      list: [
        {
          name: "アンヌ ムツベ",
          command: "←↙↓+斬",
        },
        {
          name: "レラ ムツベ",
          command: "↓↘→+斬",
        },
        {
          name: "カムイ リㇺセ",
          command: "←↓↙+斬",
          list: [
            {
              name: "カムイ リㇺセの返し",
              command: "斬 or D",
            },
          ],
        },
        {
          name: "鷹につかまる",
          command: "↓↙←+D",
          list: [
            {
              name: "鷹から降りる",
              command: "↙ or ↓ or ↘+D",
            },
            {
              name: "鷹つかまり攻撃",
              command: "斬",
            },
            {
              name: "カムイ ムツベ",
              command: "↓↘→+C",
            },
          ],
        },
        {
          name: "レラ シゥ",
          command: "→↘↓↙←+A",
        },
        {
          name: "シチカㇷ゚ エトゥ",
          command: "→↘↓↙←+B",
        },
        {
          name: "シチカㇷ゚ アㇺ",
          command: "→↘↓↙←+C",
        },
        {
          name: "レラ オ チキリ",
          command: "近距離で→↓↘+D",
        },
      ],
    },
    {
      title: "武器飛ばし",
      titleColor: 2,
      list: [
        {
          name: "エレルㇱ カムイ リㇺセ",
          command: "→↘↓↙←→↘↓↙←+AB同時押し",
        },
      ],
    },
  ],
}
