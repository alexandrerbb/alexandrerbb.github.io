import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { techIcon } from './interfaces';

/**
 * @attr tech
 * @attr i
 */
@customElement('tech-icon')
export class TechIcon extends LitElement {

    @property({ attribute: "src" }) tech!: techIcon;
    @property({ type: Number, attribute: "i" }) index!: number;

    static override styles = css`

    @keyframes fadein {
        0% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }

    :host{
        margin: 0 1rem 1rem 0em;
    }
    img{
        height:1.5rem;
        max-width: 2.5rem;
        object-fit: contain;
        user-select: none;
        
    }
    img.dark-supported{
        -webkit-filter: invert(var(--filter-invert));
        filter: invert(--filter-invert);
        transition: filter 500ms ease-out;
    }
    p {
        display:block;
        margin: .5rem auto 0;
        font-size: .75rem;
        text-align: center;
        font-weight: var(--link-weight);
    }
    .tech{
        display: inline-block;
        border-radius: 100%;
        width: 6rem;
        height: 6rem;
        border: 1px solid rgba(var(--border-color));
        box-shadow: rgba(50, 50, 50, 0.125) 0px 2px 5px -1px, rgba(0, 0, 0, 0.25) 0px 1px 3px -1px;
        opacity:0;
        animation-name: fadein;
        animation-duration: 1s;
        animation-timing-function: ease-in;
        animation-iteration-count: 1;
        animation-fill-mode: forwards;
    }

    .wrapper{
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
    }
	`

    override render() {
        return html`
        <div class="tech" style="animation-delay: ${(this.index * 150 + 'ms') as string}">
            <div class="wrapper">
                <img src="${this.tech.src}" alt="${this.tech.name}" 
                class=${this.tech.filterOnDarkTheme ? "dark-supported" : ""}>
                <p class="">${this.tech.name}</p>
            </div>
        </div>
		
    `;
    }
}