import Head from "next/head";
import Header from "./header";


export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Tailwind | Website</title>
      </Head>
      <Header />
      <main>{children}</main>
    </>
  );
}
