import FloatingHearts from "@/components/FloatingHearts";
import ValentineCard from "@/components/ValentineCard";

const Index = () => {
  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-background">
      <FloatingHearts count={15} />
      <ValentineCard />
    </div>
  );
};

export default Index;
