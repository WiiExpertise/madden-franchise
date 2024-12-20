/** 
 * @typedef {Object} SettingsParam 
 * @param {boolean?} [saveOnChange]
 * @param {SchemaMetadata?} [schemaOverride]
 * @param {string?} [schemaDirectory]
 * @param {boolean?} [autoParse]
 * @param {boolean?} [autoUnempty]
*/

class FranchiseFileSettings {
  /** @param {SettingsParam} settings */
  constructor(settings) {
    /** @type {boolean} */
    this.saveOnChange = settings && settings.saveOnChange ? settings.saveOnChange : false;
    /** @type {SchemaMetadata | false} */
    this.schemaOverride = settings && settings.schemaOverride ? settings.schemaOverride: false;
    /** @type {string | false} */
    this.schemaDirectory = settings && settings.schemaDirectory ? settings.schemaDirectory : false;
    /** @type {boolean} */
    this.autoParse = settings && (settings.autoParse !== null && settings.autoParse !== undefined) ? settings.autoParse : true;
    /** @type {boolean} */
    this.autoUnempty = settings && (settings.autoUnempty !== null && settings.autoUnempty !== undefined) ? settings.autoUnempty : false;
  }
};

module.exports = FranchiseFileSettings;