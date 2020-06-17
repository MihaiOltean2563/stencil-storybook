// import { ColorsComponent } from './colors.component';
// import { moduleMetadata } from '@storybook/angular';
// import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

// export default {
//   title: 'Styleguide|Colors',
//   component: ColorsComponent,
//   parameters: {
//     componentSubtitle: 
//       `These are the "Brand" colors, mostly used for interactive elements (e.g., buttons). 
//       Each color in this section has 5 color variations (base color + 2 lighter versions + 2 darker versions).
//       Each color is defined using the defineColorHSL mixin.`,
//     docs: {
//       iframeHeight: 400
//     },
//     notes: 'TODO - Please add toggle functionality for each of these color rows to shrink/expand to a 50px - 100px divs'
//   },
//   decorators: [
//     moduleMetadata({
//       schemas: [CUSTOM_ELEMENTS_SCHEMA],
//       declarations: [ColorsComponent]
//     })
//   ]
// };

import { storiesOf } from '@storybook/html';

import readme from './readme.md';

storiesOf('Styleguide|Colors', module).add(
  'Default',
    () => '<frp-colors />',
    {
        notes: {
        markdown: readme
        },
    }
);
