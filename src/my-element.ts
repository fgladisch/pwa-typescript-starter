/**
 * Import LitElement base class, html helper function,
 * and TypeScript decorators
 **/
import { LitElement, html, customElement, property, css } from "lit-element";

/**
 * Use the customElement decorator to define your class as
 * a custom element. Registers <my-element> as an HTML tag.
 */
@customElement("my-element")
export class MyElement extends LitElement {
  /**
   * Create an observed property. Triggers update on change.
   */
  @property()
  message = "No message! :-(";

  @property({ type: Boolean })
  clicked = false;

  static get styles() {
    return css`
      div {
        display: inline-block;
        background: #fb8c00;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
        border: none;
        border-radius: 4px;
        margin: 10px;
        padding: 10px;
        cursor: pointer;
      }
    `;
  }

  handleClick() {
    this.clicked = !this.clicked;
  }

  /**
   * Implement `render` to define a template for your element.
   */
  render() {
    /**
     * Use JavaScript expressions to include property values in
     * the element template.
     */
    return html`
      <div @click="${this.handleClick}">${this.message}</div>
      ${this.clicked
        ? html`
            <span>You clicked!</span>
          `
        : html`
            <span>← Click here!</span>
          `}
    `;
  }
}
