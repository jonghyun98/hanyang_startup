import Link from "next/link";
import { Lecture } from "@/lib/types";

interface LectureItemProps {
	lecture: Lecture;
}

export default function LectureItem({ lecture }: LectureItemProps) {
	return (
		<Link
			href={`/lectures/${lecture.week}`}
			className="card lecture-item block transition-all hover:shadow-lg p-5 border-l-4 border-primary-color bg-white rounded-lg"
		>
			<div className="flex justify-between items-start">
				<div className="flex-1">
					<div className="flex items-center gap-2 mb-2">
						<span className="bg-primary-light text-primary-color text-xs font-medium px-2.5 py-1 rounded-full">
							{lecture.week}주차
						</span>
						<h3 className="text-lg font-semibold text-primary-color">
							{lecture.title}
						</h3>
					</div>
					<p className="text-text-secondary text-sm mt-2 flex items-center">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-4 w-4 mr-1 text-text-light"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
							/>
						</svg>
						{lecture.date}
					</p>
					{lecture.summary && (
						<p className="text-sm text-text-light mt-3 line-clamp-2">
							{lecture.summary}
						</p>
					)}
				</div>
				<div className="text-primary-color bg-primary-light p-2 rounded-full flex-shrink-0 ml-4">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="h-5 w-5"
						viewBox="0 0 20 20"
						fill="currentColor"
					>
						<path
							fillRule="evenodd"
							d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
							clipRule="evenodd"
						/>
					</svg>
				</div>
			</div>
		</Link>
	);
}
