const Main = () => {
  const leftButtons = ["all projects", "React & Tailwind", "Node & Express"];

  return (
    <main className="flex gap-12 ">
      <section className="border border-red-500 flex flex-col gap-3">
        {leftButtons.map((btn, key) => (
          <button key={key}>{btn}</button>
        ))}
      </section>
      <section className="border border-red-500 grow"> right</section>
    </main>
  );
};

export default Main;
