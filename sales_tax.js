var $ = function (id) {
    return document.getElementById(id);
}

var calculateSalesTax = function (subtotal, taxRate){
  var salesTaxAmount = subtotal * (taxRate / 100);
  salesTaxAmount = salesTaxAmount.toFixed(2);
  return salesTaxAmount;
}

var calculateTotal = function (subtotal, taxRate){
  salesTaxAmount = calculateSalesTax(subtotal, taxRate);
  totalAmount = subtotal - salesTaxAmount;
  totalAmount = totalAmount.toFixed(2);
  return totalAmount;
}

var calculate_click = function () {
	var subtotal = parseFloat( $("subtotal").value );
  var taxRate  = parseFloat( $("tax_rate").value );

  if (subtotal < 0 || subtotal > 10000 || isNaN(subtotal)){
    alert("Must be a positive number less than $10,000");
  }else if (taxRate < 0 || taxRate > 12 || isNaN(taxRate)){
    alert("Must be a positive number less than 12");
  }else {
    $("sales_tax").value = calculateSalesTax(subtotal, taxRate);
    $("total").value = calculateTotal(subtotal, taxRate);
  }
    $("subtotal").focus();
}

var clear_click = function () {
  $("subtotal").value = "";
  $("tax_rate").value = "";
  $("sales_tax").value = "";
  $("total").value = "";
  $("subtotal").focus();
}

var clear_subtotal = function () {
  $("subtotal").value = "";
}

var clear_tax_rate = function (){
  $("tax_rate").value = "";
}


window.onload = function () {
  $("calculate").onclick = calculate_click;
  $("subtotal").focus();
  $("clear").onclick = clear_click;
  $("subtotal").onclick = clear_subtotal;
  $("tax_rate").onclick = clear_tax_rate;
}
