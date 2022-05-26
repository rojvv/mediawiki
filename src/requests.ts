// deno-lint-ignore-file
export interface Params {
    [key: string]: any;
}

export interface Paramsabusefiltercheckmatch extends Params {
    filter: string;
    vars: string;
    rcid: number;
    logid: number;
}

export interface Paramsabusefilterchecksyntax extends Params {
    filter: string;
}

export interface Paramsabusefilterevalexpression extends Params {
    expression: string;
    prettyprint: boolean;
}

export interface Paramsabusefilterunblockautopromote extends Params {
    user: string;
    token: string;
}

export interface Paramsabuselogprivatedetails extends Params {
    logid: number;
    reason: string;
    token: string;
}

export interface Paramsaggregategroups extends Params {
    do_: "add" | "associate" | "dissociate" | "remove" | "update" | string;
    aggregategroup: string;
    group: string;
    groupname: string;
    groupdescription: string;
    token: string;
}

export interface Paramsantispoof extends Params {
    username: string;
}

export interface Paramsblock extends Params {
    user: string;
    userid: number;
    expiry: string;
    reason: string;
    anononly: boolean;
    nocreate: boolean;
    autoblock: boolean;
    noemail: boolean;
    hidename: boolean;
    allowusertalk: boolean;
    reblock: boolean;
    watchuser: boolean;
    watchlistexpiry: string;
    tags: "possible vandalism" | "repeating characters" | string;
    partial: boolean;
    pagerestrictions: string;
    namespacerestrictions: string;
    token: string;
}

export interface Paramsbouncehandler extends Params {
    email: string;
}

export interface Paramscategorytree extends Params {
    category: string;
    options: string;
}

export interface Paramscentralauthtoken extends Params {
}

export interface Paramscentralnoticecdncacheupdatebanner extends Params {
    banner: string;
    language: string;
    token: string;
}

export interface Paramscentralnoticechoicedata extends Params {
    project: string;
    language: string;
}

export interface Paramscentralnoticequerycampaign extends Params {
    campaign: string;
}

export interface Paramschangeauthenticationdata extends Params {
    request: string;
    token: string;
}

export interface Paramschangecontentmodel extends Params {
    title: string;
    pageid: number;
    summary: string;
    tags: "possible vandalism" | "repeating characters" | string;
    model: "GadgetDefinition" | "Json.JsonConfig" | "JsonSchema" | "Map.JsonConfig" | "MassMessageListContent" | "NewsletterContent" | "Scribunto" | "SecurePoll" | "Tabular.JsonConfig" | "css" | "javascript" | "json" | "sanitized-css" | "text" | "translate-messagebundle" | "wikitext" | string;
    bot: boolean;
    token: string;
}

export interface Paramschecktoken extends Params {
    type: "createaccount" | "csrf" | "deleteglobalaccount" | "login" | "patrol" | "rollback" | "setglobalaccountstatus" | "userrights" | "watch" | string;
    token: string;
    maxtokenage: number;
}

export interface Paramscirrus_config_dump extends Params {
    prop: "globals" | "namespacemap" | "profiles" | "usertesting" | string;
}

export interface Paramscirrus_mapping_dump extends Params {
}

export interface Paramscirrus_profiles_dump extends Params {
    verbose: boolean;
}

export interface Paramscirrus_settings_dump extends Params {
}

export interface Paramsclearhasmsg extends Params {
}

export interface Paramsclientlogin extends Params {
    requests: string;
    messageformat: "html" | "none" | "raw" | "wikitext" | string;
    mergerequestfields: boolean;
    preservestate: boolean;
    returnurl: string;
    continue: boolean;
    token: string;
}

export interface Paramscollection extends Params {
    submodule: "addarticle" | "addcategory" | "addchapter" | "clearcollection" | "getbookcreatorboxcontent" | "getcollection" | "getpopupdata" | "postcollection" | "removearticle" | "removeitem" | "renamechapter" | "setsorting" | "settitles" | "sortitems" | "suggestarticleaction" | "suggestundoarticleaction" | string;
}

export interface Paramscompare extends Params {
    fromtitle: string;
    fromid: number;
    fromrev: number;
    fromslots: "main" | string;
    frompst: boolean;
    fromtext: string;
    fromcontentformat: "application/json" | "application/octet-stream" | "application/unknown" | "application/x-binary" | "text/css" | "text/javascript" | "text/plain" | "text/unknown" | "text/x-wiki" | "unknown/unknown" | string;
    fromcontentmodel: "GadgetDefinition" | "Json.JsonConfig" | "JsonSchema" | "Map.JsonConfig" | "MassMessageListContent" | "NewsletterContent" | "Scribunto" | "SecurePoll" | "Tabular.JsonConfig" | "css" | "flow-board" | "javascript" | "json" | "sanitized-css" | "text" | "translate-messagebundle" | "unknown" | "wikitext" | string;
    fromsection: string;
    totitle: string;
    toid: number;
    torev: number;
    torelative: "cur" | "next" | "prev" | string;
    toslots: "main" | string;
    topst: boolean;
    totext: string;
    tocontentformat: "application/json" | "application/octet-stream" | "application/unknown" | "application/x-binary" | "text/css" | "text/javascript" | "text/plain" | "text/unknown" | "text/x-wiki" | "unknown/unknown" | string;
    tocontentmodel: "GadgetDefinition" | "Json.JsonConfig" | "JsonSchema" | "Map.JsonConfig" | "MassMessageListContent" | "NewsletterContent" | "Scribunto" | "SecurePoll" | "Tabular.JsonConfig" | "css" | "flow-board" | "javascript" | "json" | "sanitized-css" | "text" | "translate-messagebundle" | "unknown" | "wikitext" | string;
    tosection: string;
    prop: "comment" | "diff" | "diffsize" | "ids" | "parsedcomment" | "rel" | "size" | "timestamp" | "title" | "user" | string;
    slots: "main" | string;
}

export interface Paramscreateaccount extends Params {
    requests: string;
    messageformat: "html" | "none" | "raw" | "wikitext" | string;
    mergerequestfields: boolean;
    preservestate: boolean;
    returnurl: string;
    continue: boolean;
    token: string;
}

export interface Paramscreatelocalaccount extends Params {
    username: string;
    reason: string;
    token: string;
}

export interface Paramscspreport extends Params {
    reportonly: boolean;
    source: string;
}

export interface Paramsdelete_ extends Params {
    title: string;
    pageid: number;
    reason: string;
    tags: "possible vandalism" | "repeating characters" | string;
    deletetalk: boolean;
    watch: boolean;
    watchlist: "nochange" | "preferences" | "unwatch" | "watch" | string;
    watchlistexpiry: string;
    unwatch: boolean;
    oldimage: string;
    token: string;
}

export interface Paramsdeleteglobalaccount extends Params {
    user: string;
    reason: string;
    token: string;
}

export interface Paramsdiscussiontoolscompare extends Params {
    fromtitle: string;
    fromrev: number;
    totitle: string;
    torev: number;
}

export interface Paramsdiscussiontoolsedit extends Params {
    paction: "addcomment" | "addtopic" | string;
    page: string;
    token: string;
    formtoken: string;
    commentname: string;
    commentid: string;
    wikitext: string;
    html: string;
    summary: string;
    sectiontitle: string;
    useskin: "apioutput" | "cologneblue" | "fallback" | "minerva" | "modern" | "monobook" | "timeless" | "vector" | "vector-2022" | string;
    watchlist: string;
    captchaid: string;
    captchaword: string;
    mobileformat: boolean;
}

export interface Paramsdiscussiontoolsgetsubscriptions extends Params {
    commentname: string;
}

export interface Paramsdiscussiontoolspageinfo extends Params {
    page: string;
    oldid: string;
    prop: "threaditemshtml" | "transcludedfrom" | string;
}

export interface Paramsdiscussiontoolspreview extends Params {
    type: "reply" | "topic" | string;
    page: string;
    wikitext: string;
    sectiontitle: string;
}

export interface Paramsdiscussiontoolssubscribe extends Params {
    page: string;
    token: string;
    commentname: string;
    subscribe: boolean;
}

