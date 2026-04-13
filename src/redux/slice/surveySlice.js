import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    survey: [],
    nextId: 1,
};

const surveySlice = createSlice({
    initialState,
    name: "survey",
    reducers: {
        addSurvey: (prevState, action) => {
            prevState.survey.push(action.payload);
            prevState.nextId++;
        },
        deleteSurvey: (prevState, action) => {
            prevState.survey = prevState.survey.filter((del) => {
                return del.id !== action.payload;
            });
        },
    },
});

export const { addSurvey, deleteSurvey } = surveySlice.actions;
export default surveySlice.reducer;
