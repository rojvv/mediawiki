// deno-lint-ignore-file
export interface Params {
  [key: string]: any;
}

export interface ParamsAbusefiltercheckmatch extends Params {
  filter: string;
  vars?: string;
  rcid?: number;
  logid?: number;
}

export interface ParamsAbusefilterchecksyntax extends Params {
  filter: string;
}

export interface ParamsAbusefilterevalexpression extends Params {
  expression: string;
  prettyprint?: boolean;
}

export interface ParamsAbusefilterunblockautopromote extends Params {
  user: string;
  token: string;
}

export interface ParamsAbuselogprivatedetails extends Params {
  logid?: number;
  reason?: string;
  token: string;
}

export interface ParamsAggregategroups extends Params {
  do_: "add" | "associate" | "dissociate" | "remove" | "update" | string;
  aggregategroup?: string;
  group?: string;
  groupname?: string;
  groupdescription?: string;
  token: string;
}

export interface ParamsAntispoof extends Params {
  username: string;
}

export interface ParamsBlock extends Params {
  user?: string;
  userid?: number;
  expiry?: string;
  reason?: string;
  anononly?: boolean;
  nocreate?: boolean;
  autoblock?: boolean;
  noemail?: boolean;
  hidename?: boolean;
  allowusertalk?: boolean;
  reblock?: boolean;
  watchuser?: boolean;
  watchlistexpiry?: string;
  tags?: "possible vandalism" | "repeating characters" | string;
  partial?: boolean;
  pagerestrictions?: string;
  namespacerestrictions?: string;
  token: string;
}

export interface ParamsBouncehandler extends Params {
  email: string;
}

export interface ParamsCategorytree extends Params {
  category: string;
  options?: string;
}

export interface ParamsCentralauthtoken extends Params {
}

export interface ParamsCentralnoticecdncacheupdatebanner extends Params {
  banner: string;
  language: string;
  token: string;
}

export interface ParamsCentralnoticechoicedata extends Params {
  project: string;
  language: string;
}

export interface ParamsCentralnoticequerycampaign extends Params {
  campaign?: string;
}

export interface ParamsChangeauthenticationdata extends Params {
  changeauthrequest: string;
  changeauthtoken: string;
}

export interface ParamsChangecontentmodel extends Params {
  title?: string;
  pageid?: number;
  summary?: string;
  tags?: "possible vandalism" | "repeating characters" | string;
  model:
    | "GadgetDefinition"
    | "Json.JsonConfig"
    | "JsonSchema"
    | "Map.JsonConfig"
    | "MassMessageListContent"
    | "NewsletterContent"
    | "Scribunto"
    | "SecurePoll"
    | "Tabular.JsonConfig"
    | "css"
    | "javascript"
    | "json"
    | "sanitized-css"
    | "text"
    | "translate-messagebundle"
    | "wikitext"
    | string;
  bot?: boolean;
  token: string;
}

export interface ParamsChecktoken extends Params {
  type:
    | "createaccount"
    | "csrf"
    | "deleteglobalaccount"
    | "login"
    | "patrol"
    | "rollback"
    | "setglobalaccountstatus"
    | "userrights"
    | "watch"
    | string;
  token: string;
  maxtokenage?: number;
}

export interface ParamsCirrusConfigDump extends Params {
  prop?: "globals" | "namespacemap" | "profiles" | "usertesting" | string;
}

export interface ParamsCirrusMappingDump extends Params {
}

export interface ParamsCirrusProfilesDump extends Params {
  verbose?: boolean;
}

export interface ParamsCirrusSettingsDump extends Params {
}

export interface ParamsClearhasmsg extends Params {
}

export interface ParamsClientlogin extends Params {
  loginrequests?: string;
  loginmessageformat?: "html" | "none" | "raw" | "wikitext" | string;
  loginmergerequestfields?: boolean;
  loginpreservestate?: boolean;
  loginreturnurl?: string;
  logincontinue?: boolean;
  logintoken: string;
}

export interface ParamsCollection extends Params {
  submodule:
    | "addarticle"
    | "addcategory"
    | "addchapter"
    | "clearcollection"
    | "getbookcreatorboxcontent"
    | "getcollection"
    | "getpopupdata"
    | "postcollection"
    | "removearticle"
    | "removeitem"
    | "renamechapter"
    | "setsorting"
    | "settitles"
    | "sortitems"
    | "suggestarticleaction"
    | "suggestundoarticleaction"
    | string;
}

export interface ParamsCompare extends Params {
  fromtitle?: string;
  fromid?: number;
  fromrev?: number;
  fromslots?: "main" | string;
  frompst?: boolean;
  fromtext?: string;
  fromcontentformat?:
    | "application/json"
    | "application/octet-stream"
    | "application/unknown"
    | "application/x-binary"
    | "text/css"
    | "text/javascript"
    | "text/plain"
    | "text/unknown"
    | "text/x-wiki"
    | "unknown/unknown"
    | string;
  fromcontentmodel?:
    | "GadgetDefinition"
    | "Json.JsonConfig"
    | "JsonSchema"
    | "Map.JsonConfig"
    | "MassMessageListContent"
    | "NewsletterContent"
    | "Scribunto"
    | "SecurePoll"
    | "Tabular.JsonConfig"
    | "css"
    | "flow-board"
    | "javascript"
    | "json"
    | "sanitized-css"
    | "text"
    | "translate-messagebundle"
    | "unknown"
    | "wikitext"
    | string;
  fromsection?: string;
  totitle?: string;
  toid?: number;
  torev?: number;
  torelative?: "cur" | "next" | "prev" | string;
  toslots?: "main" | string;
  topst?: boolean;
  totext?: string;
  tocontentformat?:
    | "application/json"
    | "application/octet-stream"
    | "application/unknown"
    | "application/x-binary"
    | "text/css"
    | "text/javascript"
    | "text/plain"
    | "text/unknown"
    | "text/x-wiki"
    | "unknown/unknown"
    | string;
  tocontentmodel?:
    | "GadgetDefinition"
    | "Json.JsonConfig"
    | "JsonSchema"
    | "Map.JsonConfig"
    | "MassMessageListContent"
    | "NewsletterContent"
    | "Scribunto"
    | "SecurePoll"
    | "Tabular.JsonConfig"
    | "css"
    | "flow-board"
    | "javascript"
    | "json"
    | "sanitized-css"
    | "text"
    | "translate-messagebundle"
    | "unknown"
    | "wikitext"
    | string;
  tosection?: string;
  prop?:
    | "comment"
    | "diff"
    | "diffsize"
    | "ids"
    | "parsedcomment"
    | "rel"
    | "size"
    | "timestamp"
    | "title"
    | "user"
    | string;
  slots?: "main" | string;
}

export interface ParamsCreateaccount extends Params {
  createrequests?: string;
  createmessageformat?: "html" | "none" | "raw" | "wikitext" | string;
  createmergerequestfields?: boolean;
  createpreservestate?: boolean;
  createreturnurl?: string;
  createcontinue?: boolean;
  createtoken: string;
}

export interface ParamsCreatelocalaccount extends Params {
  username: string;
  reason?: string;
  token: string;
}

export interface ParamsCspreport extends Params {
  reportonly?: boolean;
  source?: string;
}

export interface ParamsDelete extends Params {
  title?: string;
  pageid?: number;
  reason?: string;
  tags?: "possible vandalism" | "repeating characters" | string;
  deletetalk?: boolean;
  watch?: boolean;
  watchlist?: "nochange" | "preferences" | "unwatch" | "watch" | string;
  watchlistexpiry?: string;
  unwatch?: boolean;
  oldimage?: string;
  token: string;
}

export interface ParamsDeleteglobalaccount extends Params {
  user: string;
  reason?: string;
  token: string;
}

export interface ParamsDiscussiontoolscompare extends Params {
  fromtitle?: string;
  fromrev?: number;
  totitle?: string;
  torev?: number;
}

export interface ParamsDiscussiontoolsedit extends Params {
  paction: "addcomment" | "addtopic" | string;
  page: string;
  token: string;
  formtoken?: string;
  commentname?: string;
  commentid?: string;
  wikitext?: string;
  html?: string;
  summary?: string;
  sectiontitle?: string;
  useskin?:
    | "apioutput"
    | "cologneblue"
    | "fallback"
    | "minerva"
    | "modern"
    | "monobook"
    | "timeless"
    | "vector"
    | "vector-2022"
    | string;
  watchlist?: string;
  captchaid?: string;
  captchaword?: string;
  mobileformat?: boolean;
}

export interface ParamsDiscussiontoolsgetsubscriptions extends Params {
  commentname: string;
}

export interface ParamsDiscussiontoolspageinfo extends Params {
  page: string;
  oldid?: string;
  prop?: "threaditemshtml" | "transcludedfrom" | string;
}

export interface ParamsDiscussiontoolspreview extends Params {
  type: "reply" | "topic" | string;
  page: string;
  wikitext: string;
  sectiontitle?: string;
}

export interface ParamsDiscussiontoolssubscribe extends Params {
  page: string;
  token: string;
  commentname: string;
  subscribe: boolean;
}

