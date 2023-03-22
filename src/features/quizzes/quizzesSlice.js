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
                debugger;
                const { name, topicId, id } = action.payload;
                state.quizzes[id] = {
                    name: name,
                    id: id,
                    topicId: topicId,
                    cardIds: []
                    
                }
            }
        }
    })

export const { addQuiz } = quizzesSlice.actions;
export const selectQuiz = (state) => state.quizzes.quizzes;
export default quizzesSlice.reducer;