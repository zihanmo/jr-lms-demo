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

export const saveCourseById = (id, course) => {
    return new Promise((resolve, reject) => {
        console.log(`Saving course with id(${id}):`, course)
        // Do fake saving
        resolve();
    });
};

export const createCourse = course => {
    return new Promise((resolve, reject) => {
        console.log(`Creating course:`, course)
        // Do fake creating
        resolve();
    });
};
