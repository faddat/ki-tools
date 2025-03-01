<p align="right">
    <img width=150px src="https://wallet-testnet.blockchain.ki/static/img/icons/ki-chain.png" />
</p>

# Ki Tools
This repository hosts `ki-tools`, a set of tools that allow to deploy and run Kichain nodes.


## Quick Start

### Install Golang
To install Go, visit the Go download page and copy the link of the latest Go release for Linux systems, download and unzip the archive file as follows:

```
wget https://dl.google.com/go/go1.16.linux-amd64.tar.gz
sudo tar -C /usr/local -xzf go1.16.linux-amd64.tar.gz
```

Finally, export the Go paths like so:

```
mkdir -p $HOME/go/bin
PATH=$PATH:/usr/local/go/bin
echo "export PATH=$PATH:$(go env GOPATH)/bin" >> ~/.bash_profile
source ~/.bash_profile
```

To test the Go installation,  use the `version` command to check the downloaded version as follows :

```
go version
```

This should output :

```
go version go1.16 linux/amd64
```

### Install ki-tools
Start by clone this repository. If you are here, you most likely have git installed already, otherwise just run:

```
sudo apt install git
```

And now you can clone the repository as follows:
```
git clone https://github.com/KiFoundation/ki-tools.git
```

If your are starting with a clean ubuntu install you might need to install the `build-essential` package:

```
sudo apt update
sudo apt install build-essential
```

Finally, navigate to the repository folder and install the tools as follows:

```
cd ki-tools
make install
```

To test the installation, check the downloaded version as follows :
```
kid version --long
```

## Disclaimer
The `ki-tools` is a modified clone of the `kitools` project. More about the latter can be found [here](https://github.com/cosmos/kitools).