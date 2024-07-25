import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <main className="flex flex-col items-center justify-center flex-1 px-20 text-center">
        <h1 className="text-6xl font-bold">
          Welcome to Developer RPG!
        </h1>

        <p className="mt-3 text-2xl">
          Level up your developer skills by building and competing with friends.
        </p>

        <div className="mt-6">
          <Link href="/profile">
            <a className="px-6 py-2 text-lg font-medium text-white bg-green-500 rounded-md hover:bg-green-700">
              Go to Profile
            </a>
          </Link>
        </div>

        <div className="mt-6">
          <Link href="/leaderboard">
            <a className="px-6 py-2 text-lg font-medium text-white bg-yellow-500 rounded-md hover:bg-yellow-700">
              View Leaderboard
            </a>
          </Link>
        </div>
      </main>
    </div>
  );
}