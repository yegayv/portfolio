import Image from "next/image"

export function AppFooter() {
  const current_year = new Date().getFullYear();
  return(
  <div className="flex flex-col sticky bottom-12 items-center">
      <div className="flex flex-row gap-3">
        <div>
        <a href="https://www.github.com/yegayv">
          <Image src={"/gh.png"} alt={"github logo"} width={24} height={24}></Image>
        </a>
      </div>
      <div>
        <a href="https://www.linkedin.com/in/yegayv">
          <Image src={"/linkedin.png"} alt={"linkedin logo"} width={24} height={24}></Image>
        </a>
      </div>
      </div>
    <div>
      <p>&copy;{current_year}. Yegay V. All rights reserved.</p>
    </div>
    </div>
  )
}