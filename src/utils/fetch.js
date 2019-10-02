import { courses } from './mockCourseData';

export const fetchCourses = () => {
    return new Promise((resovle, reject) => {
        resovle(courses);
    });
};

export const fetchCourseById = id => {
    return new Promise((resovle, reject) => {
        const course = courses.find(course => course.id === id) || {};
        resovle(course);
    });
};
