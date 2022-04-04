(window.webpackJsonp=window.webpackJsonp||[]).push([[161],{690:function(e,t,a){"use strict";a.r(t);var o=a(1),i=Object(o.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"setting-up-tendermint-kms-ledger"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#setting-up-tendermint-kms-ledger"}},[e._v("#")]),e._v(" Setting up Tendermint KMS + Ledger")]),e._v(" "),a("div",{staticClass:"custom-block danger"},[a("p",{staticClass:"custom-block-title"},[e._v("Warning")]),e._v(" "),a("p",[e._v("The following instructions are a brief walkthrough and not a comprehensive guideline. You should consider and "),a("RouterLink",{attrs:{to:"/validators/security.html"}},[e._v("research more about the security implications")]),e._v(" of activating an external KMS.")],1)]),e._v(" "),a("div",{staticClass:"custom-block danger"},[a("p",{staticClass:"custom-block-title"},[e._v("Warning")]),e._v(" "),a("p",[e._v("KMS and Ledger Tendermint app are currently work in progress. Details may vary. Use with care under your own risk.")])]),e._v(" "),a("h2",{attrs:{id:"tendermint-validator-app-for-ledger-devices"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tendermint-validator-app-for-ledger-devices"}},[e._v("#")]),e._v(" Tendermint Validator app (for Ledger devices)")]),e._v(" "),a("p",[e._v("You should be able to find the Tendermint app in Ledger Live.")]),e._v(" "),a("p",[a("em",[e._v("Note: at the moment, you might need to enable "),a("code",[e._v("developer mode")]),e._v(" in Ledger Live settings")])]),e._v(" "),a("h2",{attrs:{id:"kms-configuration"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#kms-configuration"}},[e._v("#")]),e._v(" KMS configuration")]),e._v(" "),a("p",[e._v("In this section, we will configure a KMS to use a Ledger device running the Tendermint Validator App.")]),e._v(" "),a("h3",{attrs:{id:"config-file"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#config-file"}},[e._v("#")]),e._v(" Config file")]),e._v(" "),a("p",[e._v("You can find other configuration examples "),a("a",{attrs:{href:"https://github.com/iqlusioninc/tmkms/blob/master/tmkms.toml.example",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),a("OutboundLink")],1)]),e._v(" "),a("ul",[a("li",[e._v("Create a "),a("code",[e._v("~/.tmkms/tmkms.toml")]),e._v(" file with the following content (use an adequate "),a("code",[e._v("chain_id")]),e._v(")")])]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"toml",base64:"IyBFeGFtcGxlIEtNUyBjb25maWd1cmF0aW9uIGZpbGUKW1t2YWxpZGF0b3JdXQphZGRyID0gJnF1b3Q7dGNwOi8vbG9jYWxob3N0OjI2NjU4JnF1b3Q7ICAgICMgb3IgJnF1b3Q7dW5peDovLy9wYXRoL3RvL3NvY2tldCZxdW90OwpjaGFpbl9pZCA9ICZxdW90O2tpdG9vbHMtMTEwMDEmcXVvdDsKcmVjb25uZWN0ID0gdHJ1ZSAjIHRydWUgaXMgdGhlIGRlZmF1bHQKc2VjcmV0X2tleSA9ICZxdW90O34vLnRta21zL3NlY3JldF9jb25uZWN0aW9uLmtleSZxdW90OwoKW1twcm92aWRlcnMubGVkZ2VydG1dXQpjaGFpbl9pZHMgPSBbJnF1b3Q7a2l0b29scy0xMTAwMSZxdW90O10K"}}),e._v(" "),a("ul",[a("li",[e._v("Edit "),a("code",[e._v("addr")]),e._v(" to point to your "),a("code",[e._v("kid")]),e._v(" instance.")]),e._v(" "),a("li",[e._v("Adjust "),a("code",[e._v("chain-id")]),e._v(" to match your "),a("code",[e._v(".kitools/config/config.toml")]),e._v(" settings.")]),e._v(" "),a("li",[a("code",[e._v("provider.ledgertm")]),e._v(" has not additional parameters at the moment, however, it is important that you keep that header to enable the feature.")])]),e._v(" "),a("p",[a("em",[e._v("Plug your Ledger device and open the Tendermint validator app.")])]),e._v(" "),a("h3",{attrs:{id:"generate-secret-key"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#generate-secret-key"}},[e._v("#")]),e._v(" Generate secret key")]),e._v(" "),a("p",[e._v("Now you need to generate secret_key:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"dG1rbXMga2V5Z2VuIH4vLnRta21zL3NlY3JldF9jb25uZWN0aW9uLmtleQo="}}),e._v(" "),a("h3",{attrs:{id:"retrieve-validator-key"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#retrieve-validator-key"}},[e._v("#")]),e._v(" Retrieve validator key")]),e._v(" "),a("p",[e._v("The last step is to retrieve the validator key that you will use in "),a("code",[e._v("kid")]),e._v(".")]),e._v(" "),a("p",[e._v("Start the KMS:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"dG1rbXMgc3RhcnQgLWMgfi8udG1rbXMvdG1rbXMudG9tbAo="}}),e._v(" "),a("p",[e._v("The output should look similar to:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"text",base64:"MDc6Mjg6MjQgW0lORk9dIHRta21zIDAuMy4wIHN0YXJ0aW5nIHVwLi4uCjA3OjI4OjI0IFtJTkZPXSBba2V5cmluZzpsZWRnZXJ0bTpsZWRnZXJ0bV0gYWRkZWQgdmFsaWRhdG9yIGtleSBjb3Ntb3N2YWxjb25zcHViMXpjamR1ZXBxeTUzbTM5cHJncDlkejNuejk2a2FhdjNlbDVlMHRoOGx0d2NmOGNwYXZxZHZweGdyNXNsc2Q2d3o2ZgowNzoyODoyNCBbSU5GT10gS01TIG5vZGUgSUQ6IDFCQzEyMzE0RTJFMUMyOTAxNUI2NjAxN0EzOTdGMTcwQzZFQ0RFNEEK"}}),e._v(" "),a("p",[e._v("The KMS may complain that it cannot connect to kid. That is fine, we will fix it in the next section.")]),e._v(" "),a("p",[e._v("This output indicates the validator key linked to this particular device is: "),a("code",[e._v("cosmosvalconspub1zcjduepqy53m39prgp9dz3nz96kaav3el5e0th8ltwcf8cpavqdvpxgr5slsd6wz6f")])]),e._v(" "),a("p",[e._v("Take note of the validator pubkey that appears in your screen. "),a("em",[e._v("We will use it in the next section.")])]),e._v(" "),a("h2",{attrs:{id:"gaia-configuration"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#gaia-configuration"}},[e._v("#")]),e._v(" Gaia configuration")]),e._v(" "),a("p",[e._v("You need to enable KMS access by editing "),a("code",[e._v(".kitools/config/config.toml")]),e._v(". In this file, modify "),a("code",[e._v("priv_validator_laddr")]),e._v(" to create a listening address/port or a unix socket in "),a("code",[e._v("kid")]),e._v(".")]),e._v(" "),a("p",[e._v("For example:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"toml",base64:"Li4uCiMgVENQIG9yIFVOSVggc29ja2V0IGFkZHJlc3MgZm9yIFRlbmRlcm1pbnQgdG8gbGlzdGVuIG9uIGZvcgojIGNvbm5lY3Rpb25zIGZyb20gYW4gZXh0ZXJuYWwgUHJpdlZhbGlkYXRvciBwcm9jZXNzCnByaXZfdmFsaWRhdG9yX2xhZGRyID0gJnF1b3Q7dGNwOi8vMTI3LjAuMC4xOjI2NjU4JnF1b3Q7Ci4uLgo="}}),e._v(" "),a("p",[e._v("Let's assume that you have set up your validator account and called it "),a("code",[e._v("kmsval")]),e._v(". You can tell kid the key that we've got in the previous section.")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"a2lkIGdlbnR4IC0tbmFtZSBrbXN2YWwgLS1wdWJrZXkgey5WYWxpZGF0b3JLZXl9IAo="}}),e._v(" "),a("p",[e._v("Now start "),a("code",[e._v("kid")]),e._v(". You should see that the KMS connects and receives a signature request.")]),e._v(" "),a("p",[e._v("Once the ledger receives the first message, it will ask for confirmation that the values are adequate.")]),e._v(" "),a("p",[a("img",{attrs:{src:"ledger_1.jpg",alt:""}})]),e._v(" "),a("p",[e._v("Click the right button, if the height and round are correct.")]),e._v(" "),a("p",[e._v("After that, you will see that the KMS will start forwarding all signature requests to the ledger:")]),e._v(" "),a("p",[a("img",{attrs:{src:"ledger_2.jpg",alt:""}})]),e._v(" "),a("div",{staticClass:"custom-block danger"},[a("p",{staticClass:"custom-block-title"},[e._v("Warning")]),e._v(" "),a("p",[e._v("The word TEST in the second picture, second line appears because they were taken on a pre-release version.")]),e._v(" "),a("p",[e._v("Once the app as been released in Ledger's app store, this word should NOT appear.")])])],1)}),[],!1,null,null,null);t.default=i.exports}}]);