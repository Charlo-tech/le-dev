import { getSession } from "next-auth/react";
import { useSession, signIn, signOut } from "next-auth/react";
import Link from 'next/link';

export default function Home() {
  const { data: session } = useSession();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <main className="flex flex-col items-center justify-center flex-1 px-20 text-center">
        <h1 className="text-6xl font-bold">
          Welcome to Developer RPG!
        </h1>

        <p className="mt-3 text-2xl">
          Level up your developer skills by building and competing with friends.
        </p>

        {!session && (
          <div className="mt-6">
            <p className="text-xl mb-4">Please sign in to continue</p>
            <button
              onClick={() => signIn()}
              className="px-6 py-2 text-lg font-medium text-white bg-blue-500 rounded-md hover:bg-blue-700"
            >
              Sign in
            </button>
          </div>
        )}

        {session && (
          <div className="mt-6">
            <p className="text-xl mb-4">Signed in as {session.user.email}</p>
            <Link href="/profile">
              <a className="px-6 py-2 text-lg font-medium text-white bg-green-500 rounded-md hover:bg-green-700">
                Go to Profile
              </a>
            </Link>
            <button
              onClick={() => signOut()}
              className="mt-4 px-6 py-2 text-lg font-medium text-white bg-red-500 rounded-md hover:bg-red-700"
            >
              Sign out
            </button>
          </div>
        )}

        <div className="mt-6">
          <Link href="/signup">
            <a className="px-6 py-2 text-lg font-medium text-white bg-purple-500 rounded-md hover:bg-purple-700">
              Sign Up
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

export async function getServerSideProps(context) {
  const session = await getSession(context);
  return {
    props: {
      session,
    },
  };
}