export interface ParamsEchomarkread extends Params {
  wikis?:
    | "*"
    | "aawiki"
    | "aawikibooks"
    | "aawiktionary"
    | "abwiki"
    | "abwiktionary"
    | "acewiki"
    | "advisorswiki"
    | "advisorywiki"
    | "adywiki"
    | "afwiki"
    | "afwikibooks"
    | "afwikiquote"
    | "afwiktionary"
    | "akwiki"
    | "akwikibooks"
    | "akwiktionary"
    | "alswiki"
    | "altwiki"
    | "amiwiki"
    | "amwiki"
    | "amwikimedia"
    | "amwikiquote"
    | "amwiktionary"
    | "angwiki"
    | "angwikibooks"
    | "angwikiquote"
    | "angwikisource"
    | "angwiktionary"
    | "anwiki"
    | "anwiktionary"
    | "apiportalwiki"
    | "arbcom_cswiki"
    | "arbcom_dewiki"
    | "arbcom_enwiki"
    | "arbcom_fiwiki"
    | "arbcom_nlwiki"
    | "arbcom_ruwiki"
    | "arcwiki"
    | "arwiki"
    | "arwikibooks"
    | "arwikimedia"
    | "arwikinews"
    | "arwikiquote"
    | "arwikisource"
    | "arwikiversity"
    | "arwiktionary"
    | "arywiki"
    | "arzwiki"
    | "astwiki"
    | "astwikibooks"
    | "astwikiquote"
    | "astwiktionary"
    | "aswiki"
    | "aswikibooks"
    | "aswikisource"
    | "aswiktionary"
    | "atjwiki"
    | "auditcomwiki"
    | "avkwiki"
    | "avwiki"
    | "avwiktionary"
    | "awawiki"
    | "aywiki"
    | "aywikibooks"
    | "aywiktionary"
    | "azbwiki"
    | "azwiki"
    | "azwikibooks"
    | "azwikiquote"
    | "azwikisource"
    | "azwiktionary"
    | "banwiki"
    | "banwikisource"
    | "barwiki"
    | "bat_smgwiki"
    | "bawiki"
    | "bawikibooks"
    | "bclwiki"
    | "bclwiktionary"
    | "bdwikimedia"
    | "be_x_oldwiki"
    | "betawikiversity"
    | "bewiki"
    | "bewikibooks"
    | "bewikimedia"
    | "bewikiquote"
    | "bewikisource"
    | "bewiktionary"
    | "bgwiki"
    | "bgwikibooks"
    | "bgwikinews"
    | "bgwikiquote"
    | "bgwikisource"
    | "bgwiktionary"
    | "bhwiki"
    | "bhwiktionary"
    | "biwiki"
    | "biwikibooks"
    | "biwiktionary"
    | "bjnwiki"
    | "bmwiki"
    | "bmwikibooks"
    | "bmwikiquote"
    | "bmwiktionary"
    | "bnwiki"
    | "bnwikibooks"
    | "bnwikisource"
    | "bnwikivoyage"
    | "bnwiktionary"
    | "boardgovcomwiki"
    | "boardwiki"
    | "bowiki"
    | "bowikibooks"
    | "bowiktionary"
    | "bpywiki"
    | "brwiki"
    | "brwikimedia"
    | "brwikiquote"
    | "brwikisource"
    | "brwiktionary"
    | "bswiki"
    | "bswikibooks"
    | "bswikinews"
    | "bswikiquote"
    | "bswikisource"
    | "bswiktionary"
    | "bugwiki"
    | "bxrwiki"
    | "cawiki"
    | "cawikibooks"
    | "cawikimedia"
    | "cawikinews"
    | "cawikiquote"
    | "cawikisource"
    | "cawiktionary"
    | "cbk_zamwiki"
    | "cdowiki"
    | "cebwiki"
    | "cewiki"
    | "chairwiki"
    | "chapcomwiki"
    | "checkuserwiki"
    | "chowiki"
    | "chrwiki"
    | "chrwiktionary"
    | "chwiki"
    | "chwikibooks"
    | "chwiktionary"
    | "chywiki"
    | "ckbwiki"
    | "cnwikimedia"
    | "collabwiki"
    | "commonswiki"
    | "cowiki"
    | "cowikibooks"
    | "cowikimedia"
    | "cowikiquote"
    | "cowiktionary"
    | "crhwiki"
    | "crwiki"
    | "crwikiquote"
    | "crwiktionary"
    | "csbwiki"
    | "csbwiktionary"
    | "cswiki"
    | "cswikibooks"
    | "cswikinews"
    | "cswikiquote"
    | "cswikisource"
    | "cswikiversity"
    | "cswiktionary"
    | "cuwiki"
    | "cvwiki"
    | "cvwikibooks"
    | "cywiki"
    | "cywikibooks"
    | "cywikiquote"
    | "cywikisource"
    | "cywiktionary"
    | "dagwiki"
    | "dawiki"
    | "dawikibooks"
    | "dawikiquote"
    | "dawikisource"
    | "dawiktionary"
    | "dewiki"
    | "dewikibooks"
    | "dewikinews"
    | "dewikiquote"
    | "dewikisource"
    | "dewikiversity"
    | "dewikivoyage"
    | "dewiktionary"
    | "dinwiki"
    | "diqwiki"
    | "diqwiktionary"
    | "dkwikimedia"
    | "donatewiki"
    | "dsbwiki"
    | "dtywiki"
    | "dvwiki"
    | "dvwiktionary"
    | "dzwiki"
    | "dzwiktionary"
    | "ecwikimedia"
    | "eewiki"
    | "electcomwiki"
    | "elwiki"
    | "elwikibooks"
    | "elwikinews"
    | "elwikiquote"
    | "elwikisource"
    | "elwikiversity"
    | "elwikivoyage"
    | "elwiktionary"
    | "emlwiki"
    | "enwiki"
    | "enwikibooks"
    | "enwikinews"
    | "enwikiquote"
    | "enwikisource"
    | "enwikiversity"
    | "enwikivoyage"
    | "enwiktionary"
    | "eowiki"
    | "eowikibooks"
    | "eowikinews"
    | "eowikiquote"
    | "eowikisource"
    | "eowikivoyage"
    | "eowiktionary"
    | "eswiki"
    | "eswikibooks"
    | "eswikinews"
    | "eswikiquote"
    | "eswikisource"
    | "eswikiversity"
    | "eswikivoyage"
    | "eswiktionary"
    | "etwiki"
    | "etwikibooks"
    | "etwikimedia"
    | "etwikiquote"
    | "etwikisource"
    | "etwiktionary"
    | "euwiki"
    | "euwikibooks"
    | "euwikiquote"
    | "euwikisource"
    | "euwiktionary"
    | "execwiki"
    | "extwiki"
    | "fawiki"
    | "fawikibooks"
    | "fawikinews"
    | "fawikiquote"
    | "fawikisource"
    | "fawikivoyage"
    | "fawiktionary"
    | "fdcwiki"
    | "ffwiki"
    | "fiu_vrowiki"
    | "fiwiki"
    | "fiwikibooks"
    | "fiwikimedia"
    | "fiwikinews"
    | "fiwikiquote"
    | "fiwikisource"
    | "fiwikiversity"
    | "fiwikivoyage"
    | "fiwiktionary"
    | "fjwiki"
    | "fjwiktionary"
    | "foundationwiki"
    | "fowiki"
    | "fowikisource"
    | "fowiktionary"
    | "frpwiki"
    | "frrwiki"
    | "frwiki"
    | "frwikibooks"
    | "frwikinews"
    | "frwikiquote"
    | "frwikisource"
    | "frwikiversity"
    | "frwikivoyage"
    | "frwiktionary"
    | "furwiki"
    | "fywiki"
    | "fywikibooks"
    | "fywiktionary"
    | "gagwiki"
    | "ganwiki"
    | "gawiki"
    | "gawikibooks"
    | "gawikiquote"
    | "gawiktionary"
    | "gcrwiki"
    | "gdwiki"
    | "gdwiktionary"
    | "gewikimedia"
    | "glkwiki"
    | "glwiki"
    | "glwikibooks"
    | "glwikiquote"
    | "glwikisource"
    | "glwiktionary"
    | "gnwiki"
    | "gnwikibooks"
    | "gnwiktionary"
    | "gomwiki"
    | "gomwiktionary"
    | "gorwiki"
    | "gotwiki"
    | "gotwikibooks"
    | "grantswiki"
    | "grwikimedia"
    | "guwiki"
    | "guwikibooks"
    | "guwikiquote"
    | "guwikisource"
    | "guwiktionary"
    | "guwwiki"
    | "gvwiki"
    | "gvwiktionary"
    | "hakwiki"
    | "hawiki"
    | "hawiktionary"
    | "hawwiki"
    | "hewiki"
    | "hewikibooks"
    | "hewikinews"
    | "hewikiquote"
    | "hewikisource"
    | "hewikivoyage"
    | "hewiktionary"
    | "hifwiki"
    | "hifwiktionary"
    | "hiwiki"
    | "hiwikibooks"
    | "hiwikimedia"
    | "hiwikiquote"
    | "hiwikisource"
    | "hiwikiversity"
    | "hiwikivoyage"
    | "hiwiktionary"
    | "howiki"
    | "hrwiki"
    | "hrwikibooks"
    | "hrwikiquote"
    | "hrwikisource"
    | "hrwiktionary"
    | "hsbwiki"
    | "hsbwiktionary"
    | "htwiki"
    | "htwikisource"
    | "huwiki"
    | "huwikibooks"
    | "huwikinews"
    | "huwikiquote"
    | "huwikisource"
    | "huwiktionary"
    | "hywiki"
    | "hywikibooks"
    | "hywikiquote"
    | "hywikisource"
    | "hywiktionary"
    | "hywwiki"
    | "hzwiki"
    | "iawiki"
    | "iawikibooks"
    | "iawiktionary"
    | "id_internalwikimedia"
    | "idwiki"
    | "idwikibooks"
    | "idwikimedia"
    | "idwikiquote"
    | "idwikisource"
    | "idwiktionary"
    | "iegcomwiki"
    | "iewiki"
    | "iewikibooks"
    | "iewiktionary"
    | "igwiki"
    | "iiwiki"
    | "ikwiki"
    | "ikwiktionary"
    | "ilowiki"
    | "ilwikimedia"
    | "incubatorwiki"
    | "inhwiki"
    | "internalwiki"
    | "iowiki"
    | "iowiktionary"
    | "iswiki"
    | "iswikibooks"
    | "iswikiquote"
    | "iswikisource"
    | "iswiktionary"
    | "itwiki"
    | "itwikibooks"
    | "itwikinews"
    | "itwikiquote"
    | "itwikisource"
    | "itwikiversity"
    | "itwikivoyage"
    | "itwiktionary"
    | "iuwiki"
    | "iuwiktionary"
    | "jamwiki"
    | "jawiki"
    | "jawikibooks"
    | "jawikinews"
    | "jawikiquote"
    | "jawikisource"
    | "jawikiversity"
    | "jawikivoyage"
    | "jawiktionary"
    | "jbowiki"
    | "jbowiktionary"
    | "jvwiki"
    | "jvwikisource"
    | "jvwiktionary"
    | "kaawiki"
    | "kabwiki"
    | "kawiki"
    | "kawikibooks"
    | "kawikiquote"
    | "kawiktionary"
    | "kbdwiki"
    | "kbpwiki"
    | "kcgwiki"
    | "kgwiki"
    | "kiwiki"
    | "kjwiki"
    | "kkwiki"
    | "kkwikibooks"
    | "kkwikiquote"
    | "kkwiktionary"
    | "klwiki"
    | "klwiktionary"
    | "kmwiki"
    | "kmwikibooks"
    | "kmwiktionary"
    | "knwiki"
    | "knwikibooks"
    | "knwikiquote"
    | "knwikisource"
    | "knwiktionary"
    | "koiwiki"
    | "kowiki"
    | "kowikibooks"
    | "kowikinews"
    | "kowikiquote"
    | "kowikisource"
    | "kowikiversity"
    | "kowiktionary"
    | "krcwiki"
    | "krwiki"
    | "krwikiquote"
    | "kshwiki"
    | "kswiki"
    | "kswikibooks"
    | "kswikiquote"
    | "kswiktionary"
    | "kuwiki"
    | "kuwikibooks"
    | "kuwikiquote"
    | "kuwiktionary"
    | "kvwiki"
    | "kwwiki"
    | "kwwikiquote"
    | "kwwiktionary"
    | "kywiki"
    | "kywikibooks"
    | "kywikiquote"
    | "kywiktionary"
    | "labswiki"
    | "labtestwiki"
    | "ladwiki"
    | "lawiki"
    | "lawikibooks"
    | "lawikiquote"
    | "lawikisource"
    | "lawiktionary"
    | "lbewiki"
    | "lbwiki"
    | "lbwikibooks"
    | "lbwikiquote"
    | "lbwiktionary"
    | "legalteamwiki"
    | "lezwiki"
    | "lfnwiki"
    | "lgwiki"
    | "lijwiki"
    | "lijwikisource"
    | "liwiki"
    | "liwikibooks"
    | "liwikinews"
    | "liwikiquote"
    | "liwikisource"
    | "liwiktionary"
    | "lldwiki"
    | "lmowiki"
    | "lmowiktionary"
    | "lnwiki"
    | "lnwikibooks"
    | "lnwiktionary"
    | "loginwiki"
    | "lowiki"
    | "lowiktionary"
    | "lrcwiki"
    | "ltgwiki"
    | "ltwiki"
    | "ltwikibooks"
    | "ltwikiquote"
    | "ltwikisource"
    | "ltwiktionary"
    | "lvwiki"
    | "lvwikibooks"
    | "lvwiktionary"
    | "madwiki"
    | "maiwiki"
    | "maiwikimedia"
    | "map_bmswiki"
    | "mdfwiki"
    | "mediawikiwiki"
    | "metawiki"
    | "mgwiki"
    | "mgwikibooks"
    | "mgwiktionary"
    | "mhrwiki"
    | "mhwiki"
    | "mhwiktionary"
    | "minwiki"
    | "minwiktionary"
    | "miwiki"
    | "miwikibooks"
    | "miwiktionary"
    | "mkwiki"
    | "mkwikibooks"
    | "mkwikimedia"
    | "mkwikisource"
    | "mkwiktionary"
    | "mlwiki"
    | "mlwikibooks"
    | "mlwikiquote"
    | "mlwikisource"
    | "mlwiktionary"
    | "mniwiki"
    | "mniwiktionary"
    | "mnwiki"
    | "mnwikibooks"
    | "mnwiktionary"
    | "mnwwiki"
    | "mnwwiktionary"
    | "movementroleswiki"
    | "mrjwiki"
    | "mrwiki"
    | "mrwikibooks"
    | "mrwikiquote"
    | "mrwikisource"
    | "mrwiktionary"
    | "mswiki"
    | "mswikibooks"
    | "mswiktionary"
    | "mtwiki"
    | "mtwiktionary"
    | "muswiki"
    | "mwlwiki"
    | "mxwikimedia"
    | "myvwiki"
    | "mywiki"
    | "mywikibooks"
    | "mywiktionary"
    | "mznwiki"
    | "nahwiki"
    | "nahwikibooks"
    | "nahwiktionary"
    | "napwiki"
    | "napwikisource"
    | "nawiki"
    | "nawikibooks"
    | "nawikiquote"
    | "nawiktionary"
    | "nds_nlwiki"
    | "ndswiki"
    | "ndswikibooks"
    | "ndswikiquote"
    | "ndswiktionary"
    | "newiki"
    | "newikibooks"
    | "newiktionary"
    | "newwiki"
    | "ngwiki"
    | "ngwikimedia"
    | "niawiki"
    | "niawiktionary"
    | "nlwiki"
    | "nlwikibooks"
    | "nlwikimedia"
    | "nlwikinews"
    | "nlwikiquote"
    | "nlwikisource"
    | "nlwikivoyage"
    | "nlwiktionary"
    | "nnwiki"
    | "nnwikiquote"
    | "nnwiktionary"
    | "noboard_chapterswikimedia"
    | "nostalgiawiki"
    | "novwiki"
    | "nowiki"
    | "nowikibooks"
    | "nowikimedia"
    | "nowikinews"
    | "nowikiquote"
    | "nowikisource"
    | "nowiktionary"
    | "nqowiki"
    | "nrmwiki"
    | "nsowiki"
    | "nvwiki"
    | "nycwikimedia"
    | "nywiki"
    | "nzwikimedia"
    | "ocwiki"
    | "ocwikibooks"
    | "ocwiktionary"
    | "officewiki"
    | "olowiki"
    | "ombudsmenwiki"
    | "omwiki"
    | "omwiktionary"
    | "orwiki"
    | "orwikisource"
    | "orwiktionary"
    | "oswiki"
    | "otrs_wikiwiki"
    | "outreachwiki"
    | "pa_uswikimedia"
    | "pagwiki"
    | "pamwiki"
    | "papwiki"
    | "pawiki"
    | "pawikibooks"
    | "pawikisource"
    | "pawiktionary"
    | "pcdwiki"
    | "pdcwiki"
    | "pflwiki"
    | "pihwiki"
    | "piwiki"
    | "piwiktionary"
    | "plwiki"
    | "plwikibooks"
    | "plwikimedia"
    | "plwikinews"
    | "plwikiquote"
    | "plwikisource"
    | "plwikivoyage"
    | "plwiktionary"
    | "pmswiki"
    | "pmswikisource"
    | "pnbwiki"
    | "pnbwiktionary"
    | "pntwiki"
    | "projectcomwiki"
    | "pswiki"
    | "pswikibooks"
    | "pswikivoyage"
    | "pswiktionary"
    | "ptwiki"
    | "ptwikibooks"
    | "ptwikimedia"
    | "ptwikinews"
    | "ptwikiquote"
    | "ptwikisource"
    | "ptwikiversity"
    | "ptwikivoyage"
    | "ptwiktionary"
    | "punjabiwikimedia"
    | "pwnwiki"
    | "qualitywiki"
    | "quwiki"
    | "quwikibooks"
    | "quwikiquote"
    | "quwiktionary"
    | "rmwiki"
    | "rmwikibooks"
    | "rmwiktionary"
    | "rmywiki"
    | "rnwiki"
    | "rnwiktionary"
    | "roa_rupwiki"
    | "roa_rupwiktionary"
    | "roa_tarawiki"
    | "romdwikimedia"
    | "rowiki"
    | "rowikibooks"
    | "rowikinews"
    | "rowikiquote"
    | "rowikisource"
    | "rowikivoyage"
    | "rowiktionary"
    | "rswikimedia"
    | "ruewiki"
    | "ruwiki"
    | "ruwikibooks"
    | "ruwikimedia"
    | "ruwikinews"
    | "ruwikiquote"
    | "ruwikisource"
    | "ruwikiversity"
    | "ruwikivoyage"
    | "ruwiktionary"
    | "rwwiki"
    | "rwwiktionary"
    | "sahwiki"
    | "sahwikiquote"
    | "sahwikisource"
    | "satwiki"
    | "sawiki"
    | "sawikibooks"
    | "sawikiquote"
    | "sawikisource"
    | "sawiktionary"
    | "scnwiki"
    | "scnwiktionary"
    | "scowiki"
    | "scwiki"
    | "scwiktionary"
    | "sdwiki"
    | "sdwikinews"
    | "sdwiktionary"
    | "searchcomwiki"
    | "sewiki"
    | "sewikibooks"
    | "sewikimedia"
    | "sgwiki"
    | "sgwiktionary"
    | "shiwiki"
    | "shnwiki"
    | "shnwikivoyage"
    | "shnwiktionary"
    | "shwiki"
    | "shwiktionary"
    | "shywiktionary"
    | "simplewiki"
    | "simplewikibooks"
    | "simplewikiquote"
    | "simplewiktionary"
    | "siwiki"
    | "siwikibooks"
    | "siwiktionary"
    | "skrwiki"
    | "skrwiktionary"
    | "skwiki"
    | "skwikibooks"
    | "skwikiquote"
    | "skwikisource"
    | "skwiktionary"
    | "slwiki"
    | "slwikibooks"
    | "slwikiquote"
    | "slwikisource"
    | "slwikiversity"
    | "slwiktionary"
    | "smnwiki"
    | "smwiki"
    | "smwiktionary"
    | "snwiki"
    | "snwiktionary"
    | "sourceswiki"
    | "sowiki"
    | "sowiktionary"
    | "spcomwiki"
    | "specieswiki"
    | "sqwiki"
    | "sqwikibooks"
    | "sqwikinews"
    | "sqwikiquote"
    | "sqwiktionary"
    | "srnwiki"
    | "srwiki"
    | "srwikibooks"
    | "srwikinews"
    | "srwikiquote"
    | "srwikisource"
    | "srwiktionary"
    | "sswiki"
    | "sswiktionary"
    | "stewardwiki"
    | "stqwiki"
    | "strategywiki"
    | "stwiki"
    | "stwiktionary"
    | "suwiki"
    | "suwikibooks"
    | "suwikiquote"
    | "suwiktionary"
    | "svwiki"
    | "svwikibooks"
    | "svwikinews"
    | "svwikiquote"
    | "svwikisource"
    | "svwikiversity"
    | "svwikivoyage"
    | "svwiktionary"
    | "swwiki"
    | "swwikibooks"
    | "swwiktionary"
    | "sysop_itwiki"
    | "szlwiki"
    | "szywiki"
    | "tawiki"
    | "tawikibooks"
    | "tawikinews"
    | "tawikiquote"
    | "tawikisource"
    | "tawiktionary"
    | "taywiki"
    | "tcywiki"
    | "techconductwiki"
    | "tenwiki"
    | "test2wiki"
    | "testcommonswiki"
    | "testwiki"
    | "testwikidatawiki"
    | "tetwiki"
    | "tewiki"
    | "tewikibooks"
    | "tewikiquote"
    | "tewikisource"
    | "tewiktionary"
    | "tgwiki"
    | "tgwikibooks"
    | "tgwiktionary"
    | "thankyouwiki"
    | "thwiki"
    | "thwikibooks"
    | "thwikinews"
    | "thwikiquote"
    | "thwikisource"
    | "thwiktionary"
    | "tiwiki"
    | "tiwiktionary"
    | "tkwiki"
    | "tkwikibooks"
    | "tkwikiquote"
    | "tkwiktionary"
    | "tlwiki"
    | "tlwikibooks"
    | "tlwiktionary"
    | "tnwiki"
    | "tnwiktionary"
    | "towiki"
    | "towiktionary"
    | "tpiwiki"
    | "tpiwiktionary"
    | "transitionteamwiki"
    | "trvwiki"
    | "trwiki"
    | "trwikibooks"
    | "trwikimedia"
    | "trwikinews"
    | "trwikiquote"
    | "trwikisource"
    | "trwikivoyage"
    | "trwiktionary"
    | "tswiki"
    | "tswiktionary"
    | "ttwiki"
    | "ttwikibooks"
    | "ttwikiquote"
    | "ttwiktionary"
    | "tumwiki"
    | "twwiki"
    | "twwiktionary"
    | "tyvwiki"
    | "tywiki"
    | "uawikimedia"
    | "udmwiki"
    | "ugwiki"
    | "ugwikibooks"
    | "ugwikiquote"
    | "ugwiktionary"
    | "ukwiki"
    | "ukwikibooks"
    | "ukwikinews"
    | "ukwikiquote"
    | "ukwikisource"
    | "ukwikivoyage"
    | "ukwiktionary"
    | "urwiki"
    | "urwikibooks"
    | "urwikiquote"
    | "urwiktionary"
    | "usabilitywiki"
    | "uzwiki"
    | "uzwikibooks"
    | "uzwikiquote"
    | "uzwiktionary"
    | "vecwiki"
    | "vecwikisource"
    | "vecwiktionary"
    | "vepwiki"
    | "vewiki"
    | "viwiki"
    | "viwikibooks"
    | "viwikiquote"
    | "viwikisource"
    | "viwikivoyage"
    | "viwiktionary"
    | "vlswiki"
    | "votewiki"
    | "vowiki"
    | "vowikibooks"
    | "vowikiquote"
    | "vowiktionary"
    | "warwiki"
    | "wawiki"
    | "wawikibooks"
    | "wawikisource"
    | "wawiktionary"
    | "wbwikimedia"
    | "wg_enwiki"
    | "wikidatawiki"
    | "wikimania2005wiki"
    | "wikimania2006wiki"
    | "wikimania2007wiki"
    | "wikimania2008wiki"
    | "wikimania2009wiki"
    | "wikimania2010wiki"
    | "wikimania2011wiki"
    | "wikimania2012wiki"
    | "wikimania2013wiki"
    | "wikimania2014wiki"
    | "wikimania2015wiki"
    | "wikimania2016wiki"
    | "wikimania2017wiki"
    | "wikimania2018wiki"
    | "wikimaniateamwiki"
    | "wikimaniawiki"
    | "wowiki"
    | "wowikiquote"
    | "wowiktionary"
    | "wuuwiki"
    | "xalwiki"
    | "xhwiki"
    | "xhwikibooks"
    | "xhwiktionary"
    | "xmfwiki"
    | "yiwiki"
    | "yiwikisource"
    | "yiwiktionary"
    | "yowiki"
    | "yowikibooks"
    | "yowiktionary"
    | "yuewiktionary"
    | "zawiki"
    | "zawikibooks"
    | "zawikiquote"
    | "zawiktionary"
    | "zeawiki"
    | "zh_classicalwiki"
    | "zh_min_nanwiki"
    | "zh_min_nanwikibooks"
    | "zh_min_nanwikiquote"
    | "zh_min_nanwikisource"
    | "zh_min_nanwiktionary"
    | "zh_yuewiki"
    | "zhwiki"
    | "zhwikibooks"
    | "zhwikinews"
    | "zhwikiquote"
    | "zhwikisource"
    | "zhwikiversity"
    | "zhwikivoyage"
    | "zhwiktionary"
    | "zuwiki"
    | "zuwikibooks"
    | "zuwiktionary"
    | string;
  list?: string;
  unreadlist?: string;
  all?: boolean;
  sections?: "alert" | "message" | string;
  token: string;
}

