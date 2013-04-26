Ext.data.JsonP.DeviceCapabilities({"tagname":"class","name":"DeviceCapabilities","extends":null,"mixins":[],"alternateClassNames":[],"aliases":{},"singleton":false,"requires":[],"uses":[],"enum":null,"override":null,"inheritable":null,"inheritdoc":null,"meta":{},"private":null,"id":"class-DeviceCapabilities","members":{"cfg":[],"property":[],"method":[{"name":"getDeviceCapabilities","tagname":"method","owner":"DeviceCapabilities","meta":{},"id":"method-getDeviceCapabilities"}],"event":[],"css_var":[],"css_mixin":[]},"linenr":2040,"files":[{"filename":"attWorklightApiDoc.js","href":"attWorklightApiDoc.html#DeviceCapabilities"}],"html_meta":{},"statics":{"cfg":[],"property":[],"method":[],"event":[],"css_var":[],"css_mixin":[]},"component":false,"superclasses":[],"subclasses":[],"mixedInto":[],"parentMixins":[],"html":"<div><pre class=\"hierarchy\"><h4>Files</h4><div class='dependency'><a href='source/attWorklightApiDoc.html#DeviceCapabilities' target='_blank'>attWorklightApiDoc.js</a></div></pre><div class='doc-contents'><p>The Device Capabilities API enables your app to identify the capabilities of a device on the AT&amp;T network.</p>\n\n<p>Authorization Scope: <b>DC</b></p>\n\n\n<p><b>Other Considerations</b></p>\n\n\n<ul>\n  <li>The MSISDN in the API request must be an AT&amp;T post-paid mobile subscriber number.</li>\n  <li>This API only works for AT&amp;T-supported devices. If the user has a device from another carrier and uses an AT&amp;T SIM, the results are not accurate.</li>\n  <li>The user's device running your app must be connected to the AT&amp;T mobile data connection.</li>\n  <li>The AT&amp;T service prompts the user for permission to release their device information to your app. The user must allow permission before the app can call <b>getDeviceCapabilities</b> on the device. After the user grants permission, access is valid forever.</li>\n  <li>The resulting attributes contain AT&amp;T-specific, comma-delimited strings of <i>name</i>:<i>value</i> pairs.</li>\n</ul>\n\n\n<p><b>The Device Capabilities API provides the following methods.</b></p>\n\n<ul>\n<li><a href=\"#!/api/DeviceCapabilities-method-getDeviceCapabilities\" rel=\"DeviceCapabilities-method-getDeviceCapabilities\" class=\"docClass\">getDeviceCapabilities</a></li>\n</ul>\n\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-getDeviceCapabilities' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='DeviceCapabilities'>DeviceCapabilities</span><br/><a href='source/attWorklightApiDoc.html#DeviceCapabilities-method-getDeviceCapabilities' target='_blank' class='view-source'>view source</a></div><a href='#!/api/DeviceCapabilities-method-getDeviceCapabilities' class='name expandable'>getDeviceCapabilities</a>( <span class='pre'>invocationData, options</span> ) : Object</div><div class='description'><div class='short'>Retrieves information, such as the model and whether it accepts a WAP push, about the device. ...</div><div class='long'><p>Retrieves information, such as the model and whether it accepts a WAP push, about the device. The device must be using an AT&amp;T mobile data connection.</p>\n\n<p>Authorization Model: <b>authorization_code</b></p>\n\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>invocationData</span> : Object<div class='sub-desc'><p>Specifies a JSON object containing the following parameters.</p>\n<ul><li><span class='pre'>adapter</span> : String<div class='sub-desc'><p>Specifies the name of the adapter. The only defined value for this parameter is <b>DeviceCapabilities</b>.</p>\n</div></li><li><span class='pre'>procedure</span> : String<div class='sub-desc'><p>Specifies the name of the procedure. The only defined value for this parameter is <b>getDeviceCapabilities</b>.</p>\n</div></li><li><span class='pre'>parameters</span> : Array<div class='sub-desc'><p>Specifies an array that contains a JSON object.</p>\n<ul><li><span class='pre'>params</span> : Object<div class='sub-desc'><p>Specifies a JSON object containing the following parameters.</p>\n<ul><li><span class='pre'>accept</span> : String (optional)<div class='sub-desc'><p>Specifies the format of the object returned.</p>\n\n<p>The defined values for this parameter are:</p>\n\n\n<ul>\n  <li><b>application/json</b></li>\n  <li><b>application/xml</b></li>\n</ul>\n\n\n<p>The default is <b>application/json</b>.</p>\n\n</div></li><li><span class='pre'>oAuthToken</span> : String<div class='sub-desc'><p>Specifies the access token, which is the value of the <b>access_token</b> parameter returned in the <a href=\"#!/api/OAuthAdapter-method-getAccessToken\" rel=\"OAuthAdapter-method-getAccessToken\" class=\"docClass\">OAuthAdapter.getAccessToken</a> method response.</p>\n</div></li></ul></div></li></ul></div></li></ul></div></li><li><span class='pre'>options</span> : Object<div class='sub-desc'><p>An object containing the success and failure callbacks.</p>\n<ul><li><span class='pre'>onSuccess</span> : Function<div class='sub-desc'><p>Specifies the function that is called if the method returns succeeds.</p>\n</div></li><li><span class='pre'>onFailure</span> : Function<div class='sub-desc'><p>Specifies the function that is called if the method fails.</p>\n</div></li></ul></div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object</span><div class='sub-desc'><p>An object containing the results of the call. This object has the following parameters.</p>\n\n<ul>\n  <li>DeviceInfo\n    <br/>\n    Specifies a JSON object containing the following parameters.\n    <ul>\n      <li>DeviceId\n        <br/>\n        Specifies a JSON object containing the following parameters.\n        <ul>\n          <li>TypeAllocationCode\n            <br/>\n            Specifies the first eight digits of the International Mobile Equipment Identity of the mobile device.</li>\n        </ul>\n      </li>\n    </ul>\n  </li>\n  <li>Capabilities\n    <br/>\n    Specifies a JSON object containing the following parameters.\n    <ul>\n      <li>AssistedGps\n        <br/>\n        Specifies whether the device supports assisted-GPS. The defined values for this parameter are:\n<ul>\n  <li>Y\n    <br/>\n    The device supports assisted GPS.</li>\n  <li>N\n    <br/>\n    The device does not support assisted GPS.</li>\n</ul></li>\n      <li>DeviceBrowser\n        <br/>\n        Specifies the name of the browser, such as <b>RIM</b> for Blackberry device, that is resident on the device.</li>\n      <li>FirmwareVersion\n        <br/>\n        Specifies the firmware release number used by AT&amp;T for the mobile device. This value may correspond to the firmware release number provided by the device manaufacturer.</li>\n      <li>LocationTechnology\n        <br/>\n        Specifies the location technology network that the device supports.</li>\n      <li>MmsCapable\n        <br/>\n        Specifies whether the device supports MMS. The defined values for this parameter are:\n<ul>\n  <li>Y\n    <br/>\n    The device supports MMS.</li>\n  <li>N\n    <br/>\n    The device does not support MMS.</li>\n</ul></li>\n      <li>Model\n        <br/>\n        Specifies the model number used by AT&amp;T for the mobile device. This value may correspond to the model number in the User Agent Profile.</li>\n      <li>Name\n        <br/>\n        Specifies the abbreviated code used by AT&amp;T for the mobile device manufacturer and model number, separated by a space. This value may correspond to the name and model number in the User Agent Profile.</li>\n      <li>UaProf\n        <br/>\n        Specifies the URL of the device manufacturer web site containing the User Agent Profile of the device.</li>\n      <li>Vendor\n        <br/>\n        Specifies the abbreviated code used by AT&amp;T for the manufacturer of the mobile device. This value may correspond to the name of the device manufacturer in the User Agent Profile.</li>\n      <li>WapPushCapable\n        <br/>\n        Specifies whether the device supports WAP Push.  The defined values for this parameter are:\n<ul>\n  <li>Y\n    <br/>\n    The device supports WAP Push.</li>\n  <li>N\n    <br/>\n    The device does not support WAP Push.</li>\n</ul></li>\n    </ul>\n  </li>\n</ul>\n\n\n<p><b>Examples</b></p>\n\n<p>The following example retrieves the device capabilities for the user with the token value <b>1a2b3c4d5e6f7g8h9i0j</b>.</p>\n\n<pre><code>params = {\n   'oAuthToken' : '1a2b3c4d5e6f7g8h9i0j'\n};\ninvocationData = {\n   adapter : 'DeviceCapabilities',\n   procedure : 'getDeviceCapabilities',\n   parameters : [params]           \n};\noptions = {\n   onSuccess : successCallback,\n   onFailure : failureCallback\n   invocationContext : {}\n};\n\nWL.Client.invokeProcedure(invocationData, options);\n</code></pre>\n\n<p>The following example shows a JSON object returned by this method.</p>\n\n<pre><code>{ \n   \"DeviceInfo\": \"DeviceId\":{ \n      \"TypeAllocationCode\" : \" 01196499\" \n   }, \n   \"Capablities\": { \n      \"Name\" : \"LGE CU920\", \n      \"Vendor\":  \"LGE\", \n      \"Model\":  \"CU920\", \n      \"FirmwareVersion\":  \"CU920-MSM4090201D-V10h-FEB-05\", \n      \"UaProf\":     \"http://gsm.lge.com/html/gsm/LG-CU920.xml\", \n      \"MmsCapable\":  \"Y\", \n      \"AssistedGps\":  \"Y\", \n      \"LocationTechnology\":  \"SUPL2\", \n      \"DeviceBrowser\" : \"safari\", \n      \"WapPushCapable\" : \"Y\" \n   } \n}\n</code></pre>\n</div></li></ul></div></div></div></div></div></div></div>"});