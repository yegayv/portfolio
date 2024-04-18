import Image from "next/image"

export function HeroSection(){
  return(<div className="flex flex-col w-[600px] h-[400px] relative">
    <Image src={"https://th.bing.com/th/id/OIP.3X8-kBwsH1aus2f_lV5JagAAAA?rs=1&pid=ImgDetMain"} alt={"hero image"} fill className=""/>
  </div> )
}