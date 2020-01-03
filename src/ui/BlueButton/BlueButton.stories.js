import BlueButton from './BlueButton.svelte'

export default { title: 'BlueButton' }

export const withText = () => ({
  Component: BlueButton,
  props: {
    text: 'This is a blue button'
  }
})
