import { format, isToday } from "date-fns";
import ClientSidebarNote from './SidebarNote.client';
interface SidebarNoteProps {
  id: string;
  updated_at: string;
  title: string;
  summary?: string;
}
export default function SidebarNote({
  id,
  updated_at,
  title,
  summary,
}: SidebarNoteProps) {
  const updatedAt = new Date(updated_at);
  const lastUpdatedAt = isToday(updatedAt)
    ? format(updatedAt, "h:mm bb")
    : format(updatedAt, "yyyy-MM-dd");
  return (
    <ClientSidebarNote
      id={id}
      title={title}
      expandedChildren={summary || <i>(No content)</i>}
    >
      <header className="siderbar-note-header">
        <strong className="text-lg">{title}</strong>
        <small className="block text-gray-500">{lastUpdatedAt}</small>
      </header>
    </ClientSidebarNote>
  );
}
