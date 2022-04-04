(window.webpackJsonp=window.webpackJsonp||[]).push([[182],{666:function(t,a,e){"use strict";e.r(a);var s=e(1),v=Object(s.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"在主网上运行一个验证人"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#在主网上运行一个验证人"}},[t._v("#")]),t._v(" 在主网上运行一个验证人")]),t._v(" "),e("p",[t._v("::: 提示\n加入主网所需的信息("),e("code",[t._v("genesis.json")]),t._v("和种子节点)在"),e("a",{attrs:{href:"https://github.com/cosmos/launch/tree/master/latest",target:"_blank",rel:"noopener noreferrer"}},[e("code",[t._v("lauch")]),t._v(" repo"),e("OutboundLink")],1),t._v("中可以找到。\n:::")]),t._v(" "),e("p",[t._v("在启动你验证人节点前，确定你已经完成了"),e("RouterLink",{attrs:{to:"/zh/join-mainnet.html"}},[t._v("启动全节点")]),t._v("教程。")],1),t._v(" "),e("h2",{attrs:{id:"什么是验证人"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#什么是验证人"}},[t._v("#")]),t._v(" 什么是验证人?")]),t._v(" "),e("p",[e("RouterLink",{attrs:{to:"/zh/validators/overview.html"}},[t._v("验证人")]),t._v("负责通过投票来向区块链提交新区块。如果验证人不可访问或者对多个相同高度的区块签名，将会遭受到削减处罚。如果变得不可用或者在同一高度上签名，则会被削减。请阅读有关Sentry节点架构的信息，以保护您的节点免受DDOS攻击并确保高可用性。请阅读"),e("a",{attrs:{href:""}},[t._v("哨兵节点网络架构")]),t._v("来保护你的节点免于DDOS攻击并保证高的可访问性。")],1),t._v(" "),e("p",[t._v("::: 警告\n如果你想要成为Cosmos Hub主网的验证人，你应该"),e("RouterLink",{attrs:{to:"/zh/validators/security.html"}},[t._v("安全研究")]),t._v("。\n:::")],1),t._v(" "),e("p",[t._v("如果你已经"),e("RouterLink",{attrs:{to:"/zh/join-mainnet.html"}},[t._v("启动了一个全节点")]),t._v("，可以跳过下一节的内容。")],1),t._v(" "),e("h2",{attrs:{id:"创建你的验证人"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#创建你的验证人"}},[t._v("#")]),t._v(" 创建你的验证人")]),t._v(" "),e("p",[t._v("你的"),e("code",[t._v("cosmosvalconspub")]),t._v("可以用于通过抵押token来创建一个新的验证人。你可以通过运行下面的命令来查看你的验证人公钥：")]),t._v(" "),e("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"a2lkIHRlbmRlcm1pbnQgc2hvdy12YWxpZGF0b3IK"}}),t._v(" "),e("p",[t._v("使用下面的命令创建你的验证人：")]),t._v(" "),e("p",[t._v("::: 注意\n不要使用多于你所拥有的"),e("code",[t._v("uatom")]),t._v("!\n:::")]),t._v(" "),e("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"a2lkIHR4IHN0YWtpbmcgY3JlYXRlLXZhbGlkYXRvciBcCiAgLS1hbW91bnQ9MTAwMDAwMHVhdG9tIFwKICAtLXB1YmtleT0kKGtpZCB0ZW5kZXJtaW50IHNob3ctdmFsaWRhdG9yKSBcCiAgLS1tb25pa2VyPSZxdW90O2Nob29zZSBhIG1vbmlrZXImcXVvdDsgXAogIC0tY2hhaW4taWQ9Jmx0O2NoYWluX2lkJmd0OyBcCiAgLS1jb21taXNzaW9uLXJhdGU9JnF1b3Q7MC4xMCZxdW90OyBcCiAgLS1jb21taXNzaW9uLW1heC1yYXRlPSZxdW90OzAuMjAmcXVvdDsgXAogIC0tY29tbWlzc2lvbi1tYXgtY2hhbmdlLXJhdGU9JnF1b3Q7MC4wMSZxdW90OyBcCiAgLS1taW4tc2VsZi1kZWxlZ2F0aW9uPSZxdW90OzEwMDAwMDAmcXVvdDsgXAogIC0tZ2FzPSZxdW90O2F1dG8mcXVvdDsgXAogIC0tZ2FzLXByaWNlcz0mcXVvdDswLjAwMjV1YXRvbSZxdW90OyBcCiAgLS1mcm9tPSZsdDtrZXlfbmFtZSZndDsK"}}),t._v(" "),e("p",[t._v("::: 提示\n在指定commission参数时，"),e("code",[t._v("commission-max-change-rate")]),t._v("用于度量"),e("code",[t._v("commission-rate")]),t._v("的百分比点数的变化。比如，1%到2%增长了100%，但反映到"),e("code",[t._v("commission-rate")]),t._v("上只有1个百分点。\n:::")]),t._v(" "),e("p",[t._v("::: 提示\n如果没有指定，"),e("code",[t._v("consensus_pubkey")]),t._v("将默认为"),e("code",[t._v("kid tendermint show-validator")]),t._v("命令的输出。"),e("code",[t._v("key_name")]),t._v("是将用于对交易进行签名的私钥的名称。\n:::")]),t._v(" "),e("p",[t._v("你可以在第三方区块链浏览器上确定你是否处于验证人行列。")]),t._v(" "),e("h2",{attrs:{id:"以初始验证人的形式加入到genesis文件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#以初始验证人的形式加入到genesis文件"}},[t._v("#")]),t._v(" 以初始验证人的形式加入到genesis文件")]),t._v(" "),e("p",[t._v("::: 警告\n这一节内容只针对想要在Cosmos Hub主网启动前就作为初始验证人身份的节点。如果主网已经启动，请跳过这一节。\n:::")]),t._v(" "),e("p",[t._v("如果你想作为初始验证人被写入到genesis.json文件，你需要证明你在创世状态中有一些权益代币，创建一个（或多个）交易以将股权与你的验证人地址联系起来，并将此交易包含在genesis文件中。")]),t._v(" "),e("p",[t._v("你的"),e("code",[t._v("cosmosvalconspub")]),t._v("可以用于通过抵押token来创建一个新的验证人。运行如下命令来获取你的验证人节点公钥：")]),t._v(" "),e("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"a2lkIHRlbmRlcm1pbnQgc2hvdy12YWxpZGF0b3IK"}}),t._v(" "),e("p",[t._v("然后执行"),e("code",[t._v("kid gentx")]),t._v("命令:")]),t._v(" "),e("p",[t._v("::: 提示\n"),e("code",[t._v("gentx")]),t._v("是持有self-delegation的JSON文件。所有的创世交易会被"),e("code",[t._v("创世协调员")]),t._v("收集起来验证并初始化成一个"),e("code",[t._v("genesis.json")]),t._v("\n:::")]),t._v(" "),e("p",[t._v("::: 注意\n不要使用多于你所拥有的"),e("code",[t._v("uatom")]),t._v("!\n:::")]),t._v(" "),e("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"a2lkIGdlbnR4IFwKICAtLWFtb3VudCAmbHQ7YW1vdW50X29mX2RlbGVnYXRpb25fdWF0b20mZ3Q7IFwKICAtLWNvbW1pc3Npb24tcmF0ZSAmbHQ7Y29tbWlzc2lvbl9yYXRlJmd0OyBcCiAgLS1jb21taXNzaW9uLW1heC1yYXRlICZsdDtjb21taXNzaW9uX21heF9yYXRlJmd0OyBcCiAgLS1jb21taXNzaW9uLW1heC1jaGFuZ2UtcmF0ZSAmbHQ7Y29tbWlzc2lvbl9tYXhfY2hhbmdlX3JhdGUmZ3Q7IFwKICAtLXB1YmtleSAmbHQ7Y29uc2Vuc3VzX3B1YmtleSZndDsgXAogIC0tbmFtZSAmbHQ7a2V5X25hbWUmZ3Q7Cg=="}}),t._v(" "),e("p",[t._v("::: 提示\n在指定佣金相关的参数时，"),e("code",[t._v("commission-max-change-rate")]),t._v("用于标识"),e("code",[t._v("commission-rate")]),t._v("每日变动的最大百分点数。比如从1%到2%按比率是增长了100%，但只增加了1个百分点。\n:::")]),t._v(" "),e("p",[t._v("你可以提交你的"),e("code",[t._v("gentx")]),t._v("到"),e("a",{attrs:{href:"https://github.com/cosmos/launch",target:"_blank",rel:"noopener noreferrer"}},[t._v("launch repository"),e("OutboundLink")],1),t._v(". 这些"),e("code",[t._v("gentx")]),t._v("将会组成最终的genesis.json.")]),t._v(" "),e("h2",{attrs:{id:"编辑验证人的描述信息"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#编辑验证人的描述信息"}},[t._v("#")]),t._v(" 编辑验证人的描述信息")]),t._v(" "),e("p",[t._v("你可以编辑验证人的公开说明。此信息用于标识你的验证人节点，委托人将根据此信息来决定要委托的验证人节点。确保为下面的每个标识提供输入，否则该字段将默认为空（ "),e("code",[t._v("--moniker")]),t._v("默认为机器名称）。")]),t._v(" "),e("p",[t._v("<key_name>指定你要编辑的验证人。如果你选择不包含此标识，记住必须要含有--from标识来指定你要更新的验证人。")]),t._v(" "),e("p",[e("code",[t._v("--identity")]),t._v("可用于验证和Keybase或UPort这样的系统一起验证身份。与Keybase一起使用时，"),e("code",[t._v("--identity")]),t._v("应使用由一个"),e("a",{attrs:{href:"https://keybase.io/",target:"_blank",rel:"noopener noreferrer"}},[t._v("keybase.io"),e("OutboundLink")],1),t._v("帐户生成的16位字符串。它是一种加密安全的方法，可以跨多个在线网络验证您的身份。 Keybase API允许我们检索你的Keybase头像。这是你可以在验证人配置文件中添加徽标的方法。")]),t._v(" "),e("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"a2lkIHR4IHN0YWtpbmcgZWRpdC12YWxpZGF0b3IKICAtLW1vbmlrZXI9JnF1b3Q7Y2hvb3NlIGEgbW9uaWtlciZxdW90OyBcCiAgLS13ZWJzaXRlPSZxdW90O2h0dHBzOi8vY29zbW9zLm5ldHdvcmsmcXVvdDsgXAogIC0taWRlbnRpdHk9NkEwRDY1RTI5QTRDQkM4RSBcCiAgLS1kZXRhaWxzPSZxdW90O1RvIGluZmluaXR5IGFuZCBiZXlvbmQhJnF1b3Q7IFwKICAtLWNoYWluLWlkPSZsdDtjaGFpbl9pZCZndDsgXAogIC0tZ2FzPSZxdW90O2F1dG8mcXVvdDsgXAogIC0tZ2FzLXByaWNlcz0mcXVvdDswLjAwMjV1YXRvbSZxdW90OyBcCiAgLS1mcm9tPSZsdDtrZXlfbmFtZSZndDsgXAogIC0tY29tbWlzc2lvbi1yYXRlPSZxdW90OzAuMTAmcXVvdDsK"}}),t._v(" "),e("p",[e("strong",[t._v("注意")]),t._v(" : "),e("code",[t._v("commission-rate")]),t._v("的值必须符合如下的不变量检查：")]),t._v(" "),e("ul",[e("li",[t._v("必须在 0 和 验证人的"),e("code",[t._v("commission-max-rate")]),t._v(" 之间")]),t._v(" "),e("li",[t._v("不得超过 验证人的"),e("code",[t._v("commission-max-change-rate")]),t._v(", 该参数标识"),e("strong",[t._v("每日")]),t._v("最大的百分点变化数。也就是，一个验证人在"),e("code",[t._v("commission-max-change-rate")]),t._v("的界限内每日一次可调整的最大佣金变化。")])]),t._v(" "),e("h2",{attrs:{id:"查看验证人的描述信息"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#查看验证人的描述信息"}},[t._v("#")]),t._v(" 查看验证人的描述信息")]),t._v(" "),e("p",[t._v("通过该命令查看验证人的描述信息:")]),t._v(" "),e("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"a2lkIHF1ZXJ5IHN0YWtpbmcgdmFsaWRhdG9yICZsdDthY2NvdW50X2Nvc21vcyZndDsK"}}),t._v(" "),e("h2",{attrs:{id:"跟踪验证人的签名信息"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#跟踪验证人的签名信息"}},[t._v("#")]),t._v(" 跟踪验证人的签名信息")]),t._v(" "),e("p",[t._v("你可以通过"),e("code",[t._v("signing-info")]),t._v("命令跟踪过往的验证人签名：")]),t._v(" "),e("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"a2lkIHF1ZXJ5IHNsYXNoaW5nIHNpZ25pbmctaW5mbyAmbHQ7dmFsaWRhdG9yLXB1YmtleSZndDtcCiAgLS1jaGFpbi1pZD0mbHQ7Y2hhaW5faWQmZ3Q7Cg=="}}),t._v(" "),e("h2",{attrs:{id:"unjail验证人"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#unjail验证人"}},[t._v("#")]),t._v(" unjail验证人")]),t._v(" "),e("p",[t._v('当验证人因停机而"jailed"(入狱)时，你必须用节点操作人帐户提交一笔'),e("code",[t._v("Unjail")]),t._v("交易，使其再次能够获得区块提交的奖励（奖励多少取决于分区的fee分配）。")]),t._v(" "),e("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"a2lkIHR4IHNsYXNoaW5nIHVuamFpbCBcCgktLWZyb209Jmx0O2tleV9uYW1lJmd0OyBcCgktLWNoYWluLWlkPSZsdDtjaGFpbl9pZCZndDsK"}}),t._v(" "),e("h2",{attrs:{id:"确认你的验证人节点正在运行"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#确认你的验证人节点正在运行"}},[t._v("#")]),t._v(" 确认你的验证人节点正在运行")]),t._v(" "),e("p",[t._v("如果下面的命令返回有内容就证明你的验证人正处于活跃状态:")]),t._v(" "),e("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"a2lkIHF1ZXJ5IHRlbmRlcm1pbnQtdmFsaWRhdG9yLXNldCB8IGdyZXAgJnF1b3Q7JChraWQgdGVuZGVybWludCBzaG93LXZhbGlkYXRvcikmcXVvdDsK"}}),t._v(" "),e("p",[t._v("你必须要在"),e("a",{attrs:{href:"https://explorecosmos.network/validators",target:"_blank",rel:"noopener noreferrer"}},[t._v("区块浏览器"),e("OutboundLink")],1),t._v("中看见你的验证人节点信息。你可以在"),e("code",[t._v("~/.kitools/config/priv_validator.json")]),t._v("文件中找到"),e("code",[t._v("bech32")]),t._v("编码格式的"),e("code",[t._v("address")]),t._v("。")]),t._v(" "),e("div",{staticClass:"custom-block warning"},[e("p",{staticClass:"custom-block-title"},[t._v("注意")]),t._v(" "),e("p",[t._v("为了能进入验证人集合，你的权重必须超过第100名的验证人。")])]),t._v(" "),e("h2",{attrs:{id:"常见问题"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#常见问题"}},[t._v("#")]),t._v(" 常见问题")]),t._v(" "),e("h3",{attrs:{id:"问题-1-我的验证人的voting-power-0"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#问题-1-我的验证人的voting-power-0"}},[t._v("#")]),t._v(" 问题 #1 : 我的验证人的"),e("code",[t._v("voting_power: 0")])]),t._v(" "),e("p",[t._v("你的验证人已经是jailed状态。如果验证人在最近"),e("code",[t._v("10000")]),t._v("个区块中有超过"),e("code",[t._v("500")]),t._v("个区块没有进行投票，或者被发现双签，就会被jail掉。")]),t._v(" "),e("p",[t._v("如果被因为掉线而遭到jail，你可以重获你的投票股权以重回验证人队伍。首先，如果"),e("code",[t._v("kid")]),t._v("没有运行，请再次启动：")]),t._v(" "),e("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"a2lkIHN0YXJ0Cg=="}}),t._v(" "),e("p",[t._v("等待你的全节点追赶上最新的区块高度。然后，运行如下命令。接着，你可以"),e("a",{attrs:{href:""}},[t._v("unjail你的验证人")]),t._v("。")]),t._v(" "),e("p",[t._v("最后，检查你的验证人看看投票股权是否恢复：")]),t._v(" "),e("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"a2lkIHN0YXR1cwo="}}),t._v(" "),e("p",[t._v("你可能会注意到你的投票权比之前要少。这是由于你的下线受到的削减处罚！")]),t._v(" "),e("h3",{attrs:{id:"问题-2-我的kid由于too-many-open-files而崩溃"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#问题-2-我的kid由于too-many-open-files而崩溃"}},[t._v("#")]),t._v(" 问题 #2 : 我的"),e("code",[t._v("kid")]),t._v("由于"),e("code",[t._v("too many open files")]),t._v("而崩溃")]),t._v(" "),e("p",[t._v("Linux可以打开的默认文件数（每个进程）是1024。已知"),e("code",[t._v("kid")]),t._v("可以打开超过1024个文件。这会导致进程崩溃。快速修复运行"),e("code",[t._v("ulimit -n 4096")]),t._v("（增加允许的打开文件数）来快速修复，然后使用"),e("code",[t._v("kid start")]),t._v("重新启动进程。如果你使用"),e("code",[t._v("systemd")]),t._v("或其他进程管理器来启动"),e("code",[t._v("kid")]),t._v("，则可能需要在该级别进行一些配置。解决此问题的示例"),e("code",[t._v("systemd")]),t._v("文件如下：")]),t._v(" "),e("tm-code-block",{staticClass:"codeblock",attrs:{language:"toml",base64:"IyAvZXRjL3N5c3RlbWQvc3lzdGVtL2tpZC5zZXJ2aWNlCltVbml0XQpEZXNjcmlwdGlvbj1Db3Ntb3MgR2FpYSBOb2RlCkFmdGVyPW5ldHdvcmsudGFyZ2V0CgpbU2VydmljZV0KVHlwZT1zaW1wbGUKVXNlcj11YnVudHUKV29ya2luZ0RpcmVjdG9yeT0vaG9tZS91YnVudHUKRXhlY1N0YXJ0PS9ob21lL3VidW50dS9nby9iaW4va2lkIHN0YXJ0ClJlc3RhcnQ9b24tZmFpbHVyZQpSZXN0YXJ0U2VjPTMKTGltaXROT0ZJTEU9NDA5NgoKW0luc3RhbGxdCldhbnRlZEJ5PW11bHRpLXVzZXIudGFyZ2V0Cg=="}})],1)}),[],!1,null,null,null);a.default=v.exports}}]);