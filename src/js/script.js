"use strict";function ajax(t,e){var s=new XMLHttpRequest;s.onload=function(t){200!=t.target.status&&304!=t.target.status||e&&e(t.target.response)},s.open("get",t,!0),s.send()}