/**
 * Copyright 2004-present Facebook. All Rights Reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 */

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('Users', 'networkIDs', {
      allowNull: false,
      defaultValue: '[]',
      type: Sequelize.JSON,
    });
  },

  down: (queryInterface, _Sequelize) => {
    return queryInterface.removeColumn('Users', 'networkIDs');
  },
};
