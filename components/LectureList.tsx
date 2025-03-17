import { LectureList as LectureListType } from "@/lib/types";
import LectureItem from "./LectureItem";

interface LectureListProps {
	lectures: LectureListType;
}

export default function LectureList({ lectures }: LectureListProps) {
	if (!lectures || lectures.length === 0) {
		return (
			<div className="text-center py-12 text-text-secondary bg-bg-light rounded-lg">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					className="h-16 w-16 mx-auto mb-4 text-text-light"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth={2}
						d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
					/>
				</svg>
				<p className="text-lg">등록된 강의가 없습니다.</p>
				<p className="text-text-light mt-2">나중에 다시 확인해주세요.</p>
			</div>
		);
	}

	return (
		<div className="lecture-list grid gap-6">
			{lectures.map((lecture) => (
				<LectureItem key={lecture.id} lecture={lecture} />
			))}
		</div>
	);
}
