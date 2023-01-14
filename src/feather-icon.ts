import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { FEATHER_ICONS } from './constants';

@customElement('feather-icon')
export class FeatherIcon extends LitElement {

    static override styles = css`
    :host {
        display: inline-block;
    }
    svg {
        width:100%;
        height:100%;
        stroke: currentColor;
        stroke-width: 1.75;
        stroke-linecap: round;
        stroke-linejoin: round;
        fill: none;
        display: inline-block;
        vertical-align: middle;
    }
    `

    @property({ attribute: "icon", type: String }) icon!: string;

    override render() {
        return html`
        <svg>
			<use href="${FEATHER_ICONS}#${this.icon}"/>
		</svg>

        `
    }

}