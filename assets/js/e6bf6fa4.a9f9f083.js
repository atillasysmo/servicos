"use strict";(self.webpackChunkservicos=self.webpackChunkservicos||[]).push([[2283],{3905:(e,a,t)=>{t.d(a,{Zo:()=>c,kt:()=>m});var o=t(7294);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function n(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);a&&(o=o.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,o)}return t}function l(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?n(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):n(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function i(e,a){if(null==e)return{};var t,o,r=function(e,a){if(null==e)return{};var t,o,r={},n=Object.keys(e);for(o=0;o<n.length;o++)t=n[o],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)t=n[o],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=o.createContext({}),d=function(e){var a=o.useContext(s),t=a;return e&&(t="function"==typeof e?e(a):l(l({},a),e)),t},c=function(e){var a=d(e.components);return o.createElement(s.Provider,{value:a},e.children)},p={inlineCode:"code",wrapper:function(e){var a=e.children;return o.createElement(o.Fragment,{},a)}},u=o.forwardRef((function(e,a){var t=e.components,r=e.mdxType,n=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=d(t),m=r,b=u["".concat(s,".").concat(m)]||u[m]||p[m]||n;return t?o.createElement(b,l(l({ref:a},c),{},{components:t})):o.createElement(b,l({ref:a},c))}));function m(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var n=t.length,l=new Array(n);l[0]=u;var i={};for(var s in a)hasOwnProperty.call(a,s)&&(i[s]=a[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var d=2;d<n;d++)l[d]=t[d];return o.createElement.apply(null,l)}return o.createElement.apply(null,t)}u.displayName="MDXCreateElement"},7038:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>s,contentTitle:()=>l,default:()=>p,frontMatter:()=>n,metadata:()=>i,toc:()=>d});var o=t(7462),r=(t(7294),t(3905));const n={sidebar_position:1},l="Principais Erros",i={unversionedId:"Web/principais-erros",id:"Web/principais-erros",title:"Principais Erros",description:"Time out no Wildfly",source:"@site/docs/Web/principais-erros.md",sourceDirName:"Web",slug:"/Web/principais-erros",permalink:"/docs/Web/principais-erros",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Web/principais-erros.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Web ",permalink:"/docs/category/web-"},next:{title:"Comandos Docker",permalink:"/docs/Web/comandos-docker"}},s={},d=[{value:"Time out no Wildfly",id:"time-out-no-wildfly",level:2},{value:"Locky nos bancos web",id:"locky-nos-bancos-web",level:2},{value:"Wildfly n\xe3o sobe",id:"wildfly-n\xe3o-sobe",level:2},{value:"Ambiente Linux",id:"ambiente-linux",level:3},{value:"Erro ao atualizar Java - Devops",id:"erro-ao-atualizar-java---devops",level:2},{value:"Transacionadores duplicados - Erro Integrador",id:"transacionadores-duplicados---erro-integrador",level:2},{value:"Excluir tabelas pr\xe9load - Reinstala\xe7\xe3o Web.",id:"excluir-tabelas-pr\xe9load---reinstala\xe7\xe3o-web",level:2}],c={toc:d};function p(e){let{components:a,...t}=e;return(0,r.kt)("wrapper",(0,o.Z)({},c,t,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"principais-erros"},"Principais Erros"),(0,r.kt)("h2",{id:"time-out-no-wildfly"},"Time out no Wildfly"),(0,r.kt)("admonition",{title:"time out no wildfly",type:"danger"},(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"O erro ",(0,r.kt)("b",null,"time out")," ocorre por n\xe3o haver conex\xe3o com os bancos."))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Neste caso deve-se averiguar se os bancos est\xe3o conectados corretamente."),(0,r.kt)("li",{parentName:"ul"},"Poss\xedveis causas ",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Troca de IP no servidor."),(0,r.kt)("li",{parentName:"ul"},"Porta 5432 bloqueada."),(0,r.kt)("li",{parentName:"ul"},"Banco dropado."),(0,r.kt)("li",{parentName:"ul"},"PostgreSQL travado (Windows).")))),(0,r.kt)("h2",{id:"locky-nos-bancos-web"},"Locky nos bancos web"),(0,r.kt)("admonition",{title:"Pacote Enable",type:"danger"},(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"Este erro ocorre ao tentar subir um pacote no wildfly "))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Poss\xedveis causas "),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Lock nos bancos"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Para confirmar se h\xe1 um lock no banco ",(0,r.kt)("b",null,"dados"),", ",(0,r.kt)("b",null,"sysmo-modular"),", ",(0,r.kt)("b",null,"sysmo-integrador")," ou ",(0,r.kt)("b",null,"sysmo-api")," utilize o select abaixo:"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-md",metastring:'title="Select"',title:'"Select"'},"select locked from databasechangeloglock; \n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Caso exista o lock ativo, execute o update abaixo: :")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-md",metastring:'title="Update"',title:'"Update"'},"update databasechangeloglock set locked = false;\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"O select abaixo \xe9 especifico para o banco ",(0,r.kt)("b",null,"dados"),":")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-md",metastring:'title="Select"',title:'"Select"'},"select locked from databasechangeloglocksysmoweb;\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Caso exista o lock ativo, execute o update abaixo: :")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-md",metastring:'title="Update"',title:'"Update"'},"update databasechangeloglocksysmoweb set locked = false;\n")),(0,r.kt)("h2",{id:"wildfly-n\xe3o-sobe"},"Wildfly n\xe3o sobe"),(0,r.kt)("admonition",{title:"Wildfly n\xe3o sobe",type:"danger"},(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"Este erro ocorre ao reiniciar o docker web e o Wildfly(9960) n\xe3o ficar ativo"))),(0,r.kt)("h3",{id:"ambiente-linux"},"Ambiente Linux"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Para iniciar o processo \xe9 necess\xe1rio acessar o servidor pelo putty.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"1\xba Executar o comando abaixo:"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-md",metastring:'title="Copiar standalone-full.xml"',title:'"Copiar','standalone-full.xml"':!0},"docker cp sysmo-web:/opt/jboss/wildfly/standalone/configuration/standalone-full.xml /tmp/arquivos/\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Este comando copia o arquivo standalone.xml para o diretorio /tmp/arquivos/")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"2\xba Execute o comando: "))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-md",metastring:'title="Abrir o arquivo standalone-full.xml"',title:'"Abrir',o:!0,arquivo:!0,'standalone-full.xml"':!0},"vi /tmp/arquivos/standalone-full.xml\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Este comando ir\xe1 abrir o arquivo pelo putty, liberando a edi\xe7\xe3o do mesmo.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"3\xba des\xe7a para o final do arquivo e identifique os pacotes, aperte a tecla ",(0,r.kt)("b",null," insert")," para editar, e acrescente no final de todos os pacotes a informa\xe7\xe3o  enabled = false.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"O resultado deve ficar conforme abaixo: "))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'<deployments>\n<deployment name="s1-modular-pricing-ear-1.00.29.000.ear" runtime-name="s1-modular-pricing-ear-1.00.29.000.ear" enabled="false">\n<content sha1="68ce62f11847b831d24d6bb37b0947fc7cb60686"/>\n</deployment>\n<deployment name="principal-web-1.00.30.004.war" runtime-name="principal-web-1.00.30.004.war" enabled="false">\n<content sha1="65d5d7ba521fea1845ee86d810dad5c6cd0d071f"/>\n</deployment>\n<deployment name="s1-api-ear-1.00.30.004.ear" runtime-name="s1-api-ear-1.00.30.004.ear" enabled="false">\n<content sha1="471b2056919b49f811a8083909b5e701216275aa"/>\n</deployment>\n<deployment name="s1-modular-base-ear-1.00.30.003.ear" runtime-name="s1-modular-base-ear-1.00.30.003.ear" enabled="false">\n<content sha1="6f3da9f23e506838c7763a3e6a41ff70bf8f28e4"/>\n</deployment>\n<deployment name="sysmo-modular-preload-ear-1.00.30.001.ear" runtime-name="sysmo-modular-preload-ear-1.00.30.001.ear" enabled="false">\n<content sha1="21be96a9d1c8f2d5807d64a11f1bad18d3379038"/>\n</deployment>\n<deployment name="sysmo-integrador-ear-1.00.07.005.ear" runtime-name="sysmo-integrador-ear-1.00.07.005.ear" enabled="false">\n<content sha1="14dbec51ce4b23f3697c765bada8a2cfbc5f2d37"/>\n</deployment>\n</deployments>\n</server>\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Ap\xf3s inserir ",(0,r.kt)("b",null,'"enabled=false"')," em todos, salve o arquivo  apertando a tecla ",(0,r.kt)("b",null,"esc"),", digite ",(0,r.kt)("b",null,":x")," e depois a tecla ",(0,r.kt)("b",null,"enter"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"4\xba execute o comando abaixo, pare retornar o arquivo ",(0,r.kt)("b",null,"standalone.xml")," ao diretorio tmp/arquivos para dentro do docker."))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-md",metastring:'title="Retornar o arquivo standalone-full.xml"',title:'"Retornar',o:!0,arquivo:!0,'standalone-full.xml"':!0},"docker cp /tmp/arquivos/standalone-full.xml  sysmo-web:/opt/jboss/wildfly/standalone/configuration/standalone-full.xml\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"5\xba execute o comando abaixo para reiniciar o docker. ")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-md",metastring:'title="Abrir o arquivo standalone-full.xml"',title:'"Abrir',o:!0,arquivo:!0,'standalone-full.xml"':!0},"docker restart sysmo-web\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Ap\xf3s executar os passos acima corretamente, os pacotes no Wildfly(9960) v\xe3o estar desativados, ser\xe1 necess\xe1rio ativar todos. ")),(0,r.kt)("h2",{id:"erro-ao-atualizar-java---devops"},"Erro ao atualizar Java - Devops"),(0,r.kt)("admonition",{title:"Erro ao atualizar Java via Devops",type:"danger"},(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"Caso ocorra o erro pelo Devops, \xe9 provavel que o servidor esteja com as libera\xe7\xf5es de porta bloqueadas."))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Ser\xe1 Comando pode ser executado via Putty")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"sudo wget ftp://aws-admin.sysmo.com.br/dockerized-web/openj9-install.sh -O openj9-install.sh --ftp-user=equipeweb --ftp-password=36310600$ && sh openj9-install.sh sysmo-web\n")),(0,r.kt)("h2",{id:"transacionadores-duplicados---erro-integrador"},"Transacionadores duplicados - Erro Integrador"),(0,r.kt)("admonition",{title:"time out no wildfly",type:"danger"},(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"Este erro ocorre nos processos do sysmo integrador: "),(0,r.kt)("li",{parentName:"ul"},"[ERP]"," - A CADA 5 MIN - (TRANSACIONADORES - PR\xc9-CADASTROS)"))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Para confirmar se h\xe1 ",(0,r.kt)("b",null,"Transacionadores")," duplicados, utilize o select abaixo:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-md",metastring:'title="Select"',title:'"Select"'},"with documentosValidos as (\nselect\n    case\n        when (lpad( substring(tra.cgc::varchar, 1, 1), case when tra.pss = 'F' then 11 else 14 end , substring(tra.cgc::varchar, 1, 1) )::numeric != tra.cgc\n        and (\n        select\n            RET_VALIDO retorno\n        from\n            PCD_VALIDAR_CNPJ_CPF (replace(tra.cgc::varchar, '.0', ''))) >0 ) then tra.cgc\n        else null end as numerodocumento\n    from\n        trstra01 tra)\nselect\n    cod as codigoTransacionador,\n    cgc as documento,\n    dtx as dataExclusao\nfrom\n    trstra01\nwhere\n    cgc in (\n    select\n        cgc\n    from\n        trstra01 t\n    group by\n        cgc\n    having\n        count(cgc) > 1)\n    and exists (\n    select\n        1\n    from\n        documentosValidos\n    where\n        documentosValidos.numerodocumento = cgc)\norder by\n    cgc desc;\n\n")),(0,r.kt)("h2",{id:"excluir-tabelas-pr\xe9load---reinstala\xe7\xe3o-web"},"Excluir tabelas pr\xe9load - Reinstala\xe7\xe3o Web."),(0,r.kt)("admonition",{title:"Erro na integra\xe7\xe3o de dados ap\xf3s reinstala\xe7\xe3o.",type:"danger"}),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Caso o cliente realize uma reinstala\xe7\xe3o do servidor web, ser\xe1 necess\xe1rio executar os deletes abaixo:"),(0,r.kt)("li",{parentName:"ul"},"Deve-se executar no banco dados.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-md",metastring:'title="Deletes"',title:'"Deletes"'},"delete from tb_b2cprodutopreload;\ndelete from tb_cartaofidelidadeextratopreload;\ndelete from tb_cartaofidelidadepreload;\ndelete from tb_personapreload;\ndelete from tb_precadastropreload;\ndelete from tb_produtocompradorpreload;\ndelete from tb_produtoempresapreload;\ndelete from tb_produtoimagempreload;\ndelete from tb_produtopreload;\ndelete from tb_transacionadorpreload;\ndelete from tb_pontuacaopreload;\n")))}p.isMDXComponent=!0}}]);