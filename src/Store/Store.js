import {configureStore, createSlice} from '@reduxjs/toolkit';
import courses from '../Courses';

const tabSlice = createSlice({
    name: 'tab',
    initialState: {
        value: 'allCourses'
    },
    reducers: {
        setTab: (state, action) => {
            state.value = action.payload;
        }
    }
});

const currentUserIdSlice = createSlice({
    name: 'currentUserId',
    initialState: {
        value: 1
    },
    reducers: {
        setCurrentUserId: (state, action) => {
            state.value = action.payload;
        }
    }
});

const MyCoursesListSlice = createSlice({
    name: 'MyCoursesList',
    initialState: {
        value: []
    },
    reducers: {
        setMyCoursesList: (state, action) => {
            state.value.push({
                ...action.payload,
                progress: 0,
                syllabus: action.payload.syllabus.map(week => ({
                    ...week,
                    isCompleted: false
                }))
            });
            state.value.forEach(course => {
                delete course.students;
            });
        },
        setProgress: (state, action) => {
            const course = state.value.find(course => course.id === action.payload.id);
            if (course) {
                course.progress = action.payload.courseProgress;
            }
        },
        setIsCompletedAndProgress: (state, action) => {
            const course = state.value.find(course => course.id === action.payload.courseId);
            if (course) {
                const week = course.syllabus.find(week => week.week === action.payload.weekId);
                if (week) {
                    week.isCompleted = !week.isCompleted;
                }
                const completedWeeks = course.syllabus.filter(week => week.isCompleted).length;
                const totalWeeks = course.syllabus.length;
                const courseProgress = Math.round((completedWeeks / totalWeeks) * 100);
                course.progress = courseProgress;
            }
        }
    }
});

const allCoursesSlice = createSlice({
    name: 'allCourses',
    initialState: {
        value: courses
    },
    reducers: {
        //push id in students array
        enroll: (state, action) => {
            const course = state.value.find(course => course.id === action.payload);
            course.students.push(1);
        }
    }
});

export const {setTab} = tabSlice.actions;
export const {setMyCoursesList, setProgress, setIsCompletedAndProgress} = MyCoursesListSlice.actions;
export const {enroll} = allCoursesSlice.actions;
export const {setCurrentUserId} = currentUserIdSlice.actions;

export default configureStore({
    reducer: {
        tab: tabSlice.reducer,
        MyCoursesList: MyCoursesListSlice.reducer,
        allCourses: allCoursesSlice.reducer,
        currentUserId: currentUserIdSlice.reducer
    }
});
