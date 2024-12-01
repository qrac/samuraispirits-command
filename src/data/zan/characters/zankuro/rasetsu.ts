import type { DataItem } from "../../../../types"

export const zanZankuroRasetsu: DataItem = {
  id: "zan-zankuro-rasetsu",
  name: "壬無月斬紅郎（羅刹）",
  groups: [
    {
      title: "必殺技",
      skills: [
        {
          name: "無限流 疾風斬",
          command: "↓↘→+斬",
        },
        {
          name: "無限流 無法拳",
          command: "←→+A",
        },
        {
          name: "無限流 天崩斬",
          command: "→↓↘+斬",
        },
        {
          name: "無限流 無限砲",
          command: "↓↙←→+斬",
        },
        {
          name: "無限流 一刀斬",
          command: "←↙↓+AB",
        },
        {
          name: "無限流 不動",
          command: "←↙↓↘→+D",
        },
        {
          name: "無限流 天誅",
          command: "空中で↓+C",
        },
      ],
    },
    {
      title: "武器飛ばし技",
      titleColor: 2,
      skills: [
        {
          name: "奥義 無双震撃斬",
          command: "↓↓↓↘→+AB",
        },
      ],
    },
    {
      title: "システム",
      skills: [
        {
          name: "斬紅郎の使用方法",
          command:
            "対戦のキャラ選択時に覇王丸にカーソルを合わせ←←↓→→↑→↓→→↑←←残りタイム03秒の時にスタートを押しながらAB",
        },
      ],
    },
  ],
  sources: [
    {
      title: "もっと詳しいサイト",
      links: [
        {
          name: "壬無月斬紅郎 - キャラクターとコマンドリスト | 斬サム | 明鏡止水｡◇ﾟ in 雨峠",
          href: "http://amtug.html.xdomain.jp/meikyo/zan/command.htm#zan",
        },
        {
          name: "壬無月斬紅郎 - ド定番連続技ガイド | 斬サム | 明鏡止水｡◇ﾟ in 雨峠",
          href: "http://amtug.html.xdomain.jp/meikyo/zan/combo.htm#zan",
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
