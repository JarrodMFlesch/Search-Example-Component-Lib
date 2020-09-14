import { Component, Prop, Event, EventEmitter, h } from '@stencil/core';

const componentClass = 'tile-image';

@Component({
  tag: 'tile-image',
  styleUrl: 'tile-image.scss',
  shadow: true,
})

export class TileImage {
  @Prop() src: string = '';
  @Prop() alt: string = '';

  @Event({eventName: 'tile-image-click'}) imageClickHandler: EventEmitter;

  handleOnClick() {
    this.imageClickHandler.emit({ src: this.src });
  }

  render() {
    return (
      <div class={`${componentClass}__wrapper`} onClick={() => this.handleOnClick()}>
        <img class={`${componentClass}__image`} src={this.src} alt={this.alt}></img>
      </div>
    );
  }
}
