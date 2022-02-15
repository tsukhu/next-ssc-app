import useSWR from "swr";
import { fetcher } from "../utils/fetcher";

export interface CommentsProps {
    id: string;
}
export default function Comments({ id }: CommentsProps) {
    const { data } = useSWR(
        `/api/comments?${id}`,
        () => fetcher("/api/comments", id),
        { suspense: true ,}
    );
    const { comments } = data;
    return (
        <div className="flex flex-col w-full space-x-2">
            <h2 className="text-2xl font-bold">{comments?.length??0} Comments</h2>
            {comments?.map((comment: string, index: number) => (
                <div
                    key={`${id}-comment-${index}`}
                    className="p-2 m-2 bg-sky-700 text-white text-sm"
                >
                    {comment}
                </div>
            ))}
        </div>
    );
}
