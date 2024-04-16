import Link from "next/link";

export function AppNavigation() {
  return(
    <div>
      <div className="flex flex-row gap-5 justify-center items-center pt-8">
        <Link href={"/projects"}>Projects</Link>
        <Link href={"/about"}>About</Link>
      </div>
    </div>
  )
};