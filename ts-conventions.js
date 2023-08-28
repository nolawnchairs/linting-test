
// TS Naming Conventions

const defaults = [
  // Type like
  {
    selector: 'typeLike',
    format: ['PascalCase'],
  }
]

const functions = [
  // exported functions can be decorators, so PascalCase is allowed along with camelCase
  {
    selector: 'function',
    modifiers: ['exported'],
    format: ['strictCamelCase', 'PascalCase'],
  }
]

const constants = [
  // exported const should be UPPER_CASE
  {
    selector: 'variable',
    modifiers: ['const', 'exported'],
    // types: ['string', 'number', 'boolean', 'array'],
    format: ['UPPER_CASE'],
  },
  // exported consts can be decorators, so PascalCase is allowed
  {
    selector: 'variable',
    modifiers: ['const', 'exported'],
    types: ['function'],
    format: ['strictCamelCase', 'PascalCase'],
  },
  // non-exported consts
  {
    selector: 'variable',
    modifiers: ['const'],
    format: ['strictCamelCase', 'UPPER_CASE'],
  },
]

const statics = [
  {
    selector: 'classProperty',
    modifiers: ['static', 'readonly'],
    format: ['UPPER_CASE'],
  }
]

const enums = [
  {
    selector: 'enumMember',
    format: ['UPPER_CASE'],
  }
]

const objects = [
  // allow kebab-case for objects when quoted
  {
    selector: 'objectLiteralProperty',
    modifiers: ['requiresQuotes'],
    format: null,
    filter: {
      // matches kebab-case
      regex: '[a-z0-9]+(?:-[a-z0-9]+)*',
      match: true,
    }
  },
  // allow all other cases for object literal properties
  {
    selector: 'objectLiteralProperty',
    format: ['camelCase', 'UPPER_CASE', 'PascalCase', 'snake_case'],
  }
]


/**
 */
module.exports = [
  // Default
  {
    selector: 'default',
    format: ['strictCamelCase'],
    leadingUnderscore: 'forbid',
    trailingUnderscore: 'forbid',
  },
  ...defaults,
  ...functions,
  ...statics,
  ...enums,
  ...constants,
  ...objects,
]
