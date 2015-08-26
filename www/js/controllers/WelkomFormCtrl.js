angular
  .module('eten!')
  .controller('WelkomFormCtrl', WelkomFormCtrl);

function WelkomFormCtrl() {
  this.submit = submit;

  function submit() {
    console.log('submit');
  }
}
