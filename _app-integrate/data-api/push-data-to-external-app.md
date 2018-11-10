---
title: [Push data to another application]
keywords: REST,API,data,direct,pull
last_updated: 11/4/2018
summary: "This procedure shows how to use the Push API to send data from ThoughtSpot to another application"
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---
The Push API sends data from ThoughtSpot to an external application which listens for incoming data using a subscription. This is useful when you want to initiate an action based on the result of a search in ThoughtSpot. The Push JSAPI was introduced in ThoughtSpot 5.0.

An example of pushing data to another system to trigger an action would be where you do a search to find customers who are coming due for renewal of their contract in the next month. You could then trigger an action that sends the list of names, emails, products, and renewal dates to an external billing system. The billing system might add the price, generates an invoice, and send it out via email.

To have the Push API functionality turned on, contact ThoughtSpot Support.

Data pushed to the external system using the Push API is formatted as JSON (JavaScript Object Notation). You will need to parse the JSON to get the data values you need, generally using JavaScript in the receiving application.

## Create an action to push datatypes

To create an action to push data from ThoughtSpot, you must have the [**Can administrator ThoughtSpot** privilege]({{ site.baseurl }}/admin/users-groups/about-users-groups.html).

Use this procedure to create an action on ThoughtSpot to initiate the data push operation:

1. Log in to ThoughtSpot from a browser.

2. Choose **Admin** and then **Action Customization**.

3. Click the **Add custom action item** button.

4. Fill in the details for your custom action:

   * Item Label: Clicking the menu item with the name you provide here will initiate the data push to the other system. This menu item will appear under the three dot menu of a search result.

   * URL: The URL of the target page on the application that will be subscribed to the data push.

   * Window size: The size of the window that will display in ThoughtSpot to verify that a data push has occurred.

   ![]({{ site.baseurl }}/images/create_custom_action.png)

5. Now when a user is viewing a search result, they'll have the option to send data using the Action you created. To initiate the action, they'll click the three dot icon, and select **Your Action Name**. You'll notice a **Custom** tag next to your action name to indicate that this is something custom built, and not a ThoughtSpot action.

   ![]({{ site.baseurl }}/images/initiate_custom_action.png)

6. When a user clicks your action, they'll see a response indicating that the action was completed.

   ![]({{ site.baseurl }}/images/custom_action_response.png)

{% include note.html content="In order for your action to work correctly, the answer from which the user selected the action needs to have the correct search terms needed to generate the data your application or web page is expecting to receive. There is no way to guarantee this, other to train your users on the purpose of your action, and what's required for it to run." %}

## Set up the page on the target application to receive data from ThoughtSpot

Use this procedure on the target application, on the page that is to receive the ThoughtSpot data:

1. [Enable the JavaScript API (JS API)]({{ site.baseurl }}/app-integrate/JSAPI/enable-JS-API.html#) on the receiving page of the target application.

2. [Authenticate to ThoughtSpot]({{ site.baseurl }}/app-integrate/JSAPI/about-JS-API.html#) on the receiving page of the target application.

3. Upon page loading, call the function subscribeToData(responseCallback) to subscribe to the data push from ThoughtSpot. This will allow your page to listen for data coming from ThoughtSpot.

4. The data pushed from ThoughtSpot is formatted at JSON. Add any parsers or handlers you want in your page to initiate the desired action using the ThoughtSpot JSON data.

5. Optionally return an appropriate message to the browser when the data has been received and any desired action has completed successfully.

## Sample application

Here is a sample application you can use to try out the Push API:

```
<!doctype html>
<html lang="en">
<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.6.9/angular.min.js"></script>
<script type="text/javascript" src="api/api.js"></script>
<body>
    <script>

        var app = angular.module("latestData", []);
        app.controller("dataCtrl", ['$scope', '$window', function($scope, $window) {

            $scope.currentData=undefined;
            $scope.showData=false;
            $scope.displayData = function() {
                $scope.showData = true;
            };
            function currentDataCallback(event) {
                $scope.currentData = event;
            }
            $window.onload = function(){
                $window.thoughtspot.getCurrentData(currentDataCallback);
            };

        }]);
    </script>
    <div ng-app ="latestData" ng-controller="dataCtrl">
        <button class="get-data" ng-click="displayData()">Click here for latest exported data</button>
        <div class="display-data" ng-if="showData"> {{currentData}}</div>
    </div>
</body>
</html>

```
