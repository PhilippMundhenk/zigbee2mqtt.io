"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[62986],{975133:(e,t,o)=>{o.r(t),o.d(t,{data:()=>d});const d=JSON.parse('{"key":"v-2575b18f","path":"/devices/552-721X2.html","title":"Niko 552-721X2 control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"Niko 552-721X2 control via MQTT","description":"Integrate your Niko 552-721X2 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2022-03-31T18:50:25.000Z"},"excerpt":"","headers":[{"level":2,"title":"Notes","slug":"notes","link":"#notes","children":[{"level":3,"title":"Pairing","slug":"pairing","link":"#pairing","children":[]},{"level":3,"title":"Binding","slug":"binding","link":"#binding","children":[]},{"level":3,"title":"Decoupling","slug":"decoupling","link":"#decoupling","children":[]},{"level":3,"title":"LED","slug":"led","link":"#led","children":[]}]},{"level":2,"title":"Options","slug":"options","link":"#options","children":[]},{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Switch (l1 endpoint)","slug":"switch-l1-endpoint","link":"#switch-l1-endpoint","children":[]},{"level":3,"title":"Switch (l2 endpoint)","slug":"switch-l2-endpoint","link":"#switch-l2-endpoint","children":[]},{"level":3,"title":"Action (enum, l1 endpoint)","slug":"action-enum-l1-endpoint","link":"#action-enum-l1-endpoint","children":[]},{"level":3,"title":"Action (enum, l2 endpoint)","slug":"action-enum-l2-endpoint","link":"#action-enum-l2-endpoint","children":[]},{"level":3,"title":"Operation_mode (enum, l1 endpoint)","slug":"operation-mode-enum-l1-endpoint","link":"#operation-mode-enum-l1-endpoint","children":[]},{"level":3,"title":"Operation_mode (enum, l2 endpoint)","slug":"operation-mode-enum-l2-endpoint","link":"#operation-mode-enum-l2-endpoint","children":[]},{"level":3,"title":"Led_enable (binary, l1 endpoint)","slug":"led-enable-binary-l1-endpoint","link":"#led-enable-binary-l1-endpoint","children":[]},{"level":3,"title":"Led_enable (binary, l2 endpoint)","slug":"led-enable-binary-l2-endpoint","link":"#led-enable-binary-l2-endpoint","children":[]},{"level":3,"title":"Led_state (binary, l1 endpoint)","slug":"led-state-binary-l1-endpoint","link":"#led-state-binary-l1-endpoint","children":[]},{"level":3,"title":"Led_state (binary, l2 endpoint)","slug":"led-state-binary-l2-endpoint","link":"#led-state-binary-l2-endpoint","children":[]},{"level":3,"title":"Linkquality (numeric)","slug":"linkquality-numeric","link":"#linkquality-numeric","children":[]}]}],"git":{"updatedTime":1677398936000},"filePathRelative":"devices/552-721X2.md"}')},6044:(e,t,o)=>{o.r(t),o.d(t,{default:()=>g});var d=o(166252);const i=(0,d._)("h1",{id:"niko-552-721x2",tabindex:"-1"},[(0,d._)("a",{class:"header-anchor",href:"#niko-552-721x2","aria-hidden":"true"},"#"),(0,d.Uk)(" Niko 552-721X2")],-1),n=(0,d._)("thead",null,[(0,d._)("tr",null,[(0,d._)("th"),(0,d._)("th")])],-1),l=(0,d._)("tr",null,[(0,d._)("td",null,"Model"),(0,d._)("td",null,"552-721X2")],-1),a=(0,d._)("td",null,"Vendor",-1),c=(0,d._)("tr",null,[(0,d._)("td",null,"Description"),(0,d._)("td",null,"Double connectable switch")],-1),s=(0,d._)("tr",null,[(0,d._)("td",null,"Exposes"),(0,d._)("td",null,"switch (state), action, operation_mode, led_enable, led_state, linkquality")],-1),r=(0,d._)("tr",null,[(0,d._)("td",null,"Picture"),(0,d._)("td",null,[(0,d._)("img",{src:"https://www.zigbee2mqtt.io/images/devices/552-721X2.jpg",alt:"Niko 552-721X2"})])],-1),u=(0,d.uE)('<h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes" aria-hidden="true">#</a> Notes</h2><h3 id="pairing" tabindex="-1"><a class="header-anchor" href="#pairing" aria-hidden="true">#</a> Pairing</h3><p>Remove the cover and press the either of the little buttons 3x, the led will flash blue when in pairing mode. The device stays in this mode for 5 minutes or until it succesfully paired.</p><h3 id="binding" tabindex="-1"><a class="header-anchor" href="#binding" aria-hidden="true">#</a> Binding</h3><p>This device does not support binding to groups or devices.</p><h3 id="decoupling" tabindex="-1"><a class="header-anchor" href="#decoupling" aria-hidden="true">#</a> Decoupling</h3><p>This device does support decoupling from the build in relay, when the device is decoupled it will emit a &#39;single&#39;, &#39;hold&#39;, and &#39;release&#39; action.</p><h3 id="led" tabindex="-1"><a class="header-anchor" href="#led" aria-hidden="true">#</a> LED</h3><table><thead><tr><th>LED</th><th>Description</th></tr></thead><tbody><tr><td>off</td><td>normal operation, the load is off</td></tr><tr><td>white continues</td><td>normal operation, the load is on</td></tr><tr><td>red flashing</td><td>connection to the zigbee network lost</td></tr><tr><td>blue flashing</td><td>connecting to the zigbee network</td></tr><tr><td>blue continues for 4 sec</td><td>connected succesfulyl to the zigbee network</td></tr></tbody></table><p>The LED can be disabled while the load is on by using a toothpick and holding the <strong>PROG</strong> button for 10 seconds.</p>',10),h=(0,d._)("h2",{id:"options",tabindex:"-1"},[(0,d._)("a",{class:"header-anchor",href:"#options","aria-hidden":"true"},"#"),(0,d.Uk)(" Options")],-1),p=(0,d.uE)('<ul><li><code>state_action</code>: State actions will also be published as &#39;action&#39; when true (default false). The value must be <code>true</code> or <code>false</code></li></ul><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="switch-l1-endpoint" tabindex="-1"><a class="header-anchor" href="#switch-l1-endpoint" aria-hidden="true">#</a> Switch (l1 endpoint)</h3><p>The current state of this switch is in the published state under the <code>state_l1</code> property (value is <code>ON</code> or <code>OFF</code>). To control this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;state_l1&quot;: &quot;ON&quot;}</code>, <code>{&quot;state_l1&quot;: &quot;OFF&quot;}</code> or <code>{&quot;state_l1&quot;: &quot;TOGGLE&quot;}</code>. To read the current state of this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;state_l1&quot;: &quot;&quot;}</code>.</p><h3 id="switch-l2-endpoint" tabindex="-1"><a class="header-anchor" href="#switch-l2-endpoint" aria-hidden="true">#</a> Switch (l2 endpoint)</h3><p>The current state of this switch is in the published state under the <code>state_l2</code> property (value is <code>ON</code> or <code>OFF</code>). To control this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;state_l2&quot;: &quot;ON&quot;}</code>, <code>{&quot;state_l2&quot;: &quot;OFF&quot;}</code> or <code>{&quot;state_l2&quot;: &quot;TOGGLE&quot;}</code>. To read the current state of this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;state_l2&quot;: &quot;&quot;}</code>.</p><h3 id="action-enum-l1-endpoint" tabindex="-1"><a class="header-anchor" href="#action-enum-l1-endpoint" aria-hidden="true">#</a> Action (enum, l1 endpoint)</h3><p>Triggered action (e.g. a button click). Value can be found in the published state on the <code>action_l1</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The possible values are: <code>single</code>, <code>hold</code>, <code>release</code>.</p><h3 id="action-enum-l2-endpoint" tabindex="-1"><a class="header-anchor" href="#action-enum-l2-endpoint" aria-hidden="true">#</a> Action (enum, l2 endpoint)</h3><p>Triggered action (e.g. a button click). Value can be found in the published state on the <code>action_l2</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The possible values are: <code>single</code>, <code>hold</code>, <code>release</code>.</p><h3 id="operation-mode-enum-l1-endpoint" tabindex="-1"><a class="header-anchor" href="#operation-mode-enum-l1-endpoint" aria-hidden="true">#</a> Operation_mode (enum, l1 endpoint)</h3><p>Value can be found in the published state on the <code>operation_mode_l1</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;operation_mode_l1&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;operation_mode_l1&quot;: NEW_VALUE}</code>. The possible values are: <code>control_relay</code>, <code>decoupled</code>.</p><h3 id="operation-mode-enum-l2-endpoint" tabindex="-1"><a class="header-anchor" href="#operation-mode-enum-l2-endpoint" aria-hidden="true">#</a> Operation_mode (enum, l2 endpoint)</h3><p>Value can be found in the published state on the <code>operation_mode_l2</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;operation_mode_l2&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;operation_mode_l2&quot;: NEW_VALUE}</code>. The possible values are: <code>control_relay</code>, <code>decoupled</code>.</p><h3 id="led-enable-binary-l1-endpoint" tabindex="-1"><a class="header-anchor" href="#led-enable-binary-l1-endpoint" aria-hidden="true">#</a> Led_enable (binary, l1 endpoint)</h3><p>Enable LED. Value can be found in the published state on the <code>led_enable_l1</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;led_enable_l1&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;led_enable_l1&quot;: NEW_VALUE}</code>. If value equals <code>true</code> led_enable is ON, if <code>false</code> OFF.</p><h3 id="led-enable-binary-l2-endpoint" tabindex="-1"><a class="header-anchor" href="#led-enable-binary-l2-endpoint" aria-hidden="true">#</a> Led_enable (binary, l2 endpoint)</h3><p>Enable LED. Value can be found in the published state on the <code>led_enable_l2</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;led_enable_l2&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;led_enable_l2&quot;: NEW_VALUE}</code>. If value equals <code>true</code> led_enable is ON, if <code>false</code> OFF.</p><h3 id="led-state-binary-l1-endpoint" tabindex="-1"><a class="header-anchor" href="#led-state-binary-l1-endpoint" aria-hidden="true">#</a> Led_state (binary, l1 endpoint)</h3><p>LED State. Value can be found in the published state on the <code>led_state_l1</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;led_state_l1&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;led_state_l1&quot;: NEW_VALUE}</code>. If value equals <code>ON</code> led_state is ON, if <code>OFF</code> OFF.</p><h3 id="led-state-binary-l2-endpoint" tabindex="-1"><a class="header-anchor" href="#led-state-binary-l2-endpoint" aria-hidden="true">#</a> Led_state (binary, l2 endpoint)</h3><p>LED State. Value can be found in the published state on the <code>led_state_l2</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;led_state_l2&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;led_state_l2&quot;: NEW_VALUE}</code>. If value equals <code>ON</code> led_state is ON, if <code>OFF</code> OFF.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',24),b={},g=(0,o(983744).Z)(b,[["render",function(e,t){const o=(0,d.up)("RouterLink");return(0,d.wg)(),(0,d.iD)("div",null,[(0,d.kq)(" !!!! "),(0,d.kq)(" ATTENTION: This file is auto-generated through docgen! "),(0,d.kq)(' You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". '),(0,d.kq)(' Do not use h1 or h2 heading within "## Notes"-Section. '),(0,d.kq)(" !!!! "),i,(0,d._)("table",null,[n,(0,d._)("tbody",null,[l,(0,d._)("tr",null,[a,(0,d._)("td",null,[(0,d.Wm)(o,{to:"/supported-devices/#v=Niko"},{default:(0,d.w5)((()=>[(0,d.Uk)("Niko")])),_:1})])]),c,s,r])]),(0,d.kq)(' Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. '),u,(0,d.kq)(" Notes END: Do not edit below this line "),h,(0,d._)("p",null,[(0,d._)("em",null,[(0,d.Wm)(o,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,d.w5)((()=>[(0,d.Uk)("How to use device type specific configuration")])),_:1})])]),p])}]])}}]);