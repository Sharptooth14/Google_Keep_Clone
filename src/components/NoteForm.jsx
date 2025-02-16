import { useState } from "react";

export default function NoteForm({ addNote }) {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!title.trim() || !content.trim()) return;

        addNote({ id: Date.now(), title, content });
        setTitle("");
        setContent("");
    };

    return (
        <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg p-4 mt-4">
            <input
                type="text"
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full p-2 border-b border-gray-300 focus:outline-none"
            />
            <textarea
                placeholder="Take a note..."
                value={content}
                onChange={(e) => setContent(e.target.value)}
                className="w-full p-2 mt-2 border-b border-gray-300 focus:outline-none"
            />
            <button type="submit" className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                Add Note
            </button>
        </form>
    );
}
