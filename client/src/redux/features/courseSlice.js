import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    courses: [],
    courseCount: 0,
};

export const courseSlice = createSlice({
    name: "course",
    initialState,
    reducers: {
        fetchCourseList: (state, action) => {
            state.courses = action.payload;
        },
    },
});

export const { fetchCourseList } = courseSlice.actions;

export default courseSlice.reducer;
