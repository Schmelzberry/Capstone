import React from 'react';

function Calendar() {

  return (
    <React.Fragment>
 
    <script src='https://cdn.jsdelivr.net/npm/fullcalendar@6.1.10/index.global.min.js'></script>
    <script>

      document.addEventListener('DOMContentLoaded', function() {
        var calendarEl = document.getElementById('calendar');
        var calendar = new FullCalendar.Calendar(calendarEl, {
          initialView: 'dayGridMonth'
        });
        calendar.render();
      });

    </script>
  
  <body>
    <div id='calendar'></div>
  </body>


    </React.Fragment>
  )


}
export default Calendar;