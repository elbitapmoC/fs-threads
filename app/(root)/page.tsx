import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <main>
      <h1>threads</h1>
      <UserButton afterSignOutUrl="/" />
    </main>
  );
}
