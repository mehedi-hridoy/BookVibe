import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { getStoredReadList, getStoredWishList, removeFromStoredReadList, removeFromStoredWishList } from "../../utility/addtoDb";
import { Link } from "react-router-dom";

const ListedBooks = () => {
  // frontend demo: load all then filter by stored ids
  const allBooks = useLoaderData();

  const [readList, setReadList] = useState([]);
  const [wishList, setWishList] = useState([]);
  const [sortKey, setSortKey] = useState("");

  useEffect(() => {
    const storedReadIds = (getStoredReadList() || []).map((id) => parseInt(id));
    const storedWishIds = (getStoredWishList() || []).map((id) => parseInt(id));

    setReadList(allBooks.filter((b) => storedReadIds.includes(b.bookId)));
    setWishList(allBooks.filter((b) => storedWishIds.includes(b.bookId)));
  }, [allBooks]);

  const Row = ({ book, listType }) => {
    const { image, bookName, author, tags = [], publisher, yearOfPublishing, category, rating, totalPages } = book;
    return (
      <div className="rounded-2xl border border-gray-200 p-4 sm:p-6 lg:p-8 shadow-sm">
        <div className="grid grid-cols-[96px_1fr] sm:grid-cols-[140px_1fr] gap-4 sm:gap-8 items-start">
          <div className="rounded-2xl bg-gray-100 p-3 sm:p-5 flex items-center justify-center">
            <img src={image} alt={bookName} className="max-h-24 sm:max-h-32 w-auto object-contain transform-gpu" style={{ transform: 'perspective(1000px) rotateY(16deg) rotateX(4deg) translateZ(6px)' }} />
          </div>
          <div>
            <h3 className="font-serif text-xl sm:text-3xl font-extrabold text-gray-900">{bookName}</h3>
            <p className="mt-1 sm:mt-2 text-gray-700 text-sm sm:text-base">By : {author}</p>

            <div className="mt-3 sm:mt-4 flex flex-wrap items-center gap-3 sm:gap-6 text-gray-700">
              <div className="flex items-center gap-2"><span className="font-semibold">Tag</span>
                <div className="flex flex-wrap gap-2">
                  {tags.map((t, i) => (
                    <span key={i} className="px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full bg-[#EAF7E7] text-[#23BE0A] text-xs sm:text-sm font-medium">#{t}</span>
                  ))}
                </div>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-gray-500" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2C8.14 2 5 5.14 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.86-3.14-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z"/></svg>
                <span className="text-sm sm:text-base">Year: {yearOfPublishing}</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-gray-500" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M18 2H6a2 2 0 00-2 2v16a1 1 0 001.45.89L12 18.11l6.55 2.78A1 1 0 0020 20V4a2 2 0 00-2-2z"/></svg>
                <span className="text-sm sm:text-base">Page {totalPages}</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-gray-500" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M4 4h16v2H4zm0 4h16v10a2 2 0 01-2 2H6a2 2 0 01-2-2V8zm4 3h2v6H8zm4 0h2v6h-2zm4 0h2v6h-2z"/></svg>
                <span className="text-sm sm:text-base">Publisher: {publisher}</span>
              </div>
            </div>

            <hr className="my-4 sm:my-5" />

            <div className="flex flex-wrap items-center gap-2 sm:gap-4">
              <span className="px-3 py-1.5 rounded-full bg-blue-50 text-blue-600 text-xs sm:text-sm font-medium">Category: {category}</span>
              <span className="px-3 py-1.5 rounded-full bg-amber-50 text-amber-600 text-xs sm:text-sm font-medium">Rating: {Number(rating ?? 0).toFixed(1)}</span>
              <Link to={`/books/${book.bookId}`} className="px-4 py-1.5 sm:px-5 sm:py-2 rounded-full bg-green-500 text-white text-xs sm:text-sm font-semibold hover:bg-green-600">View Details</Link>
              {listType === 'read' ? (
                <button onClick={() => handleRemoveRead(book.bookId)} className="px-4 py-1.5 sm:px-5 sm:py-2 rounded-full border border-gray-300 text-gray-800 text-xs sm:text-sm hover:bg-gray-50">Remove</button>
              ) : (
                <button onClick={() => handleRemoveWish(book.bookId)} className="px-4 py-1.5 sm:px-5 sm:py-2 rounded-full border border-gray-300 text-gray-800 text-xs sm:text-sm hover:bg-gray-50">Remove</button>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  };

  const handleRemoveRead = (id) => {
    removeFromStoredReadList(id);
    setReadList(prev => prev.filter(b => b.bookId !== id));
  };

  const handleRemoveWish = (id) => {
    removeFromStoredWishList(id);
    setWishList(prev => prev.filter(b => b.bookId !== id));
  };

  const sortBooks = (arr) => {
    if (!sortKey) return arr;
    const copy = [...arr];
    if (sortKey === 'rating') {
      copy.sort((a,b) => (b.rating ?? 0) - (a.rating ?? 0));
    } else if (sortKey === 'pages') {
      copy.sort((a,b) => (b.totalPages ?? 0) - (a.totalPages ?? 0));
    } else if (sortKey === 'year') {
      copy.sort((a,b) => (b.yearOfPublishing ?? 0) - (a.yearOfPublishing ?? 0));
    }
    return copy;
  };

  return (
    <div className="my-10">
      <h3 className="text-4xl font-extrabold font-serif text-center mb-8">Listed Books</h3>

      <div className="flex justify-center mb-6">
        <div className="inline-flex items-center gap-2">
          <button className="px-5 py-2 rounded-xl bg-green-500 text-white font-semibold">Sort By</button>
          <select value={sortKey} onChange={(e)=>setSortKey(e.target.value)} className="px-3 py-2 rounded-xl border">
            <option value="">Default</option>
            <option value="rating">Rating</option>
            <option value="pages">Number of Pages</option>
            <option value="year">Publishing Year</option>
          </select>
        </div>
      </div>

      <Tabs>
        <TabList>
          <Tab>Read Books</Tab>
          <Tab>Wishlist Books</Tab>
        </TabList>

        <TabPanel>
          <div className="flex flex-col gap-6">
            {readList.length === 0 && (
              <p className="text-gray-600 text-center py-6">No books marked as read yet.</p>
            )}
            {sortBooks(readList).map((book) => (
              <Row key={`read-${book.bookId}`} book={book} listType="read" />
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="flex flex-col gap-6">
            {wishList.length === 0 && (
              <p className="text-gray-600 text-center py-6">No books in wishlist yet.</p>
            )}
            {sortBooks(wishList).map((book) => (
              <Row key={`wish-${book.bookId}`} book={book} listType="wish" />
            ))}
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ListedBooks;
