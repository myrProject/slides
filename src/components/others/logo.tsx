import { cn } from "@/lib/utils";

type LogoProps = {
  className?: string;
};

export const Logo = ({ className }: LogoProps) => {
  return (
    <div className={cn("size-full text-9xl px-20 py-20", className)}>
      <h1 className="font-bold bg-clip-text text-transparent bg-gradient-to-br from-sky-400 to-green-400 leading-relaxed">
        myr
      </h1>
    </div>
  );
};

export default Logo;
