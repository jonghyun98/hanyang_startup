import { Lecture, LectureClass } from './types';
import { lectures } from './lectureData';

/**
 * 강의 ID로 강의 정보를 검색합니다.
 */
export const getLectureById = (lectureId: number | undefined): Lecture | undefined => {
  if (!lectureId) return undefined;
  return lectures.find(lecture => lecture.id === lectureId);
};

/**
 * 강의 ID와 수업 ID로 해당 수업 정보를 검색합니다.
 */
export const getClassById = (lectureId: number | undefined, classId: number): LectureClass | undefined => {
  if (!lectureId) return undefined;
  const lecture = getLectureById(lectureId);
  return lecture?.classes.find(classItem => classItem.id === classId);
};

/**
 * 모든 강의 리스트를 반환합니다.
 */
export const getAllLectures = (): Lecture[] => {
  return lectures;
}; 