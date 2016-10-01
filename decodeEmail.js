//
// $Id: decodeEmail.js,v 1.3 2008/11/06 21:05:28 pwh Exp $
//
// A script to decode email addresses that were scrambled to hide them from
// spam-bots.
//


function binSort ( indices, text )

{
   var bins = new Array ()
   var length = indices.length
   var base = 0
   var newIndices = new Array ()

   for ( var i = 0; i < 256; ++i ) bins [i] = 0

   for ( var i = 0; i < length; ++i ) {

var j = text.charCodeAt ( indices [i] )

bins [j] += 1
   }

   for ( var i = 0; i < 256; ++i ) {

var inc = bins [i]

bins [i] = base

base += inc
   }

   for ( var i = 0; i < length; ++i ) {

var j = text.charCodeAt ( i )
var k = bins [j]

++bins [j]
newIndices [k] = i
   }

   return ( newIndices )
}


function bwtDecode ( cipher )

{
   var code = ""
   var plainText = ""
   var length = cipher.length
   var indices = new Array ()
   var key = 0
   var i = 0
   var j = 0

   while ( i < length ) {

var ch = cipher.charAt ( i )

if ( ch != " " && ch != "\t" && ch != "\n" && ch != "\r" ) {

indices [j] = j
code += ch
++j

} else if ( ! key ) key = j

++i
   }

   length = j

   if ( key == length ) key = 0

   if ( length > 0 ) {

indices = binSort ( indices, code )

j = key

while ( length-- > 0 ) {

var ch

j = indices [j]

ch = code.charAt ( j )

if ( ch == "\\" && length-- > 0 ) {

j = indices [j]

ch = code.charAt ( j )

switch ( ch ) {

  case "r":

ch = "\r"
break

  case "n":

ch = "\n"
break

  case "s":

ch = " "
break

  case "t":

ch = "\t"
break

  case "x":

var digits = length
var chCode = 0

if ( digits > 2 ) digits = 2

while ( digits-- > 0 ) {

var littleA = "a".charCodeAt (0)
var bigA = "A".charCodeAt (0)

--length
j = indices [j]
ch = code.charCodeAt ( j )

if ( ch > littleA ) ch
-= ( littleA - 10 )
else if ( ch > bigA ) ch
-= ( bigA - 10 )
else ch -= "0".charCodeAt (0)

chCode *= 16
chCode += ch
}

ch = String.fromCharCode ( chCode )

break;
}
}

plainText += ch
}
   }

   return ( plainText )
}


function decodeEntities ( htmlText )

{
   var text = ""
   var length = htmlText.length
   var i = 0

   while ( i < length ) {

var ch = htmlText.charAt ( i++ )

if ( ch == "&" ) {

var remainder = length - i

if ( remainder > 3
&& htmlText.substring ( i, i + 4 ) == "amp;" ) i += 4

else if ( remainder > 2 ) {

switch ( htmlText.substring ( i, i + 3 ) ) {

  case "gt;":

ch = ">"
i += 3
break

  case "lt;":

ch = "<"
i += 3
break
}
}
}

text += ch
   }

   return ( text )
}


function useHTMLentities ( text )

{
   var htmlText = ""
   var length = text.length
   var i = 0

   while ( i < length ) {

var ch = text.charAt ( i++ )

switch ( ch ) {

  case "&":

htmlText += "&amp;"
break

  case "<":

htmlText += "&lt;"
break

  case ">":

htmlText += "&gt;"
break

  default:

htmlText += ch
break
}
   }

   return ( htmlText )
}


function decodeEmail ()

{
   var addresses = document.getElementsByName ( "e_mail" )
   var length = addresses.length
   var i

   for ( i = 0; i < length; i++ ) {

if ( addresses [i].href == "mailto:" ) {

var address
= bwtDecode ( decodeEntities ( addresses [i].innerHTML ) )

addresses [i].href += address
addresses [i].innerHTML = useHTMLentities ( address )
}
   }
}