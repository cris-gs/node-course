const fileSystem = require('node:fs/promises')
const path = require('node:path')
const picoColors = require('picocolors')

const folder = process.argv[2] ?? '.'

async function ls (directory) {
  let files
  try {
    files = await fileSystem.readdir(folder)
  } catch (error) {
    console.error(picoColors.red(`❌ Could not read directory ${folder}`))
    process.exit(1)
  }

  const filesPromises = files.map(async (file) => {
    const filePath = path.join(folder, file)
    let stats

    try {
      stats = await fileSystem.stat(filePath)
    } catch (error) {
      console.error(picoColors.red(`❌ Could not read file ${filePath}`))
      process.exit(1)
    }

    const isDirectory = stats.isDirectory()
    const fileType = isDirectory ? 'd' : 'f'
    const fileSize = stats.size.toString()
    const fileModified = stats.mtime.toLocaleString()

    return `${picoColors.cyan(fileType)} ${picoColors.blue(
      file.padEnd(20)
    )} ${picoColors.green(fileSize.padStart(10))} ${picoColors.yellow(
      fileModified
    )}`
  })

  const filesInfo = await Promise.all(filesPromises)

  filesInfo.forEach((fileInfo) => console.log(fileInfo))
}

ls(folder)
