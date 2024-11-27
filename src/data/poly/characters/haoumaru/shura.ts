import type { DataItem } from "../../../../types"

export const polyHaoumaruShura: DataItem = {
  id: "poly-haoumaru-shura",
  name: "覇王丸（修羅）",
  groups: [
    {
      title: "通常技",
      titleNote: "入力 / 属性 / キャンセル",
      layout: "note",
      accordion: "normal",
      skills: [
        {
          name: "",
          command: "A",
          notes: ["上段", "×"],
        },
        {
          name: "",
          command: "B",
          notes: ["上段", "○"],
        },
        {
          name: "",
          command: "AB",
          notes: ["上段", "×"],
        },
        {
          name: "",
          command: "←+A",
          notes: ["上段", "×"],
        },
        {
          name: "",
          command: "→+B",
          notes: ["上段", "○"],
        },
        {
          name: "",
          command: "↘+A",
          notes: ["中段", "×"],
        },
        {
          name: "",
          command: "↘+B",
          notes: ["中段", "×"],
        },
        {
          name: "",
          command: "↙+B",
          notes: ["中段", "×"],
        },
        {
          name: "",
          command: "↘↘+B",
          notes: ["中段", "×"],
        },
        {
          name: "",
          command: "↓N+A",
          notes: ["下段", "×"],
        },
        {
          name: "",
          command: "屈A",
          notes: ["下段", "×"],
        },
        {
          name: "",
          command: "屈B",
          notes: ["下段", "×"],
        },
        {
          name: "",
          command: "屈AB",
          notes: ["上段", "○"],
        },
        {
          name: "",
          command: "屈BC",
          notes: ["下段", "×"],
        },
        {
          name: "",
          command: "空中でA",
          notes: ["中段", "×"],
        },
        {
          name: "",
          command: "空中でB",
          notes: ["中段", "×"],
        },
        {
          name: "",
          command: "空中で↓+A",
          notes: ["中段", "×"],
        },
        {
          name: "",
          command: "起き上がり時A",
          notes: ["中段", "×"],
        },
        {
          name: "",
          command: "起き上がり時B",
          notes: ["下段", "×"],
        },
      ],
    },
    {
      title: "コンビネーション技",
      titleNote: "入力 / 属性 / キャンセル",
      accordion: "combination",
      skills: [
        {
          name: "疾風連斬",
          command: "A・A",
          notes: ["上・上", "×・×"],
        },
        {
          name: "疾風斬蹴",
          command: "A・A・B",
          notes: ["上・上・中", "×・×・×"],
        },
        {
          name: "松風剛斬",
          command: "A・B",
          notes: ["上・上", "×・×"],
        },
        {
          name: "轟砕天地",
          command: "屈AB・→+B",
          notes: ["上・上", "○・×"],
        },
        {
          name: "双豪",
          command: "↘↘+B・B",
          notes: ["中・上", "×・×"],
        },
      ],
    },
    {
      title: "S・C・S",
      accordion: "scs",
      skills: [
        {
          name: "",
          command: "CD",
          skills: [
            {
              name: "",
              command: "A・A・A・A or B・B・B・B",
              skills: [
                {
                  name: "駆け引きポイント",
                  command: "A or B",
                  notes: ["中段 or 下段"],
                  skills: [
                    {
                      name: "",
                      command: "A・A・A or B・B・B",
                      skills: [
                        {
                          name: "駆け引きポイント",
                          command: "A or B",
                          notes: ["中段 or 下段"],
                          skills: [
                            {
                              name: "",
                              command: "A・A or B・B",
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
              ],
            },
            {
              name: "",
              command: "AB",
              skills: [
                {
                  name: "駆け引きポイント",
                  command: "A or B or AB",
                  notes: ["中段 or 下段 or 中段"],
                  skills: [
                    {
                      name: "",
                      command: "A・A・A or B・B・B",
                      skills: [
                        {
                          name: "駆け引きポイント",
                          command: "A or B",
                          notes: ["中段 or 下段"],
                          skills: [
                            {
                              name: "",
                              command: "A・A or B・B",
                            },
                          ],
                        },
                      ],
                    },
                    {
                      name: "",
                      command: "AB・AB",
                    },
                  ],
                },
              ],
            },
            {
              name: "",
              command: "AD・AD・AD・AD・AD",
            },
          ],
        },
      ],
    },
    {
      title: "必殺技",
      skills: [
        {
          name: "旋風裂斬",
          command: "↓↘→+B",
        },
        {
          name: "辻風",
          command: "↓↘→+AB",
        },
        {
          name: "弧月斬",
          command: "→↓↘+B",
        },
        {
          name: "烈震斬",
          command: "←↓↙+A or B",
        },
        {
          name: "打ち落とし",
          command: "←+BC",
        },
      ],
    },
    {
      title: "秘奥義",
      titleColor: 2,
      skills: [
        {
          name: "天覇封神斬",
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
          name: "覇王丸 - 侍魂～SAMURAI SPIRITS～ 攻略wiki - atwiki",
          href: "https://w.atwiki.jp/samuraispirits64/pages/19.html",
        },
      ],
    },
    {
      title: "もっと詳しい動画",
      links: [
        {
          name: "SAMURAI SPIRITS 〜侍魂〜（ポリサム）覇王丸（修羅/羅刹）全技一覧 - YouTube",
          href: "https://youtu.be/3WvifkkPXHw",
        },
      ],
    },
  ],
}
