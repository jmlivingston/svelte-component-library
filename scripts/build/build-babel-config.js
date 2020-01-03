// Update Babel config based on babel-preset and babel-plugin packages
const fs = require('fs')
const path = require('path')
const packageJson = require('../../package.json')

const addConfigToPackageJson = true // true: package.json || false: .babelrc

function buildBabelConfig() {
  const dependencyKeys = [...Object.keys(packageJson.devDependencies)]

  const babel = {
    presets: [
      ...dependencyKeys.filter(key => key.includes('babel/preset') && key !== '@babel/preset-env').map(key => key),
      '@babel/preset-env' // must come last
    ],
    plugins: dependencyKeys.filter(key => key.includes('babel/plugin') || key.includes('babel-plugin')).map(key => key)
  }

  const updatedPackageJson = JSON.stringify({ ...packageJson, babel }, null, 2)

  if (addConfigToPackageJson) {
    fs.writeFileSync(path.join(__dirname, '../../package.json'), updatedPackageJson)
  } else {
    fs.writeFileSync(path.join(__dirname, '../../.babelrc'), JSON.stringify(babel, null, 2))
  }

  /* eslint-disable-next-line */
  console.log(`Babel config updated: \n${JSON.stringify(babel, null, 2)}`)
}

buildBabelConfig()
