import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '../public/vite.svg';
import './App.css';
import { useEffect } from "react";
import { fetchBookById, Book } from "./services/bookService";

function App() {
    const [count, setCount] = useState(0)

    //const [book, setBook] = useState<Book>();
    //const [loading, setLoading] = useState<boolean>(true);
    //const [error, setError] = useState<string | null>(null);

    //useEffect(() => {
    //    const getBookById = async () => {
    //        try {
    //            const bookData = await fetchBookById(1);
    //            setBook(bookData);
    //            setLoading(false);
    //        } catch (err) {
    //            setError("Failed to load books");
    //            setLoading(false);
    //        }
    //    };

    //    getBookById();
    //}, [])

    //if (loading) return <p>Loading...</p>;
    //if (error) return <p>{error}</p>;

    return (
        <>
            <div>
                <a href="https://vite.dev" target="_blank">
                    <img src={viteLogo} className="logo" alt="Vite logo" />
                </a>
                <a href="https://react.dev" target="_blank">
                    <img src={reactLogo} className="logo react" alt="React logo" />
                </a>
            </div>
            <h1>Vite + React</h1>
            <div className="card">
                <button onClick={() => setCount((count) => count + 1)}>
                    count is {count}
                </button>
                <p>
                    Edit <code>src/App.jsx</code> and save to test HMR
                </p>
            </div>
            <p className="read-the-docs">
                Click on the Vite and React logos to learn more
            </p>
            <div>
                <h1>Book By Id</h1>
                <ul>
                    {/*<li key={book?.id}>*/}
                    {/*    {book?.title} by {book?.author}*/}
                    {/*</li>*/}
                </ul>
            </div>
        </>
    )
};

export default App;
