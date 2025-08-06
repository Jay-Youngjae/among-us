import DashboardClient from "@/components/DashboardClient";
async function getPosts() {
  const res = await fetch("http://localhost:3000/api", { cache: "no-store" });
  const json = await res.json();
  return json.data;
}
export default async function Page() {
  const posts = await getPosts();
  return <DashboardClient posts={posts} />;
}