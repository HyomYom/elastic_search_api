var cat = $("#hide1").text();
console.log(cat);
var str = $("#hide2").text();
console.log(str);
var start = str.indexOf("<mark>") + 6;
var end = str.indexOf("</mark>");
var newStr = str.slice(start, end);
var str_1 = $("#name_1").text();
var str_2 = str_1.replace(newStr, "<span>" + newStr + "</span>");
console.log(newStr);

// $("#high").click(function () {
$(idx.ejs).ready(function () {
  var search = newStr;

  if (cat == "reporter") {
    $("[id^=name_1]:contains('" + search + "')").each(function () {
      var regex = new RegExp(search, "gi");
      $(this).html(
        $(this)
          .text()
          .replace(regex, "<span class='txt-hlight'>" + search + "</span>")
      );
    });
  } else if (cat == "title.korean") {
    $("[id^=title_1]:contains('" + search + "')").each(function () {
      var regex = new RegExp(search, "gi");
      $(this).html(
        $(this)
          .text()
          .replace(regex, "<span class='txt-hlight'>" + search + "</span>")
      );
    });
  } else if (cat == "category") {
    $("[id^=category_1]:contains('" + search + "')").each(function () {
      var regex = new RegExp(search, "gi");
      $(this).html(
        $(this)
          .text()
          .replace(regex, "<span class='txt-hlight'>" + search + "</span>")
      );
    });
  } else {
    $("[table]:contains('" + search + "')").each(function () {
      var regex = new RegExp(search, "gi");
      $(this).html(
        $(this)
          .text()
          .replace(regex, "<span class='txt-hlight'>" + search + "</span>")
      );
    });
  }
});

// function highlight () {
//   var search = newStr
//     $("#name_1:contains('"+search+"')").each(function () {
//         var regex = new RegExp(search,'gi');
//         $(this).html( $(this).text().replace(regex, "<span class='txt-hlight'>"+search+"</span>") );
//     });
// }
