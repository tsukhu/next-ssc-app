import { format } from "date-fns";
import React from "react";
import fetchData from "../utils/fetch-data";
import useData from "../utils/use-data";
import Comments from "./Comments.client";
import { Spinner } from "./Spinner.server";

export default function Note({ selectedId = 1 }) {
  const notes = useData(`notes`, () => fetchData())
  const note = notes[selectedId - 1];
  if (!note) {
    return <></>;
  }
  const { title, updated_at, id, body } = note;
  const updatedAt = new Date(updated_at);
  return (
    <div>
      <div className="mb-4">
        <h1 className="text-4xl font-bold">{title}</h1>
        <div role="menubar" className="text-lg">
          <small className="text-gray-500" role="status">
            Last updated on {format(updatedAt, "d MMM yyyy")}
          </small>
        </div>
        <div className="bg-gray-100">{body}</div>
      </div>
      <React.Suspense fallback={<Spinner />}>
        <Comments id={id} />
      </React.Suspense>
    </div>
  );
}
