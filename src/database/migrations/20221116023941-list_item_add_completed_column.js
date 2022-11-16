'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.addColumn('list_item', 'completed', {
            type: Sequelize.BOOLEAN,
            allowNull: false,
            defaultValue: false,
        })
    },

    async down(queryInterface) {
        await queryInterface.removeColumn('list_item', 'completed')
    }
}
