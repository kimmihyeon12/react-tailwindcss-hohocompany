import { atom } from 'recoil'

const popupView = atom({
  key: 'popupView', // unique ID (with respect to other atoms/selectors)
  default: 0, // default value (aka initial value)
})
export default popupView
