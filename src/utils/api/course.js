import { get } from './axios';

const API_COURSE_URL = '/courses';

export const fetchCourses = () => {
    return get(API_COURSE_URL).then(res => res.data.data);
};