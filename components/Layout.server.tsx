import React, { Suspense } from "react";
import NoteList from "../components/NoteList.server";
import { Spinner } from "../components/Spinner.server";

const Layout: React.FC = ({ children }) => {
    return (
        <div className="flex">
            <div className="h-screen w-1/4 bg-gray-100">
                <Suspense fallback={<Spinner />}>
                    <NoteList />
                </Suspense>
            </div>
            <div>{children}</div>
        </div>
    );
};

export default Layout;