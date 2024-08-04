import { clsx } from "clsx"

export function SpriteCommand({ command }: { command: string }) {
  return command.split("").map((char, index) => {
    const regCommand = /[↙↓↘←→↖↑↗ABCD斬]/
    const commandMap = {
      "↙": "arrow-1",
      "↓": "arrow-2",
      "↘": "arrow-3",
      "←": "arrow-4",
      "→": "arrow-6",
      "↖": "arrow-7",
      "↑": "arrow-8",
      "↗": "arrow-9",
      A: "button-a",
      B: "button-b",
      C: "button-c",
      D: "button-d",
      斬: "button-zan",
    }
    if (regCommand.test(char)) {
      const symbolId = commandMap[char]
      return (
        <svg
          key={index}
          className={clsx("sprite-command", `is-${symbolId}`)}
          role="img"
        >
          <use href={"/assets/sprite.svg#" + symbolId}></use>
        </svg>
      )
    } else {
      return char
    }
  })
}
