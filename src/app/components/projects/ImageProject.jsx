import Image from "next/image";

function ImageProject({...props}) {
 return (
   <Image
     {...props}
     width={300}
     height={300}
     quality={100}
     className="shadow-lg shadow-blue-950/60 bg-white rounded-lg w-1/2 hover:scale-110 transition-all duration-300"
   />
 );
}

export default ImageProject;