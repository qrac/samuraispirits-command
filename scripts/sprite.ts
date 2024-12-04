import fs from "fs/promises"
import path from "path"
import { fileURLToPath } from "node:url"
import SVGSpriter from "svg-sprite"

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const entries = [
  {
    name: "icons",
    input: path.resolve(__dirname, "../src/assets/icons/*.svg"),
    output: path.resolve(__dirname, "../public/assets/icons.svg"),
  },
  {
    name: "covers",
    input: path.resolve(__dirname, "../src/assets/covers/*.svg"),
    output: path.resolve(__dirname, "../public/assets/covers.svg"),
  },
]

async function createSprite(input: string, output: string) {
  const spriter = new SVGSpriter({
    mode: {
      symbol: {
        sprite: path.basename(output),
        dest: ".",
      },
    },
    shape: {
      id: {
        separator: "",
      },
    },
    svg: {
      xmlDeclaration: false,
    },
  })

  try {
    console.log(`Reading SVG files from: ${input}`)
    const files = await fs.readdir(path.dirname(input))
    const svgFiles = files.filter((file) => file.endsWith(".svg"))

    if (svgFiles.length === 0) {
      console.warn(`No SVG files found in ${path.dirname(input)}`)
      return
    }

    for (const file of svgFiles) {
      const filePath = path.resolve(path.dirname(input), file)
      const fileContent = await fs.readFile(filePath, "utf-8")
      spriter.add(filePath, null, fileContent)
    }

    console.log(`Generating sprite: ${output}`)
    const { result } = await spriter.compileAsync()
    const outputContents = result.symbol.sprite.contents
    await fs.mkdir(path.dirname(output), { recursive: true })
    await fs.writeFile(output, outputContents, "utf8")
  } catch (error) {
    console.error(`Error generating sprite for ${input}:`, error)
  }
}

for (const { name, input, output } of entries) {
  console.log(`Processing: ${name}`)
  await createSprite(input, output)
}
