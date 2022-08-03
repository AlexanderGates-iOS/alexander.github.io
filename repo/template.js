var content = document.getElementById('content').innerHTML;
var template = ' \
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd"> \
<html> \
<head> \
<meta http-equiv="content-type" content="text/html" charset="utf-8"/> \
<meta charset="utf-8"> \
<link rel="shortcut icon" href=""> \
<meta name="robots" content="index,follow"> \
<!--<meta http-equiv="cache-control" content="no-cache">--> \
<title>Alexander Gates\' Cydia repo</title> \
</head> \
<body text="#000000" link="#404040" alink="#404040" vlink="#404040" style="background:none;"> \
 \
<div align="center" style="background-color:#77ffff"> \
<h1>Alexander Gates\' Repo</h1> \
</div> \
 \
<div align="center" style="background-color:#FFFFFF;"> \
<table> \
<tr style="width:100%"> \
<td> \
<div style="text-align: justify; font-size:110%; background-color:#FFFFFF; min-width: 300px; max-width: 700px; vertical-align: top;"><br> \
' + content + '\
</div> \
<hr> \
<h3><a href="https://twitter.com/AlexanderGates/" target="_blank">Me on Twitter: AlexanderGates</a><br> \
<a href="https://github.com/AlexanderGates-iOS/" target="_blank">Me on Github: AlexanderGates-iOS</a><br> \
<a href="http://alexandergates-ios.github.io/cydia/" target="_blank">My Website</a></h3> \
</td> \
\
</tr> \
</table> \
';
document.documentElement.innerHTML = template;