import queryString from 'query-string';
import { get } from './axios';

const API_STUDENT_URL = '/students';
const mockImage = 'https://cdn2.iconfinder.com/data/icons/hacker-solid/100/hacker_hacker_human_-512.png';

export const fetchStudents = (pageNum = 1, pageSize = 10, query) => {
    const stringified = queryString.stringify({
        pageSize,
        query,
        page: pageNum,
    });
    const url = `${API_STUDENT_URL}?${stringified}`;

    return get(url).then(res => ({
        students: res.data.data.map(student => ({ ...student, image: mockImage })),
        pagination: res.data.pagination,
    }));
};
