import { Suspense } from "react";
import { auth } from "~/server/auth";
import { api } from "~/lib/trpc/server";
import { CreatePost } from "~/app/(public)/create-post";

export default async function Home() {
  return (
    <div className="container flex flex-col gap-8 md:flex-row">
      <Suspense fallback={null}>
        <AddPost />
      </Suspense>

      <div className="order-2 flex-1 md:order-1">
        <Suspense fallback={null}>
          <Posts />
        </Suspense>
      </div>
    </div>
  );
}

async function Posts() {
  const { posts } = await api.post.getLatest();

  return (
    <div className="flex flex-col gap-4">
      {posts.map((post) => (
        <div key={post.id} className="rounded-xl bg-white/10 p-4">
          <p className="text-2xl font-bold">{post.name}</p>
        </div>
      ))}
    </div>
  );
}

async function AddPost() {
  const { user } = await auth();
  if (!user) return null;

  return (
    <div className="order-1 ml-auto w-full md:order-2 md:max-w-sm">
      <CreatePost />
    </div>
  );
}
