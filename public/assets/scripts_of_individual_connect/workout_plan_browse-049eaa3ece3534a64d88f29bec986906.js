function browseList(){$(".clear_all").on("click",function(t){$(":input").not(":checkbox").val(""),$(":checkbox").removeAttr("checked"),$("#filter_wop_form").submit()}),$(":checkbox, :input").not("#quick_search").change(function(){$("#quick_search").val(""),"intensity_input"===this.id&&$("#enable_intensity_level").prop("checked",!0),"length_input"===this.id&&$("#enable_length_input").prop("checked",!0),"equipment_none"===this.id&&$("#equipment_none").prop("checked")?$(".equipment-checkboxes :checkbox").not($("#equipment_none")).attr("checked",!1):"equipment_none"!==this.id&&$(".equipment-checkboxes").find(this).length&&$("#equipment_none").attr("checked",!1),$("#filter_wop_form").submit()})}function intensity(){var t=$("#intensity_sliders");0!=t.length&&($(t).noUiSlider({start:.5,step:.5,range:{min:0,max:1}}),$(t).change(function(){var t=parseFloat($(this).val()),e=$("#intensity_input");$(e).val(t),$(e).change()}))}function video_length(){var t=$("#length_sliders");0!=t.length&&($(t).noUiSlider({start:1,step:1,range:{min:1,max:12}}),$(t).change(function(){var t=parseFloat($(this).val()),e=$("#length_input");$(e).val(t),$(e).change()}))}function browseListMobile(){$(".clear_all_mobile").on("click",function(t){$(":input").not(":checkbox").val(""),$(":checkbox").removeAttr("checked"),$("#filter_wop_form_mobile").submit()}),$(":checkbox, :input").not("#quick_search").change(function(){$("#quick_search").val(""),"intensity_input_mobile"===this.id&&$("#enable_intensity_level_mobile").prop("checked",!0),"length_input_mobile"===this.id&&$("#enable_length_input_mobile").prop("checked",!0),"equipment_none_mobile"===this.id&&$("#equipment_none_mobile").prop("checked")?$(".equipment-checkboxes :checkbox").not($("#equipment_none_mobile")).attr("checked",!1):"equipment_none_mobile"!==this.id&&$(".equipment-checkboxes").find(this).length&&$("#equipment_none_mobile").attr("checked",!1),$("#filter_wop_form_mobile").submit()})}function intensityMobile(){var t=$("#intensity_sliders_mobile");0!=t.length&&($(t).noUiSlider({start:.5,step:.5,range:{min:0,max:1}}),$(t).change(function(){var t=parseFloat($(this).val()),e=$("#intensity_input_mobile");$(e).val(t),$(e).change()}))}function videoLengthMobile(){var t=$("#length_sliders_mobile");0!=t.length&&($(t).noUiSlider({start:0,step:1,range:{min:0,max:12}}),$(t).change(function(){var t=parseFloat($(this).val()),e=$("#length_input_mobile");$(e).val(t),$(e).change()}))}$(function(){browseList(),intensity(),video_length()}),$(function(){browseListMobile(),intensityMobile(),videoLengthMobile()});