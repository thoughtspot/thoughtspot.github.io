1. To schedule a refresh for the materialized view, next to **Repeats**, select the **Time Interval**:  *Daily*, *Weekly*, or *Monthly*.

2. Supply the schedule details:

   <dl>
   <dlentry id="daily">
     <dt>Daily</dt>
     <dd>
       <ul>
        <li>From the <strong>Select days</strong> menu, select <em>Every weekday</em>, or <em>Every day</em>.</li>
        <li>Specify the hour of the day.</li>
        <li>Specify the minutes.</li>
        <li>Click <strong>Schedule</strong>.</li>
        </ul>
        <img src="../../images/view-materialize-5.png" alt="Specify the daily update schedule for refreshing the materialized view" />
        </dd>
   </dlentry>
   <dlentry id="weekly">
     <dt>Weekly</dt>
     <dd>
       <ul>
        <li>From the <strong>Select weekdays</strong> menu, select the days of the week, <em>Sunday .... Saturday</em>, for the refresh, and click <strong>Done</strong>.</li>
        <li>Specify the hour of the day.</li>
        <li>Specify the minutes.</li>
        <li>Click <strong>Schedule</strong>.</li>
        </ul>
        <img src="../../images/view-materialize-6.png" alt="Specify the weekly update schedule for refreshing the materialized view" />
        </dd>
   </dlentry>
   <dlentry id="monthly">
     <dt>Monthly</dt>
     <dd>
       <ul>
        <li>From the <strong>Select days</strong> menu, select the day of the month, <em>1 ... 31</em>, for the refresh.</li>
        <li>Specify the hour of the day.</li>
        <li>Specify the minutes.</li>
        <li>Click <strong>Schedule</strong>.</li>
        </ul>
        <img src="../../images/view-materialize-7.png" alt="Specify the weekly update schedule for refreshing the materialized view" />
        </dd>
      </dlentry>
    </dl>

    {% include note.html content="Refresh works only if it is scheduled in the refresh window set for the cluster, with default: 8:00 PM - 4:00 AM. Only the start time of the refresh window is configurable using the flag `orion.materializationConfig.refreshWindowStartTime`. This flag can have values like `12:00PM`, `01:00AM`, and so on. For example, to set the cluster window from 2:00 AM to 10:00 AM, set the flag to `orion.materializationConfig.refreshWindowStartTime \"02:00AM\"`."%}
