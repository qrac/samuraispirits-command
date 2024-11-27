import type { DataItem } from "../../../../types"

export const polyHanmaRasetsu: DataItem = {
  id: "poly-hanma-rasetsu",
  name: "柳生磐馬（羅刹）",
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
          notes: ["上段", "○"],
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
          notes: ["中段", "×"],
        },
        {
          name: "",
          command: "←+B",
          notes: ["中段", "×"],
        },
        {
          name: "",
          command: "←→+B",
          notes: ["上段", "×"],
        },
        {
          name: "",
          command: "→+AB",
          notes: ["中段", "×"],
        },
        {
          name: "",
          command: "←+AB",
          notes: ["上段", "×"],
        },
        {
          name: "",
          command: "←→+AB",
          notes: ["上段", "×"],
        },
        {
          name: "",
          command: "↘+A",
          notes: ["中段", "○"],
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
          command: "↘+AB",
          notes: ["上段G不能", "×"],
        },
        {
          name: "",
          command: "↓↓↓+AB",
          notes: ["G不能", "×"],
        },
        {
          name: "",
          command: "↓N+A",
          notes: ["下段", "○"],
        },
        {
          name: "",
          command: "↓N+B",
          notes: ["上段", "×"],
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
          notes: ["上段", "×"],
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
          command: "空中でAB",
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
          name: "左連拳",
          command: "A・A",
          notes: ["上・上", "○・○"],
        },
        {
          name: "連続突き",
          command: "A・A・B",
          notes: ["上・上・上", "○・○・○"],
        },
        {
          name: "左連拳弐之型",
          command: "A・A・→+B",
          notes: ["上・上・上", "○・○・×"],
        },
        {
          name: "左連拳参之型",
          command: "A・A・←+B",
          notes: ["上・上・中", "○・○・×"],
        },
        {
          name: "猪突猛進拳",
          command: "A・A・→+B or ←+B・A",
          notes: ["上・上・上 or 中・上", "○・○・×・×"],
        },
        {
          name: "雪崩式圧破",
          command: "A・A・→+B・A・B",
          notes: ["上・上・上・上・上", "○・○・×・×・×"],
        },
        {
          name: "雪崩式払苦",
          command: "A・A・←+B・A・B",
          notes: ["上・上・中・上・上", "○・○・×・×・×"],
        },
        {
          name: "馬殺し",
          command: "AB・B",
          notes: ["上・上", "×・×"],
        },
        {
          name: "牛殺し",
          command: "→+AB・→+AB",
          notes: ["中・中", "×・×"],
        },
        {
          name: "熊殺し",
          command: "↓N+A・B・B",
          notes: ["下・中・上", "○・○・×"],
        },
        {
          name: "鬼殺し",
          command: "←+B・→+B・AB",
          notes: ["中・上・中", "×・×・×"],
        },
        {
          name: "半月崩し",
          command: "↓N+A・A",
          notes: ["下・下", "○・○"],
        },
        {
          name: "三連半月崩し",
          command: "↓N+A・A・A",
          notes: ["下・下・下", "○・○・○"],
        },
        {
          name: "半月崩し・改",
          command: "↓N+A・A・B",
          notes: ["下・下・中", "○・○・×"],
        },
        {
          name: "百壱圧破",
          command: "←+A・B・A・B",
          notes: ["上・上・上・上", "×・×・×・×"],
        },
        {
          name: "二段圧破",
          command: "←+A・→+AB",
          notes: ["上・上", "×・×"],
        },
        {
          name: "瓦割圧破",
          command: "↘+A・→+AB",
          notes: ["中・上", "○・×"],
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
          notes: ["中段"],
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
          ],
        },
      ],
    },
    {
      title: "必殺技",
      skills: [
        {
          name: "玉込め",
          command: "玉なし時に↓↘→+A",
        },
        {
          name: "鉄砕丸",
          command: "玉あり時に↓↘→+A",
          skills: [
            {
              name: "待機",
              command: "そのままA継続押し",
              notes: ["レバーで発射角度変更（斜め上・水平・斜め下）"],
            },
          ],
        },
        {
          name: "裏柳生 歯止刀",
          command: "←+BC",
          notes: ["上段当て身"],
        },
        {
          name: "持ち上げ",
          command: "→↓↘+C",
          notes: ["上段投げ"],
          skills: [
            {
              name: "放り捨て",
              command: "",
            },
            {
              name: "持ち続け",
              command: "そのままC継続押し",
              skills: [
                {
                  name: "放り捨て",
                  command: "Cを放す",
                },
              ],
            },
          ],
        },
        {
          name: "裏柳生流 震嶽",
          command: "→→+B",
          notes: ["上段G不能"],
          skills: [
            {
              name: "溜め",
              command: "そのままB継続押し",
            },
          ],
        },
        {
          name: "裏柳生流 卍圧破",
          command: "←↙↓↘→+B",
          skills: [
            {
              name: "溜め",
              command: "そのままB継続押し",
            },
          ],
        },
        {
          name: "裏柳生流 逆瀧",
          command: "↘↘+B",
          skills: [
            {
              name: "裏柳生流 天通",
              command: "",
              skills: [
                {
                  name: "ダッシュ",
                  command: "→↓↘+B",
                  skills: [
                    {
                      name: "停止・構え",
                      command: "B",
                      notes: ["影の真下で押す"],
                      skills: [
                        {
                          name: "追い討ち",
                          command: "A",
                          notes: ["玉あり時のみ可能"],
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
          name: "裏柳生流 回転踊身乱舞連撃",
          command: "↓↙←+B",
          skills: [
            {
              name: "構え",
              command: "そのままB継続押し",
              notes: ["レバーで移動"],
              skills: [
                {
                  name: "キャンセル",
                  command: "D",
                },
                {
                  name: "発動",
                  command: "Bを放す",
                  skills: [
                    {
                      name: "連続パンチ",
                      command: "A or B（連打可能）",
                      notes: ["上段 or 中段"],
                      skills: [
                        {
                          name: "フィニッシュ",
                          command: "A or B or ↘↘+B",
                          notes: ["上段G不能 or 上段G不能 or 中段"],
                        },
                      ],
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
      title: "秘奥義",
      titleColor: 2,
      skills: [
        {
          name: "風林火山",
          command: "↓↙←+AB",
        },
      ],
    },
  ],
  sources: [
    {
      title: "もっと詳しいサイト",
      links: [
        {
          name: "柳生磐馬 - 侍魂～SAMURAI SPIRITS～ 攻略wiki - atwiki",
          href: "https://w.atwiki.jp/samuraispirits64/pages/30.html",
        },
      ],
    },
    {
      title: "もっと詳しい動画",
      links: [
        {
          name: "SAMURAI SPIRITS 〜侍魂〜（ポリサム）柳生磐馬（修羅/羅刹）全技一覧 - YouTube",
          href: "https://youtu.be/gtUh2TR36tk",
        },
      ],
    },
  ],
}
