import { createStore } from "redux";

// actions
export const showNumber = number => {
  return {
    type: "SHOW_NUMBER",
    number
  };
};

// reducer
const app = (state = 0, action) => {
  switch (action.type) {
    case "SHOW_NUMBER": {
      state += action.number;
    }
  }
  return state;
};

// creation du store
const store = createStore(app);

// envoi de l'action dans le reducer
// store.dispatch(showNumber(5));

export default store;

