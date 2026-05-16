import { AlertCircle, Loader2, Smile } from "lucide-react";
import { useEffect, useState } from "react";
import JokeCard from "./components/JokeCard";
import Pagination from "./components/Pagination";

const App = () => {
  const [jokes, setJokes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const fetchJokes = async (currentPage) => {
    setLoading(true);
    setError(null);
    try {
      const apiUrl = import.meta.env.VITE_API_URL;
      const response = await fetch(`${apiUrl}?page=${currentPage}&limit=10`);

      if (!response.ok) {
        throw new Error("Failed to fetch jokes");
      }

      const rawData = await response.json();

      if (rawData.success && rawData.data) {
        setJokes(rawData.data.data);
        setTotalPages(rawData.data.totalPages);
        setPage(rawData.data.page);
      } else {
        throw new Error(rawData.message || "Invalid API structure");
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchJokes(page);
  }, [page]);

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setPage(newPage);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col py-10 px-4 sm:px-6 lg:px-8">
      <header className="mb-10 text-center">
        <div className="flex items-center justify-center gap-3 mb-4">
          <Smile className="text-yellow-500 w-12 h-12" />
          <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight">
            Jokes Viewer
          </h1>
        </div>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Need a laugh? Browse through our vast collection of jokes. Don't take
          them too seriously!
        </p>
      </header>

      <main className="w-full max-w-4xl mx-auto flex-grow">
        {loading && (
          <div className="flex flex-col items-center justify-center py-20">
            <Loader2 className="w-10 h-10 text-indigo-600 animate-spin mb-4" />
            <p className="text-gray-500 font-medium">Fetching some laughs...</p>
          </div>
        )}

        {error && !loading && (
          <div className="bg-red-50 border border-red-200 rounded-lg p-6 flex flex-col items-center text-center">
            <AlertCircle className="w-10 h-10 text-red-500 mb-4" />
            <h3 className="text-lg font-semibold text-red-800 mb-2">
              Oops! Something went wrong
            </h3>
            <p className="text-red-600">{error}</p>
            <button
              onClick={() => fetchJokes(page)}
              className="mt-6 px-6 py-2 bg-red-100 hover:bg-red-200 text-red-700 font-medium rounded-lg transition-colors"
            >
              Try Again
            </button>
          </div>
        )}

        {!loading && !error && jokes.length > 0 && (
          <>
            <div className="grid gap-6">
              {jokes.map((joke) => (
                <JokeCard key={joke.id} joke={joke} />
              ))}
            </div>

            <Pagination
              currentPage={page}
              totalPages={totalPages}
              onPageChange={handlePageChange}
            />
          </>
        )}

        {!loading && !error && jokes.length === 0 && (
          <div className="text-center py-20 text-gray-500 text-lg">
            No jokes found. Try another page!
          </div>
        )}
      </main>

      <footer className="w-full max-w-4xl mx-auto mt-16 pb-8 text-center text-gray-500 text-sm">
        <p>
          Powered by{" "}
          <a
            href="https://freeapi.app"
            target="_blank"
            rel="noopener noreferrer"
            className="text-indigo-600 hover:underline"
          >
            FreeAPI.app
          </a>{" "}
          | Created by{" "}
          <a
            href="https://ashish.pro"
            target="_blank"
            rel="noopener noreferrer"
            className="text-indigo-600 hover:underline"
          >
            Ashish
          </a>
        </p>
      </footer>
    </div>
  );
};

export default App;
