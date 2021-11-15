import { atom } from 'recoil'

const barwidth = atom({
  key: 'barwidth', // unique ID (with respect to other atoms/selectors)
  default: 10, // default value (aka initial value)
})
export default barwidth
