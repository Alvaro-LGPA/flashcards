import { createSlice } from "@reduxjs/toolkit";
import { addQuizId } from "../topics/topicsSlice";


export const thunkActionCreator = (payload) => {
    return (dispatch) => {
        // dispatch multiple actions here
        dispatch(quizzesSlice.actions.addQuiz(payload));
        dispatch(addQuizId(payload));
    };
};

export const quizzesSlice = createSlice(
    {
        name: 'quizzes',
        initialState: {
            quizzes: {}
        },
        reducers: {
            addQuiz: (state, action) => {
                const { name, topicId, quizId, cardIds } = action.payload;
                state.quizzes[quizId] = {
                    name: name,
                    id: quizId,
                    topicId: topicId,
                    cardIds: cardIds
                }
            }
        }
    })

export const { addQuiz } = quizzesSlice.actions;
export const selectQuizzes = (state) => state.quizzes.quizzes;
export default quizzesSlice.reducer;