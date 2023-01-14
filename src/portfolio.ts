import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { PortfolioItem } from './portfolio-item';
import { project } from './interfaces';
import { GITHUB_REPO_API } from './constants';

declare global {
    interface HTMLElementTagNameMap {
        'portfolio-item': PortfolioItem;
    }
}

@customElement('aa-portfolio')
export class Portfolio extends LitElement {

    @property()
    projects: project[] = Array(3).fill(
        {
            name: "",
            description: "",
            topics: [],
            url: ""
        }
    )

    override connectedCallback() {
        super.connectedCallback()
        this.fetchProjects()
    }

    async fetchProjects() {
        let response = await fetch(GITHUB_REPO_API);
        if (response.ok) {
            let json = await response.json();
            let _projects = []
            for (let ii = 0; ii < 3; ii++) {
                _projects.push({
                    "name": json[ii]?.name,
                    "description": json[ii]?.description,
                    "topics": json[ii]?.topics,
                    "url": json[ii]?.html_url,
                })
            }
            this.projects = _projects;
        } else if (response.status === 403) {
            setTimeout(this.fetchProjects, 1000 * 60)
        }
    }

    override render() {
        return html`
         ${this.projects.map((_project: project) => html`
				<portfolio-item .project=${_project} 
                @click=${() => {
                if (_project.url)
                    window.open(_project.url, '_blank')
            }
            }></portfolio-item>
			`)}
        `};
}