export interface ParamsEchomarkseen extends Params {
  type: "alert" | "all" | "message" | string;
  timestampFormat?: "ISO_8601" | "MW" | string;
}

export interface ParamsEchomute extends Params {
  type: "page-linked-title" | "user" | string;
  mute?: string;
  unmute?: string;
  token: string;
}

export interface ParamsEdit extends Params {
  title?: string;
  pageid?: number;
  section?: string;
  sectiontitle?: string;
  text?: string;
  summary?: string;
  tags?: "possible vandalism" | "repeating characters" | string;
  minor?: boolean;
  notminor?: boolean;
  bot?: boolean;
  baserevid?: number;
  basetimestamp?: string;
  starttimestamp?: string;
  recreate?: boolean;
  createonly?: boolean;
  nocreate?: boolean;
  watch?: boolean;
  unwatch?: boolean;
  watchlist?: "nochange" | "preferences" | "unwatch" | "watch" | string;
  watchlistexpiry?: string;
  md5?: string;
  prependtext?: string;
  appendtext?: string;
  undo?: number;
  undoafter?: number;
  redirect?: boolean;
  contentformat?:
    | "application/json"
    | "application/octet-stream"
    | "application/unknown"
    | "application/x-binary"
    | "text/css"
    | "text/javascript"
    | "text/plain"
    | "text/unknown"
    | "text/x-wiki"
    | "unknown/unknown"
    | string;
  contentmodel?:
    | "GadgetDefinition"
    | "Json.JsonConfig"
    | "JsonSchema"
    | "Map.JsonConfig"
    | "MassMessageListContent"
    | "NewsletterContent"
    | "Scribunto"
    | "SecurePoll"
    | "Tabular.JsonConfig"
    | "css"
    | "flow-board"
    | "javascript"
    | "json"
    | "sanitized-css"
    | "text"
    | "translate-messagebundle"
    | "unknown"
    | "wikitext"
    | string;
  token: string;
  captchaword?: string;
  captchaid?: string;
}

export interface ParamsEditmassmessagelist extends Params {
  spamlist: string;
  description?: string;
  add?: string;
  remove?: string;
  token: string;
}

export interface ParamsEmailuser extends Params {
  target: string;
  subject: string;
  text: string;
  ccme?: boolean;
  token: string;
}

export interface ParamsExpandtemplates extends Params {
  title?: string;
  text: string;
  revid?: number;
  prop?:
    | "categories"
    | "encodedjsconfigvars"
    | "jsconfigvars"
    | "modules"
    | "parsetree"
    | "properties"
    | "ttl"
    | "volatile"
    | "wikitext"
    | string;
  includecomments?: boolean;
  showstrategykeys?: boolean;
  generatexml?: boolean;
  templatesandboxprefix?: string;
  templatesandboxtitle?: string;
  templatesandboxtext?: string;
  templatesandboxcontentmodel?:
    | "GadgetDefinition"
    | "Json.JsonConfig"
    | "JsonSchema"
    | "Map.JsonConfig"
    | "MassMessageListContent"
    | "NewsletterContent"
    | "Scribunto"
    | "SecurePoll"
    | "Tabular.JsonConfig"
    | "css"
    | "flow-board"
    | "javascript"
    | "json"
    | "sanitized-css"
    | "text"
    | "translate-messagebundle"
    | "unknown"
    | "wikitext"
    | string;
  templatesandboxcontentformat?:
    | "application/json"
    | "application/octet-stream"
    | "application/unknown"
    | "application/x-binary"
    | "text/css"
    | "text/javascript"
    | "text/plain"
    | "text/unknown"
    | "text/x-wiki"
    | "unknown/unknown"
    | string;
}

export interface ParamsFancycaptchareload extends Params {
}

export interface ParamsFeaturedfeed extends Params {
  feedformat?: "atom" | "rss" | string;
  feed: string;
  language?: string;
}

export interface ParamsFeedcontributions extends Params {
  feedformat?: "atom" | "rss" | string;
  user: string;
  namespace?: string;
  year?: number;
  month?: number;
  tagfilter?:
    | "Added PHP closing tag"
    | "Blocked user editing own talk page"
    | "Emoji"
    | "New user blanking page"
    | "New user editing project page"
    | "OAuth CID: 21"
    | "OAuth CID: 31"
    | "OAuth CID: 429"
    | "OAuth CID: 1188"
    | "OAuth CID: 1261"
    | "OAuth CID: 1352"
    | "OAuth CID: 1805"
    | "OAuth CID: 1841"
    | "OAuth CID: 2071"
    | "OTRS permission added by non-OTRS member"
    | "Potentially problematic translation"
    | "Rapid reverts"
    | "T144167"
    | "abusefilter-condition-limit"
    | "advanced mobile edit"
    | "android app edit"
    | "blanking"
    | "centralnotice"
    | "centralnotice translation"
    | "deletion template removed"
    | "disambiguator-link-added"
    | "discussiontools"
    | "discussiontools-added-comment"
    | "discussiontools-edit"
    | "discussiontools-newtopic"
    | "discussiontools-reply"
    | "discussiontools-source"
    | "discussiontools-source-enhanced"
    | "discussiontools-visual"
    | "disneynew"
    | "emoji"
    | "fileimporter-remote"
    | "ios app edit"
    | "massmessage-delivery"
    | "meta spam id"
    | "mobile app edit"
    | "mobile edit"
    | "mobile web edit"
    | "mw-blank"
    | "mw-changed-redirect-target"
    | "mw-contentmodelchange"
    | "mw-manual-revert"
    | "mw-new-redirect"
    | "mw-removed-redirect"
    | "mw-replace"
    | "mw-reverted"
    | "mw-rollback"
    | "mw-server-side-upload"
    | "mw-undo"
    | "possible link spam 2"
    | "possible out of scope"
    | "possible vandalism"
    | "repeated xwiki CoI abuse"
    | "repeating characters"
    | "visualeditor"
    | "visualeditor-needcheck"
    | "visualeditor-switched"
    | "visualeditor-wikitext"
    | "wikieditor"
    | "wikilove"
    | string;
  deletedonly?: boolean;
  toponly?: boolean;
  newonly?: boolean;
  hideminor?: boolean;
  showsizediff?: boolean;
}

