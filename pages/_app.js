import "tailwindcss/tailwind.css";
import layout from "../components/layout";

function MyApp({ Component, pageProps }) {
  return (
    <layout>
      <Component {...pageProps} />
    </layout>
  );
}

export default MyApp;
