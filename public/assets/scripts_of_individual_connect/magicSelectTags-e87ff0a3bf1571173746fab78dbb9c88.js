$(document).ready(function(){var t=gon.data_tags?$.parseJSON(gon.data_tags):null,e=gon.selected_tags?gon.selected_tags:null;$("#tags").magicSuggest({placeholder:"Select from below or enter a new search",name:"tags",data:t,value:e})});