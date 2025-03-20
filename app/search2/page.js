'use client';

import Search from '../../components/Search';

export default function Home() {
    return (
        <div className="container mx-auto p-4">
            <h1 className="text-xl font-bold mb-4">CSV Search</h1>
            <Search />
        </div>
    );
}
