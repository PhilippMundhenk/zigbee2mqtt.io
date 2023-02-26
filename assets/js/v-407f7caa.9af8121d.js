"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[70877],{75052:(e,t,a)=>{a.r(t),a.d(t,{data:()=>s});const s=JSON.parse('{"key":"v-407f7caa","path":"/devices/1TST-EU.html","title":"eCozy 1TST-EU control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"eCozy 1TST-EU control via MQTT","description":"Integrate your eCozy 1TST-EU via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2019-07-22T20:08:17.000Z"},"excerpt":"","headers":[{"level":2,"title":"Notes","slug":"notes","link":"#notes","children":[{"level":3,"title":"Controlling","slug":"controlling","link":"#controlling","children":[]}]},{"level":2,"title":"Options","slug":"options","link":"#options","children":[]},{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Battery (numeric)","slug":"battery-numeric","link":"#battery-numeric","children":[]},{"level":3,"title":"Climate","slug":"climate","link":"#climate","children":[]},{"level":3,"title":"Linkquality (numeric)","slug":"linkquality-numeric","link":"#linkquality-numeric","children":[]}]}],"git":{"updatedTime":1677398936000},"filePathRelative":"devices/1TST-EU.md"}')},858593:(e,t,a)=>{a.r(t),a.d(t,{default:()=>v});var s=a(166252);const n=(0,s._)("h1",{id:"ecozy-1tst-eu",tabindex:"-1"},[(0,s._)("a",{class:"header-anchor",href:"#ecozy-1tst-eu","aria-hidden":"true"},"#"),(0,s.Uk)(" eCozy 1TST-EU")],-1),o=(0,s._)("thead",null,[(0,s._)("tr",null,[(0,s._)("th"),(0,s._)("th")])],-1),i=(0,s._)("tr",null,[(0,s._)("td",null,"Model"),(0,s._)("td",null,"1TST-EU")],-1),d=(0,s._)("td",null,"Vendor",-1),r=(0,s._)("tr",null,[(0,s._)("td",null,"Description"),(0,s._)("td",null,"Smart heating thermostat")],-1),l=(0,s._)("tr",null,[(0,s._)("td",null,"Exposes"),(0,s._)("td",null,"battery, climate (occupied_heating_setpoint, local_temperature, system_mode, running_state, local_temperature_calibration, pi_heating_demand), linkquality")],-1),c=(0,s._)("tr",null,[(0,s._)("td",null,"Picture"),(0,s._)("td",null,[(0,s._)("img",{src:"https://www.zigbee2mqtt.io/images/devices/1TST-EU.jpg",alt:"eCozy 1TST-EU"})])],-1),p=(0,s.uE)('<h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes" aria-hidden="true">#</a> Notes</h2><h3 id="controlling" tabindex="-1"><a class="header-anchor" href="#controlling" aria-hidden="true">#</a> Controlling</h3><p>Get local temperature in degrees Celsius (in the range 0x954d to 0x7fff, i.e. -273.15°C to 327.67 ºC)</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>\n    <span class="token property">&quot;local_temperature&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Get or set offset added to/subtracted from the actual displayed room temperature to NUMBER, in steps of 0.1°C</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token punctuation">{</span>\n    <span class="token string-property property">&quot;local_temperature_calibration&quot;</span><span class="token operator">:</span> <span class="token string">&quot;NUMBER&quot;</span>       <span class="token comment">// Possible values: –2.5 to +2.5; leave empty to read</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Set temperature display mode</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token punctuation">{</span>\n    <span class="token string-property property">&quot;temperature_display_mode&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span>      <span class="token comment">// Possible values: 0 to set °C or 1 so set °F</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Get room occupancy. Specifies whether the heated/cooled space is occupied or not. If 1, the space is occupied, else it is unoccupied.</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>\n    <span class="token property">&quot;thermostat_occupancy&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Get or set occupied heating setpoint to NUMBER in degrees Celsius.</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token punctuation">{</span>\n    <span class="token string-property property">&quot;occupied_heating_setpoint&quot;</span><span class="token operator">:</span> <span class="token string">&quot;NUMBER&quot;</span>       <span class="token comment">// Possible values: MinHeatSetpointLimit to  MaxHeatSetpointLimit, i.e. 7 to 30 by default; leave empty to read</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Get or set unoccupied heating setpoint to NUMBER in degrees Celsius</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token punctuation">{</span>\n    <span class="token string-property property">&quot;unoccupied_heating_setpoint&quot;</span><span class="token operator">:</span> <span class="token string">&quot;NUMBER&quot;</span>       <span class="token comment">// Possible values: MinHeatSetpointLimit to MaxHeatSetpointLimit, i.e. 7 to 30 by default; leave empty to read</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Increase or decrease heating setpoint by NUMBER degrees in °C.</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token punctuation">{</span>\n    <span class="token string-property property">&quot;setpoint_raise_lower&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n    <span class="token string-property property">&quot;mode&quot;</span><span class="token operator">:</span> <span class="token string">&quot;0x00&quot;</span><span class="token punctuation">,</span>       <span class="token comment">// Possible values: see table below</span>\n    <span class="token string-property property">&quot;amount&quot;</span><span class="token operator">:</span> <span class="token string">&quot;NUMBER&quot;</span>    <span class="token comment">// Possible values: signed 8-bit integer that specifies the amount the setpoint(s) are to be increased (or decreased) by, in steps of 0.1°C</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><table><thead><tr><th>Attribute Value</th><th>Description</th></tr></thead><tbody><tr><td>0x00</td><td>Heat (adjust Heat Setpoint)</td></tr><tr><td>0x01</td><td>Cool (adjust Cool Setpoint)</td></tr><tr><td>0x02</td><td>Both (adjust Heat Setpoint and Cool Setpoint)</td></tr></tbody></table><p>Get or set whether the local temperature, outdoor temperature and occupancy are being sensed by internal sensors or remote networked sensors</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token punctuation">{</span>\n    <span class="token string-property property">&quot;remote_sensing&quot;</span><span class="token operator">:</span> <span class="token string">&quot;NUMBER&quot;</span>      <span class="token comment">// Possible values: see table below; leave empty to read</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><table><thead><tr><th>Bit Number</th><th>Description</th></tr></thead><tbody><tr><td>0</td><td>0 – local temperature sensed internally <br> 1 – local temperature sensed remotely</td></tr><tr><td>1</td><td>0 – outdoor temperature sensed internally <br> 1 – outdoor temperature sensed remotely</td></tr><tr><td>2</td><td>0 – occupancy sensed internally <br> 1 – occupancy sensed remotely</td></tr></tbody></table><p>Get or set control sequence of operation</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token punctuation">{</span>\n    <span class="token string-property property">&quot;control_sequence_of_operation&quot;</span><span class="token operator">:</span> <span class="token string">&quot;VALUE&quot;</span>       <span class="token comment">// Possible values: see table below; leave empty to read</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><table><thead><tr><th>Values</th><th>Possible Values of SystemMode</th></tr></thead><tbody><tr><td><code>cooling only</code></td><td>Heat and Emergency are not possible</td></tr><tr><td><code>cooling with reheat</code></td><td>Heat and Emergency are not possible</td></tr><tr><td><code>heating only</code></td><td>Cool and precooling are not possible</td></tr><tr><td><code>heating with reheat</code></td><td>Cool and precooling are not possible</td></tr><tr><td><code>cooling and heating 4-pipes</code></td><td>All modes are possible</td></tr><tr><td><code>cooling and heating 4-pipes with reheat</code></td><td>All modes are possible</td></tr></tbody></table><p>Get or set system mode</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token punctuation">{</span>\n    <span class="token string-property property">&quot;system_mode&quot;</span><span class="token operator">:</span> <span class="token string">&quot;VALUE&quot;</span>       <span class="token comment">// Possible values: see table below; leave empty to read</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><table><thead><tr><th>Values</th></tr></thead><tbody><tr><td><code>off</code></td></tr><tr><td><code>auto</code></td></tr><tr><td><code>cool</code></td></tr><tr><td><code>heat</code></td></tr><tr><td><code>emergency heating</code></td></tr><tr><td><code>precooling</code></td></tr><tr><td><code>fan_only</code></td></tr><tr><td><code>dry</code></td></tr><tr><td><code>sleep</code></td></tr></tbody></table><p>Get running state</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token punctuation">{</span>\n    <span class="token string-property property">&quot;running_state&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span>       <span class="token comment">// leave empty when reading</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Possible values:</p><table><thead><tr><th>Values</th></tr></thead><tbody><tr><td><code>off</code></td></tr><tr><td><code>cool</code></td></tr><tr><td><code>heat</code></td></tr></tbody></table><p>Valve position / heating demand</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{\n    &quot;pi_heating_demand&quot;: 0       // leave empty when reading\n}\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Will report the valve position or heating amount depending on device. 0=min, 255=max</p><p>Get or set weekly schedule</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token punctuation">{</span>\n    <span class="token string-property property">&quot;weekly_schedule&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n    <span class="token string-property property">&quot;TemperatureSetpointHold&quot;</span><span class="token operator">:</span> <span class="token string">&quot;0x00&quot;</span><span class="token punctuation">,</span>                <span class="token comment">// 0x00 setpoint hold off or 0x01 on</span>\n    <span class="token string-property property">&quot;TemperatureSetpointHoldDuration&quot;</span><span class="token operator">:</span> <span class="token string">&quot;0xffff&quot;</span><span class="token punctuation">,</span>      <span class="token comment">// 0xffff to 0x05a0</span>\n    <span class="token string-property property">&quot;ThermostatProgrammingOperationMode&quot;</span><span class="token operator">:</span> <span class="token string">&quot;00xxxxxx&quot;</span>  <span class="token comment">//see table below</span>\n    <span class="token punctuation">}</span>                                                   <span class="token comment">// leave empty to read</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><table><thead><tr><th>Attribute Value</th><th>Description</th></tr></thead><tbody><tr><td>0</td><td>0 – Simple/setpoint mode. This mode means the thermostat setpoint is altered only by manual up/down changes at the thermostat or remotely, not by internal schedule programming. <br> 1 – Schedule programming mode. This enables or disables any programmed weekly schedule configurations. <br> Note: It does not clear or delete previous weekly schedule programming configurations.</td></tr><tr><td>1</td><td>0 - Auto/recovery mode set to OFF <br> 1 – Auto/recovery mode set to ON</td></tr><tr><td>2</td><td>0 – Economy/EnergyStar mode set to OFF <br> 1 – Economy/EnergyStar mode set to ON</td></tr></tbody></table><p>Clear weekly schedule</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>\n    <span class="token property">&quot;clear_weekly_schedule&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>',38),u=(0,s._)("h2",{id:"options",tabindex:"-1"},[(0,s._)("a",{class:"header-anchor",href:"#options","aria-hidden":"true"},"#"),(0,s.Uk)(" Options")],-1),m=(0,s.uE)('<ul><li><p><code>thermostat_unit</code>: Controls the temperature unit of the thermostat (default celsius). The value must be one of <code>celsius</code>, <code>fahrenheit</code></p></li><li><p><code>legacy</code>: Set to false to disable the legacy integration (highly recommended), will change structure of the published payload (default true). The value must be <code>true</code> or <code>false</code></p></li></ul><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="battery-numeric" tabindex="-1"><a class="header-anchor" href="#battery-numeric" aria-hidden="true">#</a> Battery (numeric)</h3><p>Remaining battery in %, can take up to 24 hours before reported.. Value can be found in the published state on the <code>battery</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>100</code>. The unit of this value is <code>%</code>.</p><h3 id="climate" tabindex="-1"><a class="header-anchor" href="#climate" aria-hidden="true">#</a> Climate</h3><p>This climate device supports the following features: <code>occupied_heating_setpoint</code>, <code>local_temperature</code>, <code>system_mode</code>, <code>running_state</code>, <code>local_temperature_calibration</code>, <code>pi_heating_demand</code>.</p><ul><li><code>occupied_heating_setpoint</code>: Temperature setpoint. To control publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;occupied_heating_setpoint&quot;: VALUE}</code> where <code>VALUE</code> is the °C between <code>7</code> and <code>30</code>. To read send a message to <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;occupied_heating_setpoint&quot;: &quot;&quot;}</code>.</li><li><code>pi_heating_demand</code>: Position of the valve (= demanded heat) where 0% is fully closed and 100% is fully open. To control publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;pi_heating_demand&quot;: VALUE}</code> where <code>VALUE</code> is the % between <code>0</code> and <code>100</code>. To read send a message to <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;pi_heating_demand&quot;: &quot;&quot;}</code>.</li><li><code>local_temperature</code>: Current temperature measured on the device (in °C). To read send a message to <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;local_temperature&quot;: &quot;&quot;}</code>.</li><li><code>system_mode</code>: Mode of this device. To control publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;system_mode&quot;: VALUE}</code> where <code>VALUE</code> is one of: <code>off</code>, <code>auto</code>, <code>heat</code>. To read send a message to <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;system_mode&quot;: &quot;&quot;}</code>.</li><li><code>running_state</code>: The current running state. Possible values are: <code>idle</code>, <code>heat</code>. To read send a message to <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;running_state&quot;: &quot;&quot;}</code>.</li><li><code>local_temperature_calibration</code>: Offset to be used in the local_temperature. To control publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;local_temperature_calibration&quot;: VALUE}.</code>To read send a message to <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;local_temperature&quot;: &quot;&quot;}</code>.The minimal value is <code>-12.8</code> and the maximum value is <code>12.7</code> with a step size of <code>0.1</code>.</li></ul><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',9),h={},v=(0,a(983744).Z)(h,[["render",function(e,t){const a=(0,s.up)("RouterLink");return(0,s.wg)(),(0,s.iD)("div",null,[(0,s.kq)(" !!!! "),(0,s.kq)(" ATTENTION: This file is auto-generated through docgen! "),(0,s.kq)(' You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". '),(0,s.kq)(' Do not use h1 or h2 heading within "## Notes"-Section. '),(0,s.kq)(" !!!! "),n,(0,s._)("table",null,[o,(0,s._)("tbody",null,[i,(0,s._)("tr",null,[d,(0,s._)("td",null,[(0,s.Wm)(a,{to:"/supported-devices/#v=eCozy"},{default:(0,s.w5)((()=>[(0,s.Uk)("eCozy")])),_:1})])]),r,l,c])]),(0,s.kq)(' Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. '),p,(0,s.kq)("\nComing soon:\nGet weekly schedule response\ntz.thermostat_weekly_schedule_rsp\nGet relay status log\ntz.thermostat_relay_status_log\nGet relay status log response\ntz.thermostat_relay_status_log_rsp\n"),(0,s.kq)(" Notes END: Do not edit below this line "),u,(0,s._)("p",null,[(0,s._)("em",null,[(0,s.Wm)(a,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,s.w5)((()=>[(0,s.Uk)("How to use device type specific configuration")])),_:1})])]),m])}]])}}]);