export interface ParamsFeedrecentchanges extends Params {
  feedformat?: "atom" | "rss" | string;
  namespace?: string;
  invert?: boolean;
  associated?: boolean;
  days?: number;
  limit?: number;
  from?: string;
  hideminor?: boolean;
  hidebots?: boolean;
  hideanons?: boolean;
  hideliu?: boolean;
  hidepatrolled?: boolean;
  hidemyself?: boolean;
  hidecategorization?: boolean;
  tagfilter?: string;
  target?: string;
  showlinkedto?: boolean;
}

export interface ParamsFeedthreads extends Params {
  feedformat?: "atom" | "rss" | string;
  days?: number;
  type?: "newthreads" | "replies" | string;
  talkpage?: string;
  thread?: string;
}

export interface ParamsFeedwatchlist extends Params {
  feedformat?: "atom" | "rss" | string;
  hours?: number;
  linktosections?: boolean;
  allrev?: boolean;
  wlowner?: string;
  wltoken?: string;
  wlshow?:
    | "!anon"
    | "!autopatrolled"
    | "!bot"
    | "!minor"
    | "!patrolled"
    | "!unread"
    | "anon"
    | "autopatrolled"
    | "bot"
    | "minor"
    | "patrolled"
    | "unread"
    | string;
  wltype?: "categorize" | "edit" | "external" | "log" | "new" | string;
  wlexcludeuser?: string;
}

export interface ParamsFilerevert extends Params {
  filename: string;
  comment?: string;
  archivename: string;
  token: string;
}

export interface ParamsFlow extends Params {
  submodule:
    | "edit-header"
    | "edit-post"
    | "edit-title"
    | "edit-topic-summary"
    | "lock-topic"
    | "moderate-post"
    | "moderate-topic"
    | "new-topic"
    | "reply"
    | "undo-edit-header"
    | "undo-edit-post"
    | "undo-edit-topic-summary"
    | "view-header"
    | "view-post"
    | "view-post-history"
    | "view-topic"
    | "view-topic-history"
    | "view-topic-summary"
    | "view-topiclist"
    | "close-open-topic"
    | string;
  page?: string;
  token?: string;
}

export interface ParamsFlowParsoidUtils extends Params {
  from: "html" | "wikitext" | string;
  to: "html" | "wikitext" | string;
  content: string;
  title?: string;
  pageid?: number;
}

export interface ParamsFlowthank extends Params {
  postid: string;
  token: string;
}

export interface ParamsGlobalblock extends Params {
  target: string;
  expiry?: string;
  unblock?: boolean;
  reason: string;
  anononly?: boolean;
  modify?: boolean;
  alsolocal?: boolean;
  localblockstalk?: boolean;
  localanononly?: boolean;
  token: string;
}

export interface ParamsGlobalpreferenceoverrides extends Params {
  reset?: boolean;
  resetkinds?:
    | "all"
    | "registered"
    | "registered-checkmatrix"
    | "registered-multiselect"
    | "special"
    | "unused"
    | "userjs"
    | string;
  change?: string;
  optionname?: string;
  optionvalue?: string;
  token: string;
}

export interface ParamsGlobalpreferences extends Params {
  reset?: boolean;
  resetkinds?:
    | "all"
    | "registered"
    | "registered-checkmatrix"
    | "registered-multiselect"
    | "special"
    | "unused"
    | "userjs"
    | string;
  change?: string;
  optionname?: string;
  optionvalue?: string;
  token: string;
}

export interface ParamsGlobaluserrights extends Params {
  user?: string;
  userid?: number;
  add?:
    | "abusefilter-helper"
    | "abusefilter-maintainer"
    | "apihighlimits-requestor"
    | "captcha-exempt"
    | "founder"
    | "global-bot"
    | "global-deleter"
    | "global-flow-create"
    | "global-interface-editor"
    | "global-ipblock-exempt"
    | "global-rollbacker"
    | "global-sysop"
    | "new-wikis-importer"
    | "oathauth-tester"
    | "ombuds"
    | "recursive-export"
    | "staff"
    | "steward"
    | "sysadmin"
    | "vrt-permissions"
    | "wmf-ops-monitoring"
    | "wmf-researcher"
    | string;
  remove?:
    | "abusefilter-helper"
    | "abusefilter-maintainer"
    | "apihighlimits-requestor"
    | "captcha-exempt"
    | "founder"
    | "global-bot"
    | "global-deleter"
    | "global-flow-create"
    | "global-interface-editor"
    | "global-ipblock-exempt"
    | "global-rollbacker"
    | "global-sysop"
    | "new-wikis-importer"
    | "oathauth-tester"
    | "ombuds"
    | "recursive-export"
    | "staff"
    | "steward"
    | "sysadmin"
    | "vrt-permissions"
    | "wmf-ops-monitoring"
    | "wmf-researcher"
    | string;
  reason?: string;
  token: string;
  tags?: "possible vandalism" | "repeating characters" | string;
}

export interface ParamsGraph extends Params {
  hash?: string;
  title?: string;
  text?: string;
  oldid?: number;
}

export interface ParamsGroupreview extends Params {
  group: string;
  language?: string;
  state: string;
  token: string;
}

export interface ParamsHelp extends Params {
  modules?: string;
  submodules?: boolean;
  recursivesubmodules?: boolean;
  wrap?: boolean;
  toc?: boolean;
}

export interface ParamsImagerotate extends Params {
}

export interface ParamsImport extends Params {
  summary?: string;
  xml?: string;
  interwikiprefix?: string;
  interwikisource?: "meta" | "usability" | "w:en" | "wikitech" | string;
  interwikipage?: string;
  fullhistory?: boolean;
  templates?: boolean;
  namespace?: string;
  assignknownusers?: boolean;
  rootpage?: string;
  tags?: "possible vandalism" | "repeating characters" | string;
  token: string;
}

export interface ParamsJson extends Params {
  callback?: string;
  utf8?: boolean;
  ascii?: boolean;
  formatversion?: "1" | "2" | "latest" | string;
}

export interface ParamsJsonconfig extends Params {
  command?: "reload" | "reset" | "status" | string;
  namespace?: number;
  title?: string;
  content?: string;
}

export interface ParamsJsondata extends Params {
  title: string;
}

export interface ParamsJsonfm extends Params {
  wrappedhtml?: boolean;
  callback?: string;
  utf8?: boolean;
  ascii?: boolean;
  formatversion?: "1" | "2" | "latest" | string;
}

export interface ParamsLanguagesearch extends Params {
  search: string;
  typos?: number;
}

export interface ParamsLinkaccount extends Params {
  linkrequests?: string;
  linkmessageformat?: "html" | "none" | "raw" | "wikitext" | string;
  linkmergerequestfields?: boolean;
  linkreturnurl?: string;
  linkcontinue?: boolean;
  linktoken: string;
}

export interface ParamsLogin extends Params {
  lgname?: string;
  lgpassword?: string;
  lgdomain?: string;
  lgtoken?: string;
}

export interface ParamsLogout extends Params {
  token: string;
}

export interface ParamsManagegroupsynchronizationcache extends Params {
  operation: "resolveGroup" | "resolveMessage" | string;
  title?: string;
  group: string;
  token: string;
}

export interface ParamsManagemessagegroups extends Params {
  groupId: string;
  renameMessageKey?: string;
  messageKey: string;
  operation: "new" | "rename" | string;
  changesetName?: string;
  changesetModified: number;
  token: string;
}

export interface ParamsManagetags extends Params {
  operation: "activate" | "create" | "deactivate" | "delete" | string;
  tag: string;
  reason?: string;
  ignorewarnings?: boolean;
  tags?: "possible vandalism" | "repeating characters" | string;
  token: string;
}

export interface ParamsMassmessage extends Params {
  spamlist: string;
  subject: string;
  message?: string;
  pageMessage?: string;
  token: string;
}

export interface ParamsMergehistory extends Params {
  from?: string;
  fromid?: number;
  to?: string;
  toid?: number;
  timestamp?: string;
  reason?: string;
  token: string;
}

export interface ParamsMobileview extends Params {
  page: string;
  redirect?: "no" | "yes" | string;
  sections?: string;
  prop?:
    | "contentmodel"
    | "description"
    | "displaytitle"
    | "editable"
    | "hasvariants"
    | "id"
    | "image"
    | "languagecount"
    | "lastmodified"
    | "lastmodifiedby"
    | "namespace"
    | "normalizedtitle"
    | "pageprops"
    | "protection"
    | "revision"
    | "sections"
    | "text"
    | "thumb"
    | string;
  sectionprop?:
    | "anchor"
    | "fromtitle"
    | "index"
    | "level"
    | "line"
    | "number"
    | "toclevel"
    | string;
  pageprops?: string;
  variant?: string;
  noheadings?: boolean;
  notransform?: boolean;
  onlyrequestedsections?: boolean;
  offset?: number;
  maxlen?: number;
  revision?: number;
  thumbheight?: number;
  thumbwidth?: number;
  thumbsize?: number;
}

export interface ParamsMove extends Params {
  from?: string;
  fromid?: number;
  to: string;
  reason?: string;
  movetalk?: boolean;
  movesubpages?: boolean;
  noredirect?: boolean;
  watchlist?: "nochange" | "preferences" | "unwatch" | "watch" | string;
  watchlistexpiry?: string;
  ignorewarnings?: boolean;
  tags?: "possible vandalism" | "repeating characters" | string;
  token: string;
}

export interface ParamsNewslettersubscribe extends Params {
  id: number;
  do_: "subscribe" | "unsubscribe" | string;
  token: string;
}

export interface ParamsNone extends Params {
}

export interface ParamsOathvalidate extends Params {
  user?: string;
  totp?: string;
  data?: string;
  token: string;
}

export interface ParamsOpensearch extends Params {
  search: string;
  namespace?: string;
  limit?: string;
  profile?:
    | "classic"
    | "engine_autoselect"
    | "fast-fuzzy"
    | "fuzzy"
    | "fuzzy-subphrases"
    | "normal"
    | "normal-subphrases"
    | "strict"
    | string;
  suggest?: boolean;
  redirects?: "resolve" | "return" | string;
  format?: "json" | "jsonfm" | "xml" | "xmlfm" | string;
  warningsaserror?: boolean;
}

export interface ParamsOptions extends Params {
  reset?: boolean;
  resetkinds?:
    | "all"
    | "registered"
    | "registered-checkmatrix"
    | "registered-multiselect"
    | "special"
    | "unused"
    | "userjs"
    | string;
  change?: string;
  optionname?: string;
  optionvalue?: string;
  token: string;
}

export interface ParamsParaminfo extends Params {
  modules?: string;
  helpformat?: "html" | "none" | "raw" | "wikitext" | string;
  querymodules?:
    | "abusefilters"
    | "abuselog"
    | "allcategories"
    | "alldeletedrevisions"
    | "allfileusages"
    | "allimages"
    | "alllinks"
    | "allmessages"
    | "allpages"
    | "allredirects"
    | "allrevisions"
    | "alltransclusions"
    | "allusers"
    | "authmanagerinfo"
    | "babel"
    | "backlinks"
    | "betafeatures"
    | "blocks"
    | "categories"
    | "categoryinfo"
    | "categorymembers"
    | "centralnoticeactivecampaigns"
    | "centralnoticelogs"
    | "checkuser"
    | "checkuserlog"
    | "cirrusbuilddoc"
    | "cirruscompsuggestbuilddoc"
    | "cirrusdoc"
    | "contributors"
    | "deletedrevisions"
    | "deletedrevs"
    | "description"
    | "duplicatefiles"
    | "embeddedin"
    | "extdistbranches"
    | "extdistrepos"
    | "extlinks"
    | "extracts"
    | "exturlusage"
    | "featureusage"
    | "filearchive"
    | "filerepoinfo"
    | "fileusage"
    | "flowinfo"
    | "gadgetcategories"
    | "gadgets"
    | "globalallusers"
    | "globalblocks"
    | "globalgroups"
    | "globalpreferences"
    | "globalrenamestatus"
    | "globalusage"
    | "globaluserinfo"
    | "imageinfo"
    | "images"
    | "imageusage"
    | "info"
    | "iwbacklinks"
    | "iwlinks"
    | "langbacklinks"
    | "langlinks"
    | "languageinfo"
    | "languagestats"
    | "links"
    | "linkshere"
    | "linterrors"
    | "linterstats"
    | "logevents"
    | "managemessagegroups"
    | "mapdata"
    | "messagecollection"
    | "messagegroups"
    | "messagegroupstats"
    | "messagetranslations"
    | "mmcontent"
    | "mmsites"
    | "mostviewed"
    | "mystashedfiles"
    | "notifications"
    | "oath"
    | "pageimages"
    | "pagepropnames"
    | "pageprops"
    | "pageswithprop"
    | "pageterms"
    | "pageviews"
    | "prefixsearch"
    | "protectedtitles"
    | "querypage"
    | "random"
    | "readinglistentries"
    | "readinglists"
    | "recentchanges"
    | "redirects"
    | "revisions"
    | "search"
    | "siteinfo"
    | "siteviews"
    | "stashimageinfo"
    | "tags"
    | "templates"
    | "threads"
    | "tokens"
    | "transcludedin"
    | "transcodestatus"
    | "unreadnotificationpages"
    | "usercontribs"
    | "userinfo"
    | "users"
    | "videoinfo"
    | "watchlist"
    | "watchlistraw"
    | "wbentityusage"
    | "wblistentityusage"
    | "wikibase"
    | "wikisets"
    | string;
  mainmodule?: string;
  pagesetmodule?: string;
  formatmodules?:
    | "json"
    | "jsonfm"
    | "none"
    | "php"
    | "phpfm"
    | "rawfm"
    | "xml"
    | "xmlfm"
    | string;
}

