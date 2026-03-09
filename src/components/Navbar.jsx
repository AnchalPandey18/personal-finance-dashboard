function Navbar({ dark, setDark }) {

  return (
    <div className={`${dark ? "bg-gray-800 text-white" : "bg-blue-600 text-white"} py-4 shadow`}>

      <div className="max-w-5xl mx-auto flex justify-between items-center">

        <h1 className="text-xl font-semibold">
          💰 Personal Finance Tracker
        </h1>

        <button
          onClick={() => setDark(!dark)}
          className="bg-white text-blue-600 px-3 py-1 rounded"
        >
          {dark ? "☀ Light" : "🌙 Dark"}
        </button>

      </div>

    </div>
  );
}

export default Navbar;