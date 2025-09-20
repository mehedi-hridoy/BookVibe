import React from "react";
import { Link } from "react-router-dom";

const Book = ({ book }) => {
  const { image, bookName, author, tags, category, rating, bookId } = book;

  return (
    <Link to={`/books/${bookId}`} className="block">
      <div className="w-full rounded-2xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
        <figure className="rounded-2xl bg-gray-100 h-64 flex items-center justify-center">
          <img
            src={image}
            alt={bookName}
            className="w-auto object-contain max-h-32 md:max-h-40 lg:max-h-44 drop-shadow-2xl transition-transform duration-300 [transform:perspective(1000px)_rotateY(-16deg)_rotateX(4deg)_translateZ(6px)]"
          />
        </figure>
        <div className="mt-6">
          <div className="flex flex-wrap gap-3 mb-4">
            {tags?.map((tag, index) => (
              <span
                key={index}
                className="px-3 py-1 rounded-full bg-[#EAF7E7] text-[#23BE0A] text-sm font-medium"
              >
                {tag}
              </span>
            ))}
          </div>
          <h2 className="font-serif text-2xl md:text-3xl font-extrabold text-gray-900 leading-snug">
            {bookName}
          </h2>
          <p className="mt-2 text-gray-600">By : {author}</p>
          <div className="my-5 border-t border-dashed border-gray-200" />
          <div className="flex items-center justify-between">
            <span className="text-gray-700">{category}</span>
            <span className="flex items-center gap-2 text-gray-900">
              {Number(rating ?? 0).toFixed(2)}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-5 h-5 text-black"
                aria-label="rating star"
              >
                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.62L12 2 9.19 8.62 2 9.24l5.46 4.73L5.82 21z" />
              </svg>
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Book;
