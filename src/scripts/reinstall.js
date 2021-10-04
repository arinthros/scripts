#!/usr/bin/env node
/**
 * Clean up untracked files and reinstall dependencies.
 *
 * @module reinstall
 *
 * @example
 * yarn reinstall
 */
const fs = require('fs')
const { execSync } = require('child_process')

// eslint-disable-next-line no-console
console.log('[0/4] Cleaning up untracked files...')

const rmCommand = process.platform === 'win32' ? 'rmdir /Q /S' : 'rm -rf'

const folders = ['node_modules', 'publish', 'watch']
folders.forEach((folder) => {
  if (fs.existsSync(folder)) {
    execSync(`${rmCommand} ${folder}`)
  }
})

let packageManager = 'yarn'
if (process.argv.slice(2).includes('--npm')) {
  packageManager = 'npm'
}
// Run the install command
// TODO: detect which package manager fired the command
execSync(`${packageManager} install`, {
  stdio: 'inherit',
})
