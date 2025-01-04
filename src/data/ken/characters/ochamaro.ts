import type { DataItem } from "../../../types"

export const kenoOhamaro: DataItem = {
  id: "ken-ochamaro",
  name: "機功おちゃ麻呂",
  groups: [
    {
      title: "必殺技",
      skills: [
        {
          name: "都古舞 扇寿",
          command: "↓↙←+斬",
          skills: [
            {
              name: "都古舞 扇福",
              command: "↓↙←+A",
              skills: [
                {
                  name: "都古舞 峯扇",
                  command: "↓↙←+A",
                },
                {
                  name: "都古舞 涼波",
                  command: "↓↙←+B",
                },
                {
                  name: "都古舞 昴寿",
                  command: "↓↙←+C",
                },
                {
                  name: "都古舞 門柳",
                  command: "→↓↘+D",
                },
                {
                  name: "都古舞 稀世",
                  command: "→↓↘+A",
                },
                {
                  name: "都古舞 風張",
                  command: "↓↘→+E",
                },
              ],
            },
            {
              name: "都古舞 小桜",
              command: "↓↙←+B",
              skills: [
                {
                  name: "都古舞 峯扇",
                  command: "↓↙←+A",
                },
                {
                  name: "都古舞 涼波",
                  command: "↓↙←+B",
                },
                {
                  name: "都古舞 昴寿",
                  command: "↓↙←+C",
                },
                {
                  name: "都古舞 門柳",
                  command: "→↓↘+D",
                },
                {
                  name: "都古舞 稀世",
                  command: "→↓↘+A",
                },
                {
                  name: "都古舞 風張",
                  command: "↓↘→+E",
                },
              ],
            },
            {
              name: "都古舞 洸扇",
              command: "↓↙←+C",
              skills: [
                {
                  name: "都古舞 峯扇",
                  command: "↓↙←+A",
                },
                {
                  name: "都古舞 涼波",
                  command: "↓↙←+B",
                },
                {
                  name: "都古舞 昴寿",
                  command: "↓↙←+C",
                },
                {
                  name: "都古舞 門柳",
                  command: "→↓↘+D",
                },
                {
                  name: "都古舞 稀世",
                  command: "→↓↘+A",
                },
                {
                  name: "都古舞 風張",
                  command: "↓↘→+E",
                },
              ],
            },
          ],
        },
        {
          name: "天羽舞",
          command: "空中で↓↙←+D",
        },
        {
          name: "泰山舞",
          command: "→↓↘+D",
          notes: ["対投げ技用の当て身"],
        },
        {
          name: "傀儡回し 壱の幕",
          command: "近距離で→↘↓↙←→+A",
          skills: [
            {
              name: "傀儡回し 弐の幕",
              command: "A・A・BC",
              skills: [
                {
                  name: "傀儡回し 参の幕",
                  command: "C・C・ABC",
                  skills: [
                    {
                      name: "傀儡回し 四の幕",
                      command: "A・B・C・B・ABD",
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
      title: "特殊",
      skills: [
        {
          name: "特殊技",
          command: "→+B",
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
          name: "都古舞 秘奥 団扇楓【真】",
          command: "→↘↓↙←→↘↓↙←+BC",
        },
        {
          name: "都古舞 秘奥 団扇楓【剣】",
          command: "↓↘→+BC",
        },
      ],
    },
    {
      title: "武器飛ばし技・武器破壊技",
      titleColor: 2,
      skills: [
        {
          name: "獅子舞 鬼遣",
          command: "↓↘→+AB",
          skills: [
            {
              name: "獅子舞 鬼紋封",
              command: "→↘↓↙←→↘↓↙←+ABC",
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
          name: "機功おちゃ麻呂 - サムライスピリッツ天下一剣客伝攻略 - Seesaa Wiki",
          href: "https://seesaawiki.jp/w/givingleaf/d/%b5%a1%b9%aa%a4%aa%a4%c1%a4%e3%cb%e3%cf%a4",
        },
        {
          name: "機功おちゃ麻呂 - キャラクターとコマンドリスト | 剣サム | 明鏡止水｡◇ﾟ in 雨峠",
          href: "https://amatoge.static.jp/meikyo/kenkaku/waza.htm#ken-ochamaro",
        },
        {
          name: "機功おちゃ麻呂攻略 - サムライスピリッツ天下一剣客伝 攻略サイト",
          href: "https://kensamu.web.fc2.com/otyamaro/otyamaro.html",
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
