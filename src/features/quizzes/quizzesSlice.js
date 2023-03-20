import { createSlice } from "@reduxjs/toolkit";

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
<<<<<<< HEAD
export const selectQuiz = (state) => state.quizzes.quizzes;
=======
export const selectQuizz = (state) => state.quizzes.quizzes;
>>>>>>> b82a7b87c0485d19f98fe6379e4f655b6154e4b4
export default quizzesSlice.reducer;