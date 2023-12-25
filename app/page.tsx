// import Link from "next/link";
"use client";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <main>
      <div className="bg-gray-800 p-9">
        <ul className="block">
          <li className="inline m-5">
            <p className="text-white inline font-bold font-sans text-3xl">
              Techtack-Technologies
            </p>
          </li>
          <li className="text-white font-bold inline m-8 hover:text-gray-600">
            <button onClick={() => router.push("/")}>Welcome</button>
          </li>
          <li className="text-white font-bold inline m-8 hover:text-gray-600">
            <button onClick={() => router.push("/about")}>About</button>
          </li>
          <li className="text-white font-bold inline m-8 hover:text-gray-600">
            <button onClick={() => router.push("/portal")}>Portal</button>
          </li>
        </ul>
      </div>
      <div className="h-screen bg-gray-700">
        <div className="container-md m-auto p-9 pt-10">
          <div className="bg-gray-600 p-9 rounded">
            <h3 className="text-white font-sans text-center font-bold">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero
              exercitationem adipisci tempore fugit nobis, id omnis dolor
              necessitatibus commodi fuga ex doloremque iusto excepturi modi
              minus error ab sunt natus?
            </h3>
          </div>
        </div>
      </div>
      <div className="bg-gray-800 p-6">
        <p className="text-white font-mono text-center">
          &copy; Copyright 2023 Techtack-Technologies. All right reserved.
        </p>
      </div>
      <div className="bg-gray-900 p-5">
        <p className="text-white font-bold font-sans text-center">
          Help us improve our website by sending feedback about your usage of
          our website.
          <a className="text-blue-600 hover:text-blue-400" href="#">
            Send FeedBack!
          </a>
        </p>
      </div>
    </main>
  );
}
