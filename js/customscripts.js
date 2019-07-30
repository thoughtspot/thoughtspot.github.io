$('#mysidebar').height($(".nav").height());


$( document ).ready(function() {

    //this script says, if the height of the viewport is greater than 800px, then insert affix class, which makes the nav bar float in a fixed
    // position as your scroll. if you have a lot of nav items, this height may not work for you.
    var h = $(window).height();
    //console.log (h);
    if (h > 800) {
        $( "#mysidebar" ).attr("class", "nav affix");
    }
    // activate tooltips. although this is a bootstrap js function, it must be activated this way in your theme.
    $('[data-toggle="tooltip"]').tooltip({
        placement : 'top'
    });

    /**
     * AnchorJS
     */
    anchors.add('h2,h3,h4,h5');

});

// needed for nav tabs on pages. See Formatting > Nav tabs for more details.
// script from http://stackoverflow.com/questions/10523433/how-do-i-keep-the-current-tab-active-with-twitter-bootstrap-after-a-page-reload
$(function() {
    var json, tabsState;
    $('a[data-toggle="pill"], a[data-toggle="tab"]').on('shown.bs.tab', function(e) {
        var href, json, parentId, tabsState;

        tabsState = localStorage.getItem("tabs-state");
        json = JSON.parse(tabsState || "{}");
        parentId = $(e.target).parents("ul.nav.nav-pills, ul.nav.nav-tabs").attr("id");
        href = $(e.target).attr('href');
        json[parentId] = href;

        return localStorage.setItem("tabs-state", JSON.stringify(json));
    });

    tabsState = localStorage.getItem("tabs-state");
    json = JSON.parse(tabsState || "{}");

    $.each(json, function(containerId, href) {
        return $("#" + containerId + " a[href=" + href + "]").tab('show');
    });

    $("ul.nav.nav-pills, ul.nav.nav-tabs").each(function() {
        var $this = $(this);
        if (!json[$this.attr("id")]) {
            return $this.find("a[data-toggle=tab]:first, a[data-toggle=pill]:first").tab("show");
        }
    });
});


// docs feedback tool
const formUrl = 'https://script.google.com/macros/s/AKfycbz-XYBCvJlZhrQlcyWRMn-s02i--AcF4JWI3oNFx38-WDJCJN-3/exec';
var $form = '';
function saveData(){
        document.querySelector('.feedback-form').classList.add('hide');
        document.querySelector('.thanks-text').classList.remove('hide');
          var jqxhr = $.ajax({
              url: formUrl,
              method: "GET",
              dataType: "json",
              data: $form.serializeObject(),
              success: function(data) {
              }
        });
}
var useFulArticle = 'Was this article helpful?';
function activeForm(value){
  const feedbackYesMessage = `Thank you. Please share your experience with us.`,
  feedbackNoMessage = `Apologies! Please tell us how we can improve. Thank you.`;
  if(value == 'No'){
    document.querySelector('#feedback-form_radio-no').checked = true;
    document.querySelector('#feedback-form_radio-yes').checked = false;
    document.querySelector('#feedback-form-textarea').setAttribute('placeholder', feedbackNoMessage);
  }else{
    document.querySelector('#feedback-form-textarea').setAttribute('placeholder', feedbackYesMessage);
    document.querySelector('#feedback-form_radio-yes').checked = true;
    document.querySelector('#feedback-form_radio-no').checked = false;
  }
  document.querySelector('.feedback-form_heading').classList.add('hide');
  document.querySelector('.feedback-form_contents').classList.remove('hide');
}

function cancelForm(){
  document.querySelector('.feedback-form_heading').classList.remove('hide');
  document.querySelector('.feedback-form_contents').classList.add('hide');
}

function validFeedback() {
    var
        feedbackMessage = document.querySelector('#feedback-form-textarea').value.trim(),
        valid = true;
        document.querySelector('#feedback-form-textarea').classList.remove('has-error');
    if (feedbackMessage === '') {
         document.querySelector('#feedback-form-textarea').classList.add('has-error');
        valid = false;
    }
    return valid;
}

$.fn.serializeObject = function() {
    "use strict";
    var a = {},
        b = function(b, c) {
            var d = a[c.name];
            "undefined" != typeof d && d !== null ? $.isArray(d) ? d.push(c.value) : a[c.name] = [d, c.value] : a[c.name] = c.value
        };
    return $.each(this.serializeArray(), b), a
};


document.addEventListener("DOMContentLoaded", function() {

  if(document.querySelector('.post-content')){


    var customHTML = document.querySelector('.post-content');
    customHTML.insertAdjacentHTML('beforeend', `<div class="feedback-container"><form id="feedback-form" class="feedback-form"><input type="hidden" id="feedbackURL" name="page_url"/><input type="hidden" id="feedbackPage" name="page_title"/><div class="feedback-form_heading"><span class="feedback-form_title">${ useFulArticle }</span><div class="feedback-form_buttons"><button name="feedback-form-btn-yes" type="button" onclick="activeForm('Yes')" class="feedback-form_btn">Yes</button><button name="feedback-form-btn-no" onclick="activeForm('No')" type="button" class="feedback-form_btn">No</button></div></div><div class="feedback-form_contents hide"><span class="feedback-form_title mb-lg">Was this article helpful?</span> <div class="feedback-form_radio-group"><label class="feedback-form_field"><input id="feedback-form_radio-yes" type="radio" value="yes" name="feedback-option"> Yes </label> <label class="feedback-form_field"><input id="feedback-form_radio-no" type="radio" value="no" name="feedback-option"> No</label></div> <textarea placeholder="Have a comment? Please leave it here." id="feedback-form-textarea" maxlength="1500" rows="5" class="feedback-form_textarea" name="feedback_comment"></textarea>  <div class="feedback-form_buttons"><button id="submitForm" type="button" class="feedback-form_btn">Send</button><button type="button" class="feedback-form_btn" onclick="cancelForm()">Cancel</button></div></div></form><div class="thanks-text hide">Thanks for your feedback 😊</div></div>`);
    document.querySelector('#feedbackPage').value = document.querySelector('.post-title-main').innerText;
    document.querySelector('#feedbackURL').value = document.location.href;
    $form = $('form#feedback-form');
    document.getElementById('submitForm').addEventListener("click",  function(event){
    event.preventDefault();
    //var valid = validFeedback();if (valid) {saveData();}
    saveData();
    });
  }
});
