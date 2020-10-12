import { html } from 'lit-element';
import { classMap } from 'lit-html/directives/class-map.js';
import { styleMap } from 'lit-html/directives/style-map.js';
export default function standardTemplate() {
    const widthStyles = {
        'width': `${this.width}px`,
    };
    const classes = {
        'spectrum-FieldLabel--left': this.left,
        'spectrum-FieldLabel--right': this.right,
        'is-disabled': this.disabled,
    };
    return html `
        <label for="${this.label}" class="spectrum-FieldLabel ${classMap(classes)}" style="${styleMap(widthStyles)}">${this.label}</label>
        <slot></slot>
   `;
}
// svg css problem
//# sourceMappingURL=fieldlabel.template.js.map