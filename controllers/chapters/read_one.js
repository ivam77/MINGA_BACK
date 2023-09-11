import Chapter from "../../models/Chapter.js";
import Manga from "../../models/Manga.js";

const read_one = async (req, res, next) => {
    try {
        const projection = {
            __v: 0,
            createdAt: 0,
            updatedAt: 0,
            author_id: 0,
        };
// hola
        const mangaId = req.query.manga_id;
        const chapterId = req.params.id;

        const manga = await Manga.findById(mangaId).select(projection);
        if (!manga) {
            return res.status(404).json({ message: "Manga not found" });
        }

        const chapter = await Chapter.findOne(
            { manga_id: mangaId, _id: chapterId },
            "pages title order manga_id _id"
        ).select(projection);
        if (!chapter) {
            return res.status(404).json({ message: "Chapter not found" });
        }

        const chapters = await Chapter.find({ manga_id: mangaId }).select(projection);
        if (!chapters || chapters.length === 0) {
            return res.status(404).json({ message: "Chapters not found" });
        }

        const currentChapterIndex = chapters.findIndex(
            (chapter) => chapter._id.toString() === chapterId
        );

        const nextChapterIndex = currentChapterIndex + 1;
        const nextChapter =
            nextChapterIndex < chapters.length ? chapters[nextChapterIndex] : null;

        return res.status(200).json({
            manga: manga,
            chapter: {
                title: chapter.title,
                order: chapter.order,
                manga_id: chapter.manga_id,
                pages: chapter.pages,
                _id: chapter._id,
            },
            next: nextChapter ? nextChapter._id : null,
            prev: currentChapterIndex > 0 ? chapters[currentChapterIndex - 1]._id : null,
        });
    } catch (error) {
        next(error);
    }
};


export default read_one;