export interface Paramsechomarkread extends Params {
    wikis: "*" | "aawiki" | "aawikibooks" | "aawiktionary" | "abwiki" | "abwiktionary" | "acewiki" | "advisorswiki" | "advisorywiki" | "adywiki" | "afwiki" | "afwikibooks" | "afwikiquote" | "afwiktionary" | "akwiki" | "akwikibooks" | "akwiktionary" | "alswiki" | "altwiki" | "amiwiki" | "amwiki" | "amwikimedia" | "amwikiquote" | "amwiktionary" | "angwiki" | "angwikibooks" | "angwikiquote" | "angwikisource" | "angwiktionary" | "anwiki" | "anwiktionary" | "apiportalwiki" | "arbcom_cswiki" | "arbcom_dewiki" | "arbcom_enwiki" | "arbcom_fiwiki" | "arbcom_nlwiki" | "arbcom_ruwiki" | "arcwiki" | "arwiki" | "arwikibooks" | "arwikimedia" | "arwikinews" | "arwikiquote" | "arwikisource" | "arwikiversity" | "arwiktionary" | "arywiki" | "arzwiki" | "astwiki" | "astwikibooks" | "astwikiquote" | "astwiktionary" | "aswiki" | "aswikibooks" | "aswikisource" | "aswiktionary" | "atjwiki" | "auditcomwiki" | "avkwiki" | "avwiki" | "avwiktionary" | "awawiki" | "aywiki" | "aywikibooks" | "aywiktionary" | "azbwiki" | "azwiki" | "azwikibooks" | "azwikiquote" | "azwikisource" | "azwiktionary" | "banwiki" | "banwikisource" | "barwiki" | "bat_smgwiki" | "bawiki" | "bawikibooks" | "bclwiki" | "bclwiktionary" | "bdwikimedia" | "be_x_oldwiki" | "betawikiversity" | "bewiki" | "bewikibooks" | "bewikimedia" | "bewikiquote" | "bewikisource" | "bewiktionary" | "bgwiki" | "bgwikibooks" | "bgwikinews" | "bgwikiquote" | "bgwikisource" | "bgwiktionary" | "bhwiki" | "bhwiktionary" | "biwiki" | "biwikibooks" | "biwiktionary" | "bjnwiki" | "bmwiki" | "bmwikibooks" | "bmwikiquote" | "bmwiktionary" | "bnwiki" | "bnwikibooks" | "bnwikisource" | "bnwikivoyage" | "bnwiktionary" | "boardgovcomwiki" | "boardwiki" | "bowiki" | "bowikibooks" | "bowiktionary" | "bpywiki" | "brwiki" | "brwikimedia" | "brwikiquote" | "brwikisource" | "brwiktionary" | "bswiki" | "bswikibooks" | "bswikinews" | "bswikiquote" | "bswikisource" | "bswiktionary" | "bugwiki" | "bxrwiki" | "cawiki" | "cawikibooks" | "cawikimedia" | "cawikinews" | "cawikiquote" | "cawikisource" | "cawiktionary" | "cbk_zamwiki" | "cdowiki" | "cebwiki" | "cewiki" | "chairwiki" | "chapcomwiki" | "checkuserwiki" | "chowiki" | "chrwiki" | "chrwiktionary" | "chwiki" | "chwikibooks" | "chwiktionary" | "chywiki" | "ckbwiki" | "cnwikimedia" | "collabwiki" | "commonswiki" | "cowiki" | "cowikibooks" | "cowikimedia" | "cowikiquote" | "cowiktionary" | "crhwiki" | "crwiki" | "crwikiquote" | "crwiktionary" | "csbwiki" | "csbwiktionary" | "cswiki" | "cswikibooks" | "cswikinews" | "cswikiquote" | "cswikisource" | "cswikiversity" | "cswiktionary" | "cuwiki" | "cvwiki" | "cvwikibooks" | "cywiki" | "cywikibooks" | "cywikiquote" | "cywikisource" | "cywiktionary" | "dagwiki" | "dawiki" | "dawikibooks" | "dawikiquote" | "dawikisource" | "dawiktionary" | "dewiki" | "dewikibooks" | "dewikinews" | "dewikiquote" | "dewikisource" | "dewikiversity" | "dewikivoyage" | "dewiktionary" | "dinwiki" | "diqwiki" | "diqwiktionary" | "dkwikimedia" | "donatewiki" | "dsbwiki" | "dtywiki" | "dvwiki" | "dvwiktionary" | "dzwiki" | "dzwiktionary" | "ecwikimedia" | "eewiki" | "electcomwiki" | "elwiki" | "elwikibooks" | "elwikinews" | "elwikiquote" | "elwikisource" | "elwikiversity" | "elwikivoyage" | "elwiktionary" | "emlwiki" | "enwiki" | "enwikibooks" | "enwikinews" | "enwikiquote" | "enwikisource" | "enwikiversity" | "enwikivoyage" | "enwiktionary" | "eowiki" | "eowikibooks" | "eowikinews" | "eowikiquote" | "eowikisource" | "eowikivoyage" | "eowiktionary" | "eswiki" | "eswikibooks" | "eswikinews" | "eswikiquote" | "eswikisource" | "eswikiversity" | "eswikivoyage" | "eswiktionary" | "etwiki" | "etwikibooks" | "etwikimedia" | "etwikiquote" | "etwikisource" | "etwiktionary" | "euwiki" | "euwikibooks" | "euwikiquote" | "euwikisource" | "euwiktionary" | "execwiki" | "extwiki" | "fawiki" | "fawikibooks" | "fawikinews" | "fawikiquote" | "fawikisource" | "fawikivoyage" | "fawiktionary" | "fdcwiki" | "ffwiki" | "fiu_vrowiki" | "fiwiki" | "fiwikibooks" | "fiwikimedia" | "fiwikinews" | "fiwikiquote" | "fiwikisource" | "fiwikiversity" | "fiwikivoyage" | "fiwiktionary" | "fjwiki" | "fjwiktionary" | "foundationwiki" | "fowiki" | "fowikisource" | "fowiktionary" | "frpwiki" | "frrwiki" | "frwiki" | "frwikibooks" | "frwikinews" | "frwikiquote" | "frwikisource" | "frwikiversity" | "frwikivoyage" | "frwiktionary" | "furwiki" | "fywiki" | "fywikibooks" | "fywiktionary" | "gagwiki" | "ganwiki" | "gawiki" | "gawikibooks" | "gawikiquote" | "gawiktionary" | "gcrwiki" | "gdwiki" | "gdwiktionary" | "gewikimedia" | "glkwiki" | "glwiki" | "glwikibooks" | "glwikiquote" | "glwikisource" | "glwiktionary" | "gnwiki" | "gnwikibooks" | "gnwiktionary" | "gomwiki" | "gomwiktionary" | "gorwiki" | "gotwiki" | "gotwikibooks" | "grantswiki" | "grwikimedia" | "guwiki" | "guwikibooks" | "guwikiquote" | "guwikisource" | "guwiktionary" | "guwwiki" | "gvwiki" | "gvwiktionary" | "hakwiki" | "hawiki" | "hawiktionary" | "hawwiki" | "hewiki" | "hewikibooks" | "hewikinews" | "hewikiquote" | "hewikisource" | "hewikivoyage" | "hewiktionary" | "hifwiki" | "hifwiktionary" | "hiwiki" | "hiwikibooks" | "hiwikimedia" | "hiwikiquote" | "hiwikisource" | "hiwikiversity" | "hiwikivoyage" | "hiwiktionary" | "howiki" | "hrwiki" | "hrwikibooks" | "hrwikiquote" | "hrwikisource" | "hrwiktionary" | "hsbwiki" | "hsbwiktionary" | "htwiki" | "htwikisource" | "huwiki" | "huwikibooks" | "huwikinews" | "huwikiquote" | "huwikisource" | "huwiktionary" | "hywiki" | "hywikibooks" | "hywikiquote" | "hywikisource" | "hywiktionary" | "hywwiki" | "hzwiki" | "iawiki" | "iawikibooks" | "iawiktionary" | "id_internalwikimedia" | "idwiki" | "idwikibooks" | "idwikimedia" | "idwikiquote" | "idwikisource" | "idwiktionary" | "iegcomwiki" | "iewiki" | "iewikibooks" | "iewiktionary" | "igwiki" | "iiwiki" | "ikwiki" | "ikwiktionary" | "ilowiki" | "ilwikimedia" | "incubatorwiki" | "inhwiki" | "internalwiki" | "iowiki" | "iowiktionary" | "iswiki" | "iswikibooks" | "iswikiquote" | "iswikisource" | "iswiktionary" | "itwiki" | "itwikibooks" | "itwikinews" | "itwikiquote" | "itwikisource" | "itwikiversity" | "itwikivoyage" | "itwiktionary" | "iuwiki" | "iuwiktionary" | "jamwiki" | "jawiki" | "jawikibooks" | "jawikinews" | "jawikiquote" | "jawikisource" | "jawikiversity" | "jawikivoyage" | "jawiktionary" | "jbowiki" | "jbowiktionary" | "jvwiki" | "jvwikisource" | "jvwiktionary" | "kaawiki" | "kabwiki" | "kawiki" | "kawikibooks" | "kawikiquote" | "kawiktionary" | "kbdwiki" | "kbpwiki" | "kcgwiki" | "kgwiki" | "kiwiki" | "kjwiki" | "kkwiki" | "kkwikibooks" | "kkwikiquote" | "kkwiktionary" | "klwiki" | "klwiktionary" | "kmwiki" | "kmwikibooks" | "kmwiktionary" | "knwiki" | "knwikibooks" | "knwikiquote" | "knwikisource" | "knwiktionary" | "koiwiki" | "kowiki" | "kowikibooks" | "kowikinews" | "kowikiquote" | "kowikisource" | "kowikiversity" | "kowiktionary" | "krcwiki" | "krwiki" | "krwikiquote" | "kshwiki" | "kswiki" | "kswikibooks" | "kswikiquote" | "kswiktionary" | "kuwiki" | "kuwikibooks" | "kuwikiquote" | "kuwiktionary" | "kvwiki" | "kwwiki" | "kwwikiquote" | "kwwiktionary" | "kywiki" | "kywikibooks" | "kywikiquote" | "kywiktionary" | "labswiki" | "labtestwiki" | "ladwiki" | "lawiki" | "lawikibooks" | "lawikiquote" | "lawikisource" | "lawiktionary" | "lbewiki" | "lbwiki" | "lbwikibooks" | "lbwikiquote" | "lbwiktionary" | "legalteamwiki" | "lezwiki" | "lfnwiki" | "lgwiki" | "lijwiki" | "lijwikisource" | "liwiki" | "liwikibooks" | "liwikinews" | "liwikiquote" | "liwikisource" | "liwiktionary" | "lldwiki" | "lmowiki" | "lmowiktionary" | "lnwiki" | "lnwikibooks" | "lnwiktionary" | "loginwiki" | "lowiki" | "lowiktionary" | "lrcwiki" | "ltgwiki" | "ltwiki" | "ltwikibooks" | "ltwikiquote" | "ltwikisource" | "ltwiktionary" | "lvwiki" | "lvwikibooks" | "lvwiktionary" | "madwiki" | "maiwiki" | "maiwikimedia" | "map_bmswiki" | "mdfwiki" | "mediawikiwiki" | "metawiki" | "mgwiki" | "mgwikibooks" | "mgwiktionary" | "mhrwiki" | "mhwiki" | "mhwiktionary" | "minwiki" | "minwiktionary" | "miwiki" | "miwikibooks" | "miwiktionary" | "mkwiki" | "mkwikibooks" | "mkwikimedia" | "mkwikisource" | "mkwiktionary" | "mlwiki" | "mlwikibooks" | "mlwikiquote" | "mlwikisource" | "mlwiktionary" | "mniwiki" | "mniwiktionary" | "mnwiki" | "mnwikibooks" | "mnwiktionary" | "mnwwiki" | "mnwwiktionary" | "movementroleswiki" | "mrjwiki" | "mrwiki" | "mrwikibooks" | "mrwikiquote" | "mrwikisource" | "mrwiktionary" | "mswiki" | "mswikibooks" | "mswiktionary" | "mtwiki" | "mtwiktionary" | "muswiki" | "mwlwiki" | "mxwikimedia" | "myvwiki" | "mywiki" | "mywikibooks" | "mywiktionary" | "mznwiki" | "nahwiki" | "nahwikibooks" | "nahwiktionary" | "napwiki" | "napwikisource" | "nawiki" | "nawikibooks" | "nawikiquote" | "nawiktionary" | "nds_nlwiki" | "ndswiki" | "ndswikibooks" | "ndswikiquote" | "ndswiktionary" | "newiki" | "newikibooks" | "newiktionary" | "newwiki" | "ngwiki" | "ngwikimedia" | "niawiki" | "niawiktionary" | "nlwiki" | "nlwikibooks" | "nlwikimedia" | "nlwikinews" | "nlwikiquote" | "nlwikisource" | "nlwikivoyage" | "nlwiktionary" | "nnwiki" | "nnwikiquote" | "nnwiktionary" | "noboard_chapterswikimedia" | "nostalgiawiki" | "novwiki" | "nowiki" | "nowikibooks" | "nowikimedia" | "nowikinews" | "nowikiquote" | "nowikisource" | "nowiktionary" | "nqowiki" | "nrmwiki" | "nsowiki" | "nvwiki" | "nycwikimedia" | "nywiki" | "nzwikimedia" | "ocwiki" | "ocwikibooks" | "ocwiktionary" | "officewiki" | "olowiki" | "ombudsmenwiki" | "omwiki" | "omwiktionary" | "orwiki" | "orwikisource" | "orwiktionary" | "oswiki" | "otrs_wikiwiki" | "outreachwiki" | "pa_uswikimedia" | "pagwiki" | "pamwiki" | "papwiki" | "pawiki" | "pawikibooks" | "pawikisource" | "pawiktionary" | "pcdwiki" | "pdcwiki" | "pflwiki" | "pihwiki" | "piwiki" | "piwiktionary" | "plwiki" | "plwikibooks" | "plwikimedia" | "plwikinews" | "plwikiquote" | "plwikisource" | "plwikivoyage" | "plwiktionary" | "pmswiki" | "pmswikisource" | "pnbwiki" | "pnbwiktionary" | "pntwiki" | "projectcomwiki" | "pswiki" | "pswikibooks" | "pswikivoyage" | "pswiktionary" | "ptwiki" | "ptwikibooks" | "ptwikimedia" | "ptwikinews" | "ptwikiquote" | "ptwikisource" | "ptwikiversity" | "ptwikivoyage" | "ptwiktionary" | "punjabiwikimedia" | "pwnwiki" | "qualitywiki" | "quwiki" | "quwikibooks" | "quwikiquote" | "quwiktionary" | "rmwiki" | "rmwikibooks" | "rmwiktionary" | "rmywiki" | "rnwiki" | "rnwiktionary" | "roa_rupwiki" | "roa_rupwiktionary" | "roa_tarawiki" | "romdwikimedia" | "rowiki" | "rowikibooks" | "rowikinews" | "rowikiquote" | "rowikisource" | "rowikivoyage" | "rowiktionary" | "rswikimedia" | "ruewiki" | "ruwiki" | "ruwikibooks" | "ruwikimedia" | "ruwikinews" | "ruwikiquote" | "ruwikisource" | "ruwikiversity" | "ruwikivoyage" | "ruwiktionary" | "rwwiki" | "rwwiktionary" | "sahwiki" | "sahwikiquote" | "sahwikisource" | "satwiki" | "sawiki" | "sawikibooks" | "sawikiquote" | "sawikisource" | "sawiktionary" | "scnwiki" | "scnwiktionary" | "scowiki" | "scwiki" | "scwiktionary" | "sdwiki" | "sdwikinews" | "sdwiktionary" | "searchcomwiki" | "sewiki" | "sewikibooks" | "sewikimedia" | "sgwiki" | "sgwiktionary" | "shiwiki" | "shnwiki" | "shnwikivoyage" | "shnwiktionary" | "shwiki" | "shwiktionary" | "shywiktionary" | "simplewiki" | "simplewikibooks" | "simplewikiquote" | "simplewiktionary" | "siwiki" | "siwikibooks" | "siwiktionary" | "skrwiki" | "skrwiktionary" | "skwiki" | "skwikibooks" | "skwikiquote" | "skwikisource" | "skwiktionary" | "slwiki" | "slwikibooks" | "slwikiquote" | "slwikisource" | "slwikiversity" | "slwiktionary" | "smnwiki" | "smwiki" | "smwiktionary" | "snwiki" | "snwiktionary" | "sourceswiki" | "sowiki" | "sowiktionary" | "spcomwiki" | "specieswiki" | "sqwiki" | "sqwikibooks" | "sqwikinews" | "sqwikiquote" | "sqwiktionary" | "srnwiki" | "srwiki" | "srwikibooks" | "srwikinews" | "srwikiquote" | "srwikisource" | "srwiktionary" | "sswiki" | "sswiktionary" | "stewardwiki" | "stqwiki" | "strategywiki" | "stwiki" | "stwiktionary" | "suwiki" | "suwikibooks" | "suwikiquote" | "suwiktionary" | "svwiki" | "svwikibooks" | "svwikinews" | "svwikiquote" | "svwikisource" | "svwikiversity" | "svwikivoyage" | "svwiktionary" | "swwiki" | "swwikibooks" | "swwiktionary" | "sysop_itwiki" | "szlwiki" | "szywiki" | "tawiki" | "tawikibooks" | "tawikinews" | "tawikiquote" | "tawikisource" | "tawiktionary" | "taywiki" | "tcywiki" | "techconductwiki" | "tenwiki" | "test2wiki" | "testcommonswiki" | "testwiki" | "testwikidatawiki" | "tetwiki" | "tewiki" | "tewikibooks" | "tewikiquote" | "tewikisource" | "tewiktionary" | "tgwiki" | "tgwikibooks" | "tgwiktionary" | "thankyouwiki" | "thwiki" | "thwikibooks" | "thwikinews" | "thwikiquote" | "thwikisource" | "thwiktionary" | "tiwiki" | "tiwiktionary" | "tkwiki" | "tkwikibooks" | "tkwikiquote" | "tkwiktionary" | "tlwiki" | "tlwikibooks" | "tlwiktionary" | "tnwiki" | "tnwiktionary" | "towiki" | "towiktionary" | "tpiwiki" | "tpiwiktionary" | "transitionteamwiki" | "trvwiki" | "trwiki" | "trwikibooks" | "trwikimedia" | "trwikinews" | "trwikiquote" | "trwikisource" | "trwikivoyage" | "trwiktionary" | "tswiki" | "tswiktionary" | "ttwiki" | "ttwikibooks" | "ttwikiquote" | "ttwiktionary" | "tumwiki" | "twwiki" | "twwiktionary" | "tyvwiki" | "tywiki" | "uawikimedia" | "udmwiki" | "ugwiki" | "ugwikibooks" | "ugwikiquote" | "ugwiktionary" | "ukwiki" | "ukwikibooks" | "ukwikinews" | "ukwikiquote" | "ukwikisource" | "ukwikivoyage" | "ukwiktionary" | "urwiki" | "urwikibooks" | "urwikiquote" | "urwiktionary" | "usabilitywiki" | "uzwiki" | "uzwikibooks" | "uzwikiquote" | "uzwiktionary" | "vecwiki" | "vecwikisource" | "vecwiktionary" | "vepwiki" | "vewiki" | "viwiki" | "viwikibooks" | "viwikiquote" | "viwikisource" | "viwikivoyage" | "viwiktionary" | "vlswiki" | "votewiki" | "vowiki" | "vowikibooks" | "vowikiquote" | "vowiktionary" | "warwiki" | "wawiki" | "wawikibooks" | "wawikisource" | "wawiktionary" | "wbwikimedia" | "wg_enwiki" | "wikidatawiki" | "wikimania2005wiki" | "wikimania2006wiki" | "wikimania2007wiki" | "wikimania2008wiki" | "wikimania2009wiki" | "wikimania2010wiki" | "wikimania2011wiki" | "wikimania2012wiki" | "wikimania2013wiki" | "wikimania2014wiki" | "wikimania2015wiki" | "wikimania2016wiki" | "wikimania2017wiki" | "wikimania2018wiki" | "wikimaniateamwiki" | "wikimaniawiki" | "wowiki" | "wowikiquote" | "wowiktionary" | "wuuwiki" | "xalwiki" | "xhwiki" | "xhwikibooks" | "xhwiktionary" | "xmfwiki" | "yiwiki" | "yiwikisource" | "yiwiktionary" | "yowiki" | "yowikibooks" | "yowiktionary" | "yuewiktionary" | "zawiki" | "zawikibooks" | "zawikiquote" | "zawiktionary" | "zeawiki" | "zh_classicalwiki" | "zh_min_nanwiki" | "zh_min_nanwikibooks" | "zh_min_nanwikiquote" | "zh_min_nanwikisource" | "zh_min_nanwiktionary" | "zh_yuewiki" | "zhwiki" | "zhwikibooks" | "zhwikinews" | "zhwikiquote" | "zhwikisource" | "zhwikiversity" | "zhwikivoyage" | "zhwiktionary" | "zuwiki" | "zuwikibooks" | "zuwiktionary" | string;
    list: string;
    unreadlist: string;
    all: boolean;
    sections: "alert" | "message" | string;
    token: string;
}

