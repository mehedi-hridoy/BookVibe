const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-neutral text-neutral-content mt-12 rounded">
      <div className="max-w-[1200px] xl:max-w-[1280px] 2xl:max-w-[1440px] mx-auto px-4 py-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm opacity-90 text-center sm:text-left">
            © {year} — All rights reserved. By Mehedi Hasan Hridoy
          </p>
          <div className="flex items-center gap-6">
            <a
              href="https://www.linkedin.com/in/mehedi-hridoy/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn profile of Mehedi Hasan Hridoy"
              title="LinkedIn"
              className="hover:text-blue-400 transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                <path d="M19 3H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2V5a2 2 0 00-2-2zM8.34 18H6.16V9.86h2.18V18zM7.25 8.8a1.26 1.26 0 110-2.52 1.26 1.26 0 010 2.52zM18 18h-2.18v-4.34c0-1.03-.02-2.35-1.43-2.35-1.43 0-1.65 1.12-1.65 2.28V18h-2.18V9.86h2.09v1.11h.03c.29-.55 1-1.11 2.07-1.11 2.22 0 2.63 1.46 2.63 3.36V18z" />
              </svg>
            </a>
            <a
              href="https://github.com/mehedi-hridoy"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub profile of Mehedi Hasan Hridoy"
              title="GitHub"
              className="hover:text-white transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                <path fillRule="evenodd" d="M12 2C6.48 2 2 6.58 2 12.26c0 4.51 2.87 8.33 6.85 9.68.5.1.68-.22.68-.49 0-.24-.01-.87-.01-1.71-2.78.62-3.37-1.36-3.37-1.36-.45-1.18-1.1-1.5-1.1-1.5-.9-.63.07-.62.07-.62 1 .07 1.53 1.05 1.53 1.05.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.55-1.14-4.55-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.31.1-2.73 0 0 .85-.28 2.8 1.05.81-.23 1.68-.35 2.54-.35s1.73.12 2.54.35c1.95-1.33 2.8-1.05 2.8-1.05.55 1.42.2 2.47.1 2.73.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.8-4.57 5.06.36.32.67.95.67 1.92 0 1.39-.01 2.51-.01 2.85 0 .27.18.6.68.49A10.03 10.03 0 0022 12.26C22 6.58 17.52 2 12 2z" clipRule="evenodd" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
