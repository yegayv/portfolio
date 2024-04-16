import Image from "next/image"

export function HeroSection(){
  return(<div className="flex flex-col">
    <Image src={"/hero.jpg"} alt={"hero image"} width={430} height={200} className="opacity-30 shadow-xl shadow-white">
    </Image>
  </div> )
}