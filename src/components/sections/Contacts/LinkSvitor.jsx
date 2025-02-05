import Image from "next/image";

function LinkSvitor() {
 return (
   <a
     className="flex justify-center items-center w-full border-t-2 border-white no-underline gap-2 py-2"
     href="https://svitordev.vercel.app/"
     target="_blank"
     rel="noopener noreferrer"
   >
     <p>Criado por:</p>
     <Image
       width={100}
       height={100}
       quality={100}
       className="w-28"
       src="https://www.acs.art.br/vitor%2FsVitor.Dev.png"
       alt="Logo do criador do site"
     />
   </a>
 );
}

export default LinkSvitor;