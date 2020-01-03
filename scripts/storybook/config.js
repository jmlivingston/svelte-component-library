// import { withInfo } from '@storybook/addon-info'
// import { addDecorator, addParameters, configure } from '@storybook/svelte'
// import { storyConfig } from './storyConfig'

// addDecorator(withInfo)
// addParameters(storyConfig.options)

// function loadStories() {
//   // require('../../src/documentation/documentation.stories')

//   const coreReq = require.context('../../src/ui', true, /\.stories\.js$/)
//   coreReq
//     .keys()
//     .sort()
//     .forEach(filename => coreReq(filename))
// }

// configure(loadStories, module)

import { configure } from '@storybook/svelte'

configure(require.context('../../src', true, /\.stories\.js$/), module)
