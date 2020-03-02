# txp-graphql
An Open Source Textpattern plugin that enables a GraphQL API for Textpattern sites



## Schema

```type RootQueryType {
  txpCategory(id: Int!): TxpCategory
  textpattern(id: Int!): Textpattern
  txpCss: TxpCss
  txpDiscuss(id: Int!): TxpDiscuss
  txpDiscussNonce(id: String!): TxpDiscussNonce
  txpFile(id: Int!): TxpFile
  txpForm: TxpForm
  txpImage(id: Int!): TxpImage
  txpLang(id: Int!): TxpLang
  txpLink(id: Int!): TxpLink
  txpLog(id: Int!): TxpLog
  txpPage: TxpPage
  txpPlugin(id: String!): TxpPlugin
  txpPref: TxpPref
  txpSection: TxpSection
  txpSkin(id: String!): TxpSkin
  txpToken(id: Int!): TxpToken
  txpUser(id: Int!): TxpUser
}

type Textpattern {
  id: Int!
  posted: String!
  expires: String
  authorId: String!
  lastMod: String!
  lastModId: String!
  title: String!
  titleHtml: String!
  body: String!
  bodyHtml: String!
  excerpt: String!
  excerptHtml: String!
  image: String!
  category1: String!
  category2: String!
  annotate: Int!
  annotateInvite: String!
  commentsCount: Int!
  status: Int!
  textileBody: String!
  textileExcerpt: String!
  section: String!
  overrideForm: String!
  keywords: String!
  description: String!
  urlTitle: String!
  custom1: String!
  custom2: String!
  custom3: String!
  custom4: String!
  custom5: String!
  custom6: String!
  custom7: String!
  custom8: String!
  custom9: String!
  custom10: String!
  uid: String!
  feedTime: String!
}

type TxpCategory {
  id: Int!
  name: String!
  txpCategoryType: String!
  parent: String!
  lft: Int!
  rgt: Int!
  title: String!
  description: String!
}

type TxpCss {
  name: String!
  css: String!
  skin: String!
  lastmod: String
}

type TxpDiscuss {
  id: Int!
  parentid: Int!
  name: String!
  email: String!
  web: String!
  posted: String!
  message: String!
  visible: Int!
}

type TxpDiscussNonce {
  issueTime: String!
  id: String!
  used: Int!
  secret: String!
}

type TxpFile {
  id: Int!
  filename: String!
  title: String
  category: String!
  permissions: String!
  description: String!
  downloads: Int!
  status: Int!
  modified: String!
  created: String!
  size: String
  author: String!
}

type TxpForm {
  name: String!
  txpFormType: String!
  form: String!
  skin: String!
  lastmod: String
}

type TxpImage {
  id: Int!
  name: String!
  category: String!
  ext: String!
  w: Int!
  h: Int!
  alt: String!
  caption: String!
  date: String!
  author: String!
  thumbnail: Int!
  thumbW: Int!
  thumbH: Int!
}

type TxpLang {
  id: Int!
  lang: String!
  name: String!
  event: String!
  owner: String!
  data: String
  lastmod: Int!
}

type TxpLink {
  id: Int!
  date: String!
  category: String!
  url: String!
  linkname: String!
  linksort: String!
  description: String!
  author: String!
}

type TxpLog {
  id: Int!
  time: String!
  page: String!
  refer: String!
  status: Int!
  method: String!
}

type TxpPage {
  name: String!
  userHtml: String!
  skin: String!
  lastmod: String
}

type TxpPlugin {
  id: String!
  status: Int!
  author: String!
  authorUri: String!
  version: String!
  description: String!
  help: String!
  code: String!
  codeRestore: String!
  codeMd5: String!
  textpack: String!
  data: String!
  txpPluginType: Int!
  loadOrder: Int!
  flags: Int!
}

type TxpPref {
  name: String!
  val: String!
  txpPrefsType: Int!
  event: String!
  html: String!
  position: Int!
  userName: String!
}

type TxpSection {
  name: String!
  skin: String!
  page: String!
  css: String!
  permlinkMode: String!
  description: String!
  inRss: Int!
  onFrontpage: Int!
  searchable: Int!
  title: String!
  devSkin: String!
  devPage: String!
  devCss: String!
}

type TxpSkin {
  id: String!
  title: String!
  version: String
  description: String
  author: String
  authorUri: String
  lastmod: String
}

type TxpToken {
  id: Int!
  referenceId: Int!
  txpTokenType: String!
  selector: String!
  token: String!
  expires: String
}

type TxpUser {
  id: Int!
  name: String!
  pass: String!
  realName: String!
  email: String!
  privs: Int!
  lastAccess: String
  nonce: String!
}
```
