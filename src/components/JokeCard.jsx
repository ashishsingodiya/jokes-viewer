import { Tag } from "lucide-react";

const JokeCard = ({ joke }) => {
  return (
    <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300">
      <div className="flex gap-2 mb-4 flex-wrap">
        {joke.categories?.length > 0 ? (
          joke.categories.map((cat, idx) => (
            <span
              key={idx}
              className="flex items-center gap-1.5 px-3 py-1 bg-indigo-50 text-indigo-700 text-xs font-semibold rounded-full uppercase tracking-wider"
            >
              <Tag size={12} />
              {cat}
            </span>
          ))
        ) : (
          <span className="flex items-center gap-1.5 px-3 py-1 bg-gray-100 text-gray-600 text-xs font-semibold rounded-full uppercase tracking-wider">
            <Tag size={12} />
            General
          </span>
        )}
      </div>
      <p className="text-gray-800 text-lg leading-relaxed">{joke.content}</p>
    </div>
  );
};

export default JokeCard;
