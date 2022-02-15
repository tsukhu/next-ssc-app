import { useState } from "react";
import { ChevronDownIcon, ChevronRightIcon } from "@heroicons/react/solid";
import Link from "next/link";

export default function SidebarNote({
  id,
  title,
  children,
  expandedChildren,
}: {
  id: string;
  title: string;
  children: any;
  expandedChildren: any;
}) {
  const [isExpanded, setIsExpanded] = useState(false);
  // item.current ? 'bg-gray-100 text-gray-900' :'text-gray-500'
  // isExpanded ? 'note-expanded': '',
  return (
    <div>
      <div
        className={`group flex items-center px-2 py-2 text-sm font-medium rounded-md w-full justify-between`}
      >
        <Link href={`/${id}`}>
          <a className="flex-1 bg-blue-50 p-4 border">{children}</a>
        </Link>
        <button
          className="mr-3 flex-shrink-0 h-6 w-6"
          onClick={(e) => {
            e.stopPropagation();
            setIsExpanded(!isExpanded);
          }}
        >
          {isExpanded ? <ChevronDownIcon /> : <ChevronRightIcon />}
        </button>
      </div>
      {isExpanded && <div>{expandedChildren}</div>}
    </div>
  );
}