export interface Paramsechomarkseen extends Params {
    type: "alert" | "all" | "message" | string;
    timestampFormat: "ISO_8601" | "MW" | string;
}

export interface Paramsechomute extends Params {
    type: "page-linked-title" | "user" | string;
    mute: string;
    unmute: string;
    token: string;
}

export interface Paramsedit extends Params {
    title: string;
    pageid: number;
    section: string;
    sectiontitle: string;
    text: string;
    summary: string;
    tags: "possible vandalism" | "repeating characters" | string;
    minor: boolean;
    notminor: boolean;
    bot: boolean;
    baserevid: number;
    basetimestamp: string;
    starttimestamp: string;
    recreate: boolean;
    createonly: boolean;
    nocreate: boolean;
    watch: boolean;
    unwatch: boolean;
    watchlist: "nochange" | "preferences" | "unwatch" | "watch" | string;
    watchlistexpiry: string;
    md5: string;
    prependtext: string;
    appendtext: string;
    undo: number;
    undoafter: number;
    redirect: boolean;
    contentformat: "application/json" | "application/octet-stream" | "application/unknown" | "application/x-binary" | "text/css" | "text/javascript" | "text/plain" | "text/unknown" | "text/x-wiki" | "unknown/unknown" | string;
    contentmodel: "GadgetDefinition" | "Json.JsonConfig" | "JsonSchema" | "Map.JsonConfig" | "MassMessageListContent" | "NewsletterContent" | "Scribunto" | "SecurePoll" | "Tabular.JsonConfig" | "css" | "flow-board" | "javascript" | "json" | "sanitized-css" | "text" | "translate-messagebundle" | "unknown" | "wikitext" | string;
    token: string;
    captchaword: string;
    captchaid: string;
}

export interface Paramseditmassmessagelist extends Params {
    spamlist: string;
    description: string;
    add: string;
    remove: string;
    token: string;
}

export interface Paramsemailuser extends Params {
    target: string;
    subject: string;
    text: string;
    ccme: boolean;
    token: string;
}

export interface Paramsexpandtemplates extends Params {
    title: string;
    text: string;
    revid: number;
    prop: "categories" | "encodedjsconfigvars" | "jsconfigvars" | "modules" | "parsetree" | "properties" | "ttl" | "volatile" | "wikitext" | string;
    includecomments: boolean;
    showstrategykeys: boolean;
    generatexml: boolean;
    templatesandboxprefix: string;
    templatesandboxtitle: string;
    templatesandboxtext: string;
    templatesandboxcontentmodel: "GadgetDefinition" | "Json.JsonConfig" | "JsonSchema" | "Map.JsonConfig" | "MassMessageListContent" | "NewsletterContent" | "Scribunto" | "SecurePoll" | "Tabular.JsonConfig" | "css" | "flow-board" | "javascript" | "json" | "sanitized-css" | "text" | "translate-messagebundle" | "unknown" | "wikitext" | string;
    templatesandboxcontentformat: "application/json" | "application/octet-stream" | "application/unknown" | "application/x-binary" | "text/css" | "text/javascript" | "text/plain" | "text/unknown" | "text/x-wiki" | "unknown/unknown" | string;
}

export interface Paramsfancycaptchareload extends Params {
}

export interface Paramsfeaturedfeed extends Params {
    feedformat: "atom" | "rss" | string;
    feed:  | string;
    language: string;
}

export interface Paramsfeedcontributions extends Params {
    feedformat: "atom" | "rss" | string;
    user: string;
    namespace: string;
    year: number;
    month: number;
    tagfilter: "Added PHP closing tag" | "Blocked user editing own talk page" | "Emoji" | "New user blanking page" | "New user editing project page" | "OAuth CID: 21" | "OAuth CID: 31" | "OAuth CID: 429" | "OAuth CID: 1188" | "OAuth CID: 1261" | "OAuth CID: 1352" | "OAuth CID: 1805" | "OAuth CID: 1841" | "OAuth CID: 2071" | "OTRS permission added by non-OTRS member" | "Potentially problematic translation" | "Rapid reverts" | "T144167" | "abusefilter-condition-limit" | "advanced mobile edit" | "android app edit" | "blanking" | "centralnotice" | "centralnotice translation" | "deletion template removed" | "disambiguator-link-added" | "discussiontools" | "discussiontools-added-comment" | "discussiontools-edit" | "discussiontools-newtopic" | "discussiontools-reply" | "discussiontools-source" | "discussiontools-source-enhanced" | "discussiontools-visual" | "disneynew" | "emoji" | "fileimporter-remote" | "ios app edit" | "massmessage-delivery" | "meta spam id" | "mobile app edit" | "mobile edit" | "mobile web edit" | "mw-blank" | "mw-changed-redirect-target" | "mw-contentmodelchange" | "mw-manual-revert" | "mw-new-redirect" | "mw-removed-redirect" | "mw-replace" | "mw-reverted" | "mw-rollback" | "mw-server-side-upload" | "mw-undo" | "possible link spam 2" | "possible out of scope" | "possible vandalism" | "repeated xwiki CoI abuse" | "repeating characters" | "visualeditor" | "visualeditor-needcheck" | "visualeditor-switched" | "visualeditor-wikitext" | "wikieditor" | "wikilove" | string;
    deletedonly: boolean;
    toponly: boolean;
    newonly: boolean;
    hideminor: boolean;
    showsizediff: boolean;
}

export interface Paramsfeedrecentchanges extends Params {
    feedformat: "atom" | "rss" | string;
    namespace: string;
    invert: boolean;
    associated: boolean;
    days: number;
    limit: number;
    from: string;
    hideminor: boolean;
    hidebots: boolean;
    hideanons: boolean;
    hideliu: boolean;
    hidepatrolled: boolean;
    hidemyself: boolean;
    hidecategorization: boolean;
    tagfilter: string;
    target: string;
    showlinkedto: boolean;
}

export interface Paramsfeedthreads extends Params {
    feedformat: "atom" | "rss" | string;
    days: number;
    type: "newthreads" | "replies" | string;
    talkpage: string;
    thread: string;
}

