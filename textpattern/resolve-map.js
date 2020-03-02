'use strict';

var resolveMap = {
    'TxpCategory': {
        'name': 'TxpCategory',
        'table': 'txp_category',
        'primaryKey': 'id',

        'aliases': {
            'type': 'txpCategoryType'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Textpattern': {
        'name': 'Textpattern',
        'table': 'textpattern',
        'primaryKey': 'ID',

        'aliases': {
            'ID': 'id',
            'Posted': 'posted',
            'Expires': 'expires',
            'AuthorID': 'authorId',
            'LastMod': 'lastMod',
            'LastModID': 'lastModId',
            'Title': 'title',
            'Title_html': 'titleHtml',
            'Body': 'body',
            'Body_html': 'bodyHtml',
            'Excerpt': 'excerpt',
            'Excerpt_html': 'excerptHtml',
            'Image': 'image',
            'Category1': 'category1',
            'Category2': 'category2',
            'Annotate': 'annotate',
            'AnnotateInvite': 'annotateInvite',
            'comments_count': 'commentsCount',
            'Status': 'status',
            'textile_body': 'textileBody',
            'textile_excerpt': 'textileExcerpt',
            'Section': 'section',
            'override_form': 'overrideForm',
            'Keywords': 'keywords',
            'url_title': 'urlTitle',
            'custom_1': 'custom1',
            'custom_2': 'custom2',
            'custom_3': 'custom3',
            'custom_4': 'custom4',
            'custom_5': 'custom5',
            'custom_6': 'custom6',
            'custom_7': 'custom7',
            'custom_8': 'custom8',
            'custom_9': 'custom9',
            'custom_10': 'custom10',
            'feed_time': 'feedTime'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'TxpCss': {
        'name': 'TxpCss',
        'table': 'txp_css',
        'primaryKey': null,
        'aliases': {},
        'referenceMap': {},
        'listReferences': {}
    },

    'TxpDiscuss': {
        'name': 'TxpDiscuss',
        'table': 'txp_discuss',
        'primaryKey': 'discussid',

        'aliases': {
            'discussid': 'id'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'TxpDiscussNonce': {
        'name': 'TxpDiscussNonce',
        'table': 'txp_discuss_nonce',
        'primaryKey': 'nonce',

        'aliases': {
            'issue_time': 'issueTime',
            'nonce': 'id'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'TxpFile': {
        'name': 'TxpFile',
        'table': 'txp_file',
        'primaryKey': 'id',
        'aliases': {},
        'referenceMap': {},
        'listReferences': {}
    },

    'TxpForm': {
        'name': 'TxpForm',
        'table': 'txp_form',
        'primaryKey': null,

        'aliases': {
            'type': 'txpFormType',
            'Form': 'form'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'TxpImage': {
        'name': 'TxpImage',
        'table': 'txp_image',
        'primaryKey': 'id',

        'aliases': {
            'thumb_w': 'thumbW',
            'thumb_h': 'thumbH'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'TxpLang': {
        'name': 'TxpLang',
        'table': 'txp_lang',
        'primaryKey': 'id',
        'aliases': {},
        'referenceMap': {},
        'listReferences': {}
    },

    'TxpLink': {
        'name': 'TxpLink',
        'table': 'txp_link',
        'primaryKey': 'id',
        'aliases': {},
        'referenceMap': {},
        'listReferences': {}
    },

    'TxpLog': {
        'name': 'TxpLog',
        'table': 'txp_log',
        'primaryKey': 'id',
        'aliases': {},
        'referenceMap': {},
        'listReferences': {}
    },

    'TxpPage': {
        'name': 'TxpPage',
        'table': 'txp_page',
        'primaryKey': null,

        'aliases': {
            'user_html': 'userHtml'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'TxpPlugin': {
        'name': 'TxpPlugin',
        'table': 'txp_plugin',
        'primaryKey': 'name',

        'aliases': {
            'name': 'id',
            'author_uri': 'authorUri',
            'code_restore': 'codeRestore',
            'code_md5': 'codeMd5',
            'type': 'txpPluginType',
            'load_order': 'loadOrder'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'TxpPref': {
        'name': 'TxpPref',
        'table': 'txp_prefs',
        'primaryKey': null,

        'aliases': {
            'type': 'txpPrefsType',
            'user_name': 'userName'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'TxpSection': {
        'name': 'TxpSection',
        'table': 'txp_section',
        'primaryKey': null,

        'aliases': {
            'permlink_mode': 'permlinkMode',
            'in_rss': 'inRss',
            'on_frontpage': 'onFrontpage',
            'dev_skin': 'devSkin',
            'dev_page': 'devPage',
            'dev_css': 'devCss'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'TxpSkin': {
        'name': 'TxpSkin',
        'table': 'txp_skin',
        'primaryKey': 'name',

        'aliases': {
            'name': 'id',
            'author_uri': 'authorUri'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'TxpToken': {
        'name': 'TxpToken',
        'table': 'txp_token',
        'primaryKey': 'id',

        'aliases': {
            'reference_id': 'referenceId',
            'type': 'txpTokenType'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'TxpUser': {
        'name': 'TxpUser',
        'table': 'txp_users',
        'primaryKey': 'user_id',

        'aliases': {
            'user_id': 'id',
            'RealName': 'realName',
            'last_access': 'lastAccess'
        },

        'referenceMap': {},
        'listReferences': {}
    }
};

exports.resolveMap = resolveMap;

exports.registerType = function registerType(type) {
    if (!resolveMap[type.name]) {
        throw new Error(
            'Cannot register type "' + type.name + '" - resolve map does not exist for that type'
        );
    }

    resolveMap[type.name].type = type;
};

exports.getType = function getType(type) {
    if (!resolveMap[type] || !resolveMap[type].type) {
        throw new Error('No type registered for type \'' + type + '\'');
    }

    return resolveMap[type].type;
};