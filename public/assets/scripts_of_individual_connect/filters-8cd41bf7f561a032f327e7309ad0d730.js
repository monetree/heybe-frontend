function calendar_filter(t,e){$.ajax({url:"/workout-plans/calendar",dataType:"script",data:{workout_first_week:t,plan_length_filter:e,workout_plan_id:$("#workout_plan_id").text()},success:function(){},error:function(){}})}function user_calendar_filter(t,e){$.ajax({url:"/dashboard/calendar",dataType:"script",data:{workout_first_week:t,plan_length_filter:e,workout_plan_id:$("#workout_plan_id").text()},success:function(){},error:function(){}})}$("#week_1-4").on("click",function(){calendar_filter(1,4)}),$("#week_5-8").on("click",function(){calendar_filter(5,8)}),$("#week_9-12").on("click",function(){calendar_filter(9,12)}),$("#preview_all_4").on("click",function(){calendar_filter(1,8)}),$("#preview_all_5").on("click",function(){calendar_filter(1,12)}),$("#user_week_1-4").on("click",function(){user_calendar_filter(1,4)}),$("#user_week_5-8").on("click",function(){user_calendar_filter(5,8)}),$("#user_week_9-12").on("click",function(){user_calendar_filter(9,12)}),$("#user_preview_all_1").on("click",function(){user_calendar_filter(1,8)}),$("#user_preview_all_2").on("click",function(){user_calendar_filter(9,12)});