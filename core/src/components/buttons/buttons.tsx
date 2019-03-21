import { Component, ComponentInterface, Prop } from '@stencil/core';

import { Mode } from '../../interface';

@Component({
  tag: 'ion-buttons',
  styleUrls: {
    ios: 'buttons.ios.scss',
    md: 'buttons.md.scss'
  },
  scoped: true,
})
export class Buttons implements ComponentInterface {
  mode!: Mode;

  hostData() {
    return {
      class: {
        [`buttons`]: true,
        [`buttons-${this.mode}`]: true
      }
    };
  }
}
