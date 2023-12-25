import Link from "next/link";

export default function Portal() {
  return (
    <div>
      <div className="bg-gray-800 p-9">
        <ul className="block">
          <li className="inline m-5">
            <p className="text-white inline font-bold font-sans text-3xl">
              Techtack-Technologies | Portal
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
        </ul>
      </div>
    </div>
  );
}
