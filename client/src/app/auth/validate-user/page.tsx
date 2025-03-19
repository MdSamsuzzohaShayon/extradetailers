import { redirect } from "next/navigation";
import { validateUser } from "@/app/_requests/auth";
import Link from "next/link";

export default async function ValidateUserPage({
  searchParams,
}: {
  searchParams: { token?: string };
}) {
  const { token } = await searchParams;

  const validationResult = await validateUser(token);

  if(!validationResult.isError){
    redirect("/signin");
  }

  return (
    <div>
      <h1>Validating User...</h1>
      {validationResult?.message && (
        <div style={{ color: validationResult?.isError ? "red" : "green", fontWeight: "bold" }}>
          {validationResult.message}
        </div>
      )}
      {validationResult.isError && (<Link href="/signup">Go to register</Link>)}
    </div>
  );
}

