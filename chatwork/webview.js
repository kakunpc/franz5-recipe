
module.exports = (Franz) => {
  const getMessages = function getMessages() {
    const elements = document.getElementById('_chatUnreadStatus');
    if( elements) {
      var display = window.getComputedStyle(elements, null).getPropertyValue('display');
      if( display !== "none"){
        Franz.setBadge(elements.innerHTML);
      }else{
        Franz.setBadge(0);
      }
    }
    else{
      Franz.setBadge(0);
    }
  };
  Franz.loop(getMessages);
};
