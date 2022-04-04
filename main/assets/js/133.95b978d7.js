(window.webpackJsonp=window.webpackJsonp||[]).push([[133],{724:function(t,r,a){"use strict";a.r(r);var e=a(1),s=Object(e.a)({},(function(){var t=this,r=t.$createElement,a=t._self._c||r;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"검증인-밸리데이터-개요"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#검증인-밸리데이터-개요"}},[t._v("#")]),t._v(" 검증인(밸리데이터) 개요")]),t._v(" "),a("h2",{attrs:{id:"소개"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#소개"}},[t._v("#")]),t._v(" 소개")]),t._v(" "),a("p",[a("RouterLink",{attrs:{to:"/introduction/cosmos-hub.html"}},[t._v("코스모스 허브")]),t._v("는 "),a("RouterLink",{attrs:{to:"/introduction/tendermint.html"}},[t._v("텐더민트")]),t._v(" 기반으로 만들어졌으며 특정 검증인들이 블록체인에 새로운 블록을 기록하는 절차를 기반으로 설계되었습니다. 검증인들은 각 검증인들의 프라이빗키로 서명된 암호화된 표(votes)를 전파하면서 합의 프로토콜에 참여합니다.")],1),t._v(" "),a("p",[t._v("검증인 후보는 본인들의 아톰을 자체적으로 위임하거나, 위임자들의 아톰을 위임받을 수 있습니다. 코스모스 허브는 100개의 검증인으로 시작하여 300개의 검증인으로 숫자를 늘려나갈 예정입니다. 검증인은 위임량에 따라서 정해지며, 상위 100위 검증인은 코스모스 검증인으로 선출됩니다.")]),t._v(" "),a("p",[t._v("검증인들과 위임자들은 텐더민트 합의 프로토콜에 참여하며 블록생성에 대한 보상을 지급받게 됩니다. 초기에 트랜잭션 수수료는 아톰으로 결제되지만, 거버넌스로 통과된 '화이트리스트 토큰'들이 수수료 토큰으로 이용될 수 있습니다. 추가적으로 검증인들은 본인의 검증인 서비스 제공에 대한 커미션을 측정할 수 있습니다.")]),t._v(" "),a("p",[t._v("만약 검증인이 이중서명(double sign)을 하거나, 자주 오프라인 되거나 또는 거버넌스에 참여하지 않는 경우, 그들의 아톰과 해당 검증인에게 위임된 아톰은 '슬래싱'당할 수 있습니다. 슬래싱 페널티는 악의적 행동의 중대성에 따라 비례합니다.")]),t._v(" "),a("h2",{attrs:{id:"하드웨어"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#하드웨어"}},[t._v("#")]),t._v(" 하드웨어")]),t._v(" "),a("p",[t._v("현재 검증인의 키 관리에 적합한 클라우드 솔루션은 없습니다. 앞으로 클라우드 SGX 도입이 되면서 조금 더 안전한 솔루션이 제공될 수 있을 것으로 기대되고 있습니다. 하지만 현재로써 클라우드 키 관리에 리스크가 있기 때문에 검증인들은 제한된 안전한 구역에 장비를 세팅하는 것을 추천합니다. 보안이 확보되는 특정 데이터 센터의 코로케이션(co-location) 같은 형태로 운영이 될 수 있습니다.")]),t._v(" "),a("p",[t._v("검증인들은 서버 장비가 운영되는 데이터센터에 스토리지 백업, 복수 회선, 그리고 전력 백업 등의 시스템이 갖춰져 있는 것을 확인해야 합니다. 광선, 방화벽, 스위칭 등 또한 중복되어있는 것을 추천드립니다. 하드웨어 성능에는 중저형 서버로 시작해도 충분할 것으로 예상되나, 충분한 검증과 테스팅을 실행하시는 것을 추천드립니다.")]),t._v(" "),a("p",[t._v("코스모스 생태계 초기의 네트워크 사용량은 크지 않을 것으로 예상되며, 현재 테스트넷은 대량의 리소스를 필요로 하지 않습니다. 하지만 네트워크가 성장하며 대역폭, CPU와 메모리 사용량이 높아질 것으로 예상됩니다. 추가적으로, 몇년의 블록체인 기록을 저장해야되기 때문에 대용량 하드드라이브를 이용하시는 것을 추천드립니다.")]),t._v(" "),a("h2",{attrs:{id:"웹사이트-세팅하기"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#웹사이트-세팅하기"}},[t._v("#")]),t._v(" 웹사이트 세팅하기")]),t._v(" "),a("p",[t._v("검증인의 고유 웹사이트를 만드시고, 코스모스 "),a("a",{attrs:{href:"https://forum.cosmos.network/t/validator-candidates-websites/127/3",target:"_blank",rel:"noopener noreferrer"}},[t._v("포럼"),a("OutboundLink")],1),t._v("을 통해서 검증인 참여 의사를 알려주십시오. 위임인들은 위임 대상 검증인에 대한 정보를 확인하려 할 수 있으니, 관련 정보를 기제해주시기 바랍니다.")]),t._v(" "),a("h2",{attrs:{id:"법적-검토"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#법적-검토"}},[t._v("#")]),t._v(" 법적 검토")]),t._v(" "),a("p",[t._v("검증인 사업을 운영하시기 전에 전문 법적 검토를 미리 받으실 것을 추천드립니다.")]),t._v(" "),a("h2",{attrs:{id:"검증인-커뮤니티"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#검증인-커뮤니티"}},[t._v("#")]),t._v(" 검증인 커뮤니티")]),t._v(" "),a("p",[t._v("추가적으로 검증인을 운영하는 것에 대한 질문과 정보는 검증인 커뮤니티 채팅방과 포럼을 이용하세요:")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://riot.im/app/#/room/#cosmos_validators:matrix.org",target:"_blank",rel:"noopener noreferrer"}},[t._v("검증인 채팅"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://forum.cosmos.network/c/validating",target:"_blank",rel:"noopener noreferrer"}},[t._v("검증인 포럼"),a("OutboundLink")],1)])])])}),[],!1,null,null,null);r.default=s.exports}}]);