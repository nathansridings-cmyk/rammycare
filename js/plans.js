/* Stripe Payment Links
   One constant per plan. Paste that plan's Stripe Payment Link URL
   when Stripe is ready. Leave the string empty until then.
   An empty string keeps Start free trial on the waitlist,
   with the plan noted (?plan=family or ?plan=rest-home). */
var STRIPE_PAYMENT_LINK_FAMILY = "";
var STRIPE_PAYMENT_LINK_REST_HOME = "";

(function () {
  var links = {
    family: STRIPE_PAYMENT_LINK_FAMILY,
    "rest-home": STRIPE_PAYMENT_LINK_REST_HOME
  };

  function ready(url) {
    return typeof url === "string" && /^https:\/\/\S+$/.test(url);
  }

  var buttons = document.querySelectorAll("a[data-plan]");
  for (var i = 0; i < buttons.length; i++) {
    var plan = buttons[i].getAttribute("data-plan");
    var url = links[plan];
    if (!ready(url)) continue;
    buttons[i].href = url;
    buttons[i].rel = "noopener";
  }
})();
