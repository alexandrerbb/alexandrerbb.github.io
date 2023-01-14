import { customElement, property } from 'lit/decorators.js';
import { LitElement, html, css, nothing } from 'lit';
import { list } from './interfaces';

declare global {
    interface HTMLElementTagNameMap {
        'recursive-list': RecursiveList;
    }
}

@customElement('recursive-list')
export class RecursiveList extends LitElement {

    @property({ attribute: "list" }) list!: list;

    static override styles = css`
        li{
            font-size: .75rem;
            margin: .25rem 0;
        }
        ul{
            margin : 0;
            padding-inline-start: 1.5rem;
            color: var(--text-muted);
            list-style: square;
        }
        `

    override render() {
        return html`
        <ul>    
            ${this.list?.map((_item) => html`
                <li>
                    ${typeof _item === "string" ? _item :
                html`
                        ${(_item.name) ?
                        html`
                                ${_item.name}
                                <recursive-list .list=${_item.infos as list}></recursive-list>
                            `
                        : nothing}
                `
            }
                </li>
            `)}
        </ul>
        `
    }
}