import { LitElement, html, css } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { TechIcon } from './tech-icon';
import { TECHS } from './constants';
import { list, techIcon } from './interfaces';
import { RecursiveList } from './recursivelist';

declare global {
    interface HTMLElementTagNameMap {
        'tech-icon': TechIcon;
        'recursive-list': RecursiveList;
    }
}

@customElement('aa-techs')
export class Techs extends LitElement {

    @state() index = 0;

    static override styles = css`
        section{
            margin: 0 2rem 1rem;
            padding: 0 0 1rem;
            border-radius: 0.675rem;
            flex-grow: 1;
        }
        .tech-icons{
            display: flex;
        }
        h4{
            font-weight: 400;
            width: 100%;
        }
        section.grow{
            display: flex;
            flex-wrap: wrap;
        }
        section.grow > recursive-list {
            margin-left : 2rem;
        }
        @media (max-width: 1199.98px) {
            section{
                width: 40vw;
                margin: 0 0 1rem;
            }
        }
        @media (max-width: 991.98px) {
            section > h4{
                text-align: center;
            }
            section.grow{
                display: block;
                flex-wrap: unset;
            }
            section.grow > recursive-list {
                margin: 0;
            }
        }
        @media (max-width: 767.98px) {
            section{
                width: 100%;
            }
            .tech-icons{
                justify-content: center;
            }
            section > h4{
                text-align: start;
            }
        }
    `

    override render() {
        return html`
        ${TECHS.map((_tech) => html`
            <section class=${_tech.grow ? "grow" : ""}>
                <h4>${_tech.category}</h4>
                <div class="tech-icons">
                ${_tech.techIcons?.map((_techIcon) => html`
                    <tech-icon .tech=${_techIcon as techIcon} i=${this.index++}></tech-icon>
                `)}
                </div>
                <recursive-list .list=${_tech.infos as list}></recursive-list>
            </section>
		`)}`
    };

}