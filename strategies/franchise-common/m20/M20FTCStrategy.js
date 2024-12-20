const M20FTCFileStrategy = require('./M20FTCFileStrategy');
const M20FTCTableStrategy = require('./M20FTCTableStrategy');
const M20FTCTable2FieldStrategy = require('./M20FTCTable2FieldStrategy');
const M24Table3Strategy = require('../../franchise/m24/M24Table3FieldStrategy');

/**
 * @type {GameStrategy}
 */
module.exports = {
    'name': 'M20FTCStrategy',
    'file': M20FTCFileStrategy,
    'table': M20FTCTableStrategy,
    'table2Field': M20FTCTable2FieldStrategy,
    'table3Field': M24Table3Strategy
};