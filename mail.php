<?php
$msg="";
if(isset($_POST['name']) && isset($_POST['email']) && isset($_POST['message'])){
	$name=$_POST['name'];
	$email=$_POST['email'];
	$message=$_POST['message'];
	$msg="Thanks message";
	
	$html="<table><tr><td>Name: </td><td>$name</td></tr><tr><td>Email: </td><td>$email</td></tr><tr><td>Message: </td><td>$message</td></tr></table>";
	
	include('smtp/PHPMailerAutoload.php');
	$mail=new PHPMailer(true);
	$mail->isSMTP();
	$mail->Host="smtp.gmail.com";
	$mail->Port=587;
	$mail->SMTPSecure="tls";
	$mail->SMTPAuth=true;
	$mail->Username="webdeveloperbibhu@gmail.com";
	$mail->Password="#Nandini143";
	$mail->SetFrom("webdeveloperbibhu@gmail.com");
	$mail->addAddress("iambibhutidas@gmail.com");
	$mail->IsHTML(true);
	$mail->Subject="New Contact Us";
	$mail->Body=$html;
	$mail->SMTPOptions=array('ssl'=>array(
		'verify_peer'=>false,
		'verify_peer_name'=>false,
		'allow_self_signed'=>false
	));
	if($mail->send()){
		echo "Mail send";
	}else{
		echo "Error occur";
	}
}
?>