export interface Paramsfeedwatchlist extends Params {
    feedformat: "atom" | "rss" | string;
    hours: number;
    linktosections: boolean;
    allrev: boolean;
    wlowner: string;
    wltoken: string;
    wlshow: "!anon" | "!autopatrolled" | "!bot" | "!minor" | "!patrolled" | "!unread" | "anon" | "autopatrolled" | "bot" | "minor" | "patrolled" | "unread" | string;
    wltype: "categorize" | "edit" | "external" | "log" | "new" | string;
    wlexcludeuser: string;
}

export interface Paramsfilerevert extends Params {
    filename: string;
    comment: string;
    archivename: string;
    token: string;
}

export interface Paramsflow extends Params {
    submodule: "edit-header" | "edit-post" | "edit-title" | "edit-topic-summary" | "lock-topic" | "moderate-post" | "moderate-topic" | "new-topic" | "reply" | "undo-edit-header" | "undo-edit-post" | "undo-edit-topic-summary" | "view-header" | "view-post" | "view-post-history" | "view-topic" | "view-topic-history" | "view-topic-summary" | "view-topiclist" | "close-open-topic" | string;
    page: string;
    token: string;
}

export interface Paramsflow_parsoid_utils extends Params {
    from: "html" | "wikitext" | string;
    to: "html" | "wikitext" | string;
    content: string;
    title: string;
    pageid: number;
}

export interface Paramsflowthank extends Params {
    postid: string;
    token: string;
}

export interface Paramsglobalblock extends Params {
    target: string;
    expiry: string;
    unblock: boolean;
    reason: string;
    anononly: boolean;
    modify: boolean;
    alsolocal: boolean;
    localblockstalk: boolean;
    localanononly: boolean;
    token: string;
}

export interface Paramsglobalpreferenceoverrides extends Params {
    reset: boolean;
    resetkinds: "all" | "registered" | "registered-checkmatrix" | "registered-multiselect" | "special" | "unused" | "userjs" | string;
    change: string;
    optionname: string;
    optionvalue: string;
    token: string;
}

export interface Paramsglobalpreferences extends Params {
    reset: boolean;
    resetkinds: "all" | "registered" | "registered-checkmatrix" | "registered-multiselect" | "special" | "unused" | "userjs" | string;
    change: string;
    optionname: string;
    optionvalue: string;
    token: string;
}

export interface Paramsglobaluserrights extends Params {
    user: string;
    userid: number;
    add: "abusefilter-helper" | "abusefilter-maintainer" | "apihighlimits-requestor" | "captcha-exempt" | "founder" | "global-bot" | "global-deleter" | "global-flow-create" | "global-interface-editor" | "global-ipblock-exempt" | "global-rollbacker" | "global-sysop" | "new-wikis-importer" | "oathauth-tester" | "ombuds" | "recursive-export" | "staff" | "steward" | "sysadmin" | "vrt-permissions" | "wmf-ops-monitoring" | "wmf-researcher" | string;
    remove: "abusefilter-helper" | "abusefilter-maintainer" | "apihighlimits-requestor" | "captcha-exempt" | "founder" | "global-bot" | "global-deleter" | "global-flow-create" | "global-interface-editor" | "global-ipblock-exempt" | "global-rollbacker" | "global-sysop" | "new-wikis-importer" | "oathauth-tester" | "ombuds" | "recursive-export" | "staff" | "steward" | "sysadmin" | "vrt-permissions" | "wmf-ops-monitoring" | "wmf-researcher" | string;
    reason: string;
    token: string;
    tags: "possible vandalism" | "repeating characters" | string;
}

export interface Paramsgraph extends Params {
    hash: string;
    title: string;
    text: string;
    oldid: number;
}

export interface Paramsgroupreview extends Params {
    group: string;
    language: string;
    state: string;
    token: string;
}

export interface Paramshelp extends Params {
    modules: string;
    submodules: boolean;
    recursivesubmodules: boolean;
    wrap: boolean;
    toc: boolean;
}

export interface Paramsimagerotate extends Params {
}

export interface Paramsimport_ extends Params {
    summary: string;
    xml: string;
    interwikiprefix: string;
    interwikisource: "meta" | "usability" | "w:en" | "wikitech" | string;
    interwikipage: string;
    fullhistory: boolean;
    templates: boolean;
    namespace: string;
    assignknownusers: boolean;
    rootpage: string;
    tags: "possible vandalism" | "repeating characters" | string;
    token: string;
}

export interface Paramsjson extends Params {
    callback: string;
    utf8: boolean;
    ascii: boolean;
    formatversion: "1" | "2" | "latest" | string;
}

export interface Paramsjsonconfig extends Params {
    command: "reload" | "reset" | "status" | string;
    namespace: number;
    title: string;
    content: string;
}

export interface Paramsjsondata extends Params {
    title: string;
}

export interface Paramsjsonfm extends Params {
    wrappedhtml: boolean;
    callback: string;
    utf8: boolean;
    ascii: boolean;
    formatversion: "1" | "2" | "latest" | string;
}

export interface Paramslanguagesearch extends Params {
    search: string;
    typos: number;
}

export interface Paramslinkaccount extends Params {
    requests: string;
    messageformat: "html" | "none" | "raw" | "wikitext" | string;
    mergerequestfields: boolean;
    returnurl: string;
    continue: boolean;
    token: string;
}

export interface Paramslogin extends Params {
    name: string;
    password: string;
    domain: string;
    token: string;
}

export interface Paramslogout extends Params {
    token: string;
}

export interface Paramsmanagegroupsynchronizationcache extends Params {
    operation: "resolveGroup" | "resolveMessage" | string;
    title: string;
    group: string;
    token: string;
}

export interface Paramsmanagemessagegroups extends Params {
    groupId: string;
    renameMessageKey: string;
    messageKey: string;
    operation: "new" | "rename" | string;
    changesetName: string;
    changesetModified: number;
    token: string;
}

export interface Paramsmanagetags extends Params {
    operation: "activate" | "create" | "deactivate" | "delete" | string;
    tag: string;
    reason: string;
    ignorewarnings: boolean;
    tags: "possible vandalism" | "repeating characters" | string;
    token: string;
}

export interface Paramsmassmessage extends Params {
    spamlist: string;
    subject: string;
    message: string;
    page_message: string;
    token: string;
}

export interface Paramsmergehistory extends Params {
    from: string;
    fromid: number;
    to: string;
    toid: number;
    timestamp: string;
    reason: string;
    token: string;
}

export interface Paramsmobileview extends Params {
    page: string;
    redirect: "no" | "yes" | string;
    sections: string;
    prop: "contentmodel" | "description" | "displaytitle" | "editable" | "hasvariants" | "id" | "image" | "languagecount" | "lastmodified" | "lastmodifiedby" | "namespace" | "normalizedtitle" | "pageprops" | "protection" | "revision" | "sections" | "text" | "thumb" | string;
    sectionprop: "anchor" | "fromtitle" | "index" | "level" | "line" | "number" | "toclevel" | string;
    pageprops: string;
    variant: string;
    noheadings: boolean;
    notransform: boolean;
    onlyrequestedsections: boolean;
    offset: number;
    maxlen: number;
    revision: number;
    thumbheight: number;
    thumbwidth: number;
    thumbsize: number;
}

export interface Paramsmove extends Params {
    from: string;
    fromid: number;
    to: string;
    reason: string;
    movetalk: boolean;
    movesubpages: boolean;
    noredirect: boolean;
    watchlist: "nochange" | "preferences" | "unwatch" | "watch" | string;
    watchlistexpiry: string;
    ignorewarnings: boolean;
    tags: "possible vandalism" | "repeating characters" | string;
    token: string;
}

export interface Paramsnewslettersubscribe extends Params {
    id: number;
    do_: "subscribe" | "unsubscribe" | string;
    token: string;
}

export interface Paramsnone extends Params {
}

export interface Paramsoathvalidate extends Params {
    user: string;
    totp: string;
    data: string;
    token: string;
}

export interface Paramsopensearch extends Params {
    search: string;
    namespace: string;
    limit: string;
    profile: "classic" | "engine_autoselect" | "fast-fuzzy" | "fuzzy" | "fuzzy-subphrases" | "normal" | "normal-subphrases" | "strict" | string;
    suggest: boolean;
    redirects: "resolve" | "return" | string;
    format: "json" | "jsonfm" | "xml" | "xmlfm" | string;
    warningsaserror: boolean;
}

export interface Paramsoptions extends Params {
    reset: boolean;
    resetkinds: "all" | "registered" | "registered-checkmatrix" | "registered-multiselect" | "special" | "unused" | "userjs" | string;
    change: string;
    optionname: string;
    optionvalue: string;
    token: string;
}

export interface Paramsparaminfo extends Params {
    modules: string;
    helpformat: "html" | "none" | "raw" | "wikitext" | string;
    querymodules: "abusefilters" | "abuselog" | "allcategories" | "alldeletedrevisions" | "allfileusages" | "allimages" | "alllinks" | "allmessages" | "allpages" | "allredirects" | "allrevisions" | "alltransclusions" | "allusers" | "authmanagerinfo" | "babel" | "backlinks" | "betafeatures" | "blocks" | "categories" | "categoryinfo" | "categorymembers" | "centralnoticeactivecampaigns" | "centralnoticelogs" | "checkuser" | "checkuserlog" | "cirrusbuilddoc" | "cirruscompsuggestbuilddoc" | "cirrusdoc" | "contributors" | "deletedrevisions" | "deletedrevs" | "description" | "duplicatefiles" | "embeddedin" | "extdistbranches" | "extdistrepos" | "extlinks" | "extracts" | "exturlusage" | "featureusage" | "filearchive" | "filerepoinfo" | "fileusage" | "flowinfo" | "gadgetcategories" | "gadgets" | "globalallusers" | "globalblocks" | "globalgroups" | "globalpreferences" | "globalrenamestatus" | "globalusage" | "globaluserinfo" | "imageinfo" | "images" | "imageusage" | "info" | "iwbacklinks" | "iwlinks" | "langbacklinks" | "langlinks" | "languageinfo" | "languagestats" | "links" | "linkshere" | "linterrors" | "linterstats" | "logevents" | "managemessagegroups" | "mapdata" | "messagecollection" | "messagegroups" | "messagegroupstats" | "messagetranslations" | "mmcontent" | "mmsites" | "mostviewed" | "mystashedfiles" | "notifications" | "oath" | "pageimages" | "pagepropnames" | "pageprops" | "pageswithprop" | "pageterms" | "pageviews" | "prefixsearch" | "protectedtitles" | "querypage" | "random" | "readinglistentries" | "readinglists" | "recentchanges" | "redirects" | "revisions" | "search" | "siteinfo" | "siteviews" | "stashimageinfo" | "tags" | "templates" | "threads" | "tokens" | "transcludedin" | "transcodestatus" | "unreadnotificationpages" | "usercontribs" | "userinfo" | "users" | "videoinfo" | "watchlist" | "watchlistraw" | "wbentityusage" | "wblistentityusage" | "wikibase" | "wikisets" | string;
    mainmodule: string;
    pagesetmodule: string;
    formatmodules: "json" | "jsonfm" | "none" | "php" | "phpfm" | "rawfm" | "xml" | "xmlfm" | string;
}

