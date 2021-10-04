#!/usr/bin/env node
/**
 * @module writePackageJson
 */
const fs = require('fs')
// const path = require('path')
// const { execSync } = require('child_process')

// const packages = fs.readdirSync(path.join(__dirname, '../packages'))

/**
 * Removes dev data from and writes package.json to the publish directory.
 *
 * @alias module:writePackageJson
 *
 * @param {object} packageData - The package data object.
 */
function writePackageJson(packageData) {
  // get package.json
  const packageJson = JSON.parse(
    fs.readFileSync(`${packageData.paths.base}/package.json`),
  )

  // Delete dev-only blocks
  const deleteKeys = ['scripts', 'devDependencies', 'gitHead']
  deleteKeys.forEach((key) => delete packageJson[key])

  // Write file to publish directory
  fs.writeFileSync(
    `${packageData.paths.publish}/package.json`,
    JSON.stringify(packageJson, null, '  '),
    'utf8',
  )
}

// packages.forEach((packageName) => {
//   // Skip dotfiles
//   if (packageName.startsWith('.')) {
//     return
//   }
//   const basePath = path.join(__dirname, '../packages/', packageName)

//   const packageData = {
//     name: packageName,
//     paths: {
//       base: basePath,
//       src: `${basePath}/src`,
//       publish: `${basePath}/publish`,
//     },
//   }

//   // If the publish folder does not exist, bail early
//   if (!fs.existsSync(`${packageData.paths.publish}`)) {
//     return
//   }

//   console.log(`Writing ${packageData.name} package.json`)
//   writePackageJson(packageData)

//   console.log(
//     '\u001B[32m',
//     `✔️ ${packageData.name} package.json written`,
//     '\u001B[0m',
//   )
// })

exports.writePackageJson = writePackageJson
