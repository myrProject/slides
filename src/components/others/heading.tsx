import { cn } from "@/lib/utils";

type LogoProps = {
  className?: string;
  content: string;
};

export const Heading = ({ className, content }: LogoProps) => {
  return (
    <div className={cn("size-full text-7xl px-20 py-20", className)}>
      <h1 className="font-bold bg-clip-text text-transparent bg-gradient-to-br from-sky-400 to-green-400 leading-relaxed">
        {content}
      </h1>
    </div>
  );
};

export default Heading;
