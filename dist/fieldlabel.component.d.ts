import { Base } from '@spectrum/sp-base';
export declare class Fieldlabel extends Base {
    static componentStyles: import("lit-element").CSSResult[];
    label: string;
    left: boolean;
    input: boolean;
    right: boolean;
    disabled: boolean;
    textarea: boolean;
    style: boolean;
    svg: boolean;
    width: string;
    placeholder: string;
    protected render(): import("lit-element").TemplateResult;
}
declare global {
    interface HTMLElementTagNameMap {
        'sp-fieldlabel': Fieldlabel;
    }
}
