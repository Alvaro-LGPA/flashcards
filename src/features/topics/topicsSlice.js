import { createSlice} from "@reduxjs/toolkit";


const topicsSlice  = createSlice(
    {
        name: "topics",
        initialState: {
            topics: {}
        },
        reducers: {
            addTopic: (state, action) => {
                
                const quizIds = [];
                state.topics[action.payload.id] = {...action.payload,quizIds};
            },
            addQuizId: (state, action) => {
                state.topics[action.payload.topicId].push(action.payload.quizId)
            }
        }

    }
)

export const { addTopic, addQuizId } = topicsSlice.actions;
export const selectTopics = (state) => state.topics.topics;

export default topicsSlice.reducer;