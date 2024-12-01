import type { DataItem } from "../../../types"

export const shinNicotine: DataItem = {
  id: "shin-nicotine",
  name: "花諷院和狆",
  groups: [
    {
      title: "必殺技",
      skills: [
        {
          name: "式神霊符・雷",
          command: "↓↘→+斬",
        },
        {
          name: "式神霊符・炎",
          command: "↓↘→+蹴",
        },
        {
          name: "縛鎖杖撃",
          command: "→↘↓↙←+斬",
        },
        {
          name: "心乱呪符",
          command: "←↓↙+AB",
        },
        {
          name: "支杖螺旋脚",
          command: "空中で↙↓↘→+蹴",
        },
      ],
    },
    {
      title: "投げ",
      skills: [
        {
          name: "専修念仏殺",
          command: "近距離で→ or ←+B",
        },
        {
          name: "往生極楽撃",
          command: "近距離で→ or ←+AB",
        },
        {
          name: "因果大焦熱",
          command:
            "近距離で→ or ←+D or CD（or 素手時に近距離で→ or ←+中 or 強攻撃）",
        },
        {
          name: "地獄極楽蹴り",
          command: "アースクェイクに対して投げ",
        },
      ],
    },
    {
      title: "特殊",
      skills: [
        {
          name: "ぬいぐるみ変化",
          command: "←↙↓↙←→+D",
        },
      ],
    },
    {
      title: "武器破壊技",
      titleColor: 2,
      skills: [
        {
          name: "仁王符霊殺",
          command: "→←↙↓↘→+D",
        },
      ],
    },
  ],
  sources: [
    {
      title: "もっと詳しいサイト",
      links: [
        {
          name: "花諷院和狆 - 真刃繚乱",
          href: "http://shinjin.starfree.jp/chara_data/niko/niko_mainframe.htm",
        },
        {
          name: "花諷院和狆の連続技 - 真刃繚乱",
          href: "http://shinjin.starfree.jp/combo/niko/niko_comboframe.htm",
        },
      ],
    },
    {
      title: "もっと詳しい動画",
      links: [
        {
          name: "真サムライスピリッツ(SAMURAI SHODOWN 2)初心者講習会 第3回 その1(花諷院和狆) - YouTube",
          href: "https://youtu.be/oIFbxYyVCl4",
        },
      ],
    },
  ],
}
