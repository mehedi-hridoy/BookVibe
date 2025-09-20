import React from "react";
import bannerImg from '../../assets/books.png';

const Banner = () => {
  const scrollToBooks = () => {
    const el = document.getElementById('books');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };
  return (
    <section className="mt-6 rounded-3xl bg-gray-100 px-4 py-8 sm:px-6 sm:py-10 lg:px-10 lg:py-14 2xl:px-12 2xl:py-16">
      <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
        <div className="order-2 lg:order-1 text-center lg:text-left">
          <h1 className="text-3xl leading-tight font-extrabold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl 2xl:text-[56px] max-w-[640px]">
            <span className="block">Books to freshen up</span>
            <span className="block">your bookshelf</span>
          </h1>
          <div className="mt-8">
            <button onClick={scrollToBooks} className="px-8 py-4 rounded-xl bg-green-500 text-white text-lg font-semibold hover:bg-green-600 transition-colors shadow-lg">
              View The List
            </button>
          </div>
        </div>
  <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
          <img
            src={bannerImg}
            alt="Featured book"
            className="w-full max-w-[200px] sm:max-w-[240px] md:max-w-[280px] lg:max-w-[320px] xl:max-w-[340px] 2xl:max-w-[360px] drop-shadow-2xl [transform:perspective(1000px)_rotateY(-12deg)_rotateX(3deg)_translateZ(0)]"
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;
