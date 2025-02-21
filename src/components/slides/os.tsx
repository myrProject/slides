import Heading from "@/components/others/heading";
import { CodeBlock } from "@/components/ui/code-block";

function Os() {
  const code = `{ config, pkgs, ... }:
  {
  environment.variables.EDITOR = "vim";

  imports =
  [ # Include the results of the hardware scan.
  ./hardware-configuration.nix
  ];

  # Use the systemd-boot EFI boot loader.
  boot.loader.systemd-boot.enable = true;
  boot.loader.efi.canTouchEfiVariables = true;

  boot.kernelPackages = pkgs.linuxPackages_4_19;

  networking.hostName = "nixos"; # Define your hostname.
  networking.wireless.enable = true;  # Enables wireless support via wpa_supplicant.

  # Configure network proxy if necessary
  # networking.proxy.default = "http://user:password@proxy:port/";
  # networking.proxy.noProxy = "127.0.0.1,localhost,internal.domain";
  `;

  return (
    <div>
      <div className="flex items-center justify-center w-full flex-col px-2 space-y-4">
        <div className="font-bold tracking-tight">
          <Heading content="NixOs" className="py-2" />
        </div>
        <div className="flex flex-row justify-between space-x-10">
          <img
            src={
              "https://github-readme-stats.vercel.app/api/pin/?username=NixOS&repo=nixpkgs"
            }
            alt="NixOS GitHub Stats"
          />
          <ul className="text-xl text-left list-disc">
            <li>Based on Linux</li>
            <li>Reproducible package management</li>
            <li>Declarative configuration</li>
            <li>Isolated environments</li>
          </ul>
        </div>
        <div className="text-left px-4">
          <CodeBlock
            language="nix"
            filename="configuration.nix"
            highlightLines={[9, 13, 14, 18]}
            code={code}
          />
        </div>
      </div>
    </div>
  );
}

export default Os;
