import type { DataItem } from "../../../types"

export const zanZankuroShura: DataItem = {
  id: "zan-zankuro-shura",
  name: "壬無月斬紅郎（修羅）",
  groups: [
    {
      title: "必殺技",
      list: [
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
          command: "←↙↓+AB同時押し",
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
      title: "武器飛ばし",
      titleColor: 2,
      list: [
        {
          name: "奥義 無双震撃斬",
          command: "↓↓↓↘→+AB同時押し",
        },
      ],
    },
    {
      title: "システム",
      list: [
        {
          name: "斬紅郎の使用方法",
          command:
            "対戦時に覇王丸にカーソルを合わせ←,←,↓,→,→,↑,→,↓,→,→,↑,←,←,残りタイム03秒の時にスタートを押しながらAB同時押し",
        },
      ],
    },
  ],
}
