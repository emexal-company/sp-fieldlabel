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
        this.style = false;
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
], Fieldlabel.prototype, "style", void 0);
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