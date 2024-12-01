import type { DataItem } from "../../../../types"

export const asuraSougetsuRasetsu: DataItem = {
  id: "asura-sougetsu-rasetsu",
  name: "風間蒼月（羅刹）",
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
          command: "C",
          notes: ["中段", "×"],
        },
        {
          name: "",
          command: "→+A",
          notes: ["上段", "○"],
        },
        {
          name: "",
          command: "→+B",
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
          notes: ["下段", "○"],
        },
        {
          name: "",
          command: "屈C",
          notes: ["下段", "×"],
        },
        {
          name: "",
          command: "（背面）A",
          notes: ["上段", "○"],
        },
        {
          name: "",
          command: "（背面）B",
          notes: ["上段", "○"],
        },
        {
          name: "",
          command: "（背面）C",
          notes: ["中段", "×"],
        },
        {
          name: "",
          command: "（背面）屈A",
          notes: ["下段", "○"],
        },
        {
          name: "",
          command: "（背面）屈B",
          notes: ["中段", "○"],
        },
        {
          name: "",
          command: "（背面）屈C",
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
          command: "空中でC",
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
      title: "固有技",
      titleNote: "入力 / 属性 / キャンセル",
      layout: "note",
      accordion: "unique",
      skills: [
        {
          name: "弧鎌",
          command: "↘+A",
          notes: ["中段", "×"],
        },
        {
          name: "襲突",
          command: "↘+B",
          notes: ["中段", "×"],
        },
        {
          name: "空翔",
          command: "↘+C",
          notes: ["中段", "×"],
        },
        {
          name: "祓鎌",
          command: "↓+A",
          notes: ["下段", "×"],
        },
        {
          name: "影薙",
          command: "↓+C",
          notes: ["下段", "×"],
        },
        {
          name: "影祓",
          command: "（背面）↓+C",
          notes: ["下段", "×"],
        },
        {
          name: "螺旋",
          command: "→→+A",
          notes: ["上段", "×"],
        },
        {
          name: "撃衝",
          command: "→→+B",
          notes: ["中段", "×"],
        },
        {
          name: "背向け",
          command: "←←+D",
        },
      ],
    },
    {
      title: "必殺技",
      skills: [
        {
          name: "水月",
          command: "↓↙←+A or B or 怒時AB",
        },
        {
          name: "翔月",
          command: "→↓↘+A or B or 怒時AB",
        },
        {
          name: "蓮華水舞「青蓮華」",
          command: "↓↘→+C",
          skills: [
            {
              name: "蓮華水舞「紅蓮華」",
              command: "↓↘→+A",
              skills: [
                {
                  name: "蓮華水舞「白蓮華」",
                  command: "↓↘→+B",
                },
              ],
            },
          ],
        },
        {
          name: "死月",
          command: "空中で↓↙←+C",
        },
        {
          name: "円月",
          command: "←↓↙+C",
        },
        {
          name: "破月",
          command: "被ダメージ中にABCD",
          notes: ["ガード不能"],
        },
        {
          name: "水皇転身",
          command: "←↓↙+D （or BD）（空中も可）",
          notes: ["モードチェンジ / BDは中段・キャンセル発動不可"],
          skills: [
            {
              name: "解除",
              command: "C or 屈C or ←↓↙+D",
            },
            {
              name: "水皇技のみ使用可能（下記）",
              command: "",
            },
          ],
        },
      ],
    },
    {
      title: "水皇技",
      titleNote: "入力 / 属性 / 解除の有無",
      layout: "note",
      accordion: "mode",
      skills: [
        {
          name: "水波",
          command: "A",
          notes: ["上段"],
        },
        {
          name: "双水波",
          command: "A・A",
          notes: ["上・上"],
        },
        {
          name: "水波陣",
          command: "A・A・A",
          notes: ["上・上", "解除"],
        },
        {
          name: "蒼龍波",
          command: "A・B",
          notes: ["上・中"],
        },
        {
          name: "蒼龍連皇陣 生・幼・青・中・老・死",
          command: "A・B・A・A・A・A・A・A",
          notes: ["上・中・中・中・中・中・中・中"],
        },
        {
          name: "龍断波",
          command: "A・C",
          notes: ["上・G不能", "解除"],
        },
        {
          name: "水皇波",
          command: "B",
          notes: ["上段"],
        },
        {
          name: "水皇双波",
          command: "B・B",
          notes: ["上・上", "解除"],
        },
        {
          name: "水皇連波陣 雫・霞・霖",
          command: "B・B・B・B・B",
          notes: ["上・上・中・中・中", "解除"],
        },
        {
          name: "龍薙",
          command: "→+A",
          notes: ["中段", "解除"],
        },
        {
          name: "蒼龍断・爪",
          command: "→+B",
          notes: ["中段"],
        },
        {
          name: "蒼龍断・牙",
          command: "→+B・A",
          notes: ["中・中"],
        },
        {
          name: "蒼龍断・顎",
          command: "→+B・A・B",
          notes: ["中・中・中", "解除"],
        },
        {
          name: "蒼龍断・哮",
          command: "→+B・A・↘+B",
          notes: ["中・中・中", "解除"],
        },
        {
          name: "龍掌波",
          command: "→+C",
          notes: ["上段投げ", "投げ抜け:C"],
        },
        {
          name: "波龍",
          command: "↘+A",
          notes: ["中段"],
        },
        {
          name: "双波龍",
          command: "↘+A・B",
          notes: ["中・中", "解除"],
        },
        {
          name: "汀龍",
          command: "↘+B",
          notes: ["中段", "解除"],
        },
        {
          name: "瀧龍",
          command: "↘+B・B",
          notes: ["中・中", "解除"],
        },
        {
          name: "蒼龍舞・漣",
          command: "↓+A",
          notes: ["下段"],
        },
        {
          name: "蒼龍舞・汐",
          command: "↓+A・A",
          notes: ["下・上", "解除"],
        },
        {
          name: "蒼龍舞・洪",
          command: "↓+A・A・A",
          notes: ["下・上・上"],
        },
        {
          name: "蒼龍舞・瀧",
          command: "↓+A・A・A・B",
          notes: ["下・上・上・中", "解除"],
        },
        {
          name: "蒼龍舞・浚",
          command: "↓+A・A・A・↓+B",
          notes: ["下・上・上・下", "解除"],
        },
        {
          name: "蒼龍舞・漱",
          command: "↓+A・B",
          notes: ["下・下", "解除"],
        },
        {
          name: "涅龍",
          command: "↓+B",
          notes: ["下段", "解除"],
        },
        {
          name: "水天龍",
          command: "↗+A",
          notes: ["中段"],
        },
        {
          name: "水天連龍",
          command: "↗+A・B",
          notes: ["中・中", "解除"],
        },
        {
          name: "廻龍波",
          command: "↗+B",
          notes: ["中段", "解除"],
        },
        {
          name: "双廻龍波",
          command: "↗+B・B",
          notes: ["中・下", "解除"],
        },
        {
          name: "昇龍波",
          command: "→→+A",
          notes: ["中段"],
        },
        {
          name: "滅龍波",
          command: "→→+B",
          notes: ["中段"],
        },
        {
          name: "龍掌波",
          command: "←↙↓↘→+C",
          notes: ["上段投げ / 投げ抜け:C", "成立時は解除"],
        },
        {
          name: "降水波",
          command: "屈A",
          notes: ["下段"],
        },
        {
          name: "流水波",
          command: "屈B",
          notes: ["下段", "解除"],
        },
        {
          name: "水影波",
          command: "（背面）A",
          notes: ["上段"],
        },
        {
          name: "皇闇波",
          command: "（背面）B",
          notes: ["上段"],
        },
        {
          name: "降影波",
          command: "（背面）屈A",
          notes: ["下段"],
        },
        {
          name: "闇天波",
          command: "（背面）屈B",
          notes: ["中段", "解除"],
        },
        {
          name: "空水波",
          command: "空中でA",
          notes: ["中段"],
        },
        {
          name: "翔皇波",
          command: "空中でB",
          notes: ["中段"],
        },
        {
          name: "地祓波",
          command: "空中でC",
          notes: ["下段", "解除"],
        },
      ],
    },
    {
      title: "秘奥義",
      titleColor: 2,
      skills: [
        {
          name: "天昇蓮華",
          command: "↓↘→+BC",
          skills: [
            {
              name: "",
              command: "↓↘→+A",
              skills: [
                {
                  name: "",
                  command: "↓↘→+B",
                  skills: [
                    {
                      name: "",
                      command: "↓↘→+C",
                      skills: [
                        {
                          name: "",
                          command: "ABCD",
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
  sources: [
    {
      title: "もっと詳しいサイト",
      links: [
        {
          name: "アスラ斬魔伝 / キャラ雑感 風間蒼月（羅刹） - 数字置き場",
          href: "https://seesaawiki.jp/kakugesouko/d/%a5%a2%a5%b9%a5%e9%bb%c2%cb%e2%c5%c1%20/%20%a5%ad%a5%e3%a5%e9%bb%a8%b4%b6%a4%ca%a4%c9#sgtB",
        },
        {
          name: "アスラ斬魔伝 / 風間蒼月 - 数字置き場",
          href: "https://seesaawiki.jp/kakugesouko/d/%a5%a2%a5%b9%a5%e9%bb%c2%cb%e2%c5%c1/%c1%f3%b7%ee",
        },
      ],
    },
    {
      title: "もっと詳しい動画",
      links: [
        {
          name: "サムライスピリッツ2アスラ斬魔伝 羅刹風間蒼月(水邪蒼月)技一覧 - YouTube",
          href: "https://youtu.be/ImOM7dLm2IA",
        },
      ],
    },
  ],
}
