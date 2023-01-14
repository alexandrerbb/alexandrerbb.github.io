import { LitElement, html, css, nothing } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { project } from './interfaces';

/**
 * @attr project
 */
@customElement('portfolio-item')
export class PortfolioItem extends LitElement {

    @property({ attribute: "project" }) project!: project;
    static override styles = css`

        @keyframes loading {
            0% {
                background-color: rgba(var(--border-color));
            }
            100% {
                background-color: rgba(var(--gray));
            }
        }
        :host {
            display: inline-block;
            border: 1px solid rgba(var(--border-color));
            width: 22rem;
            min-height: 8rem;
            margin: 0 1rem 1rem 0;
            border-radius: .675rem;
            box-shadow: rgba(50, 50, 50, 0.125) 0px 2px 5px -1px, rgba(0, 0, 0, 0.25) 0px 1px 3px -1px;
        }
        @media (max-width: 767.98px) {
            :host {
                margin-right: 0;
            }
        }
        .loading{
            animation: loading ease-in-out 500ms infinite alternate;
        }
        .loading.name{
            width: 60%;
        }
        .name{
            display: inline-block;
            height: 1rem;
            margin-bottom: 1rem;
            font-weight:600;
        }
        article{
            display: inline-block;
        }
        .topics{
            margin-top: 1rem;
        }
        .description{
            font-size: .875rem;
            font-weight:400;
            letter-spacing:.25px;
            color: var(--text-muted)
        }
        .topic{
            border-radius: .25rem;
            padding : .25rem .5rem;
            display: inline-block;
            font-size:.675rem;
            font-weight:600;
            margin: 0 .25rem .25rem 0;
        }
        article{
            display: block;
            padding: 1.5rem;
        }
        article.active{
            cursor:pointer;
        }
    `

    override render() {
        return html`
        <article class=${(this.project.name && this.project.url) ? "active" : ""}>
            <span class="name ${this.project.name ? "" : "loading"}">${this.project.name}</span><br>
            <span class="description ${this.project.description ? "" : "loading"}">${this.project.description}</span>
            <div class="topics">
                ${this.project.topics ?
                this.project.topics.map((_topic: string) => html`
                    <span class="topic">${_topic}</span>
                    `)
                : nothing
            }
            </div>
        </article>
        `};
}
