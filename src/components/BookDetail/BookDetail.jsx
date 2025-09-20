import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { addToStoredReadList, addToStoredWishList } from '../../utility/addtoDb';

const BookDetail = () => {
    const { bookId } = useParams();
    const id = parseInt(bookId);

    const data = useLoaderData();
    const book = data?.find((b) => b.bookId === id);

    if (!book) {
        return (
            <div className="my-16 text-center">
                <h2 className="text-2xl font-bold">Book not found</h2>
                <p className="text-gray-600 mt-2">We couldn't find the book you're looking for.</p>
            </div>
        );
    }

    const {
        bookName,
        author,
        image,
        review,
        totalPages,
        rating,
        category,
        tags = [],
        publisher,
        yearOfPublishing,
    } = book;

    const handleMarkAsRead = (id)  =>{
        /**
         * 1. understand what to store or save => bookId
         * 2. where to store : database
         * 3. array , list , collection: 
         * 4. check if the book is alreay in the list 
         * 5. if not , then add the book to the list 
         * 6. if yes, do not dd the book 
         * 
         */

    addToStoredReadList(parseInt(id));

    }

    const handleAddtoWishList = (id) => {
        // update sooon 
    addToStoredWishList(parseInt(id));
    }

        return (
            <section className="my-12 lg:my-16">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-stretch">
                    {/* Left: Image on light panel */}
                    <div className="rounded-2xl bg-gray-100 p-6 sm:p-8 lg:p-10 h-full lg:min-h-[560px] flex">
                        <div className="flex items-center justify-center grow">
                                        <img
                                            src={image}
                                            alt={bookName}
                                            className="w-auto object-contain max-h-[500px] lg:max-h-[520px] drop-shadow-2xl transform-gpu"
                                            style={{ transform: 'perspective(1100px) rotateY(22deg) rotateX(6deg) translateZ(12px)' }}
                                            draggable="false"
                                        />
                        </div>
                    </div>

                    {/* Right: Details */}
                    <div className="h-full flex flex-col lg:min-h-[560px]">
                        <h1 className="font-serif text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight">
                        {bookName}
                    </h1>
                        <p className="mt-3 text-lg text-gray-700">By : <span className="font-medium">{author}</span></p>

                        <hr className="my-4 border-gray-200" />

                        <p className="text-xl font-semibold text-gray-800">{category}</p>

                        <hr className="my-4 border-gray-200" />

                    <div>
                        <p className="font-semibold text-gray-900">Review :</p>
                                    <p className="mt-2 text-gray-700 leading-relaxed">
                            {review}
                        </p>
                    </div>

                                <div className="mt-5">
                        <p className="font-semibold text-gray-900">Tag</p>
                        <div className="mt-3 flex flex-wrap gap-3">
                            {tags.map((tag, idx) => (
                                <span
                                    key={idx}
                                    className="px-3 py-1 rounded-full bg-[#EAF7E7] text-[#23BE0A] text-sm font-medium"
                                >
                                    #{tag}
                                </span>
                            ))}
                        </div>
                    </div>

                                <hr className="my-5 border-gray-200" />

                    <dl className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8 text-gray-800">
                        <div className="flex items-center justify-between sm:block">
                            <dt className="text-gray-500">Number of Pages:</dt>
                            <dd className="font-semibold">{totalPages}</dd>
                        </div>
                        <div className="flex items-center justify-between sm:block">
                            <dt className="text-gray-500">Publisher:</dt>
                            <dd className="font-semibold">{publisher}</dd>
                        </div>
                        <div className="flex items-center justify-between sm:block">
                            <dt className="text-gray-500">Year of Publishing:</dt>
                            <dd className="font-semibold">{yearOfPublishing}</dd>
                        </div>
                        <div className="flex items-center justify-between sm:block">
                            <dt className="text-gray-500">Rating:</dt>
                            <dd className="font-semibold">{Number(rating ?? 0).toFixed(1)}</dd>
                        </div>
                    </dl>

                                <div className="mt-6 flex gap-4">
                        <button onClick={ () =>
                            handleMarkAsRead(bookId)} className="px-6 py-3 rounded-xl border border-gray-300 text-gray-800 font-semibold hover:bg-gray-50">
                            Mark As Read
                        </button>
                        <button onClick={ () => 
                        handleAddtoWishList(bookId)

                        } className="px-6 py-3 rounded-xl bg-sky-500 text-white font-semibold hover:bg-sky-600">
                            Add to Wishlist
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BookDetail; 