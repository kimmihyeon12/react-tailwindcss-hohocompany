import { atom } from "recoil";

const communicationView = atom({
    key: 'communicationView', // unique ID (with respect to other atoms/selectors)
    default: false, // default value (aka initial value)
});
export default communicationView;