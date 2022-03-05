import { createSlice } from '@reduxjs/toolkit';
import { addQuizId } from '../topics/topicsSlice';



export const quizzesSlice = createSlice({
    name: 'quizzes',
    initialState: {
        quizzes: {},
    },
    reducers: {
        addQuiz: (state, action) => {
            const {id, name, topicId, cardIds} = action.payload;
            state.quizzes[id] = {
                id,
                name,
                topicId,
                cardIds
            }     
        }
    }
})

//thunk to dispatch addQuiz and addQuizId 
export const addQuiz_and_addQuizId = quizPayload => {
    const { name, topicId, cardIds, id } = quizPayload;
    return (dispatch) => {
        dispatch( quizzesSlice.actions.addQuiz( quizPayload ) );
        dispatch( addQuizId( {quizId: id, topicId: topicId} ) );
    }
};


export const selectQuizzes = state => state.quizzes.quizzes;


export const { addQuiz } = quizzesSlice.actions;
export default quizzesSlice.reducer;