export interface ParamsParse extends Params {
  title?: string;
  text?: string;
  revid?: number;
  summary?: string;
  page?: string;
  pageid?: number;
  redirects?: boolean;
  oldid?: number;
  prop?:
    | "categories"
    | "categorieshtml"
    | "displaytitle"
    | "encodedjsconfigvars"
    | "externallinks"
    | "headhtml"
    | "images"
    | "indicators"
    | "iwlinks"
    | "jsconfigvars"
    | "langlinks"
    | "limitreportdata"
    | "limitreporthtml"
    | "links"
    | "modules"
    | "parsetree"
    | "parsewarnings"
    | "parsewarningshtml"
    | "properties"
    | "revid"
    | "sections"
    | "subtitle"
    | "templates"
    | "text"
    | "wikitext"
    | "headitems"
    | string;
  wrapoutputclass?: string;
  pst?: boolean;
  onlypst?: boolean;
  effectivelanglinks?: boolean;
  section?: string;
  sectiontitle?: string;
  disablepp?: boolean;
  disablelimitreport?: boolean;
  disableeditsection?: boolean;
  disablestylededuplication?: boolean;
  showstrategykeys?: boolean;
  generatexml?: boolean;
  preview?: boolean;
  sectionpreview?: boolean;
  disabletoc?: boolean;
  useskin?:
    | "apioutput"
    | "cologneblue"
    | "fallback"
    | "minerva"
    | "modern"
    | "monobook"
    | "timeless"
    | "vector"
    | "vector-2022"
    | string;
  contentformat?:
    | "application/json"
    | "application/octet-stream"
    | "application/unknown"
    | "application/x-binary"
    | "text/css"
    | "text/javascript"
    | "text/plain"
    | "text/unknown"
    | "text/x-wiki"
    | "unknown/unknown"
    | string;
  contentmodel?:
    | "GadgetDefinition"
    | "Json.JsonConfig"
    | "JsonSchema"
    | "Map.JsonConfig"
    | "MassMessageListContent"
    | "NewsletterContent"
    | "Scribunto"
    | "SecurePoll"
    | "Tabular.JsonConfig"
    | "css"
    | "flow-board"
    | "javascript"
    | "json"
    | "sanitized-css"
    | "text"
    | "translate-messagebundle"
    | "unknown"
    | "wikitext"
    | string;
  mobileformat?: boolean;
  templatesandboxprefix?: string;
  templatesandboxtitle?: string;
  templatesandboxtext?: string;
  templatesandboxcontentmodel?:
    | "GadgetDefinition"
    | "Json.JsonConfig"
    | "JsonSchema"
    | "Map.JsonConfig"
    | "MassMessageListContent"
    | "NewsletterContent"
    | "Scribunto"
    | "SecurePoll"
    | "Tabular.JsonConfig"
    | "css"
    | "flow-board"
    | "javascript"
    | "json"
    | "sanitized-css"
    | "text"
    | "translate-messagebundle"
    | "unknown"
    | "wikitext"
    | string;
  templatesandboxcontentformat?:
    | "application/json"
    | "application/octet-stream"
    | "application/unknown"
    | "application/x-binary"
    | "text/css"
    | "text/javascript"
    | "text/plain"
    | "text/unknown"
    | "text/x-wiki"
    | "unknown/unknown"
    | string;
}

export interface ParamsPatrol extends Params {
  rcid?: number;
  revid?: number;
  tags?: "possible vandalism" | "repeating characters" | string;
  token: string;
}

export interface ParamsPhp extends Params {
  formatversion?: "1" | "2" | "latest" | string;
}

export interface ParamsPhpfm extends Params {
  wrappedhtml?: boolean;
  formatversion?: "1" | "2" | "latest" | string;
}

export interface ParamsProtect extends Params {
  title?: string;
  pageid?: number;
  protections: string;
  expiry?: string;
  reason?: string;
  tags?: "possible vandalism" | "repeating characters" | string;
  cascade?: boolean;
  watch?: boolean;
  watchlist?: "nochange" | "preferences" | "unwatch" | "watch" | string;
  watchlistexpiry?: string;
  token: string;
}

export interface ParamsPurge extends Params {
  forcelinkupdate?: boolean;
  forcerecursivelinkupdate?: boolean;
  continue?: string;
  titles?: string;
  pageids?: number;
  revids?: number;
  generator?:
    | "allcategories"
    | "alldeletedrevisions"
    | "allfileusages"
    | "allimages"
    | "alllinks"
    | "allpages"
    | "allredirects"
    | "allrevisions"
    | "alltransclusions"
    | "backlinks"
    | "categories"
    | "categorymembers"
    | "deletedrevisions"
    | "duplicatefiles"
    | "embeddedin"
    | "exturlusage"
    | "fileusage"
    | "images"
    | "imageusage"
    | "iwbacklinks"
    | "langbacklinks"
    | "links"
    | "linkshere"
    | "messagecollection"
    | "mostviewed"
    | "pageswithprop"
    | "prefixsearch"
    | "protectedtitles"
    | "querypage"
    | "random"
    | "recentchanges"
    | "redirects"
    | "revisions"
    | "search"
    | "templates"
    | "transcludedin"
    | "watchlist"
    | "watchlistraw"
    | "wblistentityusage"
    | "readinglistentries"
    | string;
  redirects?: boolean;
  converttitles?: boolean;
}

export interface ParamsQuery extends Params {
  prop?:
    | "categories"
    | "categoryinfo"
    | "cirrusbuilddoc"
    | "cirruscompsuggestbuilddoc"
    | "cirrusdoc"
    | "contributors"
    | "deletedrevisions"
    | "duplicatefiles"
    | "extlinks"
    | "extracts"
    | "fileusage"
    | "globalusage"
    | "imageinfo"
    | "images"
    | "info"
    | "iwlinks"
    | "langlinks"
    | "links"
    | "linkshere"
    | "mmcontent"
    | "pageimages"
    | "pageprops"
    | "pageterms"
    | "pageviews"
    | "redirects"
    | "revisions"
    | "stashimageinfo"
    | "templates"
    | "transcludedin"
    | "transcodestatus"
    | "videoinfo"
    | "wbentityusage"
    | "flowinfo"
    | "description"
    | "mapdata"
    | string;
  list?:
    | "abusefilters"
    | "abuselog"
    | "allcategories"
    | "alldeletedrevisions"
    | "allfileusages"
    | "allimages"
    | "alllinks"
    | "allpages"
    | "allredirects"
    | "allrevisions"
    | "alltransclusions"
    | "allusers"
    | "backlinks"
    | "betafeatures"
    | "blocks"
    | "categorymembers"
    | "centralnoticeactivecampaigns"
    | "centralnoticelogs"
    | "checkuser"
    | "checkuserlog"
    | "embeddedin"
    | "extdistrepos"
    | "exturlusage"
    | "filearchive"
    | "gadgetcategories"
    | "gadgets"
    | "globalallusers"
    | "globalblocks"
    | "globalgroups"
    | "imageusage"
    | "iwbacklinks"
    | "langbacklinks"
    | "linterrors"
    | "logevents"
    | "messagecollection"
    | "mostviewed"
    | "mystashedfiles"
    | "pagepropnames"
    | "pageswithprop"
    | "prefixsearch"
    | "protectedtitles"
    | "querypage"
    | "random"
    | "recentchanges"
    | "search"
    | "tags"
    | "threads"
    | "usercontribs"
    | "users"
    | "watchlist"
    | "watchlistraw"
    | "wblistentityusage"
    | "wikisets"
    | "deletedrevs"
    | "extdistbranches"
    | "mmsites"
    | "readinglistentries"
    | string;
  meta?:
    | "allmessages"
    | "authmanagerinfo"
    | "babel"
    | "featureusage"
    | "filerepoinfo"
    | "globalpreferences"
    | "globalrenamestatus"
    | "globaluserinfo"
    | "languageinfo"
    | "languagestats"
    | "linterstats"
    | "managemessagegroups"
    | "messagegroups"
    | "messagegroupstats"
    | "messagetranslations"
    | "notifications"
    | "siteinfo"
    | "siteviews"
    | "tokens"
    | "unreadnotificationpages"
    | "userinfo"
    | "wikibase"
    | "oath"
    | "readinglists"
    | string;
  indexpageids?: boolean;
  export?: boolean;
  exportnowrap?: boolean;
  exportschema?: "0.10" | "0.11" | string;
  iwurl?: boolean;
  continue?: string;
  rawcontinue?: boolean;
  titles?: string;
  pageids?: number;
  revids?: number;
  generator?:
    | "allcategories"
    | "alldeletedrevisions"
    | "allfileusages"
    | "allimages"
    | "alllinks"
    | "allpages"
    | "allredirects"
    | "allrevisions"
    | "alltransclusions"
    | "backlinks"
    | "categories"
    | "categorymembers"
    | "deletedrevisions"
    | "duplicatefiles"
    | "embeddedin"
    | "exturlusage"
    | "fileusage"
    | "images"
    | "imageusage"
    | "iwbacklinks"
    | "langbacklinks"
    | "links"
    | "linkshere"
    | "messagecollection"
    | "mostviewed"
    | "pageswithprop"
    | "prefixsearch"
    | "protectedtitles"
    | "querypage"
    | "random"
    | "recentchanges"
    | "redirects"
    | "revisions"
    | "search"
    | "templates"
    | "transcludedin"
    | "watchlist"
    | "watchlistraw"
    | "wblistentityusage"
    | "readinglistentries"
    | string;
  redirects?: boolean;
  converttitles?: boolean;
}

export interface ParamsRawfm extends Params {
  wrappedhtml?: boolean;
}

export interface ParamsReadinglists extends Params {
  command:
    | "create"
    | "createentry"
    | "delete"
    | "deleteentry"
    | "setup"
    | "teardown"
    | "update"
    | string;
  token: string;
}

export interface ParamsRecordLint extends Params {
  data: string;
  page: string;
  revision: number;
}

export interface ParamsRemoveauthenticationdata extends Params {
  request: string;
  token: string;
}

export interface ParamsResetpassword extends Params {
  user?: string;
  email?: string;
  token: string;
}

export interface ParamsRevisiondelete extends Params {
  type:
    | "archive"
    | "filearchive"
    | "logging"
    | "oldimage"
    | "revision"
    | string;
  target?: string;
  ids: string;
  hide?: "comment" | "content" | "user" | string;
  show?: "comment" | "content" | "user" | string;
  suppress?: "no" | "nochange" | "yes" | string;
  reason?: string;
  tags?: "possible vandalism" | "repeating characters" | string;
  token: string;
}

export interface ParamsRollback extends Params {
  title?: string;
  pageid?: number;
  tags?: "possible vandalism" | "repeating characters" | string;
  user: string;
  summary?: string;
  markbot?: boolean;
  watchlist?: "nochange" | "preferences" | "unwatch" | "watch" | string;
  watchlistexpiry?: string;
  token: string;
}

export interface ParamsRsd extends Params {
}

export interface ParamsSanitizeMapdata extends Params {
  title?: string;
  text: string;
}

export interface ParamsScribuntoConsole extends Params {
  title?: string;
  content?: string;
  session?: number;
  question: string;
  clear?: boolean;
}

export interface ParamsSearchtranslations extends Params {
  service?: "codfw" | "eqiad" | string;
  query: string;
  sourcelanguage?: string;
  language?: string;
  group?: string;
  filter?: "" | "fuzzy" | "translated" | "untranslated" | string;
  match?: string;
  case?: string;
  offset?: number;
  limit?: string;
}

export interface ParamsSetglobalaccountstatus extends Params {
  user: string;
  locked?: "" | "lock" | "unlock" | string;
  hidden?: "" | "lists" | "suppressed" | string;
  reason?: string;
  statecheck?: string;
  token: string;
}

export interface ParamsSetnotificationtimestamp extends Params {
  entirewatchlist?: boolean;
  timestamp?: string;
  torevid?: number;
  newerthanrevid?: number;
  continue?: string;
  titles?: string;
  pageids?: number;
  revids?: number;
  generator?:
    | "allcategories"
    | "alldeletedrevisions"
    | "allfileusages"
    | "allimages"
    | "alllinks"
    | "allpages"
    | "allredirects"
    | "allrevisions"
    | "alltransclusions"
    | "backlinks"
    | "categories"
    | "categorymembers"
    | "deletedrevisions"
    | "duplicatefiles"
    | "embeddedin"
    | "exturlusage"
    | "fileusage"
    | "images"
    | "imageusage"
    | "iwbacklinks"
    | "langbacklinks"
    | "links"
    | "linkshere"
    | "messagecollection"
    | "mostviewed"
    | "pageswithprop"
    | "prefixsearch"
    | "protectedtitles"
    | "querypage"
    | "random"
    | "recentchanges"
    | "redirects"
    | "revisions"
    | "search"
    | "templates"
    | "transcludedin"
    | "watchlist"
    | "watchlistraw"
    | "wblistentityusage"
    | "readinglistentries"
    | string;
  redirects?: boolean;
  converttitles?: boolean;
  token: string;
}

