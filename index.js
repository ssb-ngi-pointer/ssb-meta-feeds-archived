// SPDX-FileCopyrightText: 2021 Anders Rune Jensen
//
// SPDX-License-Identifier: LGPL-3.0-only

const Keys = require('./keys')
const Messages = require('./messages')
const Query = require('./query')
const API = require('./api')
const Validate = require('./validate')
const FeedsLookup = require('./feeds-lookup')

exports.name = 'metafeeds'

exports.init = function (sbot, config) {
  const messages = Messages.init(sbot, config)
  const query = Query.init(sbot, config)
  const lookup = FeedsLookup.init(sbot, config)
  const api = API.init(sbot, config)

  return {
    // Public API
    ...api,

    // Internals
    keys: Keys,
    messages,
    lookup,
    query,
    validate: Validate,
  }
}
