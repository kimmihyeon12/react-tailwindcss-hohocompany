import { atom } from 'recoil'

const recruitmentView = atom({
  key: 'recruitmentView', // unique ID (with respect to other atoms/selectors)
  default: false, // default value (aka initial value)
})
export default recruitmentView
