{
  description = "Homepage";

  inputs = {
    nixpkgs.url = "https://github.com/NixOS/nixpkgs/archive/refs/tags/25.05.tar.gz";
  };

  outputs = { self, nixpkgs }:
  let
    pkgs = nixpkgs.legacyPackages.x86_64-linux;
  in
  {
    packages.x86_64-linux.hide-and-seek = pkgs.buildNpmPackage {
      pname = "homepage";
      version = "0.1.0";
      src = ./.;
      npmDepsHash = "sha256-Q5ResGa0mbLbw3GOrCy0vxakK/J5PkvYCe7CjLEe7ok=";
      doCheck = false;
    };

    devShells.x86_64-linux.default = pkgs.mkShell {
      name = "homepage";
      packages = with pkgs; [
        nodejs_24
      ];
    };
  };
}