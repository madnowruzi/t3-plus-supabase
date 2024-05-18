"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";

import { api } from "~/lib/trpc/react";

export function CreatePost() {
  const router = useRouter();
  const [name, setName] = useState("");

  const createPost = api.post.create.useMutation({
    onSuccess: () => {
      router.refresh();
      setName("");
    },
  });

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="text-xl">Add a post</CardTitle>
      </CardHeader>
      <CardContent>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            createPost.mutate({ name });
          }}
          className="flex flex-col gap-2"
        >
          <Input type="text" value={name} onChange={(e) => setName(e.target.value)} />
          <Button disabled={createPost.isPending}>
            {createPost.isPending ? "Submitting..." : "Submit"}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