export interface Paramsparse extends Params {
    title: string;
    text: string;
    revid: number;
    summary: string;
    page: string;
    pageid: number;
    redirects: boolean;
    oldid: number;
    prop: "categories" | "categorieshtml" | "displaytitle" | "encodedjsconfigvars" | "externallinks" | "headhtml" | "images" | "indicators" | "iwlinks" | "jsconfigvars" | "langlinks" | "limitreportdata" | "limitreporthtml" | "links" | "modules" | "parsetree" | "parsewarnings" | "parsewarningshtml" | "properties" | "revid" | "sections" | "subtitle" | "templates" | "text" | "wikitext" | "headitems" | string;
    wrapoutputclass: string;
    pst: boolean;
    onlypst: boolean;
    effectivelanglinks: boolean;
    section: string;
    sectiontitle: string;
    disablepp: boolean;
    disablelimitreport: boolean;
    disableeditsection: boolean;
    disablestylededuplication: boolean;
    showstrategykeys: boolean;
    generatexml: boolean;
    preview: boolean;
    sectionpreview: boolean;
    disabletoc: boolean;
    useskin: "apioutput" | "cologneblue" | "fallback" | "minerva" | "modern" | "monobook" | "timeless" | "vector" | "vector-2022" | string;
    contentformat: "application/json" | "application/octet-stream" | "application/unknown" | "application/x-binary" | "text/css" | "text/javascript" | "text/plain" | "text/unknown" | "text/x-wiki" | "unknown/unknown" | string;
    contentmodel: "GadgetDefinition" | "Json.JsonConfig" | "JsonSchema" | "Map.JsonConfig" | "MassMessageListContent" | "NewsletterContent" | "Scribunto" | "SecurePoll" | "Tabular.JsonConfig" | "css" | "flow-board" | "javascript" | "json" | "sanitized-css" | "text" | "translate-messagebundle" | "unknown" | "wikitext" | string;
    mobileformat: boolean;
    templatesandboxprefix: string;
    templatesandboxtitle: string;
    templatesandboxtext: string;
    templatesandboxcontentmodel: "GadgetDefinition" | "Json.JsonConfig" | "JsonSchema" | "Map.JsonConfig" | "MassMessageListContent" | "NewsletterContent" | "Scribunto" | "SecurePoll" | "Tabular.JsonConfig" | "css" | "flow-board" | "javascript" | "json" | "sanitized-css" | "text" | "translate-messagebundle" | "unknown" | "wikitext" | string;
    templatesandboxcontentformat: "application/json" | "application/octet-stream" | "application/unknown" | "application/x-binary" | "text/css" | "text/javascript" | "text/plain" | "text/unknown" | "text/x-wiki" | "unknown/unknown" | string;
}

export interface Paramspatrol extends Params {
    rcid: number;
    revid: number;
    tags: "possible vandalism" | "repeating characters" | string;
    token: string;
}

export interface Paramsphp extends Params {
    formatversion: "1" | "2" | "latest" | string;
}

export interface Paramsphpfm extends Params {
    wrappedhtml: boolean;
    formatversion: "1" | "2" | "latest" | string;
}

export interface Paramsprotect extends Params {
    title: string;
    pageid: number;
    protections: string;
    expiry: string;
    reason: string;
    tags: "possible vandalism" | "repeating characters" | string;
    cascade: boolean;
    watch: boolean;
    watchlist: "nochange" | "preferences" | "unwatch" | "watch" | string;
    watchlistexpiry: string;
    token: string;
}

export interface Paramspurge extends Params {
    forcelinkupdate: boolean;
    forcerecursivelinkupdate: boolean;
    continue: string;
    titles: string;
    pageids: number;
    revids: number;
    generator: "allcategories" | "alldeletedrevisions" | "allfileusages" | "allimages" | "alllinks" | "allpages" | "allredirects" | "allrevisions" | "alltransclusions" | "backlinks" | "categories" | "categorymembers" | "deletedrevisions" | "duplicatefiles" | "embeddedin" | "exturlusage" | "fileusage" | "images" | "imageusage" | "iwbacklinks" | "langbacklinks" | "links" | "linkshere" | "messagecollection" | "mostviewed" | "pageswithprop" | "prefixsearch" | "protectedtitles" | "querypage" | "random" | "recentchanges" | "redirects" | "revisions" | "search" | "templates" | "transcludedin" | "watchlist" | "watchlistraw" | "wblistentityusage" | "readinglistentries" | string;
    redirects: boolean;
    converttitles: boolean;
}

export interface Paramsquery extends Params {
    prop: "categories" | "categoryinfo" | "cirrusbuilddoc" | "cirruscompsuggestbuilddoc" | "cirrusdoc" | "contributors" | "deletedrevisions" | "duplicatefiles" | "extlinks" | "extracts" | "fileusage" | "globalusage" | "imageinfo" | "images" | "info" | "iwlinks" | "langlinks" | "links" | "linkshere" | "mmcontent" | "pageimages" | "pageprops" | "pageterms" | "pageviews" | "redirects" | "revisions" | "stashimageinfo" | "templates" | "transcludedin" | "transcodestatus" | "videoinfo" | "wbentityusage" | "flowinfo" | "description" | "mapdata" | string;
    list: "abusefilters" | "abuselog" | "allcategories" | "alldeletedrevisions" | "allfileusages" | "allimages" | "alllinks" | "allpages" | "allredirects" | "allrevisions" | "alltransclusions" | "allusers" | "backlinks" | "betafeatures" | "blocks" | "categorymembers" | "centralnoticeactivecampaigns" | "centralnoticelogs" | "checkuser" | "checkuserlog" | "embeddedin" | "extdistrepos" | "exturlusage" | "filearchive" | "gadgetcategories" | "gadgets" | "globalallusers" | "globalblocks" | "globalgroups" | "imageusage" | "iwbacklinks" | "langbacklinks" | "linterrors" | "logevents" | "messagecollection" | "mostviewed" | "mystashedfiles" | "pagepropnames" | "pageswithprop" | "prefixsearch" | "protectedtitles" | "querypage" | "random" | "recentchanges" | "search" | "tags" | "threads" | "usercontribs" | "users" | "watchlist" | "watchlistraw" | "wblistentityusage" | "wikisets" | "deletedrevs" | "extdistbranches" | "mmsites" | "readinglistentries" | string;
    meta: "allmessages" | "authmanagerinfo" | "babel" | "featureusage" | "filerepoinfo" | "globalpreferences" | "globalrenamestatus" | "globaluserinfo" | "languageinfo" | "languagestats" | "linterstats" | "managemessagegroups" | "messagegroups" | "messagegroupstats" | "messagetranslations" | "notifications" | "siteinfo" | "siteviews" | "tokens" | "unreadnotificationpages" | "userinfo" | "wikibase" | "oath" | "readinglists" | string;
    indexpageids: boolean;
    export: boolean;
    exportnowrap: boolean;
    exportschema: "0.10" | "0.11" | string;
    iwurl: boolean;
    continue: string;
    rawcontinue: boolean;
    titles: string;
    pageids: number;
    revids: number;
    generator: "allcategories" | "alldeletedrevisions" | "allfileusages" | "allimages" | "alllinks" | "allpages" | "allredirects" | "allrevisions" | "alltransclusions" | "backlinks" | "categories" | "categorymembers" | "deletedrevisions" | "duplicatefiles" | "embeddedin" | "exturlusage" | "fileusage" | "images" | "imageusage" | "iwbacklinks" | "langbacklinks" | "links" | "linkshere" | "messagecollection" | "mostviewed" | "pageswithprop" | "prefixsearch" | "protectedtitles" | "querypage" | "random" | "recentchanges" | "redirects" | "revisions" | "search" | "templates" | "transcludedin" | "watchlist" | "watchlistraw" | "wblistentityusage" | "readinglistentries" | string;
    redirects: boolean;
    converttitles: boolean;
}

export interface Paramsrawfm extends Params {
    wrappedhtml: boolean;
}

export interface Paramsreadinglists extends Params {
    command: "create" | "createentry" | "delete" | "deleteentry" | "setup" | "teardown" | "update" | string;
    token: string;
}

export interface Paramsrecord_lint extends Params {
    data: string;
    page: string;
    revision: number;
}

export interface Paramsremoveauthenticationdata extends Params {
    request: string;
    token: string;
}

export interface Paramsresetpassword extends Params {
    user: string;
    email: string;
    token: string;
}

export interface Paramsrevisiondelete extends Params {
    type: "archive" | "filearchive" | "logging" | "oldimage" | "revision" | string;
    target: string;
    ids: string;
    hide: "comment" | "content" | "user" | string;
    show: "comment" | "content" | "user" | string;
    suppress: "no" | "nochange" | "yes" | string;
    reason: string;
    tags: "possible vandalism" | "repeating characters" | string;
    token: string;
}

export interface Paramsrollback extends Params {
    title: string;
    pageid: number;
    tags: "possible vandalism" | "repeating characters" | string;
    user: string;
    summary: string;
    markbot: boolean;
    watchlist: "nochange" | "preferences" | "unwatch" | "watch" | string;
    watchlistexpiry: string;
    token: string;
}

export interface Paramsrsd extends Params {
}

export interface Paramssanitize_mapdata extends Params {
    title: string;
    text: string;
}

export interface Paramsscribunto_console extends Params {
    title: string;
    content: string;
    session: number;
    question: string;
    clear: boolean;
}

export interface Paramssearchtranslations extends Params {
    service: "codfw" | "eqiad" | string;
    query: string;
    sourcelanguage: string;
    language: string;
    group: string;
    filter: "" | "fuzzy" | "translated" | "untranslated" | string;
    match: string;
    case: string;
    offset: number;
    limit: string;
}

export interface Paramssetglobalaccountstatus extends Params {
    user: string;
    locked: "" | "lock" | "unlock" | string;
    hidden: "" | "lists" | "suppressed" | string;
    reason: string;
    statecheck: string;
    token: string;
}

export interface Paramssetnotificationtimestamp extends Params {
    entirewatchlist: boolean;
    timestamp: string;
    torevid: number;
    newerthanrevid: number;
    continue: string;
    titles: string;
    pageids: number;
    revids: number;
    generator: "allcategories" | "alldeletedrevisions" | "allfileusages" | "allimages" | "alllinks" | "allpages" | "allredirects" | "allrevisions" | "alltransclusions" | "backlinks" | "categories" | "categorymembers" | "deletedrevisions" | "duplicatefiles" | "embeddedin" | "exturlusage" | "fileusage" | "images" | "imageusage" | "iwbacklinks" | "langbacklinks" | "links" | "linkshere" | "messagecollection" | "mostviewed" | "pageswithprop" | "prefixsearch" | "protectedtitles" | "querypage" | "random" | "recentchanges" | "redirects" | "revisions" | "search" | "templates" | "transcludedin" | "watchlist" | "watchlistraw" | "wblistentityusage" | "readinglistentries" | string;
    redirects: boolean;
    converttitles: boolean;
    token: string;
}

