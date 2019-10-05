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

export const deleteCourseById = courseId => {
    return new Promise((resolve, reject) => {
        console.log(`Deleting course:`, courseId)
        // Do fake deleting
        resolve();
    });
};

export const login = (email, password) => {
    return new Promise((resolve, reject) => {
        console.log(`Logging in user:`, email)
        // Do fake login
        setTimeout(() => {
            const mockJWTToken = 'mock.JWT.token';
            resolve(mockJWTToken);
        }, 2000);
    });
};
