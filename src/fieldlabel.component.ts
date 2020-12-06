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

import { customElement,  property } from 'lit-element';

import { Base } from '@spectrum/sp-base';

import labelStyles from './fieldlabel.styles';
import standardTemplate from './fieldlabel.template';

@customElement('sp-fieldlabel')
export class Fieldlabel extends Base {
  public static componentStyles = [labelStyles];

  @property({ type: String })  public label: string = '';
  @property({ type: Boolean }) public left: boolean = false;
  @property({ type: Boolean }) public input: boolean = false;
  @property({ type: Boolean }) public right: boolean = false;
  @property({ type: Boolean }) public disabled: boolean = false;
  @property({ type: Boolean }) public textarea: boolean = false;
  @property({ type: Boolean }) public svg: boolean = false;
  @property({ type: String })  public width: string = '';
  @property({ type: String })  public placeholder: string = '';

  protected render() {
    return standardTemplate.call(this);
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'sp-fieldlabel': Fieldlabel;
  }
}