export interface Paramssetpagelanguage extends Params {
    title: string;
    pageid: number;
    lang: "ab" | "abs" | "ace" | "ady" | "ady-cyrl" | "aeb" | "aeb-arab" | "aeb-latn" | "af" | "ak" | "aln" | "alt" | "am" | "ami" | "an" | "ang" | "anp" | "ar" | "arc" | "arn" | "arq" | "ary" | "arz" | "as" | "ase" | "ast" | "atj" | "av" | "avk" | "awa" | "ay" | "az" | "azb" | "ba" | "ban" | "ban-bali" | "bar" | "bbc" | "bbc-latn" | "bcc" | "bci" | "bcl" | "be" | "be-tarask" | "bg" | "bgn" | "bh" | "bho" | "bi" | "bjn" | "blk" | "bm" | "bn" | "bo" | "bpy" | "bqi" | "br" | "brh" | "bs" | "btm" | "bto" | "bug" | "bxr" | "ca" | "cbk-zam" | "cdo" | "ce" | "ceb" | "ch" | "chr" | "chy" | "ckb" | "co" | "cps" | "cr" | "crh" | "crh-cyrl" | "crh-latn" | "cs" | "csb" | "cu" | "cv" | "cy" | "da" | "dag" | "de" | "de-at" | "de-ch" | "de-formal" | "default" | "din" | "diq" | "dsb" | "dtp" | "dty" | "dv" | "dz" | "ee" | "egl" | "el" | "eml" | "en" | "en-ca" | "en-gb" | "eo" | "es" | "es-formal" | "et" | "eu" | "ext" | "fa" | "ff" | "fi" | "fit" | "fj" | "fo" | "fon" | "fr" | "frc" | "frp" | "frr" | "fur" | "fy" | "ga" | "gaa" | "gag" | "gan" | "gan-hans" | "gan-hant" | "gcr" | "gd" | "gl" | "gld" | "glk" | "gn" | "gom" | "gom-deva" | "gom-latn" | "gor" | "got" | "grc" | "gsw" | "gu" | "guc" | "gur" | "guw" | "gv" | "ha" | "hak" | "haw" | "he" | "hi" | "hif" | "hif-latn" | "hil" | "hr" | "hrx" | "hsb" | "hsn" | "ht" | "hu" | "hu-formal" | "hy" | "hyw" | "ia" | "id" | "ie" | "ig" | "ii" | "ik" | "ike-cans" | "ike-latn" | "ilo" | "inh" | "io" | "is" | "it" | "iu" | "ja" | "jam" | "jbo" | "jut" | "jv" | "ka" | "kaa" | "kab" | "kbd" | "kbd-cyrl" | "kbp" | "kcg" | "kea" | "kg" | "khw" | "ki" | "kiu" | "kjp" | "kk" | "kk-arab" | "kk-cn" | "kk-cyrl" | "kk-kz" | "kk-latn" | "kk-tr" | "kl" | "km" | "kn" | "ko" | "ko-kp" | "koi" | "krc" | "kri" | "krj" | "krl" | "ks" | "ks-arab" | "ks-deva" | "ksh" | "ksw" | "ku" | "ku-arab" | "ku-latn" | "kum" | "kv" | "kw" | "ky" | "la" | "lad" | "lb" | "lbe" | "lez" | "lfn" | "lg" | "li" | "lij" | "liv" | "lki" | "lld" | "lmo" | "ln" | "lo" | "loz" | "lrc" | "lt" | "ltg" | "lus" | "luz" | "lv" | "lzh" | "lzz" | "mad" | "mai" | "map-bms" | "mdf" | "mg" | "mhr" | "mi" | "min" | "mk" | "ml" | "mn" | "mni" | "mnw" | "mo" | "mos" | "mr" | "mrh" | "mrj" | "ms" | "ms-arab" | "mt" | "mwl" | "my" | "myv" | "mzn" | "na" | "nah" | "nan" | "nap" | "nb" | "nds" | "nds-nl" | "ne" | "new" | "nia" | "niu" | "nl" | "nl-informal" | "nmz" | "nn" | "nod" | "nov" | "nqo" | "nrm" | "nso" | "nv" | "ny" | "nyn" | "nys" | "oc" | "ojb" | "olo" | "om" | "or" | "os" | "pa" | "pag" | "pam" | "pap" | "pcd" | "pcm" | "pdc" | "pdt" | "pfl" | "pi" | "pih" | "pl" | "pms" | "pnb" | "pnt" | "prg" | "ps" | "pt" | "pt-br" | "pwn" | "qu" | "qug" | "rgn" | "rif" | "rm" | "rmc" | "rmy" | "rn" | "ro" | "roa-tara" | "rsk" | "ru" | "rue" | "rup" | "ruq" | "ruq-cyrl" | "ruq-latn" | "rw" | "ryu" | "sa" | "sah" | "sat" | "sc" | "scn" | "sco" | "sd" | "sdc" | "sdh" | "se" | "se-fi" | "se-no" | "se-se" | "sei" | "ses" | "sg" | "sgs" | "sh" | "shi" | "shn" | "shy" | "shy-latn" | "si" | "sjd" | "sje" | "sk" | "skr" | "skr-arab" | "sl" | "sli" | "sm" | "sma" | "smn" | "sms" | "sn" | "so" | "sq" | "sr" | "sr-ec" | "sr-el" | "srn" | "ss" | "st" | "stq" | "sty" | "su" | "sv" | "sw" | "szl" | "szy" | "ta" | "tay" | "tcy" | "te" | "tet" | "tg" | "tg-cyrl" | "tg-latn" | "th" | "ti" | "tk" | "tl" | "tly" | "tn" | "to" | "tpi" | "tr" | "tru" | "trv" | "ts" | "tt" | "tt-cyrl" | "tt-latn" | "tw" | "ty" | "tyv" | "tzm" | "udm" | "ug" | "ug-arab" | "ug-latn" | "uk" | "ur" | "uz" | "ve" | "vec" | "vep" | "vi" | "vls" | "vmf" | "vmw" | "vo" | "vot" | "vro" | "wa" | "war" | "wls" | "wo" | "wuu" | "xal" | "xh" | "xmf" | "xsy" | "yi" | "yo" | "yrl" | "yue" | "za" | "zea" | "zgh" | "zh" | "zh-cn" | "zh-hans" | "zh-hant" | "zh-hk" | "zh-mo" | "zh-my" | "zh-sg" | "zh-tw" | "zu" | string;
    reason: string;
    tags: "possible vandalism" | "repeating characters" | string;
    token: string;
}

export interface Paramsshortenurl extends Params {
    url: string;
}

export interface Paramssitematrix extends Params {
    type: "language" | "special" | string;
    state: "all" | "closed" | "fishbowl" | "nonglobal" | "private" | string;
    langprop: "code" | "dir" | "localname" | "name" | "site" | string;
    siteprop: "code" | "dbname" | "lang" | "sitename" | "url" | string;
    limit: string;
    continue: string;
}

export interface Paramsspamblacklist extends Params {
    url: string;
}

export interface Paramsstashedit extends Params {
    title: string;
    section: string;
    sectiontitle: string;
    text: string;
    stashedtexthash: string;
    summary: string;
    contentmodel: "GadgetDefinition" | "Json.JsonConfig" | "JsonSchema" | "Map.JsonConfig" | "MassMessageListContent" | "NewsletterContent" | "Scribunto" | "SecurePoll" | "Tabular.JsonConfig" | "css" | "flow-board" | "javascript" | "json" | "sanitized-css" | "text" | "translate-messagebundle" | "unknown" | "wikitext" | string;
    contentformat: "application/json" | "application/octet-stream" | "application/unknown" | "application/x-binary" | "text/css" | "text/javascript" | "text/plain" | "text/unknown" | "text/x-wiki" | "unknown/unknown" | string;
    baserevid: number;
    token: string;
}

export interface Paramsstreamconfigs extends Params {
    streams: string;
    constraints: string;
    all_settings: boolean;
}

export interface Paramsstrikevote extends Params {
    option: "strike" | "unstrike" | string;
    reason: string;
    voteid: number;
    token: string;
}

export interface Paramstag extends Params {
    rcid: number;
    revid: number;
    logid: number;
    add: "possible vandalism" | "repeating characters" | string;
    remove: string;
    reason: string;
    tags: "possible vandalism" | "repeating characters" | string;
    token: string;
}

export interface Paramstemplatedata extends Params {
    includeMissingTitles: boolean;
    doNotIgnoreMissingTitles: boolean;
    lang: string;
    titles: string;
    pageids: number;
    revids: number;
    generator: "allcategories" | "alldeletedrevisions" | "allfileusages" | "allimages" | "alllinks" | "allpages" | "allredirects" | "allrevisions" | "alltransclusions" | "backlinks" | "categories" | "categorymembers" | "deletedrevisions" | "duplicatefiles" | "embeddedin" | "exturlusage" | "fileusage" | "images" | "imageusage" | "iwbacklinks" | "langbacklinks" | "links" | "linkshere" | "messagecollection" | "mostviewed" | "pageswithprop" | "prefixsearch" | "protectedtitles" | "querypage" | "random" | "recentchanges" | "redirects" | "revisions" | "search" | "templates" | "transcludedin" | "watchlist" | "watchlistraw" | "wblistentityusage" | "readinglistentries" | string;
    redirects: boolean;
    converttitles: boolean;
}

export interface Paramsthank extends Params {
    rev: number;
    log: number;
    token: string;
    source: string;
}

export interface Paramsthreadaction extends Params {
    thread: string;
    talkpage: string;
    threadaction: "addreaction" | "deletereaction" | "edit" | "inlineeditform" | "markread" | "markunread" | "merge" | "newthread" | "reply" | "setsortkey" | "setsubject" | "split" | string;
    token: string;
    subject: string;
    reason: string;
    newparent: string;
    text: string;
    render: string;
    bump: string;
    sortkey: string;
    signature: string;
    type: string;
    value: string;
    method: string;
    operand: string;
    captchaword: string;
    captchaid: string;
}

export interface Paramstimedtext extends Params {
    title: string;
    pageid: number;
    trackformat: "srt" | "vtt" | string;
    lang: string;
}

export interface Paramstitleblacklist extends Params {
    title: string;
    action: "create" | "createpage" | "createtalk" | "edit" | "move" | "new-account" | "upload" | string;
    nooverride: boolean;
}

export interface Paramstranscodereset extends Params {
    title: string;
    transcodekey: string;
    token: string;
}

export interface Paramstranslationaids extends Params {
    title: string;
    group: string;
    prop: "definition" | "definitiondiff" | "documentation" | "editsummaries" | "gettext" | "groups" | "inotherlanguages" | "insertables" | "mt" | "support" | "translation" | "ttmserver" | string;
}

export interface Paramstranslationcheck extends Params {
    title: string;
    translation: string;
}

export interface Paramstranslationentitysearch extends Params {
    entitytype: "groups" | "messages" | string;
    query: string;
    limit: string;
}

export interface Paramstranslationreview extends Params {
    revision: number;
    token: string;
}

export interface Paramstranslationstats extends Params {
    count: "edits" | "reviewers" | "reviews" | "users" | string;
    days: number;
    group: string;
    language: string;
    scale: "days" | "hours" | "months" | "weeks" | "years" | string;
    start: string;
}

export interface Paramsttmserver extends Params {
    service:  | string;
    sourcelanguage: string;
    targetlanguage: string;
    text: string;
}

export interface Paramsulslocalization extends Params {
    language: string;
}

export interface Paramsulssetlang extends Params {
    languagecode: string;
    token: string;
}

export interface Paramsunblock extends Params {
    id: number;
    user: string;
    userid: number;
    reason: string;
    tags: "possible vandalism" | "repeating characters" | string;
    token: string;
}

export interface Paramsundelete extends Params {
    title: string;
    reason: string;
    tags: "possible vandalism" | "repeating characters" | string;
    timestamps: string;
    fileids: number;
    undeletetalk: boolean;
    watchlist: "nochange" | "preferences" | "unwatch" | "watch" | string;
    watchlistexpiry: string;
    token: string;
}

export interface Paramsunlinkaccount extends Params {
    request: string;
    token: string;
}

export interface Paramsupload extends Params {
    filename: string;
    comment: string;
    tags: "possible vandalism" | "repeating characters" | string;
    text: string;
    watch: boolean;
    watchlist: "nochange" | "preferences" | "watch" | string;
    watchlistexpiry: string;
    ignorewarnings: boolean;
    file: string;
    url: string;
    filekey: string;
    sessionkey: string;
    stash: boolean;
    filesize: number;
    offset: number;
    chunk: string;
    async: boolean;
    checkstatus: boolean;
    token: string;
}

export interface Paramsuserrights extends Params {
    user: string;
    userid: number;
    add: "accountcreator" | "autopatrolled" | "bot" | "bureaucrat" | "checkuser" | "confirmed" | "flow-bot" | "import" | "interface-admin" | "ipblock-exempt" | "no-ipinfo" | "push-subscription-manager" | "steward" | "suppress" | "sysop" | "translationadmin" | "transwiki" | "uploader" | string;
    expiry: string;
    remove: "accountcreator" | "autopatrolled" | "bot" | "bureaucrat" | "checkuser" | "confirmed" | "flow-bot" | "import" | "interface-admin" | "ipblock-exempt" | "no-ipinfo" | "push-subscription-manager" | "steward" | "suppress" | "sysop" | "translationadmin" | "transwiki" | "uploader" | string;
    reason: string;
    token: string;
    tags: "possible vandalism" | "repeating characters" | string;
}

export interface Paramsvalidatepassword extends Params {
    password: string;
    user: string;
    email: string;
    realname: string;
}