export interface ParamsSetpagelanguage extends Params {
  title?: string;
  pageid?: number;
  lang:
    | "ab"
    | "abs"
    | "ace"
    | "ady"
    | "ady-cyrl"
    | "aeb"
    | "aeb-arab"
    | "aeb-latn"
    | "af"
    | "ak"
    | "aln"
    | "alt"
    | "am"
    | "ami"
    | "an"
    | "ang"
    | "anp"
    | "ar"
    | "arc"
    | "arn"
    | "arq"
    | "ary"
    | "arz"
    | "as"
    | "ase"
    | "ast"
    | "atj"
    | "av"
    | "avk"
    | "awa"
    | "ay"
    | "az"
    | "azb"
    | "ba"
    | "ban"
    | "ban-bali"
    | "bar"
    | "bbc"
    | "bbc-latn"
    | "bcc"
    | "bci"
    | "bcl"
    | "be"
    | "be-tarask"
    | "bg"
    | "bgn"
    | "bh"
    | "bho"
    | "bi"
    | "bjn"
    | "blk"
    | "bm"
    | "bn"
    | "bo"
    | "bpy"
    | "bqi"
    | "br"
    | "brh"
    | "bs"
    | "btm"
    | "bto"
    | "bug"
    | "bxr"
    | "ca"
    | "cbk-zam"
    | "cdo"
    | "ce"
    | "ceb"
    | "ch"
    | "chr"
    | "chy"
    | "ckb"
    | "co"
    | "cps"
    | "cr"
    | "crh"
    | "crh-cyrl"
    | "crh-latn"
    | "cs"
    | "csb"
    | "cu"
    | "cv"
    | "cy"
    | "da"
    | "dag"
    | "de"
    | "de-at"
    | "de-ch"
    | "de-formal"
    | "default"
    | "din"
    | "diq"
    | "dsb"
    | "dtp"
    | "dty"
    | "dv"
    | "dz"
    | "ee"
    | "egl"
    | "el"
    | "eml"
    | "en"
    | "en-ca"
    | "en-gb"
    | "eo"
    | "es"
    | "es-formal"
    | "et"
    | "eu"
    | "ext"
    | "fa"
    | "ff"
    | "fi"
    | "fit"
    | "fj"
    | "fo"
    | "fon"
    | "fr"
    | "frc"
    | "frp"
    | "frr"
    | "fur"
    | "fy"
    | "ga"
    | "gaa"
    | "gag"
    | "gan"
    | "gan-hans"
    | "gan-hant"
    | "gcr"
    | "gd"
    | "gl"
    | "gld"
    | "glk"
    | "gn"
    | "gom"
    | "gom-deva"
    | "gom-latn"
    | "gor"
    | "got"
    | "grc"
    | "gsw"
    | "gu"
    | "guc"
    | "gur"
    | "guw"
    | "gv"
    | "ha"
    | "hak"
    | "haw"
    | "he"
    | "hi"
    | "hif"
    | "hif-latn"
    | "hil"
    | "hr"
    | "hrx"
    | "hsb"
    | "hsn"
    | "ht"
    | "hu"
    | "hu-formal"
    | "hy"
    | "hyw"
    | "ia"
    | "id"
    | "ie"
    | "ig"
    | "ii"
    | "ik"
    | "ike-cans"
    | "ike-latn"
    | "ilo"
    | "inh"
    | "io"
    | "is"
    | "it"
    | "iu"
    | "ja"
    | "jam"
    | "jbo"
    | "jut"
    | "jv"
    | "ka"
    | "kaa"
    | "kab"
    | "kbd"
    | "kbd-cyrl"
    | "kbp"
    | "kcg"
    | "kea"
    | "kg"
    | "khw"
    | "ki"
    | "kiu"
    | "kjp"
    | "kk"
    | "kk-arab"
    | "kk-cn"
    | "kk-cyrl"
    | "kk-kz"
    | "kk-latn"
    | "kk-tr"
    | "kl"
    | "km"
    | "kn"
    | "ko"
    | "ko-kp"
    | "koi"
    | "krc"
    | "kri"
    | "krj"
    | "krl"
    | "ks"
    | "ks-arab"
    | "ks-deva"
    | "ksh"
    | "ksw"
    | "ku"
    | "ku-arab"
    | "ku-latn"
    | "kum"
    | "kv"
    | "kw"
    | "ky"
    | "la"
    | "lad"
    | "lb"
    | "lbe"
    | "lez"
    | "lfn"
    | "lg"
    | "li"
    | "lij"
    | "liv"
    | "lki"
    | "lld"
    | "lmo"
    | "ln"
    | "lo"
    | "loz"
    | "lrc"
    | "lt"
    | "ltg"
    | "lus"
    | "luz"
    | "lv"
    | "lzh"
    | "lzz"
    | "mad"
    | "mai"
    | "map-bms"
    | "mdf"
    | "mg"
    | "mhr"
    | "mi"
    | "min"
    | "mk"
    | "ml"
    | "mn"
    | "mni"
    | "mnw"
    | "mo"
    | "mos"
    | "mr"
    | "mrh"
    | "mrj"
    | "ms"
    | "ms-arab"
    | "mt"
    | "mwl"
    | "my"
    | "myv"
    | "mzn"
    | "na"
    | "nah"
    | "nan"
    | "nap"
    | "nb"
    | "nds"
    | "nds-nl"
    | "ne"
    | "new"
    | "nia"
    | "niu"
    | "nl"
    | "nl-informal"
    | "nmz"
    | "nn"
    | "nod"
    | "nov"
    | "nqo"
    | "nrm"
    | "nso"
    | "nv"
    | "ny"
    | "nyn"
    | "nys"
    | "oc"
    | "ojb"
    | "olo"
    | "om"
    | "or"
    | "os"
    | "pa"
    | "pag"
    | "pam"
    | "pap"
    | "pcd"
    | "pcm"
    | "pdc"
    | "pdt"
    | "pfl"
    | "pi"
    | "pih"
    | "pl"
    | "pms"
    | "pnb"
    | "pnt"
    | "prg"
    | "ps"
    | "pt"
    | "pt-br"
    | "pwn"
    | "qu"
    | "qug"
    | "rgn"
    | "rif"
    | "rm"
    | "rmc"
    | "rmy"
    | "rn"
    | "ro"
    | "roa-tara"
    | "rsk"
    | "ru"
    | "rue"
    | "rup"
    | "ruq"
    | "ruq-cyrl"
    | "ruq-latn"
    | "rw"
    | "ryu"
    | "sa"
    | "sah"
    | "sat"
    | "sc"
    | "scn"
    | "sco"
    | "sd"
    | "sdc"
    | "sdh"
    | "se"
    | "se-fi"
    | "se-no"
    | "se-se"
    | "sei"
    | "ses"
    | "sg"
    | "sgs"
    | "sh"
    | "shi"
    | "shn"
    | "shy"
    | "shy-latn"
    | "si"
    | "sjd"
    | "sje"
    | "sk"
    | "skr"
    | "skr-arab"
    | "sl"
    | "sli"
    | "sm"
    | "sma"
    | "smn"
    | "sms"
    | "sn"
    | "so"
    | "sq"
    | "sr"
    | "sr-ec"
    | "sr-el"
    | "srn"
    | "ss"
    | "st"
    | "stq"
    | "sty"
    | "su"
    | "sv"
    | "sw"
    | "szl"
    | "szy"
    | "ta"
    | "tay"
    | "tcy"
    | "te"
    | "tet"
    | "tg"
    | "tg-cyrl"
    | "tg-latn"
    | "th"
    | "ti"
    | "tk"
    | "tl"
    | "tly"
    | "tn"
    | "to"
    | "tpi"
    | "tr"
    | "tru"
    | "trv"
    | "ts"
    | "tt"
    | "tt-cyrl"
    | "tt-latn"
    | "tw"
    | "ty"
    | "tyv"
    | "tzm"
    | "udm"
    | "ug"
    | "ug-arab"
    | "ug-latn"
    | "uk"
    | "ur"
    | "uz"
    | "ve"
    | "vec"
    | "vep"
    | "vi"
    | "vls"
    | "vmf"
    | "vmw"
    | "vo"
    | "vot"
    | "vro"
    | "wa"
    | "war"
    | "wls"
    | "wo"
    | "wuu"
    | "xal"
    | "xh"
    | "xmf"
    | "xsy"
    | "yi"
    | "yo"
    | "yrl"
    | "yue"
    | "za"
    | "zea"
    | "zgh"
    | "zh"
    | "zh-cn"
    | "zh-hans"
    | "zh-hant"
    | "zh-hk"
    | "zh-mo"
    | "zh-my"
    | "zh-sg"
    | "zh-tw"
    | "zu"
    | string;
  reason?: string;
  tags?: "possible vandalism" | "repeating characters" | string;
  token: string;
}

export interface ParamsShortenurl extends Params {
  url: string;
}

export interface ParamsSitematrix extends Params {
  smtype?: "language" | "special" | string;
  smstate?: "all" | "closed" | "fishbowl" | "nonglobal" | "private" | string;
  smlangprop?: "code" | "dir" | "localname" | "name" | "site" | string;
  smsiteprop?: "code" | "dbname" | "lang" | "sitename" | "url" | string;
  smlimit?: string;
  smcontinue?: string;
}

export interface ParamsSpamblacklist extends Params {
  url: string;
}

export interface ParamsStashedit extends Params {
  title: string;
  section?: string;
  sectiontitle?: string;
  text?: string;
  stashedtexthash?: string;
  summary?: string;
  contentmodel:
    | "GadgetDefinition"
    | "Json.JsonConfig"
    | "JsonSchema"
    | "Map.JsonConfig"
    | "MassMessageListContent"
    | "NewsletterContent"
    | "Scribunto"
    | "SecurePoll"
    | "Tabular.JsonConfig"
    | "css"
    | "flow-board"
    | "javascript"
    | "json"
    | "sanitized-css"
    | "text"
    | "translate-messagebundle"
    | "unknown"
    | "wikitext"
    | string;
  contentformat:
    | "application/json"
    | "application/octet-stream"
    | "application/unknown"
    | "application/x-binary"
    | "text/css"
    | "text/javascript"
    | "text/plain"
    | "text/unknown"
    | "text/x-wiki"
    | "unknown/unknown"
    | string;
  baserevid: number;
  token: string;
}

export interface ParamsStreamconfigs extends Params {
  streams?: string;
  constraints?: string;
  all_settings?: boolean;
}

export interface ParamsStrikevote extends Params {
  option: "strike" | "unstrike" | string;
  reason: string;
  voteid: number;
  token: string;
}

export interface ParamsTag extends Params {
  rcid?: number;
  revid?: number;
  logid?: number;
  add?: "possible vandalism" | "repeating characters" | string;
  remove?: string;
  reason?: string;
  tags?: "possible vandalism" | "repeating characters" | string;
  token: string;
}

export interface ParamsTemplatedata extends Params {
  includeMissingTitles?: boolean;
  doNotIgnoreMissingTitles?: boolean;
  lang?: string;
  titles?: string;
  pageids?: number;
  revids?: number;
  generator?:
    | "allcategories"
    | "alldeletedrevisions"
    | "allfileusages"
    | "allimages"
    | "alllinks"
    | "allpages"
    | "allredirects"
    | "allrevisions"
    | "alltransclusions"
    | "backlinks"
    | "categories"
    | "categorymembers"
    | "deletedrevisions"
    | "duplicatefiles"
    | "embeddedin"
    | "exturlusage"
    | "fileusage"
    | "images"
    | "imageusage"
    | "iwbacklinks"
    | "langbacklinks"
    | "links"
    | "linkshere"
    | "messagecollection"
    | "mostviewed"
    | "pageswithprop"
    | "prefixsearch"
    | "protectedtitles"
    | "querypage"
    | "random"
    | "recentchanges"
    | "redirects"
    | "revisions"
    | "search"
    | "templates"
    | "transcludedin"
    | "watchlist"
    | "watchlistraw"
    | "wblistentityusage"
    | "readinglistentries"
    | string;
  redirects?: boolean;
  converttitles?: boolean;
}

export interface ParamsThank extends Params {
  rev?: number;
  log?: number;
  token: string;
  source?: string;
}

export interface ParamsThreadaction extends Params {
  thread?: string;
  talkpage?: string;
  threadaction:
    | "addreaction"
    | "deletereaction"
    | "edit"
    | "inlineeditform"
    | "markread"
    | "markunread"
    | "merge"
    | "newthread"
    | "reply"
    | "setsortkey"
    | "setsubject"
    | "split"
    | string;
  token: string;
  subject?: string;
  reason?: string;
  newparent?: string;
  text?: string;
  render?: string;
  bump?: string;
  sortkey?: string;
  signature?: string;
  type?: string;
  value?: string;
  method?: string;
  operand?: string;
  captchaword?: string;
  captchaid?: string;
}

export interface ParamsTimedtext extends Params {
  title?: string;
  pageid?: number;
  trackformat: "srt" | "vtt" | string;
  lang?: string;
}

export interface ParamsTitleblacklist extends Params {
  tbtitle: string;
  tbaction?:
    | "create"
    | "createpage"
    | "createtalk"
    | "edit"
    | "move"
    | "new-account"
    | "upload"
    | string;
  tbnooverride?: boolean;
}

export interface ParamsTranscodereset extends Params {
  title: string;
  transcodekey?: string;
  token: string;
}

export interface ParamsTranslationaids extends Params {
  title: string;
  group?: string;
  prop?:
    | "definition"
    | "definitiondiff"
    | "documentation"
    | "editsummaries"
    | "gettext"
    | "groups"
    | "inotherlanguages"
    | "insertables"
    | "mt"
    | "support"
    | "translation"
    | "ttmserver"
    | string;
}

export interface ParamsTranslationcheck extends Params {
  title: string;
  translation: string;
}

export interface ParamsTranslationentitysearch extends Params {
  entitytype?: "groups" | "messages" | string;
  query: string;
  limit?: string;
}

export interface ParamsTranslationreview extends Params {
  revision: number;
  token: string;
}

export interface ParamsTranslationstats extends Params {
  count: "edits" | "reviewers" | "reviews" | "users" | string;
  days: number;
  group?: string;
  language?: string;
  scale?: "days" | "hours" | "months" | "weeks" | "years" | string;
  start?: string;
}

export interface ParamsTtmserver extends Params {
  service?: string;
  sourcelanguage: string;
  targetlanguage: string;
  text: string;
}

export interface ParamsUlslocalization extends Params {
  language: string;
}

export interface ParamsUlssetlang extends Params {
  languagecode: string;
  token: string;
}

export interface ParamsUnblock extends Params {
  id?: number;
  user?: string;
  userid?: number;
  reason?: string;
  tags?: "possible vandalism" | "repeating characters" | string;
  token: string;
}

