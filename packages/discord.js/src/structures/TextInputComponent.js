'use strict';

const Component = require('./Component');

class TextInputComponent extends Component {
  /**
   * The custom id of this text input
   */
  get customId() {
    return this.data.custom_id;
  }

  /**
   * The value for this text input
   */
  get value() {
    return this.data.value;
  }
}

module.exports = TextInputComponent;
