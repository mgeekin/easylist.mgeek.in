<?php 

$pdfURI="";
//Dummy string object

/*
$_obj->To = "prateekrajgautam@gmail.com";
$_obj->Subject= "from obj subject";
$_obj->Body="Main message random text message";
$_obj->Header="From: orderConfirmation@urctughlakabad.in" . "\r\n" .
"BCC: easylist.mgeek.in@gmail.com" . "\r\n" .
"Reply-To: order@urctughlakabad.in";

//received post form web
$_POST = json_encode($_obj,true);


$str ="{\"To\":\"prateekrajgautam@gmail.com\",\"Subject\":\"New Subject\",\"Body\":\"mail body\",\"From\":\"orderConfirmation@urctughlakabad.in\",\"Bcc\":\"easylist.mgeek.in@gmail.com\",\"ReplyTo\":\"order@urctughlakabad.in\",\"pdfURI\":\"\"}";

$_POST=json_encode(json_decode($str));

*/
$str_json = file_get_contents('php://input'); //($_POST doesn't work here)
$email = json_decode($str_json, true); // decoding received JSON to array

// Always set content-type when sending HTML email
$headers = "MIME-Version: 1.0" . "\r\n";
$headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";

// More headers
$headers .= 'From:'. $email["From"] . "\r\n";
//$headers .= 'Cc:' . $email["Cc"] . "\r\n";
//$headers .= 'Bcc:' . $email["Bcc"] . "\r\n";
$headers .= 'Reply-To:' . $email["ReplyTo"] . "\r\n";
//Email variables
$to = $email["To"];
$subject = $email["Subject"];
$body = $email["Body"];
$whatsappButton = $email.["WhatsappButton"];


//send mail to Customer
 $response = mail($to, "Order acknowledgement:" . $subject, "<h2>Thanks for your order. We will communicate when your order is ready for pickup.</h2><br />" . $body . $whatsappButton, $headers);







//new header

// Always set content-type when sending HTML email
$headers = "MIME-Version: 1.0" . "\r\n";
$headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";

// More headers
$headers .= 'From:'. 'orders@urctughlakabad.in' . "\r\n";
//$headers .= 'Cc:' . $email["Cc"] . "\r\n";
//$headers .= 'Bcc:' . $email["Bcc"] . "\r\n";
$headers .= 'Reply-To:' . $email["To"] . "\r\n";



 //send mail to orders
 $to = $email["ReplyTo"];
 $response2 = mail($to, 'New order ' . $subject, $body, $headers);


?>