export interface ParamsUndelete extends Params {
  title: string;
  reason?: string;
  tags?: "possible vandalism" | "repeating characters" | string;
  timestamps?: string;
  fileids?: number;
  undeletetalk?: boolean;
  watchlist?: "nochange" | "preferences" | "unwatch" | "watch" | string;
  watchlistexpiry?: string;
  token: string;
}

export interface ParamsUnlinkaccount extends Params {
  request: string;
  token: string;
}

export interface ParamsUpload extends Params {
  filename?: string;
  comment?: string;
  tags?: "possible vandalism" | "repeating characters" | string;
  text?: string;
  watch?: boolean;
  watchlist?: "nochange" | "preferences" | "watch" | string;
  watchlistexpiry?: string;
  ignorewarnings?: boolean;
  file?: string;
  url?: string;
  filekey?: string;
  sessionkey?: string;
  stash?: boolean;
  filesize?: number;
  offset?: number;
  chunk?: string;
  async?: boolean;
  checkstatus?: boolean;
  token: string;
}

export interface ParamsUserrights extends Params {
  user?: string;
  userid?: number;
  add?:
    | "accountcreator"
    | "autopatrolled"
    | "bot"
    | "bureaucrat"
    | "checkuser"
    | "confirmed"
    | "flow-bot"
    | "import"
    | "interface-admin"
    | "ipblock-exempt"
    | "no-ipinfo"
    | "push-subscription-manager"
    | "steward"
    | "suppress"
    | "sysop"
    | "translationadmin"
    | "transwiki"
    | "uploader"
    | string;
  expiry?: string;
  remove?:
    | "accountcreator"
    | "autopatrolled"
    | "bot"
    | "bureaucrat"
    | "checkuser"
    | "confirmed"
    | "flow-bot"
    | "import"
    | "interface-admin"
    | "ipblock-exempt"
    | "no-ipinfo"
    | "push-subscription-manager"
    | "steward"
    | "suppress"
    | "sysop"
    | "translationadmin"
    | "transwiki"
    | "uploader"
    | string;
  reason?: string;
  token: string;
  tags?: "possible vandalism" | "repeating characters" | string;
}

export interface ParamsValidatepassword extends Params {
  password: string;
  user?: string;
  email?: string;
  realname?: string;
}

export interface ParamsVisualeditor extends Params {
  page: string;
  badetag?: string;
  format?: "json" | "jsonfm" | string;
  paction:
    | "metadata"
    | "parse"
    | "parsedoc"
    | "parsefragment"
    | "templatesused"
    | "wikitext"
    | string;
  wikitext?: string;
  section?: string;
  stash?: boolean;
  oldid?: string;
  editintro?: string;
  pst?: boolean;
  preload?: string;
  preloadparams?: string;
}

export interface ParamsVisualeditoredit extends Params {
  paction: "diff" | "save" | "serialize" | "serializeforcache" | string;
  page: string;
  token: string;
  wikitext?: string;
  section?: string;
  sectiontitle?: string;
  basetimestamp?: string;
  starttimestamp?: string;
  oldid?: string;
  minor?: string;
  watchlist?: string;
  html?: string;
  etag?: string;
  summary?: string;
  captchaid?: string;
  captchaword?: string;
  cachekey?: string;
  useskin?:
    | "apioutput"
    | "cologneblue"
    | "fallback"
    | "minerva"
    | "modern"
    | "monobook"
    | "timeless"
    | "vector"
    | "vector-2022"
    | string;
  tags?: string;
  plugins?: string;
  mobileformat?: boolean;
}

export interface ParamsWatch extends Params {
  title?: string;
  expiry?: string;
  unwatch?: boolean;
  continue?: string;
  titles?: string;
  pageids?: number;
  revids?: number;
  generator?:
    | "allcategories"
    | "alldeletedrevisions"
    | "allfileusages"
    | "allimages"
    | "alllinks"
    | "allpages"
    | "allredirects"
    | "allrevisions"
    | "alltransclusions"
    | "backlinks"
    | "categories"
    | "categorymembers"
    | "deletedrevisions"
    | "duplicatefiles"
    | "embeddedin"
    | "exturlusage"
    | "fileusage"
    | "images"
    | "imageusage"
    | "iwbacklinks"
    | "langbacklinks"
    | "links"
    | "linkshere"
    | "messagecollection"
    | "mostviewed"
    | "pageswithprop"
    | "prefixsearch"
    | "protectedtitles"
    | "querypage"
    | "random"
    | "recentchanges"
    | "redirects"
    | "revisions"
    | "search"
    | "templates"
    | "transcludedin"
    | "watchlist"
    | "watchlistraw"
    | "wblistentityusage"
    | "readinglistentries"
    | string;
  redirects?: boolean;
  converttitles?: boolean;
  token: string;
}

export interface ParamsWebappManifest extends Params {
}

export interface ParamsWebauthn extends Params {
  func: string;
  data?: string;
}

export interface ParamsWikilove extends Params {
  title: string;
  text: string;
  message?: string;
  token: string;
  subject: string;
  type?: string;
  email?: string;
  tags?: "possible vandalism" | "repeating characters" | string;
}

export interface ParamsXml extends Params {
  xslt?: string;
  includexmlnamespace?: boolean;
}

export interface ParamsXmlfm extends Params {
  wrappedhtml?: boolean;
  xslt?: string;
  includexmlnamespace?: boolean;
}

export type Request<T extends Params = Params> = [boolean, T];

export function abusefiltercheckmatch(
  params: ParamsAbusefiltercheckmatch,
): Request<ParamsAbusefiltercheckmatch> {
  return [false, { ...params, action: "abusefiltercheckmatch" }];
}

export function abusefilterchecksyntax(
  params: ParamsAbusefilterchecksyntax,
): Request<ParamsAbusefilterchecksyntax> {
  return [false, { ...params, action: "abusefilterchecksyntax" }];
}

export function abusefilterevalexpression(
  params: ParamsAbusefilterevalexpression,
): Request<ParamsAbusefilterevalexpression> {
  return [false, { ...params, action: "abusefilterevalexpression" }];
}

export function abusefilterunblockautopromote(
  params: ParamsAbusefilterunblockautopromote,
): Request<ParamsAbusefilterunblockautopromote> {
  return [true, { ...params, action: "abusefilterunblockautopromote" }];
}

export function abuselogprivatedetails(
  params: ParamsAbuselogprivatedetails,
): Request<ParamsAbuselogprivatedetails> {
  return [true, { ...params, action: "abuselogprivatedetails" }];
}

export function aggregategroups(
  params: ParamsAggregategroups,
): Request<ParamsAggregategroups> {
  return [true, { ...params, action: "aggregategroups" }];
}

export function antispoof(params: ParamsAntispoof): Request<ParamsAntispoof> {
  return [false, { ...params, action: "antispoof" }];
}

export function block(params: ParamsBlock): Request<ParamsBlock> {
  return [true, { ...params, action: "block" }];
}

export function bouncehandler(
  params: ParamsBouncehandler,
): Request<ParamsBouncehandler> {
  return [true, { ...params, action: "bouncehandler" }];
}

export function categorytree(
  params: ParamsCategorytree,
): Request<ParamsCategorytree> {
  return [false, { ...params, action: "categorytree" }];
}

export function centralauthtoken(
  params: ParamsCentralauthtoken,
): Request<ParamsCentralauthtoken> {
  return [false, { ...params, action: "centralauthtoken" }];
}

export function centralnoticecdncacheupdatebanner(
  params: ParamsCentralnoticecdncacheupdatebanner,
): Request<ParamsCentralnoticecdncacheupdatebanner> {
  return [true, { ...params, action: "centralnoticecdncacheupdatebanner" }];
}

export function centralnoticechoicedata(
  params: ParamsCentralnoticechoicedata,
): Request<ParamsCentralnoticechoicedata> {
  return [false, { ...params, action: "centralnoticechoicedata" }];
}

export function centralnoticequerycampaign(
  params: ParamsCentralnoticequerycampaign,
): Request<ParamsCentralnoticequerycampaign> {
  return [false, { ...params, action: "centralnoticequerycampaign" }];
}

export function changeauthenticationdata(
  params: ParamsChangeauthenticationdata,
): Request<ParamsChangeauthenticationdata> {
  return [true, { ...params, action: "changeauthenticationdata" }];
}

export function changecontentmodel(
  params: ParamsChangecontentmodel,
): Request<ParamsChangecontentmodel> {
  return [true, { ...params, action: "changecontentmodel" }];
}

export function checktoken(
  params: ParamsChecktoken,
): Request<ParamsChecktoken> {
  return [false, { ...params, action: "checktoken" }];
}

export function cirrusConfigDump(
  params: ParamsCirrusConfigDump,
): Request<ParamsCirrusConfigDump> {
  return [false, { ...params, action: "cirrus-config-dump" }];
}

export function cirrusMappingDump(
  params: ParamsCirrusMappingDump,
): Request<ParamsCirrusMappingDump> {
  return [false, { ...params, action: "cirrus-mapping-dump" }];
}

export function cirrusProfilesDump(
  params: ParamsCirrusProfilesDump,
): Request<ParamsCirrusProfilesDump> {
  return [false, { ...params, action: "cirrus-profiles-dump" }];
}

export function cirrusSettingsDump(
  params: ParamsCirrusSettingsDump,
): Request<ParamsCirrusSettingsDump> {
  return [false, { ...params, action: "cirrus-settings-dump" }];
}

export function clearhasmsg(
  params: ParamsClearhasmsg,
): Request<ParamsClearhasmsg> {
  return [true, { ...params, action: "clearhasmsg" }];
}

export function clientlogin(
  params: ParamsClientlogin,
): Request<ParamsClientlogin> {
  return [true, { ...params, action: "clientlogin" }];
}

export function collection(
  params: ParamsCollection,
): Request<ParamsCollection> {
  return [false, { ...params, action: "collection" }];
}

export function compare(params: ParamsCompare): Request<ParamsCompare> {
  return [false, { ...params, action: "compare" }];
}

export function createaccount(
  params: ParamsCreateaccount,
): Request<ParamsCreateaccount> {
  return [true, { ...params, action: "createaccount" }];
}

export function createlocalaccount(
  params: ParamsCreatelocalaccount,
): Request<ParamsCreatelocalaccount> {
  return [true, { ...params, action: "createlocalaccount" }];
}

export function cspreport(params: ParamsCspreport): Request<ParamsCspreport> {
  return [true, { ...params, action: "cspreport" }];
}

export function delete_(params: ParamsDelete): Request<ParamsDelete> {
  return [true, { ...params, action: "delete" }];
}

export function deleteglobalaccount(
  params: ParamsDeleteglobalaccount,
): Request<ParamsDeleteglobalaccount> {
  return [true, { ...params, action: "deleteglobalaccount" }];
}

export function discussiontoolscompare(
  params: ParamsDiscussiontoolscompare,
): Request<ParamsDiscussiontoolscompare> {
  return [false, { ...params, action: "discussiontoolscompare" }];
}

export function discussiontoolsedit(
  params: ParamsDiscussiontoolsedit,
): Request<ParamsDiscussiontoolsedit> {
  return [true, { ...params, action: "discussiontoolsedit" }];
}

export function discussiontoolsgetsubscriptions(
  params: ParamsDiscussiontoolsgetsubscriptions,
): Request<ParamsDiscussiontoolsgetsubscriptions> {
  return [false, { ...params, action: "discussiontoolsgetsubscriptions" }];
}

export function discussiontoolspageinfo(
  params: ParamsDiscussiontoolspageinfo,
): Request<ParamsDiscussiontoolspageinfo> {
  return [false, { ...params, action: "discussiontoolspageinfo" }];
}

export function discussiontoolspreview(
  params: ParamsDiscussiontoolspreview,
): Request<ParamsDiscussiontoolspreview> {
  return [false, { ...params, action: "discussiontoolspreview" }];
}

export function discussiontoolssubscribe(
  params: ParamsDiscussiontoolssubscribe,
): Request<ParamsDiscussiontoolssubscribe> {
  return [true, { ...params, action: "discussiontoolssubscribe" }];
}

export function echomarkread(
  params: ParamsEchomarkread,
): Request<ParamsEchomarkread> {
  return [true, { ...params, action: "echomarkread" }];
}

export function echomarkseen(
  params: ParamsEchomarkseen,
): Request<ParamsEchomarkseen> {
  return [false, { ...params, action: "echomarkseen" }];
}

export function echomute(params: ParamsEchomute): Request<ParamsEchomute> {
  return [true, { ...params, action: "echomute" }];
}

export function edit(params: ParamsEdit): Request<ParamsEdit> {
  return [true, { ...params, action: "edit" }];
}

export function editmassmessagelist(
  params: ParamsEditmassmessagelist,
): Request<ParamsEditmassmessagelist> {
  return [true, { ...params, action: "editmassmessagelist" }];
}

export function emailuser(params: ParamsEmailuser): Request<ParamsEmailuser> {
  return [true, { ...params, action: "emailuser" }];
}

export function expandtemplates(
  params: ParamsExpandtemplates,
): Request<ParamsExpandtemplates> {
  return [false, { ...params, action: "expandtemplates" }];
}

export function fancycaptchareload(
  params: ParamsFancycaptchareload,
): Request<ParamsFancycaptchareload> {
  return [false, { ...params, action: "fancycaptchareload" }];
}

export function featuredfeed(
  params: ParamsFeaturedfeed,
): Request<ParamsFeaturedfeed> {
  return [false, { ...params, action: "featuredfeed" }];
}

export function feedcontributions(
  params: ParamsFeedcontributions,
): Request<ParamsFeedcontributions> {
  return [false, { ...params, action: "feedcontributions" }];
}

export function feedrecentchanges(
  params: ParamsFeedrecentchanges,
): Request<ParamsFeedrecentchanges> {
  return [false, { ...params, action: "feedrecentchanges" }];
}

