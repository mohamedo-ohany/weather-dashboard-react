
interface CardComProps {
  children: React.ReactNode;
}

export default function CardCom({ children }: CardComProps) {
  return (
    <section
      aria-label="Weather details"
      className=" rounded-2xl p-4 mb-4 flex justify-between text-xs"
      style={{
        backgroundColor: "rgb(100 99 99 / 60%)",
      }}
    >
      {children}
    </section>
  );
}
