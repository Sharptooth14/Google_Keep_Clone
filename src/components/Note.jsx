import { useState } from "react";

export default function Note({ note, deleteNote, updateNote }) {
    const [isEditing, setIsEditing] = useState(false);
    const [title, setTitle] = useState(note.title);
    const [content, setContent] = useState(note.content);

    const handleUpdate = () => {
        updateNote({ ...note, title, content });
        setIsEditing(false);
    };

    return (
        <div className="bg-yellow-100 shadow-md p-4 rounded-lg relative">
            {isEditing ? (
                <>
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className="w-full p-1 border-b border-gray-300"
                    />
                    <textarea
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        className="w-full mt-2 p-1 border-b border-gray-300"
                    />
                    <button onClick={handleUpdate} className="mt-2 px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600">
                        Save
                    </button>
                </>
            ) : (
                <>
                    <h3 className="font-bold">{note.title}</h3>
                    <p className="mt-2">{note.content}</p>
                </>
            )}

            <div className="absolute top-2 right-2 flex space-x-2">
                <button onClick={() => setIsEditing(!isEditing)} className="text-blue-500 hover:text-blue-700">
                    ✏️
                </button>
                <button onClick={() => deleteNote(note.id)} className="text-red-500 hover:text-red-700">
                    🗑️
                </button>
            </div>
        </div>
    );
}
