const path = require('path');

module.exports = (Franz, options) => {
  let updates = 0;

  // Replace window.alert to hide alerts in Franz
  const oldAlert = window.alert;
  window.alert = function () {
    // when there is an alert run getMssg
    getMessages();
  };

  const getMessages = () => {
    // get unread messages
    const updates = document.getElementById('franz').getAttribute('data-unread');

    // set Franz badge
    // updates => passive unread count
    // inbox => active unread count
    Franz.setBadge(0, updates);
  };

  // check for new messages every second and update Franz badge
  Franz.loop(getMessages);
};
