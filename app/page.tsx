import LectureList from "@/components/LectureList";
import { getAllLectures } from "@/lib/lectureUtils";

export default async function HomePage() {
	const lectures = await getAllLectures();

	return (
		<main className="fade-in">
			<section className="bg-primary-light py-16">
				<div className="container mx-auto px-4 max-w-4xl">
					<div className="text-center mb-8">
						<h1 className="text-5xl font-bold mb-4 text-primary-color">
							한양대학교 창업 강의
						</h1>
						<p className="text-text-secondary text-xl max-w-2xl mx-auto">
							창업 강의 자료 모음
						</p>
						<div className="w-24 h-1 bg-primary-color mx-auto mt-6"></div>
					</div>
				</div>
			</section>

			<section className="py-12 -mt-8">
				<div className="container mx-auto px-4 max-w-4xl">
					<div className="card bg-white p-8 shadow-lg">
						<div className="flex justify-between items-center mb-8 border-b pb-4">
							<h2 className="text-2xl font-semibold text-primary-color">
								강의 목록
							</h2>
							<span className="text-sm bg-primary-light text-primary-color py-1 px-3 rounded-full font-medium">
								{lectures.length}개의 강의
							</span>
						</div>
						<LectureList lectures={lectures} />
					</div>
				</div>
			</section>
		</main>
	);
}
