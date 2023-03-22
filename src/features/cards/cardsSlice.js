import { createSlice} from "@reduxjs/toolkit";

const cardsSlice = createSlice(
    {
        name: 'cards',
        initialState: {
            cards: {}
        },
        reducers: {
            addCard: (state, action) => {
                /* { id: '123', front: 'front of card', back: 'back of card'}. */
            }
        }
    }
)

export const { addCard } = cardsSlice.actions;
export const selectCards = (state) => state.cards.cards;
export default cardsSlice.reducer;