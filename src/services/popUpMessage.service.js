function popUpMessageService(message, timeInScodns) {
  var iDiv = document.createElement('div');
  iDiv.id = 'popup-message';
  iDiv.style = 'position:fixed; top: 0; left: 0; background-color: #ffffff; color: #ef5466; z-index: 99999; width: 100%; height: 20px; border: solid 2px #ef5466; padding: 5px; display: grid; justify-content: center;';
  iDiv.innerText = message;
  document.getElementsByTagName('body')[0].appendChild(iDiv);
  setTimeout(() => { document.getElementById('popup-message').remove(); }, timeInScodns * 1000);
}

export default popUpMessageService;
