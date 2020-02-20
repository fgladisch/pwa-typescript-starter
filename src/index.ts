import { LitElement, html, customElement } from "lit-element";
import "./my-element";

@customElement("my-app")
export class MyApp extends LitElement {
  render() {
    return html`
      <my-element message="LitElement rocks!"></my-element>
    `;
  }
}
