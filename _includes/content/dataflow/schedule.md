Immediately after creating a new connection, the connection detail page appears.

When you schedule you create a sync, you have the following scheduling options:

- [Hourly](#hourly_sync)
- [Daily](#daily_sync) (default)
- [Weekly](#weekly_sync)
- [Monthly](#monthly_sync)
- [Does not repeat](#does_not_repeat)

After you specify the sync schedule, click **Save and sync now**. This action saves the schedule, and starts the data sync immediately.

Alternatively, if you click **Save**, the system saves the schedule, but does not sync the data. This gives you the opportunity to fine-tune the column mapping between external data sources and tables inside ThoughtSpot, such as naming, visibility, data type conversion, conditions, and so on. The first sync starts on the specified schedule.

### Hourly sync

![Schedule hourly sync]({{ site.baseurl }}/images/dataflow-schedule-hourly.png "Schedule hourly sync")

<dl id="schedule-hourly">
  <dlentry id="schedule-hourly-repeat">
    <dt>Repeat</dt>
    <dd>Select <strong>hourly</strong>.
      <br/>Mandatory field.</dd></dlentry>
  <dlentry id="schedule-hourly-starts">
    <dt>Starts</dt>
    <dd>Accept the defaults, or set your own  starting date and time for syncing.
      <br/>Note that the timezone is in UTC+00:00.
      <br/>Mandatory fields.</dd></dlentry>
  <dlentry id="schedule-hourly-hour">
    <dt>Run the task every X hour(s)</dt>
    <dd>Select the frequency of the sync.
      <br/>The valid range is from 1 (default) to 12 hours.
      <br/>Mandatory field.</dd></dlentry>
  <dlentry id="schedule-hourly-alert-notifications">
    <dt>Alert notifications</dt>
    <dd>Specify when to notify of the sync status:<br/>
      <ul><li>Failures (default)</li><li>Success and Failures</li><li>Never</li></ul></dd></dlentry>
</dl>

### Daily sync

![Schedule daily sync]({{ site.baseurl }}/images/dataflow-schedule-daily.png "Schedule daily sync")

<dl id="schedule-daily">
  <dlentry id="schedule-daily-repeat">
    <dt>Repeat</dt>
    <dd>Select <strong>daily</strong>.
      <br/>Mandatory field.</dd></dlentry>
  <dlentry id="schedule-daily-starts">
    <dt>Starts</dt>
    <dd>Accept the defaults, or set your own  starting date and time for syncing.
      <br/>Note that the timezone is in UTC+00:00.
      <br/>Mandatory fields.</dd></dlentry>
  <dlentry id="schedule-daily-alert-notifications">
    <dt>Alert notifications</dt>
    <dd>Specify when to notify of the sync status:<br/>
      <ul><li>Failures (default)</li><li>Success and Failures</li><li>Never</li></ul></dd></dlentry>
</dl>

### Weekly sync

![Schedule weekly sync]({{ site.baseurl }}/images/dataflow-schedule-weekly.png "Schedule weekly sync")

<dl id="schedule-weekly">
  <dlentry id="schedule-weekly-repeat">
    <dt>Repeat</dt>
    <dd>Select <strong>weekly</strong>.
      <br/>Mandatory field.</dd></dlentry>
  <dlentry id="schedule-weekly-starts">
    <dt>Starts</dt>
    <dd>Accept the defaults, or set your own  starting date and time for syncing.
      <br/>Note that the timezone is in UTC+00:00.
      <br/>Mandatory fields.</dd></dlentry>
  <dlentry id="schedule-weekly-days">
    <dt>Days of the week</dt>
    <dd>Select the days of the week when you want to sync.
      <br/>For example, you may select only <em>Monday</em>, or only <em>Monday</em> through <em>Friday</em>.
      <br/>Mandatory field.</dd></dlentry>
  <dlentry id="schedule-weekly-alert-notifications">
    <dt>Alert notifications</dt>
    <dd>Specify when to notify of the sync status:<br/>
      <ul><li>Failures (default)</li><li>Success and Failures</li><li>Never</li></ul></dd></dlentry>
</dl>

### Monthly sync

![Schedule monthly sync]({{ site.baseurl }}/images/dataflow-schedule-monthly.png "Schedule monthly sync")

<dl id="schedule-monthly">
  <dlentry id="schedule-monthly-repeat">
    <dt>Repeat</dt>
    <dd>Select <strong>monthly</strong>.
      <br/>Mandatory field.</dd></dlentry>
  <dlentry id="schedule-monthly-starts">
    <dt>Starts</dt>
    <dd>Accept the defaults, or set your own  starting date and time for syncing.
      <br/>Note that the timezone is in UTC+00:00.
      <br/>Mandatory fields.</dd></dlentry>
  <dlentry id="schedule-monthly-days">
    <dt>Day of the Month</dt>
    <dd>Select the days of the month when you want to sync.
      <br/>Mandatory field.
      <br/>There are two basic approaches:<br/>
      <dl>
        <dlentry>
          <dt>Cardinal day</dt>
          <dd>Click the <strong>Day</strong> selector, and choose by date of the month from drop down menu.
            <br/>For example, select <code>15</code> to run sync on 15th of each month.</dd></dlentry>
        <dlentry>
          <dt>Ordinal day</dt>   
          <dd>Click the <strong>The</strong> selector. Then choose one of <em>First</em>(default), <em>Second</em>, <em>Third</em>, <em>Fourth</em>, or <em>Last</em>. Then choose one of the days of the week, <em>Sunday</em> through <em>Saturday</em>.</dd></dlentry></dl>
         </dd></dlentry>
  <dlentry id="schedule-weekly-alert-notifications">
    <dt>Alert notifications</dt>
    <dd>Specify when to notify of the sync status:<br/>
      <ul><li>Failures (default)</li><li>Success and Failures</li><li>Never</li></ul></dd></dlentry>
</dl>

### Does not repeat

![Shedule one-time sync]({{ site.baseurl }}/images/dataflow-schedule-no-repeat.png "Shedule one-time sync")

<dl id="schedule-no-repeat">
  <dlentry id="schedule-no-repeat">
    <dt>Repeat</dt>
    <dd>Select <strong>Does not repeat</strong>.
      <br/>Mandatory field.</dd></dlentry>
  <dlentry id="schedule-no-repeat-alert-notifications">
    <dt>Alert notifications</dt>
    <dd>Specify when to notify of the sync status:<br/>
      <ul><li>Failures (default)</li><li>Success and Failures</li><li>Never</li></ul></dd></dlentry>
</dl>
