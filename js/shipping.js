let cost;
$.ajax({
  url: "../js/shippingcost.json",
  success: function (data) {
    cost = data;
    console.log(cost)
  },
});

$(".shippingForm").on("click", PayFor)

function PayFor(){
    console.log(cost[0])
}