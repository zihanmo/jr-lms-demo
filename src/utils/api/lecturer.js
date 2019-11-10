import { get } from './axios';

const API_LECTURER_URL = '/teachers';
const mockImage = 'https://i.pinimg.com/originals/8d/94/5b/8d945bbaf167b063040eca16b0c59cd8.png';

export const fetchLecturers = (pageNum = 1, pageSize = 10) => {
    const url = `${API_LECTURER_URL}?page=${pageNum}&pageSize=${pageSize}`;

    return get(url).then(res => ({
        lecturers: res.data.data.map(lecturer => ({ ...lecturer, image: mockImage })),
        pagination: res.data.pagination,
    }));
};
