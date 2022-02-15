//import { notes } from "../data/notes";
import fetchData from "../utils/fetch-data";
import useData from "../utils/use-data";
import SidebarNote from "./SidebarNote.server";

const NoteList = () => {
  const notes = useData(`notes`, () => fetchData())
  return (
    <ul className="">
      {notes.map((note: any) => (
        <li key={note.id} className="">
          <SidebarNote {...note} />
        </li>
      ))}
    </ul>
  );
};

export default NoteList;
