import { LitElement, html, css, nothing } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { social } from './interfaces';
import { FeatherIcon } from './feather-icon';

declare global {
	interface HTMLElementTagNameMap {
		'feather-icon': FeatherIcon;
	}
}

/**
 * @attr social
 */
@customElement('aa-social')
export class Social extends LitElement {

	@property({ attribute: "social" }) social!: social;

	@state()
	hover: boolean = false;

	static override styles = css`
	a{
		text-decoration:none;
	}
	.icon-link{
		margin: 0 0 0 .125rem;
		color:#ffffff;
		border-radius: .5rem;
		height:2.5rem;
		min-width: 2.5rem;
		display: inline-block;
		text-align: center;
		transition: all 200ms ease-in-out;
		font-size: .75rem;
		cursor: pointer;
	}
	.icon-link.named{
		padding: 0 .5rem;
	}
	.icon-link:hover{
		background-color:rgba(255,255,255, .05);
		box-shadow: rgba(50, 50, 50, 0.125) 0px 2px 5px -1px, rgba(0, 0, 0, 0.25) 0px 1px 3px -1px;
	}

	.tooltip{
		position: absolute;
		border-radius: 2px;
		margin-top: 4rem;
		margin-left: -1.5rem;
		color:var(--text-color);
		padding: .5rem 0;
		font-size: .75rem;
		transform: translateX(-50%);
		letter-spacing:.5px;
		font-weight:var(--link-weight);
	}

	.icon-name{
		vertical-align: middle;
		margin-top:.625rem;
		display: inline-block;
		font-weight: 300;
		margin-left: 0.375rem;
	}

	feather-icon{
		margin-top:.625rem;
		width: 1.25rem;
        height: 1.25rem;
	}

	@media (max-width: 767.98px) { 
		.tooltip{
			display:none;
		}
	}
	`

	override render() {
		return html`
        <a class="icon-link ${this.social.displayName ? "named" : ""}" 
		@click=${() => {
				if (this.social.url) window.open(this.social.url, '_blank')
			}}
		@mouseover=${() => this.hover = true} 
		@mouseleave=${() => this.hover = false}
		>

			<feather-icon .icon=${this.social.icon}></feather-icon>

			${this.social.displayName ? html`
				<span class="icon-name">${this.social.name}</span>
			` : nothing}

        </a>
		${this.hover && !this.social.displayName ? html`
			<span class="tooltip">
				${this.social.name}
			</span>
		` : nothing
			}
    `;
	}
}