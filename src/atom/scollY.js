import { atom } from "recoil";

const scrollY = atom({
    key: 'scrollY', // unique ID (with respect to other atoms/selectors)
    default: 0, // default value (aka initial value)
});
export default scrollY;