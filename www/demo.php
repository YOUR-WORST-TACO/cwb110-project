<?php print "<!doctype html>
<html lang=\"en\">
<head>
<title>Form Confirmation Page</title>
</head>
<body>
<hl>The form information received is given below:</hl>
<table>
    <tr>
        <th>Key</th>
        <th>Value</th>
    </tr>";
$message = "";
foreach ($_POST as $key=> $value){
$message.= "<tr><td>".$key."</td><td>".$value."</td></tr>\r\n";
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
