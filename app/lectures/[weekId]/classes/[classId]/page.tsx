import Link from "next/link";
import {
	getLectureByWeek,
	getClassByLectureAndPeriod,
} from "@/lib/lectureUtils";
import ClassDetail from "@/components/ClassDetail";
import { notFound } from "next/navigation";

type PageProps<T = Record<string, unknown>> = {
	params: Promise<T>;
	searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export default async function ClassDetailPage({
	params,
}: PageProps<{
	weekId: string;
	classId: string;
}>) {
	// params를 비동기적으로 처리
	const { weekId, classId } = await params;
	const weekIdNum = parseInt(weekId);
	const classIdNum = parseInt(classId);

	if (isNaN(weekIdNum) || isNaN(classIdNum)) {
		notFound();
	}

	const lecture = await getLectureByWeek(weekIdNum);

	if (!lecture) {
		notFound();
	}

	const classData = await getClassByLectureAndPeriod(lecture.id, classIdNum);

	if (!classData) {
		notFound();
	}

	return (
		<main className="fade-in">
			<section className="bg-primary-light py-12">
				<div className="container mx-auto px-4 max-w-4xl">
					<div className="mb-4">
						<Link
							href={`/lectures/${weekId}`}
							className="text-primary-color hover:underline mb-4 inline-flex items-center"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-5 w-5 mr-1"
								viewBox="0 0 20 20"
								fill="currentColor"
							>
								<path
									fillRule="evenodd"
									d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
									clipRule="evenodd"
								/>
							</svg>
							{lecture.week}주차 강의로 돌아가기
						</Link>
					</div>
					<h1 className="text-3xl font-bold mb-3 text-primary-color">
						{lecture.week}주차: {lecture.title}
					</h1>
					<div className="flex items-center text-text-secondary mb-4">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-5 w-5 mr-1"
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
						<span>{lecture.date}</span>
					</div>
				</div>
			</section>

			<section className="py-12 -mt-6">
				<div className="container mx-auto px-4 max-w-4xl">
					<ClassDetail classData={classData} />
				</div>
			</section>
		</main>
	);
}
