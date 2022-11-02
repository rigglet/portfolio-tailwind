function section({ id, children }) {
   return (
      <section
         id={id}
         className="h-auto min-h-screen w-full px-4 md:px-32 lg:px-64 m-0 border-box bg-bglight dark:bg-bgdark flex justify-center"
      >
         {children}
      </section>
   );
}

export default section;
