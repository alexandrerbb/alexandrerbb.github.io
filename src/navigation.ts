import { LitElement, html, css } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { Social } from './social';
import { SOCIALS, THEMES } from './constants';
import { social } from './interfaces';


declare global {
	interface HTMLElementTagNameMap {
		'aa-social': Social;
	}
}


@customElement('aa-navigation')
export class Navigation extends LitElement {

	@state()
	theme = 0;

	@state()
	toggleMenu = false;

	constructor() {
		super();
		let preferredTheme;
		if (window.matchMedia("(prefers-color-scheme: dark)").matches) preferredTheme = 1
		else preferredTheme = 0
		this.theme = parseInt(localStorage.getItem('dark') || `${preferredTheme}`)
		this.updateTheme();
	}

	override connectedCallback() {
		super.connectedCallback()
		addEventListener("resize", () => this.toggleMenu = false);
	}

	private updateTheme() {
		document.documentElement.setAttribute('data-theme', THEMES[this.theme].name);
	}

	static override styles = css`
		.container{
			top:0;
			width: 100%;
			display: flex;
			justify-content: space-between;
			align-items: center;
			max-width: 1280px;
			padding: 1.25rem 2rem;
		}
		.navigation-title{
			font-weight: 300;
			display: inline-flex;
			margin-left: .5rem;
		}
		.links{
			margin-left:2rem; 
			display:inline-block;
		}
		.title-container{
			display: flex;
			align-items: center;
			justify-content: center;
		}
		#toggleMenu {
			display: none;
		}
		@media (max-width: 767.98px) { 
			#toggleMenu {
			display: block;
			}
			.container{
				padding: 1.25rem .5rem;
				flex-direction: column;
				justify-content: start;
				align-items: start;
			}
			.collapse{
				display: none;
				padding:1rem 0 1rem 2.5rem;
			}
			.links, .collapse.active{
				margin-left:0; 
				display:flex;
				flex-direction: column;
			}
			.collapse.active{
				height: 100vh;
			}
			aa-social{
				margin: 1.5rem 0 1rem;
			}
		}
	`
	override render() {
		return html`
			<div class="container">
				<div class="title-container">

					<aa-social id="toggleMenu" 
					.social=${{
				name: "Toggle Menu",
				icon: this.toggleMenu ? "x" : "plus",
			} as social}
					@click=${() => {
				document.body.style.overflowY = this.toggleMenu as Boolean ? 'visible' : 'hidden';
				window.scrollTo(0, 0)
				this.toggleMenu = !this.toggleMenu;
			}
			}
					style="margin:0"
					></aa-social>

					<div class="navigation-title" >
						alexandre a
					</div>

				</div>	
				<div class="collapse ${this.toggleMenu ? 'active' : ''}">

					<aa-social 
					.social=${{
				name: `switch to ${THEMES[1 - this.theme].name} mode.`,
				icon: THEMES[1 - this.theme].icon,
				displayName: this.toggleMenu
			} as social
			} @click=${() => {
				this.theme = 1 - this.theme;
				this.updateTheme();
				localStorage.setItem('dark', this.theme.toString());
			}
			}
					></aa-social>

					<div class="links">

					${SOCIALS.map((_link) => html`
						<aa-social 
						.social=${{
					name: _link.name,
					url: _link.url,
					icon: _link.icon,
					displayName: _link.displayName || this.toggleMenu,
				}}
						></aa-social>
					`
			)}

					</div>
				</div>
			</div>
    `;
	}
}