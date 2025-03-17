import { LectureClass } from "@/lib/types";
import ReactMarkdown from "react-markdown";

interface ClassDetailProps {
	classData: LectureClass;
}

export default function ClassDetail({ classData }: ClassDetailProps) {
	if (!classData) {
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
						d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
					/>
				</svg>
				<p className="text-lg">수업 정보를 찾을 수 없습니다.</p>
			</div>
		);
	}

	// 중요도에 따른 배지 스타일
	const severityBadges = {
		low: "bg-green-100 text-green-800 border-green-300",
		normal: "bg-primary-light text-primary-color border-primary-color",
		high: "bg-accent-light text-accent-color border-accent-color",
	};

	// 중요도 텍스트
	const severityText = {
		low: "낮음",
		normal: "보통",
		high: "높음",
	};

	// 중요도에 따른 아이콘
	const severityIcons = {
		low: (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				className="h-5 w-5 mr-2"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
			>
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth={2}
					d="M5 13l4 4L19 7"
				/>
			</svg>
		),
		normal: (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				className="h-5 w-5 mr-2"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
			>
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth={2}
					d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
				/>
			</svg>
		),
		high: (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				className="h-5 w-5 mr-2"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
			>
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth={2}
					d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
				/>
			</svg>
		),
	};

	return (
		<div className="card bg-white p-8 shadow-lg">
			<div className="mb-8 border-b pb-6 border-primary-light">
				<div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
					<h2 className="text-2xl font-bold text-primary-color mb-4 md:mb-0">
						{classData.period}교시: {classData.title}
					</h2>
					<span
						className={`px-4 py-2 rounded-full text-sm font-medium border flex items-center self-start md:self-auto ${
							severityBadges[classData.severity]
						}`}
					>
						{severityIcons[classData.severity]}
						중요도: {severityText[classData.severity]}
					</span>
				</div>
				<div className="flex items-center text-text-secondary mb-2">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="h-5 w-5 mr-2"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth={2}
							d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
						/>
					</svg>
					<p>담당 교수: {classData.professor}</p>
				</div>
			</div>

			<div className="prose max-w-none">
				<ReactMarkdown>{classData.content}</ReactMarkdown>
			</div>
		</div>
	);
}
