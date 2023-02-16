'Login
Browser("Online Shopping: Best").Page("Online Shopping: Best").Link("Login").Click @@ script infofile_;_ZIP::ssf1.xml_;_
Browser("Online Shopping: Best").Page("Login to your PAYBACK").WebEdit("card_number").Set "9989956895" @@ script infofile_;_ZIP::ssf2.xml_;_
Browser("Online Shopping: Best").Page("Login to your PAYBACK").WebEdit("pin_number").SetSecure "63eb1189c95bd3a489c905b2a4c1" @@ script infofile_;_ZIP::ssf3.xml_;_
wait(10)
'Browser("Online Shopping: Best").Page("Login to your PAYBACK").Frame("a-yd4xqhsp96pn").WebCheckBox("I'm not a robot").Set "ON" @@ script infofile_;_ZIP::ssf4.xml_;_
Browser("Online Shopping: Best").Page("Login to your PAYBACK").WebButton("LOGIN").Click @@ script infofile_;_ZIP::ssf5.xml_;_
