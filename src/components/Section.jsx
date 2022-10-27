
function section({
    id,
    children,
}) {
  return (
    <section id={id} className="h-screen w-full px-64 m-0 border-box bg-bglight dark:bg-bgdark flex justify-center">
      {children}
    </section>
  );
}

export default section;