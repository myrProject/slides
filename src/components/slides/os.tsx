import Heading from "@/components/others/heading";

function Intro() {
  return (
    <div>
      <div className="flex items-center justify-center w-full flex-col px-4 space-y-4 ">
        <div className="z-20 font-bold tracking-tight">
          <Heading content="NixOs" />
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
        <pre className="text-left">
          <code data-trim data-noescape className="hljs yaml">
            {`{ config, pkgs, ... }:

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

  nix.nixPath = [ "nixpkgs=/home/matt/nixpkgs" "nixos-config=/etc/nixos/configuration.nix" "/nix/var/nix/profiles/per-user/root/channels" ];

  # networking.hostName = "nixos"; # Define your hostname.
  # networking.wireless.enable = true;  # Enables wireless support via wpa_supplicant.

  # Configure network proxy if necessary
  # networking.proxy.default = "http://user:password@proxy:port/";
  # networking.proxy.noProxy = "127.0.0.1,localhost,internal.domain";

  # Select internationalisation properties.
  # i18n = {
  #   consoleFont = "Lat2-Terminus16";
  #   consoleKeyMap = "us";
  #   defaultLocale = "en_US.UTF-8";
  # };`}
          </code>
        </pre>
        <span className="text-center">configuration.nix</span>
      </div>
    </div>
  );
}

export default Intro;