export interface Paramsvisualeditor extends Params {
    page: string;
    badetag: string;
    format: "json" | "jsonfm" | string;
    paction: "metadata" | "parse" | "parsedoc" | "parsefragment" | "templatesused" | "wikitext" | string;
    wikitext: string;
    section: string;
    stash: boolean;
    oldid: string;
    editintro: string;
    pst: boolean;
    preload: string;
    preloadparams: string;
}

export interface Paramsvisualeditoredit extends Params {
    paction: "diff" | "save" | "serialize" | "serializeforcache" | string;
    page: string;
    token: string;
    wikitext: string;
    section: string;
    sectiontitle: string;
    basetimestamp: string;
    starttimestamp: string;
    oldid: string;
    minor: string;
    watchlist: string;
    html: string;
    etag: string;
    summary: string;
    captchaid: string;
    captchaword: string;
    cachekey: string;
    useskin: "apioutput" | "cologneblue" | "fallback" | "minerva" | "modern" | "monobook" | "timeless" | "vector" | "vector-2022" | string;
    tags: string;
    plugins: string;
    mobileformat: boolean;
}

export interface Paramswatch extends Params {
    title: string;
    expiry: string;
    unwatch: boolean;
    continue: string;
    titles: string;
    pageids: number;
    revids: number;
    generator: "allcategories" | "alldeletedrevisions" | "allfileusages" | "allimages" | "alllinks" | "allpages" | "allredirects" | "allrevisions" | "alltransclusions" | "backlinks" | "categories" | "categorymembers" | "deletedrevisions" | "duplicatefiles" | "embeddedin" | "exturlusage" | "fileusage" | "images" | "imageusage" | "iwbacklinks" | "langbacklinks" | "links" | "linkshere" | "messagecollection" | "mostviewed" | "pageswithprop" | "prefixsearch" | "protectedtitles" | "querypage" | "random" | "recentchanges" | "redirects" | "revisions" | "search" | "templates" | "transcludedin" | "watchlist" | "watchlistraw" | "wblistentityusage" | "readinglistentries" | string;
    redirects: boolean;
    converttitles: boolean;
    token: string;
}

export interface Paramswebapp_manifest extends Params {
}

export interface Paramswebauthn extends Params {
    func: string;
    data: string;
}

export interface Paramswikilove extends Params {
    title: string;
    text: string;
    message: string;
    token: string;
    subject: string;
    type: string;
    email: string;
    tags: "possible vandalism" | "repeating characters" | string;
}

export interface Paramsxml extends Params {
    xslt: string;
    includexmlnamespace: boolean;
}

export interface Paramsxmlfm extends Params {
    wrappedhtml: boolean;
    xslt: string;
    includexmlnamespace: boolean;
}

export type Request<T extends Params = Params> = [boolean, T];

export function abusefiltercheckmatch(params: Paramsabusefiltercheckmatch): Request<Paramsabusefiltercheckmatch> {
    return [false, { ...params, action: "abusefiltercheckmatch" }];
}

export function abusefilterchecksyntax(params: Paramsabusefilterchecksyntax): Request<Paramsabusefilterchecksyntax> {
    return [false, { ...params, action: "abusefilterchecksyntax" }];
}

export function abusefilterevalexpression(params: Paramsabusefilterevalexpression): Request<Paramsabusefilterevalexpression> {
    return [false, { ...params, action: "abusefilterevalexpression" }];
}

export function abusefilterunblockautopromote(params: Paramsabusefilterunblockautopromote): Request<Paramsabusefilterunblockautopromote> {
    return [true, { ...params, action: "abusefilterunblockautopromote" }];
}

export function abuselogprivatedetails(params: Paramsabuselogprivatedetails): Request<Paramsabuselogprivatedetails> {
    return [true, { ...params, action: "abuselogprivatedetails" }];
}

export function aggregategroups(params: Paramsaggregategroups): Request<Paramsaggregategroups> {
    return [true, { ...params, action: "aggregategroups" }];
}

export function antispoof(params: Paramsantispoof): Request<Paramsantispoof> {
    return [false, { ...params, action: "antispoof" }];
}

export function block(params: Paramsblock): Request<Paramsblock> {
    return [true, { ...params, action: "block" }];
}

export function bouncehandler(params: Paramsbouncehandler): Request<Paramsbouncehandler> {
    return [true, { ...params, action: "bouncehandler" }];
}

export function categorytree(params: Paramscategorytree): Request<Paramscategorytree> {
    return [false, { ...params, action: "categorytree" }];
}

export function centralauthtoken(params: Paramscentralauthtoken): Request<Paramscentralauthtoken> {
    return [false, { ...params, action: "centralauthtoken" }];
}

export function centralnoticecdncacheupdatebanner(params: Paramscentralnoticecdncacheupdatebanner): Request<Paramscentralnoticecdncacheupdatebanner> {
    return [true, { ...params, action: "centralnoticecdncacheupdatebanner" }];
}

export function centralnoticechoicedata(params: Paramscentralnoticechoicedata): Request<Paramscentralnoticechoicedata> {
    return [false, { ...params, action: "centralnoticechoicedata" }];
}

export function centralnoticequerycampaign(params: Paramscentralnoticequerycampaign): Request<Paramscentralnoticequerycampaign> {
    return [false, { ...params, action: "centralnoticequerycampaign" }];
}

export function changeauthenticationdata(params: Paramschangeauthenticationdata): Request<Paramschangeauthenticationdata> {
    return [true, { ...params, action: "changeauthenticationdata" }];
}

export function changecontentmodel(params: Paramschangecontentmodel): Request<Paramschangecontentmodel> {
    return [true, { ...params, action: "changecontentmodel" }];
}

export function checktoken(params: Paramschecktoken): Request<Paramschecktoken> {
    return [false, { ...params, action: "checktoken" }];
}

export function cirrus_config_dump(params: Paramscirrus_config_dump): Request<Paramscirrus_config_dump> {
    return [false, { ...params, action: "cirrus-config-dump" }];
}

export function cirrus_mapping_dump(params: Paramscirrus_mapping_dump): Request<Paramscirrus_mapping_dump> {
    return [false, { ...params, action: "cirrus-mapping-dump" }];
}

export function cirrus_profiles_dump(params: Paramscirrus_profiles_dump): Request<Paramscirrus_profiles_dump> {
    return [false, { ...params, action: "cirrus-profiles-dump" }];
}

export function cirrus_settings_dump(params: Paramscirrus_settings_dump): Request<Paramscirrus_settings_dump> {
    return [false, { ...params, action: "cirrus-settings-dump" }];
}

export function clearhasmsg(params: Paramsclearhasmsg): Request<Paramsclearhasmsg> {
    return [true, { ...params, action: "clearhasmsg" }];
}

export function clientlogin(params: Paramsclientlogin): Request<Paramsclientlogin> {
    return [true, { ...params, action: "clientlogin" }];
}

export function collection(params: Paramscollection): Request<Paramscollection> {
    return [false, { ...params, action: "collection" }];
}

export function compare(params: Paramscompare): Request<Paramscompare> {
    return [false, { ...params, action: "compare" }];
}

export function createaccount(params: Paramscreateaccount): Request<Paramscreateaccount> {
    return [true, { ...params, action: "createaccount" }];
}

export function createlocalaccount(params: Paramscreatelocalaccount): Request<Paramscreatelocalaccount> {
    return [true, { ...params, action: "createlocalaccount" }];
}

export function cspreport(params: Paramscspreport): Request<Paramscspreport> {
    return [true, { ...params, action: "cspreport" }];
}

export function delete_(params: Paramsdelete_): Request<Paramsdelete_> {
    return [true, { ...params, action: "delete" }];
}

export function deleteglobalaccount(params: Paramsdeleteglobalaccount): Request<Paramsdeleteglobalaccount> {
    return [true, { ...params, action: "deleteglobalaccount" }];
}

export function discussiontoolscompare(params: Paramsdiscussiontoolscompare): Request<Paramsdiscussiontoolscompare> {
    return [false, { ...params, action: "discussiontoolscompare" }];
}

export function discussiontoolsedit(params: Paramsdiscussiontoolsedit): Request<Paramsdiscussiontoolsedit> {
    return [true, { ...params, action: "discussiontoolsedit" }];
}

export function discussiontoolsgetsubscriptions(params: Paramsdiscussiontoolsgetsubscriptions): Request<Paramsdiscussiontoolsgetsubscriptions> {
    return [false, { ...params, action: "discussiontoolsgetsubscriptions" }];
}

export function discussiontoolspageinfo(params: Paramsdiscussiontoolspageinfo): Request<Paramsdiscussiontoolspageinfo> {
    return [false, { ...params, action: "discussiontoolspageinfo" }];
}

export function discussiontoolspreview(params: Paramsdiscussiontoolspreview): Request<Paramsdiscussiontoolspreview> {
    return [false, { ...params, action: "discussiontoolspreview" }];
}

export function discussiontoolssubscribe(params: Paramsdiscussiontoolssubscribe): Request<Paramsdiscussiontoolssubscribe> {
    return [true, { ...params, action: "discussiontoolssubscribe" }];
}

export function echomarkread(params: Paramsechomarkread): Request<Paramsechomarkread> {
    return [true, { ...params, action: "echomarkread" }];
}

export function echomarkseen(params: Paramsechomarkseen): Request<Paramsechomarkseen> {
    return [false, { ...params, action: "echomarkseen" }];
}

export function echomute(params: Paramsechomute): Request<Paramsechomute> {
    return [true, { ...params, action: "echomute" }];
}

export function edit(params: Paramsedit): Request<Paramsedit> {
    return [true, { ...params, action: "edit" }];
}

export function editmassmessagelist(params: Paramseditmassmessagelist): Request<Paramseditmassmessagelist> {
    return [true, { ...params, action: "editmassmessagelist" }];
}

export function emailuser(params: Paramsemailuser): Request<Paramsemailuser> {
    return [true, { ...params, action: "emailuser" }];
}

export function expandtemplates(params: Paramsexpandtemplates): Request<Paramsexpandtemplates> {
    return [false, { ...params, action: "expandtemplates" }];
}

export function fancycaptchareload(params: Paramsfancycaptchareload): Request<Paramsfancycaptchareload> {
    return [false, { ...params, action: "fancycaptchareload" }];
}

export function featuredfeed(params: Paramsfeaturedfeed): Request<Paramsfeaturedfeed> {
    return [false, { ...params, action: "featuredfeed" }];
}

export function feedcontributions(params: Paramsfeedcontributions): Request<Paramsfeedcontributions> {
    return [false, { ...params, action: "feedcontributions" }];
}

export function feedrecentchanges(params: Paramsfeedrecentchanges): Request<Paramsfeedrecentchanges> {
    return [false, { ...params, action: "feedrecentchanges" }];
}

export function feedthreads(params: Paramsfeedthreads): Request<Paramsfeedthreads> {
    return [false, { ...params, action: "feedthreads" }];
}

export function feedwatchlist(params: Paramsfeedwatchlist): Request<Paramsfeedwatchlist> {
    return [false, { ...params, action: "feedwatchlist" }];
}

export function filerevert(params: Paramsfilerevert): Request<Paramsfilerevert> {
    return [true, { ...params, action: "filerevert" }];
}

export function flow(params: Paramsflow): Request<Paramsflow> {
    return [false, { ...params, action: "flow" }];
}

export function flow_parsoid_utils(params: Paramsflow_parsoid_utils): Request<Paramsflow_parsoid_utils> {
    return [false, { ...params, action: "flow-parsoid-utils" }];
}

export function flowthank(params: Paramsflowthank): Request<Paramsflowthank> {
    return [true, { ...params, action: "flowthank" }];
}

export function globalblock(params: Paramsglobalblock): Request<Paramsglobalblock> {
    return [true, { ...params, action: "globalblock" }];
}

export function globalpreferenceoverrides(params: Paramsglobalpreferenceoverrides): Request<Paramsglobalpreferenceoverrides> {
    return [true, { ...params, action: "globalpreferenceoverrides" }];
}

