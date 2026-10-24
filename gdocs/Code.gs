function onOpen(){DocumentApp.getUi().createAddonMenu().addItem('Open Wordtick','show').addToUi()}
function onInstall(){onOpen()}
function show(){DocumentApp.getUi().showSidebar(HtmlService.createHtmlOutputFromFile('Sidebar').setTitle('Wordtick'))}
// which: 'sel' | 'all'. Returns plain text for the sidebar.
function getText(which){
  var d=DocumentApp.getActiveDocument();
  if(which==='all')return d.getBody().getText();
  var s=d.getSelection();if(!s)return'';
  return s.getRangeElements().map(function(e){
    var el=e.getElement();if(!el.editAsText)return'';
    var t=el.asText().getText();
    return e.isPartial()?t.substring(e.getStartOffset(),e.getEndOffsetInclusive()+1):t}).join(' ')}
