// Import font awesome stylesheet.
import '@fortawesome/fontawesome-svg-core/styles.css';

// Turns off auto adding the style sheet.
// This is to prevent fa icons from loading and then resizing
// when the css is loaded. Instead, we load the css before the
// page and then disable auto adding the css.
import {config} from '@fortawesome/fontawesome-svg-core';
config.autoAddCss = false;
