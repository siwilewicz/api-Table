<?php

    // initiate comprehensive error reporting
	ini_set('display_errors', 'On');
	error_reporting(E_ALL);

	$executionStartTime = microtime(true);

    // URL for API call with the required parameters passed from the“data” section of the AJAX call in the script.js.
	$url='http://api.geonames.org/childrenJSON?formatted=true&' . 'geonameId='  . $_REQUEST['geonameId'] . '&username=kasia' . '&hierarchy=dependency';

    // initiates the cURL object and sets some parameters. 
	$ch = curl_init();
	curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
	curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
	curl_setopt($ch, CURLOPT_URL,$url);

    // executes the cURL object and stores the results to $result. 
	$result=curl_exec($ch);

	curl_close($ch);

    // decoding returned data as JSON as array
	$decode = json_decode($result,true);	

    // goenames property from serialised JSON stored into output element
	$output['status']['code'] = "200";
	$output['status']['name'] = "ok";
	$output['status']['description'] = "success";
	$output['status']['returnedIn'] = intval((microtime(true) - $executionStartTime) * 1000) . " ms";
	$output['data'] = $decode['geonames'];
	
	header('Content-Type: application/json; charset=UTF-8');

	echo json_encode($output); 

?>