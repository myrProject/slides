import Heading from "@/components/others/heading";
import GhStats from "@/components/others/gh-stats";
import { Separator } from "@/components/ui/separator";

function Services() {
  return (
    <div>
      <div className="flex flex-col items-center justify-center w-full">
        <div className="z-20 font-bold tracking-tight">
          <Heading content="Services" />
        </div>
        <div className="grid grid-cols-6 gap-4">
          <GhStats username="ONLYOFFICE" repo="DesktopEditors" />
          <GhStats username="element-hq" repo="element-web" />
          <GhStats username="linagora" repo="tmail-flutter" />
          <GhStats username="juicedata" repo="juicefs" />
          <GhStats username="kanidm" repo="kanidm" />
          <GhStats username="wazuh" repo="wazuh" />
        </div>
        <Separator className="my-4 h-2 w-full" orientation="vertical" />
        <div className="grid grid-cols-5 gap-4">
          <GhStats username="siderolabs" repo="talos" />
          <GhStats username="siderolabs" repo="omni" />
          <GhStats username="rook" repo="rook" />
          <GhStats username="traefik" repo="traefik" />
          <GhStats username="stalwartlabs" repo="mail-server" />
          <GhStats username="prometheus" repo="prometheus" />
          <GhStats username="grafana" repo="grafana" />
          <GhStats username="grafana" repo="loki" />
          <GhStats username="vmware-tanzu" repo="velero" />
          <GhStats username="goharbor" repo="harbor" />
          <GhStats username="OpenVPN" repo="openvpn" />
          <GhStats username="discourse" repo="discourse" />
          <GhStats username="OpenVPN" repo="openvpn" />
          <GhStats username="requarks" repo="wiki" />
          <GhStats username="docusealco" repo="docuseal" />
          <GhStats username="gitlabhq" repo="gitlabhq" />
        </div>
      </div>
    </div>
  );
}

export default Services;
