import { readFile, writeFile, rm } from 'node:fs/promises'

const { pages } = await import('../dist-ssr/prerender.js')

for (const [file, render] of Object.entries(pages)) {
  const path = `dist/${file}`
  const html = await readFile(path, 'utf8')
  if (!html.includes('<div id="root"></div>')) {
    throw new Error(`${path} has no empty <div id="root"></div> to fill`)
  }
  await writeFile(path, html.replace('<div id="root"></div>', `<div id="root">${render()}</div>`))
}

await rm('dist-ssr', { recursive: true })
