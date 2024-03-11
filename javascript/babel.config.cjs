/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 */

module.exports = api => ({
  presets: [
    [
      '@babel/preset-env',
      {
        targets: ['last 1 Chrome versions'],
        // Do not transform to another module system
        modules: false,
      },
    ],
    [
      '@babel/preset-typescript',
      {
        rewriteImportExtensions: api.env('dist'),
      },
    ],
  ],
});
