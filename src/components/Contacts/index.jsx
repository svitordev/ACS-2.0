function Contacts({children, bg}) {
 return (
   <footer
     id="contacts"
     className={`border-t-[3px] ${bg} text-white h-auto`}
   >
     {children}
   </footer>
 );
}

export default Contacts;