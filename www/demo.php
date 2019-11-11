<?php print "<!doctype html>
<html lang=\"en\">
<head>
<title>Form Confirmation Page</title>
</head>
<body>
<hl>The form information received is given below:</hl>";
$message = "";
foreach ($_pOST as $key=> $value){
$message.= $key." : ".$value."<br>\r\n";
}
print $message;
print "<hr>
<br>
<form action=\"#\">
<input type=\"button\" value  = \"Back\" onclick=\"javascript:history.go(-1)\" />
</form>
</body>
</html>"
?>
