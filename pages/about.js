import Layout from "../components/layout";
import Header from "../components/header";

export default function About() {
  return (
    <div className="bg-[#1b2136] py-4 px-8 text-white flex justify-between items-center z-auto w-full">
      <div className="text-3xl font-extrabold cursor-pointer">TSR</div>

      <div class="relative flex gap-4">
        <button
          type="button"
          class="bg-transparent border-none inline-flex justify-center w-full rounded-md border shadow-sm px-4 py-2  text-sm font-medium text-gray-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-500 focus:ring-gray-800"
          id="menu-button"
          aria-expanded="true"
          aria-haspopup="true"
        >
          Resources
          <svg
            class="-mr-1 ml-2 h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fill-rule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clip-rule="evenodd"
            />
          </svg>
        </button>

        <button
          type="button"
          class="bg-transparent border-none inline-flex justify-center w-full rounded-md border shadow-sm px-4 py-2  text-sm font-medium text-gray-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-500 focus:ring-gray-800"
          id="menu-button"
          aria-expanded="true"
          aria-haspopup="true"
        >
          Data
          <svg
            class="-mr-1 ml-2 h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fill-rule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clip-rule="evenodd"
            />
          </svg>
        </button>
      </div>

      <div
        class="hidden origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
        role="menu"
        aria-orientation="vertical"
        aria-labelledby="menu-button"
        tabindex="-1"
      >
        <div class="py-1" role="none">
          <a
            href="#"
            class="text-gray-700 block px-4 py-2 text-sm"
            role="menuitem"
            tabindex="-1"
            id="menu-item-0"
          >
            Account settings
          </a>
          <a
            href="#"
            class="text-gray-700 block px-4 py-2 text-sm"
            role="menuitem"
            tabindex="-1"
            id="menu-item-1"
          >
            Support
          </a>
          <a
            href="#"
            class="text-gray-700 block px-4 py-2 text-sm"
            role="menuitem"
            tabindex="-1"
            id="menu-item-2"
          >
            License
          </a>
          <form method="POST" action="#" role="none">
            <button
              type="submit"
              class="text-gray-700 block w-full text-left px-4 py-2 text-sm"
              role="menuitem"
              tabindex="-1"
              id="menu-item-3"
            >
              Sign out
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

About.getLayout = function getLayout(page) {
  return (
    <Layout>
      <Header />
      {page}
    </Layout>
  );
};
