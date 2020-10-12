/**
    @license
    Copyright 2020 EMEXAL All Rights Reserved.
    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at
        http://www.apache.org/licenses/LICENSE-2.0
    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
*/

import { html } from 'lit-element';
import { DemoFieldlabel } from './demo-fieldlabel.component';

import '@spectrum/sp-fieldlabel';
import '@spectrum/sp-container';


export default function template(this: DemoFieldlabel) {
  return html`
  <sp-container>

  <sp-rule medium label="Standard"></sp-rule>

  <sp-demo width="300">
    <pre><sp-fieldlabel label="Life Story">
    <sp-textfield placeholder="Enter your life story"></sp-textfield>
</sp-fieldlabel></pre>
  </sp-demo>

  <sp-demo width="300">
    <pre><sp-fieldlabel disabled label="Life Story">
    <sp-textfield disabled placeholder="Enter your life story"></sp-textfield>
</sp-fieldlabel></pre>
  </sp-demo>

  <sp-rule medium label="Left"></sp-rule>

  <sp-demo width="300">
    <pre><sp-fieldlabel left width="72" label="Life Story">
    <sp-textarea placeholder="Enter your life story"></sp-textarea>
</sp-fieldlabel></pre>
  </sp-demo>

  <sp-rule medium label="Right"></sp-rule>

  <sp-demo width="300">
    <pre><sp-fieldlabel right width="72" label="Life Story">
    <sp-textarea placeholder="Enter your life story"></sp-textarea>
</sp-fieldlabel></pre>
  </sp-demo>

  <sp-rule medium label="Required"></sp-rule>

  <sp-demo width="300">
    <pre><sp-fieldlabel label="Life Story">
    <sp-icon name="Asterisk" class="spectrum-FieldLabel-requiredIcon"></sp-icon>
    <sp-textfield placeholder="Enter your life story"></sp-textfield>
</sp-fieldlabel></pre>
  </sp-demo>

  <sp-demo width="300">
    <pre><sp-fieldlabel label="Life Story (Required)">
    <sp-textfield placeholder="Enter your life story"></sp-textfield>
</sp-fieldlabel></pre>
  </sp-demo>

  <sp-demo width="300">
    <pre><sp-fieldlabel left width="72" label="Life Story">
    <sp-icon name="Asterisk" class="spectrum-FieldLabel-requiredIcon"></sp-icon>
    <sp-textarea placeholder="Enter your life story"></sp-textarea>
</sp-fieldlabel></pre>
  </sp-demo>

  <sp-demo width="300">
    <pre><sp-fieldlabel disabled label="Life Story">
    <sp-icon name="Asterisk" class="spectrum-FieldLabel-requiredIcon"></sp-icon>
    <sp-textfield disabled placeholder="Enter your life story"></sp-textfield>
</sp-fieldlabel></pre>

  </sp-container>
  `;
  
}
