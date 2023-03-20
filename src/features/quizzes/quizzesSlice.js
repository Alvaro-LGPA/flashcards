import { createSlice } from "@reduxjs/toolkit";
import { addQuizId } from "../topics/topicsSlice";


export const thunkActionCreator = (payload) => {
    return (dispatch) => {
      // dispatch multiple actions here
      debugger;
      dispatch(addQuiz(payload));
      dispatch(addQuizId(payload));
    };
};

const quizzesSlice = createSlice({
    name: 'quizzes',
    initialState: {
        quizzes: {}
    },
    reducers: {
        addQuiz: (state, action) => {
            state.quizzes[action.payload.id] = action.payload
        }
    }
})

export const {addQuiz} = quizzesSlice.actions;

export const selectQuiz = (state) => state.quizzes.quizzes;

export default quizzesSlice.reducer;