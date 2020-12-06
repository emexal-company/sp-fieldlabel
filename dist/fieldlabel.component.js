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
import { __decorate, __metadata } from "tslib";
import { customElement, property } from 'lit-element';
import { Base } from '@spectrum/sp-base';
import labelStyles from './fieldlabel.styles';
import standardTemplate from './fieldlabel.template';
let Fieldlabel = class Fieldlabel extends Base {
    constructor() {
        super(...arguments);
        this.label = '';
        this.left = false;
        this.input = false;
        this.right = false;
        this.disabled = false;
        this.textarea = false;
        this.svg = false;
        this.width = '';
        this.placeholder = '';
    }
    render() {
        return standardTemplate.call(this);
    }
};
Fieldlabel.componentStyles = [labelStyles];
__decorate([
    property({ type: String }),
    __metadata("design:type", String)
], Fieldlabel.prototype, "label", void 0);
__decorate([
    property({ type: Boolean }),
    __metadata("design:type", Boolean)
], Fieldlabel.prototype, "left", void 0);
__decorate([
    property({ type: Boolean }),
    __metadata("design:type", Boolean)
], Fieldlabel.prototype, "input", void 0);
__decorate([
    property({ type: Boolean }),
    __metadata("design:type", Boolean)
], Fieldlabel.prototype, "right", void 0);
__decorate([
    property({ type: Boolean }),
    __metadata("design:type", Boolean)
], Fieldlabel.prototype, "disabled", void 0);
__decorate([
    property({ type: Boolean }),
    __metadata("design:type", Boolean)
], Fieldlabel.prototype, "textarea", void 0);
__decorate([
    property({ type: Boolean }),
    __metadata("design:type", Boolean)
], Fieldlabel.prototype, "svg", void 0);
__decorate([
    property({ type: String }),
    __metadata("design:type", String)
], Fieldlabel.prototype, "width", void 0);
__decorate([
    property({ type: String }),
    __metadata("design:type", String)
], Fieldlabel.prototype, "placeholder", void 0);
Fieldlabel = __decorate([
    customElement('sp-fieldlabel')
], Fieldlabel);
export { Fieldlabel };
//# sourceMappingURL=fieldlabel.component.js.map