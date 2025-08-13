"use client";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/app/context/AuthContext";
import Card from "@/app/ui/Card";
import Spinner from "@/app/ui/Spinner";
import CreatePostButton from "@/app/ui/CreatePostButton";
import LogoutButton from '@/app/ui/LogoutButton';

export default function DashboardClient({ posts }) {
  const { user } = useAuth();
  const router = useRouter();
  useEffect(() => {
    if (!user) {
      router.push("/login");
    }
  }, [user, router]);
  if (!user) {
    return <Spinner />;
  }
  const today = new Date().toLocaleDateString("ko-KR", {
    year: "numeric",
    month: "long",
    day: "numeric",
    weekday: "long",
  });
  return (
    <>
      <div className="flex justify-end mb-4 pr-4">
        <LogoutButton />
      </div>
      <div className="flex justify-between items-center my-10">
        <p className="text-lg font-semibold text-gray-800">{today}</p>
        <CreatePostButton />
      </div>


      {posts.map((post) => (
        <Card
          key={post.id}
          post={post}
          presenter={post.users.name}
          commentCount={post.commentCount}
        />
      ))}
    </>
  );
}