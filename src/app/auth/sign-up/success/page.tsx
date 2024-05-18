// import { redirect } from "next/navigation";
// import { auth } from "~/server/auth";

export default async function SignUpSuccess() {
  // const { user } = await auth();

  // if (user) {
  //   return redirect("/");
  // }

  return (
    <div className="container flex-1 md:flex md:flex-col md:items-center md:justify-center">
      <h1>Sign-up Successful!</h1>
      <p>Please check your email for the next step.</p>
    </div>
  );
}
