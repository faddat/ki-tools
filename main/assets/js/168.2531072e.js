(window.webpackJsonp=window.webpackJsonp||[]).push([[168],{596:function(t,a,l){"use strict";l.r(a);var e=l(1),o=Object(e.a)({},(function(){var t=this,a=t.$createElement,l=t._self._c||a;return l("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[l("h1",{attrs:{id:"部署你自己的测试网"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#部署你自己的测试网"}},[t._v("#")]),t._v(" 部署你自己的测试网")]),t._v(" "),l("p",[t._v("这篇文章介绍了三种创建"),l("code",[t._v("kid")]),t._v("节点的测试网的方式，每种针对不同的使用场景：")]),t._v(" "),l("ol",[l("li",[t._v("单节点，本地的，手动的测试网")]),t._v(" "),l("li",[t._v("多节点，本地的，自动的测试网")]),t._v(" "),l("li",[t._v("多节点，远程的，自动的测试网")])]),t._v(" "),l("p",[t._v("支持代码可以在"),l("a",{attrs:{href:"https://github.com/cosmos/cosmos-sdk/tree/develop/networks",target:"_blank",rel:"noopener noreferrer"}},[t._v("networks 目录"),l("OutboundLink")],1),t._v("中找到，还可以在"),l("code",[t._v("local")]),t._v("或"),l("code",[t._v("remote")]),t._v("子目录中找到。")]),t._v(" "),l("blockquote",[l("p",[t._v("注意："),l("code",[t._v("remote")]),t._v("网络引导教程可能与最新版本不同步，不可完全依赖。")])]),t._v(" "),l("h2",{attrs:{id:"可获取的-docker-镜像"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#可获取的-docker-镜像"}},[t._v("#")]),t._v(" 可获取的 Docker 镜像")]),t._v(" "),l("p",[t._v("如果你需要使用或部署 kitools 作为容器，你可以跳过"),l("code",[t._v("build")]),t._v("步骤并使用官方镜像，$TAG 标识你感兴趣的版本：")]),t._v(" "),l("ul",[l("li",[l("code",[t._v("docker run -it -v ~/.kitools:/root/.kitools -v ~/.kitools:/root/.kitools tendermint:$TAG kid init")])]),t._v(" "),l("li",[l("code",[t._v("docker run -it -p 26657:26657 -p 26656:26656 -v ~/.kitools:/root/.kitools -v ~/.kitools:/root/.kitools tendermint:$TAG kid start")])]),t._v(" "),l("li",[t._v("...")]),t._v(" "),l("li",[l("code",[t._v("docker run -it -v ~/.kitools:/root/.kitools -v ~/.kitools:/root/.kitools tendermint:$TAG kid version")])])]),t._v(" "),l("p",[t._v("相同的镜像也可以用于构建你自己的 docker-compose 栈")]),t._v(" "),l("h2",{attrs:{id:"单节点-本地的-手动的测试网"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#单节点-本地的-手动的测试网"}},[t._v("#")]),t._v(" 单节点，本地的，手动的测试网")]),t._v(" "),l("p",[t._v("本教程可帮助你创建一个在本地运行网络的验证人节点，以进行测试和其他相关的用途。")]),t._v(" "),l("h3",{attrs:{id:"需要"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#需要"}},[t._v("#")]),t._v(" 需要")]),t._v(" "),l("ul",[l("li",[l("RouterLink",{attrs:{to:"/zh/gaia-tutorials/installation.html"}},[t._v("安装 kitools")])],1),t._v(" "),l("li",[l("a",{attrs:{href:"https://stedolan.github.io/jq/download/",target:"_blank",rel:"noopener noreferrer"}},[t._v("安装"),l("code",[t._v("jq")]),l("OutboundLink")],1),t._v("(可选的)")])]),t._v(" "),l("h3",{attrs:{id:"创建-genesis-文件并启动网络"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#创建-genesis-文件并启动网络"}},[t._v("#")]),t._v(" 创建 genesis 文件并启动网络")]),t._v(" "),l("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"IyBZb3UgY2FuIHJ1biBhbGwgb2YgdGhlc2UgY29tbWFuZHMgZnJvbSB5b3VyIGhvbWUgZGlyZWN0b3J5CmNkICRIT01FCgojIEluaXRpYWxpemUgdGhlIGdlbmVzaXMuanNvbiBmaWxlIHRoYXQgd2lsbCBoZWxwIHlvdSB0byBib290c3RyYXAgdGhlIG5ldHdvcmsKa2lkIGluaXQgLS1jaGFpbi1pZD10ZXN0aW5nIHRlc3RpbmcKCiMgQ3JlYXRlIGEga2V5IHRvIGhvbGQgeW91ciB2YWxpZGF0b3IgYWNjb3VudApraWQga2V5cyBhZGQgdmFsaWRhdG9yCgojIEFkZCB0aGF0IGtleSBpbnRvIHRoZSBnZW5lc2lzLmFwcF9zdGF0ZS5hY2NvdW50cyBhcnJheSBpbiB0aGUgZ2VuZXNpcyBmaWxlCiMgTk9URTogdGhpcyBjb21tYW5kIGxldHMgeW91IHNldCB0aGUgbnVtYmVyIG9mIGNvaW5zLiBNYWtlIHN1cmUgdGhpcyBhY2NvdW50IGhhcyBzb21lIGNvaW5zCiMgd2l0aCB0aGUgZ2VuZXNpcy5hcHBfc3RhdGUuc3Rha2luZy5wYXJhbXMuYm9uZF9kZW5vbSBkZW5vbSwgdGhlIGRlZmF1bHQgaXMgc3Rha2luZwpraWQgYWRkLWdlbmVzaXMtYWNjb3VudCAkKGtpZCBrZXlzIHNob3cgdmFsaWRhdG9yIC1hKSAxMDAwMDAwMDAwc3Rha2UsMTAwMDAwMDAwMHZhbGlkYXRvcnRva2VuCgojIEdlbmVyYXRlIHRoZSB0cmFuc2FjdGlvbiB0aGF0IGNyZWF0ZXMgeW91ciB2YWxpZGF0b3IKa2lkIGdlbnR4IC0tbmFtZSB2YWxpZGF0b3IKCiMgQWRkIHRoZSBnZW5lcmF0ZWQgYm9uZGluZyB0cmFuc2FjdGlvbiB0byB0aGUgZ2VuZXNpcyBmaWxlCmtpZCBjb2xsZWN0LWdlbnR4cwoKIyBOb3cgaXRzIHNhZmUgdG8gc3RhcnQgYGtpZGAKa2lkIHN0YXJ0Cg=="}}),t._v(" "),l("p",[t._v("启动将会把"),l("code",[t._v("kid")]),t._v("相关的所有数据放在"),l("code",[t._v("~/.kitools")]),t._v("目录。你可以检查所创建的 genesis 文件——"),l("code",[t._v("~/.kitools/config/genesis.json")]),t._v("。同时"),l("code",[t._v("kid")]),t._v("也已经配置完成并且有了一个拥有 token 的账户(stake 和自定义的代币)。")]),t._v(" "),l("h2",{attrs:{id:"多节点-本地的-自动的测试网"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#多节点-本地的-自动的测试网"}},[t._v("#")]),t._v(" 多节点，本地的，自动的测试网")]),t._v(" "),l("p",[t._v("在"),l("a",{attrs:{href:"https://github.com/cosmos/cosmos-sdk/tree/develop/networks/local",target:"_blank",rel:"noopener noreferrer"}},[t._v("networks/local 目录"),l("OutboundLink")],1),t._v("中运行如下命令:")]),t._v(" "),l("h3",{attrs:{id:"需要-2"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#需要-2"}},[t._v("#")]),t._v(" 需要")]),t._v(" "),l("ul",[l("li",[l("RouterLink",{attrs:{to:"/zh/gaia-tutorials/installation.html"}},[t._v("安装 kitools")])],1),t._v(" "),l("li",[l("a",{attrs:{href:"https://docs.docker.com/install/",target:"_blank",rel:"noopener noreferrer"}},[t._v("安装 docker"),l("OutboundLink")],1)]),t._v(" "),l("li",[l("a",{attrs:{href:"https://docs.docker.com/compose/install/",target:"_blank",rel:"noopener noreferrer"}},[t._v("安装 docker-compose"),l("OutboundLink")],1)])]),t._v(" "),l("h3",{attrs:{id:"编译"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#编译"}},[t._v("#")]),t._v(" 编译")]),t._v(" "),l("p",[t._v("编译"),l("code",[t._v("kid")]),t._v("二进制文件(linux)和运行"),l("code",[t._v("localnet")]),t._v("命令所需的"),l("code",[t._v("tendermint/kitoolsnode")]),t._v(" docker images。这个二进制文件将被安装到 container 中，并且可以更新重建 image，因此您只需要构建一次 image。")]),t._v(" "),l("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"IyBDbG9uZSB0aGUga2l0b29scyByZXBvCmdpdCBjbG9uZSBodHRwczovL2dpdGh1Yi5jb20vY29zbW9zL2tpdG9vbHMuZ2l0CgojIFdvcmsgZnJvbSB0aGUgU0RLIHJlcG8KY2QgY29zbW9zLXNkawoKIyBCdWlsZCB0aGUgbGludXggYmluYXJ5IGluIC4vYnVpbGQKbWFrZSBidWlsZC1saW51eAoKIyBCdWlsZCB0ZW5kZXJtaW50L2tpZG5vZGUgaW1hZ2UKbWFrZSBidWlsZC1kb2NrZXIta2lkbm9kZQo="}}),t._v(" "),l("h3",{attrs:{id:"运行你的测试网"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#运行你的测试网"}},[t._v("#")]),t._v(" 运行你的测试网")]),t._v(" "),l("p",[t._v("运行一个拥有 4 个节点的测试网络:")]),t._v(" "),l("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"bWFrZSBsb2NhbG5ldC1zdGFydAo="}}),t._v(" "),l("p",[t._v("此命令使用 kidnode image 创建了一个 4 节点网络。每个节点的端口可以在下表中找到：")]),t._v(" "),l("table",[l("thead",[l("tr",[l("th",[l("code",[t._v("Node ID")])]),t._v(" "),l("th",[l("code",[t._v("P2P Port")])]),t._v(" "),l("th",[l("code",[t._v("RPC Port")])])])]),t._v(" "),l("tbody",[l("tr",[l("td",[l("code",[t._v("kitoolsnode0")])]),t._v(" "),l("td",[l("code",[t._v("26656")])]),t._v(" "),l("td",[l("code",[t._v("26657")])])]),t._v(" "),l("tr",[l("td",[l("code",[t._v("kitoolsnode1")])]),t._v(" "),l("td",[l("code",[t._v("26659")])]),t._v(" "),l("td",[l("code",[t._v("26660")])])]),t._v(" "),l("tr",[l("td",[l("code",[t._v("kitoolsnode2")])]),t._v(" "),l("td",[l("code",[t._v("26661")])]),t._v(" "),l("td",[l("code",[t._v("26662")])])]),t._v(" "),l("tr",[l("td",[l("code",[t._v("kitoolsnode3")])]),t._v(" "),l("td",[l("code",[t._v("26663")])]),t._v(" "),l("td",[l("code",[t._v("26664")])])])])]),t._v(" "),l("p",[t._v("更新可执行程序，只需要重新编译并重启节点:")]),t._v(" "),l("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"bWFrZSBidWlsZC1saW51eCBsb2NhbG5ldC1zdGFydAo="}}),t._v(" "),l("h3",{attrs:{id:"配置"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#配置"}},[t._v("#")]),t._v(" 配置")]),t._v(" "),l("p",[l("code",[t._v("make localnet-start")]),t._v("命令通过调用"),l("code",[t._v("kid testnet")]),t._v("命令在"),l("code",[t._v("./build")]),t._v("中创建了一个 4 节点测试网络的文件。输出"),l("code",[t._v("./build")]),t._v("目录下一些文件:")]),t._v(" "),l("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"JCB0cmVlIC1MIDIgYnVpbGQvCmJ1aWxkLwrilJzilIDilIAga2lkCuKUnOKUgOKUgCBraWQK4pSc4pSA4pSAIGdlbnR4cwrilIIgICDilJzilIDilIAgbm9kZTAuanNvbgrilIIgICDilJzilIDilIAgbm9kZTEuanNvbgrilIIgICDilJzilIDilIAgbm9kZTIuanNvbgrilIIgICDilJTilIDilIAgbm9kZTMuanNvbgrilJzilIDilIAgbm9kZTAK4pSCICAg4pSc4pSA4pSAIGtpZArilIIgICDilIIgICDilJzilIDilIAga2V5X3NlZWQuanNvbgrilIIgICDilIIgICDilJTilIDilIAga2V5cwrilIIgICDilJTilIDilIAga2lkCuKUgiAgICAgICDilJzilIDilIAgJHtMT0c6LWtpZC5sb2d9CuKUgiAgICAgICDilJzilIDilIAgY29uZmlnCuKUgiAgICAgICDilJTilIDilIAgZGF0YQrilJzilIDilIAgbm9kZTEK4pSCICAg4pSc4pSA4pSAIGtpZArilIIgICDilIIgICDilJTilIDilIAga2V5X3NlZWQuanNvbgrilIIgICDilJTilIDilIAga2lkCuKUgiAgICAgICDilJzilIDilIAgJHtMT0c6LWtpZC5sb2d9CuKUgiAgICAgICDilJzilIDilIAgY29uZmlnCuKUgiAgICAgICDilJTilIDilIAgZGF0YQrilJzilIDilIAgbm9kZTIK4pSCICAg4pSc4pSA4pSAIGtpZArilIIgICDilIIgICDilJTilIDilIAga2V5X3NlZWQuanNvbgrilIIgICDilJTilIDilIAga2lkCuKUgiAgICAgICDilJzilIDilIAgJHtMT0c6LWtpZC5sb2d9CuKUgiAgICAgICDilJzilIDilIAgY29uZmlnCuKUgiAgICAgICDilJTilIDilIAgZGF0YQrilJTilIDilIAgbm9kZTMKICAgIOKUnOKUgOKUgCBraWQKICAgIOKUgiAgIOKUlOKUgOKUgCBrZXlfc2VlZC5qc29uCiAgICDilJTilIDilIAga2lkCiAgICAgICAg4pSc4pSA4pSAICR7TE9HOi1raWQubG9nfQogICAgICAgIOKUnOKUgOKUgCBjb25maWcKICAgICAgICDilJTilIDilIAgZGF0YQo="}}),t._v(" "),l("p",[t._v("每个"),l("code",[t._v("./build/nodeN")]),t._v("目录被挂载到对应 container 的"),l("code",[t._v("/kid")]),t._v("目录。")]),t._v(" "),l("h3",{attrs:{id:"日志输出"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#日志输出"}},[t._v("#")]),t._v(" 日志输出")]),t._v(" "),l("p",[t._v("日志被保存在每个"),l("code",[t._v("./build/nodeN/kid/kitools.log")]),t._v("文件中。你也可以直接通过 Docker 来查看日志：")]),t._v(" "),l("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"ZG9ja2VyIGxvZ3MgLWYga2lkbm9kZTAK"}}),t._v(" "),l("h3",{attrs:{id:"密钥-账户"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#密钥-账户"}},[t._v("#")]),t._v(" 密钥&账户")]),t._v(" "),l("p",[t._v("你需要使用指定节点的"),l("code",[t._v("kid")]),t._v("目录作为你的"),l("code",[t._v("home")]),t._v("来同"),l("code",[t._v("kid")]),t._v("交互，并执行查询或者创建交易:")]),t._v(" "),l("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"a2lkIGtleXMgbGlzdCAtLWhvbWUgLi9idWlsZC9ub2RlMC9raWQK"}}),t._v(" "),l("p",[t._v("现在账户已经存在了，你可以创建新的账户并向其发送资金！")]),t._v(" "),l("p",[t._v("::: 提示\n注意：每个节点的密钥种子放在"),l("code",[t._v("./build/nodeN/kid/key_seed.json")]),t._v("中，可以通过"),l("code",[t._v("kid keys add --restore")]),t._v("命令来回复。\n:::")]),t._v(" "),l("h3",{attrs:{id:"特殊的可执行程序"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#特殊的可执行程序"}},[t._v("#")]),t._v(" 特殊的可执行程序")]),t._v(" "),l("p",[t._v("如果你拥有多个不同名称的可执行程序，则可以使用 BINARY 环境变量指定要运行的可执行程序。可执行程序的路径是相对于挂载的卷。例如：")]),t._v(" "),l("tm-code-block",{staticClass:"codeblock",attrs:{language:"",base64:"IyBSdW4gd2l0aCBjdXN0b20gYmluYXJ5CkJJTkFSWT1raXRvb2xzZm9vIG1ha2UgbG9jYWxuZXQtc3RhcnQK"}}),t._v(" "),l("h2",{attrs:{id:"多节点-远程的-自动的测试网"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#多节点-远程的-自动的测试网"}},[t._v("#")]),t._v(" 多节点，远程的，自动的测试网")]),t._v(" "),l("p",[t._v("应该从"),l("a",{attrs:{href:"https://github.com/cosmos/cosmos-sdk/tree/develop/networks",target:"_blank",rel:"noopener noreferrer"}},[t._v("networks 目录"),l("OutboundLink")],1),t._v("运行下面的命令。")]),t._v(" "),l("h3",{attrs:{id:"terraform-ansible"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#terraform-ansible"}},[t._v("#")]),t._v(" Terraform & Ansible")]),t._v(" "),l("p",[t._v("使用"),l("a",{attrs:{href:"https://www.terraform.io/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Terraform"),l("OutboundLink")],1),t._v("在 AWS 上创建服务器然后用"),l("a",{attrs:{href:"https://www.ansible.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Ansible"),l("OutboundLink")],1),t._v("创建并管理这些服务器上的测试网来完成自动部署。")]),t._v(" "),l("h3",{attrs:{id:"前提"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#前提"}},[t._v("#")]),t._v(" 前提")]),t._v(" "),l("ul",[l("li",[t._v("在一台 Linux 机器上安装"),l("a",{attrs:{href:"https://www.terraform.io/downloads.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Terraform"),l("OutboundLink")],1),t._v("和"),l("a",{attrs:{href:"https://docs.ansible.com/ansible/latest/installation_guide/intro_installation.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Ansible"),l("OutboundLink")],1)]),t._v(" "),l("li",[t._v("创建一个具有 EC2 实例创建能力的"),l("a",{attrs:{href:"https://docs.aws.amazon.com/general/latest/gr/managing-aws-access-keys.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("ASW API token"),l("OutboundLink")],1)]),t._v(" "),l("li",[t._v("创建 SSH 密钥")])]),t._v(" "),l("tm-code-block",{staticClass:"codeblock",attrs:{language:"",base64:"ZXhwb3J0IEFXU19BQ0NFU1NfS0VZX0lEPSZxdW90OzIzNDUyMzRqazJsaDQyMzQmcXVvdDsKZXhwb3J0IEFXU19TRUNSRVRfQUNDRVNTX0tFWT0mcXVvdDsyMzRqaGtnMjM0aDUya2g0ZzVraGczNCZxdW90OwpleHBvcnQgVEVTVE5FVF9OQU1FPSZxdW90O3JlbW90ZW5ldCZxdW90OwpleHBvcnQgQ0xVU1RFUl9OQU1FPSAmcXVvdDtyZW1vdGVuZXR2YWxpZGF0b3JzJnF1b3Q7CmV4cG9ydCBTU0hfUFJJVkFURV9GSUxFPSZxdW90OyRIT01FLy5zc2gvaWRfcnNhJnF1b3Q7CmV4cG9ydCBTU0hfUFVCTElDX0ZJTEU9JnF1b3Q7JEhPTUUvLnNzaC9pZF9yc2EucHViJnF1b3Q7Cg=="}}),t._v(" "),l("p",[l("code",[t._v("terraform")]),t._v("和"),l("code",[t._v("ansible")]),t._v("都会使用到。")]),t._v(" "),l("h3",{attrs:{id:"创建一个远程网络"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#创建一个远程网络"}},[t._v("#")]),t._v(" 创建一个远程网络")]),t._v(" "),l("tm-code-block",{staticClass:"codeblock",attrs:{language:"",base64:"U0VSVkVSUz0xIFJFR0lPTl9MSU1JVD0xIG1ha2UgdmFsaWRhdG9ycy1zdGFydAo="}}),t._v(" "),l("p",[t._v("测试网络的名称将由"),l("code",[t._v("--chain-id")]),t._v("定义，集群的名称则是 AWS 中服务器管理标识。该代码将在每个可用区中创建服务器数量的服务器，最多为 REGION_LIMIT，从 us-east-2 开始。（us-east-1 被排除在外）下面的 BaSH 脚本也是如此，但更便于输入。")]),t._v(" "),l("tm-code-block",{staticClass:"codeblock",attrs:{language:"",base64:"Li9uZXctdGVzdG5ldC5zaCAmcXVvdDskVEVTVE5FVF9OQU1FJnF1b3Q7ICZxdW90OyRDTFVTVEVSX05BTUUmcXVvdDsgMSAxCg=="}}),t._v(" "),l("h3",{attrs:{id:"快速查询状态入口"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#快速查询状态入口"}},[t._v("#")]),t._v(" 快速查询状态入口")]),t._v(" "),l("tm-code-block",{staticClass:"codeblock",attrs:{language:"",base64:"bWFrZSB2YWxpZGF0b3JzLXN0YXR1cwo="}}),t._v(" "),l("h3",{attrs:{id:"删除服务器"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#删除服务器"}},[t._v("#")]),t._v(" 删除服务器")]),t._v(" "),l("tm-code-block",{staticClass:"codeblock",attrs:{language:"",base64:"bWFrZSB2YWxpZGF0b3JzLXN0b3AK"}}),t._v(" "),l("h3",{attrs:{id:"日志输出-2"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#日志输出-2"}},[t._v("#")]),t._v(" 日志输出")]),t._v(" "),l("p",[t._v("你可以将日志发送到 Logz.io，一个 Elastic 栈（Elastic 搜索，Logstash 和 Kibana）服务提供商。你可以将节点设置为自动登录。创建一个帐户并从此页面上的说明中获取你的 API 密钥，然后：")]),t._v(" "),l("tm-code-block",{staticClass:"codeblock",attrs:{language:"",base64:"eXVtIGluc3RhbGwgc3lzdGVtZC1kZXZlbCB8fCBlY2hvICZxdW90O1RoaXMgd2lsbCBvbmx5IHdvcmsgb24gUkhFTC1iYXNlZCBzeXN0ZW1zLiZxdW90OwphcHQtZ2V0IGluc3RhbGwgbGlic3lzdGVtZC1kZXYgfHwgZWNobyAmcXVvdDtUaGlzIHdpbGwgb25seSB3b3JrIG9uIERlYmlhbi1iYXNlZCBzeXN0ZW1zLiZxdW90OwoKZ28gZ2V0IGdpdGh1Yi5jb20vbWhlZXNlL2pvdXJuYWxiZWF0CmFuc2libGUtcGxheWJvb2sgLWkgaW52ZW50b3J5L2RpZ2l0YWxfb2NlYW4ucHkgLWwgcmVtb3RlbmV0IGxvZ3ppby55bWwgLWUgTE9HWklPX1RPS0VOPUFCQ0RFRkdISUpLTE1OT1BRUlNUVVZXWFlaMDEyMzQ1Cg=="}}),t._v(" "),l("h3",{attrs:{id:"监控"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#监控"}},[t._v("#")]),t._v(" 监控")]),t._v(" "),l("p",[t._v("你可以安装 DataDog 代理：")]),t._v(" "),l("tm-code-block",{staticClass:"codeblock",attrs:{language:"",base64:"bWFrZSBkYXRhZG9nLWluc3RhbGwK"}})],1)}),[],!1,null,null,null);a.default=o.exports}}]);