export function globalpreferences(params: Paramsglobalpreferences): Request<Paramsglobalpreferences> {
    return [true, { ...params, action: "globalpreferences" }];
}

export function globaluserrights(params: Paramsglobaluserrights): Request<Paramsglobaluserrights> {
    return [true, { ...params, action: "globaluserrights" }];
}

export function graph(params: Paramsgraph): Request<Paramsgraph> {
    return [false, { ...params, action: "graph" }];
}

export function groupreview(params: Paramsgroupreview): Request<Paramsgroupreview> {
    return [true, { ...params, action: "groupreview" }];
}

export function help(params: Paramshelp): Request<Paramshelp> {
    return [false, { ...params, action: "help" }];
}

export function imagerotate(params: Paramsimagerotate): Request<Paramsimagerotate> {
    return [false, { ...params, action: "imagerotate" }];
}

export function import_(params: Paramsimport_): Request<Paramsimport_> {
    return [true, { ...params, action: "import" }];
}

export function json(params: Paramsjson): Request<Paramsjson> {
    return [false, { ...params, action: "json" }];
}

export function jsonconfig(params: Paramsjsonconfig): Request<Paramsjsonconfig> {
    return [false, { ...params, action: "jsonconfig" }];
}

export function jsondata(params: Paramsjsondata): Request<Paramsjsondata> {
    return [false, { ...params, action: "jsondata" }];
}

export function jsonfm(params: Paramsjsonfm): Request<Paramsjsonfm> {
    return [false, { ...params, action: "jsonfm" }];
}

export function languagesearch(params: Paramslanguagesearch): Request<Paramslanguagesearch> {
    return [false, { ...params, action: "languagesearch" }];
}

export function linkaccount(params: Paramslinkaccount): Request<Paramslinkaccount> {
    return [true, { ...params, action: "linkaccount" }];
}

export function login(params: Paramslogin): Request<Paramslogin> {
    return [true, { ...params, action: "login" }];
}

export function logout(params: Paramslogout): Request<Paramslogout> {
    return [true, { ...params, action: "logout" }];
}

export function managegroupsynchronizationcache(params: Paramsmanagegroupsynchronizationcache): Request<Paramsmanagegroupsynchronizationcache> {
    return [true, { ...params, action: "managegroupsynchronizationcache" }];
}

export function managemessagegroups(params: Paramsmanagemessagegroups): Request<Paramsmanagemessagegroups> {
    return [true, { ...params, action: "managemessagegroups" }];
}

export function managetags(params: Paramsmanagetags): Request<Paramsmanagetags> {
    return [true, { ...params, action: "managetags" }];
}

export function massmessage(params: Paramsmassmessage): Request<Paramsmassmessage> {
    return [true, { ...params, action: "massmessage" }];
}

export function mergehistory(params: Paramsmergehistory): Request<Paramsmergehistory> {
    return [true, { ...params, action: "mergehistory" }];
}

export function mobileview(params: Paramsmobileview): Request<Paramsmobileview> {
    return [false, { ...params, action: "mobileview" }];
}

export function move(params: Paramsmove): Request<Paramsmove> {
    return [true, { ...params, action: "move" }];
}

export function newslettersubscribe(params: Paramsnewslettersubscribe): Request<Paramsnewslettersubscribe> {
    return [true, { ...params, action: "newslettersubscribe" }];
}

export function none(params: Paramsnone): Request<Paramsnone> {
    return [false, { ...params, action: "none" }];
}

export function oathvalidate(params: Paramsoathvalidate): Request<Paramsoathvalidate> {
    return [true, { ...params, action: "oathvalidate" }];
}

export function opensearch(params: Paramsopensearch): Request<Paramsopensearch> {
    return [false, { ...params, action: "opensearch" }];
}

export function options(params: Paramsoptions): Request<Paramsoptions> {
    return [true, { ...params, action: "options" }];
}

export function paraminfo(params: Paramsparaminfo): Request<Paramsparaminfo> {
    return [false, { ...params, action: "paraminfo" }];
}

export function parse(params: Paramsparse): Request<Paramsparse> {
    return [false, { ...params, action: "parse" }];
}

export function patrol(params: Paramspatrol): Request<Paramspatrol> {
    return [true, { ...params, action: "patrol" }];
}

export function php(params: Paramsphp): Request<Paramsphp> {
    return [false, { ...params, action: "php" }];
}

export function phpfm(params: Paramsphpfm): Request<Paramsphpfm> {
    return [false, { ...params, action: "phpfm" }];
}

export function protect(params: Paramsprotect): Request<Paramsprotect> {
    return [true, { ...params, action: "protect" }];
}

export function purge(params: Paramspurge): Request<Paramspurge> {
    return [true, { ...params, action: "purge" }];
}

export function query(params: Paramsquery): Request<Paramsquery> {
    return [false, { ...params, action: "query" }];
}

export function rawfm(params: Paramsrawfm): Request<Paramsrawfm> {
    return [false, { ...params, action: "rawfm" }];
}

export function readinglists(params: Paramsreadinglists): Request<Paramsreadinglists> {
    return [true, { ...params, action: "readinglists" }];
}

export function record_lint(params: Paramsrecord_lint): Request<Paramsrecord_lint> {
    return [false, { ...params, action: "record-lint" }];
}

export function removeauthenticationdata(params: Paramsremoveauthenticationdata): Request<Paramsremoveauthenticationdata> {
    return [true, { ...params, action: "removeauthenticationdata" }];
}

export function resetpassword(params: Paramsresetpassword): Request<Paramsresetpassword> {
    return [true, { ...params, action: "resetpassword" }];
}

export function revisiondelete(params: Paramsrevisiondelete): Request<Paramsrevisiondelete> {
    return [true, { ...params, action: "revisiondelete" }];
}

export function rollback(params: Paramsrollback): Request<Paramsrollback> {
    return [true, { ...params, action: "rollback" }];
}

export function rsd(params: Paramsrsd): Request<Paramsrsd> {
    return [false, { ...params, action: "rsd" }];
}

export function sanitize_mapdata(params: Paramssanitize_mapdata): Request<Paramssanitize_mapdata> {
    return [true, { ...params, action: "sanitize-mapdata" }];
}

export function scribunto_console(params: Paramsscribunto_console): Request<Paramsscribunto_console> {
    return [false, { ...params, action: "scribunto-console" }];
}

export function searchtranslations(params: Paramssearchtranslations): Request<Paramssearchtranslations> {
    return [false, { ...params, action: "searchtranslations" }];
}

export function setglobalaccountstatus(params: Paramssetglobalaccountstatus): Request<Paramssetglobalaccountstatus> {
    return [true, { ...params, action: "setglobalaccountstatus" }];
}

export function setnotificationtimestamp(params: Paramssetnotificationtimestamp): Request<Paramssetnotificationtimestamp> {
    return [true, { ...params, action: "setnotificationtimestamp" }];
}

export function setpagelanguage(params: Paramssetpagelanguage): Request<Paramssetpagelanguage> {
    return [true, { ...params, action: "setpagelanguage" }];
}

export function shortenurl(params: Paramsshortenurl): Request<Paramsshortenurl> {
    return [true, { ...params, action: "shortenurl" }];
}

export function sitematrix(params: Paramssitematrix): Request<Paramssitematrix> {
    return [false, { ...params, action: "sitematrix" }];
}

export function spamblacklist(params: Paramsspamblacklist): Request<Paramsspamblacklist> {
    return [false, { ...params, action: "spamblacklist" }];
}

export function stashedit(params: Paramsstashedit): Request<Paramsstashedit> {
    return [true, { ...params, action: "stashedit" }];
}

export function streamconfigs(params: Paramsstreamconfigs): Request<Paramsstreamconfigs> {
    return [false, { ...params, action: "streamconfigs" }];
}

export function strikevote(params: Paramsstrikevote): Request<Paramsstrikevote> {
    return [true, { ...params, action: "strikevote" }];
}

export function tag(params: Paramstag): Request<Paramstag> {
    return [true, { ...params, action: "tag" }];
}

export function templatedata(params: Paramstemplatedata): Request<Paramstemplatedata> {
    return [false, { ...params, action: "templatedata" }];
}

export function thank(params: Paramsthank): Request<Paramsthank> {
    return [true, { ...params, action: "thank" }];
}

export function threadaction(params: Paramsthreadaction): Request<Paramsthreadaction> {
    return [true, { ...params, action: "threadaction" }];
}

export function timedtext(params: Paramstimedtext): Request<Paramstimedtext> {
    return [false, { ...params, action: "timedtext" }];
}

export function titleblacklist(params: Paramstitleblacklist): Request<Paramstitleblacklist> {
    return [false, { ...params, action: "titleblacklist" }];
}

export function transcodereset(params: Paramstranscodereset): Request<Paramstranscodereset> {
    return [true, { ...params, action: "transcodereset" }];
}

export function translationaids(params: Paramstranslationaids): Request<Paramstranslationaids> {
    return [false, { ...params, action: "translationaids" }];
}

export function translationcheck(params: Paramstranslationcheck): Request<Paramstranslationcheck> {
    return [false, { ...params, action: "translationcheck" }];
}

export function translationentitysearch(params: Paramstranslationentitysearch): Request<Paramstranslationentitysearch> {
    return [false, { ...params, action: "translationentitysearch" }];
}

export function translationreview(params: Paramstranslationreview): Request<Paramstranslationreview> {
    return [true, { ...params, action: "translationreview" }];
}

export function translationstats(params: Paramstranslationstats): Request<Paramstranslationstats> {
    return [false, { ...params, action: "translationstats" }];
}

export function ttmserver(params: Paramsttmserver): Request<Paramsttmserver> {
    return [false, { ...params, action: "ttmserver" }];
}

export function ulslocalization(params: Paramsulslocalization): Request<Paramsulslocalization> {
    return [false, { ...params, action: "ulslocalization" }];
}

export function ulssetlang(params: Paramsulssetlang): Request<Paramsulssetlang> {
    return [true, { ...params, action: "ulssetlang" }];
}

export function unblock(params: Paramsunblock): Request<Paramsunblock> {
    return [true, { ...params, action: "unblock" }];
}

export function undelete(params: Paramsundelete): Request<Paramsundelete> {
    return [true, { ...params, action: "undelete" }];
}

export function unlinkaccount(params: Paramsunlinkaccount): Request<Paramsunlinkaccount> {
    return [true, { ...params, action: "unlinkaccount" }];
}

export function upload(params: Paramsupload): Request<Paramsupload> {
    return [true, { ...params, action: "upload" }];
}

export function userrights(params: Paramsuserrights): Request<Paramsuserrights> {
    return [true, { ...params, action: "userrights" }];
}

export function validatepassword(params: Paramsvalidatepassword): Request<Paramsvalidatepassword> {
    return [true, { ...params, action: "validatepassword" }];
}

export function visualeditor(params: Paramsvisualeditor): Request<Paramsvisualeditor> {
    return [false, { ...params, action: "visualeditor" }];
}

export function visualeditoredit(params: Paramsvisualeditoredit): Request<Paramsvisualeditoredit> {
    return [true, { ...params, action: "visualeditoredit" }];
}

export function watch(params: Paramswatch): Request<Paramswatch> {
    return [true, { ...params, action: "watch" }];
}

export function webapp_manifest(params: Paramswebapp_manifest): Request<Paramswebapp_manifest> {
    return [false, { ...params, action: "webapp-manifest" }];
}

export function webauthn(params: Paramswebauthn): Request<Paramswebauthn> {
    return [false, { ...params, action: "webauthn" }];
}

export function wikilove(params: Paramswikilove): Request<Paramswikilove> {
    return [true, { ...params, action: "wikilove" }];
}

export function xml(params: Paramsxml): Request<Paramsxml> {
    return [false, { ...params, action: "xml" }];
}

export function xmlfm(params: Paramsxmlfm): Request<Paramsxmlfm> {
    return [false, { ...params, action: "xmlfm" }];
}
