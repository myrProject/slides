import Heading from "@/components/others/heading";
import { CodeBlock } from "@/components/ui/code-block";
import GhStats from "@/components/others/gh-stats";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

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
          <Heading content="NixOs" className="py-0" />
          <div className="font-normal italic">
            Chosen among others : Ubuntu, Fedora, Debian, Arch Linux, Kali Linux
          </div>
        </div>
        <div className="flex flex-row justify-center space-x-10">
          <div className="flex flex-col space-y-2 justify-center">
            <div className="flex flex-row justify-between space-x-10">
              <GhStats username="NixOS" repo="nixpkgs" />
              <ul className="text-xl text-left list-disc">
                <li>Based on Linux</li>
                <li>Reproducible package management</li>
                <li>Declarative configuration</li>
                <li>Isolated environments</li>
              </ul>
            </div>
            <div className="flex flex-row justify-between space-x-4 py-10">
              <Card className="w-[350px] border-neutral-200">
                <CardHeader>
                  <CardTitle>Problem Faced</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Distributing the configuration.nix file to each employee
                    laptop while ensuring its integrity, confidentiality, and
                    non-repudiation.
                  </p>
                </CardContent>
              </Card>
              <Card className="w-[350px] border-neutral-200">
                <CardHeader>
                  <CardTitle>Solutions</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li>
                      Using GPG (GNU Privacy Guard) for secure file
                      distribution:
                    </li>
                    <li>
                      Creating a GitLab repository containing:
                      configuration.nix, configuration.nix.asc and the
                      administrator's public GPG key.
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
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
    </div>
  );
}

export default Os;
