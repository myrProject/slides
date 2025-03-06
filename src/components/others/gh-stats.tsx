import { cn } from "@/lib/utils";

type GhStatsProps = {
  username: string;
  repo: string;
  className?: string;
};

const GhStats: React.FC<GhStatsProps> = ({ username, repo, className }) => {
  const url = `https://github-readme-stats.vercel.app/api/pin/?username=${username}&repo=${repo}`;
  const alt = `${repo} GitHub Stats`;

  return <img src={url} alt={alt} className={cn(`w-[400px]`, className)} />;
};

export default GhStats;