export function feedthreads(
  params: ParamsFeedthreads,
): Request<ParamsFeedthreads> {
  return [false, { ...params, action: "feedthreads" }];
}

export function feedwatchlist(
  params: ParamsFeedwatchlist,
): Request<ParamsFeedwatchlist> {
  return [false, { ...params, action: "feedwatchlist" }];
}

export function filerevert(
  params: ParamsFilerevert,
): Request<ParamsFilerevert> {
  return [true, { ...params, action: "filerevert" }];
}

export function flow(params: ParamsFlow): Request<ParamsFlow> {
  return [false, { ...params, action: "flow" }];
}

export function flowParsoidUtils(
  params: ParamsFlowParsoidUtils,
): Request<ParamsFlowParsoidUtils> {
  return [false, { ...params, action: "flow-parsoid-utils" }];
}

export function flowthank(params: ParamsFlowthank): Request<ParamsFlowthank> {
  return [true, { ...params, action: "flowthank" }];
}

export function globalblock(
  params: ParamsGlobalblock,
): Request<ParamsGlobalblock> {
  return [true, { ...params, action: "globalblock" }];
}

export function globalpreferenceoverrides(
  params: ParamsGlobalpreferenceoverrides,
): Request<ParamsGlobalpreferenceoverrides> {
  return [true, { ...params, action: "globalpreferenceoverrides" }];
}

export function globalpreferences(
  params: ParamsGlobalpreferences,
): Request<ParamsGlobalpreferences> {
  return [true, { ...params, action: "globalpreferences" }];
}

export function globaluserrights(
  params: ParamsGlobaluserrights,
): Request<ParamsGlobaluserrights> {
  return [true, { ...params, action: "globaluserrights" }];
}

export function graph(params: ParamsGraph): Request<ParamsGraph> {
  return [false, { ...params, action: "graph" }];
}

export function groupreview(
  params: ParamsGroupreview,
): Request<ParamsGroupreview> {
  return [true, { ...params, action: "groupreview" }];
}

export function help(params: ParamsHelp): Request<ParamsHelp> {
  return [false, { ...params, action: "help" }];
}

export function imagerotate(
  params: ParamsImagerotate,
): Request<ParamsImagerotate> {
  return [false, { ...params, action: "imagerotate" }];
}

export function import_(params: ParamsImport): Request<ParamsImport> {
  return [true, { ...params, action: "import" }];
}

export function json(params: ParamsJson): Request<ParamsJson> {
  return [false, { ...params, action: "json" }];
}

export function jsonconfig(
  params: ParamsJsonconfig,
): Request<ParamsJsonconfig> {
  return [false, { ...params, action: "jsonconfig" }];
}

export function jsondata(params: ParamsJsondata): Request<ParamsJsondata> {
  return [false, { ...params, action: "jsondata" }];
}

export function jsonfm(params: ParamsJsonfm): Request<ParamsJsonfm> {
  return [false, { ...params, action: "jsonfm" }];
}

export function languagesearch(
  params: ParamsLanguagesearch,
): Request<ParamsLanguagesearch> {
  return [false, { ...params, action: "languagesearch" }];
}

export function linkaccount(
  params: ParamsLinkaccount,
): Request<ParamsLinkaccount> {
  return [true, { ...params, action: "linkaccount" }];
}

export function login(params: ParamsLogin): Request<ParamsLogin> {
  return [true, { ...params, action: "login" }];
}

export function logout(params: ParamsLogout): Request<ParamsLogout> {
  return [true, { ...params, action: "logout" }];
}

export function managegroupsynchronizationcache(
  params: ParamsManagegroupsynchronizationcache,
): Request<ParamsManagegroupsynchronizationcache> {
  return [true, { ...params, action: "managegroupsynchronizationcache" }];
}

export function managemessagegroups(
  params: ParamsManagemessagegroups,
): Request<ParamsManagemessagegroups> {
  return [true, { ...params, action: "managemessagegroups" }];
}

export function managetags(
  params: ParamsManagetags,
): Request<ParamsManagetags> {
  return [true, { ...params, action: "managetags" }];
}

export function massmessage(
  params: ParamsMassmessage,
): Request<ParamsMassmessage> {
  return [true, { ...params, action: "massmessage" }];
}

export function mergehistory(
  params: ParamsMergehistory,
): Request<ParamsMergehistory> {
  return [true, { ...params, action: "mergehistory" }];
}

export function mobileview(
  params: ParamsMobileview,
): Request<ParamsMobileview> {
  return [false, { ...params, action: "mobileview" }];
}

export function move(params: ParamsMove): Request<ParamsMove> {
  return [true, { ...params, action: "move" }];
}

export function newslettersubscribe(
  params: ParamsNewslettersubscribe,
): Request<ParamsNewslettersubscribe> {
  return [true, { ...params, action: "newslettersubscribe" }];
}

export function none(params: ParamsNone): Request<ParamsNone> {
  return [false, { ...params, action: "none" }];
}

export function oathvalidate(
  params: ParamsOathvalidate,
): Request<ParamsOathvalidate> {
  return [true, { ...params, action: "oathvalidate" }];
}

export function opensearch(
  params: ParamsOpensearch,
): Request<ParamsOpensearch> {
  return [false, { ...params, action: "opensearch" }];
}

export function options(params: ParamsOptions): Request<ParamsOptions> {
  return [true, { ...params, action: "options" }];
}

export function paraminfo(params: ParamsParaminfo): Request<ParamsParaminfo> {
  return [false, { ...params, action: "paraminfo" }];
}

export function parse(params: ParamsParse): Request<ParamsParse> {
  return [false, { ...params, action: "parse" }];
}

export function patrol(params: ParamsPatrol): Request<ParamsPatrol> {
  return [true, { ...params, action: "patrol" }];
}

export function php(params: ParamsPhp): Request<ParamsPhp> {
  return [false, { ...params, action: "php" }];
}

export function phpfm(params: ParamsPhpfm): Request<ParamsPhpfm> {
  return [false, { ...params, action: "phpfm" }];
}

export function protect(params: ParamsProtect): Request<ParamsProtect> {
  return [true, { ...params, action: "protect" }];
}

export function purge(params: ParamsPurge): Request<ParamsPurge> {
  return [true, { ...params, action: "purge" }];
}

export function query(params: ParamsQuery): Request<ParamsQuery> {
  return [false, { ...params, action: "query" }];
}

export function rawfm(params: ParamsRawfm): Request<ParamsRawfm> {
  return [false, { ...params, action: "rawfm" }];
}

export function readinglists(
  params: ParamsReadinglists,
): Request<ParamsReadinglists> {
  return [true, { ...params, action: "readinglists" }];
}

export function recordLint(
  params: ParamsRecordLint,
): Request<ParamsRecordLint> {
  return [false, { ...params, action: "record-lint" }];
}

export function removeauthenticationdata(
  params: ParamsRemoveauthenticationdata,
): Request<ParamsRemoveauthenticationdata> {
  return [true, { ...params, action: "removeauthenticationdata" }];
}

export function resetpassword(
  params: ParamsResetpassword,
): Request<ParamsResetpassword> {
  return [true, { ...params, action: "resetpassword" }];
}

export function revisiondelete(
  params: ParamsRevisiondelete,
): Request<ParamsRevisiondelete> {
  return [true, { ...params, action: "revisiondelete" }];
}

export function rollback(params: ParamsRollback): Request<ParamsRollback> {
  return [true, { ...params, action: "rollback" }];
}

export function rsd(params: ParamsRsd): Request<ParamsRsd> {
  return [false, { ...params, action: "rsd" }];
}

export function sanitizeMapdata(
  params: ParamsSanitizeMapdata,
): Request<ParamsSanitizeMapdata> {
  return [true, { ...params, action: "sanitize-mapdata" }];
}

export function scribuntoConsole(
  params: ParamsScribuntoConsole,
): Request<ParamsScribuntoConsole> {
  return [false, { ...params, action: "scribunto-console" }];
}

export function searchtranslations(
  params: ParamsSearchtranslations,
): Request<ParamsSearchtranslations> {
  return [false, { ...params, action: "searchtranslations" }];
}

export function setglobalaccountstatus(
  params: ParamsSetglobalaccountstatus,
): Request<ParamsSetglobalaccountstatus> {
  return [true, { ...params, action: "setglobalaccountstatus" }];
}

export function setnotificationtimestamp(
  params: ParamsSetnotificationtimestamp,
): Request<ParamsSetnotificationtimestamp> {
  return [true, { ...params, action: "setnotificationtimestamp" }];
}

export function setpagelanguage(
  params: ParamsSetpagelanguage,
): Request<ParamsSetpagelanguage> {
  return [true, { ...params, action: "setpagelanguage" }];
}

export function shortenurl(
  params: ParamsShortenurl,
): Request<ParamsShortenurl> {
  return [true, { ...params, action: "shortenurl" }];
}

export function sitematrix(
  params: ParamsSitematrix,
): Request<ParamsSitematrix> {
  return [false, { ...params, action: "sitematrix" }];
}

export function spamblacklist(
  params: ParamsSpamblacklist,
): Request<ParamsSpamblacklist> {
  return [false, { ...params, action: "spamblacklist" }];
}

export function stashedit(params: ParamsStashedit): Request<ParamsStashedit> {
  return [true, { ...params, action: "stashedit" }];
}

export function streamconfigs(
  params: ParamsStreamconfigs,
): Request<ParamsStreamconfigs> {
  return [false, { ...params, action: "streamconfigs" }];
}

export function strikevote(
  params: ParamsStrikevote,
): Request<ParamsStrikevote> {
  return [true, { ...params, action: "strikevote" }];
}

export function tag(params: ParamsTag): Request<ParamsTag> {
  return [true, { ...params, action: "tag" }];
}

export function templatedata(
  params: ParamsTemplatedata,
): Request<ParamsTemplatedata> {
  return [false, { ...params, action: "templatedata" }];
}

export function thank(params: ParamsThank): Request<ParamsThank> {
  return [true, { ...params, action: "thank" }];
}

export function threadaction(
  params: ParamsThreadaction,
): Request<ParamsThreadaction> {
  return [true, { ...params, action: "threadaction" }];
}

export function timedtext(params: ParamsTimedtext): Request<ParamsTimedtext> {
  return [false, { ...params, action: "timedtext" }];
}

export function titleblacklist(
  params: ParamsTitleblacklist,
): Request<ParamsTitleblacklist> {
  return [false, { ...params, action: "titleblacklist" }];
}

export function transcodereset(
  params: ParamsTranscodereset,
): Request<ParamsTranscodereset> {
  return [true, { ...params, action: "transcodereset" }];
}

export function translationaids(
  params: ParamsTranslationaids,
): Request<ParamsTranslationaids> {
  return [false, { ...params, action: "translationaids" }];
}

export function translationcheck(
  params: ParamsTranslationcheck,
): Request<ParamsTranslationcheck> {
  return [false, { ...params, action: "translationcheck" }];
}

export function translationentitysearch(
  params: ParamsTranslationentitysearch,
): Request<ParamsTranslationentitysearch> {
  return [false, { ...params, action: "translationentitysearch" }];
}

export function translationreview(
  params: ParamsTranslationreview,
): Request<ParamsTranslationreview> {
  return [true, { ...params, action: "translationreview" }];
}

export function translationstats(
  params: ParamsTranslationstats,
): Request<ParamsTranslationstats> {
  return [false, { ...params, action: "translationstats" }];
}

export function ttmserver(params: ParamsTtmserver): Request<ParamsTtmserver> {
  return [false, { ...params, action: "ttmserver" }];
}

export function ulslocalization(
  params: ParamsUlslocalization,
): Request<ParamsUlslocalization> {
  return [false, { ...params, action: "ulslocalization" }];
}

export function ulssetlang(
  params: ParamsUlssetlang,
): Request<ParamsUlssetlang> {
  return [true, { ...params, action: "ulssetlang" }];
}

export function unblock(params: ParamsUnblock): Request<ParamsUnblock> {
  return [true, { ...params, action: "unblock" }];
}

export function undelete(params: ParamsUndelete): Request<ParamsUndelete> {
  return [true, { ...params, action: "undelete" }];
}

export function unlinkaccount(
  params: ParamsUnlinkaccount,
): Request<ParamsUnlinkaccount> {
  return [true, { ...params, action: "unlinkaccount" }];
}

export function upload(params: ParamsUpload): Request<ParamsUpload> {
  return [true, { ...params, action: "upload" }];
}

export function userrights(
  params: ParamsUserrights,
): Request<ParamsUserrights> {
  return [true, { ...params, action: "userrights" }];
}

export function validatepassword(
  params: ParamsValidatepassword,
): Request<ParamsValidatepassword> {
  return [true, { ...params, action: "validatepassword" }];
}

export function visualeditor(
  params: ParamsVisualeditor,
): Request<ParamsVisualeditor> {
  return [false, { ...params, action: "visualeditor" }];
}

export function visualeditoredit(
  params: ParamsVisualeditoredit,
): Request<ParamsVisualeditoredit> {
  return [true, { ...params, action: "visualeditoredit" }];
}

export function watch(params: ParamsWatch): Request<ParamsWatch> {
  return [true, { ...params, action: "watch" }];
}

export function webappManifest(
  params: ParamsWebappManifest,
): Request<ParamsWebappManifest> {
  return [false, { ...params, action: "webapp-manifest" }];
}

export function webauthn(params: ParamsWebauthn): Request<ParamsWebauthn> {
  return [false, { ...params, action: "webauthn" }];
}

export function wikilove(params: ParamsWikilove): Request<ParamsWikilove> {
  return [true, { ...params, action: "wikilove" }];
}

export function xml(params: ParamsXml): Request<ParamsXml> {
  return [false, { ...params, action: "xml" }];
}

export function xmlfm(params: ParamsXmlfm): Request<ParamsXmlfm> {
  return [false, { ...params, action: "xmlfm" }];
}
