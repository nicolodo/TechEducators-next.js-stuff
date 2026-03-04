
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    // flex-1 causes main to expand every available pixel of empty space
    <main className="flex-1 bg-red-50">
      <h1>This is the HomePage!</h1>
      <p>Link to
        <Link href="/about"> About </Link>
      page </p>
      <h1 className=
      "text-sky-500/100 dark:text-sky-400"
        >h1 tag I'm putting in the home page</h1>
      <h1 className=
      // the /50 lets know its opacity has been halved by 50
      "text-sky-500/50 dark:text-sky-400"
        >h1 tag I'm putting in the home page</h1>
      {/* the ... according to ... is just further info ommited */}
      <p class=
      "text-[#ff9511]/100 hover:text-green-500"
      >this is showing hover changes</p>
      <p class=
      "sm:text-pink-300 md:text-purple-400 lg:text-blue-500 "
      >p tag thats is affected on page resize</p>
    </main>
  );
}
