#!/usr/bin/env node
/**
 * Creates publish directory with relevant files.
 *
 * @module build
 *
 * @example
 * yarn build
 */
const fs = require('fs-extra')
const path = require('path')

const packageJson = fs.readFileSync(path.join(process.cwd(), 'package.json'))

// eslint-disable-next-line no-console
console.log(`Building the ${JSON.parse(packageJson).name} package...`)

const publishPath = path.join(process.cwd(), 'build')

fs.removeSync(publishPath)
fs.mkdirSync(publishPath)

const filesToCopy = ['package.json', 'README.md']
const foldersToCopy = ['src']

const promises = [
  ...filesToCopy.map((file) => {
    return fs.copy(path.join(process.cwd(), file), path.join(publishPath, file))
  }),
  ...foldersToCopy.map((folder) => {
    return fs.copy(path.join(process.cwd(), folder), publishPath)
  }),
]

Promise.all(promises)
  .then(() => {
    // eslint-disable-next-line no-console
    console.log('Package built.')
    process.exit(0)
  })
  .catch((error) => {
    // eslint-disable-next-line no-console
    console.error(error.message)
    process.exit(1)
  })
