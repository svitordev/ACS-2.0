function Contacts({children, bg}) {
 return (
   <footer id="contacts" className={`bg-no-repeat bg-cover border-t-2 ${bg} py-5`}>
     {children}
   </footer>
 );
}

export default Contacts;