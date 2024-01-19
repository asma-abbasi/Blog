import { createStore } from "redux";

const fakeReducer = (state={name:'fakeName'}, action) => {
    return state;
};
const Store = createStore(fakeReducer);
export default Store;
