import Link from "next/link";
import { getLectureByWeek } from "@/lib/lectureUtils";
import ClassCard from "@/components/ClassCard";
import LectureContentRenderer from "@/components/LectureContentRenderer";
import { notFound } from "next/navigation";

type PageProps<T = Record<string, unknown>> = {
	params: Promise<T>;
	searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export default async function LectureDetailPage({
	params,
}: PageProps<{
	weekId: string;
}>) {
	// params를 비동기적으로 처리
	const { weekId } = await params;
	const weekIdNum = parseInt(weekId);

	if (isNaN(weekIdNum)) {
		notFound();
	}

	const lecture = await getLectureByWeek(weekIdNum);

	if (!lecture) {
		notFound();
	}

	return (
		<main className="fade-in">
			<section className="bg-primary-light py-12">
				<div className="container mx-auto px-4 max-w-4xl">
					<div className="mb-4">
						<Link
							href="/"
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
							강의 목록으로 돌아가기
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
					<div className="card bg-white p-8 shadow-lg mb-8">
						<h2 className="text-2xl font-semibold mb-6 pb-3 border-b border-primary-light text-primary-color">
							강의 내용
						</h2>
						<LectureContentRenderer content={lecture.content} />
					</div>

					<div className="card bg-white p-8 shadow-lg">
						<h2 className="text-2xl font-semibold mb-6 pb-3 border-b border-primary-light text-primary-color">
							교시별 수업
						</h2>
						{lecture.classes && lecture.classes.length > 0 ? (
							<div className="space-y-4">
								{lecture.classes.map((classItem) => (
									<ClassCard
										key={classItem.id}
										weekId={lecture.week}
										classData={classItem}
									/>
								))}
							</div>
						) : (
							<div className="text-center py-8 text-text-secondary bg-bg-light rounded-lg">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="h-12 w-12 mx-auto mb-4 text-text-light"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
									/>
								</svg>
								<p>등록된 수업이 없습니다.</p>
							</div>
						)}
					</div>
				</div>
			</section>
		</main>
	);
}
