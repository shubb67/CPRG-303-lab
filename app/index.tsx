import { Link } from "expo-router";

export default function Home() {
  return (
    <div className="flex flex-col items-center gap-4 p-6">
      <h1 className="text-2xl font-bold">Welcome to the Lab</h1>
      <Link href="/lab_3">
        <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
          Go to Lab 3
        </button>
      </Link>
    </div>
  );
}
