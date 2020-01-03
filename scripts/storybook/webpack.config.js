function addStorySource({ config }) {
  config.module.rules.push({
    test: /\.stories\.js$/,
    loaders: [require.resolve('@storybook/addon-storysource/loader')],
    enforce: 'pre'
  })

  return config
}

module.exports = async ({ config }) => ({
  ...config,
  ...addStorySource({ config })
})
