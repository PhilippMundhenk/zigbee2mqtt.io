"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[50426],{836466:(e,t,n)=>{n.r(t),n.d(t,{data:()=>i});const i=JSON.parse('{"key":"v-0e7ea36f","path":"/devices/ZLGP15.html","title":"Legrand ZLGP15 control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"Legrand ZLGP15 control via MQTT","description":"Integrate your Legrand ZLGP15 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2021-09-02T18:14:38.000Z"},"excerpt":"","headers":[{"level":2,"title":"Notes","slug":"notes","link":"#notes","children":[{"level":3,"title":"Green Power","slug":"green-power","link":"#green-power","children":[]},{"level":3,"title":"Pairing","slug":"pairing","link":"#pairing","children":[]}]},{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Action (enum)","slug":"action-enum","link":"#action-enum","children":[]},{"level":3,"title":"Linkquality (numeric)","slug":"linkquality-numeric","link":"#linkquality-numeric","children":[]}]}],"git":{"updatedTime":1677398936000},"filePathRelative":"devices/ZLGP15.md"}')},29758:(e,t,n)=>{n.r(t),n.d(t,{default:()=>v});var i=n(166252);const a=(0,i._)("h1",{id:"legrand-zlgp15",tabindex:"-1"},[(0,i._)("a",{class:"header-anchor",href:"#legrand-zlgp15","aria-hidden":"true"},"#"),(0,i.Uk)(" Legrand ZLGP15")],-1),r=(0,i._)("thead",null,[(0,i._)("tr",null,[(0,i._)("th"),(0,i._)("th")])],-1),o=(0,i._)("tr",null,[(0,i._)("td",null,"Model"),(0,i._)("td",null,"ZLGP15")],-1),l=(0,i._)("td",null,"Vendor",-1),d=(0,i._)("tr",null,[(0,i._)("td",null,"Description"),(0,i._)("td",null,"Wireless and batteryless 4 scenes control")],-1),s=(0,i._)("tr",null,[(0,i._)("td",null,"Exposes"),(0,i._)("td",null,"action, linkquality")],-1),c=(0,i._)("tr",null,[(0,i._)("td",null,"Picture"),(0,i._)("td",null,[(0,i._)("img",{src:"https://www.zigbee2mqtt.io/images/devices/ZLGP15.jpg",alt:"Legrand ZLGP15"})])],-1),h=(0,i.uE)('<h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes" aria-hidden="true">#</a> Notes</h2><h3 id="green-power" tabindex="-1"><a class="header-anchor" href="#green-power" aria-hidden="true">#</a> Green Power</h3><p>This is a Zigbee Green Power device which allows it to be very energy efficient. Messages from Green Power devices cannot be &quot;understood&quot; by normal Zigbee devices, therefore they need to be &quot;translated&quot; first. Not all Zigbee devices can do this translation, currently the only devices known to do this are Philips Hue devices. This means that the Green Power device has to be in range of a Philips Hue device in order to use it.</p><p>Green Power devices don&#39;t support binding and are not included in network scans.</p><h3 id="pairing" tabindex="-1"><a class="header-anchor" href="#pairing" aria-hidden="true">#</a> Pairing</h3><p>To pair this device on channel 11, hold the configuration button (on the back of the device) and press any of the 4 buttons.</p>',6),u={href:"https://www.admin.legrandoc.com/files/documents/S000113321EN-00.pdf",target:"_blank",rel:"noopener noreferrer"},p=(0,i.uE)('<h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="action-enum" tabindex="-1"><a class="header-anchor" href="#action-enum" aria-hidden="true">#</a> Action (enum)</h3><p>Triggered action (e.g. a button click). Value can be found in the published state on the <code>action</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The possible values are: <code>press_1</code>, <code>press_2</code>, <code>press_3</code>, <code>press_4</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',5),g={},v=(0,n(983744).Z)(g,[["render",function(e,t){const n=(0,i.up)("RouterLink"),g=(0,i.up)("ExternalLinkIcon");return(0,i.wg)(),(0,i.iD)("div",null,[(0,i.kq)(" !!!! "),(0,i.kq)(" ATTENTION: This file is auto-generated through docgen! "),(0,i.kq)(' You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". '),(0,i.kq)(' Do not use h1 or h2 heading within "## Notes"-Section. '),(0,i.kq)(" !!!! "),a,(0,i._)("table",null,[r,(0,i._)("tbody",null,[o,(0,i._)("tr",null,[l,(0,i._)("td",null,[(0,i.Wm)(n,{to:"/supported-devices/#v=Legrand"},{default:(0,i.w5)((()=>[(0,i.Uk)("Legrand")])),_:1})])]),d,s,c])]),(0,i.kq)(' Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. '),h,(0,i._)("p",null,[(0,i.Uk)("This device can work on any channel, not only 11. For this, please refer to the "),(0,i._)("a",u,[(0,i.Uk)("Legrand ZLGP15 manual chapter 6.2"),(0,i.Wm)(g)]),(0,i.Uk)(".")]),(0,i.kq)(" Notes END: Do not edit below this line "),p])}]])}}]);