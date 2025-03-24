import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function SecretKey() {
  return (
    <>
      <h1 className="text-xl mb-1 font-bold">Secret Key</h1>
      <h2 className="text-zinc-700 dark:text-zinc-300/80 mb-5">Secret key is used for generate License Key for application.</h2>
      
      <Button asChild variant="outline">
        <Link href="/secret-key/create">Create Secret</Link>
      </Button>
    </>
  );
}
