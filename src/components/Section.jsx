
function section({
    id,
    children,
}) {
  return (
    <section id={id} className="h-screen px-72 w-screen m-0 p-0 border-box">
      {children}
    </section>
  );
}

export default section;