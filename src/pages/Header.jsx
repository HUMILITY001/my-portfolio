export default function Header() {
  return (
    <div className="my-15 ml-5 md:w-[65%] md:text-center md:mx-auto">
      <h1 className="flex items-center md:justify-center leading-8 capitalize ubuntu-bold text-2xl md:text-4xl">
        Hey, I'm
        <span>
          <img
            src="../../public/profile.jpg"
            className="h-13 hover:scale-110 transition-all md:h-18 rotate-8 shadow-xl/20 rounded-2xl border-3 mx-1.5 border-gray-200"
          />
        </span>
        tega,
      </h1>
      <h1 className="leading-8 capitalize ubuntu-bold text-2xl md:text-4xl">
        a web developer (front-end focused) and web-3 builder.
      </h1>

      <p className="text-xl text-gray-600 pt-1.5  md:mx-auto mb-10">
        Crafting seamless web experiences and interactive interfaces. Passionate
        about modern JavaScript frameworks, responsive design, and bringing
        creative visions to life through code.
      </p>

      <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
        <a
          href="https://x.com/0xtegaH"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-black text-white px-8 py-2 rounded-xl hover:bg-gray-800 transition-all transform hover:scale-105 flex items-center space-x-2"
        >
          <span>Let's Talk</span>
        </a>
        <div className="bg-lime-200 px-3 py-2 rounded-xl flex items-center space-x-2 text-green-600">
          <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
          <span>Available for new projects</span>
        </div>
      </div>
    </div>
  );
}
