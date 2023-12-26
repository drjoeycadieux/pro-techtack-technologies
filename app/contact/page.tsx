import Link from "next/link";

export default function Contact() {
  return (
    <div>
      <head>
        <title>Techtack-Technologies | Contact</title>
      </head>
      <div className="bg-gray-800 p-9">
        <ul className="block">
          <li className="inline m-5">
            <p className="text-white inline font-bold font-sans text-3xl">
              Techtack-Technologies
            </p>
          </li>
          <li className="text-white font-bold inline m-8 hover:text-gray-600">
            <Link href="/">Welcome</Link>
          </li>
          <li className="text-white font-bold inline m-8 hover:text-gray-600">
            <Link href="/about">About</Link>
          </li>
          <li className="text-white font-bold inline m-8 hover:text-gray-600">
            <Link href="/blog">Blog</Link>
          </li>
          <li className="text-white font-bold inline m-8 hover:text-gray-600">
            <Link href="/portal">Portal</Link>
          </li>
          <li className="text-white font-bold inline m-8 hover:text-gray-600">
            <Link href="https://oldversion-techtacktechnologies.netlify.app/">
              Old Version
            </Link>
          </li>
        </ul>
      </div>
      <br />
      <div className="bg-gray-700 p-9 pt-10 w-11/12 m-auto">
        <p className="text-white font-sans font-bold text-3xl text-center">
          Contact
          <div className="inner1"></div>
        </p>
      </div>
    </div>
  );
}
