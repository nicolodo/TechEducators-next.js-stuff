
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1>This is the HomePage!</h1>
      <p>
        <Link href="/about">About</Link>
      </p>
    </>
  );
}
