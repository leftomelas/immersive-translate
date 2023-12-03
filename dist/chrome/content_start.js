(()=>{var dr=Object.defineProperty;var pr=(e,t)=>{for(var n in t)dr(e,n,{get:t[n],enumerable:!0})};var L={BUILD_TIME:"2023-12-03T10:44:36.000Z",VERSION:"0.12.3",PROD:"1",REDIRECT_URL:"https://dash.immersivetranslate.com/auth-done/",PROD_API:"1",BETA:"0",IMMERSIVE_TRANSLATE_INJECTED_CSS:`:root {
  --immersive-translate-theme-underline-borderColor: #72ece9;
  --immersive-translate-theme-nativeUnderline-borderColor: #72ece9;
  --immersive-translate-theme-nativeDashed-borderColor: #72ece9;
  --immersive-translate-theme-nativeDotted-borderColor: #72ece9;
  --immersive-translate-theme-highlight-backgroundColor: #ffff00;
  --immersive-translate-theme-dashed-borderColor: #59c1bd;
  --immersive-translate-theme-blockquote-borderColor: #cc3355;
  --immersive-translate-theme-thinDashed-borderColor: #ff374f;
  --immersive-translate-theme-dashedBorder-borderColor: #94a3b8;
  --immersive-translate-theme-dashedBorder-borderRadius: 0;
  --immersive-translate-theme-solidBorder-borderColor: #94a3b8;
  --immersive-translate-theme-solidBorder-borderRadius: 0;
  --immersive-translate-theme-dotted-borderColor: #94a3b8;
  --immersive-translate-theme-wavy-borderColor: #72ece9;
  --immersive-translate-theme-dividingLine-borderColor: #94a3b8;
  --immersive-translate-theme-grey-textColor: #2f4f4f;
  --immersive-translate-theme-marker-backgroundColor: #fbda41;
  --immersive-translate-theme-marker-backgroundColor-rgb: 251, 218, 65;
  --immersive-translate-theme-marker2-backgroundColor: #ffff00;
  --immersive-translate-theme-opacity-opacity: 10;
}

.immersive-translate-target-translation-pre-whitespace {
  white-space: pre-wrap !important;
}

.immersive-translate-pdf-target-container {
  position: absolute;
  background-color: #fff;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica,
    sans-serif;
  top: 0;
  width: 600px;
  height: 100%;
  z-index: 2;
  line-height: 1.3;
  font-size: 16px;
}

.immersive-translate-pdf-target-container .immersive-translate-target-wrapper {
  color: rgb(0, 0, 0);
  white-space: normal;
  position: absolute;
}

.immersive-translate-pdf-target-container .immersive-translate-target-wrapper font {
  color: inherit;
  white-space: inherit;
  position: unset;
}

.immersive-translate-state-dual>br {
  display: none;
}

.immersive-translate-target-translation-block-wrapper {
  margin: 8px 0 !important;
  display: inline-block;
}

.immersive-translate-target-translation-pdf-block-wrapper {
  margin: 0 !important;
  display: block;
}

.immersive-translate-target-translation-theme-grey-inner {
  color: var(--immersive-translate-theme-grey-textColor);
}


.immersive-translate-target-translation-theme-underline-inner {
  border-bottom: 1px solid var(--immersive-translate-theme-underline-borderColor) !important;
}

.immersive-translate-target-translation-theme-nativeUnderline-inner {
  text-decoration: underline var(--immersive-translate-theme-nativeUnderline-borderColor) !important;
}

.immersive-translate-target-translation-block-wrapper-theme-dashedBorder {
  border: 1px dashed var(--immersive-translate-theme-dashedBorder-borderColor) !important;
  border-radius: var(--immersive-translate-theme-dashedBorder-borderRadius) !important;
  padding: 6px;
  margin-top: 2px;
  display: block;
}

.immersive-translate-target-translation-inline-wrapper-theme-dashedBorder {
  border: 1px dashed var(--immersive-translate-theme-dashedBorder-borderColor) !important;
  border-radius: var(--immersive-translate-theme-dashedBorder-borderRadius) !important;
  padding: 2px;
}

.immersive-translate-target-translation-block-wrapper-theme-solidBorder {
  border: 1px solid var(--immersive-translate-theme-solidBorder-borderColor) !important;
  border-radius: var(--immersive-translate-theme-solidBorder-borderRadius) !important;
  padding: 6px;
  margin-top: 2px;
  display: block;
}

.immersive-translate-target-translation-inline-wrapper-theme-solidBorder {
  border: 1px solid var(--immersive-translate-theme-solidBorder-borderColor) !important;
  border-radius: var(--immersive-translate-theme-solidBorder-borderRadius) !important;
  padding: 2px;
}

.immersive-translate-target-translation-theme-nativeDashed-inner {
  text-decoration: dashed underline var(--immersive-translate-theme-nativeDashed-borderColor) !important;
}

.immersive-translate-target-translation-theme-thinDashed-inner {
  border-bottom: 1px dashed var(--immersive-translate-theme-thinDashed-borderColor) !important;
}

.immersive-translate-target-translation-theme-dotted-inner {
  background-image: linear-gradient(to right,
      var(--immersive-translate-theme-dotted-borderColor) 30%,
      rgba(255, 255, 255, 0) 0%);
  background-position: bottom;
  background-size: 5px 1px;
  background-repeat: repeat-x;
  padding-bottom: 3px;
}

.immersive-translate-target-translation-theme-nativeDotted-inner {
  text-decoration: dotted underline var(--immersive-translate-theme-nativeDotted-borderColor) !important;
}

.immersive-translate-target-translation-theme-wavy-inner {
  text-decoration: wavy underline var(--immersive-translate-theme-wavy-borderColor) !important;
}

.immersive-translate-target-translation-theme-dashed-inner {
  background: linear-gradient(to right,
      var(--immersive-translate-theme-dashed-borderColor) 0%,
      var(--immersive-translate-theme-dashed-borderColor) 50%,
      transparent 50%,
      transparent 100%) repeat-x left bottom;
  background-size: 8px 2px;
  padding-bottom: 2px;
}

.immersive-translate-target-translation-block-wrapper-theme-dividingLine::before {
  content: "";
  display: block;
  max-width: 80px;
  width: 10%;
  border-top: 1px dashed var(--immersive-translate-theme-dividingLine-borderColor);
  padding-top: 8px;
}

.immersive-translate-target-translation-inline-wrapper-theme-dividingLine::before {
  content: "";
  border-left: 1px dashed var(--immersive-translate-theme-dividingLine-borderColor);
  max-height: 16px;
  height: 16px;
  padding-left: 8px;
}

.immersive-translate-target-translation-theme-highlight-inner {
  background: var(--immersive-translate-theme-highlight-backgroundColor);
  box-decoration-break: clone;
  -webkit-box-decoration-break: clone;
}

.immersive-translate-target-translation-block-wrapper-theme-marker {
  line-height: 1.5em;
}

.immersive-translate-target-translation-theme-marker2-inner {
  font-weight: bold;
  text-shadow: 10px 0px 3px var(--immersive-translate-theme-marker2-backgroundColor),
    16px 3px 9px var(--immersive-translate-theme-marker2-backgroundColor),
    2px 0px 6px var(--immersive-translate-theme-marker2-backgroundColor),
    -12px 0px 12px var(--immersive-translate-theme-marker2-backgroundColor) !important;
}

.immersive-translate-target-translation-theme-marker-inner {
  /* TODO: add more texture */
  background: linear-gradient(to right,
      rgba(var(--immersive-translate-theme-marker-backgroundColor-rgb), 0.1),
      rgba(var(--immersive-translate-theme-marker-backgroundColor-rgb), 0.9) 3%,
      rgba(var(--immersive-translate-theme-marker-backgroundColor-rgb), 0.9) 35%,
      rgba(var(--immersive-translate-theme-marker-backgroundColor-rgb), 0.9) 70%,
      rgba(var(--immersive-translate-theme-marker-backgroundColor-rgb), 0.8) 95%,
      rgba(var(--immersive-translate-theme-marker-backgroundColor-rgb), 0.3));
  box-decoration-break: clone;
  -webkit-box-decoration-break: clone;
}

.immersive-translate-target-translation-theme-weakening {
  opacity: 0.618 !important;
}

.immersive-translate-target-translation-theme-italic {
  font-style: italic !important;
}

.immersive-translate-target-translation-theme-bold {
  font-weight: bold !important;
}

.immersive-translate-target-translation-block-wrapper-theme-paper {
  margin: 8px 0;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  padding: 16px 32px;
  display: block;
}

.immersive-translate-target-translation-block-wrapper-theme-blockquote {
  border-left: 4px solid var(--immersive-translate-theme-blockquote-borderColor) !important;
  padding-left: 12px !important;
  margin-top: 4px;
  margin-bottom: 4px;
  padding-top: 4px;
  padding-bottom: 4px;
  display: block;
}

.immersive-translate-target-translation-theme-mask-inner {
  filter: blur(5px) !important;
  transition: filter 0.3s ease !important;
  border-radius: 10px;
}

[data-immersive-translate-root-translation-theme="none"] .immersive-translate-target-translation-theme-mask-inner {
  filter: none !important;
}

[data-immersive-translate-root-translation-theme="mask"] .immersive-translate-target-inner {
  filter: blur(5px) !important;
  transition: filter 0.3s ease !important;
  border-radius: 10px;
}


/* opacity theme start */

.immersive-translate-target-translation-theme-opacity-inner {
  filter: opacity(calc(var(--immersive-translate-theme-opacity-opacity) * 1%)) !important;
  transition: filter 0.3s ease !important;
  border-radius: 10px;
}

[data-immersive-translate-root-translation-theme="none"] .immersive-translate-target-translation-theme-opacity-inner {
  filter: none !important;
}
[data-immersive-translate-root-translation-theme="opacity"] .immersive-translate-target-inner,.immersive-translate-target-translation-theme-opacity-inner:hover {
  filter: opacity(calc(var(--immersive-translate-theme-opacity-opacity) * 1%)) !important;
  transition: filter 0.3s ease !important;
  border-radius: 10px;
}

.immersive-translate-target-translation-theme-opacity-inner:hover {
  filter: none !important;
}


.immersive-translate-target-translation-theme-mask-inner:hover {
  filter: none !important;
}
[data-immersive-translate-root-translation-theme="opacity"] .immersive-translate-target-inner:hover {
  filter: none !important;
}


[data-immersive-translate-root-translation-theme="mask"] .immersive-translate-target-inner:hover {
  filter: none !important;
}

/* opacity theme end */

/* vertical css , please remain it in the last one. */
.immersive-translate-target-translation-vertical-block-wrapper {
  margin: 0px 8px !important;
}

.immersive-translate-text {
  font-size: 15px !important;
}

.immersive-translate-error-toast {
  position: fixed;
  top: 5%;
  z-index: 99999999;
  left: 0;
  right: 0;
  margin: auto;
  max-width: 300px;
  padding: 16px;
  border-radius: 12px;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

@media all and (min-width: 750px) {
  .immersive-translate-error-toast {
    max-width: 400px;
  }
}


.immersive-translate-clickable-button {
  cursor: pointer;
}

.immersive-translate-help-button {
  cursor: help;
}

.immersive-translate-loading-spinner {
  vertical-align: middle !important;
  width: 10px !important;
  height: 10px !important;
  display: inline-block !important;
  margin: 0 4px !important;
  border: 2px rgba(221, 244, 255, 0.6) solid !important;
  border-top: 2px rgba(0, 0, 0, 0.375) solid !important;
  border-left: 2px rgba(0, 0, 0, 0.375) solid !important;
  border-radius: 50% !important;
  padding: 0 !important;
  -webkit-animation: immersive-translate-loading-animation 0.6s infinite linear !important;
  animation: immersive-translate-loading-animation 0.6s infinite linear !important;
}

.immersive-translate-loading-text:before {
  content: "...";
}


/* dark mode for loading */

@media only screen and (prefers-color-scheme: dark) {
  .immersive-translate-loading {
    border: 2px rgba(255, 255, 255, 0.25) solid !important;
    border-top: 2px rgba(255, 255, 255, 1) solid !important;
  }
}

.immersive-translate-error-wrapper {
  position: relative;
  display: inline-flex;
  padding: 6px;
  margin: 0 12px;
}

.immersive-translate-tooltip {
  position: relative;
  display: inline-flex;
  /* little indicater to indicate it's hoverable */
}

.immersive-translate-tooltip-content {
  /* here's the magic */
  position: absolute;
  z-index: 100000000000;

  left: 50%;
  bottom: 0;
  transform: translate(-50%, 110%);
  line-height: 1;
  /* and add a small left margin */

  /* basic styles */
  width: max-content;
  max-width: 250px;
  word-wrap: break-word;
  white-space: pre-line;
  padding: 10px;
  border-radius: 10px;
  background: #000C;
  color: #fff;
  text-align: center;
  font-size: 14px;
  display: none;
  /* hide by default */
}

.immersive-translate-tooltip:hover .immersive-translate-tooltip-content {
  display: block;
}

.immersive-translate-tooltip:hover+.immersive-translate-tooltip-content {
  display: block;
}

.immersive-translate-tooltip-content-table {
  left: unset !important;
  bottom: unset !important;
  transform: translate(-10%, 50%) !important;
}


.immersive-translate-tooltip:hover:before {
  display: block;
}

@-webkit-keyframes immersive-translate-loading-animation {
  from {
    -webkit-transform: rotate(0deg);
  }

  to {
    -webkit-transform: rotate(359deg);
  }
}

@keyframes immersive-translate-loading-animation {
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(359deg);
  }
}
`,IMMERSIVE_TRANSLATE_INPUT_INJECTED_CSS:`.immersive-translate-input {
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  z-index: 2147483647;
  display: flex;
  justify-content: center;
  align-items: center;
}

.immersive-translate-input-loading {
  --loading-color: #f78fb6;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  display: block;
  margin: 12px auto;
  position: relative;
  color: white;
  left: -100px;
  box-sizing: border-box;
  animation: immersiveTranslateShadowRolling 1.5s linear infinite;
}

@keyframes immersiveTranslateShadowRolling {
  0% {
    box-shadow: 0px 0 rgba(255, 255, 255, 0), 0px 0 rgba(255, 255, 255, 0), 0px 0 rgba(255, 255, 255, 0), 0px 0 rgba(255, 255, 255, 0);
  }

  12% {
    box-shadow: 100px 0 var(--loading-color), 0px 0 rgba(255, 255, 255, 0), 0px 0 rgba(255, 255, 255, 0), 0px 0 rgba(255, 255, 255, 0);
  }

  25% {
    box-shadow: 110px 0 var(--loading-color), 100px 0 var(--loading-color), 0px 0 rgba(255, 255, 255, 0), 0px 0 rgba(255, 255, 255, 0);
  }

  36% {
    box-shadow: 120px 0 var(--loading-color), 110px 0 var(--loading-color), 100px 0 var(--loading-color), 0px 0 rgba(255, 255, 255, 0);
  }

  50% {
    box-shadow: 130px 0 var(--loading-color), 120px 0 var(--loading-color), 110px 0 var(--loading-color), 100px 0 var(--loading-color);
  }

  62% {
    box-shadow: 200px 0 rgba(255, 255, 255, 0), 130px 0 var(--loading-color), 120px 0 var(--loading-color), 110px 0 var(--loading-color);
  }

  75% {
    box-shadow: 200px 0 rgba(255, 255, 255, 0), 200px 0 rgba(255, 255, 255, 0), 130px 0 var(--loading-color), 120px 0 var(--loading-color);
  }

  87% {
    box-shadow: 200px 0 rgba(255, 255, 255, 0), 200px 0 rgba(255, 255, 255, 0), 200px 0 rgba(255, 255, 255, 0), 130px 0 var(--loading-color);
  }

  100% {
    box-shadow: 200px 0 rgba(255, 255, 255, 0), 200px 0 rgba(255, 255, 255, 0), 200px 0 rgba(255, 255, 255, 0), 200px 0 rgba(255, 255, 255, 0);
  }
}


.immersive-translate-search-recomend {
  border: 1px solid #dadce0;
  border-radius: 8px;
  padding: 16px;
  margin-bottom: 16px;
  position: relative;
  font-size: 16px;
}
.immersive-translate-search-enhancement-en-title {
  color: #4d5156;
}
/* dark */
@media (prefers-color-scheme: dark) {
  .immersive-translate-search-recomend {
    border: 1px solid #3c4043;
  }
  .immersive-translate-close-action svg {
    fill: #bdc1c6;
  }

.immersive-translate-search-enhancement-en-title {
  color: #bdc1c6;
}
}


.immersive-translate-search-settings {
  position: absolute;
  top: 16px;
  right: 16px;
  cursor: pointer;
}

.immersive-translate-search-recomend::before {
  /* content: " "; */
  /* width: 20px; */
  /* height: 20px; */
  /* top: 16px; */
  /* position: absolute; */
  /* background: center / contain url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAxlBMVEUAAADpTInqTIjpSofnSIfqS4nfS4XqS4nqTIjsTYnrTInqTIroS4jvQIDqTIn////+/v7rSYjpTIn8/v7uaZzrTIr9/f3wfansWJL88/b85e73qc39+/v3xNnylrvrVI/98fb62Obva5/8+fr76vH4y9zpSIj74e353Oj1ocTzm77xhK/veKbtYpjsXJTqU47oTInxjrXyh7L99fj40eH2ttH1udD3sc31ssz1rMnykLXucqPtbqD85e/1xdn2u9DzqcXrUY6FaJb8AAAADnRSTlMA34BgIM8Q37/fz7+/EGOHcVQAAAGhSURBVDjLhZPncuowEEZFTW7bXVU7xsYYTO/p7bb3f6lICIOYJOT4h7/VnFmvrBFjrF3/CR/SajBHswafctG0Qg3O8O0Xa8BZ6uw7eLjqr30SofCDVSkemMinfL1ecy20r5ygR5zz3ArcAqJExPTPKhDENEmS30Q9+yo4lEQkqVTiIEAHCT10xWERRdH0Bq0aCOPZNDV3s0xaYce1lHEoDHU8wEh3qRJypNcTAeKUIjgKMeGLDoRCLVLTVf+Ownj8Kk6H9HM6QXPgYjQSB0F00EJEu10ILQrs/QeP77BSSr0MzLOyuJJQbnUoOOIUI/A8EeJk9E4YUHUWiRyTVKGgQUB8/3e/NpdGlfI+FMQyWsCBWyz4A/ZyHXyiiz0Ne5aGZssoxRmcChw8/EFKQ5JwwkUo3FRT5yXS7q+Y/rHDZmFktzpGMvO+5QofA4FPpEmGw+EWRCFvnaof7Zhe8NuYSLR0xErKLThUSs8gnODh87ssy6438yzbLzxl012HS19vfCf3CNhnbWOL1eEsDda+gDPUvri8tSZzNFrwIZf1NmNvqC1I/t8j7nYAAAAASUVORK5CYII='); */
}

.immersive-translate-search-title {}

.immersive-translate-search-title-wrapper {}

.immersive-translate-search-time {
  font-size: 12px;
  margin: 4px 0 24px;
  color: #70757a;
}

.immersive-translate-expand-items {
  display: none;
}

.immersive-translate-search-more {
  margin-top: 16px;
  font-size: 14px;
}

.immersive-translate-modal {
  display: none;
  position: fixed;
  z-index: 1000000;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.4);
  font-size:15px;
}

.immersive-translate-modal-content {
  background-color: #fefefe;
  margin: 15% auto;
  padding: 20px;
  border: 1px solid #888;
  border-radius: 10px;
  width: 80%;
  max-width: 500px;
  font-family: system-ui, -apple-system, "Segoe UI", "Roboto", "Ubuntu",
    "Cantarell", "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
    "Segoe UI Symbol", "Noto Color Emoji";
}

.immersive-translate-modal-title {
  font-size: 1.3rem;
  font-weight: 500;
  margin-bottom: 20px;
  color: hsl(205, 20%, 32%);
}

.immersive-translate-modal-body {
  color: hsl(205, 20%, 32%)
}

.immersive-translate-close {
  color: #aaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
}

.immersive-translate-close:hover,
.immersive-translate-close:focus {
  color: black;
  text-decoration: none;
  cursor: pointer;
}

.immersive-translate-modal-footer {
  display: flex;
  justify-content: flex-end;
  flex-wrap: wrap;
  margin-top: 20px;
}

.immersive-translate-btn {
  width: fit-content;
  color: #fff;
  background-color: #ea4c89;
  border: none;
  font-size: 14px;
  margin: 5px;
  padding: 10px 20px;
  font-size: 1rem;
  border-radius: 5px;
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.immersive-translate-cancel-btn {
  /* gray color */
  background-color: rgb(89, 107, 120);
}

.immersive-translate-btn:hover {
  background-color: #f082ac;
}

.immersive-translate-cancel-btn:hover {
  background-color: hsl(205, 20%, 32%);
}


.immersive-translate-btn svg {
  margin-right: 5px;
}

.immersive-translate-link {
  cursor: pointer;
  user-select: none;
  -webkit-user-drag: none;
  text-decoration: none;
  color: #007bff;
  -webkit-tap-highlight-color: rgba(0, 0, 0, .1);
}

.immersive-translate-primary-link {
  cursor: pointer;
  user-select: none;
  -webkit-user-drag: none;
  text-decoration: none;
  color: #ea4c89;
  -webkit-tap-highlight-color: rgba(0, 0, 0, .1);
}

.immersive-translate-modal input[type="radio"] {
  margin: 0 6px;
  cursor: pointer;
}

.immersive-translate-modal label {
  cursor: pointer;
}

.immersive-translate-close-action {
  position: absolute;
  top: 2px;
  right: 0px;
  cursor: pointer;
}
`,IMMERSIVE_TRANSLATE_PICO_CSS:`@charset "UTF-8";
/*!
 * Pico.css v1.5.6 (https://picocss.com)
 * Copyright 2019-2022 - Licensed under MIT
 */
/**
 * Theme: default
 */
#mount {
  --font-family: system-ui, -apple-system, "Segoe UI", "Roboto", "Ubuntu",
    "Cantarell", "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
    "Segoe UI Symbol", "Noto Color Emoji";
  --line-height: 1.5;
  --font-weight: 400;
  --font-size: 16px;
  --border-radius: 0.25rem;
  --border-width: 1px;
  --outline-width: 3px;
  --spacing: 1rem;
  --typography-spacing-vertical: 1.5rem;
  --block-spacing-vertical: calc(var(--spacing) * 2);
  --block-spacing-horizontal: var(--spacing);
  --grid-spacing-vertical: 0;
  --grid-spacing-horizontal: var(--spacing);
  --form-element-spacing-vertical: 0.75rem;
  --form-element-spacing-horizontal: 1rem;
  --nav-element-spacing-vertical: 1rem;
  --nav-element-spacing-horizontal: 0.5rem;
  --nav-link-spacing-vertical: 0.5rem;
  --nav-link-spacing-horizontal: 0.5rem;
  --form-label-font-weight: var(--font-weight);
  --transition: 0.2s ease-in-out;
  --modal-overlay-backdrop-filter: blur(0.25rem);
}
@media (min-width: 576px) {
  #mount {
    --font-size: 17px;
  }
}
@media (min-width: 768px) {
  #mount {
    --font-size: 18px;
  }
}
@media (min-width: 992px) {
  #mount {
    --font-size: 19px;
  }
}
@media (min-width: 1200px) {
  #mount {
    --font-size: 20px;
  }
}

@media (min-width: 576px) {
  #mount > header,
  #mount > main,
  #mount > footer,
  section {
    --block-spacing-vertical: calc(var(--spacing) * 2.5);
  }
}
@media (min-width: 768px) {
  #mount > header,
  #mount > main,
  #mount > footer,
  section {
    --block-spacing-vertical: calc(var(--spacing) * 3);
  }
}
@media (min-width: 992px) {
  #mount > header,
  #mount > main,
  #mount > footer,
  section {
    --block-spacing-vertical: calc(var(--spacing) * 3.5);
  }
}
@media (min-width: 1200px) {
  #mount > header,
  #mount > main,
  #mount > footer,
  section {
    --block-spacing-vertical: calc(var(--spacing) * 4);
  }
}

@media (min-width: 576px) {
  article {
    --block-spacing-horizontal: calc(var(--spacing) * 1.25);
  }
}
@media (min-width: 768px) {
  article {
    --block-spacing-horizontal: calc(var(--spacing) * 1.5);
  }
}
@media (min-width: 992px) {
  article {
    --block-spacing-horizontal: calc(var(--spacing) * 1.75);
  }
}
@media (min-width: 1200px) {
  article {
    --block-spacing-horizontal: calc(var(--spacing) * 2);
  }
}

dialog > article {
  --block-spacing-vertical: calc(var(--spacing) * 2);
  --block-spacing-horizontal: var(--spacing);
}
@media (min-width: 576px) {
  dialog > article {
    --block-spacing-vertical: calc(var(--spacing) * 2.5);
    --block-spacing-horizontal: calc(var(--spacing) * 1.25);
  }
}
@media (min-width: 768px) {
  dialog > article {
    --block-spacing-vertical: calc(var(--spacing) * 3);
    --block-spacing-horizontal: calc(var(--spacing) * 1.5);
  }
}

a {
  --text-decoration: none;
}
a.secondary,
a.contrast {
  --text-decoration: underline;
}

small {
  --font-size: 0.875em;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  --font-weight: 700;
}

h1 {
  --font-size: 2rem;
  --typography-spacing-vertical: 3rem;
}

h2 {
  --font-size: 1.75rem;
  --typography-spacing-vertical: 2.625rem;
}

h3 {
  --font-size: 1.5rem;
  --typography-spacing-vertical: 2.25rem;
}

h4 {
  --font-size: 1.25rem;
  --typography-spacing-vertical: 1.874rem;
}

h5 {
  --font-size: 1.125rem;
  --typography-spacing-vertical: 1.6875rem;
}

[type="checkbox"],
[type="radio"] {
  --border-width: 2px;
}

[type="checkbox"][role="switch"] {
  --border-width: 3px;
}

thead th,
thead td,
tfoot th,
tfoot td {
  --border-width: 3px;
}

:not(thead, tfoot) > * > td {
  --font-size: 0.875em;
}

pre,
code,
kbd,
samp {
  --font-family: "Menlo", "Consolas", "Roboto Mono", "Ubuntu Monospace",
    "Noto Mono", "Oxygen Mono", "Liberation Mono", monospace,
    "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
}

kbd {
  --font-weight: bolder;
}

[data-theme="light"],
#mount:not([data-theme="dark"]) {
  --background-color: #fff;
  --background-light-green: #F5F7F9; 
  --color: hsl(205deg, 20%, 32%);
  --h1-color: hsl(205deg, 30%, 15%);
  --h2-color: #24333e;
  --h3-color: hsl(205deg, 25%, 23%);
  --h4-color: #374956;
  --h5-color: hsl(205deg, 20%, 32%);
  --h6-color: #4d606d;
  --muted-color: hsl(205deg, 10%, 50%);
  --muted-border-color: hsl(205deg, 20%, 94%);
  --primary: hsl(195deg, 85%, 41%);
  --primary-hover: hsl(195deg, 90%, 32%);
  --primary-focus: rgba(16, 149, 193, 0.125);
  --primary-inverse: #fff;
  --secondary: hsl(205deg, 15%, 41%);
  --secondary-hover: hsl(205deg, 20%, 32%);
  --secondary-focus: rgba(89, 107, 120, 0.125);
  --secondary-inverse: #fff;
  --contrast: hsl(205deg, 30%, 15%);
  --contrast-hover: #000;
  --contrast-focus: rgba(89, 107, 120, 0.125);
  --contrast-inverse: #fff;
  --mark-background-color: #fff2ca;
  --mark-color: #543a26;
  --ins-color: #388e3c;
  --del-color: #c62828;
  --blockquote-border-color: var(--muted-border-color);
  --blockquote-footer-color: var(--muted-color);
  --button-box-shadow: 0 0 0 rgba(0, 0, 0, 0);
  --button-hover-box-shadow: 0 0 0 rgba(0, 0, 0, 0);
  --form-element-background-color: transparent;
  --form-element-border-color: hsl(205deg, 14%, 68%);
  --form-element-color: var(--color);
  --form-element-placeholder-color: var(--muted-color);
  --form-element-active-background-color: transparent;
  --form-element-active-border-color: var(--primary);
  --form-element-focus-color: var(--primary-focus);
  --form-element-disabled-background-color: hsl(205deg, 18%, 86%);
  --form-element-disabled-border-color: hsl(205deg, 14%, 68%);
  --form-element-disabled-opacity: 0.5;
  --form-element-invalid-border-color: #c62828;
  --form-element-invalid-active-border-color: #d32f2f;
  --form-element-invalid-focus-color: rgba(211, 47, 47, 0.125);
  --form-element-valid-border-color: #388e3c;
  --form-element-valid-active-border-color: #43a047;
  --form-element-valid-focus-color: rgba(67, 160, 71, 0.125);
  --switch-background-color: hsl(205deg, 16%, 77%);
  --switch-color: var(--primary-inverse);
  --switch-checked-background-color: var(--primary);
  --range-border-color: hsl(205deg, 18%, 86%);
  --range-active-border-color: hsl(205deg, 16%, 77%);
  --range-thumb-border-color: var(--background-color);
  --range-thumb-color: var(--secondary);
  --range-thumb-hover-color: var(--secondary-hover);
  --range-thumb-active-color: var(--primary);
  --table-border-color: var(--muted-border-color);
  --table-row-stripped-background-color: #f6f8f9;
  --code-background-color: hsl(205deg, 20%, 94%);
  --code-color: var(--muted-color);
  --code-kbd-background-color: var(--contrast);
  --code-kbd-color: var(--contrast-inverse);
  --code-tag-color: hsl(330deg, 40%, 50%);
  --code-property-color: hsl(185deg, 40%, 40%);
  --code-value-color: hsl(40deg, 20%, 50%);
  --code-comment-color: hsl(205deg, 14%, 68%);
  --accordion-border-color: var(--muted-border-color);
  --accordion-close-summary-color: var(--color);
  --accordion-open-summary-color: var(--muted-color);
  --card-background-color: var(--background-color);
  --card-border-color: var(--muted-border-color);
  --card-box-shadow: 0.0145rem 0.029rem 0.174rem rgba(27, 40, 50, 0.01698),
    0.0335rem 0.067rem 0.402rem rgba(27, 40, 50, 0.024),
    0.0625rem 0.125rem 0.75rem rgba(27, 40, 50, 0.03),
    0.1125rem 0.225rem 1.35rem rgba(27, 40, 50, 0.036),
    0.2085rem 0.417rem 2.502rem rgba(27, 40, 50, 0.04302),
    0.5rem 1rem 6rem rgba(27, 40, 50, 0.06),
    0 0 0 0.0625rem rgba(27, 40, 50, 0.015);
  --card-sectionning-background-color: #fbfbfc;
  --dropdown-background-color: #fbfbfc;
  --dropdown-border-color: #e1e6eb;
  --dropdown-box-shadow: var(--card-box-shadow);
  --dropdown-color: var(--color);
  --dropdown-hover-background-color: hsl(205deg, 20%, 94%);
  --modal-overlay-background-color: rgba(213, 220, 226, 0.7);
  --progress-background-color: hsl(205deg, 18%, 86%);
  --progress-color: var(--primary);
  --loading-spinner-opacity: 0.5;
  --tooltip-background-color: var(--contrast);
  --tooltip-color: var(--contrast-inverse);
  --icon-checkbox: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='rgb(255, 255, 255)' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='20 6 9 17 4 12'%3E%3C/polyline%3E%3C/svg%3E");
  --icon-chevron: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='rgb(65, 84, 98)' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E");
  --icon-chevron-button: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='rgb(255, 255, 255)' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E");
  --icon-chevron-button-inverse: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='rgb(255, 255, 255)' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E");
  --icon-close: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='rgb(115, 130, 140)' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'%3E%3Cline x1='18' y1='6' x2='6' y2='18'%3E%3C/line%3E%3Cline x1='6' y1='6' x2='18' y2='18'%3E%3C/line%3E%3C/svg%3E");
  --icon-date: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='rgb(65, 84, 98)' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Crect x='3' y='4' width='18' height='18' rx='2' ry='2'%3E%3C/rect%3E%3Cline x1='16' y1='2' x2='16' y2='6'%3E%3C/line%3E%3Cline x1='8' y1='2' x2='8' y2='6'%3E%3C/line%3E%3Cline x1='3' y1='10' x2='21' y2='10'%3E%3C/line%3E%3C/svg%3E");
  --icon-invalid: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='rgb(198, 40, 40)' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'%3E%3C/circle%3E%3Cline x1='12' y1='8' x2='12' y2='12'%3E%3C/line%3E%3Cline x1='12' y1='16' x2='12.01' y2='16'%3E%3C/line%3E%3C/svg%3E");
  --icon-minus: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='rgb(255, 255, 255)' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'%3E%3Cline x1='5' y1='12' x2='19' y2='12'%3E%3C/line%3E%3C/svg%3E");
  --icon-search: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='rgb(65, 84, 98)' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='11' cy='11' r='8'%3E%3C/circle%3E%3Cline x1='21' y1='21' x2='16.65' y2='16.65'%3E%3C/line%3E%3C/svg%3E");
  --icon-time: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='rgb(65, 84, 98)' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'%3E%3C/circle%3E%3Cpolyline points='12 6 12 12 16 14'%3E%3C/polyline%3E%3C/svg%3E");
  --icon-valid: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='rgb(56, 142, 60)' stroke-width='3' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='20 6 9 17 4 12'%3E%3C/polyline%3E%3C/svg%3E");
  --icon-share: url("data:image/svg+xml;charset=utf-8;base64,PHN2ZyB3aWR0aD0nMjQnIGhlaWdodD0nMjQnIHZpZXdCb3g9JzAgMCAyNCAyNCcgZmlsbD0nbm9uZScgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJz48cGF0aCBkPSdNMTguOTM0OCA4LjY0ODQ0QzIwLjg5NDEgOC42NDg0NCAyMi40ODU1IDcuMDU0NjkgMjIuNDg1NSA1LjA5NzY2QzIyLjQ4NTUgMy4xNDA2MiAyMC44OTE4IDEuNTQ2ODggMTguOTM0OCAxLjU0Njg4QzE2Ljk3NTQgMS41NDY4OCAxNS4zODQgMy4xNDA2MiAxNS4zODQgNS4wOTc2NkMxNS4zODQgNS4yOTkyMiAxNS40MDA0IDUuNDkzNzUgMTUuNDMzMiA1LjY4NTk0TDcuMzIzODMgOS4zNTM5MUM2LjcwOTc3IDguODQ1MzEgNS45MjIyNyA4LjU0MDYyIDUuMDY0NDUgOC41NDA2MkMzLjEwNTA4IDguNTQwNjIgMS41MTM2NyAxMC4xMzQ0IDEuNTEzNjcgMTIuMDkxNEMxLjUxMzY3IDE0LjA0ODQgMy4xMDc0MiAxNS42NDIyIDUuMDY0NDUgMTUuNjQyMkM1LjgzMzIgMTUuNjQyMiA2LjU0NTcgMTUuMzk2MSA3LjEyNjk1IDE0Ljk4MTNMMTIuNDk0MSAxNy45OTUzQzEyLjQxNjggMTguMjg1OSAxMi4zNzcgMTguNTg4MyAxMi4zNzcgMTguOTAyM0MxMi4zNzcgMjAuODYxNyAxMy45NzA3IDIyLjQ1MzEgMTUuOTI3NyAyMi40NTMxQzE3Ljg4NzEgMjIuNDUzMSAxOS40Nzg1IDIwLjg1OTQgMTkuNDc4NSAxOC45MDIzQzE5LjQ3ODUgMTYuOTQzIDE3Ljg4NDggMTUuMzUxNiAxNS45Mjc3IDE1LjM1MTZDMTQuOTU3NCAxNS4zNTE2IDE0LjA3ODUgMTUuNzQzIDEzLjQzNjMgMTYuMzczNEw4LjMyMjI3IDEzLjUwNDdDOC41MDk3NyAxMy4wNzExIDguNjE1MjMgMTIuNTk1MyA4LjYxNTIzIDEyLjA5MzhDOC42MTUyMyAxMS42ODEyIDguNTQ0OTIgMTEuMjg3NSA4LjQxNjAyIDEwLjkxOTVMMTYuMjIzIDcuMzg3NUMxNi44NzQ2IDguMTU2MjUgMTcuODQ5NiA4LjY0ODQ0IDE4LjkzNDggOC42NDg0NFpNNS4wNjQ0NSAxMy43Njk1QzQuMTQxMDIgMTMuNzY5NSAzLjM4ODY3IDEzLjAxNzIgMy4zODg2NyAxMi4wOTM4QzMuMzg4NjcgMTEuMTcwMyA0LjE0MTAyIDEwLjQxOCA1LjA2NDQ1IDEwLjQxOEM1Ljk4Nzg5IDEwLjQxOCA2Ljc0MDIzIDExLjE3MDMgNi43NDAyMyAxMi4wOTM4QzYuNzQwMjMgMTMuMDE3MiA1Ljk4Nzg5IDEzLjc2OTUgNS4wNjQ0NSAxMy43Njk1Wk0xNS45Mjc3IDE3LjIyNjZDMTYuODUxMiAxNy4yMjY2IDE3LjYwMzUgMTcuOTc4OSAxNy42MDM1IDE4LjkwMjNDMTcuNjAzNSAxOS44MjU4IDE2Ljg1MTIgMjAuNTc4MSAxNS45Mjc3IDIwLjU3ODFDMTUuMDA0MyAyMC41NzgxIDE0LjI1MiAxOS44MjU4IDE0LjI1MiAxOC45MDIzQzE0LjI1MiAxNy45Nzg5IDE1LjAwMiAxNy4yMjY2IDE1LjkyNzcgMTcuMjI2NlpNMTguOTM0OCAzLjQxOTUzQzE5Ljg1ODIgMy40MTk1MyAyMC42MTA1IDQuMTcxODcgMjAuNjEwNSA1LjA5NTMxQzIwLjYxMDUgNi4wMTg3NSAxOS44NTgyIDYuNzcxMDkgMTguOTM0OCA2Ljc3MTA5QzE4LjAxMTMgNi43NzEwOSAxNy4yNTkgNi4wMTg3NSAxNy4yNTkgNS4wOTUzMUMxNy4yNTkgNC4xNzE4NyAxOC4wMTEzIDMuNDE5NTMgMTguOTM0OCAzLjQxOTUzWicgZmlsbD0nIzgzODM4MycvPjwvc3ZnPiA=");
  color-scheme: light;
}

@media only screen and (prefers-color-scheme: dark) {
  #mount:not([data-theme="light"]) {
    --background-color: #11191f;
    --background-light-green: #141e26; 
    --color: hsl(205deg, 16%, 77%);
    --h1-color: hsl(205deg, 20%, 94%);
    --h2-color: #e1e6eb;
    --h3-color: hsl(205deg, 18%, 86%);
    --h4-color: #c8d1d8;
    --h5-color: hsl(205deg, 16%, 77%);
    --h6-color: #afbbc4;
    --muted-color: hsl(205deg, 10%, 50%);
    --muted-border-color: #1f2d38;
    --primary: hsl(195deg, 85%, 41%);
    --primary-hover: hsl(195deg, 80%, 50%);
    --primary-focus: rgba(16, 149, 193, 0.25);
    --primary-inverse: #fff;
    --secondary: hsl(205deg, 15%, 41%);
    --secondary-hover: hsl(205deg, 10%, 50%);
    --secondary-focus: rgba(115, 130, 140, 0.25);
    --secondary-inverse: #fff;
    --contrast: hsl(205deg, 20%, 94%);
    --contrast-hover: #fff;
    --contrast-focus: rgba(115, 130, 140, 0.25);
    --contrast-inverse: #000;
    --mark-background-color: #d1c284;
    --mark-color: #11191f;
    --ins-color: #388e3c;
    --del-color: #c62828;
    --blockquote-border-color: var(--muted-border-color);
    --blockquote-footer-color: var(--muted-color);
    --button-box-shadow: 0 0 0 rgba(0, 0, 0, 0);
    --button-hover-box-shadow: 0 0 0 rgba(0, 0, 0, 0);
    --form-element-background-color: #11191f;
    --form-element-border-color: #374956;
    --form-element-color: var(--color);
    --form-element-placeholder-color: var(--muted-color);
    --form-element-active-background-color: var(
      --form-element-background-color
    );
    --form-element-active-border-color: var(--primary);
    --form-element-focus-color: var(--primary-focus);
    --form-element-disabled-background-color: hsl(205deg, 25%, 23%);
    --form-element-disabled-border-color: hsl(205deg, 20%, 32%);
    --form-element-disabled-opacity: 0.5;
    --form-element-invalid-border-color: #b71c1c;
    --form-element-invalid-active-border-color: #c62828;
    --form-element-invalid-focus-color: rgba(198, 40, 40, 0.25);
    --form-element-valid-border-color: #2e7d32;
    --form-element-valid-active-border-color: #388e3c;
    --form-element-valid-focus-color: rgba(56, 142, 60, 0.25);
    --switch-background-color: #374956;
    --switch-color: var(--primary-inverse);
    --switch-checked-background-color: var(--primary);
    --range-border-color: #24333e;
    --range-active-border-color: hsl(205deg, 25%, 23%);
    --range-thumb-border-color: var(--background-color);
    --range-thumb-color: var(--secondary);
    --range-thumb-hover-color: var(--secondary-hover);
    --range-thumb-active-color: var(--primary);
    --table-border-color: var(--muted-border-color);
    --table-row-stripped-background-color: rgba(115, 130, 140, 0.05);
    --code-background-color: #18232c;
    --code-color: var(--muted-color);
    --code-kbd-background-color: var(--contrast);
    --code-kbd-color: var(--contrast-inverse);
    --code-tag-color: hsl(330deg, 30%, 50%);
    --code-property-color: hsl(185deg, 30%, 50%);
    --code-value-color: hsl(40deg, 10%, 50%);
    --code-comment-color: #4d606d;
    --accordion-border-color: var(--muted-border-color);
    --accordion-active-summary-color: var(--primary);
    --accordion-close-summary-color: var(--color);
    --accordion-open-summary-color: var(--muted-color);
    --card-background-color: #141e26;
    --card-border-color: var(--card-background-color);
    --card-box-shadow: 0.0145rem 0.029rem 0.174rem rgba(0, 0, 0, 0.01698),
      0.0335rem 0.067rem 0.402rem rgba(0, 0, 0, 0.024),
      0.0625rem 0.125rem 0.75rem rgba(0, 0, 0, 0.03),
      0.1125rem 0.225rem 1.35rem rgba(0, 0, 0, 0.036),
      0.2085rem 0.417rem 2.502rem rgba(0, 0, 0, 0.04302),
      0.5rem 1rem 6rem rgba(0, 0, 0, 0.06), 0 0 0 0.0625rem rgba(0, 0, 0, 0.015);
    --card-sectionning-background-color: #18232c;
    --dropdown-background-color: hsl(205deg, 30%, 15%);
    --dropdown-border-color: #24333e;
    --dropdown-box-shadow: var(--card-box-shadow);
    --dropdown-color: var(--color);
    --dropdown-hover-background-color: rgba(36, 51, 62, 0.75);
    --modal-overlay-background-color: rgba(36, 51, 62, 0.8);
    --progress-background-color: #24333e;
    --progress-color: var(--primary);
    --loading-spinner-opacity: 0.5;
    --tooltip-background-color: var(--contrast);
    --tooltip-color: var(--contrast-inverse);
    --icon-checkbox: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='rgb(255, 255, 255)' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='20 6 9 17 4 12'%3E%3C/polyline%3E%3C/svg%3E");
    --icon-chevron: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='rgb(162, 175, 185)' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E");
    --icon-chevron-button: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='rgb(255, 255, 255)' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E");
    --icon-chevron-button-inverse: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='rgb(0, 0, 0)' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E");
    --icon-close: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='rgb(115, 130, 140)' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'%3E%3Cline x1='18' y1='6' x2='6' y2='18'%3E%3C/line%3E%3Cline x1='6' y1='6' x2='18' y2='18'%3E%3C/line%3E%3C/svg%3E");
    --icon-date: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='rgb(162, 175, 185)' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Crect x='3' y='4' width='18' height='18' rx='2' ry='2'%3E%3C/rect%3E%3Cline x1='16' y1='2' x2='16' y2='6'%3E%3C/line%3E%3Cline x1='8' y1='2' x2='8' y2='6'%3E%3C/line%3E%3Cline x1='3' y1='10' x2='21' y2='10'%3E%3C/line%3E%3C/svg%3E");
    --icon-invalid: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='rgb(183, 28, 28)' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'%3E%3C/circle%3E%3Cline x1='12' y1='8' x2='12' y2='12'%3E%3C/line%3E%3Cline x1='12' y1='16' x2='12.01' y2='16'%3E%3C/line%3E%3C/svg%3E");
    --icon-minus: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='rgb(255, 255, 255)' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'%3E%3Cline x1='5' y1='12' x2='19' y2='12'%3E%3C/line%3E%3C/svg%3E");
    --icon-search: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='rgb(162, 175, 185)' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='11' cy='11' r='8'%3E%3C/circle%3E%3Cline x1='21' y1='21' x2='16.65' y2='16.65'%3E%3C/line%3E%3C/svg%3E");
    --icon-time: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='rgb(162, 175, 185)' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'%3E%3C/circle%3E%3Cpolyline points='12 6 12 12 16 14'%3E%3C/polyline%3E%3C/svg%3E");
    --icon-valid: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='rgb(46, 125, 50)' stroke-width='3' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='20 6 9 17 4 12'%3E%3C/polyline%3E%3C/svg%3E");
    --icon-share: url("data:image/svg+xml;charset=utf-8;base64,PHN2ZyB3aWR0aD0nMjInIGhlaWdodD0nMjInIHZpZXdCb3g9JzAgMCAyMiAyMicgZmlsbD0nbm9uZScgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJz48cGF0aCBkPSdNMTcuOTM0OCA3LjY0ODQ0QzE5Ljg5NDEgNy42NDg0NCAyMS40ODU1IDYuMDU0NjkgMjEuNDg1NSA0LjA5NzY2QzIxLjQ4NTUgMi4xNDA2MiAxOS44OTE4IDAuNTQ2ODc1IDE3LjkzNDggMC41NDY4NzVDMTUuOTc1NCAwLjU0Njg3NSAxNC4zODQgMi4xNDA2MiAxNC4zODQgNC4wOTc2NkMxNC4zODQgNC4yOTkyMiAxNC40MDA0IDQuNDkzNzUgMTQuNDMzMiA0LjY4NTk0TDYuMzIzODMgOC4zNTM5MUM1LjcwOTc3IDcuODQ1MzEgNC45MjIyNyA3LjU0MDYyIDQuMDY0NDUgNy41NDA2MkMyLjEwNTA4IDcuNTQwNjIgMC41MTM2NzIgOS4xMzQzOCAwLjUxMzY3MiAxMS4wOTE0QzAuNTEzNjcyIDEzLjA0ODQgMi4xMDc0MiAxNC42NDIyIDQuMDY0NDUgMTQuNjQyMkM0LjgzMzIgMTQuNjQyMiA1LjU0NTcgMTQuMzk2MSA2LjEyNjk1IDEzLjk4MTNMMTEuNDk0MSAxNi45OTUzQzExLjQxNjggMTcuMjg1OSAxMS4zNzcgMTcuNTg4MyAxMS4zNzcgMTcuOTAyM0MxMS4zNzcgMTkuODYxNyAxMi45NzA3IDIxLjQ1MzEgMTQuOTI3NyAyMS40NTMxQzE2Ljg4NzEgMjEuNDUzMSAxOC40Nzg1IDE5Ljg1OTQgMTguNDc4NSAxNy45MDIzQzE4LjQ3ODUgMTUuOTQzIDE2Ljg4NDggMTQuMzUxNiAxNC45Mjc3IDE0LjM1MTZDMTMuOTU3NCAxNC4zNTE2IDEzLjA3ODUgMTQuNzQzIDEyLjQzNjMgMTUuMzczNEw3LjMyMjI3IDEyLjUwNDdDNy41MDk3NyAxMi4wNzExIDcuNjE1MjMgMTEuNTk1MyA3LjYxNTIzIDExLjA5MzhDNy42MTUyMyAxMC42ODEyIDcuNTQ0OTIgMTAuMjg3NSA3LjQxNjAyIDkuOTE5NTNMMTUuMjIzIDYuMzg3NUMxNS44NzQ2IDcuMTU2MjUgMTYuODQ5NiA3LjY0ODQ0IDE3LjkzNDggNy42NDg0NFpNNC4wNjQ0NSAxMi43Njk1QzMuMTQxMDIgMTIuNzY5NSAyLjM4ODY3IDEyLjAxNzIgMi4zODg2NyAxMS4wOTM4QzIuMzg4NjcgMTAuMTcwMyAzLjE0MTAyIDkuNDE3OTcgNC4wNjQ0NSA5LjQxNzk3QzQuOTg3ODkgOS40MTc5NyA1Ljc0MDIzIDEwLjE3MDMgNS43NDAyMyAxMS4wOTM4QzUuNzQwMjMgMTIuMDE3MiA0Ljk4Nzg5IDEyLjc2OTUgNC4wNjQ0NSAxMi43Njk1Wk0xNC45Mjc3IDE2LjIyNjZDMTUuODUxMiAxNi4yMjY2IDE2LjYwMzUgMTYuOTc4OSAxNi42MDM1IDE3LjkwMjNDMTYuNjAzNSAxOC44MjU4IDE1Ljg1MTIgMTkuNTc4MSAxNC45Mjc3IDE5LjU3ODFDMTQuMDA0MyAxOS41NzgxIDEzLjI1MiAxOC44MjU4IDEzLjI1MiAxNy45MDIzQzEzLjI1MiAxNi45Nzg5IDE0LjAwMiAxNi4yMjY2IDE0LjkyNzcgMTYuMjI2NlpNMTcuOTM0OCAyLjQxOTUzQzE4Ljg1ODIgMi40MTk1MyAxOS42MTA1IDMuMTcxODcgMTkuNjEwNSA0LjA5NTMxQzE5LjYxMDUgNS4wMTg3NSAxOC44NTgyIDUuNzcxMDkgMTcuOTM0OCA1Ljc3MTA5QzE3LjAxMTMgNS43NzEwOSAxNi4yNTkgNS4wMTg3NSAxNi4yNTkgNC4wOTUzMUMxNi4yNTkgMy4xNzE4NyAxNy4wMTEzIDIuNDE5NTMgMTcuOTM0OCAyLjQxOTUzWicgZmlsbD0nI0I2QjZCNicvPjwvc3ZnPiA=");
    color-scheme: dark;
  }
}
[data-theme="dark"] {
  --background-color: #11191f;
  --background-light-green: #141e26; 
  --color: hsl(205deg, 16%, 77%);
  --h1-color: hsl(205deg, 20%, 94%);
  --h2-color: #e1e6eb;
  --h3-color: hsl(205deg, 18%, 86%);
  --h4-color: #c8d1d8;
  --h5-color: hsl(205deg, 16%, 77%);
  --h6-color: #afbbc4;
  --muted-color: hsl(205deg, 10%, 50%);
  --muted-border-color: #1f2d38;
  --primary: hsl(195deg, 85%, 41%);
  --primary-hover: hsl(195deg, 80%, 50%);
  --primary-focus: rgba(16, 149, 193, 0.25);
  --primary-inverse: #fff;
  --secondary: hsl(205deg, 15%, 41%);
  --secondary-hover: hsl(205deg, 10%, 50%);
  --secondary-focus: rgba(115, 130, 140, 0.25);
  --secondary-inverse: #fff;
  --contrast: hsl(205deg, 20%, 94%);
  --contrast-hover: #fff;
  --contrast-focus: rgba(115, 130, 140, 0.25);
  --contrast-inverse: #000;
  --mark-background-color: #d1c284;
  --mark-color: #11191f;
  --ins-color: #388e3c;
  --del-color: #c62828;
  --blockquote-border-color: var(--muted-border-color);
  --blockquote-footer-color: var(--muted-color);
  --button-box-shadow: 0 0 0 rgba(0, 0, 0, 0);
  --button-hover-box-shadow: 0 0 0 rgba(0, 0, 0, 0);
  --form-element-background-color: #11191f;
  --form-element-border-color: #374956;
  --form-element-color: var(--color);
  --form-element-placeholder-color: var(--muted-color);
  --form-element-active-background-color: var(--form-element-background-color);
  --form-element-active-border-color: var(--primary);
  --form-element-focus-color: var(--primary-focus);
  --form-element-disabled-background-color: hsl(205deg, 25%, 23%);
  --form-element-disabled-border-color: hsl(205deg, 20%, 32%);
  --form-element-disabled-opacity: 0.5;
  --form-element-invalid-border-color: #b71c1c;
  --form-element-invalid-active-border-color: #c62828;
  --form-element-invalid-focus-color: rgba(198, 40, 40, 0.25);
  --form-element-valid-border-color: #2e7d32;
  --form-element-valid-active-border-color: #388e3c;
  --form-element-valid-focus-color: rgba(56, 142, 60, 0.25);
  --switch-background-color: #374956;
  --switch-color: var(--primary-inverse);
  --switch-checked-background-color: var(--primary);
  --range-border-color: #24333e;
  --range-active-border-color: hsl(205deg, 25%, 23%);
  --range-thumb-border-color: var(--background-color);
  --range-thumb-color: var(--secondary);
  --range-thumb-hover-color: var(--secondary-hover);
  --range-thumb-active-color: var(--primary);
  --table-border-color: var(--muted-border-color);
  --table-row-stripped-background-color: rgba(115, 130, 140, 0.05);
  --code-background-color: #18232c;
  --code-color: var(--muted-color);
  --code-kbd-background-color: var(--contrast);
  --code-kbd-color: var(--contrast-inverse);
  --code-tag-color: hsl(330deg, 30%, 50%);
  --code-property-color: hsl(185deg, 30%, 50%);
  --code-value-color: hsl(40deg, 10%, 50%);
  --code-comment-color: #4d606d;
  --accordion-border-color: var(--muted-border-color);
  --accordion-active-summary-color: var(--primary);
  --accordion-close-summary-color: var(--color);
  --accordion-open-summary-color: var(--muted-color);
  --card-background-color: #141e26;
  --card-border-color: var(--card-background-color);
  --card-box-shadow: 0.0145rem 0.029rem 0.174rem rgba(0, 0, 0, 0.01698),
    0.0335rem 0.067rem 0.402rem rgba(0, 0, 0, 0.024),
    0.0625rem 0.125rem 0.75rem rgba(0, 0, 0, 0.03),
    0.1125rem 0.225rem 1.35rem rgba(0, 0, 0, 0.036),
    0.2085rem 0.417rem 2.502rem rgba(0, 0, 0, 0.04302),
    0.5rem 1rem 6rem rgba(0, 0, 0, 0.06), 0 0 0 0.0625rem rgba(0, 0, 0, 0.015);
  --card-sectionning-background-color: #18232c;
  --dropdown-background-color: hsl(205deg, 30%, 15%);
  --dropdown-border-color: #24333e;
  --dropdown-box-shadow: var(--card-box-shadow);
  --dropdown-color: var(--color);
  --dropdown-hover-background-color: rgba(36, 51, 62, 0.75);
  --modal-overlay-background-color: rgba(36, 51, 62, 0.8);
  --progress-background-color: #24333e;
  --progress-color: var(--primary);
  --loading-spinner-opacity: 0.5;
  --tooltip-background-color: var(--contrast);
  --tooltip-color: var(--contrast-inverse);
  --icon-checkbox: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='rgb(255, 255, 255)' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='20 6 9 17 4 12'%3E%3C/polyline%3E%3C/svg%3E");
  --icon-chevron: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='rgb(162, 175, 185)' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E");
  --icon-chevron-button: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='rgb(255, 255, 255)' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E");
  --icon-chevron-button-inverse: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='rgb(0, 0, 0)' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E");
  --icon-close: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='rgb(115, 130, 140)' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'%3E%3Cline x1='18' y1='6' x2='6' y2='18'%3E%3C/line%3E%3Cline x1='6' y1='6' x2='18' y2='18'%3E%3C/line%3E%3C/svg%3E");
  --icon-date: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='rgb(162, 175, 185)' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Crect x='3' y='4' width='18' height='18' rx='2' ry='2'%3E%3C/rect%3E%3Cline x1='16' y1='2' x2='16' y2='6'%3E%3C/line%3E%3Cline x1='8' y1='2' x2='8' y2='6'%3E%3C/line%3E%3Cline x1='3' y1='10' x2='21' y2='10'%3E%3C/line%3E%3C/svg%3E");
  --icon-invalid: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='rgb(183, 28, 28)' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'%3E%3C/circle%3E%3Cline x1='12' y1='8' x2='12' y2='12'%3E%3C/line%3E%3Cline x1='12' y1='16' x2='12.01' y2='16'%3E%3C/line%3E%3C/svg%3E");
  --icon-minus: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='rgb(255, 255, 255)' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'%3E%3Cline x1='5' y1='12' x2='19' y2='12'%3E%3C/line%3E%3C/svg%3E");
  --icon-search: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='rgb(162, 175, 185)' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='11' cy='11' r='8'%3E%3C/circle%3E%3Cline x1='21' y1='21' x2='16.65' y2='16.65'%3E%3C/line%3E%3C/svg%3E");
  --icon-time: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='rgb(162, 175, 185)' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'%3E%3C/circle%3E%3Cpolyline points='12 6 12 12 16 14'%3E%3C/polyline%3E%3C/svg%3E");
  --icon-valid: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='rgb(46, 125, 50)' stroke-width='3' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='20 6 9 17 4 12'%3E%3C/polyline%3E%3C/svg%3E");
  --icon-share: url("data:image/svg+xml;charset=utf-8;base64,PHN2ZyB3aWR0aD0nMjInIGhlaWdodD0nMjInIHZpZXdCb3g9JzAgMCAyMiAyMicgZmlsbD0nbm9uZScgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJz48cGF0aCBkPSdNMTcuOTM0OCA3LjY0ODQ0QzE5Ljg5NDEgNy42NDg0NCAyMS40ODU1IDYuMDU0NjkgMjEuNDg1NSA0LjA5NzY2QzIxLjQ4NTUgMi4xNDA2MiAxOS44OTE4IDAuNTQ2ODc1IDE3LjkzNDggMC41NDY4NzVDMTUuOTc1NCAwLjU0Njg3NSAxNC4zODQgMi4xNDA2MiAxNC4zODQgNC4wOTc2NkMxNC4zODQgNC4yOTkyMiAxNC40MDA0IDQuNDkzNzUgMTQuNDMzMiA0LjY4NTk0TDYuMzIzODMgOC4zNTM5MUM1LjcwOTc3IDcuODQ1MzEgNC45MjIyNyA3LjU0MDYyIDQuMDY0NDUgNy41NDA2MkMyLjEwNTA4IDcuNTQwNjIgMC41MTM2NzIgOS4xMzQzOCAwLjUxMzY3MiAxMS4wOTE0QzAuNTEzNjcyIDEzLjA0ODQgMi4xMDc0MiAxNC42NDIyIDQuMDY0NDUgMTQuNjQyMkM0LjgzMzIgMTQuNjQyMiA1LjU0NTcgMTQuMzk2MSA2LjEyNjk1IDEzLjk4MTNMMTEuNDk0MSAxNi45OTUzQzExLjQxNjggMTcuMjg1OSAxMS4zNzcgMTcuNTg4MyAxMS4zNzcgMTcuOTAyM0MxMS4zNzcgMTkuODYxNyAxMi45NzA3IDIxLjQ1MzEgMTQuOTI3NyAyMS40NTMxQzE2Ljg4NzEgMjEuNDUzMSAxOC40Nzg1IDE5Ljg1OTQgMTguNDc4NSAxNy45MDIzQzE4LjQ3ODUgMTUuOTQzIDE2Ljg4NDggMTQuMzUxNiAxNC45Mjc3IDE0LjM1MTZDMTMuOTU3NCAxNC4zNTE2IDEzLjA3ODUgMTQuNzQzIDEyLjQzNjMgMTUuMzczNEw3LjMyMjI3IDEyLjUwNDdDNy41MDk3NyAxMi4wNzExIDcuNjE1MjMgMTEuNTk1MyA3LjYxNTIzIDExLjA5MzhDNy42MTUyMyAxMC42ODEyIDcuNTQ0OTIgMTAuMjg3NSA3LjQxNjAyIDkuOTE5NTNMMTUuMjIzIDYuMzg3NUMxNS44NzQ2IDcuMTU2MjUgMTYuODQ5NiA3LjY0ODQ0IDE3LjkzNDggNy42NDg0NFpNNC4wNjQ0NSAxMi43Njk1QzMuMTQxMDIgMTIuNzY5NSAyLjM4ODY3IDEyLjAxNzIgMi4zODg2NyAxMS4wOTM4QzIuMzg4NjcgMTAuMTcwMyAzLjE0MTAyIDkuNDE3OTcgNC4wNjQ0NSA5LjQxNzk3QzQuOTg3ODkgOS40MTc5NyA1Ljc0MDIzIDEwLjE3MDMgNS43NDAyMyAxMS4wOTM4QzUuNzQwMjMgMTIuMDE3MiA0Ljk4Nzg5IDEyLjc2OTUgNC4wNjQ0NSAxMi43Njk1Wk0xNC45Mjc3IDE2LjIyNjZDMTUuODUxMiAxNi4yMjY2IDE2LjYwMzUgMTYuOTc4OSAxNi42MDM1IDE3LjkwMjNDMTYuNjAzNSAxOC44MjU4IDE1Ljg1MTIgMTkuNTc4MSAxNC45Mjc3IDE5LjU3ODFDMTQuMDA0MyAxOS41NzgxIDEzLjI1MiAxOC44MjU4IDEzLjI1MiAxNy45MDIzQzEzLjI1MiAxNi45Nzg5IDE0LjAwMiAxNi4yMjY2IDE0LjkyNzcgMTYuMjI2NlpNMTcuOTM0OCAyLjQxOTUzQzE4Ljg1ODIgMi40MTk1MyAxOS42MTA1IDMuMTcxODcgMTkuNjEwNSA0LjA5NTMxQzE5LjYxMDUgNS4wMTg3NSAxOC44NTgyIDUuNzcxMDkgMTcuOTM0OCA1Ljc3MTA5QzE3LjAxMTMgNS43NzEwOSAxNi4yNTkgNS4wMTg3NSAxNi4yNTkgNC4wOTUzMUMxNi4yNTkgMy4xNzE4NyAxNy4wMTEzIDIuNDE5NTMgMTcuOTM0OCAyLjQxOTUzWicgZmlsbD0nI0I2QjZCNicvPjwvc3ZnPiA=");
  color-scheme: dark;
}

progress,
[type="checkbox"],
[type="radio"],
[type="range"] {
  accent-color: var(--primary);
}

/**
 * Document
 * Content-box & Responsive typography
 */
*,
*::before,
*::after {
  box-sizing: border-box;
  background-repeat: no-repeat;
}

::before,
::after {
  text-decoration: inherit;
  vertical-align: inherit;
}

:where(#mount) {
  -webkit-tap-highlight-color: transparent;
  -webkit-text-size-adjust: 100%;
  -moz-text-size-adjust: 100%;
  text-size-adjust: 100%;
  background-color: var(--background-color);
  color: var(--color);
  font-weight: var(--font-weight);
  font-size: var(--font-size);
  line-height: var(--line-height);
  font-family: var(--font-family);
  text-rendering: optimizeLegibility;
  overflow-wrap: break-word;
  cursor: default;
  -moz-tab-size: 4;
  -o-tab-size: 4;
  tab-size: 4;
}

/**
 * Sectioning
 * Container and responsive spacings for header, main, footer
 */
main {
  display: block;
}

#mount {
  width: 100%;
  margin: 0;
}
#mount > header,
#mount > main,
#mount > footer {
  width: 100%;
  margin-right: auto;
  margin-left: auto;
  padding: var(--block-spacing-vertical) var(--block-spacing-horizontal);
}
@media (min-width: 576px) {
  #mount > header,
  #mount > main,
  #mount > footer {
    max-width: 510px;
    padding-right: 0;
    padding-left: 0;
  }
}
@media (min-width: 768px) {
  #mount > header,
  #mount > main,
  #mount > footer {
    max-width: 700px;
  }
}
@media (min-width: 992px) {
  #mount > header,
  #mount > main,
  #mount > footer {
    max-width: 920px;
  }
}
@media (min-width: 1200px) {
  #mount > header,
  #mount > main,
  #mount > footer {
    max-width: 1130px;
  }
}

/**
* Container
*/
.container,
.container-fluid {
  width: 100%;
  margin-right: auto;
  margin-left: auto;
  padding-right: var(--spacing);
  padding-left: var(--spacing);
}

@media (min-width: 576px) {
  .container {
    max-width: 510px;
    padding-right: 0;
    padding-left: 0;
  }
}
@media (min-width: 768px) {
  .container {
    max-width: 700px;
  }
}
@media (min-width: 992px) {
  .container {
    max-width: 920px;
  }
}
@media (min-width: 1200px) {
  .container {
    max-width: 1130px;
  }
}

/**
 * Section
 * Responsive spacings for section
 */
section {
  margin-bottom: var(--block-spacing-vertical);
}

/**
* Grid
* Minimal grid system with auto-layout columns
*/
.grid {
  grid-column-gap: var(--grid-spacing-horizontal);
  grid-row-gap: var(--grid-spacing-vertical);
  display: grid;
  grid-template-columns: 1fr;
  margin: 0;
}
@media (min-width: 992px) {
  .grid {
    grid-template-columns: repeat(auto-fit, minmax(0%, 1fr));
  }
}
.grid > * {
  min-width: 0;
}

/**
 * Horizontal scroller (<figure>)
 */
figure {
  display: block;
  margin: 0;
  padding: 0;
  overflow-x: auto;
}
figure figcaption {
  padding: calc(var(--spacing) * 0.5) 0;
  color: var(--muted-color);
}

/**
 * Typography
 */
b,
strong {
  font-weight: bolder;
}

sub,
sup {
  position: relative;
  font-size: 0.75em;
  line-height: 0;
  vertical-align: baseline;
}

sub {
  bottom: -0.25em;
}

sup {
  top: -0.5em;
}

address,
blockquote,
dl,
figure,
form,
ol,
p,
pre,
table,
ul {
  margin-top: 0;
  margin-bottom: var(--typography-spacing-vertical);
  color: var(--color);
  font-style: normal;
  font-weight: var(--font-weight);
  font-size: var(--font-size);
}

a,
[role="link"] {
  --color: var(--primary);
  --background-color: transparent;
  outline: none;
  background-color: var(--background-color);
  color: var(--color);
  -webkit-text-decoration: var(--text-decoration);
  text-decoration: var(--text-decoration);
  transition: background-color var(--transition), color var(--transition),
    box-shadow var(--transition), -webkit-text-decoration var(--transition);
  transition: background-color var(--transition), color var(--transition),
    text-decoration var(--transition), box-shadow var(--transition);
  transition: background-color var(--transition), color var(--transition),
    text-decoration var(--transition), box-shadow var(--transition),
    -webkit-text-decoration var(--transition);
}
a:is([aria-current], :hover, :active, :focus),
[role="link"]:is([aria-current], :hover, :active, :focus) {
  --color: var(--primary-hover);
  --text-decoration: underline;
}
a:focus,
[role="link"]:focus {
  --background-color: var(--primary-focus);
}
a.secondary,
[role="link"].secondary {
  --color: var(--secondary);
}
a.secondary:is([aria-current], :hover, :active, :focus),
[role="link"].secondary:is([aria-current], :hover, :active, :focus) {
  --color: var(--secondary-hover);
}
a.secondary:focus,
[role="link"].secondary:focus {
  --background-color: var(--secondary-focus);
}
a.contrast,
[role="link"].contrast {
  --color: var(--contrast);
}
a.contrast:is([aria-current], :hover, :active, :focus),
[role="link"].contrast:is([aria-current], :hover, :active, :focus) {
  --color: var(--contrast-hover);
}
a.contrast:focus,
[role="link"].contrast:focus {
  --background-color: var(--contrast-focus);
}

h1,
h2,
h3,
h4,
h5,
h6 {
  margin-top: 0;
  margin-bottom: var(--typography-spacing-vertical);
  color: var(--color);
  font-weight: var(--font-weight);
  font-size: var(--font-size);
  font-family: var(--font-family);
}

h1 {
  --color: var(--h1-color);
}

h2 {
  --color: var(--h2-color);
}

h3 {
  --color: var(--h3-color);
}

h4 {
  --color: var(--h4-color);
}

h5 {
  --color: var(--h5-color);
}

h6 {
  --color: var(--h6-color);
}

:where(address, blockquote, dl, figure, form, ol, p, pre, table, ul)
  ~ :is(h1, h2, h3, h4, h5, h6) {
  margin-top: var(--typography-spacing-vertical);
}

hgroup,
.headings {
  margin-bottom: var(--typography-spacing-vertical);
}
hgroup > *,
.headings > * {
  margin-bottom: 0;
}
hgroup > *:last-child,
.headings > *:last-child {
  --color: var(--muted-color);
  --font-weight: unset;
  font-size: 1rem;
  font-family: unset;
}

p {
  margin-bottom: var(--typography-spacing-vertical);
}

small {
  font-size: var(--font-size);
}

:where(dl, ol, ul) {
  padding-right: 0;
  padding-left: var(--spacing);
  -webkit-padding-start: var(--spacing);
  padding-inline-start: var(--spacing);
  -webkit-padding-end: 0;
  padding-inline-end: 0;
}
:where(dl, ol, ul) li {
  margin-bottom: calc(var(--typography-spacing-vertical) * 0.25);
}

:where(dl, ol, ul) :is(dl, ol, ul) {
  margin: 0;
  margin-top: calc(var(--typography-spacing-vertical) * 0.25);
}

ul li {
  list-style: square;
}

mark {
  padding: 0.125rem 0.25rem;
  background-color: var(--mark-background-color);
  color: var(--mark-color);
  vertical-align: baseline;
}

blockquote {
  display: block;
  margin: var(--typography-spacing-vertical) 0;
  padding: var(--spacing);
  border-right: none;
  border-left: 0.25rem solid var(--blockquote-border-color);
  -webkit-border-start: 0.25rem solid var(--blockquote-border-color);
  border-inline-start: 0.25rem solid var(--blockquote-border-color);
  -webkit-border-end: none;
  border-inline-end: none;
}
blockquote footer {
  margin-top: calc(var(--typography-spacing-vertical) * 0.5);
  color: var(--blockquote-footer-color);
}

abbr[title] {
  border-bottom: 1px dotted;
  text-decoration: none;
  cursor: help;
}

ins {
  color: var(--ins-color);
  text-decoration: none;
}

del {
  color: var(--del-color);
}

::-moz-selection {
  background-color: var(--primary-focus);
}

::selection {
  background-color: var(--primary-focus);
}

/**
 * Embedded content
 */
:where(audio, canvas, iframe, img, svg, video) {
  vertical-align: middle;
}

audio,
video {
  display: inline-block;
}

audio:not([controls]) {
  display: none;
  height: 0;
}

:where(iframe) {
  border-style: none;
}

img {
  max-width: 100%;
  height: auto;
  border-style: none;
}

:where(svg:not([fill])) {
  fill: currentColor;
}

svg:not(#mount) {
  overflow: hidden;
}

/**
 * Button
 */
button {
  margin: 0;
  overflow: visible;
  font-family: inherit;
  text-transform: none;
}

button,
[type="button"],
[type="reset"],
[type="submit"] {
  -webkit-appearance: button;
}

button {
  display: block;
  width: 100%;
  margin-bottom: var(--spacing);
}

[role="button"] {
  display: inline-block;
  text-decoration: none;
}

button,
input[type="submit"],
input[type="button"],
input[type="reset"],
[role="button"] {
  --background-color: var(--primary);
  --border-color: var(--primary);
  --color: var(--primary-inverse);
  --box-shadow: var(--button-box-shadow, 0 0 0 rgba(0, 0, 0, 0));
  padding: var(--form-element-spacing-vertical)
    var(--form-element-spacing-horizontal);
  border: var(--border-width) solid var(--border-color);
  border-radius: var(--border-radius);
  outline: none;
  background-color: var(--background-color);
  box-shadow: var(--box-shadow);
  color: var(--color);
  font-weight: var(--font-weight);
  font-size: 1rem;
  line-height: var(--line-height);
  text-align: center;
  cursor: pointer;
  transition: background-color var(--transition), border-color var(--transition),
    color var(--transition), box-shadow var(--transition);
}
button:is([aria-current], :hover, :active, :focus),
input[type="submit"]:is([aria-current], :hover, :active, :focus),
input[type="button"]:is([aria-current], :hover, :active, :focus),
input[type="reset"]:is([aria-current], :hover, :active, :focus),
[role="button"]:is([aria-current], :hover, :active, :focus) {
  --background-color: var(--primary-hover);
  --border-color: var(--primary-hover);
  --box-shadow: var(--button-hover-box-shadow, 0 0 0 rgba(0, 0, 0, 0));
  --color: var(--primary-inverse);
}
button:focus,
input[type="submit"]:focus,
input[type="button"]:focus,
input[type="reset"]:focus,
[role="button"]:focus {
  --box-shadow: var(--button-hover-box-shadow, 0 0 0 rgba(0, 0, 0, 0)),
    0 0 0 var(--outline-width) var(--primary-focus);
}

:is(
    button,
    input[type="submit"],
    input[type="button"],
    [role="button"]
  ).secondary,
input[type="reset"] {
  --background-color: var(--secondary);
  --border-color: var(--secondary);
  --color: var(--secondary-inverse);
  cursor: pointer;
}
:is(
    button,
    input[type="submit"],
    input[type="button"],
    [role="button"]
  ).secondary:is([aria-current], :hover, :active, :focus),
input[type="reset"]:is([aria-current], :hover, :active, :focus) {
  --background-color: var(--secondary-hover);
  --border-color: var(--secondary-hover);
  --color: var(--secondary-inverse);
}
:is(
    button,
    input[type="submit"],
    input[type="button"],
    [role="button"]
  ).secondary:focus,
input[type="reset"]:focus {
  --box-shadow: var(--button-hover-box-shadow, 0 0 0 rgba(0, 0, 0, 0)),
    0 0 0 var(--outline-width) var(--secondary-focus);
}

:is(
    button,
    input[type="submit"],
    input[type="button"],
    [role="button"]
  ).contrast {
  --background-color: var(--contrast);
  --border-color: var(--contrast);
  --color: var(--contrast-inverse);
}
:is(
    button,
    input[type="submit"],
    input[type="button"],
    [role="button"]
  ).contrast:is([aria-current], :hover, :active, :focus) {
  --background-color: var(--contrast-hover);
  --border-color: var(--contrast-hover);
  --color: var(--contrast-inverse);
}
:is(
    button,
    input[type="submit"],
    input[type="button"],
    [role="button"]
  ).contrast:focus {
  --box-shadow: var(--button-hover-box-shadow, 0 0 0 rgba(0, 0, 0, 0)),
    0 0 0 var(--outline-width) var(--contrast-focus);
}

:is(
    button,
    input[type="submit"],
    input[type="button"],
    [role="button"]
  ).outline,
input[type="reset"].outline {
  --background-color: transparent;
  --color: var(--primary);
}
:is(
    button,
    input[type="submit"],
    input[type="button"],
    [role="button"]
  ).outline:is([aria-current], :hover, :active, :focus),
input[type="reset"].outline:is([aria-current], :hover, :active, :focus) {
  --background-color: transparent;
  --color: var(--primary-hover);
}

:is(
    button,
    input[type="submit"],
    input[type="button"],
    [role="button"]
  ).outline.secondary,
input[type="reset"].outline {
  --color: var(--secondary);
}
:is(
    button,
    input[type="submit"],
    input[type="button"],
    [role="button"]
  ).outline.secondary:is([aria-current], :hover, :active, :focus),
input[type="reset"].outline:is([aria-current], :hover, :active, :focus) {
  --color: var(--secondary-hover);
}

:is(
    button,
    input[type="submit"],
    input[type="button"],
    [role="button"]
  ).outline.contrast {
  --color: var(--contrast);
}
:is(
    button,
    input[type="submit"],
    input[type="button"],
    [role="button"]
  ).outline.contrast:is([aria-current], :hover, :active, :focus) {
  --color: var(--contrast-hover);
}

:where(
    button,
    [type="submit"],
    [type="button"],
    [type="reset"],
    [role="button"]
  )[disabled],
:where(fieldset[disabled])
  :is(
    button,
    [type="submit"],
    [type="button"],
    [type="reset"],
    [role="button"]
  ),
a[role="button"]:not([href]) {
  opacity: 0.5;
  pointer-events: none;
}

/**
 * Form elements
 */
input,
optgroup,
select,
textarea {
  margin: 0;
  font-size: 1rem;
  line-height: var(--line-height);
  font-family: inherit;
  letter-spacing: inherit;
}

input {
  overflow: visible;
}

select {
  text-transform: none;
}

legend {
  max-width: 100%;
  padding: 0;
  color: inherit;
  white-space: normal;
}

textarea {
  overflow: auto;
}

[type="checkbox"],
[type="radio"] {
  padding: 0;
}

::-webkit-inner-spin-button,
::-webkit-outer-spin-button {
  height: auto;
}

[type="search"] {
  -webkit-appearance: textfield;
  outline-offset: -2px;
}

[type="search"]::-webkit-search-decoration {
  -webkit-appearance: none;
}

::-webkit-file-upload-button {
  -webkit-appearance: button;
  font: inherit;
}

::-moz-focus-inner {
  padding: 0;
  border-style: none;
}

:-moz-focusring {
  outline: none;
}

:-moz-ui-invalid {
  box-shadow: none;
}

::-ms-expand {
  display: none;
}

[type="file"],
[type="range"] {
  padding: 0;
  border-width: 0;
}

input:not([type="checkbox"], [type="radio"], [type="range"]) {
  height: calc(
    1rem * var(--line-height) + var(--form-element-spacing-vertical) * 2 +
      var(--border-width) * 2
  );
}

fieldset {
  margin: 0;
  margin-bottom: var(--spacing);
  padding: 0;
  border: 0;
}

label,
fieldset legend {
  display: block;
  margin-bottom: calc(var(--spacing) * 0.25);
  font-weight: var(--form-label-font-weight, var(--font-weight));
}

input:not([type="checkbox"], [type="radio"]),
select,
textarea {
  width: 100%;
}

input:not([type="checkbox"], [type="radio"], [type="range"], [type="file"]),
select,
textarea {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  padding: var(--form-element-spacing-vertical)
    var(--form-element-spacing-horizontal);
}

input,
select,
textarea {
  --background-color: var(--form-element-background-color);
  --border-color: var(--form-element-border-color);
  --color: var(--form-element-color);
  --box-shadow: none;
  border: var(--border-width) solid var(--border-color);
  border-radius: var(--border-radius);
  outline: none;
  background-color: var(--background-color);
  box-shadow: var(--box-shadow);
  color: var(--color);
  font-weight: var(--font-weight);
  transition: background-color var(--transition), border-color var(--transition),
    color var(--transition), box-shadow var(--transition);
}

input:not(
    [type="submit"],
    [type="button"],
    [type="reset"],
    [type="checkbox"],
    [type="radio"],
    [readonly]
  ):is(:active, :focus),
:where(select, textarea):is(:active, :focus) {
  --background-color: var(--form-element-active-background-color);
}

input:not(
    [type="submit"],
    [type="button"],
    [type="reset"],
    [role="switch"],
    [readonly]
  ):is(:active, :focus),
:where(select, textarea):is(:active, :focus) {
  --border-color: var(--form-element-active-border-color);
}

input:not(
    [type="submit"],
    [type="button"],
    [type="reset"],
    [type="range"],
    [type="file"],
    [readonly]
  ):focus,
select:focus,
textarea:focus {
  --box-shadow: 0 0 0 var(--outline-width) var(--form-element-focus-color);
}

input:not([type="submit"], [type="button"], [type="reset"])[disabled],
select[disabled],
textarea[disabled],
:where(fieldset[disabled])
  :is(
    input:not([type="submit"], [type="button"], [type="reset"]),
    select,
    textarea
  ) {
  --background-color: var(--form-element-disabled-background-color);
  --border-color: var(--form-element-disabled-border-color);
  opacity: var(--form-element-disabled-opacity);
  pointer-events: none;
}

:where(input, select, textarea):not(
    [type="checkbox"],
    [type="radio"],
    [type="date"],
    [type="datetime-local"],
    [type="month"],
    [type="time"],
    [type="week"]
  )[aria-invalid] {
  padding-right: calc(
    var(--form-element-spacing-horizontal) + 1.5rem
  ) !important;
  padding-left: var(--form-element-spacing-horizontal);
  -webkit-padding-start: var(--form-element-spacing-horizontal) !important;
  padding-inline-start: var(--form-element-spacing-horizontal) !important;
  -webkit-padding-end: calc(
    var(--form-element-spacing-horizontal) + 1.5rem
  ) !important;
  padding-inline-end: calc(
    var(--form-element-spacing-horizontal) + 1.5rem
  ) !important;
  background-position: center right 0.75rem;
  background-size: 1rem auto;
  background-repeat: no-repeat;
}
:where(input, select, textarea):not(
    [type="checkbox"],
    [type="radio"],
    [type="date"],
    [type="datetime-local"],
    [type="month"],
    [type="time"],
    [type="week"]
  )[aria-invalid="false"] {
  background-image: var(--icon-valid);
}
:where(input, select, textarea):not(
    [type="checkbox"],
    [type="radio"],
    [type="date"],
    [type="datetime-local"],
    [type="month"],
    [type="time"],
    [type="week"]
  )[aria-invalid="true"] {
  background-image: var(--icon-invalid);
}
:where(input, select, textarea)[aria-invalid="false"] {
  --border-color: var(--form-element-valid-border-color);
}
:where(input, select, textarea)[aria-invalid="false"]:is(:active, :focus) {
  --border-color: var(--form-element-valid-active-border-color) !important;
  --box-shadow: 0 0 0 var(--outline-width) var(--form-element-valid-focus-color) !important;
}
:where(input, select, textarea)[aria-invalid="true"] {
  --border-color: var(--form-element-invalid-border-color);
}
:where(input, select, textarea)[aria-invalid="true"]:is(:active, :focus) {
  --border-color: var(--form-element-invalid-active-border-color) !important;
  --box-shadow: 0 0 0 var(--outline-width)
    var(--form-element-invalid-focus-color) !important;
}

[dir="rtl"]
  :where(input, select, textarea):not([type="checkbox"], [type="radio"]):is(
    [aria-invalid],
    [aria-invalid="true"],
    [aria-invalid="false"]
  ) {
  background-position: center left 0.75rem;
}

input::placeholder,
input::-webkit-input-placeholder,
textarea::placeholder,
textarea::-webkit-input-placeholder,
select:invalid {
  color: var(--form-element-placeholder-color);
  opacity: 1;
}

input:not([type="checkbox"], [type="radio"]),
select,
textarea {
  margin-bottom: var(--spacing);
}

select::-ms-expand {
  border: 0;
  background-color: transparent;
}
select:not([multiple], [size]) {
  padding-right: calc(var(--form-element-spacing-horizontal) + 1.5rem);
  padding-left: var(--form-element-spacing-horizontal);
  -webkit-padding-start: var(--form-element-spacing-horizontal);
  padding-inline-start: var(--form-element-spacing-horizontal);
  -webkit-padding-end: calc(var(--form-element-spacing-horizontal) + 1.5rem);
  padding-inline-end: calc(var(--form-element-spacing-horizontal) + 1.5rem);
  background-image: var(--icon-chevron);
  background-position: center right 0.75rem;
  background-size: 1rem auto;
  background-repeat: no-repeat;
}

[dir="rtl"] select:not([multiple], [size]) {
  background-position: center left 0.75rem;
}

:where(input, select, textarea) + small {
  display: block;
  width: 100%;
  margin-top: calc(var(--spacing) * -0.75);
  margin-bottom: var(--spacing);
  color: var(--muted-color);
}

label > :where(input, select, textarea) {
  margin-top: calc(var(--spacing) * 0.25);
}

/**
 * Form elements
 * Checkboxes & Radios
 */
[type="checkbox"],
[type="radio"] {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  width: 1.25em;
  height: 1.25em;
  margin-top: -0.125em;
  margin-right: 0.375em;
  margin-left: 0;
  -webkit-margin-start: 0;
  margin-inline-start: 0;
  -webkit-margin-end: 0.375em;
  margin-inline-end: 0.375em;
  border-width: var(--border-width);
  font-size: inherit;
  vertical-align: middle;
  cursor: pointer;
}
[type="checkbox"]::-ms-check,
[type="radio"]::-ms-check {
  display: none;
}
[type="checkbox"]:checked,
[type="checkbox"]:checked:active,
[type="checkbox"]:checked:focus,
[type="radio"]:checked,
[type="radio"]:checked:active,
[type="radio"]:checked:focus {
  --background-color: var(--primary);
  --border-color: var(--primary);
  background-image: var(--icon-checkbox);
  background-position: center;
  background-size: 0.75em auto;
  background-repeat: no-repeat;
}
[type="checkbox"] ~ label,
[type="radio"] ~ label {
  display: inline-block;
  margin-right: 0.375em;
  margin-bottom: 0;
  cursor: pointer;
}

[type="checkbox"]:indeterminate {
  --background-color: var(--primary);
  --border-color: var(--primary);
  background-image: var(--icon-minus);
  background-position: center;
  background-size: 0.75em auto;
  background-repeat: no-repeat;
}

[type="radio"] {
  border-radius: 50%;
}
[type="radio"]:checked,
[type="radio"]:checked:active,
[type="radio"]:checked:focus {
  --background-color: var(--primary-inverse);
  border-width: 0.35em;
  background-image: none;
}

[type="checkbox"][role="switch"] {
  --background-color: var(--switch-background-color);
  --border-color: var(--switch-background-color);
  --color: var(--switch-color);
  width: 2.25em;
  height: 1.25em;
  border: var(--border-width) solid var(--border-color);
  border-radius: 1.25em;
  background-color: var(--background-color);
  line-height: 1.25em;
}
[type="checkbox"][role="switch"]:focus {
  --background-color: var(--switch-background-color);
  --border-color: var(--switch-background-color);
}
[type="checkbox"][role="switch"]:checked {
  --background-color: var(--switch-checked-background-color);
  --border-color: var(--switch-checked-background-color);
}
[type="checkbox"][role="switch"]:before {
  display: block;
  width: calc(1.25em - (var(--border-width) * 2));
  height: 100%;
  border-radius: 50%;
  background-color: var(--color);
  content: "";
  transition: margin 0.1s ease-in-out;
}
[type="checkbox"][role="switch"]:checked {
  background-image: none;
}
[type="checkbox"][role="switch"]:checked::before {
  margin-left: calc(1.125em - var(--border-width));
  -webkit-margin-start: calc(1.125em - var(--border-width));
  margin-inline-start: calc(1.125em - var(--border-width));
}

[type="checkbox"][aria-invalid="false"],
[type="checkbox"]:checked[aria-invalid="false"],
[type="radio"][aria-invalid="false"],
[type="radio"]:checked[aria-invalid="false"],
[type="checkbox"][role="switch"][aria-invalid="false"],
[type="checkbox"][role="switch"]:checked[aria-invalid="false"] {
  --border-color: var(--form-element-valid-border-color);
}
[type="checkbox"][aria-invalid="true"],
[type="checkbox"]:checked[aria-invalid="true"],
[type="radio"][aria-invalid="true"],
[type="radio"]:checked[aria-invalid="true"],
[type="checkbox"][role="switch"][aria-invalid="true"],
[type="checkbox"][role="switch"]:checked[aria-invalid="true"] {
  --border-color: var(--form-element-invalid-border-color);
}

/**
 * Form elements
 * Alternatives input types (Not Checkboxes & Radios)
 */
[type="color"]::-webkit-color-swatch-wrapper {
  padding: 0;
}
[type="color"]::-moz-focus-inner {
  padding: 0;
}
[type="color"]::-webkit-color-swatch {
  border: 0;
  border-radius: calc(var(--border-radius) * 0.5);
}
[type="color"]::-moz-color-swatch {
  border: 0;
  border-radius: calc(var(--border-radius) * 0.5);
}

input:not([type="checkbox"], [type="radio"], [type="range"], [type="file"]):is(
    [type="date"],
    [type="datetime-local"],
    [type="month"],
    [type="time"],
    [type="week"]
  ) {
  --icon-position: 0.75rem;
  --icon-width: 1rem;
  padding-right: calc(var(--icon-width) + var(--icon-position));
  background-image: var(--icon-date);
  background-position: center right var(--icon-position);
  background-size: var(--icon-width) auto;
  background-repeat: no-repeat;
}
input:not(
    [type="checkbox"],
    [type="radio"],
    [type="range"],
    [type="file"]
  )[type="time"] {
  background-image: var(--icon-time);
}

[type="date"]::-webkit-calendar-picker-indicator,
[type="datetime-local"]::-webkit-calendar-picker-indicator,
[type="month"]::-webkit-calendar-picker-indicator,
[type="time"]::-webkit-calendar-picker-indicator,
[type="week"]::-webkit-calendar-picker-indicator {
  width: var(--icon-width);
  margin-right: calc(var(--icon-width) * -1);
  margin-left: var(--icon-position);
  opacity: 0;
}

[dir="rtl"]
  :is(
    [type="date"],
    [type="datetime-local"],
    [type="month"],
    [type="time"],
    [type="week"]
  ) {
  text-align: right;
}

[type="file"] {
  --color: var(--muted-color);
  padding: calc(var(--form-element-spacing-vertical) * 0.5) 0;
  border: 0;
  border-radius: 0;
  background: none;
}
[type="file"]::file-selector-button {
  --background-color: var(--secondary);
  --border-color: var(--secondary);
  --color: var(--secondary-inverse);
  margin-right: calc(var(--spacing) / 2);
  margin-left: 0;
  -webkit-margin-start: 0;
  margin-inline-start: 0;
  -webkit-margin-end: calc(var(--spacing) / 2);
  margin-inline-end: calc(var(--spacing) / 2);
  padding: calc(var(--form-element-spacing-vertical) * 0.5)
    calc(var(--form-element-spacing-horizontal) * 0.5);
  border: var(--border-width) solid var(--border-color);
  border-radius: var(--border-radius);
  outline: none;
  background-color: var(--background-color);
  box-shadow: var(--box-shadow);
  color: var(--color);
  font-weight: var(--font-weight);
  font-size: 1rem;
  line-height: var(--line-height);
  text-align: center;
  cursor: pointer;
  transition: background-color var(--transition), border-color var(--transition),
    color var(--transition), box-shadow var(--transition);
}
[type="file"]::file-selector-button:is(:hover, :active, :focus) {
  --background-color: var(--secondary-hover);
  --border-color: var(--secondary-hover);
}
[type="file"]::-webkit-file-upload-button {
  --background-color: var(--secondary);
  --border-color: var(--secondary);
  --color: var(--secondary-inverse);
  margin-right: calc(var(--spacing) / 2);
  margin-left: 0;
  -webkit-margin-start: 0;
  margin-inline-start: 0;
  -webkit-margin-end: calc(var(--spacing) / 2);
  margin-inline-end: calc(var(--spacing) / 2);
  padding: calc(var(--form-element-spacing-vertical) * 0.5)
    calc(var(--form-element-spacing-horizontal) * 0.5);
  border: var(--border-width) solid var(--border-color);
  border-radius: var(--border-radius);
  outline: none;
  background-color: var(--background-color);
  box-shadow: var(--box-shadow);
  color: var(--color);
  font-weight: var(--font-weight);
  font-size: 1rem;
  line-height: var(--line-height);
  text-align: center;
  cursor: pointer;
  -webkit-transition: background-color var(--transition),
    border-color var(--transition), color var(--transition),
    box-shadow var(--transition);
  transition: background-color var(--transition), border-color var(--transition),
    color var(--transition), box-shadow var(--transition);
}
[type="file"]::-webkit-file-upload-button:is(:hover, :active, :focus) {
  --background-color: var(--secondary-hover);
  --border-color: var(--secondary-hover);
}
[type="file"]::-ms-browse {
  --background-color: var(--secondary);
  --border-color: var(--secondary);
  --color: var(--secondary-inverse);
  margin-right: calc(var(--spacing) / 2);
  margin-left: 0;
  margin-inline-start: 0;
  margin-inline-end: calc(var(--spacing) / 2);
  padding: calc(var(--form-element-spacing-vertical) * 0.5)
    calc(var(--form-element-spacing-horizontal) * 0.5);
  border: var(--border-width) solid var(--border-color);
  border-radius: var(--border-radius);
  outline: none;
  background-color: var(--background-color);
  box-shadow: var(--box-shadow);
  color: var(--color);
  font-weight: var(--font-weight);
  font-size: 1rem;
  line-height: var(--line-height);
  text-align: center;
  cursor: pointer;
  -ms-transition: background-color var(--transition),
    border-color var(--transition), color var(--transition),
    box-shadow var(--transition);
  transition: background-color var(--transition), border-color var(--transition),
    color var(--transition), box-shadow var(--transition);
}
[type="file"]::-ms-browse:is(:hover, :active, :focus) {
  --background-color: var(--secondary-hover);
  --border-color: var(--secondary-hover);
}

[type="range"] {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  width: 100%;
  height: 1.25rem;
  background: none;
}
[type="range"]::-webkit-slider-runnable-track {
  width: 100%;
  height: 0.25rem;
  border-radius: var(--border-radius);
  background-color: var(--range-border-color);
  -webkit-transition: background-color var(--transition),
    box-shadow var(--transition);
  transition: background-color var(--transition), box-shadow var(--transition);
}
[type="range"]::-moz-range-track {
  width: 100%;
  height: 0.25rem;
  border-radius: var(--border-radius);
  background-color: var(--range-border-color);
  -moz-transition: background-color var(--transition),
    box-shadow var(--transition);
  transition: background-color var(--transition), box-shadow var(--transition);
}
[type="range"]::-ms-track {
  width: 100%;
  height: 0.25rem;
  border-radius: var(--border-radius);
  background-color: var(--range-border-color);
  -ms-transition: background-color var(--transition),
    box-shadow var(--transition);
  transition: background-color var(--transition), box-shadow var(--transition);
}
[type="range"]::-webkit-slider-thumb {
  -webkit-appearance: none;
  width: 1.25rem;
  height: 1.25rem;
  margin-top: -0.5rem;
  border: 2px solid var(--range-thumb-border-color);
  border-radius: 50%;
  background-color: var(--range-thumb-color);
  cursor: pointer;
  -webkit-transition: background-color var(--transition),
    transform var(--transition);
  transition: background-color var(--transition), transform var(--transition);
}
[type="range"]::-moz-range-thumb {
  -webkit-appearance: none;
  width: 1.25rem;
  height: 1.25rem;
  margin-top: -0.5rem;
  border: 2px solid var(--range-thumb-border-color);
  border-radius: 50%;
  background-color: var(--range-thumb-color);
  cursor: pointer;
  -moz-transition: background-color var(--transition),
    transform var(--transition);
  transition: background-color var(--transition), transform var(--transition);
}
[type="range"]::-ms-thumb {
  -webkit-appearance: none;
  width: 1.25rem;
  height: 1.25rem;
  margin-top: -0.5rem;
  border: 2px solid var(--range-thumb-border-color);
  border-radius: 50%;
  background-color: var(--range-thumb-color);
  cursor: pointer;
  -ms-transition: background-color var(--transition),
    transform var(--transition);
  transition: background-color var(--transition), transform var(--transition);
}
[type="range"]:hover,
[type="range"]:focus {
  --range-border-color: var(--range-active-border-color);
  --range-thumb-color: var(--range-thumb-hover-color);
}
[type="range"]:active {
  --range-thumb-color: var(--range-thumb-active-color);
}
[type="range"]:active::-webkit-slider-thumb {
  transform: scale(1.25);
}
[type="range"]:active::-moz-range-thumb {
  transform: scale(1.25);
}
[type="range"]:active::-ms-thumb {
  transform: scale(1.25);
}

input:not(
    [type="checkbox"],
    [type="radio"],
    [type="range"],
    [type="file"]
  )[type="search"] {
  -webkit-padding-start: calc(var(--form-element-spacing-horizontal) + 1.75rem);
  padding-inline-start: calc(var(--form-element-spacing-horizontal) + 1.75rem);
  border-radius: 5rem;
  background-image: var(--icon-search);
  background-position: center left 1.125rem;
  background-size: 1rem auto;
  background-repeat: no-repeat;
}
input:not(
    [type="checkbox"],
    [type="radio"],
    [type="range"],
    [type="file"]
  )[type="search"][aria-invalid] {
  -webkit-padding-start: calc(
    var(--form-element-spacing-horizontal) + 1.75rem
  ) !important;
  padding-inline-start: calc(
    var(--form-element-spacing-horizontal) + 1.75rem
  ) !important;
  background-position: center left 1.125rem, center right 0.75rem;
}
input:not(
    [type="checkbox"],
    [type="radio"],
    [type="range"],
    [type="file"]
  )[type="search"][aria-invalid="false"] {
  background-image: var(--icon-search), var(--icon-valid);
}
input:not(
    [type="checkbox"],
    [type="radio"],
    [type="range"],
    [type="file"]
  )[type="search"][aria-invalid="true"] {
  background-image: var(--icon-search), var(--icon-invalid);
}

[type="search"]::-webkit-search-cancel-button {
  -webkit-appearance: none;
  display: none;
}

[dir="rtl"]
  :where(input):not(
    [type="checkbox"],
    [type="radio"],
    [type="range"],
    [type="file"]
  )[type="search"] {
  background-position: center right 1.125rem;
}
[dir="rtl"]
  :where(input):not(
    [type="checkbox"],
    [type="radio"],
    [type="range"],
    [type="file"]
  )[type="search"][aria-invalid] {
  background-position: center right 1.125rem, center left 0.75rem;
}

/**
 * Table
 */
:where(table) {
  width: 100%;
  border-collapse: collapse;
  border-spacing: 0;
  text-indent: 0;
}

th,
td {
  padding: calc(var(--spacing) / 2) var(--spacing);
  border-bottom: var(--border-width) solid var(--table-border-color);
  color: var(--color);
  font-weight: var(--font-weight);
  font-size: var(--font-size);
  text-align: left;
  text-align: start;
}

tfoot th,
tfoot td {
  border-top: var(--border-width) solid var(--table-border-color);
  border-bottom: 0;
}

table[role="grid"] tbody tr:nth-child(odd) {
  background-color: var(--table-row-stripped-background-color);
}

/**
 * Code
 */
pre,
code,
kbd,
samp {
  font-size: 0.875em;
  font-family: var(--font-family);
}

pre {
  -ms-overflow-style: scrollbar;
  overflow: auto;
}

pre,
code,
kbd {
  border-radius: var(--border-radius);
  background: var(--code-background-color);
  color: var(--code-color);
  font-weight: var(--font-weight);
  line-height: initial;
}

code,
kbd {
  display: inline-block;
  padding: 0.375rem 0.5rem;
}

pre {
  display: block;
  margin-bottom: var(--spacing);
  overflow-x: auto;
}
pre > code {
  display: block;
  padding: var(--spacing);
  background: none;
  font-size: 14px;
  line-height: var(--line-height);
}

code b {
  color: var(--code-tag-color);
  font-weight: var(--font-weight);
}
code i {
  color: var(--code-property-color);
  font-style: normal;
}
code u {
  color: var(--code-value-color);
  text-decoration: none;
}
code em {
  color: var(--code-comment-color);
  font-style: normal;
}

kbd {
  background-color: var(--code-kbd-background-color);
  color: var(--code-kbd-color);
  vertical-align: baseline;
}

/**
 * Miscs
 */
hr {
  height: 0;
  border: 0;
  border-top: 1px solid var(--muted-border-color);
  color: inherit;
}

[hidden],
template {
  display: none !important;
}

canvas {
  display: inline-block;
}

/**
 * Accordion (<details>)
 */
details {
  display: block;
  margin-bottom: var(--spacing);
  padding-bottom: var(--spacing);
  border-bottom: var(--border-width) solid var(--accordion-border-color);
}
details summary {
  line-height: 1rem;
  list-style-type: none;
  cursor: pointer;
  transition: color var(--transition);
}
details summary:not([role]) {
  color: var(--accordion-close-summary-color);
}
details summary::-webkit-details-marker {
  display: none;
}
details summary::marker {
  display: none;
}
details summary::-moz-list-bullet {
  list-style-type: none;
}
details summary::after {
  display: block;
  width: 1rem;
  height: 1rem;
  -webkit-margin-start: calc(var(--spacing, 1rem) * 0.5);
  margin-inline-start: calc(var(--spacing, 1rem) * 0.5);
  float: right;
  transform: rotate(-90deg);
  background-image: var(--icon-chevron);
  background-position: right center;
  background-size: 1rem auto;
  background-repeat: no-repeat;
  content: "";
  transition: transform var(--transition);
}
details summary:focus {
  outline: none;
}
details summary:focus:not([role="button"]) {
  color: var(--accordion-active-summary-color);
}
details summary[role="button"] {
  width: 100%;
  text-align: left;
}
details summary[role="button"]::after {
  height: calc(1rem * var(--line-height, 1.5));
  background-image: var(--icon-chevron-button);
}
details summary[role="button"]:not(.outline).contrast::after {
  background-image: var(--icon-chevron-button-inverse);
}
details[open] > summary {
  margin-bottom: calc(var(--spacing));
}
details[open] > summary:not([role]):not(:focus) {
  color: var(--accordion-open-summary-color);
}
details[open] > summary::after {
  transform: rotate(0);
}

[dir="rtl"] details summary {
  text-align: right;
}
[dir="rtl"] details summary::after {
  float: left;
  background-position: left center;
}

/**
 * Card (<article>)
 */
article {
  margin: var(--block-spacing-vertical) 0;
  padding: var(--block-spacing-vertical) var(--block-spacing-horizontal);
  border-radius: var(--border-radius);
  background: var(--card-background-color);
  box-shadow: var(--card-box-shadow);
}
article > header,
article > footer {
  margin-right: calc(var(--block-spacing-horizontal) * -1);
  margin-left: calc(var(--block-spacing-horizontal) * -1);
  padding: calc(var(--block-spacing-vertical) * 0.66)
    var(--block-spacing-horizontal);
  background-color: var(--card-sectionning-background-color);
}
article > header {
  margin-top: calc(var(--block-spacing-vertical) * -1);
  margin-bottom: var(--block-spacing-vertical);
  border-bottom: var(--border-width) solid var(--card-border-color);
  border-top-right-radius: var(--border-radius);
  border-top-left-radius: var(--border-radius);
}
article > footer {
  margin-top: var(--block-spacing-vertical);
  margin-bottom: calc(var(--block-spacing-vertical) * -1);
  border-top: var(--border-width) solid var(--card-border-color);
  border-bottom-right-radius: var(--border-radius);
  border-bottom-left-radius: var(--border-radius);
}

/**
 * Modal (<dialog>)
 */
#mount {
  --scrollbar-width: 0px;
}

dialog {
  display: flex;
  z-index: 999;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  align-items: center;
  justify-content: center;
  width: inherit;
  min-width: 100%;
  height: inherit;
  min-height: 100%;
  padding: var(--spacing);
  border: 0;
  -webkit-backdrop-filter: var(--modal-overlay-backdrop-filter);
  backdrop-filter: var(--modal-overlay-backdrop-filter);
  background-color: var(--modal-overlay-background-color);
  color: var(--color);
}
dialog article {
  max-height: calc(100vh - var(--spacing) * 2);
  overflow: auto;
}
@media (min-width: 576px) {
  dialog article {
    max-width: 510px;
  }
}
@media (min-width: 768px) {
  dialog article {
    max-width: 700px;
  }
}
dialog article > header,
dialog article > footer {
  padding: calc(var(--block-spacing-vertical) * 0.5)
    var(--block-spacing-horizontal);
}
dialog article > header .close {
  margin: 0;
  margin-left: var(--spacing);
  float: right;
}
dialog article > footer {
  text-align: right;
}
dialog article > footer [role="button"] {
  margin-bottom: 0;
}
dialog article > footer [role="button"]:not(:first-of-type) {
  margin-left: calc(var(--spacing) * 0.5);
}
dialog article p:last-of-type {
  margin: 0;
}
dialog article .close {
  display: block;
  width: 1rem;
  height: 1rem;
  margin-top: calc(var(--block-spacing-vertical) * -0.5);
  margin-bottom: var(--typography-spacing-vertical);
  margin-left: auto;
  background-image: var(--icon-close);
  background-position: center;
  background-size: auto 1rem;
  background-repeat: no-repeat;
  opacity: 0.5;
  transition: opacity var(--transition);
}
dialog article .close:is([aria-current], :hover, :active, :focus) {
  opacity: 1;
}
dialog:not([open]),
dialog[open="false"] {
  display: none;
}

.modal-is-open {
  padding-right: var(--scrollbar-width, 0px);
  overflow: hidden;
  pointer-events: none;
}
.modal-is-open dialog {
  pointer-events: auto;
}

:where(.modal-is-opening, .modal-is-closing) dialog,
:where(.modal-is-opening, .modal-is-closing) dialog > article {
  animation-duration: 0.2s;
  animation-timing-function: ease-in-out;
  animation-fill-mode: both;
}
:where(.modal-is-opening, .modal-is-closing) dialog {
  animation-duration: 0.8s;
  animation-name: modal-overlay;
}
:where(.modal-is-opening, .modal-is-closing) dialog > article {
  animation-delay: 0.2s;
  animation-name: modal;
}

.modal-is-closing dialog,
.modal-is-closing dialog > article {
  animation-delay: 0s;
  animation-direction: reverse;
}

@keyframes modal-overlay {
  from {
    -webkit-backdrop-filter: none;
    backdrop-filter: none;
    background-color: transparent;
  }
}
@keyframes modal {
  from {
    transform: translateY(-100%);
    opacity: 0;
  }
}
/**
 * Nav
 */
:where(nav li)::before {
  float: left;
  content: "\u200B";
}

nav,
nav ul {
  display: flex;
}

nav {
  justify-content: space-between;
}
nav ol,
nav ul {
  align-items: center;
  margin-bottom: 0;
  padding: 0;
  list-style: none;
}
nav ol:first-of-type,
nav ul:first-of-type {
  margin-left: calc(var(--nav-element-spacing-horizontal) * -1);
}
nav ol:last-of-type,
nav ul:last-of-type {
  margin-right: calc(var(--nav-element-spacing-horizontal) * -1);
}
nav li {
  display: inline-block;
  margin: 0;
  padding: var(--nav-element-spacing-vertical)
    var(--nav-element-spacing-horizontal);
}
nav li > * {
  --spacing: 0;
}
nav :where(a, [role="link"]) {
  display: inline-block;
  margin: calc(var(--nav-link-spacing-vertical) * -1)
    calc(var(--nav-link-spacing-horizontal) * -1);
  padding: var(--nav-link-spacing-vertical) var(--nav-link-spacing-horizontal);
  border-radius: var(--border-radius);
  text-decoration: none;
}
nav :where(a, [role="link"]):is([aria-current], :hover, :active, :focus) {
  text-decoration: none;
}
nav[aria-label="breadcrumb"] {
  align-items: center;
  justify-content: start;
}
nav[aria-label="breadcrumb"] ul li:not(:first-child) {
  -webkit-margin-start: var(--nav-link-spacing-horizontal);
  margin-inline-start: var(--nav-link-spacing-horizontal);
}
nav[aria-label="breadcrumb"] ul li:not(:last-child) ::after {
  position: absolute;
  width: calc(var(--nav-link-spacing-horizontal) * 2);
  -webkit-margin-start: calc(var(--nav-link-spacing-horizontal) / 2);
  margin-inline-start: calc(var(--nav-link-spacing-horizontal) / 2);
  content: "/";
  color: var(--muted-color);
  text-align: center;
}
nav[aria-label="breadcrumb"] a[aria-current] {
  background-color: transparent;
  color: inherit;
  text-decoration: none;
  pointer-events: none;
}
nav [role="button"] {
  margin-right: inherit;
  margin-left: inherit;
  padding: var(--nav-link-spacing-vertical) var(--nav-link-spacing-horizontal);
}

aside nav,
aside ol,
aside ul,
aside li {
  display: block;
}
aside li {
  padding: calc(var(--nav-element-spacing-vertical) * 0.5)
    var(--nav-element-spacing-horizontal);
}
aside li a {
  display: block;
}
aside li [role="button"] {
  margin: inherit;
}

[dir="rtl"] nav[aria-label="breadcrumb"] ul li:not(:last-child) ::after {
  content: "\\\\";
}

/**
 * Progress
 */
progress {
  display: inline-block;
  vertical-align: baseline;
}

progress {
  -webkit-appearance: none;
  -moz-appearance: none;
  display: inline-block;
  appearance: none;
  width: 100%;
  height: 0.5rem;
  margin-bottom: calc(var(--spacing) * 0.5);
  overflow: hidden;
  border: 0;
  border-radius: var(--border-radius);
  background-color: var(--progress-background-color);
  color: var(--progress-color);
}
progress::-webkit-progress-bar {
  border-radius: var(--border-radius);
  background: none;
}
progress[value]::-webkit-progress-value {
  background-color: var(--progress-color);
}
progress::-moz-progress-bar {
  background-color: var(--progress-color);
}
@media (prefers-reduced-motion: no-preference) {
  progress:indeterminate {
    background: var(--progress-background-color)
      linear-gradient(
        to right,
        var(--progress-color) 30%,
        var(--progress-background-color) 30%
      )
      top left/150% 150% no-repeat;
    animation: progress-indeterminate 1s linear infinite;
  }
  progress:indeterminate[value]::-webkit-progress-value {
    background-color: transparent;
  }
  progress:indeterminate::-moz-progress-bar {
    background-color: transparent;
  }
}

@media (prefers-reduced-motion: no-preference) {
  [dir="rtl"] progress:indeterminate {
    animation-direction: reverse;
  }
}

@keyframes progress-indeterminate {
  0% {
    background-position: 200% 0;
  }
  100% {
    background-position: -200% 0;
  }
}
/**
 * Dropdown ([role="list"])
 */
details[role="list"],
li[role="list"] {
  position: relative;
}

details[role="list"] summary + ul,
li[role="list"] > ul {
  display: flex;
  z-index: 99;
  position: absolute;
  top: auto;
  right: 0;
  left: 0;
  flex-direction: column;
  margin: 0;
  padding: 0;
  border: var(--border-width) solid var(--dropdown-border-color);
  border-radius: var(--border-radius);
  border-top-right-radius: 0;
  border-top-left-radius: 0;
  background-color: var(--dropdown-background-color);
  box-shadow: var(--card-box-shadow);
  color: var(--dropdown-color);
  white-space: nowrap;
}
details[role="list"] summary + ul li,
li[role="list"] > ul li {
  width: 100%;
  margin-bottom: 0;
  padding: calc(var(--form-element-spacing-vertical) * 0.5)
    var(--form-element-spacing-horizontal);
  list-style: none;
}
details[role="list"] summary + ul li:first-of-type,
li[role="list"] > ul li:first-of-type {
  margin-top: calc(var(--form-element-spacing-vertical) * 0.5);
}
details[role="list"] summary + ul li:last-of-type,
li[role="list"] > ul li:last-of-type {
  margin-bottom: calc(var(--form-element-spacing-vertical) * 0.5);
}
details[role="list"] summary + ul li a,
li[role="list"] > ul li a {
  display: block;
  margin: calc(var(--form-element-spacing-vertical) * -0.5)
    calc(var(--form-element-spacing-horizontal) * -1);
  padding: calc(var(--form-element-spacing-vertical) * 0.5)
    var(--form-element-spacing-horizontal);
  overflow: hidden;
  color: var(--dropdown-color);
  text-decoration: none;
  text-overflow: ellipsis;
}
details[role="list"] summary + ul li a:hover,
li[role="list"] > ul li a:hover {
  background-color: var(--dropdown-hover-background-color);
}

details[role="list"] summary::after,
li[role="list"] > a::after {
  display: block;
  width: 1rem;
  height: calc(1rem * var(--line-height, 1.5));
  -webkit-margin-start: 0.5rem;
  margin-inline-start: 0.5rem;
  float: right;
  transform: rotate(0deg);
  background-position: right center;
  background-size: 1rem auto;
  background-repeat: no-repeat;
  content: "";
}

details[role="list"] {
  padding: 0;
  border-bottom: none;
}
details[role="list"] summary {
  margin-bottom: 0;
}
details[role="list"] summary:not([role]) {
  height: calc(
    1rem * var(--line-height) + var(--form-element-spacing-vertical) * 2 +
      var(--border-width) * 2
  );
  padding: var(--form-element-spacing-vertical)
    var(--form-element-spacing-horizontal);
  border: var(--border-width) solid var(--form-element-border-color);
  border-radius: var(--border-radius);
  background-color: var(--form-element-background-color);
  color: var(--form-element-placeholder-color);
  line-height: inherit;
  cursor: pointer;
  transition: background-color var(--transition), border-color var(--transition),
    color var(--transition), box-shadow var(--transition);
}
details[role="list"] summary:not([role]):active,
details[role="list"] summary:not([role]):focus {
  border-color: var(--form-element-active-border-color);
  background-color: var(--form-element-active-background-color);
}
details[role="list"] summary:not([role]):focus {
  box-shadow: 0 0 0 var(--outline-width) var(--form-element-focus-color);
}
details[role="list"][open] summary {
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}
details[role="list"][open] summary::before {
  display: block;
  z-index: 1;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: none;
  content: "";
  cursor: default;
}

nav details[role="list"] summary,
nav li[role="list"] a {
  display: flex;
  direction: ltr;
}

nav details[role="list"] summary + ul,
nav li[role="list"] > ul {
  min-width: -moz-fit-content;
  min-width: fit-content;
  border-radius: var(--border-radius);
}
nav details[role="list"] summary + ul li a,
nav li[role="list"] > ul li a {
  border-radius: 0;
}

nav details[role="list"] summary,
nav details[role="list"] summary:not([role]) {
  height: auto;
  padding: var(--nav-link-spacing-vertical) var(--nav-link-spacing-horizontal);
}
nav details[role="list"][open] summary {
  border-radius: var(--border-radius);
}
nav details[role="list"] summary + ul {
  margin-top: var(--outline-width);
  -webkit-margin-start: 0;
  margin-inline-start: 0;
}
nav details[role="list"] summary[role="link"] {
  margin-bottom: calc(var(--nav-link-spacing-vertical) * -1);
  line-height: var(--line-height);
}
nav details[role="list"] summary[role="link"] + ul {
  margin-top: calc(var(--nav-link-spacing-vertical) + var(--outline-width));
  -webkit-margin-start: calc(var(--nav-link-spacing-horizontal) * -1);
  margin-inline-start: calc(var(--nav-link-spacing-horizontal) * -1);
}

li[role="list"]:hover > ul,
li[role="list"] a:active ~ ul,
li[role="list"] a:focus ~ ul {
  display: flex;
}
li[role="list"] > ul {
  display: none;
  margin-top: calc(var(--nav-link-spacing-vertical) + var(--outline-width));
  -webkit-margin-start: calc(
    var(--nav-element-spacing-horizontal) - var(--nav-link-spacing-horizontal)
  );
  margin-inline-start: calc(
    var(--nav-element-spacing-horizontal) - var(--nav-link-spacing-horizontal)
  );
}
li[role="list"] > a::after {
  background-image: var(--icon-chevron);
}

/**
 * Loading ([aria-busy=true])
 */
[aria-busy="true"] {
  cursor: progress;
}

[aria-busy="true"]:not(input, select, textarea)::before {
  display: inline-block;
  width: 1em;
  height: 1em;
  border: 0.1875em solid currentColor;
  border-radius: 1em;
  border-right-color: transparent;
  content: "";
  vertical-align: text-bottom;
  vertical-align: -0.125em;
  animation: spinner 0.75s linear infinite;
  opacity: var(--loading-spinner-opacity);
}
[aria-busy="true"]:not(input, select, textarea):not(:empty)::before {
  margin-right: calc(var(--spacing) * 0.5);
  margin-left: 0;
  -webkit-margin-start: 0;
  margin-inline-start: 0;
  -webkit-margin-end: calc(var(--spacing) * 0.5);
  margin-inline-end: calc(var(--spacing) * 0.5);
}
[aria-busy="true"]:not(input, select, textarea):empty {
  text-align: center;
}

button[aria-busy="true"],
input[type="submit"][aria-busy="true"],
input[type="button"][aria-busy="true"],
input[type="reset"][aria-busy="true"],
a[aria-busy="true"] {
  pointer-events: none;
}

@keyframes spinner {
  to {
    transform: rotate(360deg);
  }
}
/**
 * Tooltip ([data-tooltip])
 */
[data-tooltip] {
  position: relative;
}
[data-tooltip]:not(a, button, input) {
  border-bottom: 1px dotted;
  text-decoration: none;
  cursor: help;
}
[data-tooltip][data-placement="top"]::before,
[data-tooltip][data-placement="top"]::after,
[data-tooltip]::before,
[data-tooltip]::after {
  display: block;
  z-index: 99;
  position: absolute;
  bottom: 100%;
  left: 50%;
  padding: 0.25rem 0.5rem;
  overflow: hidden;
  transform: translate(-50%, -0.25rem);
  border-radius: var(--border-radius);
  background: var(--tooltip-background-color);
  content: attr(data-tooltip);
  color: var(--tooltip-color);
  font-style: normal;
  font-weight: var(--font-weight);
  font-size: 0.875rem;
  text-decoration: none;
  text-overflow: ellipsis;
  white-space: nowrap;
  opacity: 0;
  pointer-events: none;
}
[data-tooltip][data-placement="top"]::after,
[data-tooltip]::after {
  padding: 0;
  transform: translate(-50%, 0rem);
  border-top: 0.3rem solid;
  border-right: 0.3rem solid transparent;
  border-left: 0.3rem solid transparent;
  border-radius: 0;
  background-color: transparent;
  content: "";
  color: var(--tooltip-background-color);
}
[data-tooltip][data-placement="bottom"]::before,
[data-tooltip][data-placement="bottom"]::after {
  top: 100%;
  bottom: auto;
  transform: translate(-50%, 0.25rem);
}
[data-tooltip][data-placement="bottom"]:after {
  transform: translate(-50%, -0.3rem);
  border: 0.3rem solid transparent;
  border-bottom: 0.3rem solid;
}
[data-tooltip][data-placement="left"]::before,
[data-tooltip][data-placement="left"]::after {
  top: 50%;
  right: 100%;
  bottom: auto;
  left: auto;
  transform: translate(-0.25rem, -50%);
}
[data-tooltip][data-placement="left"]:after {
  transform: translate(0.3rem, -50%);
  border: 0.3rem solid transparent;
  border-left: 0.3rem solid;
}
[data-tooltip][data-placement="right"]::before,
[data-tooltip][data-placement="right"]::after {
  top: 50%;
  right: auto;
  bottom: auto;
  left: 100%;
  transform: translate(0.25rem, -50%);
}
[data-tooltip][data-placement="right"]:after {
  transform: translate(-0.3rem, -50%);
  border: 0.3rem solid transparent;
  border-right: 0.3rem solid;
}
[data-tooltip]:focus::before,
[data-tooltip]:focus::after,
[data-tooltip]:hover::before,
[data-tooltip]:hover::after {
  opacity: 1;
}
@media (hover: hover) and (pointer: fine) {
  [data-tooltip][data-placement="bottom"]:focus::before,
  [data-tooltip][data-placement="bottom"]:focus::after,
  [data-tooltip][data-placement="bottom"]:hover [data-tooltip]:focus::before,
  [data-tooltip][data-placement="bottom"]:hover [data-tooltip]:focus::after,
  [data-tooltip]:hover::before,
  [data-tooltip]:hover::after {
    animation-duration: 0.2s;
    animation-name: tooltip-slide-top;
  }
  [data-tooltip][data-placement="bottom"]:focus::after,
  [data-tooltip][data-placement="bottom"]:hover [data-tooltip]:focus::after,
  [data-tooltip]:hover::after {
    animation-name: tooltip-caret-slide-top;
  }
  [data-tooltip][data-placement="bottom"]:focus::before,
  [data-tooltip][data-placement="bottom"]:focus::after,
  [data-tooltip][data-placement="bottom"]:hover::before,
  [data-tooltip][data-placement="bottom"]:hover::after {
    animation-duration: 0.2s;
    animation-name: tooltip-slide-bottom;
  }
  [data-tooltip][data-placement="bottom"]:focus::after,
  [data-tooltip][data-placement="bottom"]:hover::after {
    animation-name: tooltip-caret-slide-bottom;
  }
  [data-tooltip][data-placement="left"]:focus::before,
  [data-tooltip][data-placement="left"]:focus::after,
  [data-tooltip][data-placement="left"]:hover::before,
  [data-tooltip][data-placement="left"]:hover::after {
    animation-duration: 0.2s;
    animation-name: tooltip-slide-left;
  }
  [data-tooltip][data-placement="left"]:focus::after,
  [data-tooltip][data-placement="left"]:hover::after {
    animation-name: tooltip-caret-slide-left;
  }
  [data-tooltip][data-placement="right"]:focus::before,
  [data-tooltip][data-placement="right"]:focus::after,
  [data-tooltip][data-placement="right"]:hover::before,
  [data-tooltip][data-placement="right"]:hover::after {
    animation-duration: 0.2s;
    animation-name: tooltip-slide-right;
  }
  [data-tooltip][data-placement="right"]:focus::after,
  [data-tooltip][data-placement="right"]:hover::after {
    animation-name: tooltip-caret-slide-right;
  }
}
@keyframes tooltip-slide-top {
  from {
    transform: translate(-50%, 0.75rem);
    opacity: 0;
  }
  to {
    transform: translate(-50%, -0.25rem);
    opacity: 1;
  }
}
@keyframes tooltip-caret-slide-top {
  from {
    opacity: 0;
  }
  50% {
    transform: translate(-50%, -0.25rem);
    opacity: 0;
  }
  to {
    transform: translate(-50%, 0rem);
    opacity: 1;
  }
}
@keyframes tooltip-slide-bottom {
  from {
    transform: translate(-50%, -0.75rem);
    opacity: 0;
  }
  to {
    transform: translate(-50%, 0.25rem);
    opacity: 1;
  }
}
@keyframes tooltip-caret-slide-bottom {
  from {
    opacity: 0;
  }
  50% {
    transform: translate(-50%, -0.5rem);
    opacity: 0;
  }
  to {
    transform: translate(-50%, -0.3rem);
    opacity: 1;
  }
}
@keyframes tooltip-slide-left {
  from {
    transform: translate(0.75rem, -50%);
    opacity: 0;
  }
  to {
    transform: translate(-0.25rem, -50%);
    opacity: 1;
  }
}
@keyframes tooltip-caret-slide-left {
  from {
    opacity: 0;
  }
  50% {
    transform: translate(0.05rem, -50%);
    opacity: 0;
  }
  to {
    transform: translate(0.3rem, -50%);
    opacity: 1;
  }
}
@keyframes tooltip-slide-right {
  from {
    transform: translate(-0.75rem, -50%);
    opacity: 0;
  }
  to {
    transform: translate(0.25rem, -50%);
    opacity: 1;
  }
}
@keyframes tooltip-caret-slide-right {
  from {
    opacity: 0;
  }
  50% {
    transform: translate(-0.05rem, -50%);
    opacity: 0;
  }
  to {
    transform: translate(-0.3rem, -50%);
    opacity: 1;
  }
}

/**
 * Accessibility & User interaction
 */
[aria-controls] {
  cursor: pointer;
}

[aria-disabled="true"],
[disabled] {
  cursor: not-allowed;
}

[aria-hidden="false"][hidden] {
  display: initial;
}

[aria-hidden="false"][hidden]:not(:focus) {
  clip: rect(0, 0, 0, 0);
  position: absolute;
}

a,
area,
button,
input,
label,
select,
summary,
textarea,
[tabindex] {
  -ms-touch-action: manipulation;
}

[dir="rtl"] {
  direction: rtl;
}

/**
* Reduce Motion Features
*/
@media (prefers-reduced-motion: reduce) {
  *:not([aria-busy="true"]),
  :not([aria-busy="true"])::before,
  :not([aria-busy="true"])::after {
    background-attachment: initial !important;
    animation-duration: 1ms !important;
    animation-delay: -1ms !important;
    animation-iteration-count: 1 !important;
    scroll-behavior: auto !important;
    transition-delay: 0s !important;
    transition-duration: 0s !important;
  }
}
`,IMMERSIVE_TRANSLATE_COMMON_CSS:`#mount#mount {
  /* --primary: rgb(227, 59, 126); */
  --primary: #ea4c89;
  --primary-hover: #f082ac;
  --icon-xia: url("data:image/svg+xml,%3Csvg%20width%3D%2222%22%20height%3D%2214%22%20viewBox%3D%220%200%2022%2014%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M9.4392%2013.1554L1.18789%203.96259C0.85064%203.5869%200.664086%203.09986%200.664062%202.59501C0.664062%201.46382%201.58164%200.546875%202.71353%200.546875H19.2161C19.7212%200.546847%2020.2085%200.733262%2020.5846%201.07037C21.4272%201.82567%2021.4976%203.12055%2020.7418%203.96256L12.4905%2013.1554C12.441%2013.2106%2012.3885%2013.263%2012.3333%2013.3124C11.4907%2014.0678%2010.195%2013.9974%209.4392%2013.1554Z%22%20fill%3D%22%23999999%22%2F%3E%3C%2Fsvg%3E");

}

li.select-link.select-link:hover > ul {
  display: none;
}
li.select-link.select-link > ul {
  display: none;
}
li.select-link.select-link a:focus ~ ul {
  display: none;
}

li.select-link.select-link a:active ~ ul {
  display: none;
}
li.select-link-active.select-link-active > ul {
  display: flex;
}
li.select-link-active.select-link-active:hover > ul {
  display: flex;
}

li.select-link-active.select-link-active a:focus ~ ul {
  display: flex;
}

li.select-link-active.select-link-active a:active ~ ul {
  display: flex;
}
ul.select-link-ul.select-link-ul {
  right: 0px;
  left: auto;
}

a.select-link-selected {
  background-color: var(--primary-focus);
}
.immersive-translate-no-select {
  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Safari */
  -khtml-user-select: none; /* Konqueror HTML */
  -moz-user-select: none; /* Old versions of Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none;
}

/* li[role="list"].no-arrow > a::after { */
/*   background-image: none; */
/*   width: 0; */
/*   color: var(--color); */
/* } */
li[role="list"].no-arrow {
  margin-left: 8px;
  padding-right: 0;
}
li[role="list"] > a::after {
  -webkit-margin-start: 0.2rem;
  margin-inline-start: 0.2rem;
}

li[role="list"].no-arrow > a,
li[role="list"].no-arrow > a:link,
li[role="list"].no-arrow > a:visited {
  color: var(--secondary);
}

select.min-select {
  --form-element-spacing-horizontal: 0;
  margin-bottom: 4px;
  max-width: 128px;
  overflow: hidden;
  color: var(--primary);
  font-size: 14px;
  border: none;
  padding: 0;
  padding-right: 20px;
  padding-left: 8px;
  text-overflow: ellipsis;
  color: var(--color);

}
select.min-select-secondary {
  color: var(--color);
}
select.min-select:focus {
  outline: none;
  border: none;
  --box-shadow: none;
}
select.min-select-no-arrow {
  background-image: none;
  padding-right: 0;
}

select.min-select-left {
  padding-right: 0px;
  /* padding-left: 24px; */
  /* background-position: center left 0; */
  text-overflow: ellipsis;
  text-align: left;
}

.muted {
  color: var(--muted-color);
}

.select.button-select {
  --background-color: var(--secondary-hover);
  --border-color: var(--secondary-hover);
  --color: var(--secondary-inverse);
  cursor: pointer;
  --box-shadow: var(--button-box-shadow, 0 0 0 rgba(0, 0, 0, 0));
  padding: var(--form-element-spacing-vertical)
    var(--form-element-spacing-horizontal);
  border: var(--border-width) solid var(--border-color);
  border-radius: var(--border-radius);
  outline: none;
  background-color: var(--background-color);
  box-shadow: var(--box-shadow);
  color: var(--color);
  font-weight: var(--font-weight);
  font-size: 16px;
  line-height: var(--line-height);
  text-align: center;
  cursor: pointer;
  transition: background-color var(--transition), border-color var(--transition),
    color var(--transition), box-shadow var(--transition);
  -webkit-appearance: button;
  margin: 0;
  margin-bottom: 0px;
  overflow: visible;
  font-family: inherit;
  text-transform: none;
}
`,IMMERSIVE_TRANSLATE_POPUP_CSS:`html {
  font-size: 16px;
  --font-size: 16px;
}

body {
  padding: 0;
  margin: 0 auto;
  min-width: 268px;
  border-radius: 10px;
}

.popup-container {
  color: #666
}

.immersive-translate-popup-overlay {
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  touch-action: none;
}

.immersive-translate-popup-wrapper {
  background: var(--background-color);
  border-radius: 10px;
  border: 1px solid var(--muted-border-color);
}

#mount#mount {
  --font-family: system-ui, -apple-system, "Segoe UI", "Roboto", "Ubuntu",
    "Cantarell", "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
    "Segoe UI Symbol", "Noto Color Emoji";
  --line-height: 1.5;
  --font-weight: 400;
  --font-size: 16px;
  --border-radius: 4px;
  --border-width: 1px;
  --outline-width: 3px;
  --spacing: 16px;
  --typography-spacing-vertical: 24px;
  --block-spacing-vertical: calc(var(--spacing) * 2);
  --block-spacing-horizontal: var(--spacing);
  --grid-spacing-vertical: 0;
  --grid-spacing-horizontal: var(--spacing);
  --form-element-spacing-vertical: 12px;
  --form-element-spacing-horizontal: 16px;
  --nav-element-spacing-vertical: 16px;
  --nav-element-spacing-horizontal: 8px;
  --nav-link-spacing-vertical: 8px;
  --nav-link-spacing-horizontal: 8px;
  --form-label-font-weight: var(--font-weight);
  --transition: 0.2s ease-in-out;
  --modal-overlay-backdrop-filter: blur(4px);
}

#mount {
  min-width: 268px;
}

.main-button {
  font-size: 14px;
  vertical-align: middle;
  border-radius: 8px;
}

.pt-4 {
  padding-top: 24px;
}

.p-2 {
  padding: 8px;
}

.pl-5 {
  padding-left: 48px;
}

.p-0 {
  padding: 0;
}

.pl-2 {
  padding-left: 8px;
}

.pl-4 {
  padding-left: 24px;
}

.pt-2 {
  padding-top: 8px;
}

.pb-2 {
  padding-bottom: 8px;
}

.pr-5 {
  padding-right: 48px;
}

.text-sm {
  font-size: 14px;
}

.w-full {
  width: 100%;
}

.flex {
  display: flex;
}

.flex-row {
  flex-direction: row;
}

.flex-wrap {
  flex-wrap: wrap;
}

.flex-end {
  justify-content: flex-end;
}

.flex-grow {
  flex-grow: 1;
}

.justify-between {
  justify-content: space-between;
}

.mb-2 {
  margin-bottom: 8px;
}

.mb-4 {
  margin-bottom: 16px;
}

.mb-3 {
  margin-bottom: 12px;
}

.inline-block {
  display: inline-block;
}

.py-2 {
  padding-top: 8px;
  padding-bottom: 8px;
}

.py-2-5 {
  padding-top: 6px;
  padding-bottom: 6px;
}

.mt-2 {
  margin-top: 8px;
}

.mt-0 {
  margin-top: 0;
}

.mb-1 {
  margin-bottom: 4px;
}

.ml-4 {
  margin-left: 24px;
}

.ml-3 {
  margin-left: 16px;
}

.ml-2 {
  margin-left: 8px;
}

.ml-1 {
  margin-left: 4px;
}

.mr-1 {
  margin-right: 4px;
}

.mr-3 {
  margin-right: 16px;
}

.pl-3 {
  padding-left: 12px;
}

.pr-3 {
  padding-right: 12px;
}

.p-3 {
  padding: 12px;
}

.px-3 {
  padding-left: 12px;
  padding-right: 12px;
}

.pt-3 {
  padding-top: 12px;
}

.px-6 {
  padding-left: 18px;
  padding-right: 18px;
}

.pt-6 {
  padding-top: 20px;
}

.py-3 {
  padding-top: 12px;
  padding-bottom: 12px;
}

.mt-4 {
  margin-top: 24px;
}

.py-0 {
  padding-top: 0;
  padding-bottom: 0;
}

.left-auto {
  left: auto !important;
}

.max-h-28 {
  max-height: 112px;
}

.max-h-30 {
  max-height: 120px;
}

.overflow-y-scroll {
  overflow-y: scroll;
}

.text-xs {
  font-size: 12px;
}

.flex-1 {
  flex: 1;
}

.flex-3 {
  flex: 3;
}

.flex-4 {
  flex: 4;
}

.flex-2 {
  flex: 2;
}

.mt-3 {
  margin-top: 16px;
}

.items-center {
  align-items: center;
}

.max-content {
  width: max-content;
}

.justify-center {
  justify-content: center;
}

.items-end {
  align-items: flex-end;
}

.items-baseline {
  align-items: baseline;
}

.my-5 {
  margin-top: 48px;
  margin-bottom: 48px;
}

.my-4 {
  margin-top: 24px;
  margin-bottom: 24px;
}

.my-3 {
  margin-top: 16px;
  margin-bottom: 16px;
}

.pt-3 {
  padding-top: 12px;
}

.px-3 {
  padding-left: 12px;
  padding-right: 12px;
}

.pt-2 {
  padding-top: 8px;
}

.px-2 {
  padding-left: 8px;
  padding-right: 8px;
}

.pt-1 {
  padding-top: 4px;
}

.px-1 {
  padding-left: 4px;
  padding-right: 4px;
}

.pb-2 {
  padding-bottom: 8px;
}

.justify-end {
  justify-content: flex-end;
}

.w-auto {
  width: auto;
}


select.min-select {
  --form-element-spacing-horizontal: 0;
  margin-bottom: 0px;
  max-width: unset;
  flex: 1;
  overflow: hidden;
  color: var(--primary);
  font-size: 14px;
  border: none;
  border-radius: 8px;
  padding: 6px 24px 6px 16px;
  background-color: #F5F7F9;
  background-position: center right 12px;
  background-size: 8px auto;
  background-image: var(--icon-xia);
  text-overflow: ellipsis;
  color: var(--color);

}

.text-overflow-ellipsis {
  text-overflow: ellipsis;
  overflow: hidden;
}

.max-w-20 {
  max-width: 180px;
  white-space: nowrap;
}

@media (prefers-color-scheme: dark) {
  select.min-select {
    background-color: #141e26;
  }
}

select.min-select-secondary {
  color: var(--color);
}

select.min-select:focus {
  outline: none;
  border: none;
  --box-shadow: none;
}

select.min-select-no-arrow {
  background-image: none;
  padding-right: 0;
}

select.min-select-left {
  padding-right: 0px;
  /* padding-left: 24px; */
  /* background-position: center left 0; */
  text-overflow: ellipsis;
  text-align: left;
}

.popup-footer {
  background-color: #F5F7F9;
}



.clickable {
  cursor: pointer;
}

.close {
  cursor: pointer;
  width: 16px;
  height: 16px;
  background-image: var(--icon-close);
  background-position: center;
  background-size: auto 1rem;
  background-repeat: no-repeat;
  opacity: 0.5;
  transition: opacity var(--transition);
}

.padding-two-column {
  padding-left: 40px;
  padding-right: 40px;
}

.muted {
  color: #999;
}

.text-label {
  color: #666;
}




select.text-label {
  color: #666;
}

.display-none {
  display: none;
}


/* dark use #18232c */

@media (prefers-color-scheme: dark) {
  .popup-footer {
    background-color: #141e26;
  }

  .text-label {
    color: #9ca3af;
  }

  select.text-label {

    color: #9ca3af;
  }
}

.immersive-translate-share-button {
  border-radius: 8px;
  height: 40px;
  width: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--background-light-green);
  background-image: var(--icon-share);
  background-size: 22px 22px;
  background-position: center center;
  cursor: pointer;
  margin-left: 8px;
  flex-shrink: 0;
}`,IMMERSIVE_TRANSLATE_PAGE_POPUP_CSS:`html {
  font-size: 17px;
}

#mount#mount {
  position: absolute;
  display: none;
  min-width: 250px;
  height: auto;
  --font-size: 17px;
  font-size: 17px;
}


/* float-ball */
.immersive-translate-float-ball-container {
  position: fixed;
  padding: 0;
  z-index: 2147483647;
  right: 0;
  top: 335px;
  width: 56px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  display: none;
}

.immersive-translate-float-ball-btn {
  background: linear-gradient(320.9deg, #DB3B7B 26.47%, #FFCEE2 88.86%);
  height: 36px;
  width: 56px;
  border-top-left-radius: 36px;
  border-bottom-left-radius: 36px;
  box-shadow: 2px 6px 10px 0px #0E121629;
}


.immersive-translate-float-ball-btn div {
  background: linear-gradient(140.91deg, #FF87B7 12.61%, #EC4C8C 76.89%);
  height: 34px;
  width: 54px;
  border-top-left-radius: 34px;
  border-bottom-left-radius: 34px;
  margin: 1px;
  display: flex;
  align-items: center;
}

.immersive-translate-float-ball-logo-img {
  width: 20px;
  height: 20px;
  margin-left: 10px;
}

.immersive-translate-float-ball-translated-img {
  position: absolute;
  width: 11px;
  height: 11px;
  bottom: 4px;
  right: 20px;
}

.btn-animate {
  cursor: pointer;
  -webkit-transform: translate3d(0, 0, 0);
  transform: translate3d(0, 0, 0);
  -webkit-transition: -webkit-transform ease-out 250ms;
  transition: -webkit-transform ease-out 250ms;
  transition: transform ease-out 250ms;
  transition: transform ease-out 250ms, -webkit-transform ease-out 250ms;
}

.immersive-translate-float-ball-setting-btn {
  margin-top: 12px;
  margin-right: 18px;
  width: 28px;
  height: 28px;
}

.immersive-translate-popup-wrapper {
  background: var(--background-color);
  border-radius: 20px;
  box-shadow: 2px 10px 24px 0px #0E121614;
  border: none;
  overflow: hidden;
}

.immersive-translate-float-ball-close-content {
  padding: 22px;
  width: 320px;
}

.immersive-translate-float-ball-close-title {
  font-weight: 500;
  color: var(--h2-color);
}

.immersive-translate-float-ball-close-radio-content {
  background-color: var(--background-light-green);
  padding: 8px 20px;
}

.immersive-translate-float-ball-radio-sel,
.immersive-translate-float-ball-radio-nor {
  width: 16px;
  height: 16px;
  border-radius: 8px;
  flex-shrink: 0;
}

.immersive-translate-float-ball-radio-sel {
  border: 2px solid var(--primary);
  display: flex;
  align-items: center;
  justify-content: center;
}

.immersive-translate-float-ball-radio-sel div {
  width: 8px;
  height: 8px;
  border-radius: 4px;
  background-color: var(--primary);
}

.immersive-translate-float-ball-radio-nor {
  border: 2px solid #D3D4D6;
}



.immersive-translate-float-ball-primary-btn {
  background-color: var(--primary);
  width: 72px;
  height: 32px;
  color: white;
  border-radius: 8px;
  text-align: center;
  line-height: 32px;
  font-size: 16px;
}

.immersive-translate-float-ball-default-btn {
  border: 1px solid var(--primary);
  width: 72px;
  height: 32px;
  border-radius: 8px;
  color: var(--primary);
  line-height: 32px;
  text-align: center;
  font-size: 16px;
}`,IMMERSIVE_TRANSLATE_POPUP_HTML:`<div
  id="immersive-translate-popup-container"
  class="immersive-translate-popup-container"
>
  <button
    id="immersive-translate-popup-btn"
    class="immersive-translate-popup-btn"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="24"
      height="24"
    >
      <path fill="none" d="M0 0h24v24H0z" />
      <path
        d="M5 15v2a2 2 0 0 0 1.85 1.995L7 19h3v2H7a4 4 0 0 1-4-4v-2h2zm13-5l4.4 11h-2.155l-1.201-3h-4.09l-1.199 3h-2.154L16 10h2zm-1 2.885L15.753 16h2.492L17 12.885zM8 2v2h4v7H8v3H6v-3H2V4h4V2h2zm9 1a4 4 0 0 1 4 4v2h-2V7a2 2 0 0 0-2-2h-3V3h3zM6 6H4v3h2V6zm4 0H8v3h2V6z"
        fill="rgba(255,255,255,1)"
      />
    </svg>
  </button>
  <div class="immersive-translate-popup-mount" id="mount"></div>
</div>
`,IMMERSIVE_TRANSLATE_VIDEO_SUBTITLE_INJECT:'(()=>{var u="imt-subtitle-inject",c=class{from;to;constructor(e,s){this.from=e,this.to=s}sendMessages(e){globalThis.postMessage({type:u,to:this.to,from:this.from,action:e.action,data:e.data,id:e.id||new Date().getTime(),isAsync:!1})}sendAsyncMessages({action:e,data:s}){return new Promise(t=>{let n=new Date().getTime();globalThis.postMessage({type:u,to:this.to,from:this.from,action:e,data:s,id:n,isAsync:!0});let o=({data:a})=>{u===a.type&&a.id===n&&a.to===this.from&&(t(a.data),globalThis.removeEventListener("message",o))};globalThis.addEventListener("message",o)})}handleMessageOnce(e){return new Promise(s=>{let t=({data:n})=>{u===n.type&&n.action===e&&n.to===this.from&&(s(n.data),globalThis.removeEventListener("message",t))};globalThis.addEventListener("message",t)})}handleMessage(e,s){let t=({data:n})=>{u===n.type&&n.action===e&&n.to===this.from&&s(n)};return globalThis.addEventListener("message",t),()=>{globalThis.removeEventListener("message",t)}}handleMessages(e){let s=({data:t})=>{u===t.type&&t.to===this.from&&e(t)};return globalThis.addEventListener("message",s),()=>{globalThis.removeEventListener("message",s)}}},M=new c("content-script","inject"),l=new c("inject","content-script"),p={get(i,e,s){return e in i?(...t)=>{let n=i[e];return typeof n=="function"?n.apply(i,t):Reflect.get(i,e,s)}:t=>i.sendAsyncMessages({action:e,data:t})}},S=new Proxy(l,p),w=new Proxy(M,p);var r=class{content=S;config;constructor(e){this.config=e,l.handleMessages(async({action:s,id:t,data:n})=>{let o=this[s];if(!o)return;let a=o.apply(this,[n]);a instanceof Promise&&(a=await a),l.sendMessages({id:t,data:a})})}triggerSubtitle(e){}async translateSubtitle(e){let s=await this.content.requestSubtitle({url:e._url});if(s){let t;e.responseType=="arraybuffer"?t=new TextEncoder().encode(s).buffer:t=s,Object.defineProperty(e,"responseText",{value:t,writable:!1}),Object.defineProperty(e,"response",{value:t,writable:!1})}}translateSubtitleWithFetch(e){return this.content.requestSubtitle({fetchInfo:e})}async getVideoMeta(e){}isSubtitleRequest(e){return!this.config?.subtitleUrlRegExp||!e?!1:new RegExp(this.config.subtitleUrlRegExp).test(e||"")}};var d=class extends r{timer=null;triggerSubtitle({force:e}){setTimeout(()=>{if(this.config?.subtitleButtonSelector){let s=document.querySelector(this.config.subtitleButtonSelector);if(s){let t=s.getAttribute("aria-pressed")==="true";t&&e?(s.click(),setTimeout(()=>{s.click()},100)):t||s.click();return}}if(this.config?.videoPlayerSelector){let s=document.querySelector(this.config.videoPlayerSelector);s.toggleSubtitles(),setTimeout(()=>{s.toggleSubtitles()},100)}},1e3)}async getVideoMeta(){try{let e=await fetch(globalThis.location.href);if(!e.ok)throw new Error("request subtitle error");let s=await e.text(),n=[...new window.DOMParser().parseFromString(s,"text/html").body.querySelectorAll(":scope > script")].find(o=>o.textContent?.includes("ytInitialPlayerResponse"));return new Function(`const window = {}; ${n?.textContent}; return ytInitialPlayerResponse;`)()}catch{return null}}};var g=class extends r{timer=null;videoMeta={};constructor(e){super(e),this.hookJSON()}hookJSON(){let e=JSON.parse;JSON.parse=s=>{let t=e(s);return t&&t.result&&t.result.timedtexttracks&&t.result.movieId&&(this.videoMeta[t.result.movieId]=t.result),t}}getVideoMeta(e){return this.videoMeta[e]}};var f=class extends r{timer=null;videoMeta={};constructor(e){super(e),this.hookJSON()}hookJSON(){let e=JSON.parse;JSON.parse=s=>{let t=e(s);return t?.asset?.captions?.length?this.videoMeta[t.id]=t?.asset:t?.previews&&t?.course&&t?.previews?.forEach(n=>{this.videoMeta[n.id]=n}),t}}getVideoMeta(e){return this.videoMeta[e]}};async function v(){let i=await l.sendAsyncMessages({action:"getConfig"});if(!i)return;let s={youtube:d,netflix:g,webvtt:r,khanacademy:r,bilibili:r,udemy:f}[i.type||""];if(!s)return;let t=new s(i);x(t,i)}h();v();function x(i,e){if(e.hookType==="xhr"){let s=XMLHttpRequest.prototype.open,t=XMLHttpRequest.prototype.send,n=function(){return this._url=arguments[1],s.apply(this,arguments)},o=async function(){return i.isSubtitleRequest(this._url)?(await h(),await i.translateSubtitle(this),t.apply(this,arguments)):t.apply(this,arguments)};Object.defineProperty(XMLHttpRequest.prototype,"open",{value:n,writable:!0}),Object.defineProperty(XMLHttpRequest.prototype,"send",{value:o,writable:!0})}else if(e.hookType==="fetch"){let s=globalThis.fetch;globalThis.fetch=async function(t,n){let o=typeof t=="string"?t:t.url;if(!i.isSubtitleRequest(o))return s(t,n);await h();let y;typeof t=="string"?y={url:t,method:"GET",headers:{}}:y=await R(t);let m=await i.translateSubtitleWithFetch(JSON.stringify({input:y,options:n}));return m?new Response(m):s(t,n)}}}var b=!1;async function h(){return b||(await l.handleMessageOnce("contentReady"),b=!0),b}function R(i){let e={url:i.url,method:i.method,headers:Object.fromEntries(i.headers.entries())};if(i.body)if(i.body instanceof FormData){let s={};for(let[t,n]of i.body.entries())s[t]=n;e.body=s}else return i.text().then(s=>(e.body=s,e));return Promise.resolve(e)}})();\n',PDF_VIEWER_URL:"https://app.immersivetranslate.com/pdf/index.html",OPTIONS_URL:"https://dash.immersivetranslate.com/",EBOOK_VIEWER_URL:"https://app.immersivetranslate.com/ebook/",EBOOK_BUILDER_URL:"https://app.immersivetranslate.com/ebook/make/",SUBTITLE_BUILDER_URL:"https://app.immersivetranslate.com/subtitle/",HTML_VIEWER_URL:"https://app.immersivetranslate.com/html/",SHARE_DRAFT_URL:"https://immersivetranslate.com/preview",MOCK:"0",DEBUG:"0",INSTALL_FROM:"chrome_zip"};var gr=Object.create,Ta=Object.defineProperty,hr=Object.getOwnPropertyDescriptor,pn=Object.getOwnPropertyNames,fr=Object.getPrototypeOf,br=Object.prototype.hasOwnProperty,Tr=(e,t)=>function(){return t||(0,e[pn(e)[0]])((t={exports:{}}).exports,t),t.exports},yr=(e,t)=>{for(var n in t)Ta(e,n,{get:t[n],enumerable:!0})},ba=(e,t,n,a)=>{if(t&&typeof t=="object"||typeof t=="function")for(let i of pn(t))!br.call(e,i)&&i!==n&&Ta(e,i,{get:()=>t[i],enumerable:!(a=hr(t,i))||a.enumerable});return e},vr=(e,t,n)=>(ba(e,t,"default"),n&&ba(n,t,"default")),mn=(e,t,n)=>(n=e!=null?gr(fr(e)):{},ba(t||!e||!e.__esModule?Ta(n,"default",{value:e,enumerable:!0}):n,e)),gn=Tr({"../esmd/npm/webextension-polyfill@0.10.0/node_modules/webextension-polyfill/dist/browser-polyfill.js"(e,t){(function(n,a){if(typeof define=="function"&&define.amd)define("webextension-polyfill",["module"],a);else if(typeof e<"u")a(t);else{var i={exports:{}};a(i),n.browser=i.exports}})(typeof globalThis<"u"?globalThis:typeof self<"u"?self:e,function(n){"use strict";if(!globalThis.chrome?.runtime?.id)throw new Error("This script should only be loaded in a browser extension.");if(typeof globalThis.browser>"u"||Object.getPrototypeOf(globalThis.browser)!==Object.prototype){let a="The message port closed before a response was received.",i=r=>{let o={alarms:{clear:{minArgs:0,maxArgs:1},clearAll:{minArgs:0,maxArgs:0},get:{minArgs:0,maxArgs:1},getAll:{minArgs:0,maxArgs:0}},bookmarks:{create:{minArgs:1,maxArgs:1},get:{minArgs:1,maxArgs:1},getChildren:{minArgs:1,maxArgs:1},getRecent:{minArgs:1,maxArgs:1},getSubTree:{minArgs:1,maxArgs:1},getTree:{minArgs:0,maxArgs:0},move:{minArgs:2,maxArgs:2},remove:{minArgs:1,maxArgs:1},removeTree:{minArgs:1,maxArgs:1},search:{minArgs:1,maxArgs:1},update:{minArgs:2,maxArgs:2}},browserAction:{disable:{minArgs:0,maxArgs:1,fallbackToNoCallback:!0},enable:{minArgs:0,maxArgs:1,fallbackToNoCallback:!0},getBadgeBackgroundColor:{minArgs:1,maxArgs:1},getBadgeText:{minArgs:1,maxArgs:1},getPopup:{minArgs:1,maxArgs:1},getTitle:{minArgs:1,maxArgs:1},openPopup:{minArgs:0,maxArgs:0},setBadgeBackgroundColor:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setBadgeText:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setIcon:{minArgs:1,maxArgs:1},setPopup:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setTitle:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0}},browsingData:{remove:{minArgs:2,maxArgs:2},removeCache:{minArgs:1,maxArgs:1},removeCookies:{minArgs:1,maxArgs:1},removeDownloads:{minArgs:1,maxArgs:1},removeFormData:{minArgs:1,maxArgs:1},removeHistory:{minArgs:1,maxArgs:1},removeLocalStorage:{minArgs:1,maxArgs:1},removePasswords:{minArgs:1,maxArgs:1},removePluginData:{minArgs:1,maxArgs:1},settings:{minArgs:0,maxArgs:0}},commands:{getAll:{minArgs:0,maxArgs:0}},contextMenus:{remove:{minArgs:1,maxArgs:1},removeAll:{minArgs:0,maxArgs:0},update:{minArgs:2,maxArgs:2}},cookies:{get:{minArgs:1,maxArgs:1},getAll:{minArgs:1,maxArgs:1},getAllCookieStores:{minArgs:0,maxArgs:0},remove:{minArgs:1,maxArgs:1},set:{minArgs:1,maxArgs:1}},devtools:{inspectedWindow:{eval:{minArgs:1,maxArgs:2,singleCallbackArg:!1}},panels:{create:{minArgs:3,maxArgs:3,singleCallbackArg:!0},elements:{createSidebarPane:{minArgs:1,maxArgs:1}}}},downloads:{cancel:{minArgs:1,maxArgs:1},download:{minArgs:1,maxArgs:1},erase:{minArgs:1,maxArgs:1},getFileIcon:{minArgs:1,maxArgs:2},open:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},pause:{minArgs:1,maxArgs:1},removeFile:{minArgs:1,maxArgs:1},resume:{minArgs:1,maxArgs:1},search:{minArgs:1,maxArgs:1},show:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0}},extension:{isAllowedFileSchemeAccess:{minArgs:0,maxArgs:0},isAllowedIncognitoAccess:{minArgs:0,maxArgs:0}},history:{addUrl:{minArgs:1,maxArgs:1},deleteAll:{minArgs:0,maxArgs:0},deleteRange:{minArgs:1,maxArgs:1},deleteUrl:{minArgs:1,maxArgs:1},getVisits:{minArgs:1,maxArgs:1},search:{minArgs:1,maxArgs:1}},i18n:{detectLanguage:{minArgs:1,maxArgs:1},getAcceptLanguages:{minArgs:0,maxArgs:0}},identity:{launchWebAuthFlow:{minArgs:1,maxArgs:1}},idle:{queryState:{minArgs:1,maxArgs:1}},management:{get:{minArgs:1,maxArgs:1},getAll:{minArgs:0,maxArgs:0},getSelf:{minArgs:0,maxArgs:0},setEnabled:{minArgs:2,maxArgs:2},uninstallSelf:{minArgs:0,maxArgs:1}},notifications:{clear:{minArgs:1,maxArgs:1},create:{minArgs:1,maxArgs:2},getAll:{minArgs:0,maxArgs:0},getPermissionLevel:{minArgs:0,maxArgs:0},update:{minArgs:2,maxArgs:2}},pageAction:{getPopup:{minArgs:1,maxArgs:1},getTitle:{minArgs:1,maxArgs:1},hide:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setIcon:{minArgs:1,maxArgs:1},setPopup:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setTitle:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},show:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0}},permissions:{contains:{minArgs:1,maxArgs:1},getAll:{minArgs:0,maxArgs:0},remove:{minArgs:1,maxArgs:1},request:{minArgs:1,maxArgs:1}},runtime:{getBackgroundPage:{minArgs:0,maxArgs:0},getPlatformInfo:{minArgs:0,maxArgs:0},openOptionsPage:{minArgs:0,maxArgs:0},requestUpdateCheck:{minArgs:0,maxArgs:0},sendMessage:{minArgs:1,maxArgs:3},sendNativeMessage:{minArgs:2,maxArgs:2},setUninstallURL:{minArgs:1,maxArgs:1}},sessions:{getDevices:{minArgs:0,maxArgs:1},getRecentlyClosed:{minArgs:0,maxArgs:1},restore:{minArgs:0,maxArgs:1}},storage:{local:{clear:{minArgs:0,maxArgs:0},get:{minArgs:0,maxArgs:1},getBytesInUse:{minArgs:0,maxArgs:1},remove:{minArgs:1,maxArgs:1},set:{minArgs:1,maxArgs:1}},managed:{get:{minArgs:0,maxArgs:1},getBytesInUse:{minArgs:0,maxArgs:1}},sync:{clear:{minArgs:0,maxArgs:0},get:{minArgs:0,maxArgs:1},getBytesInUse:{minArgs:0,maxArgs:1},remove:{minArgs:1,maxArgs:1},set:{minArgs:1,maxArgs:1}}},tabs:{captureVisibleTab:{minArgs:0,maxArgs:2},create:{minArgs:1,maxArgs:1},detectLanguage:{minArgs:0,maxArgs:1},discard:{minArgs:0,maxArgs:1},duplicate:{minArgs:1,maxArgs:1},executeScript:{minArgs:1,maxArgs:2},get:{minArgs:1,maxArgs:1},getCurrent:{minArgs:0,maxArgs:0},getZoom:{minArgs:0,maxArgs:1},getZoomSettings:{minArgs:0,maxArgs:1},goBack:{minArgs:0,maxArgs:1},goForward:{minArgs:0,maxArgs:1},highlight:{minArgs:1,maxArgs:1},insertCSS:{minArgs:1,maxArgs:2},move:{minArgs:2,maxArgs:2},query:{minArgs:1,maxArgs:1},reload:{minArgs:0,maxArgs:2},remove:{minArgs:1,maxArgs:1},removeCSS:{minArgs:1,maxArgs:2},sendMessage:{minArgs:2,maxArgs:3},setZoom:{minArgs:1,maxArgs:2},setZoomSettings:{minArgs:1,maxArgs:2},update:{minArgs:1,maxArgs:2}},topSites:{get:{minArgs:0,maxArgs:0}},webNavigation:{getAllFrames:{minArgs:1,maxArgs:1},getFrame:{minArgs:1,maxArgs:1}},webRequest:{handlerBehaviorChanged:{minArgs:0,maxArgs:0}},windows:{create:{minArgs:0,maxArgs:1},get:{minArgs:1,maxArgs:2},getAll:{minArgs:0,maxArgs:1},getCurrent:{minArgs:0,maxArgs:1},getLastFocused:{minArgs:0,maxArgs:1},remove:{minArgs:1,maxArgs:1},update:{minArgs:2,maxArgs:2}}};if(Object.keys(o).length===0)throw new Error("api-metadata.json has not been included in browser-polyfill");class s extends WeakMap{constructor(h,v=void 0){super(v),this.createItem=h}get(h){return this.has(h)||this.set(h,this.createItem(h)),super.get(h)}}let l=P=>P&&typeof P=="object"&&typeof P.then=="function",u=(P,h)=>(...v)=>{r.runtime.lastError?P.reject(new Error(r.runtime.lastError.message)):h.singleCallbackArg||v.length<=1&&h.singleCallbackArg!==!1?P.resolve(v[0]):P.resolve(v)},d=P=>P==1?"argument":"arguments",m=(P,h)=>function(y,...R){if(R.length<h.minArgs)throw new Error(`Expected at least ${h.minArgs} ${d(h.minArgs)} for ${P}(), got ${R.length}`);if(R.length>h.maxArgs)throw new Error(`Expected at most ${h.maxArgs} ${d(h.maxArgs)} for ${P}(), got ${R.length}`);return new Promise((k,j)=>{if(h.fallbackToNoCallback)try{y[P](...R,u({resolve:k,reject:j},h))}catch{y[P](...R),h.fallbackToNoCallback=!1,h.noCallback=!0,k()}else h.noCallback?(y[P](...R),k()):y[P](...R,u({resolve:k,reject:j},h))})},f=(P,h,v)=>new Proxy(h,{apply(y,R,k){return v.call(R,P,...k)}}),g=Function.call.bind(Object.prototype.hasOwnProperty),A=(P,h={},v={})=>{let y=Object.create(null),R={has(j,_){return _ in P||_ in y},get(j,_,J){if(_ in y)return y[_];if(!(_ in P))return;let H=P[_];if(typeof H=="function")if(typeof h[_]=="function")H=f(P,P[_],h[_]);else if(g(v,_)){let he=m(_,v[_]);H=f(P,P[_],he)}else H=H.bind(P);else if(typeof H=="object"&&H!==null&&(g(h,_)||g(v,_)))H=A(H,h[_],v[_]);else if(g(v,"*"))H=A(H,h[_],v["*"]);else return Object.defineProperty(y,_,{configurable:!0,enumerable:!0,get(){return P[_]},set(he){P[_]=he}}),H;return y[_]=H,H},set(j,_,J,H){return _ in y?y[_]=J:P[_]=J,!0},defineProperty(j,_,J){return Reflect.defineProperty(y,_,J)},deleteProperty(j,_){return Reflect.deleteProperty(y,_)}},k=Object.create(P);return new Proxy(k,R)},K=P=>({addListener(h,v,...y){h.addListener(P.get(v),...y)},hasListener(h,v){return h.hasListener(P.get(v))},removeListener(h,v){h.removeListener(P.get(v))}}),F=new s(P=>typeof P!="function"?P:function(v){let y=A(v,{},{getContent:{minArgs:0,maxArgs:0}});P(y)}),p=new s(P=>typeof P!="function"?P:function(v,y,R){let k=!1,j,_=new Promise(ae=>{j=function(x){k=!0,ae(x)}}),J;try{J=P(v,y,j)}catch(ae){J=Promise.reject(ae)}let H=J!==!0&&l(J);if(J!==!0&&!H&&!k)return!1;let he=ae=>{ae.then(x=>{R(x)},x=>{let Q;x&&(x instanceof Error||typeof x.message=="string")?Q=x.message:Q="An unexpected error occurred",R({__mozWebExtensionPolyfillReject__:!0,message:Q})}).catch(x=>{})};return he(H?J:_),!0}),re=({reject:P,resolve:h},v)=>{r.runtime.lastError?r.runtime.lastError.message===a?h():P(new Error(r.runtime.lastError.message)):v&&v.__mozWebExtensionPolyfillReject__?P(new Error(v.message)):h(v)},O=(P,h,v,...y)=>{if(y.length<h.minArgs)throw new Error(`Expected at least ${h.minArgs} ${d(h.minArgs)} for ${P}(), got ${y.length}`);if(y.length>h.maxArgs)throw new Error(`Expected at most ${h.maxArgs} ${d(h.maxArgs)} for ${P}(), got ${y.length}`);return new Promise((R,k)=>{let j=re.bind(null,{resolve:R,reject:k});y.push(j),v.sendMessage(...y)})},Y={devtools:{network:{onRequestFinished:K(F)}},runtime:{onMessage:K(p),onMessageExternal:K(p),sendMessage:O.bind(null,"sendMessage",{minArgs:1,maxArgs:3})},tabs:{sendMessage:O.bind(null,"sendMessage",{minArgs:2,maxArgs:3})}},ce={clear:{minArgs:1,maxArgs:1},get:{minArgs:1,maxArgs:1},set:{minArgs:1,maxArgs:1}};return o.privacy={network:{"*":ce},services:{"*":ce},websites:{"*":ce}},A(r,Y,o)};n.exports=i(chrome)}else n.exports=globalThis.browser})}}),hn={};yr(hn,{default:()=>Gt});var Sr=mn(gn());vr(hn,mn(gn()));var{default:dn,...wr}=Sr,Gt=dn!==void 0?dn:wr;globalThis.immersiveTranslateBrowserAPI=Gt;function nt(){return typeof process>"u"&&typeof Deno<"u"?Deno.env.toObject():L}var X=nt();function Ge(){return X.IMMERSIVE_TRANSLATE_USERSCRIPT==="1"}function it(){return X.PROD==="1"}function dt(){return X.PROD_API==="1"}function fn(){if(X.IMMERSIVE_TRANSLATE_SAFARI==="1")return!0;if(typeof globalThis.immersiveTranslateBrowserAPI<"u"&&globalThis.immersiveTranslateBrowserAPI.runtime&&globalThis.immersiveTranslateBrowserAPI.runtime.getManifest){let t=globalThis.immersiveTranslateBrowserAPI.runtime.getManifest();return!!(t&&t._isSafari)}else return!1}function bn(){return typeof Deno<"u"}var oc=nt().PROD==="1",sc=nt().PROD!=="1";function Tn(){return typeof globalThis.__IS_IMMERSIVE_TRANSLATE_WEB_OPTIONS_PAGE__<"u"}function yn(){return typeof Deno<"u"}var vn={addListener:()=>{},removeListener:()=>{},hasListener:()=>{}},Sn={permissions:{contains:()=>{},request:()=>{}},runtime:{onMessage:vn,openOptionsPage:()=>{},lastError:{message:""}},storage:{sync:{get:()=>{},set:()=>{}}},tabs:{onUpdated:vn,query:()=>{},sendMessage:()=>{}}};var oe;yn()?oe=Sn:oe=globalThis.immersiveTranslateBrowserAPI;function _t(){let e,t="pending",n=new Promise((a,i)=>{e={async resolve(r){await r,t="fulfilled",a(r)},reject(r){t="rejected",i(r)}}});return Object.defineProperty(n,"state",{get:()=>t}),Object.assign(n,e)}var wn=class{#e=0;#t=[];#a=[];#n=_t();add(t){++this.#e,this.#i(t[Symbol.asyncIterator]())}async#i(t){try{let{value:n,done:a}=await t.next();a?--this.#e:this.#t.push({iterator:t,value:n})}catch(n){this.#a.push(n)}this.#n.resolve()}async*iterate(){for(;this.#e>0;){await this.#n;for(let t=0;t<this.#t.length;t++){let{iterator:n,value:a}=this.#t[t];yield a,this.#i(n)}if(this.#a.length){for(let t of this.#a)throw t;this.#a.length=0}this.#t.length=0,this.#n=_t()}}[Symbol.asyncIterator](){return this.iterate()}};var Ke={};pr(Ke,{bgBlack:()=>Yr,bgBlue:()=>Xr,bgBrightBlack:()=>no,bgBrightBlue:()=>so,bgBrightCyan:()=>co,bgBrightGreen:()=>ro,bgBrightMagenta:()=>lo,bgBrightRed:()=>io,bgBrightWhite:()=>uo,bgBrightYellow:()=>oo,bgCyan:()=>to,bgGreen:()=>Zr,bgMagenta:()=>eo,bgRed:()=>$r,bgRgb24:()=>ho,bgRgb8:()=>mo,bgWhite:()=>ao,bgYellow:()=>Jr,black:()=>Mr,blue:()=>Nr,bold:()=>Pr,brightBlack:()=>kn,brightBlue:()=>Hr,brightCyan:()=>Vr,brightGreen:()=>Wr,brightMagenta:()=>Gr,brightRed:()=>Kr,brightWhite:()=>Qr,brightYellow:()=>jr,cyan:()=>Br,dim:()=>Cr,getColorEnabled:()=>Ar,gray:()=>qr,green:()=>Or,hidden:()=>_r,inverse:()=>Lr,italic:()=>Er,magenta:()=>Fr,red:()=>zr,reset:()=>kr,rgb24:()=>go,rgb8:()=>po,setColorEnabled:()=>xr,strikethrough:()=>Ir,stripColor:()=>bo,underline:()=>Dr,white:()=>Ur,yellow:()=>Rr});var{Deno:xn}=globalThis,An=typeof xn?.noColor=="boolean"?xn.noColor:!0,ya=!An;function xr(e){An||(ya=e)}function Ar(){return ya}function $(e,t){return{open:`\x1B[${e.join(";")}m`,close:`\x1B[${t}m`,regexp:new RegExp(`\\x1b\\[${t}m`,"g")}}function Z(e,t){return ya?`${t.open}${e.replace(t.regexp,t.open)}${t.close}`:e}function kr(e){return Z(e,$([0],0))}function Pr(e){return Z(e,$([1],22))}function Cr(e){return Z(e,$([2],22))}function Er(e){return Z(e,$([3],23))}function Dr(e){return Z(e,$([4],24))}function Lr(e){return Z(e,$([7],27))}function _r(e){return Z(e,$([8],28))}function Ir(e){return Z(e,$([9],29))}function Mr(e){return Z(e,$([30],39))}function zr(e){return Z(e,$([31],39))}function Or(e){return Z(e,$([32],39))}function Rr(e){return Z(e,$([33],39))}function Nr(e){return Z(e,$([34],39))}function Fr(e){return Z(e,$([35],39))}function Br(e){return Z(e,$([36],39))}function Ur(e){return Z(e,$([37],39))}function qr(e){return kn(e)}function kn(e){return Z(e,$([90],39))}function Kr(e){return Z(e,$([91],39))}function Wr(e){return Z(e,$([92],39))}function jr(e){return Z(e,$([93],39))}function Hr(e){return Z(e,$([94],39))}function Gr(e){return Z(e,$([95],39))}function Vr(e){return Z(e,$([96],39))}function Qr(e){return Z(e,$([97],39))}function Yr(e){return Z(e,$([40],49))}function $r(e){return Z(e,$([41],49))}function Zr(e){return Z(e,$([42],49))}function Jr(e){return Z(e,$([43],49))}function Xr(e){return Z(e,$([44],49))}function eo(e){return Z(e,$([45],49))}function to(e){return Z(e,$([46],49))}function ao(e){return Z(e,$([47],49))}function no(e){return Z(e,$([100],49))}function io(e){return Z(e,$([101],49))}function ro(e){return Z(e,$([102],49))}function oo(e){return Z(e,$([103],49))}function so(e){return Z(e,$([104],49))}function lo(e){return Z(e,$([105],49))}function co(e){return Z(e,$([106],49))}function uo(e){return Z(e,$([107],49))}function rt(e,t=255,n=0){return Math.trunc(Math.max(Math.min(e,t),n))}function po(e,t){return Z(e,$([38,5,rt(t)],39))}function mo(e,t){return Z(e,$([48,5,rt(t)],49))}function go(e,t){return typeof t=="number"?Z(e,$([38,2,t>>16&255,t>>8&255,t&255],39)):Z(e,$([38,2,rt(t.r),rt(t.g),rt(t.b)],39))}function ho(e,t){return typeof t=="number"?Z(e,$([48,2,t>>16&255,t>>8&255,t&255],49)):Z(e,$([48,2,rt(t.r),rt(t.g),rt(t.b)],49))}var fo=new RegExp(["[\\u001B\\u009B][[\\]()#;?]*(?:(?:(?:(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]+)*|[a-zA-Z\\d]+(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]*)*)?\\u0007)","(?:(?:\\d{1,4}(?:;\\d{0,4})*)?[\\dA-PR-TZcf-nq-uy=><~]))"].join("|"),"g");function bo(e){return e.replace(fo,"")}var va=class extends Error{constructor(t,n){super(`Exceeded max retry count (${n})`),this.name="RetryError",this.cause=t}},To={multiplier:2,maxTimeout:6e4,maxAttempts:5,minTimeout:1e3};async function Sa(e,t){let n={...To,...t};if(n.maxTimeout>=0&&n.minTimeout>n.maxTimeout)throw new RangeError("minTimeout is greater than maxTimeout");let a=n.minTimeout,i;for(let r=0;r<n.maxAttempts;r++)try{return await e()}catch(o){await new Promise(s=>setTimeout(s,a)),a*=n.multiplier,a=Math.max(a,n.minTimeout),n.maxTimeout>=0&&(a=Math.min(a,n.maxTimeout)),i=o}throw new va(i,n.maxAttempts)}var lu=Number.isNaN||function(e){return typeof e=="number"&&e!==e};var Vt=globalThis||(typeof window<"u"?window:self),vo=Object.create,xa=Object.defineProperty,So=Object.getOwnPropertyDescriptor,wo=Object.getOwnPropertyNames,xo=Object.getPrototypeOf,Ao=Object.prototype.hasOwnProperty,ko=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports),Po=(e,t)=>{for(var n in t)xa(e,n,{get:t[n],enumerable:!0})},wa=(e,t,n,a)=>{if(t&&typeof t=="object"||typeof t=="function")for(let i of wo(t))!Ao.call(e,i)&&i!==n&&xa(e,i,{get:()=>t[i],enumerable:!(a=So(t,i))||a.enumerable});return e},Co=(e,t,n)=>(wa(e,t,"default"),n&&wa(n,t,"default")),Cn=(e,t,n)=>(n=e!=null?vo(xo(e)):{},wa(t||!e||!e.__esModule?xa(n,"default",{value:e,enumerable:!0}):n,e)),En=ko((e,t)=>{var n="Expected a function",a=NaN,i="[object Symbol]",r=/^\s+|\s+$/g,o=/^[-+]0x[0-9a-f]+$/i,s=/^0b[01]+$/i,l=/^0o[0-7]+$/i,u=parseInt,d=typeof Vt=="object"&&Vt&&Vt.Object===Object&&Vt,m=typeof self=="object"&&self&&self.Object===Object&&self,f=d||m||Function("return this")(),g=Object.prototype,A=g.toString,K=Math.max,F=Math.min,p=function(){return f.Date.now()};function re(v,y,R){var k,j,_,J,H,he,ae=0,x=!1,Q=!1,fe=!0;if(typeof v!="function")throw new TypeError(n);y=h(y)||0,Y(R)&&(x=!!R.leading,Q="maxWait"in R,_=Q?K(h(R.maxWait)||0,y):_,fe="trailing"in R?!!R.trailing:fe);function ne(B){var N=k,ee=j;return k=j=void 0,ae=B,J=v.apply(ee,N),J}function b(B){return ae=B,H=setTimeout(G,y),x?ne(B):J}function S(B){var N=B-he,ee=B-ae,M=y-N;return Q?F(M,_-ee):M}function D(B){var N=B-he,ee=B-ae;return he===void 0||N>=y||N<0||Q&&ee>=_}function G(){var B=p();if(D(B))return q(B);H=setTimeout(G,S(B))}function q(B){return H=void 0,fe&&k?ne(B):(k=j=void 0,J)}function z(){H!==void 0&&clearTimeout(H),ae=0,k=he=j=H=void 0}function te(){return H===void 0?J:q(p())}function de(){var B=p(),N=D(B);if(k=arguments,j=this,he=B,N){if(H===void 0)return b(he);if(Q)return H=setTimeout(G,y),ne(he)}return H===void 0&&(H=setTimeout(G,y)),J}return de.cancel=z,de.flush=te,de}function O(v,y,R){var k=!0,j=!0;if(typeof v!="function")throw new TypeError(n);return Y(R)&&(k="leading"in R?!!R.leading:k,j="trailing"in R?!!R.trailing:j),re(v,y,{leading:k,maxWait:y,trailing:j})}function Y(v){var y=typeof v;return!!v&&(y=="object"||y=="function")}function ce(v){return!!v&&typeof v=="object"}function P(v){return typeof v=="symbol"||ce(v)&&A.call(v)==i}function h(v){if(typeof v=="number")return v;if(P(v))return a;if(Y(v)){var y=typeof v.valueOf=="function"?v.valueOf():v;v=Y(y)?y+"":y}if(typeof v!="string")return v===0?v:+v;v=v.replace(r,"");var R=s.test(v);return R||l.test(v)?u(v.slice(2),R?2:8):o.test(v)?a:+v}t.exports=O}),Dn={};Po(Dn,{default:()=>Aa});var Eo=Cn(En());Co(Dn,Cn(En()));var{default:Pn,...Do}=Eo,Aa=Pn!==void 0?Pn:Do;var Lo=Object.create,Pa=Object.defineProperty,_o=Object.getOwnPropertyDescriptor,Io=Object.getOwnPropertyNames,Mo=Object.getPrototypeOf,zo=Object.prototype.hasOwnProperty,Oo=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports),Ro=(e,t)=>{for(var n in t)Pa(e,n,{get:t[n],enumerable:!0})},ka=(e,t,n,a)=>{if(t&&typeof t=="object"||typeof t=="function")for(let i of Io(t))!zo.call(e,i)&&i!==n&&Pa(e,i,{get:()=>t[i],enumerable:!(a=_o(t,i))||a.enumerable});return e},No=(e,t,n)=>(ka(e,t,"default"),n&&ka(n,t,"default")),_n=(e,t,n)=>(n=e!=null?Lo(Mo(e)):{},ka(t||!e||!e.__esModule?Pa(n,"default",{value:e,enumerable:!0}):n,e)),In=Oo((e,t)=>{(function(n,a){typeof e=="object"&&typeof t=="object"?t.exports=a():typeof define=="function"&&define.amd?define([],a):typeof e=="object"?e.notie=a():n.notie=a()})(e,function(){return function(n){function a(r){if(i[r])return i[r].exports;var o=i[r]={i:r,l:!1,exports:{}};return n[r].call(o.exports,o,o.exports,a),o.l=!0,o.exports}var i={};return a.m=n,a.c=i,a.i=function(r){return r},a.d=function(r,o,s){a.o(r,o)||Object.defineProperty(r,o,{configurable:!1,enumerable:!0,get:s})},a.n=function(r){var o=r&&r.__esModule?function(){return r.default}:function(){return r};return a.d(o,"a",o),o},a.o=function(r,o){return Object.prototype.hasOwnProperty.call(r,o)},a.p="",a(a.s=1)}([function(n,a){n.exports=function(i){return i.webpackPolyfill||(i.deprecate=function(){},i.paths=[],i.children||(i.children=[]),Object.defineProperty(i,"loaded",{enumerable:!0,get:function(){return i.l}}),Object.defineProperty(i,"id",{enumerable:!0,get:function(){return i.i}}),i.webpackPolyfill=1),i}},function(n,a,i){"use strict";(function(r){var o,s,l,u=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(d){return typeof d}:function(d){return d&&typeof Symbol=="function"&&d.constructor===Symbol&&d!==Symbol.prototype?"symbol":typeof d};(function(d,m){u(a)==="object"&&u(r)==="object"?r.exports=m():(s=[],o=m,l=typeof o=="function"?o.apply(a,s):o,l!==void 0&&(r.exports=l))})(void 0,function(){return function(d){function m(g){if(f[g])return f[g].exports;var A=f[g]={i:g,l:!1,exports:{}};return d[g].call(A.exports,A,A.exports,m),A.l=!0,A.exports}var f={};return m.m=d,m.c=f,m.i=function(g){return g},m.d=function(g,A,K){m.o(g,A)||Object.defineProperty(g,A,{configurable:!1,enumerable:!0,get:K})},m.n=function(g){var A=g&&g.__esModule?function(){return g.default}:function(){return g};return m.d(A,"a",A),A},m.o=function(g,A){return Object.prototype.hasOwnProperty.call(g,A)},m.p="",m(m.s=0)}([function(d,m,f){function g(b,S){var D={};for(var G in b)S.indexOf(G)>=0||Object.prototype.hasOwnProperty.call(b,G)&&(D[G]=b[G]);return D}Object.defineProperty(m,"__esModule",{value:!0});var A=typeof Symbol=="function"&&u(Symbol.iterator)==="symbol"?function(b){return typeof b>"u"?"undefined":u(b)}:function(b){return b&&typeof Symbol=="function"&&b.constructor===Symbol&&b!==Symbol.prototype?"symbol":typeof b>"u"?"undefined":u(b)},K=Object.assign||function(b){for(var S=1;S<arguments.length;S++){var D=arguments[S];for(var G in D)Object.prototype.hasOwnProperty.call(D,G)&&(b[G]=D[G])}return b},F={top:"top",bottom:"bottom"},p={alertTime:3,dateMonths:["January","February","March","April","May","June","July","August","September","October","November","December"],overlayClickDismiss:!0,overlayOpacity:.75,transitionCurve:"ease",transitionDuration:.3,transitionSelector:"all",classes:{container:"notie-container",textbox:"notie-textbox",textboxInner:"notie-textbox-inner",button:"notie-button",element:"notie-element",elementHalf:"notie-element-half",elementThird:"notie-element-third",overlay:"notie-overlay",backgroundSuccess:"notie-background-success",backgroundWarning:"notie-background-warning",backgroundError:"notie-background-error",backgroundInfo:"notie-background-info",backgroundNeutral:"notie-background-neutral",backgroundOverlay:"notie-background-overlay",alert:"notie-alert",inputField:"notie-input-field",selectChoiceRepeated:"notie-select-choice-repeated",dateSelectorInner:"notie-date-selector-inner",dateSelectorUp:"notie-date-selector-up"},ids:{overlay:"notie-overlay"},positions:{alert:F.top,force:F.top,confirm:F.top,input:F.top,select:F.bottom,date:F.top}},re=m.setOptions=function(b){p=K({},p,b,{classes:K({},p.classes,b.classes),ids:K({},p.ids,b.ids),positions:K({},p.positions,b.positions)})},O=function(){return new Promise(function(b){return setTimeout(b,0)})},Y=function(b){return new Promise(function(S){return setTimeout(S,1e3*b)})},ce=function(){document.activeElement&&document.activeElement.blur()},P=function(){var b="xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(S){var D=16*Math.random()|0,G=S==="x"?D:3&D|8;return G.toString(16)});return"notie-"+b},h={1:p.classes.backgroundSuccess,success:p.classes.backgroundSuccess,2:p.classes.backgroundWarning,warning:p.classes.backgroundWarning,3:p.classes.backgroundError,error:p.classes.backgroundError,4:p.classes.backgroundInfo,info:p.classes.backgroundInfo,5:p.classes.backgroundNeutral,neutral:p.classes.backgroundNeutral},v=function(){return p.transitionSelector+" "+p.transitionDuration+"s "+p.transitionCurve},y=function(b){return b.keyCode===13},R=function(b){return b.keyCode===27},k=function(b,S){b.classList.add(p.classes.container),b.style[S]="-10000px",document.body.appendChild(b),b.style[S]="-"+b.offsetHeight+"px",b.listener&&window.addEventListener("keydown",b.listener),O().then(function(){b.style.transition=v(),b.style[S]=0})},j=function(b,S){var D=document.getElementById(b);D&&(D.style[S]="-"+D.offsetHeight+"px",D.listener&&window.removeEventListener("keydown",D.listener),Y(p.transitionDuration).then(function(){D.parentNode&&D.parentNode.removeChild(D)}))},_=function(b,S){var D=document.createElement("div");D.id=p.ids.overlay,D.classList.add(p.classes.overlay),D.classList.add(p.classes.backgroundOverlay),D.style.opacity=0,b&&p.overlayClickDismiss&&(D.onclick=function(){j(b.id,S),J()}),document.body.appendChild(D),O().then(function(){D.style.transition=v(),D.style.opacity=p.overlayOpacity})},J=function(){var b=document.getElementById(p.ids.overlay);b.style.opacity=0,Y(p.transitionDuration).then(function(){b.parentNode&&b.parentNode.removeChild(b)})},H=m.hideAlerts=function(b){var S=document.getElementsByClassName(p.classes.alert);if(S.length){for(var D=0;D<S.length;D++){var G=S[D];j(G.id,G.position)}b&&Y(p.transitionDuration).then(function(){return b()})}},he=m.alert=function(b){var S=b.type,D=S===void 0?4:S,G=b.text,q=b.time,z=q===void 0?p.alertTime:q,te=b.stay,de=te!==void 0&&te,B=b.position,N=B===void 0?p.positions.alert||N.top:B;ce(),H();var ee=document.createElement("div"),M=P();ee.id=M,ee.position=N,ee.classList.add(p.classes.textbox),ee.classList.add(h[D]),ee.classList.add(p.classes.alert),ee.innerHTML='<div class="'+p.classes.textboxInner+'">'+G+"</div>",ee.onclick=function(){return j(M,N)},ee.listener=function(C){(y(C)||R(C))&&H()},k(ee,N),z&&z<1&&(z=1),!de&&z&&Y(z).then(function(){return j(M,N)})},ae=m.force=function(b,S){var D=b.type,G=D===void 0?5:D,q=b.text,z=b.buttonText,te=z===void 0?"OK":z,de=b.callback,B=b.position,N=B===void 0?p.positions.force||N.top:B;ce(),H();var ee=document.createElement("div"),M=P();ee.id=M;var C=document.createElement("div");C.classList.add(p.classes.textbox),C.classList.add(p.classes.backgroundInfo),C.innerHTML='<div class="'+p.classes.textboxInner+'">'+q+"</div>";var V=document.createElement("div");V.classList.add(p.classes.button),V.classList.add(h[G]),V.innerHTML=te,V.onclick=function(){j(M,N),J(),de?de():S&&S()},ee.appendChild(C),ee.appendChild(V),ee.listener=function(me){y(me)&&V.click()},k(ee,N),_()},x=m.confirm=function(b,S,D){var G=b.text,q=b.submitText,z=q===void 0?"Yes":q,te=b.cancelText,de=te===void 0?"Cancel":te,B=b.submitCallback,N=b.cancelCallback,ee=b.position,M=ee===void 0?p.positions.confirm||M.top:ee;ce(),H();var C=document.createElement("div"),V=P();C.id=V;var me=document.createElement("div");me.classList.add(p.classes.textbox),me.classList.add(p.classes.backgroundInfo),me.innerHTML='<div class="'+p.classes.textboxInner+'">'+G+"</div>";var se=document.createElement("div");se.classList.add(p.classes.button),se.classList.add(p.classes.elementHalf),se.classList.add(p.classes.backgroundSuccess),se.innerHTML=z,se.onclick=function(){j(V,M),J(),B?B():S&&S()};var U=document.createElement("div");U.classList.add(p.classes.button),U.classList.add(p.classes.elementHalf),U.classList.add(p.classes.backgroundError),U.innerHTML=de,U.onclick=function(){j(V,M),J(),N?N():D&&D()},C.appendChild(me),C.appendChild(se),C.appendChild(U),C.listener=function(be){y(be)?se.click():R(be)&&U.click()},k(C,M),_(C,M)},Q=function(b,S,D){var G=b.text,q=b.submitText,z=q===void 0?"Submit":q,te=b.cancelText,de=te===void 0?"Cancel":te,B=b.submitCallback,N=b.cancelCallback,ee=b.position,M=ee===void 0?p.positions.input||M.top:ee,C=g(b,["text","submitText","cancelText","submitCallback","cancelCallback","position"]);ce(),H();var V=document.createElement("div"),me=P();V.id=me;var se=document.createElement("div");se.classList.add(p.classes.textbox),se.classList.add(p.classes.backgroundInfo),se.innerHTML='<div class="'+p.classes.textboxInner+'">'+G+"</div>";var U=document.createElement("input");U.classList.add(p.classes.inputField),U.setAttribute("autocapitalize",C.autocapitalize||"none"),U.setAttribute("autocomplete",C.autocomplete||"off"),U.setAttribute("autocorrect",C.autocorrect||"off"),U.setAttribute("autofocus",C.autofocus||"true"),U.setAttribute("inputmode",C.inputmode||"verbatim"),U.setAttribute("max",C.max||""),U.setAttribute("maxlength",C.maxlength||""),U.setAttribute("min",C.min||""),U.setAttribute("minlength",C.minlength||""),U.setAttribute("placeholder",C.placeholder||""),U.setAttribute("spellcheck",C.spellcheck||"default"),U.setAttribute("step",C.step||"any"),U.setAttribute("type",C.type||"text"),U.value=C.value||"",C.allowed&&(U.oninput=function(){var ye=void 0;if(Array.isArray(C.allowed)){for(var ve="",_e=C.allowed,qe=0;qe<_e.length;qe++)_e[qe]==="an"?ve+="0-9a-zA-Z":_e[qe]==="a"?ve+="a-zA-Z":_e[qe]==="n"&&(ve+="0-9"),_e[qe]==="s"&&(ve+=" ");ye=new RegExp("[^"+ve+"]","g")}else A(C.allowed)==="object"&&(ye=C.allowed);U.value=U.value.replace(ye,"")});var be=document.createElement("div");be.classList.add(p.classes.button),be.classList.add(p.classes.elementHalf),be.classList.add(p.classes.backgroundSuccess),be.innerHTML=z,be.onclick=function(){j(me,M),J(),B?B(U.value):S&&S(U.value)};var xe=document.createElement("div");xe.classList.add(p.classes.button),xe.classList.add(p.classes.elementHalf),xe.classList.add(p.classes.backgroundError),xe.innerHTML=de,xe.onclick=function(){j(me,M),J(),N?N(U.value):D&&D(U.value)},V.appendChild(se),V.appendChild(U),V.appendChild(be),V.appendChild(xe),V.listener=function(ye){y(ye)?be.click():R(ye)&&xe.click()},k(V,M),U.focus(),_(V,M)};m.input=Q;var fe=m.select=function(b,S){var D=b.text,G=b.cancelText,q=G===void 0?"Cancel":G,z=b.cancelCallback,te=b.choices,de=b.position,B=de===void 0?p.positions.select||B.top:de;ce(),H();var N=document.createElement("div"),ee=P();N.id=ee;var M=document.createElement("div");M.classList.add(p.classes.textbox),M.classList.add(p.classes.backgroundInfo),M.innerHTML='<div class="'+p.classes.textboxInner+'">'+D+"</div>",N.appendChild(M),te.forEach(function(V,me){var se=V.type,U=se===void 0?1:se,be=V.text,xe=V.handler,ye=document.createElement("div");ye.classList.add(h[U]),ye.classList.add(p.classes.button),ye.classList.add(p.classes.selectChoice);var ve=te[me+1];ve&&!ve.type&&(ve.type=1),ve&&ve.type===U&&ye.classList.add(p.classes.selectChoiceRepeated),ye.innerHTML=be,ye.onclick=function(){j(ee,B),J(),xe()},N.appendChild(ye)});var C=document.createElement("div");C.classList.add(p.classes.backgroundNeutral),C.classList.add(p.classes.button),C.innerHTML=q,C.onclick=function(){j(ee,B),J(),z?z():S&&S()},N.appendChild(C),N.listener=function(V){R(V)&&C.click()},k(N,B),_(N,B)},ne=m.date=function(b,S,D){var G=b.value,q=G===void 0?new Date:G,z=b.submitText,te=z===void 0?"OK":z,de=b.cancelText,B=de===void 0?"Cancel":de,N=b.submitCallback,ee=b.cancelCallback,M=b.position,C=M===void 0?p.positions.date||C.top:M;ce(),H();var V="&#9662",me=document.createElement("div"),se=document.createElement("div"),U=document.createElement("div"),be=function(Te){me.innerHTML=p.dateMonths[Te.getMonth()],se.innerHTML=Te.getDate(),U.innerHTML=Te.getFullYear()},xe=function(Te){var ue=new Date(q.getFullYear(),q.getMonth()+1,0).getDate(),Be=Te.target.textContent.replace(/^0+/,"").replace(/[^\d]/g,"").slice(0,2);Number(Be)>ue&&(Be=ue.toString()),Te.target.textContent=Be,Number(Be)<1&&(Be="1"),q.setDate(Number(Be))},ye=function(Te){var ue=Te.target.textContent.replace(/^0+/,"").replace(/[^\d]/g,"").slice(0,4);Te.target.textContent=ue,q.setFullYear(Number(ue))},ve=function(Te){be(q)},_e=function(Te){var ue=new Date(q.getFullYear(),q.getMonth()+Te+1,0).getDate();q.getDate()>ue&&q.setDate(ue),q.setMonth(q.getMonth()+Te),be(q)},qe=function(Te){q.setDate(q.getDate()+Te),be(q)},Lt=function(Te){var ue=q.getFullYear()+Te;ue<0?q.setFullYear(0):q.setFullYear(q.getFullYear()+Te),be(q)},$e=document.createElement("div"),ct=P();$e.id=ct;var bt=document.createElement("div");bt.classList.add(p.classes.backgroundInfo);var De=document.createElement("div");De.classList.add(p.classes.dateSelectorInner);var He=document.createElement("div");He.classList.add(p.classes.button),He.classList.add(p.classes.elementThird),He.classList.add(p.classes.dateSelectorUp),He.innerHTML=V;var Le=document.createElement("div");Le.classList.add(p.classes.button),Le.classList.add(p.classes.elementThird),Le.classList.add(p.classes.dateSelectorUp),Le.innerHTML=V;var Fe=document.createElement("div");Fe.classList.add(p.classes.button),Fe.classList.add(p.classes.elementThird),Fe.classList.add(p.classes.dateSelectorUp),Fe.innerHTML=V,me.classList.add(p.classes.element),me.classList.add(p.classes.elementThird),me.innerHTML=p.dateMonths[q.getMonth()],se.classList.add(p.classes.element),se.classList.add(p.classes.elementThird),se.setAttribute("contentEditable",!0),se.addEventListener("input",xe),se.addEventListener("blur",ve),se.innerHTML=q.getDate(),U.classList.add(p.classes.element),U.classList.add(p.classes.elementThird),U.setAttribute("contentEditable",!0),U.addEventListener("input",ye),U.addEventListener("blur",ve),U.innerHTML=q.getFullYear();var Xe=document.createElement("div");Xe.classList.add(p.classes.button),Xe.classList.add(p.classes.elementThird),Xe.innerHTML=V;var et=document.createElement("div");et.classList.add(p.classes.button),et.classList.add(p.classes.elementThird),et.innerHTML=V;var ut=document.createElement("div");ut.classList.add(p.classes.button),ut.classList.add(p.classes.elementThird),ut.innerHTML=V,He.onclick=function(){return _e(1)},Le.onclick=function(){return qe(1)},Fe.onclick=function(){return Lt(1)},Xe.onclick=function(){return _e(-1)},et.onclick=function(){return qe(-1)},ut.onclick=function(){return Lt(-1)};var Ie=document.createElement("div");Ie.classList.add(p.classes.button),Ie.classList.add(p.classes.elementHalf),Ie.classList.add(p.classes.backgroundSuccess),Ie.innerHTML=te,Ie.onclick=function(){j(ct,C),J(),N?N(q):S&&S(q)};var tt=document.createElement("div");tt.classList.add(p.classes.button),tt.classList.add(p.classes.elementHalf),tt.classList.add(p.classes.backgroundError),tt.innerHTML=B,tt.onclick=function(){j(ct,C),J(),ee?ee(q):D&&D(q)},De.appendChild(He),De.appendChild(Le),De.appendChild(Fe),De.appendChild(me),De.appendChild(se),De.appendChild(U),De.appendChild(Xe),De.appendChild(et),De.appendChild(ut),bt.appendChild(De),$e.appendChild(bt),$e.appendChild(Ie),$e.appendChild(tt),$e.listener=function(Te){y(Te)?Ie.click():R(Te)&&tt.click()},k($e,C),_($e,C)};m.default={alert:he,force:ae,confirm:x,input:Q,select:fe,date:ne,setOptions:re,hideAlerts:H}}])})}).call(a,i(0)(n))}])})}),Mn={};Ro(Mn,{default:()=>Qt});var Fo=_n(In());No(Mn,_n(In()));var{default:Ln,...Bo}=Fo,Qt=Ln!==void 0?Ln:Bo;var Ca=typeof navigator<"u"?navigator.userAgent.toLowerCase().indexOf("firefox")>0:!1;function Ea(e,t,n,a){e.addEventListener?e.addEventListener(t,n,a):e.attachEvent&&e.attachEvent("on".concat(t),function(){n(window.event)})}function Fn(e,t){for(var n=t.slice(0,t.length-1),a=0;a<n.length;a++)n[a]=e[n[a].toLowerCase()];return n}function Bn(e){typeof e!="string"&&(e=""),e=e.replace(/\s/g,"");for(var t=e.split(","),n=t.lastIndexOf("");n>=0;)t[n-1]+=",",t.splice(n,1),n=t.lastIndexOf("");return t}function Uo(e,t){for(var n=e.length>=t.length?e:t,a=e.length>=t.length?t:e,i=!0,r=0;r<n.length;r++)a.indexOf(n[r])===-1&&(i=!1);return i}var Mt={backspace:8,"\u232B":8,tab:9,clear:12,enter:13,"\u21A9":13,return:13,esc:27,escape:27,space:32,left:37,up:38,right:39,down:40,del:46,delete:46,ins:45,insert:45,home:36,end:35,pageup:33,pagedown:34,capslock:20,num_0:96,num_1:97,num_2:98,num_3:99,num_4:100,num_5:101,num_6:102,num_7:103,num_8:104,num_9:105,num_multiply:106,num_add:107,num_enter:108,num_subtract:109,num_decimal:110,num_divide:111,"\u21EA":20,",":188,".":190,"/":191,"`":192,"-":Ca?173:189,"=":Ca?61:187,";":Ca?59:186,"'":222,"[":219,"]":221,"\\":220},Je={"\u21E7":16,shift:16,"\u2325":18,alt:18,option:18,"\u2303":17,ctrl:17,control:17,"\u2318":91,cmd:91,command:91},_a={16:"shiftKey",18:"altKey",17:"ctrlKey",91:"metaKey",shiftKey:16,ctrlKey:17,altKey:18,metaKey:91},Ee={16:!1,18:!1,17:!1,91:!1},we={};for(It=1;It<20;It++)Mt["f".concat(It)]=111+It;var It,ge=[],zn=!1,Un="all",qn=[],$t=function(e){return Mt[e.toLowerCase()]||Je[e.toLowerCase()]||e.toUpperCase().charCodeAt(0)},qo=function(e){return Object.keys(Mt).find(function(t){return Mt[t]===e})},Ko=function(e){return Object.keys(Je).find(function(t){return Je[t]===e})};function Kn(e){Un=e||"all"}function zt(){return Un||"all"}function Wo(){return ge.slice(0)}function jo(){return ge.map(function(e){return qo(e)||Ko(e)||String.fromCharCode(e)})}function Ho(e){var t=e.target||e.srcElement,n=t.tagName,a=!0;return(t.isContentEditable||(n==="INPUT"||n==="TEXTAREA"||n==="SELECT")&&!t.readOnly)&&(a=!1),a}function Go(e){return typeof e=="string"&&(e=$t(e)),ge.indexOf(e)!==-1}function Vo(e,t){var n,a;e||(e=zt());for(var i in we)if(Object.prototype.hasOwnProperty.call(we,i))for(n=we[i],a=0;a<n.length;)n[a].scope===e?n.splice(a,1):a++;zt()===e&&Kn(t||"all")}function Qo(e){var t=e.keyCode||e.which||e.charCode,n=ge.indexOf(t);if(n>=0&&ge.splice(n,1),e.key&&e.key.toLowerCase()==="meta"&&ge.splice(0,ge.length),(t===93||t===224)&&(t=91),t in Ee){Ee[t]=!1;for(var a in Je)Je[a]===t&&(Ze[a]=!1)}}function Yo(e){if(typeof e>"u")Object.keys(we).forEach(function(o){return delete we[o]});else if(Array.isArray(e))e.forEach(function(o){o.key&&Da(o)});else if(typeof e=="object")e.key&&Da(e);else if(typeof e=="string"){for(var t=arguments.length,n=new Array(t>1?t-1:0),a=1;a<t;a++)n[a-1]=arguments[a];var i=n[0],r=n[1];typeof i=="function"&&(r=i,i=""),Da({key:e,scope:i,method:r,splitKey:"+"})}}var Da=function(e){var t=e.key,n=e.scope,a=e.method,i=e.splitKey,r=i===void 0?"+":i,o=Bn(t);o.forEach(function(s){var l=s.split(r),u=l.length,d=l[u-1],m=d==="*"?"*":$t(d);if(we[m]){n||(n=zt());var f=u>1?Fn(Je,l):[];we[m]=we[m].filter(function(g){var A=a?g.method===a:!0;return!(A&&g.scope===n&&Uo(g.mods,f))})}})};function On(e,t,n,a){if(t.element===a){var i;if(t.scope===n||t.scope==="all"){i=t.mods.length>0;for(var r in Ee)Object.prototype.hasOwnProperty.call(Ee,r)&&(!Ee[r]&&t.mods.indexOf(+r)>-1||Ee[r]&&t.mods.indexOf(+r)===-1)&&(i=!1);(t.mods.length===0&&!Ee[16]&&!Ee[18]&&!Ee[17]&&!Ee[91]||i||t.shortcut==="*")&&t.method(e,t)===!1&&(e.preventDefault?e.preventDefault():e.returnValue=!1,e.stopPropagation&&e.stopPropagation(),e.cancelBubble&&(e.cancelBubble=!0))}}}function Rn(e,t){var n=we["*"],a=e.keyCode||e.which||e.charCode;if(Ze.filter.call(this,e)){if((a===93||a===224)&&(a=91),ge.indexOf(a)===-1&&a!==229&&ge.push(a),["ctrlKey","altKey","shiftKey","metaKey"].forEach(function(A){var K=_a[A];e[A]&&ge.indexOf(K)===-1?ge.push(K):!e[A]&&ge.indexOf(K)>-1?ge.splice(ge.indexOf(K),1):A==="metaKey"&&e[A]&&ge.length===3&&(e.ctrlKey||e.shiftKey||e.altKey||(ge=ge.slice(ge.indexOf(K))))}),a in Ee){Ee[a]=!0;for(var i in Je)Je[i]===a&&(Ze[i]=!0);if(!n)return}for(var r in Ee)Object.prototype.hasOwnProperty.call(Ee,r)&&(Ee[r]=e[_a[r]]);e.getModifierState&&!(e.altKey&&!e.ctrlKey)&&e.getModifierState("AltGraph")&&(ge.indexOf(17)===-1&&ge.push(17),ge.indexOf(18)===-1&&ge.push(18),Ee[17]=!0,Ee[18]=!0);var o=zt();if(n)for(var s=0;s<n.length;s++)n[s].scope===o&&(e.type==="keydown"&&n[s].keydown||e.type==="keyup"&&n[s].keyup)&&On(e,n[s],o,t);if(a in we){for(var l=0;l<we[a].length;l++)if((e.type==="keydown"&&we[a][l].keydown||e.type==="keyup"&&we[a][l].keyup)&&we[a][l].key){for(var u=we[a][l],d=u.splitKey,m=u.key.split(d),f=[],g=0;g<m.length;g++)f.push($t(m[g]));f.sort().join("")===ge.sort().join("")&&On(e,u,o,t)}}}}function $o(e){return qn.indexOf(e)>-1}function Ze(e,t,n){ge=[];var a=Bn(e),i=[],r="all",o=document,s=0,l=!1,u=!0,d="+",m=!1;for(n===void 0&&typeof t=="function"&&(n=t),Object.prototype.toString.call(t)==="[object Object]"&&(t.scope&&(r=t.scope),t.element&&(o=t.element),t.keyup&&(l=t.keyup),t.keydown!==void 0&&(u=t.keydown),t.capture!==void 0&&(m=t.capture),typeof t.splitKey=="string"&&(d=t.splitKey)),typeof t=="string"&&(r=t);s<a.length;s++)e=a[s].split(d),i=[],e.length>1&&(i=Fn(Je,e)),e=e[e.length-1],e=e==="*"?"*":$t(e),e in we||(we[e]=[]),we[e].push({keyup:l,keydown:u,scope:r,mods:i,shortcut:a[s],method:n,key:a[s],splitKey:d,element:o});typeof o<"u"&&!$o(o)&&window&&(qn.push(o),Ea(o,"keydown",function(f){Rn(f,o)},m),zn||(zn=!0,Ea(window,"focus",function(){ge=[]},m)),Ea(o,"keyup",function(f){Rn(f,o),Qo(f)},m))}function Zo(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"all";Object.keys(we).forEach(function(n){var a=we[n].filter(function(i){return i.scope===t&&i.shortcut===e});a.forEach(function(i){i&&i.method&&i.method()})})}var La={getPressedKeyString:jo,setScope:Kn,getScope:zt,deleteScope:Vo,getPressedKeyCodes:Wo,isPressed:Go,filter:Ho,trigger:Zo,unbind:Yo,keyMap:Mt,modifier:Je,modifierMap:_a};for(Yt in La)Object.prototype.hasOwnProperty.call(La,Yt)&&(Ze[Yt]=La[Yt]);var Yt;typeof document<"u"&&(Nn=window.hotkeys,Ze.noConflict=function(e){return e&&window.hotkeys===Ze&&(window.hotkeys=Nn),Ze},window.hotkeys=Ze);var Nn;var Jo={"Amazon Silk":"amazon_silk","Android Browser":"android",Bada:"bada",BlackBerry:"blackberry",Chrome:"chrome",Chromium:"chromium",Electron:"electron",Epiphany:"epiphany",Firefox:"firefox",Focus:"focus",Generic:"generic","Google Search":"google_search",Googlebot:"googlebot","Internet Explorer":"ie","K-Meleon":"k_meleon",Maxthon:"maxthon","Microsoft Edge":"edge","MZ Browser":"mz","NAVER Whale Browser":"naver",Opera:"opera","Opera Coast":"opera_coast",PhantomJS:"phantomjs",Puffin:"puffin",QupZilla:"qupzilla",QQ:"qq",QQLite:"qqlite",Safari:"safari",Sailfish:"sailfish","Samsung Internet for Android":"samsung_internet",SeaMonkey:"seamonkey",Sleipnir:"sleipnir",Swing:"swing",Tizen:"tizen","UC Browser":"uc",Vivaldi:"vivaldi","WebOS Browser":"webos",WeChat:"wechat","Yandex Browser":"yandex",Roku:"roku"},jn={amazon_silk:"Amazon Silk",android:"Android Browser",bada:"Bada",blackberry:"BlackBerry",chrome:"Chrome",chromium:"Chromium",electron:"Electron",epiphany:"Epiphany",firefox:"Firefox",focus:"Focus",generic:"Generic",googlebot:"Googlebot",google_search:"Google Search",ie:"Internet Explorer",k_meleon:"K-Meleon",maxthon:"Maxthon",edge:"Microsoft Edge",mz:"MZ Browser",naver:"NAVER Whale Browser",opera:"Opera",opera_coast:"Opera Coast",phantomjs:"PhantomJS",puffin:"Puffin",qupzilla:"QupZilla",qq:"QQ Browser",qqlite:"QQ Browser Lite",safari:"Safari",sailfish:"Sailfish",samsung_internet:"Samsung Internet for Android",seamonkey:"SeaMonkey",sleipnir:"Sleipnir",swing:"Swing",tizen:"Tizen",uc:"UC Browser",vivaldi:"Vivaldi",webos:"WebOS Browser",wechat:"WeChat",yandex:"Yandex Browser"},Se={tablet:"tablet",mobile:"mobile",desktop:"desktop",tv:"tv"},ze={WindowsPhone:"Windows Phone",Windows:"Windows",MacOS:"macOS",iOS:"iOS",Android:"Android",WebOS:"WebOS",BlackBerry:"BlackBerry",Bada:"Bada",Tizen:"Tizen",Linux:"Linux",ChromeOS:"Chrome OS",PlayStation4:"PlayStation 4",Roku:"Roku"},ot={EdgeHTML:"EdgeHTML",Blink:"Blink",Trident:"Trident",Presto:"Presto",Gecko:"Gecko",WebKit:"WebKit"},T=class{static getFirstMatch(e,t){let n=t.match(e);return n&&n.length>0&&n[1]||""}static getSecondMatch(e,t){let n=t.match(e);return n&&n.length>1&&n[2]||""}static matchAndReturnConst(e,t,n){if(e.test(t))return n}static getWindowsVersionName(e){switch(e){case"NT":return"NT";case"XP":return"XP";case"NT 5.0":return"2000";case"NT 5.1":return"XP";case"NT 5.2":return"2003";case"NT 6.0":return"Vista";case"NT 6.1":return"7";case"NT 6.2":return"8";case"NT 6.3":return"8.1";case"NT 10.0":return"10";default:return}}static getMacOSVersionName(e){let t=e.split(".").splice(0,2).map(n=>parseInt(n,10)||0);if(t.push(0),t[0]===10)switch(t[1]){case 5:return"Leopard";case 6:return"Snow Leopard";case 7:return"Lion";case 8:return"Mountain Lion";case 9:return"Mavericks";case 10:return"Yosemite";case 11:return"El Capitan";case 12:return"Sierra";case 13:return"High Sierra";case 14:return"Mojave";case 15:return"Catalina";default:return}}static getAndroidVersionName(e){let t=e.split(".").splice(0,2).map(n=>parseInt(n,10)||0);if(t.push(0),!(t[0]===1&&t[1]<5)){if(t[0]===1&&t[1]<6)return"Cupcake";if(t[0]===1&&t[1]>=6)return"Donut";if(t[0]===2&&t[1]<2)return"Eclair";if(t[0]===2&&t[1]===2)return"Froyo";if(t[0]===2&&t[1]>2)return"Gingerbread";if(t[0]===3)return"Honeycomb";if(t[0]===4&&t[1]<1)return"Ice Cream Sandwich";if(t[0]===4&&t[1]<4)return"Jelly Bean";if(t[0]===4&&t[1]>=4)return"KitKat";if(t[0]===5)return"Lollipop";if(t[0]===6)return"Marshmallow";if(t[0]===7)return"Nougat";if(t[0]===8)return"Oreo";if(t[0]===9)return"Pie"}}static getVersionPrecision(e){return e.split(".").length}static compareVersions(e,t,n=!1){let a=T.getVersionPrecision(e),i=T.getVersionPrecision(t),r=Math.max(a,i),o=0,s=T.map([e,t],l=>{let u=r-T.getVersionPrecision(l),d=l+new Array(u+1).join(".0");return T.map(d.split("."),m=>new Array(20-m.length).join("0")+m).reverse()});for(n&&(o=r-Math.min(a,i)),r-=1;r>=o;){if(s[0][r]>s[1][r])return 1;if(s[0][r]===s[1][r]){if(r===o)return 0;r-=1}else if(s[0][r]<s[1][r])return-1}}static map(e,t){let n=[],a;if(Array.prototype.map)return Array.prototype.map.call(e,t);for(a=0;a<e.length;a+=1)n.push(t(e[a]));return n}static find(e,t){let n,a;if(Array.prototype.find)return Array.prototype.find.call(e,t);for(n=0,a=e.length;n<a;n+=1){let i=e[n];if(t(i,n))return i}}static assign(e,...t){let n=e,a,i;if(Object.assign)return Object.assign(e,...t);for(a=0,i=t.length;a<i;a+=1){let r=t[a];typeof r=="object"&&r!==null&&Object.keys(r).forEach(o=>{n[o]=r[o]})}return e}static getBrowserAlias(e){return Jo[e]}static getBrowserTypeByAlias(e){return jn[e]||""}},pe=/version\/(\d+(\.?_?\d+)+)/i,Xo=[{test:[/googlebot/i],describe(e){let t={name:"Googlebot"},n=T.getFirstMatch(/googlebot\/(\d+(\.\d+))/i,e)||T.getFirstMatch(pe,e);return n&&(t.version=n),t}},{test:[/opera/i],describe(e){let t={name:"Opera"},n=T.getFirstMatch(pe,e)||T.getFirstMatch(/(?:opera)[\s/](\d+(\.?_?\d+)+)/i,e);return n&&(t.version=n),t}},{test:[/opr\/|opios/i],describe(e){let t={name:"Opera"},n=T.getFirstMatch(/(?:opr|opios)[\s/](\S+)/i,e)||T.getFirstMatch(pe,e);return n&&(t.version=n),t}},{test:[/SamsungBrowser/i],describe(e){let t={name:"Samsung Internet for Android"},n=T.getFirstMatch(pe,e)||T.getFirstMatch(/(?:SamsungBrowser)[\s/](\d+(\.?_?\d+)+)/i,e);return n&&(t.version=n),t}},{test:[/Whale/i],describe(e){let t={name:"NAVER Whale Browser"},n=T.getFirstMatch(pe,e)||T.getFirstMatch(/(?:whale)[\s/](\d+(?:\.\d+)+)/i,e);return n&&(t.version=n),t}},{test:[/MZBrowser/i],describe(e){let t={name:"MZ Browser"},n=T.getFirstMatch(/(?:MZBrowser)[\s/](\d+(?:\.\d+)+)/i,e)||T.getFirstMatch(pe,e);return n&&(t.version=n),t}},{test:[/focus/i],describe(e){let t={name:"Focus"},n=T.getFirstMatch(/(?:focus)[\s/](\d+(?:\.\d+)+)/i,e)||T.getFirstMatch(pe,e);return n&&(t.version=n),t}},{test:[/swing/i],describe(e){let t={name:"Swing"},n=T.getFirstMatch(/(?:swing)[\s/](\d+(?:\.\d+)+)/i,e)||T.getFirstMatch(pe,e);return n&&(t.version=n),t}},{test:[/coast/i],describe(e){let t={name:"Opera Coast"},n=T.getFirstMatch(pe,e)||T.getFirstMatch(/(?:coast)[\s/](\d+(\.?_?\d+)+)/i,e);return n&&(t.version=n),t}},{test:[/opt\/\d+(?:.?_?\d+)+/i],describe(e){let t={name:"Opera Touch"},n=T.getFirstMatch(/(?:opt)[\s/](\d+(\.?_?\d+)+)/i,e)||T.getFirstMatch(pe,e);return n&&(t.version=n),t}},{test:[/yabrowser/i],describe(e){let t={name:"Yandex Browser"},n=T.getFirstMatch(/(?:yabrowser)[\s/](\d+(\.?_?\d+)+)/i,e)||T.getFirstMatch(pe,e);return n&&(t.version=n),t}},{test:[/ucbrowser/i],describe(e){let t={name:"UC Browser"},n=T.getFirstMatch(pe,e)||T.getFirstMatch(/(?:ucbrowser)[\s/](\d+(\.?_?\d+)+)/i,e);return n&&(t.version=n),t}},{test:[/Maxthon|mxios/i],describe(e){let t={name:"Maxthon"},n=T.getFirstMatch(pe,e)||T.getFirstMatch(/(?:Maxthon|mxios)[\s/](\d+(\.?_?\d+)+)/i,e);return n&&(t.version=n),t}},{test:[/epiphany/i],describe(e){let t={name:"Epiphany"},n=T.getFirstMatch(pe,e)||T.getFirstMatch(/(?:epiphany)[\s/](\d+(\.?_?\d+)+)/i,e);return n&&(t.version=n),t}},{test:[/puffin/i],describe(e){let t={name:"Puffin"},n=T.getFirstMatch(pe,e)||T.getFirstMatch(/(?:puffin)[\s/](\d+(\.?_?\d+)+)/i,e);return n&&(t.version=n),t}},{test:[/sleipnir/i],describe(e){let t={name:"Sleipnir"},n=T.getFirstMatch(pe,e)||T.getFirstMatch(/(?:sleipnir)[\s/](\d+(\.?_?\d+)+)/i,e);return n&&(t.version=n),t}},{test:[/k-meleon/i],describe(e){let t={name:"K-Meleon"},n=T.getFirstMatch(pe,e)||T.getFirstMatch(/(?:k-meleon)[\s/](\d+(\.?_?\d+)+)/i,e);return n&&(t.version=n),t}},{test:[/micromessenger/i],describe(e){let t={name:"WeChat"},n=T.getFirstMatch(/(?:micromessenger)[\s/](\d+(\.?_?\d+)+)/i,e)||T.getFirstMatch(pe,e);return n&&(t.version=n),t}},{test:[/qqbrowser/i],describe(e){let t={name:/qqbrowserlite/i.test(e)?"QQ Browser Lite":"QQ Browser"},n=T.getFirstMatch(/(?:qqbrowserlite|qqbrowser)[/](\d+(\.?_?\d+)+)/i,e)||T.getFirstMatch(pe,e);return n&&(t.version=n),t}},{test:[/msie|trident/i],describe(e){let t={name:"Internet Explorer"},n=T.getFirstMatch(/(?:msie |rv:)(\d+(\.?_?\d+)+)/i,e);return n&&(t.version=n),t}},{test:[/\sedg\//i],describe(e){let t={name:"Microsoft Edge"},n=T.getFirstMatch(/\sedg\/(\d+(\.?_?\d+)+)/i,e);return n&&(t.version=n),t}},{test:[/edg([ea]|ios)/i],describe(e){let t={name:"Microsoft Edge"},n=T.getSecondMatch(/edg([ea]|ios)\/(\d+(\.?_?\d+)+)/i,e);return n&&(t.version=n),t}},{test:[/vivaldi/i],describe(e){let t={name:"Vivaldi"},n=T.getFirstMatch(/vivaldi\/(\d+(\.?_?\d+)+)/i,e);return n&&(t.version=n),t}},{test:[/seamonkey/i],describe(e){let t={name:"SeaMonkey"},n=T.getFirstMatch(/seamonkey\/(\d+(\.?_?\d+)+)/i,e);return n&&(t.version=n),t}},{test:[/sailfish/i],describe(e){let t={name:"Sailfish"},n=T.getFirstMatch(/sailfish\s?browser\/(\d+(\.\d+)?)/i,e);return n&&(t.version=n),t}},{test:[/silk/i],describe(e){let t={name:"Amazon Silk"},n=T.getFirstMatch(/silk\/(\d+(\.?_?\d+)+)/i,e);return n&&(t.version=n),t}},{test:[/phantom/i],describe(e){let t={name:"PhantomJS"},n=T.getFirstMatch(/phantomjs\/(\d+(\.?_?\d+)+)/i,e);return n&&(t.version=n),t}},{test:[/slimerjs/i],describe(e){let t={name:"SlimerJS"},n=T.getFirstMatch(/slimerjs\/(\d+(\.?_?\d+)+)/i,e);return n&&(t.version=n),t}},{test:[/blackberry|\bbb\d+/i,/rim\stablet/i],describe(e){let t={name:"BlackBerry"},n=T.getFirstMatch(pe,e)||T.getFirstMatch(/blackberry[\d]+\/(\d+(\.?_?\d+)+)/i,e);return n&&(t.version=n),t}},{test:[/(web|hpw)[o0]s/i],describe(e){let t={name:"WebOS Browser"},n=T.getFirstMatch(pe,e)||T.getFirstMatch(/w(?:eb)?[o0]sbrowser\/(\d+(\.?_?\d+)+)/i,e);return n&&(t.version=n),t}},{test:[/bada/i],describe(e){let t={name:"Bada"},n=T.getFirstMatch(/dolfin\/(\d+(\.?_?\d+)+)/i,e);return n&&(t.version=n),t}},{test:[/tizen/i],describe(e){let t={name:"Tizen"},n=T.getFirstMatch(/(?:tizen\s?)?browser\/(\d+(\.?_?\d+)+)/i,e)||T.getFirstMatch(pe,e);return n&&(t.version=n),t}},{test:[/qupzilla/i],describe(e){let t={name:"QupZilla"},n=T.getFirstMatch(/(?:qupzilla)[\s/](\d+(\.?_?\d+)+)/i,e)||T.getFirstMatch(pe,e);return n&&(t.version=n),t}},{test:[/firefox|iceweasel|fxios/i],describe(e){let t={name:"Firefox"},n=T.getFirstMatch(/(?:firefox|iceweasel|fxios)[\s/](\d+(\.?_?\d+)+)/i,e);return n&&(t.version=n),t}},{test:[/electron/i],describe(e){let t={name:"Electron"},n=T.getFirstMatch(/(?:electron)\/(\d+(\.?_?\d+)+)/i,e);return n&&(t.version=n),t}},{test:[/MiuiBrowser/i],describe(e){let t={name:"Miui"},n=T.getFirstMatch(/(?:MiuiBrowser)[\s/](\d+(\.?_?\d+)+)/i,e);return n&&(t.version=n),t}},{test:[/chromium/i],describe(e){let t={name:"Chromium"},n=T.getFirstMatch(/(?:chromium)[\s/](\d+(\.?_?\d+)+)/i,e)||T.getFirstMatch(pe,e);return n&&(t.version=n),t}},{test:[/chrome|crios|crmo/i],describe(e){let t={name:"Chrome"},n=T.getFirstMatch(/(?:chrome|crios|crmo)\/(\d+(\.?_?\d+)+)/i,e);return n&&(t.version=n),t}},{test:[/GSA/i],describe(e){let t={name:"Google Search"},n=T.getFirstMatch(/(?:GSA)\/(\d+(\.?_?\d+)+)/i,e);return n&&(t.version=n),t}},{test(e){let t=!e.test(/like android/i),n=e.test(/android/i);return t&&n},describe(e){let t={name:"Android Browser"},n=T.getFirstMatch(pe,e);return n&&(t.version=n),t}},{test:[/playstation 4/i],describe(e){let t={name:"PlayStation 4"},n=T.getFirstMatch(pe,e);return n&&(t.version=n),t}},{test:[/safari|applewebkit/i],describe(e){let t={name:"Safari"},n=T.getFirstMatch(pe,e);return n&&(t.version=n),t}},{test:[/.*/i],describe(e){let t=/^(.*)\/(.*) /,n=/^(.*)\/(.*)[ \t]\((.*)/,a=e.search("\\(")!==-1?n:t;return{name:T.getFirstMatch(a,e),version:T.getSecondMatch(a,e)}}}],es=Xo,ts=[{test:[/Roku\/DVP/],describe(e){let t=T.getFirstMatch(/Roku\/DVP-(\d+\.\d+)/i,e);return{name:ze.Roku,version:t}}},{test:[/windows phone/i],describe(e){let t=T.getFirstMatch(/windows phone (?:os)?\s?(\d+(\.\d+)*)/i,e);return{name:ze.WindowsPhone,version:t}}},{test:[/windows /i],describe(e){let t=T.getFirstMatch(/Windows ((NT|XP)( \d\d?.\d)?)/i,e),n=T.getWindowsVersionName(t);return{name:ze.Windows,version:t,versionName:n}}},{test:[/Macintosh(.*?) FxiOS(.*?)\//],describe(e){let t={name:ze.iOS},n=T.getSecondMatch(/(Version\/)(\d[\d.]+)/,e);return n&&(t.version=n),t}},{test:[/macintosh/i],describe(e){let t=T.getFirstMatch(/mac os x (\d+(\.?_?\d+)+)/i,e).replace(/[_\s]/g,"."),n=T.getMacOSVersionName(t),a={name:ze.MacOS,version:t};return n&&(a.versionName=n),a}},{test:[/(ipod|iphone|ipad)/i],describe(e){let t=T.getFirstMatch(/os (\d+([_\s]\d+)*) like mac os x/i,e).replace(/[_\s]/g,".");return{name:ze.iOS,version:t}}},{test(e){let t=!e.test(/like android/i),n=e.test(/android/i);return t&&n},describe(e){let t=T.getFirstMatch(/android[\s/-](\d+(\.\d+)*)/i,e),n=T.getAndroidVersionName(t),a={name:ze.Android,version:t};return n&&(a.versionName=n),a}},{test:[/(web|hpw)[o0]s/i],describe(e){let t=T.getFirstMatch(/(?:web|hpw)[o0]s\/(\d+(\.\d+)*)/i,e),n={name:ze.WebOS};return t&&t.length&&(n.version=t),n}},{test:[/blackberry|\bbb\d+/i,/rim\stablet/i],describe(e){let t=T.getFirstMatch(/rim\stablet\sos\s(\d+(\.\d+)*)/i,e)||T.getFirstMatch(/blackberry\d+\/(\d+([_\s]\d+)*)/i,e)||T.getFirstMatch(/\bbb(\d+)/i,e);return{name:ze.BlackBerry,version:t}}},{test:[/bada/i],describe(e){let t=T.getFirstMatch(/bada\/(\d+(\.\d+)*)/i,e);return{name:ze.Bada,version:t}}},{test:[/tizen/i],describe(e){let t=T.getFirstMatch(/tizen[/\s](\d+(\.\d+)*)/i,e);return{name:ze.Tizen,version:t}}},{test:[/linux/i],describe(){return{name:ze.Linux}}},{test:[/CrOS/],describe(){return{name:ze.ChromeOS}}},{test:[/PlayStation 4/],describe(e){let t=T.getFirstMatch(/PlayStation 4[/\s](\d+(\.\d+)*)/i,e);return{name:ze.PlayStation4,version:t}}}],as=[{test:[/googlebot/i],describe(){return{type:"bot",vendor:"Google"}}},{test:[/huawei/i],describe(e){let t=T.getFirstMatch(/(can-l01)/i,e)&&"Nova",n={type:Se.mobile,vendor:"Huawei"};return t&&(n.model=t),n}},{test:[/nexus\s*(?:7|8|9|10).*/i],describe(){return{type:Se.tablet,vendor:"Nexus"}}},{test:[/ipad/i],describe(){return{type:Se.tablet,vendor:"Apple",model:"iPad"}}},{test:[/Macintosh(.*?) FxiOS(.*?)\//],describe(){return{type:Se.tablet,vendor:"Apple",model:"iPad"}}},{test:[/kftt build/i],describe(){return{type:Se.tablet,vendor:"Amazon",model:"Kindle Fire HD 7"}}},{test:[/silk/i],describe(){return{type:Se.tablet,vendor:"Amazon"}}},{test:[/tablet(?! pc)/i],describe(){return{type:Se.tablet}}},{test(e){let t=e.test(/ipod|iphone/i),n=e.test(/like (ipod|iphone)/i);return t&&!n},describe(e){let t=T.getFirstMatch(/(ipod|iphone)/i,e);return{type:Se.mobile,vendor:"Apple",model:t}}},{test:[/nexus\s*[0-6].*/i,/galaxy nexus/i],describe(){return{type:Se.mobile,vendor:"Nexus"}}},{test:[/[^-]mobi/i],describe(){return{type:Se.mobile}}},{test(e){return e.getBrowserName(!0)==="blackberry"},describe(){return{type:Se.mobile,vendor:"BlackBerry"}}},{test(e){return e.getBrowserName(!0)==="bada"},describe(){return{type:Se.mobile}}},{test(e){return e.getBrowserName()==="windows phone"},describe(){return{type:Se.mobile,vendor:"Microsoft"}}},{test(e){let t=Number(String(e.getOSVersion()).split(".")[0]);return e.getOSName(!0)==="android"&&t>=3},describe(){return{type:Se.tablet}}},{test(e){return e.getOSName(!0)==="android"},describe(){return{type:Se.mobile}}},{test(e){return e.getOSName(!0)==="macos"},describe(){return{type:Se.desktop,vendor:"Apple"}}},{test(e){return e.getOSName(!0)==="windows"},describe(){return{type:Se.desktop}}},{test(e){return e.getOSName(!0)==="linux"},describe(){return{type:Se.desktop}}},{test(e){return e.getOSName(!0)==="playstation 4"},describe(){return{type:Se.tv}}},{test(e){return e.getOSName(!0)==="roku"},describe(){return{type:Se.tv}}}],ns=[{test(e){return e.getBrowserName(!0)==="microsoft edge"},describe(e){if(/\sedg\//i.test(e))return{name:ot.Blink};let t=T.getFirstMatch(/edge\/(\d+(\.?_?\d+)+)/i,e);return{name:ot.EdgeHTML,version:t}}},{test:[/trident/i],describe(e){let t={name:ot.Trident},n=T.getFirstMatch(/trident\/(\d+(\.?_?\d+)+)/i,e);return n&&(t.version=n),t}},{test(e){return e.test(/presto/i)},describe(e){let t={name:ot.Presto},n=T.getFirstMatch(/presto\/(\d+(\.?_?\d+)+)/i,e);return n&&(t.version=n),t}},{test(e){let t=e.test(/gecko/i),n=e.test(/like gecko/i);return t&&!n},describe(e){let t={name:ot.Gecko},n=T.getFirstMatch(/gecko\/(\d+(\.?_?\d+)+)/i,e);return n&&(t.version=n),t}},{test:[/(apple)?webkit\/537\.36/i],describe(){return{name:ot.Blink}}},{test:[/(apple)?webkit/i],describe(e){let t={name:ot.WebKit},n=T.getFirstMatch(/webkit\/(\d+(\.?_?\d+)+)/i,e);return n&&(t.version=n),t}}],is=class{constructor(e,t=!1){if(e==null||e==="")throw new Error("UserAgent parameter can't be empty");this._ua=e,this.parsedResult={},t!==!0&&this.parse()}getUA(){return this._ua}test(e){return e.test(this._ua)}parseBrowser(){this.parsedResult.browser={};let e=T.find(es,t=>{if(typeof t.test=="function")return t.test(this);if(t.test instanceof Array)return t.test.some(n=>this.test(n));throw new Error("Browser's test function is not valid")});return e&&(this.parsedResult.browser=e.describe(this.getUA())),this.parsedResult.browser}getBrowser(){return this.parsedResult.browser?this.parsedResult.browser:this.parseBrowser()}getBrowserName(e){return e?String(this.getBrowser().name).toLowerCase()||"":this.getBrowser().name||""}getBrowserVersion(){return this.getBrowser().version}getOS(){return this.parsedResult.os?this.parsedResult.os:this.parseOS()}parseOS(){this.parsedResult.os={};let e=T.find(ts,t=>{if(typeof t.test=="function")return t.test(this);if(t.test instanceof Array)return t.test.some(n=>this.test(n));throw new Error("Browser's test function is not valid")});return e&&(this.parsedResult.os=e.describe(this.getUA())),this.parsedResult.os}getOSName(e){let{name:t}=this.getOS();return e?String(t).toLowerCase()||"":t||""}getOSVersion(){return this.getOS().version}getPlatform(){return this.parsedResult.platform?this.parsedResult.platform:this.parsePlatform()}getPlatformType(e=!1){let{type:t}=this.getPlatform();return e?String(t).toLowerCase()||"":t||""}parsePlatform(){this.parsedResult.platform={};let e=T.find(as,t=>{if(typeof t.test=="function")return t.test(this);if(t.test instanceof Array)return t.test.some(n=>this.test(n));throw new Error("Browser's test function is not valid")});return e&&(this.parsedResult.platform=e.describe(this.getUA())),this.parsedResult.platform}getEngine(){return this.parsedResult.engine?this.parsedResult.engine:this.parseEngine()}getEngineName(e){return e?String(this.getEngine().name).toLowerCase()||"":this.getEngine().name||""}parseEngine(){this.parsedResult.engine={};let e=T.find(ns,t=>{if(typeof t.test=="function")return t.test(this);if(t.test instanceof Array)return t.test.some(n=>this.test(n));throw new Error("Browser's test function is not valid")});return e&&(this.parsedResult.engine=e.describe(this.getUA())),this.parsedResult.engine}parse(){return this.parseBrowser(),this.parseOS(),this.parsePlatform(),this.parseEngine(),this}getResult(){return T.assign({},this.parsedResult)}satisfies(e){let t={},n=0,a={},i=0;if(Object.keys(e).forEach(r=>{let o=e[r];typeof o=="string"?(a[r]=o,i+=1):typeof o=="object"&&(t[r]=o,n+=1)}),n>0){let r=Object.keys(t),o=T.find(r,l=>this.isOS(l));if(o){let l=this.satisfies(t[o]);if(l!==void 0)return l}let s=T.find(r,l=>this.isPlatform(l));if(s){let l=this.satisfies(t[s]);if(l!==void 0)return l}}if(i>0){let r=Object.keys(a),o=T.find(r,s=>this.isBrowser(s,!0));if(o!==void 0)return this.compareVersion(a[o])}}isBrowser(e,t=!1){let n=this.getBrowserName().toLowerCase(),a=e.toLowerCase(),i=T.getBrowserTypeByAlias(a);return t&&i&&(a=i.toLowerCase()),a===n}compareVersion(e){let t=[0],n=e,a=!1,i=this.getBrowserVersion();if(typeof i=="string")return e[0]===">"||e[0]==="<"?(n=e.substr(1),e[1]==="="?(a=!0,n=e.substr(2)):t=[],e[0]===">"?t.push(1):t.push(-1)):e[0]==="="?n=e.substr(1):e[0]==="~"&&(a=!0,n=e.substr(1)),t.indexOf(T.compareVersions(i,n,a))>-1}isOS(e){return this.getOSName(!0)===String(e).toLowerCase()}isPlatform(e){return this.getPlatformType(!0)===String(e).toLowerCase()}isEngine(e){return this.getEngineName(!0)===String(e).toLowerCase()}is(e,t=!1){return this.isBrowser(e,t)||this.isOS(e)||this.isPlatform(e)}some(e=[]){return e.some(t=>this.is(t))}},Wn=is,rs=class{static getParser(e,t=!1){if(typeof e!="string")throw new Error("UserAgent should be a string");return new Wn(e,t)}static parse(e){return new Wn(e).getResult()}static get BROWSER_MAP(){return jn}static get ENGINE_MAP(){return ot}static get OS_MAP(){return ze}static get PLATFORMS_MAP(){return Se}},Zt=rs;var{entries:Jn,setPrototypeOf:Hn,isFrozen:os,getPrototypeOf:ss,getOwnPropertyDescriptor:ls}=Object,{freeze:Oe,seal:Qe,create:cs}=Object,{apply:Na,construct:Fa}=typeof Reflect<"u"&&Reflect;Na||(Na=function(e,t,n){return e.apply(t,n)});Oe||(Oe=function(e){return e});Qe||(Qe=function(e){return e});Fa||(Fa=function(e,t){return new e(...t)});var us=We(Array.prototype.forEach),Gn=We(Array.prototype.pop),Ot=We(Array.prototype.push),ea=We(String.prototype.toLowerCase),Ia=We(String.prototype.toString),ds=We(String.prototype.match),Ve=We(String.prototype.replace),ps=We(String.prototype.indexOf),ms=We(String.prototype.trim),Ue=We(RegExp.prototype.test),Rt=gs(TypeError);function We(e){return function(t){for(var n=arguments.length,a=new Array(n>1?n-1:0),i=1;i<n;i++)a[i-1]=arguments[i];return Na(e,t,a)}}function gs(e){return function(){for(var t=arguments.length,n=new Array(t),a=0;a<t;a++)n[a]=arguments[a];return Fa(e,n)}}function ie(e,t,n){var a;n=(a=n)!==null&&a!==void 0?a:ea,Hn&&Hn(e,null);let i=t.length;for(;i--;){let r=t[i];if(typeof r=="string"){let o=n(r);o!==r&&(os(t)||(t[i]=o),r=o)}e[r]=!0}return e}function vt(e){let t=cs(null);for(let[n,a]of Jn(e))t[n]=a;return t}function Jt(e,t){for(;e!==null;){let a=ls(e,t);if(a){if(a.get)return We(a.get);if(typeof a.value=="function")return We(a.value)}e=ss(e)}function n(a){return null}return n}var Vn=Oe(["a","abbr","acronym","address","area","article","aside","audio","b","bdi","bdo","big","blink","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","content","data","datalist","dd","decorator","del","details","dfn","dialog","dir","div","dl","dt","element","em","fieldset","figcaption","figure","font","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","img","input","ins","kbd","label","legend","li","main","map","mark","marquee","menu","menuitem","meter","nav","nobr","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","section","select","shadow","small","source","spacer","span","strike","strong","style","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","track","tt","u","ul","var","video","wbr"]),Ma=Oe(["svg","a","altglyph","altglyphdef","altglyphitem","animatecolor","animatemotion","animatetransform","circle","clippath","defs","desc","ellipse","filter","font","g","glyph","glyphref","hkern","image","line","lineargradient","marker","mask","metadata","mpath","path","pattern","polygon","polyline","radialgradient","rect","stop","style","switch","symbol","text","textpath","title","tref","tspan","view","vkern"]),za=Oe(["feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence"]),hs=Oe(["animate","color-profile","cursor","discard","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignobject","hatch","hatchpath","mesh","meshgradient","meshpatch","meshrow","missing-glyph","script","set","solidcolor","unknown","use"]),Oa=Oe(["math","menclose","merror","mfenced","mfrac","mglyph","mi","mlabeledtr","mmultiscripts","mn","mo","mover","mpadded","mphantom","mroot","mrow","ms","mspace","msqrt","mstyle","msub","msup","msubsup","mtable","mtd","mtext","mtr","munder","munderover","mprescripts"]),fs=Oe(["maction","maligngroup","malignmark","mlongdiv","mscarries","mscarry","msgroup","mstack","msline","msrow","semantics","annotation","annotation-xml","mprescripts","none"]),Qn=Oe(["#text"]),Yn=Oe(["accept","action","align","alt","autocapitalize","autocomplete","autopictureinpicture","autoplay","background","bgcolor","border","capture","cellpadding","cellspacing","checked","cite","class","clear","color","cols","colspan","controls","controlslist","coords","crossorigin","datetime","decoding","default","dir","disabled","disablepictureinpicture","disableremoteplayback","download","draggable","enctype","enterkeyhint","face","for","headers","height","hidden","high","href","hreflang","id","inputmode","integrity","ismap","kind","label","lang","list","loading","loop","low","max","maxlength","media","method","min","minlength","multiple","muted","name","nonce","noshade","novalidate","nowrap","open","optimum","pattern","placeholder","playsinline","poster","preload","pubdate","radiogroup","readonly","rel","required","rev","reversed","role","rows","rowspan","spellcheck","scope","selected","shape","size","sizes","span","srclang","start","src","srcset","step","style","summary","tabindex","title","translate","type","usemap","valign","value","width","xmlns","slot"]),Ra=Oe(["accent-height","accumulate","additive","alignment-baseline","ascent","attributename","attributetype","azimuth","basefrequency","baseline-shift","begin","bias","by","class","clip","clippathunits","clip-path","clip-rule","color","color-interpolation","color-interpolation-filters","color-profile","color-rendering","cx","cy","d","dx","dy","diffuseconstant","direction","display","divisor","dur","edgemode","elevation","end","fill","fill-opacity","fill-rule","filter","filterunits","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","fx","fy","g1","g2","glyph-name","glyphref","gradientunits","gradienttransform","height","href","id","image-rendering","in","in2","k","k1","k2","k3","k4","kerning","keypoints","keysplines","keytimes","lang","lengthadjust","letter-spacing","kernelmatrix","kernelunitlength","lighting-color","local","marker-end","marker-mid","marker-start","markerheight","markerunits","markerwidth","maskcontentunits","maskunits","max","mask","media","method","mode","min","name","numoctaves","offset","operator","opacity","order","orient","orientation","origin","overflow","paint-order","path","pathlength","patterncontentunits","patterntransform","patternunits","points","preservealpha","preserveaspectratio","primitiveunits","r","rx","ry","radius","refx","refy","repeatcount","repeatdur","restart","result","rotate","scale","seed","shape-rendering","specularconstant","specularexponent","spreadmethod","startoffset","stddeviation","stitchtiles","stop-color","stop-opacity","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke","stroke-width","style","surfacescale","systemlanguage","tabindex","targetx","targety","transform","transform-origin","text-anchor","text-decoration","text-rendering","textlength","type","u1","u2","unicode","values","viewbox","visibility","version","vert-adv-y","vert-origin-x","vert-origin-y","width","word-spacing","wrap","writing-mode","xchannelselector","ychannelselector","x","x1","x2","xmlns","y","y1","y2","z","zoomandpan"]),$n=Oe(["accent","accentunder","align","bevelled","close","columnsalign","columnlines","columnspan","denomalign","depth","dir","display","displaystyle","encoding","fence","frame","height","href","id","largeop","length","linethickness","lspace","lquote","mathbackground","mathcolor","mathsize","mathvariant","maxsize","minsize","movablelimits","notation","numalign","open","rowalign","rowlines","rowspacing","rowspan","rspace","rquote","scriptlevel","scriptminsize","scriptsizemultiplier","selection","separator","separators","stretchy","subscriptshift","supscriptshift","symmetric","voffset","width","xmlns"]),Xt=Oe(["xlink:href","xml:id","xlink:title","xml:space","xmlns:xlink"]),bs=Qe(/\{\{[\w\W]*|[\w\W]*\}\}/gm),Ts=Qe(/<%[\w\W]*|[\w\W]*%>/gm),ys=Qe(/\${[\w\W]*}/gm),vs=Qe(/^data-[\-\w.\u00B7-\uFFFF]/),Ss=Qe(/^aria-[\-\w]+$/),Xn=Qe(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),ws=Qe(/^(?:\w+script|data):/i),xs=Qe(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),ei=Qe(/^html$/i),Zn=Object.freeze({__proto__:null,MUSTACHE_EXPR:bs,ERB_EXPR:Ts,TMPLIT_EXPR:ys,DATA_ATTR:vs,ARIA_ATTR:Ss,IS_ALLOWED_URI:Xn,IS_SCRIPT_OR_DATA:ws,ATTR_WHITESPACE:xs,DOCTYPE_NAME:ei}),As=()=>typeof window>"u"?null:window,ks=function(e,t){if(typeof e!="object"||typeof e.createPolicy!="function")return null;let n=null,a="data-tt-policy-suffix";t&&t.hasAttribute(a)&&(n=t.getAttribute(a));let i="dompurify"+(n?"#"+n:"");try{return e.createPolicy(i,{createHTML(r){return r},createScriptURL(r){return r}})}catch{return null}};function ti(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:As(),t=c=>ti(c);if(t.version="3.0.3",t.removed=[],!e||!e.document||e.document.nodeType!==9)return t.isSupported=!1,t;let n=e.document,a=n.currentScript,{document:i}=e,{DocumentFragment:r,HTMLTemplateElement:o,Node:s,Element:l,NodeFilter:u,NamedNodeMap:d=e.NamedNodeMap||e.MozNamedAttrMap,HTMLFormElement:m,DOMParser:f,trustedTypes:g}=e,A=l.prototype,K=Jt(A,"cloneNode"),F=Jt(A,"nextSibling"),p=Jt(A,"childNodes"),re=Jt(A,"parentNode");if(typeof o=="function"){let c=i.createElement("template");c.content&&c.content.ownerDocument&&(i=c.content.ownerDocument)}let O,Y="",{implementation:ce,createNodeIterator:P,createDocumentFragment:h,getElementsByTagName:v}=i,{importNode:y}=n,R={};t.isSupported=typeof Jn=="function"&&typeof re=="function"&&ce&&ce.createHTMLDocument!==void 0;let{MUSTACHE_EXPR:k,ERB_EXPR:j,TMPLIT_EXPR:_,DATA_ATTR:J,ARIA_ATTR:H,IS_SCRIPT_OR_DATA:he,ATTR_WHITESPACE:ae}=Zn,{IS_ALLOWED_URI:x}=Zn,Q=null,fe=ie({},[...Vn,...Ma,...za,...Oa,...Qn]),ne=null,b=ie({},[...Yn,...Ra,...$n,...Xt]),S=Object.seal(Object.create(null,{tagNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},allowCustomizedBuiltInElements:{writable:!0,configurable:!1,enumerable:!0,value:!1}})),D=null,G=null,q=!0,z=!0,te=!1,de=!0,B=!1,N=!1,ee=!1,M=!1,C=!1,V=!1,me=!1,se=!0,U=!1,be="user-content-",xe=!0,ye=!1,ve={},_e=null,qe=ie({},["annotation-xml","audio","colgroup","desc","foreignobject","head","iframe","math","mi","mn","mo","ms","mtext","noembed","noframes","noscript","plaintext","script","style","svg","template","thead","title","video","xmp"]),Lt=null,$e=ie({},["audio","video","img","source","image","track"]),ct=null,bt=ie({},["alt","class","for","id","label","name","pattern","placeholder","role","summary","title","value","style","xmlns"]),De="http://www.w3.org/1998/Math/MathML",He="http://www.w3.org/2000/svg",Le="http://www.w3.org/1999/xhtml",Fe=Le,Xe=!1,et=null,ut=ie({},[De,He,Le],Ia),Ie,tt=["application/xhtml+xml","text/html"],Te="text/html",ue,Be=null,or=i.createElement("form"),en=function(c){return c instanceof RegExp||c instanceof Function},ga=function(c){if(!(Be&&Be===c)){if((!c||typeof c!="object")&&(c={}),c=vt(c),Ie=tt.indexOf(c.PARSER_MEDIA_TYPE)===-1?Ie=Te:Ie=c.PARSER_MEDIA_TYPE,ue=Ie==="application/xhtml+xml"?Ia:ea,Q="ALLOWED_TAGS"in c?ie({},c.ALLOWED_TAGS,ue):fe,ne="ALLOWED_ATTR"in c?ie({},c.ALLOWED_ATTR,ue):b,et="ALLOWED_NAMESPACES"in c?ie({},c.ALLOWED_NAMESPACES,Ia):ut,ct="ADD_URI_SAFE_ATTR"in c?ie(vt(bt),c.ADD_URI_SAFE_ATTR,ue):bt,Lt="ADD_DATA_URI_TAGS"in c?ie(vt($e),c.ADD_DATA_URI_TAGS,ue):$e,_e="FORBID_CONTENTS"in c?ie({},c.FORBID_CONTENTS,ue):qe,D="FORBID_TAGS"in c?ie({},c.FORBID_TAGS,ue):{},G="FORBID_ATTR"in c?ie({},c.FORBID_ATTR,ue):{},ve="USE_PROFILES"in c?c.USE_PROFILES:!1,q=c.ALLOW_ARIA_ATTR!==!1,z=c.ALLOW_DATA_ATTR!==!1,te=c.ALLOW_UNKNOWN_PROTOCOLS||!1,de=c.ALLOW_SELF_CLOSE_IN_ATTR!==!1,B=c.SAFE_FOR_TEMPLATES||!1,N=c.WHOLE_DOCUMENT||!1,C=c.RETURN_DOM||!1,V=c.RETURN_DOM_FRAGMENT||!1,me=c.RETURN_TRUSTED_TYPE||!1,M=c.FORCE_BODY||!1,se=c.SANITIZE_DOM!==!1,U=c.SANITIZE_NAMED_PROPS||!1,xe=c.KEEP_CONTENT!==!1,ye=c.IN_PLACE||!1,x=c.ALLOWED_URI_REGEXP||Xn,Fe=c.NAMESPACE||Le,S=c.CUSTOM_ELEMENT_HANDLING||{},c.CUSTOM_ELEMENT_HANDLING&&en(c.CUSTOM_ELEMENT_HANDLING.tagNameCheck)&&(S.tagNameCheck=c.CUSTOM_ELEMENT_HANDLING.tagNameCheck),c.CUSTOM_ELEMENT_HANDLING&&en(c.CUSTOM_ELEMENT_HANDLING.attributeNameCheck)&&(S.attributeNameCheck=c.CUSTOM_ELEMENT_HANDLING.attributeNameCheck),c.CUSTOM_ELEMENT_HANDLING&&typeof c.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements=="boolean"&&(S.allowCustomizedBuiltInElements=c.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements),B&&(z=!1),V&&(C=!0),ve&&(Q=ie({},[...Qn]),ne=[],ve.html===!0&&(ie(Q,Vn),ie(ne,Yn)),ve.svg===!0&&(ie(Q,Ma),ie(ne,Ra),ie(ne,Xt)),ve.svgFilters===!0&&(ie(Q,za),ie(ne,Ra),ie(ne,Xt)),ve.mathMl===!0&&(ie(Q,Oa),ie(ne,$n),ie(ne,Xt))),c.ADD_TAGS&&(Q===fe&&(Q=vt(Q)),ie(Q,c.ADD_TAGS,ue)),c.ADD_ATTR&&(ne===b&&(ne=vt(ne)),ie(ne,c.ADD_ATTR,ue)),c.ADD_URI_SAFE_ATTR&&ie(ct,c.ADD_URI_SAFE_ATTR,ue),c.FORBID_CONTENTS&&(_e===qe&&(_e=vt(_e)),ie(_e,c.FORBID_CONTENTS,ue)),xe&&(Q["#text"]=!0),N&&ie(Q,["html","head","body"]),Q.table&&(ie(Q,["tbody"]),delete D.tbody),c.TRUSTED_TYPES_POLICY){if(typeof c.TRUSTED_TYPES_POLICY.createHTML!="function")throw Rt('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');if(typeof c.TRUSTED_TYPES_POLICY.createScriptURL!="function")throw Rt('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');O=c.TRUSTED_TYPES_POLICY,Y=O.createHTML("")}else O===void 0&&(O=ks(g,a)),O!==null&&typeof Y=="string"&&(Y=O.createHTML(""));Oe&&Oe(c),Be=c}},tn=ie({},["mi","mo","mn","ms","mtext"]),an=ie({},["foreignobject","desc","title","annotation-xml"]),sr=ie({},["title","style","font","a","script"]),jt=ie({},Ma);ie(jt,za),ie(jt,hs);let ha=ie({},Oa);ie(ha,fs);let lr=function(c){let E=re(c);(!E||!E.tagName)&&(E={namespaceURI:Fe,tagName:"template"});let w=ea(c.tagName),le=ea(E.tagName);return et[c.namespaceURI]?c.namespaceURI===He?E.namespaceURI===Le?w==="svg":E.namespaceURI===De?w==="svg"&&(le==="annotation-xml"||tn[le]):!!jt[w]:c.namespaceURI===De?E.namespaceURI===Le?w==="math":E.namespaceURI===He?w==="math"&&an[le]:!!ha[w]:c.namespaceURI===Le?E.namespaceURI===He&&!an[le]||E.namespaceURI===De&&!tn[le]?!1:!ha[w]&&(sr[w]||!jt[w]):!!(Ie==="application/xhtml+xml"&&et[c.namespaceURI]):!1},Tt=function(c){Ot(t.removed,{element:c});try{c.parentNode.removeChild(c)}catch{c.remove()}},fa=function(c,E){try{Ot(t.removed,{attribute:E.getAttributeNode(c),from:E})}catch{Ot(t.removed,{attribute:null,from:E})}if(E.removeAttribute(c),c==="is"&&!ne[c])if(C||V)try{Tt(E)}catch{}else try{E.setAttribute(c,"")}catch{}},nn=function(c){let E,w;if(M)c="<remove></remove>"+c;else{let Me=ds(c,/^[\r\n\t ]+/);w=Me&&Me[0]}Ie==="application/xhtml+xml"&&Fe===Le&&(c='<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>'+c+"</body></html>");let le=O?O.createHTML(c):c;if(Fe===Le)try{E=new f().parseFromString(le,Ie)}catch{}if(!E||!E.documentElement){E=ce.createDocument(Fe,"template",null);try{E.documentElement.innerHTML=Xe?Y:le}catch{}}let Ae=E.body||E.documentElement;return c&&w&&Ae.insertBefore(i.createTextNode(w),Ae.childNodes[0]||null),Fe===Le?v.call(E,N?"html":"body")[0]:N?E.documentElement:Ae},rn=function(c){return P.call(c.ownerDocument||c,c,u.SHOW_ELEMENT|u.SHOW_COMMENT|u.SHOW_TEXT,null,!1)},cr=function(c){return c instanceof m&&(typeof c.nodeName!="string"||typeof c.textContent!="string"||typeof c.removeChild!="function"||!(c.attributes instanceof d)||typeof c.removeAttribute!="function"||typeof c.setAttribute!="function"||typeof c.namespaceURI!="string"||typeof c.insertBefore!="function"||typeof c.hasChildNodes!="function")},Ht=function(c){return typeof s=="object"?c instanceof s:c&&typeof c=="object"&&typeof c.nodeType=="number"&&typeof c.nodeName=="string"},at=function(c,E,w){R[c]&&us(R[c],le=>{le.call(t,E,w,Be)})},on=function(c){let E;if(at("beforeSanitizeElements",c,null),cr(c))return Tt(c),!0;let w=ue(c.nodeName);if(at("uponSanitizeElement",c,{tagName:w,allowedTags:Q}),c.hasChildNodes()&&!Ht(c.firstElementChild)&&(!Ht(c.content)||!Ht(c.content.firstElementChild))&&Ue(/<[/\w]/g,c.innerHTML)&&Ue(/<[/\w]/g,c.textContent))return Tt(c),!0;if(!Q[w]||D[w]){if(!D[w]&&ln(w)&&(S.tagNameCheck instanceof RegExp&&Ue(S.tagNameCheck,w)||S.tagNameCheck instanceof Function&&S.tagNameCheck(w)))return!1;if(xe&&!_e[w]){let le=re(c)||c.parentNode,Ae=p(c)||c.childNodes;if(Ae&&le){let Me=Ae.length;for(let Ne=Me-1;Ne>=0;--Ne)le.insertBefore(K(Ae[Ne],!0),F(c))}}return Tt(c),!0}return c instanceof l&&!lr(c)||(w==="noscript"||w==="noembed")&&Ue(/<\/no(script|embed)/i,c.innerHTML)?(Tt(c),!0):(B&&c.nodeType===3&&(E=c.textContent,E=Ve(E,k," "),E=Ve(E,j," "),E=Ve(E,_," "),c.textContent!==E&&(Ot(t.removed,{element:c.cloneNode()}),c.textContent=E)),at("afterSanitizeElements",c,null),!1)},sn=function(c,E,w){if(se&&(E==="id"||E==="name")&&(w in i||w in or))return!1;if(!(z&&!G[E]&&Ue(J,E))&&!(q&&Ue(H,E))){if(!ne[E]||G[E]){if(!(ln(c)&&(S.tagNameCheck instanceof RegExp&&Ue(S.tagNameCheck,c)||S.tagNameCheck instanceof Function&&S.tagNameCheck(c))&&(S.attributeNameCheck instanceof RegExp&&Ue(S.attributeNameCheck,E)||S.attributeNameCheck instanceof Function&&S.attributeNameCheck(E))||E==="is"&&S.allowCustomizedBuiltInElements&&(S.tagNameCheck instanceof RegExp&&Ue(S.tagNameCheck,w)||S.tagNameCheck instanceof Function&&S.tagNameCheck(w))))return!1}else if(!ct[E]&&!Ue(x,Ve(w,ae,""))&&!((E==="src"||E==="xlink:href"||E==="href")&&c!=="script"&&ps(w,"data:")===0&&Lt[c])&&!(te&&!Ue(he,Ve(w,ae,"")))&&w)return!1}return!0},ln=function(c){return c.indexOf("-")>0},cn=function(c){let E,w,le,Ae;at("beforeSanitizeAttributes",c,null);let{attributes:Me}=c;if(!Me)return;let Ne={attrName:"",attrValue:"",keepAttr:!0,allowedAttributes:ne};for(Ae=Me.length;Ae--;){E=Me[Ae];let{name:ke,namespaceURI:yt}=E;if(w=ke==="value"?E.value:ms(E.value),le=ue(ke),Ne.attrName=le,Ne.attrValue=w,Ne.keepAttr=!0,Ne.forceKeepAttr=void 0,at("uponSanitizeAttribute",c,Ne),w=Ne.attrValue,Ne.forceKeepAttr||(fa(ke,c),!Ne.keepAttr))continue;if(!de&&Ue(/\/>/i,w)){fa(ke,c);continue}B&&(w=Ve(w,k," "),w=Ve(w,j," "),w=Ve(w,_," "));let un=ue(c.nodeName);if(sn(un,le,w)){if(U&&(le==="id"||le==="name")&&(fa(ke,c),w=be+w),O&&typeof g=="object"&&typeof g.getAttributeType=="function"&&!yt)switch(g.getAttributeType(un,le)){case"TrustedHTML":{w=O.createHTML(w);break}case"TrustedScriptURL":{w=O.createScriptURL(w);break}}try{yt?c.setAttributeNS(yt,ke,w):c.setAttribute(ke,w),Gn(t.removed)}catch{}}}at("afterSanitizeAttributes",c,null)},ur=function c(E){let w,le=rn(E);for(at("beforeSanitizeShadowDOM",E,null);w=le.nextNode();)at("uponSanitizeShadowNode",w,null),!on(w)&&(w.content instanceof r&&c(w.content),cn(w));at("afterSanitizeShadowDOM",E,null)};return t.sanitize=function(c){let E=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},w,le,Ae,Me;if(Xe=!c,Xe&&(c="<!-->"),typeof c!="string"&&!Ht(c))if(typeof c.toString=="function"){if(c=c.toString(),typeof c!="string")throw Rt("dirty is not a string, aborting")}else throw Rt("toString is not a function");if(!t.isSupported)return c;if(ee||ga(E),t.removed=[],typeof c=="string"&&(ye=!1),ye){if(c.nodeName){let yt=ue(c.nodeName);if(!Q[yt]||D[yt])throw Rt("root node is forbidden and cannot be sanitized in-place")}}else if(c instanceof s)w=nn("<!---->"),le=w.ownerDocument.importNode(c,!0),le.nodeType===1&&le.nodeName==="BODY"||le.nodeName==="HTML"?w=le:w.appendChild(le);else{if(!C&&!B&&!N&&c.indexOf("<")===-1)return O&&me?O.createHTML(c):c;if(w=nn(c),!w)return C?null:me?Y:""}w&&M&&Tt(w.firstChild);let Ne=rn(ye?c:w);for(;Ae=Ne.nextNode();)on(Ae)||(Ae.content instanceof r&&ur(Ae.content),cn(Ae));if(ye)return c;if(C){if(V)for(Me=h.call(w.ownerDocument);w.firstChild;)Me.appendChild(w.firstChild);else Me=w;return(ne.shadowroot||ne.shadowrootmod)&&(Me=y.call(n,Me,!0)),Me}let ke=N?w.outerHTML:w.innerHTML;return N&&Q["!doctype"]&&w.ownerDocument&&w.ownerDocument.doctype&&w.ownerDocument.doctype.name&&Ue(ei,w.ownerDocument.doctype.name)&&(ke="<!DOCTYPE "+w.ownerDocument.doctype.name+`>
`+ke),B&&(ke=Ve(ke,k," "),ke=Ve(ke,j," "),ke=Ve(ke,_," ")),O&&me?O.createHTML(ke):ke},t.setConfig=function(c){ga(c),ee=!0},t.clearConfig=function(){Be=null,ee=!1},t.isValidAttribute=function(c,E,w){Be||ga({});let le=ue(c),Ae=ue(E);return sn(le,Ae,w)},t.addHook=function(c,E){typeof E=="function"&&(R[c]=R[c]||[],Ot(R[c],E))},t.removeHook=function(c){if(R[c])return Gn(R[c])},t.removeHooks=function(c){R[c]&&(R[c]=[])},t.removeAllHooks=function(){R={}},t}var ai=ti();var Ps=Object.create,Ua=Object.defineProperty,Cs=Object.getOwnPropertyDescriptor,Es=Object.getOwnPropertyNames,Ds=Object.getPrototypeOf,Ls=Object.prototype.hasOwnProperty,qa=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports),_s=(e,t)=>{for(var n in t)Ua(e,n,{get:t[n],enumerable:!0})},Ba=(e,t,n,a)=>{if(t&&typeof t=="object"||typeof t=="function")for(let i of Es(t))!Ls.call(e,i)&&i!==n&&Ua(e,i,{get:()=>t[i],enumerable:!(a=Cs(t,i))||a.enumerable});return e},Is=(e,t,n)=>(Ba(e,t,"default"),n&&Ba(n,t,"default")),ii=(e,t,n)=>(n=e!=null?Ps(Ds(e)):{},Ba(t||!e||!e.__esModule?Ua(n,"default",{value:e,enumerable:!0}):n,e)),Ms=qa((e,t)=>{function n(a,i){if(i&&i.documentElement)a=i,i=arguments[2];else if(!a||!a.documentElement)throw new Error("First argument to Readability constructor should be a document object.");if(i=i||{},this._doc=a,this._docJSDOMParser=this._doc.firstChild.__JSDOMParser__,this._articleTitle=null,this._articleByline=null,this._articleDir=null,this._articleSiteName=null,this._attempts=[],this._debug=!!i.debug,this._maxElemsToParse=i.maxElemsToParse||this.DEFAULT_MAX_ELEMS_TO_PARSE,this._nbTopCandidates=i.nbTopCandidates||this.DEFAULT_N_TOP_CANDIDATES,this._charThreshold=i.charThreshold||this.DEFAULT_CHAR_THRESHOLD,this._classesToPreserve=this.CLASSES_TO_PRESERVE.concat(i.classesToPreserve||[]),this._keepClasses=!!i.keepClasses,this._serializer=i.serializer||function(r){return r.innerHTML},this._disableJSONLD=!!i.disableJSONLD,this._allowedVideoRegex=i.allowedVideoRegex||this.REGEXPS.videos,this._flags=this.FLAG_STRIP_UNLIKELYS|this.FLAG_WEIGHT_CLASSES|this.FLAG_CLEAN_CONDITIONALLY,this._debug){let r=function(o){if(o.nodeType==o.TEXT_NODE)return`${o.nodeName} ("${o.textContent}")`;let s=Array.from(o.attributes||[],function(l){return`${l.name}="${l.value}"`}).join(" ");return`<${o.localName} ${s}>`};this.log=function(){if(typeof console<"u")Array.from(arguments,l=>l&&l.nodeType==this.ELEMENT_NODE?r(l):l).unshift("Reader: (Readability)");else if(typeof dump<"u"){var o=Array.prototype.map.call(arguments,function(s){return s&&s.nodeName?r(s):s}).join(" ");dump("Reader: (Readability) "+o+`
`)}}}else this.log=function(){}}n.prototype={FLAG_STRIP_UNLIKELYS:1,FLAG_WEIGHT_CLASSES:2,FLAG_CLEAN_CONDITIONALLY:4,ELEMENT_NODE:1,TEXT_NODE:3,DEFAULT_MAX_ELEMS_TO_PARSE:0,DEFAULT_N_TOP_CANDIDATES:5,DEFAULT_TAGS_TO_SCORE:"section,h2,h3,h4,h5,h6,p,td,pre".toUpperCase().split(","),DEFAULT_CHAR_THRESHOLD:500,REGEXPS:{unlikelyCandidates:/-ad-|ai2html|banner|breadcrumbs|combx|comment|community|cover-wrap|disqus|extra|footer|gdpr|header|legends|menu|related|remark|replies|rss|shoutbox|sidebar|skyscraper|social|sponsor|supplemental|ad-break|agegate|pagination|pager|popup|yom-remote/i,okMaybeItsACandidate:/and|article|body|column|content|main|shadow/i,positive:/article|body|content|entry|hentry|h-entry|main|page|pagination|post|text|blog|story/i,negative:/-ad-|hidden|^hid$| hid$| hid |^hid |banner|combx|comment|com-|contact|foot|footer|footnote|gdpr|masthead|media|meta|outbrain|promo|related|scroll|share|shoutbox|sidebar|skyscraper|sponsor|shopping|tags|tool|widget/i,extraneous:/print|archive|comment|discuss|e[\-]?mail|share|reply|all|login|sign|single|utility/i,byline:/byline|author|dateline|writtenby|p-author/i,replaceFonts:/<(\/?)font[^>]*>/gi,normalize:/\s{2,}/g,videos:/\/\/(www\.)?((dailymotion|youtube|youtube-nocookie|player\.vimeo|v\.qq)\.com|(archive|upload\.wikimedia)\.org|player\.twitch\.tv)/i,shareElements:/(\b|_)(share|sharedaddy)(\b|_)/i,nextLink:/(next|weiter|continue|>([^\|]|$)|»([^\|]|$))/i,prevLink:/(prev|earl|old|new|<|«)/i,tokenize:/\W+/g,whitespace:/^\s*$/,hasContent:/\S$/,hashUrl:/^#.+/,srcsetUrl:/(\S+)(\s+[\d.]+[xw])?(\s*(?:,|$))/g,b64DataUrl:/^data:\s*([^\s;,]+)\s*;\s*base64\s*,/i,jsonLdArticleTypes:/^Article|AdvertiserContentArticle|NewsArticle|AnalysisNewsArticle|AskPublicNewsArticle|BackgroundNewsArticle|OpinionNewsArticle|ReportageNewsArticle|ReviewNewsArticle|Report|SatiricalArticle|ScholarlyArticle|MedicalScholarlyArticle|SocialMediaPosting|BlogPosting|LiveBlogPosting|DiscussionForumPosting|TechArticle|APIReference$/},UNLIKELY_ROLES:["menu","menubar","complementary","navigation","alert","alertdialog","dialog"],DIV_TO_P_ELEMS:new Set(["BLOCKQUOTE","DL","DIV","IMG","OL","P","PRE","TABLE","UL"]),ALTER_TO_DIV_EXCEPTIONS:["DIV","ARTICLE","SECTION","P"],PRESENTATIONAL_ATTRIBUTES:["align","background","bgcolor","border","cellpadding","cellspacing","frame","hspace","rules","style","valign","vspace"],DEPRECATED_SIZE_ATTRIBUTE_ELEMS:["TABLE","TH","TD","HR","PRE"],PHRASING_ELEMS:["ABBR","AUDIO","B","BDO","BR","BUTTON","CITE","CODE","DATA","DATALIST","DFN","EM","EMBED","I","IMG","INPUT","KBD","LABEL","MARK","MATH","METER","NOSCRIPT","OBJECT","OUTPUT","PROGRESS","Q","RUBY","SAMP","SCRIPT","SELECT","SMALL","SPAN","STRONG","SUB","SUP","TEXTAREA","TIME","VAR","WBR"],CLASSES_TO_PRESERVE:["page"],HTML_ESCAPE_MAP:{lt:"<",gt:">",amp:"&",quot:'"',apos:"'"},_postProcessContent:function(a){this._fixRelativeUris(a),this._simplifyNestedElements(a),this._keepClasses||this._cleanClasses(a)},_removeNodes:function(a,i){if(this._docJSDOMParser&&a._isLiveNodeList)throw new Error("Do not pass live node lists to _removeNodes");for(var r=a.length-1;r>=0;r--){var o=a[r],s=o.parentNode;s&&(!i||i.call(this,o,r,a))&&s.removeChild(o)}},_replaceNodeTags:function(a,i){if(this._docJSDOMParser&&a._isLiveNodeList)throw new Error("Do not pass live node lists to _replaceNodeTags");for(let r of a)this._setNodeTag(r,i)},_forEachNode:function(a,i){Array.prototype.forEach.call(a,i,this)},_findNode:function(a,i){return Array.prototype.find.call(a,i,this)},_someNode:function(a,i){return Array.prototype.some.call(a,i,this)},_everyNode:function(a,i){return Array.prototype.every.call(a,i,this)},_concatNodeLists:function(){var a=Array.prototype.slice,i=a.call(arguments),r=i.map(function(o){return a.call(o)});return Array.prototype.concat.apply([],r)},_getAllNodesWithTag:function(a,i){return a.querySelectorAll?a.querySelectorAll(i.join(",")):[].concat.apply([],i.map(function(r){var o=a.getElementsByTagName(r);return Array.isArray(o)?o:Array.from(o)}))},_cleanClasses:function(a){var i=this._classesToPreserve,r=(a.getAttribute("class")||"").split(/\s+/).filter(function(o){return i.indexOf(o)!=-1}).join(" ");for(r?a.setAttribute("class",r):a.removeAttribute("class"),a=a.firstElementChild;a;a=a.nextElementSibling)this._cleanClasses(a)},_fixRelativeUris:function(a){var i=this._doc.baseURI,r=this._doc.documentURI;function o(u){if(i==r&&u.charAt(0)=="#")return u;try{return new URL(u,i).href}catch{}return u}var s=this._getAllNodesWithTag(a,["a"]);this._forEachNode(s,function(u){var d=u.getAttribute("href");if(d)if(d.indexOf("javascript:")===0)if(u.childNodes.length===1&&u.childNodes[0].nodeType===this.TEXT_NODE){var m=this._doc.createTextNode(u.textContent);u.parentNode.replaceChild(m,u)}else{for(var f=this._doc.createElement("span");u.firstChild;)f.appendChild(u.firstChild);u.parentNode.replaceChild(f,u)}else u.setAttribute("href",o(d))});var l=this._getAllNodesWithTag(a,["img","picture","figure","video","audio","source"]);this._forEachNode(l,function(u){var d=u.getAttribute("src"),m=u.getAttribute("poster"),f=u.getAttribute("srcset");if(d&&u.setAttribute("src",o(d)),m&&u.setAttribute("poster",o(m)),f){var g=f.replace(this.REGEXPS.srcsetUrl,function(A,K,F,p){return o(K)+(F||"")+p});u.setAttribute("srcset",g)}})},_simplifyNestedElements:function(a){for(var i=a;i;){if(i.parentNode&&["DIV","SECTION"].includes(i.tagName)&&!(i.id&&i.id.startsWith("readability"))){if(this._isElementWithoutContent(i)){i=this._removeAndGetNext(i);continue}else if(this._hasSingleTagInsideElement(i,"DIV")||this._hasSingleTagInsideElement(i,"SECTION")){for(var r=i.children[0],o=0;o<i.attributes.length;o++)r.setAttribute(i.attributes[o].name,i.attributes[o].value);i.parentNode.replaceChild(r,i),i=r;continue}}i=this._getNextNode(i)}},_getArticleTitle:function(){var a=this._doc,i="",r="";try{i=r=a.title.trim(),typeof i!="string"&&(i=r=this._getInnerText(a.getElementsByTagName("title")[0]))}catch{}var o=!1;function s(g){return g.split(/\s+/).length}if(/ [\|\-\\\/>»] /.test(i))o=/ [\\\/>»] /.test(i),i=r.replace(/(.*)[\|\-\\\/>»] .*/gi,"$1"),s(i)<3&&(i=r.replace(/[^\|\-\\\/>»]*[\|\-\\\/>»](.*)/gi,"$1"));else if(i.indexOf(": ")!==-1){var l=this._concatNodeLists(a.getElementsByTagName("h1"),a.getElementsByTagName("h2")),u=i.trim(),d=this._someNode(l,function(g){return g.textContent.trim()===u});d||(i=r.substring(r.lastIndexOf(":")+1),s(i)<3?i=r.substring(r.indexOf(":")+1):s(r.substr(0,r.indexOf(":")))>5&&(i=r))}else if(i.length>150||i.length<15){var m=a.getElementsByTagName("h1");m.length===1&&(i=this._getInnerText(m[0]))}i=i.trim().replace(this.REGEXPS.normalize," ");var f=s(i);return f<=4&&(!o||f!=s(r.replace(/[\|\-\\\/>»]+/g,""))-1)&&(i=r),i},_prepDocument:function(){var a=this._doc;this._removeNodes(this._getAllNodesWithTag(a,["style"])),a.body&&this._replaceBrs(a.body),this._replaceNodeTags(this._getAllNodesWithTag(a,["font"]),"SPAN")},_nextNode:function(a){for(var i=a;i&&i.nodeType!=this.ELEMENT_NODE&&this.REGEXPS.whitespace.test(i.textContent);)i=i.nextSibling;return i},_replaceBrs:function(a){this._forEachNode(this._getAllNodesWithTag(a,["br"]),function(i){for(var r=i.nextSibling,o=!1;(r=this._nextNode(r))&&r.tagName=="BR";){o=!0;var s=r.nextSibling;r.parentNode.removeChild(r),r=s}if(o){var l=this._doc.createElement("p");for(i.parentNode.replaceChild(l,i),r=l.nextSibling;r;){if(r.tagName=="BR"){var u=this._nextNode(r.nextSibling);if(u&&u.tagName=="BR")break}if(!this._isPhrasingContent(r))break;var d=r.nextSibling;l.appendChild(r),r=d}for(;l.lastChild&&this._isWhitespace(l.lastChild);)l.removeChild(l.lastChild);l.parentNode.tagName==="P"&&this._setNodeTag(l.parentNode,"DIV")}})},_setNodeTag:function(a,i){if(this.log("_setNodeTag",a,i),this._docJSDOMParser)return a.localName=i.toLowerCase(),a.tagName=i.toUpperCase(),a;for(var r=a.ownerDocument.createElement(i);a.firstChild;)r.appendChild(a.firstChild);a.parentNode.replaceChild(r,a),a.readability&&(r.readability=a.readability);for(var o=0;o<a.attributes.length;o++)try{r.setAttribute(a.attributes[o].name,a.attributes[o].value)}catch{}return r},_prepArticle:function(a){this._cleanStyles(a),this._markDataTables(a),this._fixLazyImages(a),this._cleanConditionally(a,"form"),this._cleanConditionally(a,"fieldset"),this._clean(a,"object"),this._clean(a,"embed"),this._clean(a,"footer"),this._clean(a,"link"),this._clean(a,"aside");var i=this.DEFAULT_CHAR_THRESHOLD;this._forEachNode(a.children,function(r){this._cleanMatchedNodes(r,function(o,s){return this.REGEXPS.shareElements.test(s)&&o.textContent.length<i})}),this._clean(a,"iframe"),this._clean(a,"input"),this._clean(a,"textarea"),this._clean(a,"select"),this._clean(a,"button"),this._cleanHeaders(a),this._cleanConditionally(a,"table"),this._cleanConditionally(a,"ul"),this._cleanConditionally(a,"div"),this._replaceNodeTags(this._getAllNodesWithTag(a,["h1"]),"h2"),this._removeNodes(this._getAllNodesWithTag(a,["p"]),function(r){var o=r.getElementsByTagName("img").length,s=r.getElementsByTagName("embed").length,l=r.getElementsByTagName("object").length,u=r.getElementsByTagName("iframe").length,d=o+s+l+u;return d===0&&!this._getInnerText(r,!1)}),this._forEachNode(this._getAllNodesWithTag(a,["br"]),function(r){var o=this._nextNode(r.nextSibling);o&&o.tagName=="P"&&r.parentNode.removeChild(r)}),this._forEachNode(this._getAllNodesWithTag(a,["table"]),function(r){var o=this._hasSingleTagInsideElement(r,"TBODY")?r.firstElementChild:r;if(this._hasSingleTagInsideElement(o,"TR")){var s=o.firstElementChild;if(this._hasSingleTagInsideElement(s,"TD")){var l=s.firstElementChild;l=this._setNodeTag(l,this._everyNode(l.childNodes,this._isPhrasingContent)?"P":"DIV"),r.parentNode.replaceChild(l,r)}}})},_initializeNode:function(a){switch(a.readability={contentScore:0},a.tagName){case"DIV":a.readability.contentScore+=5;break;case"PRE":case"TD":case"BLOCKQUOTE":a.readability.contentScore+=3;break;case"ADDRESS":case"OL":case"UL":case"DL":case"DD":case"DT":case"LI":case"FORM":a.readability.contentScore-=3;break;case"H1":case"H2":case"H3":case"H4":case"H5":case"H6":case"TH":a.readability.contentScore-=5;break}a.readability.contentScore+=this._getClassWeight(a)},_removeAndGetNext:function(a){var i=this._getNextNode(a,!0);return a.parentNode.removeChild(a),i},_getNextNode:function(a,i){if(!i&&a.firstElementChild)return a.firstElementChild;if(a.nextElementSibling)return a.nextElementSibling;do a=a.parentNode;while(a&&!a.nextElementSibling);return a&&a.nextElementSibling},_textSimilarity:function(a,i){var r=a.toLowerCase().split(this.REGEXPS.tokenize).filter(Boolean),o=i.toLowerCase().split(this.REGEXPS.tokenize).filter(Boolean);if(!r.length||!o.length)return 0;var s=o.filter(u=>!r.includes(u)),l=s.join(" ").length/o.join(" ").length;return 1-l},_checkByline:function(a,i){if(this._articleByline)return!1;if(a.getAttribute!==void 0)var r=a.getAttribute("rel"),o=a.getAttribute("itemprop");return(r==="author"||o&&o.indexOf("author")!==-1||this.REGEXPS.byline.test(i))&&this._isValidByline(a.textContent)?(this._articleByline=a.textContent.trim(),!0):!1},_getNodeAncestors:function(a,i){i=i||0;for(var r=0,o=[];a.parentNode&&(o.push(a.parentNode),!(i&&++r===i));)a=a.parentNode;return o},_grabArticle:function(a){this.log("**** grabArticle ****");var i=this._doc,r=a!==null;if(a=a||this._doc.body,!a)return this.log("No body found in document. Abort."),null;for(var o=a.innerHTML;;){this.log("Starting grabArticle loop");var s=this._flagIsActive(this.FLAG_STRIP_UNLIKELYS),l=[],u=this._doc.documentElement;let M=!0;for(;u;){u.tagName==="HTML"&&(this._articleLang=u.getAttribute("lang"));var d=u.className+" "+u.id;if(!this._isProbablyVisible(u)){this.log("Removing hidden node - "+d),u=this._removeAndGetNext(u);continue}if(u.getAttribute("aria-modal")=="true"&&u.getAttribute("role")=="dialog"){u=this._removeAndGetNext(u);continue}if(this._checkByline(u,d)){u=this._removeAndGetNext(u);continue}if(M&&this._headerDuplicatesTitle(u)){this.log("Removing header: ",u.textContent.trim(),this._articleTitle.trim()),M=!1,u=this._removeAndGetNext(u);continue}if(s){if(this.REGEXPS.unlikelyCandidates.test(d)&&!this.REGEXPS.okMaybeItsACandidate.test(d)&&!this._hasAncestorTag(u,"table")&&!this._hasAncestorTag(u,"code")&&u.tagName!=="BODY"&&u.tagName!=="A"){this.log("Removing unlikely candidate - "+d),u=this._removeAndGetNext(u);continue}if(this.UNLIKELY_ROLES.includes(u.getAttribute("role"))){this.log("Removing content with role "+u.getAttribute("role")+" - "+d),u=this._removeAndGetNext(u);continue}}if((u.tagName==="DIV"||u.tagName==="SECTION"||u.tagName==="HEADER"||u.tagName==="H1"||u.tagName==="H2"||u.tagName==="H3"||u.tagName==="H4"||u.tagName==="H5"||u.tagName==="H6")&&this._isElementWithoutContent(u)){u=this._removeAndGetNext(u);continue}if(this.DEFAULT_TAGS_TO_SCORE.indexOf(u.tagName)!==-1&&l.push(u),u.tagName==="DIV"){for(var m=null,f=u.firstChild;f;){var g=f.nextSibling;if(this._isPhrasingContent(f))m!==null?m.appendChild(f):this._isWhitespace(f)||(m=i.createElement("p"),u.replaceChild(m,f),m.appendChild(f));else if(m!==null){for(;m.lastChild&&this._isWhitespace(m.lastChild);)m.removeChild(m.lastChild);m=null}f=g}if(this._hasSingleTagInsideElement(u,"P")&&this._getLinkDensity(u)<.25){var A=u.children[0];u.parentNode.replaceChild(A,u),u=A,l.push(u)}else this._hasChildBlockElement(u)||(u=this._setNodeTag(u,"P"),l.push(u))}u=this._getNextNode(u)}var K=[];this._forEachNode(l,function(C){if(!(!C.parentNode||typeof C.parentNode.tagName>"u")){var V=this._getInnerText(C);if(!(V.length<25)){var me=this._getNodeAncestors(C,5);if(me.length!==0){var se=0;se+=1,se+=V.split(",").length,se+=Math.min(Math.floor(V.length/100),3),this._forEachNode(me,function(U,be){if(!(!U.tagName||!U.parentNode||typeof U.parentNode.tagName>"u")){if(typeof U.readability>"u"&&(this._initializeNode(U),K.push(U)),be===0)var xe=1;else be===1?xe=2:xe=be*3;U.readability.contentScore+=se/xe}})}}}});for(var F=[],p=0,re=K.length;p<re;p+=1){var O=K[p],Y=O.readability.contentScore*(1-this._getLinkDensity(O));O.readability.contentScore=Y,this.log("Candidate:",O,"with score "+Y);for(var ce=0;ce<this._nbTopCandidates;ce++){var P=F[ce];if(!P||Y>P.readability.contentScore){F.splice(ce,0,O),F.length>this._nbTopCandidates&&F.pop();break}}}var h=F[0]||null,v=!1,y;if(h===null||h.tagName==="BODY"){for(h=i.createElement("DIV"),v=!0;a.firstChild;)this.log("Moving child out:",a.firstChild),h.appendChild(a.firstChild);a.appendChild(h),this._initializeNode(h)}else if(h){for(var R=[],k=1;k<F.length;k++)F[k].readability.contentScore/h.readability.contentScore>=.75&&R.push(this._getNodeAncestors(F[k]));var j=3;if(R.length>=j)for(y=h.parentNode;y.tagName!=="BODY";){for(var _=0,J=0;J<R.length&&_<j;J++)_+=Number(R[J].includes(y));if(_>=j){h=y;break}y=y.parentNode}h.readability||this._initializeNode(h),y=h.parentNode;for(var H=h.readability.contentScore,he=H/3;y.tagName!=="BODY";){if(!y.readability){y=y.parentNode;continue}var ae=y.readability.contentScore;if(ae<he)break;if(ae>H){h=y;break}H=y.readability.contentScore,y=y.parentNode}for(y=h.parentNode;y.tagName!="BODY"&&y.children.length==1;)h=y,y=h.parentNode;h.readability||this._initializeNode(h)}var x=i.createElement("DIV");r&&(x.id="readability-content");var Q=Math.max(10,h.readability.contentScore*.2);y=h.parentNode;for(var fe=y.children,ne=0,b=fe.length;ne<b;ne++){var S=fe[ne],D=!1;if(this.log("Looking at sibling node:",S,S.readability?"with score "+S.readability.contentScore:""),this.log("Sibling has score",S.readability?S.readability.contentScore:"Unknown"),S===h)D=!0;else{var G=0;if(S.className===h.className&&h.className!==""&&(G+=h.readability.contentScore*.2),S.readability&&S.readability.contentScore+G>=Q)D=!0;else if(S.nodeName==="P"){var q=this._getLinkDensity(S),z=this._getInnerText(S),te=z.length;(te>80&&q<.25||te<80&&te>0&&q===0&&z.search(/\.( |$)/)!==-1)&&(D=!0)}}D&&(this.log("Appending node:",S),this.ALTER_TO_DIV_EXCEPTIONS.indexOf(S.nodeName)===-1&&(this.log("Altering sibling:",S,"to div."),S=this._setNodeTag(S,"DIV")),x.appendChild(S),fe=y.children,ne-=1,b-=1)}if(this._debug&&this.log("Article content pre-prep: "+x.innerHTML),this._prepArticle(x),this._debug&&this.log("Article content post-prep: "+x.innerHTML),v)h.id="readability-page-1",h.className="page";else{var de=i.createElement("DIV");for(de.id="readability-page-1",de.className="page";x.firstChild;)de.appendChild(x.firstChild);x.appendChild(de)}this._debug&&this.log("Article content after paging: "+x.innerHTML);var B=!0,N=this._getInnerText(x,!0).length;if(N<this._charThreshold)if(B=!1,a.innerHTML=o,this._flagIsActive(this.FLAG_STRIP_UNLIKELYS))this._removeFlag(this.FLAG_STRIP_UNLIKELYS),this._attempts.push({articleContent:x,textLength:N});else if(this._flagIsActive(this.FLAG_WEIGHT_CLASSES))this._removeFlag(this.FLAG_WEIGHT_CLASSES),this._attempts.push({articleContent:x,textLength:N});else if(this._flagIsActive(this.FLAG_CLEAN_CONDITIONALLY))this._removeFlag(this.FLAG_CLEAN_CONDITIONALLY),this._attempts.push({articleContent:x,textLength:N});else{if(this._attempts.push({articleContent:x,textLength:N}),this._attempts.sort(function(C,V){return V.textLength-C.textLength}),!this._attempts[0].textLength)return null;x=this._attempts[0].articleContent,B=!0}if(B){var ee=[y,h].concat(this._getNodeAncestors(y));return this._someNode(ee,function(C){if(!C.tagName)return!1;var V=C.getAttribute("dir");return V?(this._articleDir=V,!0):!1}),x}}},_isValidByline:function(a){return typeof a=="string"||a instanceof String?(a=a.trim(),a.length>0&&a.length<100):!1},_unescapeHtmlEntities:function(a){if(!a)return a;var i=this.HTML_ESCAPE_MAP;return a.replace(/&(quot|amp|apos|lt|gt);/g,function(r,o){return i[o]}).replace(/&#(?:x([0-9a-z]{1,4})|([0-9]{1,4}));/gi,function(r,o,s){var l=parseInt(o||s,o?16:10);return String.fromCharCode(l)})},_getJSONLD:function(a){var i=this._getAllNodesWithTag(a,["script"]),r;return this._forEachNode(i,function(o){if(!r&&o.getAttribute("type")==="application/ld+json")try{var s=o.textContent.replace(/^\s*<!\[CDATA\[|\]\]>\s*$/g,""),l=JSON.parse(s);if(!l["@context"]||!l["@context"].match(/^https?\:\/\/schema\.org$/)||(!l["@type"]&&Array.isArray(l["@graph"])&&(l=l["@graph"].find(function(f){return(f["@type"]||"").match(this.REGEXPS.jsonLdArticleTypes)})),!l||!l["@type"]||!l["@type"].match(this.REGEXPS.jsonLdArticleTypes)))return;if(r={},typeof l.name=="string"&&typeof l.headline=="string"&&l.name!==l.headline){var u=this._getArticleTitle(),d=this._textSimilarity(l.name,u)>.75,m=this._textSimilarity(l.headline,u)>.75;m&&!d?r.title=l.headline:r.title=l.name}else typeof l.name=="string"?r.title=l.name.trim():typeof l.headline=="string"&&(r.title=l.headline.trim());l.author&&(typeof l.author.name=="string"?r.byline=l.author.name.trim():Array.isArray(l.author)&&l.author[0]&&typeof l.author[0].name=="string"&&(r.byline=l.author.filter(function(f){return f&&typeof f.name=="string"}).map(function(f){return f.name.trim()}).join(", "))),typeof l.description=="string"&&(r.excerpt=l.description.trim()),l.publisher&&typeof l.publisher.name=="string"&&(r.siteName=l.publisher.name.trim());return}catch(f){this.log(f.message)}}),r||{}},_getArticleMetadata:function(a){var i={},r={},o=this._doc.getElementsByTagName("meta"),s=/\s*(dc|dcterm|og|twitter)\s*:\s*(author|creator|description|title|site_name)\s*/gi,l=/^\s*(?:(dc|dcterm|og|twitter|weibo:(article|webpage))\s*[\.:]\s*)?(author|creator|description|title|site_name)\s*$/i;return this._forEachNode(o,function(u){var d=u.getAttribute("name"),m=u.getAttribute("property"),f=u.getAttribute("content");if(f){var g=null,A=null;m&&(g=m.match(s),g&&(A=g[0].toLowerCase().replace(/\s/g,""),r[A]=f.trim())),!g&&d&&l.test(d)&&(A=d,f&&(A=A.toLowerCase().replace(/\s/g,"").replace(/\./g,":"),r[A]=f.trim()))}}),i.title=a.title||r["dc:title"]||r["dcterm:title"]||r["og:title"]||r["weibo:article:title"]||r["weibo:webpage:title"]||r.title||r["twitter:title"],i.title||(i.title=this._getArticleTitle()),i.byline=a.byline||r["dc:creator"]||r["dcterm:creator"]||r.author,i.excerpt=a.excerpt||r["dc:description"]||r["dcterm:description"]||r["og:description"]||r["weibo:article:description"]||r["weibo:webpage:description"]||r.description||r["twitter:description"],i.siteName=a.siteName||r["og:site_name"],i.title=this._unescapeHtmlEntities(i.title),i.byline=this._unescapeHtmlEntities(i.byline),i.excerpt=this._unescapeHtmlEntities(i.excerpt),i.siteName=this._unescapeHtmlEntities(i.siteName),i},_isSingleImage:function(a){return a.tagName==="IMG"?!0:a.children.length!==1||a.textContent.trim()!==""?!1:this._isSingleImage(a.children[0])},_unwrapNoscriptImages:function(a){var i=Array.from(a.getElementsByTagName("img"));this._forEachNode(i,function(o){for(var s=0;s<o.attributes.length;s++){var l=o.attributes[s];switch(l.name){case"src":case"srcset":case"data-src":case"data-srcset":return}if(/\.(jpg|jpeg|png|webp)/i.test(l.value))return}o.parentNode.removeChild(o)});var r=Array.from(a.getElementsByTagName("noscript"));this._forEachNode(r,function(o){var s=a.createElement("div");if(s.innerHTML=o.innerHTML,!!this._isSingleImage(s)){var l=o.previousElementSibling;if(l&&this._isSingleImage(l)){var u=l;u.tagName!=="IMG"&&(u=l.getElementsByTagName("img")[0]);for(var d=s.getElementsByTagName("img")[0],m=0;m<u.attributes.length;m++){var f=u.attributes[m];if(f.value!==""&&(f.name==="src"||f.name==="srcset"||/\.(jpg|jpeg|png|webp)/i.test(f.value))){if(d.getAttribute(f.name)===f.value)continue;var g=f.name;d.hasAttribute(g)&&(g="data-old-"+g),d.setAttribute(g,f.value)}}o.parentNode.replaceChild(s.firstElementChild,l)}}})},_removeScripts:function(a){this._removeNodes(this._getAllNodesWithTag(a,["script","noscript"]))},_hasSingleTagInsideElement:function(a,i){return a.children.length!=1||a.children[0].tagName!==i?!1:!this._someNode(a.childNodes,function(r){return r.nodeType===this.TEXT_NODE&&this.REGEXPS.hasContent.test(r.textContent)})},_isElementWithoutContent:function(a){return a.nodeType===this.ELEMENT_NODE&&a.textContent.trim().length==0&&(a.children.length==0||a.children.length==a.getElementsByTagName("br").length+a.getElementsByTagName("hr").length)},_hasChildBlockElement:function(a){return this._someNode(a.childNodes,function(i){return this.DIV_TO_P_ELEMS.has(i.tagName)||this._hasChildBlockElement(i)})},_isPhrasingContent:function(a){return a.nodeType===this.TEXT_NODE||this.PHRASING_ELEMS.indexOf(a.tagName)!==-1||(a.tagName==="A"||a.tagName==="DEL"||a.tagName==="INS")&&this._everyNode(a.childNodes,this._isPhrasingContent)},_isWhitespace:function(a){return a.nodeType===this.TEXT_NODE&&a.textContent.trim().length===0||a.nodeType===this.ELEMENT_NODE&&a.tagName==="BR"},_getInnerText:function(a,i){i=typeof i>"u"?!0:i;var r=a.textContent.trim();return i?r.replace(this.REGEXPS.normalize," "):r},_getCharCount:function(a,i){return i=i||",",this._getInnerText(a).split(i).length-1},_cleanStyles:function(a){if(!(!a||a.tagName.toLowerCase()==="svg")){for(var i=0;i<this.PRESENTATIONAL_ATTRIBUTES.length;i++)a.removeAttribute(this.PRESENTATIONAL_ATTRIBUTES[i]);this.DEPRECATED_SIZE_ATTRIBUTE_ELEMS.indexOf(a.tagName)!==-1&&(a.removeAttribute("width"),a.removeAttribute("height"));for(var r=a.firstElementChild;r!==null;)this._cleanStyles(r),r=r.nextElementSibling}},_getLinkDensity:function(a){var i=this._getInnerText(a).length;if(i===0)return 0;var r=0;return this._forEachNode(a.getElementsByTagName("a"),function(o){var s=o.getAttribute("href"),l=s&&this.REGEXPS.hashUrl.test(s)?.3:1;r+=this._getInnerText(o).length*l}),r/i},_getClassWeight:function(a){if(!this._flagIsActive(this.FLAG_WEIGHT_CLASSES))return 0;var i=0;return typeof a.className=="string"&&a.className!==""&&(this.REGEXPS.negative.test(a.className)&&(i-=25),this.REGEXPS.positive.test(a.className)&&(i+=25)),typeof a.id=="string"&&a.id!==""&&(this.REGEXPS.negative.test(a.id)&&(i-=25),this.REGEXPS.positive.test(a.id)&&(i+=25)),i},_clean:function(a,i){var r=["object","embed","iframe"].indexOf(i)!==-1;this._removeNodes(this._getAllNodesWithTag(a,[i]),function(o){if(r){for(var s=0;s<o.attributes.length;s++)if(this._allowedVideoRegex.test(o.attributes[s].value))return!1;if(o.tagName==="object"&&this._allowedVideoRegex.test(o.innerHTML))return!1}return!0})},_hasAncestorTag:function(a,i,r,o){r=r||3,i=i.toUpperCase();for(var s=0;a.parentNode;){if(r>0&&s>r)return!1;if(a.parentNode.tagName===i&&(!o||o(a.parentNode)))return!0;a=a.parentNode,s++}return!1},_getRowAndColumnCount:function(a){for(var i=0,r=0,o=a.getElementsByTagName("tr"),s=0;s<o.length;s++){var l=o[s].getAttribute("rowspan")||0;l&&(l=parseInt(l,10)),i+=l||1;for(var u=0,d=o[s].getElementsByTagName("td"),m=0;m<d.length;m++){var f=d[m].getAttribute("colspan")||0;f&&(f=parseInt(f,10)),u+=f||1}r=Math.max(r,u)}return{rows:i,columns:r}},_markDataTables:function(a){for(var i=a.getElementsByTagName("table"),r=0;r<i.length;r++){var o=i[r],s=o.getAttribute("role");if(s=="presentation"){o._readabilityDataTable=!1;continue}var l=o.getAttribute("datatable");if(l=="0"){o._readabilityDataTable=!1;continue}var u=o.getAttribute("summary");if(u){o._readabilityDataTable=!0;continue}var d=o.getElementsByTagName("caption")[0];if(d&&d.childNodes.length>0){o._readabilityDataTable=!0;continue}var m=["col","colgroup","tfoot","thead","th"],f=function(A){return!!o.getElementsByTagName(A)[0]};if(m.some(f)){this.log("Data table because found data-y descendant"),o._readabilityDataTable=!0;continue}if(o.getElementsByTagName("table")[0]){o._readabilityDataTable=!1;continue}var g=this._getRowAndColumnCount(o);if(g.rows>=10||g.columns>4){o._readabilityDataTable=!0;continue}o._readabilityDataTable=g.rows*g.columns>10}},_fixLazyImages:function(a){this._forEachNode(this._getAllNodesWithTag(a,["img","picture","figure"]),function(i){if(i.src&&this.REGEXPS.b64DataUrl.test(i.src)){var r=this.REGEXPS.b64DataUrl.exec(i.src);if(r[1]==="image/svg+xml")return;for(var o=!1,s=0;s<i.attributes.length;s++){var l=i.attributes[s];if(l.name!=="src"&&/\.(jpg|jpeg|png|webp)/i.test(l.value)){o=!0;break}}if(o){var u=i.src.search(/base64\s*/i)+7,d=i.src.length-u;d<133&&i.removeAttribute("src")}}if(!((i.src||i.srcset&&i.srcset!="null")&&i.className.toLowerCase().indexOf("lazy")===-1)){for(var m=0;m<i.attributes.length;m++)if(l=i.attributes[m],!(l.name==="src"||l.name==="srcset"||l.name==="alt")){var f=null;if(/\.(jpg|jpeg|png|webp)\s+\d/.test(l.value)?f="srcset":/^\s*\S+\.(jpg|jpeg|png|webp)\S*\s*$/.test(l.value)&&(f="src"),f){if(i.tagName==="IMG"||i.tagName==="PICTURE")i.setAttribute(f,l.value);else if(i.tagName==="FIGURE"&&!this._getAllNodesWithTag(i,["img","picture"]).length){var g=this._doc.createElement("img");g.setAttribute(f,l.value),i.appendChild(g)}}}}})},_getTextDensity:function(a,i){var r=this._getInnerText(a,!0).length;if(r===0)return 0;var o=0,s=this._getAllNodesWithTag(a,i);return this._forEachNode(s,l=>o+=this._getInnerText(l,!0).length),o/r},_cleanConditionally:function(a,i){this._flagIsActive(this.FLAG_CLEAN_CONDITIONALLY)&&this._removeNodes(this._getAllNodesWithTag(a,[i]),function(r){var o=function(y){return y._readabilityDataTable},s=i==="ul"||i==="ol";if(!s){var l=0,u=this._getAllNodesWithTag(r,["ul","ol"]);this._forEachNode(u,y=>l+=this._getInnerText(y).length),s=l/this._getInnerText(r).length>.9}if(i==="table"&&o(r)||this._hasAncestorTag(r,"table",-1,o)||this._hasAncestorTag(r,"code"))return!1;var d=this._getClassWeight(r);this.log("Cleaning Conditionally",r);var m=0;if(d+m<0)return!0;if(this._getCharCount(r,",")<10){for(var f=r.getElementsByTagName("p").length,g=r.getElementsByTagName("img").length,A=r.getElementsByTagName("li").length-100,K=r.getElementsByTagName("input").length,F=this._getTextDensity(r,["h1","h2","h3","h4","h5","h6"]),p=0,re=this._getAllNodesWithTag(r,["object","embed","iframe"]),O=0;O<re.length;O++){for(var Y=0;Y<re[O].attributes.length;Y++)if(this._allowedVideoRegex.test(re[O].attributes[Y].value))return!1;if(re[O].tagName==="object"&&this._allowedVideoRegex.test(re[O].innerHTML))return!1;p++}var ce=this._getLinkDensity(r),P=this._getInnerText(r).length,h=g>1&&f/g<.5&&!this._hasAncestorTag(r,"figure")||!s&&A>f||K>Math.floor(f/3)||!s&&F<.9&&P<25&&(g===0||g>2)&&!this._hasAncestorTag(r,"figure")||!s&&d<25&&ce>.2||d>=25&&ce>.5||p===1&&P<75||p>1;if(s&&h){for(var v=0;v<r.children.length;v++)if(r.children[v].children.length>1)return h;let y=r.getElementsByTagName("li").length;if(g==y)return!1}return h}return!1})},_cleanMatchedNodes:function(a,i){for(var r=this._getNextNode(a,!0),o=this._getNextNode(a);o&&o!=r;)i.call(this,o,o.className+" "+o.id)?o=this._removeAndGetNext(o):o=this._getNextNode(o)},_cleanHeaders:function(a){let i=this._getAllNodesWithTag(a,["h1","h2"]);this._removeNodes(i,function(r){let o=this._getClassWeight(r)<0;return o&&this.log("Removing header with low class weight:",r),o})},_headerDuplicatesTitle:function(a){if(a.tagName!="H1"&&a.tagName!="H2")return!1;var i=this._getInnerText(a,!1);return this.log("Evaluating similarity of header:",i,this._articleTitle),this._textSimilarity(this._articleTitle,i)>.75},_flagIsActive:function(a){return(this._flags&a)>0},_removeFlag:function(a){this._flags=this._flags&~a},_isProbablyVisible:function(a){return(!a.style||a.style.display!="none")&&!a.hasAttribute("hidden")&&(!a.hasAttribute("aria-hidden")||a.getAttribute("aria-hidden")!="true"||a.className&&a.className.indexOf&&a.className.indexOf("fallback-image")!==-1)},parse:function(){if(this._maxElemsToParse>0){var a=this._doc.getElementsByTagName("*").length;if(a>this._maxElemsToParse)throw new Error("Aborting parsing document; "+a+" elements found")}this._unwrapNoscriptImages(this._doc);var i=this._disableJSONLD?{}:this._getJSONLD(this._doc);this._removeScripts(this._doc),this._prepDocument();var r=this._getArticleMetadata(i);this._articleTitle=r.title;var o=this._grabArticle();if(!o)return null;if(this.log("Grabbed: "+o.innerHTML),this._postProcessContent(o),!r.excerpt){var s=o.getElementsByTagName("p");s.length>0&&(r.excerpt=s[0].textContent.trim())}var l=o.textContent;return{title:this._articleTitle,byline:r.byline||this._articleByline,dir:this._articleDir,lang:this._articleLang,content:this._serializer(o),textContent:l,length:l.length,excerpt:r.excerpt,siteName:r.siteName||this._articleSiteName}}},typeof t=="object"&&(t.exports=n)}),zs=qa((e,t)=>{var n={unlikelyCandidates:/-ad-|ai2html|banner|breadcrumbs|combx|comment|community|cover-wrap|disqus|extra|footer|gdpr|header|legends|menu|related|remark|replies|rss|shoutbox|sidebar|skyscraper|social|sponsor|supplemental|ad-break|agegate|pagination|pager|popup|yom-remote/i,okMaybeItsACandidate:/and|article|body|column|content|main|shadow/i};function a(r){return(!r.style||r.style.display!="none")&&!r.hasAttribute("hidden")&&(!r.hasAttribute("aria-hidden")||r.getAttribute("aria-hidden")!="true"||r.className&&r.className.indexOf&&r.className.indexOf("fallback-image")!==-1)}function i(r,o={}){typeof o=="function"&&(o={visibilityChecker:o});var s={minScore:20,minContentLength:140,visibilityChecker:a};o=Object.assign(s,o);var l=r.querySelectorAll("p, pre, article"),u=r.querySelectorAll("div > br");if(u.length){var d=new Set(l);[].forEach.call(u,function(f){d.add(f.parentNode)}),l=Array.from(d)}var m=0;return[].some.call(l,function(f){if(!o.visibilityChecker(f))return!1;var g=f.className+" "+f.id;if(n.unlikelyCandidates.test(g)&&!n.okMaybeItsACandidate.test(g)||f.matches("li p"))return!1;var A=f.textContent.trim().length;return A<o.minContentLength?!1:(m+=Math.sqrt(A-o.minContentLength),m>o.minScore)})}typeof t=="object"&&(t.exports=i)}),ri=qa((e,t)=>{var n=Ms(),a=zs();t.exports={Readability:n,isProbablyReaderable:a}}),oi={};_s(oi,{Readability:()=>li,default:()=>ui,isProbablyReaderable:()=>ci});var si=ii(ri());Is(oi,ii(ri()));var{Readability:li,isProbablyReaderable:ci}=si,{default:ni,...Os}=si,ui=ni!==void 0?ni:Os;var od=Qt.alert;var di={nologin:"\u672A\u767B\u5F55",loginForSafari:"\u767B\u5F55\u6216\u6CE8\u518C",login:"\u767B\u5F55\u540E\u53EF\u5F00\u901A\u4F1A\u5458",manageAccount:"\u7BA1\u7406\u8D26\u6237",openPremium:"\u5F00\u901A\u4F1A\u5458",logout:"\u9000\u51FA",curentPlan:"\u5F53\u524D\u5957\u9910",endAt:"\u5230\u671F",endAuto:"\u81EA\u52A8\u7EED\u671F",lineBreakMaxTextCount:"\u6362\u884C\u540E\uFF0C\u6BCF\u53E5\u8BDD\u5141\u8BB8\u7684\u6700\u5927\u5B57\u7B26\u6570\u91CF","translate-pdf":"\u70B9\u51FB\u7FFB\u8BD1 PDF","noSupportTranslate-pdf":"\u811A\u672C\u4E0D\u652F\u6301\u8BF7\u4F7F\u7528\u63D2\u4EF6","translate-firefox-local-pdf":"\u70B9\u51FB\u53BB\u5BFC\u5165PDF",enableLineBreak:"\u5F00\u542F\u957F\u6BB5\u843D\u81EA\u52A8\u6362\u884C",sponsorLabel:"$1 \u8D77\u8D5E\u52A9\u5F00\u53D1\u8005",help:"\u5E2E\u52A9",browserShortcutsNoteForFirefox:"Firefox \u6D4F\u89C8\u5668\u4FEE\u6539\u5FEB\u6377\u952E\u9700\u8981\u6253\u5F00\u6269\u5C55\u7BA1\u7406\u9875\u9762 `about:addons`\uFF0C\u7136\u540E\u70B9\u51FB\u300C\u8BBE\u7F6E\u300D\uFF0C\u518D\u70B9\u51FB\u300C\u7BA1\u7406\u5FEB\u6377\u952E\u300D\u5373\u53EF\u8BBE\u7F6E",browserShortcutsNoteForChrome:"\u7C7BChrome \u6D4F\u89C8\u5668\u4FEE\u6539\u5FEB\u6377\u952E\u9700\u8981\u6253\u5F00\u6269\u5C55\u7BA1\u7406\u9875\u9762\uFF0C\u5728`\u7BA1\u7406\u5FEB\u6377\u952E`\u9762\u677F(`chrome://extensions/shortcuts`)\u8BBE\u7F6E\uFF0C\u70B9\u51FB\u4E0B\u65B9\u6309\u94AE\u8DF3\u8F6C\u5230\u5FEB\u6377\u952E\u7BA1\u7406\u9875\u9762\u3002",browserShortcutsSucks:"\u81EA\u5B9A\u4E49\u5FEB\u6377\u952E\u683C\u5F0F\u4E3A (\u6CA1\u6709\u505A\u81EA\u52A8\u8BC6\u522B\uFF0C\u8BF7\u76F4\u63A5\u8F93\u5165)\uFF1A",enableLineBreakDescription:"\u5F00\u542F\u540E\uFF0C\u5C06\u4F1A\u5728\u957F\u6BB5\u843D\u4E2D\u6BCF\u53E5\u8BDD\u7ED3\u675F\u63D2\u5165\u6362\u884C\u7B26\uFF0C\u4EE5\u4FBF\u4E8E\u9605\u8BFB","browser.shortBrandName":"\u6C89\u6D78\u5F0F\u7FFB\u8BD1","browser.brandName":"\u6C89\u6D78\u5F0F\u7FFB\u8BD1: \u53CC\u8BED\u5BF9\u7167\u7F51\u9875\u7FFB\u8BD1 & PDF\u6587\u6863\u7FFB\u8BD1","browser.brandDescription":"\u6C89\u6D78\u5F0F\u7F51\u9875\u53CC\u8BED\u7FFB\u8BD1\u6269\u5C55\uFF0C\u652F\u6301PDF\u7FFB\u8BD1\uFF0C\u53CC\u8BEDEpub\u7535\u5B50\u4E66\u5236\u4F5C\uFF0CYoutube/Netflix/Udemy \u7B49\u5E73\u53F0\u53CC\u8BED\u5B57\u5E55\uFF0C\u652F\u6301Deepl/Google\u7B49\u591A\u4E2A\u7FFB\u8BD1\u670D\u52A1\uFF0C\u514D\u8D39\u4F7F\u7528\u3002","browser.toggleTranslatePage":"\u7FFB\u8BD1\u7F51\u9875/\u663E\u793A\u539F\u6587","browser.toggleTranslateTheWholePage":"\u7FFB\u8BD1\u9875\u9762\u5168\u90E8\u533A\u57DF/\u663E\u793A\u539F\u6587","browser.toggleOnlyTransation":"\u7FFB\u8BD1\u5E76\u9690\u85CF\u539F\u6587/\u663E\u793A\u539F\u6587","browser.toggleTranslateToThePageEndImmediately":"\u7ACB\u5373\u7FFB\u8BD1\u5230\u9875\u9762\u5E95\u90E8/\u663E\u793A\u539F\u6587","browser.toggleTranslateTheMainPage":"\u7FFB\u8BD1\u9875\u9762\u4E3B\u8981\u533A\u57DF/\u663E\u793A\u539F\u6587","browser.shareToDraft":"\u5206\u4EAB\u53CC\u8BED\u9875\u9762","browser.openOptionsPage":"\u6253\u5F00\u8BBE\u7F6E\u9875","browser.toggleTranslationMask":"\u663E\u793A/\u9690\u85CF\u8BD1\u6587\u6A21\u7CCA\u6548\u679C","browser.translateLocalPdfFile":"\u7FFB\u8BD1\u672C\u5730 PDF \u6587\u4EF6","browser.openEbookViewer":"\u9605\u8BFB\u672C\u5730\u7535\u5B50\u4E66","browser.openEbookBuilder":"\u5236\u4F5C\u53CC\u8BED EPUB \u7535\u5B50\u4E66","browser.translateLocalHtmlFile":"\u7FFB\u8BD1 HTML/txt \u6587\u4EF6","browser.donateContext":"\u4E86\u89E3\u8D5E\u52A9\u798F\u5229","browser.translateLocalSubtitleFile":"\u7FFB\u8BD1\u672C\u5730\u5B57\u5E55\u6587\u4EF6",confirmResetConfig:"\u4F60\u786E\u5B9A\u8981\u91CD\u7F6E\u8BBE\u7F6E\u5417\uFF1F",translationLineBreakSettingTitle:"\u8BD1\u6587\u6362\u884C\u8BBE\u7F6E",smartLineBreak:"\u667A\u80FD\u6362\u884C",alwaysLineBreak:"\u603B\u662F\u6362\u884C",isShowContextMenu:"\u5C06\u7FFB\u8BD1\u7F51\u9875\u52A0\u5165\u53F3\u952E\u83DC\u5355\u9879",toggleBeta:"\u5F00\u542F Beta \u6D4B\u8BD5\u7279\u6027",betaDescription:"\u542F\u7528\u4ECD\u5728\u5B9E\u9A8C\u6027\u7684\u529F\u80FD\uFF0C\u4EE5\u53CA\u6D4B\u8BD5\u4E2D\u7684\u7FFB\u8BD1\u670D\u52A1\u3002\u52A0\u5165 <1>Telegram \u7FA4\u7EC4</1>\u4E86\u89E3\u66F4\u591A\u3002",translationLineBreakSettingDescription:"\u603B\u662F\u6362\u884C\u9002\u7528\u4E8E\u8F83\u5C11\u5185\u5BB9\u7684\u7248\u9762\uFF0C\u66F4\u6574\u9F50\u3002\uFF08\u5728\u5185\u5BB9\u8F83\u591A\u7684\u957F\u6BB5\u843D(\u8D85\u8FC7{count}\u4E2A\u5B57\u7B26) \u4F7F\u7528\u667A\u80FD\u6362\u884C\uFF0C\u66F4\u7701\u7A7A\u95F4\uFF09",tempTranslateDomainTitle:"\u4E34\u65F6\u5F00\u542F\u7F51\u7AD9\u7FFB\u8BD1\u7684\u65F6\u957F",tempTranslateDomainDescription:"\u5F53\u624B\u52A8\u7FFB\u8BD1\u67D0\u4E2A\u7F51\u9875\u7684\u65F6\u5019\uFF0C\u4E34\u65F6\u5F00\u542F\u8BE5\u7F51\u7AD9\u4E3A\u81EA\u52A8\u7FFB\u8BD1\uFF0C\u53EF\u8BBE\u7F6E\u4E34\u65F6\u65F6\u957F",xMinutes:"{count} \u5206\u949F",disabled:"\u7981\u7528",changelog:"\u66F4\u65B0\u65E5\u5FD7",toggleTranslatePageWhenThreeFingersOnTheScreen:"\u591A\u6307\u540C\u65F6\u89E6\u6478\u5C4F\u5E55\u5219\u7FFB\u8BD1\u7F51\u9875/\u663E\u793A\u539F\u6587",toggleTranslationMaskWhenThreeFingersOnTheScreen:"\u591A\u6307\u540C\u65F6\u89E6\u6478\u5219\u663E\u793A/\u9690\u85CF\u8BD1\u6587\u6A21\u7CCA\u6548\u679C",fingerCountToToggleTranslagePageOnlyTranslationWhenTouching:"\u591A\u6307\u540C\u65F6\u89E6\u6478\u5C4F\u5E55\u5219\u7FFB\u8BD1\u7F51\u9875(\u4EC5\u8BD1\u6587)/\u663E\u793A\u539F\u6587",addUrlDescription:"\u53EF\u4EE5\u4E3A\u57DF\u540D\uFF0C\u540C\u65F6\u652F\u6301\u901A\u914D\u7B26\uFF0C\u5982\uFF1A*.google.com, google.com/mail/*, https://www.google.com/*",general:"\u57FA\u672C\u8BBE\u7F6E",clickToExpandConfig:"\u5C55\u5F00\u5F53\u524D\u914D\u7F6E",import:"\u4ECE\u6587\u4EF6\u5BFC\u5165",export:"\u5BFC\u51FA\u5230\u6587\u4EF6",toggleDebug:"\u5728\u63A7\u5236\u53F0\u6253\u5370\u8C03\u8BD5\u65E5\u5FD7","fingers.0":"\u5173\u95ED","fingers.2":"\u53CC\u6307\u89E6\u6478","fingers.3":"\u4E09\u6307\u89E6\u6478","fingers.4":"\u56DB\u6307\u89E6\u6478","fingers.5":"\u4E94\u6307\u89E6\u6478",mouseHoldKey:"+ {key} \u7FFB\u8BD1/\u8FD8\u539F\u8BE5\u6BB5",mouseHoldKeyAuto:"\u76F4\u63A5\u7FFB\u8BD1\u8BE5\u6BB5",mouseHoldKeyOff:"\u4E0D\u505A\u4EFB\u4F55\u4E8B\u60C5",mouseHoldKeyOther:"\u81EA\u5B9A\u4E49\u5FEB\u6377\u952E(\u6253\u5F00\u8BBE\u7F6E)",mouseHoldKeyCustomKey:"{key} \u7FFB\u8BD1/\u8FD8\u539F\u8BE5\u6BB5",mouseHoverHoldKey:"\u9F20\u6807\u60AC\u505C\u540C\u65F6\u6309\u4E0B\u5FEB\u6377\u952E\u7FFB\u8BD1\u6BB5\u843D","mouse-translate":"\u9F20\u6807\u60AC\u505C",document:"\u6587\u6863",resetSuccess:"\u91CD\u7F6E\u6240\u6709\u8BBE\u7F6E\u6210\u529F",resetThisSuccess:"\u91CD\u7F6E\u6210\u529F",saved:"\u4FDD\u5B58\u6210\u529F",successImportConfig:"\u6210\u529F\u5BFC\u5165\u914D\u7F6E",goAdvancedSettings:"\u53BB\u8FDB\u9636\u8BBE\u7F6E\u9875",goAdvancedInterfaceSettings:"\u53BB\u9AD8\u7EA7\u81EA\u5B9A\u4E49\u8BBE\u7F6E\u9875\u9762",advanced:"\u8FDB\u9636\u8BBE\u7F6E",advancedDescription:"\u4E00\u822C\u65E0\u9700\u8BBE\u7F6E\uFF0C\u4FDD\u6301\u9ED8\u8BA4\u5373\u53EF\u3002\u4EC5\u5BF9\u4E8E\u66F4\u4E13\u4E1A\u7684\u7528\u6237\uFF0C\u63D0\u4F9B\u66F4\u4E2A\u6027\u5316\u7684\u8BBE\u7F6E\u9879\u3002",developer:"\u5F00\u53D1\u8005\u8BBE\u7F6E",donateCafe:"\u4EF7\u683C","translate to the bottom of the page":"\u8FDB\u5165\u7F51\u9875\u540E\uFF0C\u662F\u5426\u7ACB\u5373\u7FFB\u8BD1\u5230\u9875\u9762\u5E95\u90E8\uFF1F",feedback:"\u95EE\u9898\u53CD\u9988",toggleTranslatePage:"\u7FFB\u8BD1\u7F51\u9875/\u663E\u793A\u539F\u6587",translateToThePageEndImmediatelyDescription:"\u5F00\u542F\u540E\uFF0C\u8FDB\u5165\u7F51\u9875\u5C06\u7ACB\u5373\u7FFB\u8BD1\u4ECE\u9876\u90E8\u5230\u5E95\u90E8\u7684\u5185\u5BB9\u3002\u5173\u95ED\u5219\u8FB9\u770B\u8FB9\u8BD1\u3002\uFF08\u4E0D\u63A8\u8350\u5F00\u542F\uFF09","translate all areas of the page":"\u662F\u5426\u7FFB\u8BD1\u7F51\u9875\u6240\u6709\u533A\u57DF",translationAreaDescription:"\u5F00\u542F\u540E\uFF0C\u6574\u4E2A\u7F51\u9875\u7684\u6240\u6709\u533A\u57DF\u90FD\u4F1A\u88AB\u7FFB\u8BD1\u3002\u5173\u95ED\u5219\u4F7F\u7528\u9ED8\u8BA4\u7684\u667A\u80FD\u8BC6\u522B\uFF0C\u4EC5\u7FFB\u8BD1\u4E3B\u8981\u533A\u57DF\u3002\uFF08\u4E0D\u63A8\u8350\u5F00\u542F\uFF09","the number of characters to be translated first":"\u76F4\u63A5\u7FFB\u8BD1\u9875\u9762\u524D\u591A\u5C11\u4E2A\u5B57\u7B26\uFF0C\u800C\u65E0\u9700\u7B49\u5F85\u6EDA\u52A8\u5230\u53EF\u89C6\u533A\u57DF","interface language":"\u754C\u9762\u8BED\u8A00","display both the original text and the translation":"\u540C\u65F6\u663E\u793A\u539F\u6587\u548C\u8BD1\u6587","keyboard shortcuts":"\u952E\u76D8\u5FEB\u6377\u952E",modify:"\u4FEE\u6539\u5FEB\u6377\u952E",reset:"\u91CD\u7F6E",close:"\u5173\u95ED",homepage:"\u4E3B\u9875",more:"\u66F4\u591A",moreOptions:"\u5C55\u5F00\u66F4\u591A\u81EA\u5B9A\u4E49\u9009\u9879",translateTheWholePage:"\u7FFB\u8BD1\u9875\u9762\u5168\u90E8\u533A\u57DF\uFF08\u533A\u522B\u4E8E\u667A\u80FD\u8BC6\u522B\u4E3B\u8981\u533A\u57DF\uFF09",changeToTranslateTheWholePage:"\u5207\u6362\u4E3A\u7FFB\u8BD1\u6240\u6709\u533A\u57DF",changeToTranslateTheMainPage:"\u5207\u6362\u4E3A\u7FFB\u8BD1\u4E3B\u8981\u533A\u57DF",changeToOnlyTranslationMode:"\u5207\u6362\u4E3A\u4EC5\u663E\u793A\u8BD1\u6587",changeToDualTranslationMode:"\u5207\u6362\u4E3A\u53CC\u8BED\u7FFB\u8BD1",translateToThePageEndImmediately:"\u7ACB\u5373\u7FFB\u8BD1\u5230\u9875\u9762\u5E95\u90E8",translateTheMainPage:"\u667A\u80FD\u7FFB\u8BD1\u4E3B\u8981\u533A\u57DF","The local rules are up to date":"\u672C\u5730\u9002\u914D\u89C4\u5219\u5DF2\u662F\u6700\u65B0:","Successfully synchronized with the latest official rules:":"\u6210\u529F\u540C\u6B65\u6700\u65B0\u5B98\u65B9\u9002\u914D\u89C4\u5219:","Checking for updates":"\u6B63\u5728\u68C0\u67E5\u66F4\u65B0","Rules are being synchronized":"\u6B63\u5728\u540C\u6B65\u9002\u914D\u89C4\u5219",localVersionIsTooOld:"\u672C\u5730\u6269\u5C55\u7248\u672C\u8FC7\u65E7\uFF0C\u8BF7\u5347\u7EA7\u6269\u5C55\u5230 {minVersion} \u6216\u66F4\u65B0\u7684\u7248\u672C\u518D\u5C1D\u8BD5\u540C\u6B65",badUserscriptBrowser:"\u5F53\u524D\u6D4F\u89C8\u5668\u6CA1\u6709\u6B63\u786E\u5B9E\u73B0\u6CB9\u7334\u6269\u5C55\u7684\u63A5\u53E3\uFF08\u6BD4\u5982\u83B7\u53D6\u6CB9\u7334\u811A\u672C\u81EA\u8EAB\u7684\u7248\u672C\u53F7\u4FE1\u606F\uFF09\uFF0C\u8BF7\u4F7F\u7528\u5176\u4ED6<1>\u652F\u6301\u6CB9\u7334\u6269\u5C55</1>\u7684\u6D4F\u89C8\u5668\u5982 Firefox",foundNewVersion:"\u53D1\u73B0\u65B0\u7248\u672C",theLocalExtensionIsUpToUpdate:"\u5F53\u524D\u6269\u5C55\u5DF2\u662F\u6700\u65B0\u7248\u672C\u3002",failToSyncRules:"\u540C\u6B65\u6700\u65B0\u9002\u914D\u89C4\u5219\u5931\u8D25",retry:"\u70B9\u6B64\u91CD\u8BD5",failedReason:"\u5931\u8D25\u539F\u56E0",currentRuleVersion:"\u5F53\u524D\u89C4\u5219\u7248\u672C",calculating:"\u8BA1\u7B97\u4E2D",unknownError:"\u672A\u77E5\u9519\u8BEF",canNotFetchRemoteRule:"\u65E0\u6CD5\u83B7\u53D6\u8FDC\u7A0B\u89C4\u5219",enableAlphaSuccess:"\u5DF2\u5F00\u542FAlpha\u529F\u80FD",disableAlphaSuccess:"\u5DF2\u5173\u95EDAlpha\u529F\u80FD",cacheSize:"\u7F13\u5B58\u5927\u5C0F\uFF1A",cleaning:"\u6E05\u7406\u4E2D",cleanCache:"\u6E05\u9664\u7F13\u5B58",options:"\u8BBE\u7F6E",about:"\u5173\u4E8E",service:"\u7FFB\u8BD1\u670D\u52A1",needAction:"(\u53BB\u8BBE\u7F6E)",goSettings:"\u53BB\u8BBE\u7F6E",needActionForOptions:"(\u9700\u8BBE\u7F6E)",translationEngine:"\u5F15\u64CE\u9009\u9879",sourceLanguage:"\u539F\u6587\u8BED\u8A00",target:"\u76EE\u6807\u8BED\u8A00",popupSourceLanguage:"\u539F\u6587\u8BED\u8A00",popupTarget:"\u76EE\u6807\u8BED\u8A00",popupService:"\u7FFB\u8BD1\u670D\u52A1",forThisSite:"\u5F53\u524D\u7F51\u7AD9",autoEnableSubtitle:"\u81EA\u52A8\u5F00\u542F\u53CC\u8BED\u5B57\u5E55",alwaysTranslateSomeLanguage:"\u603B\u662F\u7FFB\u8BD1 {language}",neverTranslateSomeLanguage:"\u6C38\u4E0D\u7FFB\u8BD1 {language}",alwaysTranslateSomeSite:"\u603B\u662F\u7FFB\u8BD1 {hostname}",neverTranslateSomeSite:"\u6C38\u4E0D\u7FFB\u8BD1 {hostname}",alwaysTranslateSomeSiteOrWildSite:"\u603B\u662F\u7FFB\u8BD1\u8BE5\u7F51\u7AD9",alwaysTranslateSomePage:"\u603B\u662F\u7FFB\u8BD1\u8BE5\u7F51\u9875",add:"\u6DFB\u52A0",default:"\u9ED8\u8BA4",forThisLanguage:"\u9488\u5BF9\u8BE5\u8BED\u8A00\uFF1A","add url":"\u8F93\u5165URL",edit:"\u7F16\u8F91","translate other languages into specific language":"\u5C06\u5176\u4ED6\u8BED\u8A00\u7FFB\u8BD1\u4E3A\u4F60\u8BBE\u7F6E\u7684\u8BED\u8A00","select translation service":"\u9009\u62E9\u4E00\u9879\u7FFB\u8BD1\u670D\u52A1",language:"\u8BED\u8A00","show-original":"\u663E\u793A\u539F\u6587",translate:"\u7FFB\u8BD1",Translated:"\u5DF2\u7FFB\u8BD1",Translating:"\u7FFB\u8BD1\u4E2D",Error:"\u9519\u8BEF",allowCacheTranslations:"\u5F00\u542F\u672C\u5730\u7FFB\u8BD1\u7F13\u5B58\uFF08\u51CF\u5C11\u91CD\u590D\u6BB5\u843D\u7684\u7FFB\u8BD1\u8BF7\u6C42\uFF09","translation display":"\u8BD1\u6587\u663E\u793A\u6837\u5F0F","select diplay style":"\u533A\u5206\u8BD1\u6587\u7684\u6837\u5F0F\uFF0C\u5177\u4F53\u53EF\u53C2\u8003\u4E0B\u5217\u793A\u4F8B",interface:"\u754C\u9762\u8BBE\u7F6E",import_export:"\u5BFC\u5165/\u5BFC\u51FA",import_export_title:"\u5BFC\u5165/\u5BFC\u51FA\u914D\u7F6E",syncToGoogleDrive:"\u7ACB\u5373\u4E0E Google Drive \u540C\u6B65",floatBallOptions:"\u60AC\u6D6E\u7403\u8BBE\u7F6E","floatBallOptions.enable":"\u542F\u7528\u60AC\u6D6E\u7403","floatBallOptions.blockUrls":"\u7981\u7528\u7F51\u7AD9","floatBallOptions.add":"\u6DFB\u52A0","floatBallOptions.blockUrlDesc":"\u5F53\u9047\u4E0B\u5217\u7F51\u7AD9\u65F6\u4E0D\u663E\u793A\u60AC\u6D6E\u7403","floatBallOptions.clickType":"\u70B9\u51FB\u884C\u4E3A","floatBallOptions.clickTypeDesc":"\u60AC\u6D6E\u7403\u56FE\u6807\u70B9\u51FB\u65F6\u7684\u884C\u4E3A","floatBallOptions.clickPopup":"\u663E\u793A\u7FFB\u8BD1\u9762\u677F","floatBallOptions.clickTranslate":"\u7FFB\u8BD1/\u663E\u793A\u539F\u6587",previewAllThemes:"\u9884\u89C8\u5168\u90E8\u6837\u5F0F","translationTheme.none":"\u65E0","translationTheme.grey":"\u9ED1\u7070\u8272","translationTheme.dashed":"\u865A\u7EBF\u4E0B\u5212\u7EBF","translationTheme.dotted":"\u70B9\u72B6\u4E0B\u5212\u7EBF","translationTheme.dashedBorder":"\u865A\u7EBF\u8FB9\u6846","translationTheme.solidBorder":"\u5B9E\u7EBF\u8FB9\u6846","translationTheme.underline":"\u76F4\u7EBF\u4E0B\u5212\u7EBF","translationTheme.mask":"\u6A21\u7CCA\u6548\u679C\uFF08\u5B66\u4E60\u6A21\u5F0F\uFF09","translationTheme.opacity":"\u900F\u660E\u6548\u679C","translationTheme.paper":"\u767D\u7EB8\u9634\u5F71\u6548\u679C","translationTheme.dividingLine":"\u5206\u5272\u7EBF","translationTheme.highlight":"\u9AD8\u4EAE","translationTheme.marker":"\u9A6C\u514B\u7B14","translationTheme.marker2":"\u9A6C\u514B\u7B142","translationTheme.blockquote":"\u5F15\u7528\u6837\u5F0F","translationTheme.weakening":"\u5F31\u5316","translationTheme.italic":"\u659C\u4F53","translationTheme.bold":"\u52A0\u7C97","translationTheme.thinDashed":"\u7EC6\u865A\u7EBF\u4E0B\u5212\u7EBF","translationTheme.nativeDashed":"\u7CFB\u7EDF\u81EA\u5E26\u865A\u7EBF\u4E0B\u5212\u7EBF","translationTheme.nativeDotted":"\u7CFB\u7EDF\u81EA\u5E26\u70B9\u72B6\u4E0B\u5212\u7EBF","translationTheme.nativeUnderline":"\u7CFB\u7EDF\u81EA\u5E26\u76F4\u7EBF\u4E0B\u5212\u7EBF","translationTheme.wavy":"\u6CE2\u6D6A\u7EBF","translationServices.custom":"\u81EA\u5B9A\u4E49API","translationServices.tencent":"\u817E\u8BAF\u7FFB\u8BD1\u541B","translationServices.tenAlpha":"\u817E\u8BAF\u7FFB\u8BD1\u541B(Alpha)","translationServices.google":"\u8C37\u6B4C\u7FFB\u8BD1","translationServices.bai":"\u767E\u5EA6(Alpha)","translationServices.baidu":"\u767E\u5EA6\u7FFB\u8BD1","translationServices.aliyun":"\u963F\u91CC\u4E91\u7FFB\u8BD1","translationServices.volc":"\u706B\u5C71\u7FFB\u8BD1","translationServices.deeplx":"DeepLX(Beta)","translationServices.bing":"\u5FAE\u8F6F\u7FFB\u8BD1","translationServices.deepl":"DeepL","translationServices.wechat":"\u5FAE\u4FE1\u7FFB\u8BD1","translationServices.azure":"Azure \u7FFB\u8BD1","translationServices.ibm":"IBM Watson","translationServices.aws":"\u4E9A\u9A6C\u900A\u7FFB\u8BD1","translationServices.mock":"\u6A21\u62DF\u7FFB\u8BD1","translationServices.mock2":"\u6A21\u62DF\u7FFB\u8BD12","translationServices.caiyun":"\u5F69\u4E91\u5C0F\u8BD1","translationServices.cai":"\u5F69\u4E91\u5C0F\u8BD1 (Alpha)","translationServices.volcAlpha":"\u706B\u5C71 (Alpha)","translationServices.openl":"OpenL","translationServices.youdao":"\u6709\u9053\u7FFB\u8BD1","translationServices.you":"\u6709\u9053\u7FFB\u8BD1 (Alpha)","translationServices.transmart":"\u817E\u8BAF\u4EA4\u4E92\u7FFB\u8BD1","translationServices.niu":"\u5C0F\u725B\u7FFB\u8BD1","translationServices.papago":"Papago \u7FFB\u8BD1","translationServices.d":"D (Alpha)","translationServices.dpro":"D Pro (Canary)","translationServices.openai":"OpenAI","translationServices.chatgpt":"ChatGPT Web(3.5 mobile)","translate title":"\u7FFB\u8BD1\u9875\u9762\u6807\u9898","always languages":"\u603B\u662F\u7FFB\u8BD1\u7684\u8BED\u8A00",neverTranslateLanguagesLabel:"\u6C38\u4E0D\u7FFB\u8BD1\u7684\u8BED\u8A00",neverTranslateTheFollowingLanguagesDescription:"\u5F53\u9875\u9762\u4E2D\u67D0\u4E00\u6BB5\u843D\u7684\u8BED\u8A00\u4E3A\u4E0B\u5217\u8BED\u8A00\u65F6\uFF0C\u5C06\u8DF3\u8FC7\u7FFB\u8BD1",enableUserscriptPagePopup:"\u5728\u9875\u9762\u4E0A\u663E\u793A\u60AC\u6D6E\u7403",enableUserscriptPagePopupDescription:"\u5173\u95ED\u60AC\u6D6E\u7403\u540E\uFF0C\u53EF\u4EE5\u7528\u5FEB\u6377\u952E/{touch}\u5524\u8D77\u3002\u4E3A\u9632\u6B62\u4E0D\u614E\u5173\u95ED\u8BE5\u9009\u9879\u540E\u627E\u4E0D\u5230\u60AC\u6D6E\u7403\uFF0C\u5F3A\u70C8\u5EFA\u8BAE\u6536\u85CF\u672C\u8BBE\u7F6E\u9875","always translate the following languages":"\u5F53\u9875\u9762\u8BED\u8A00\u4E3A\u4E0B\u5217\u8BED\u8A00\u65F6\uFF0C\u4F1A\u81EA\u52A8\u7FFB\u8BD1\u4E3A\u76EE\u6807\u8BED\u8A00","always sites":"\u603B\u662F\u7FFB\u8BD1\u7684\u7F51\u5740","always translate the following sites":"\u5F53\u7F51\u7AD9\u4E3A\u4E0B\u5217\u57DF\u540D\u65F6\uFF0C\u4F1A\u81EA\u52A8\u7FFB\u8BD1\u4E3A\u76EE\u6807\u8BED\u8A00","never sites":"\u6C38\u4E0D\u7FFB\u8BD1\u7684\u7F51\u5740","never translate the following sites":"\u5F53\u7F51\u7AD9\u4E3A\u4E0B\u5217\u57DF\u540D\u65F6\uFF0C\u5C06\u4E0D\u4F1A\u8FDB\u884C\u7FFB\u8BD1","please refer to":"\u9700\u8981\u586B\u5199\u5BC6\u94A5\u540E\u624D\u53EF\u7528\uFF0C\u8BE6\u60C5\u53C2\u8003",KeyAndConfigurationTutorial:"\u300A\u5BC6\u94A5\u7533\u8BF7\u548C\u914D\u7F6E\u6559\u7A0B\u300B",useAboveStyleForTheseSites:"\u5F53\u7F51\u7AD9\u4E3A\u4E0B\u5217\u57DF\u540D\u65F6\uFF0C\u603B\u662F\u4F7F\u7528 \u2308{theme}\u230B \u8BD1\u6587\u6837\u5F0F",currentUrl:"\u5F53\u524D\u7F51\u5740",confirm:"\u4FDD\u5B58",cancel:"\u53D6\u6D88",delete:"\u5220\u9664","languages.auto":"\u81EA\u52A8\u68C0\u6D4B",syncToCloud:"\u540C\u6B65\u5230 Google Drive",syncToCloudDescription:"\u4E0A\u4F20\u5230\u4E91\u7AEF\uFF0C\u53EF\u4EE5\u5728\u4E0D\u540C\u7684\u6D4F\u89C8\u5668/\u6CB9\u7334\u811A\u672C\u4E4B\u95F4\u540C\u6B65\u914D\u7F6E\uFF0C\u4EE5\u6700\u540E\u4FEE\u6539\u65F6\u95F4\u4E3A\u51C6\u3002",syncToAccount:"\u540C\u6B65\u5230\u6C89\u6D78\u5F0F\u7FFB\u8BD1\u4E91\u7AEF",syncToAccountButton:"\u7ACB\u5373\u4E0E\u4E91\u7AEF\u540C\u6B65",syncToAccountDescription:"\u5728\u4E0D\u540C\u7684\u8BBE\u5907\u4E4B\u95F4\u81EA\u52A8\u540C\u6B65\u914D\u7F6E\uFF0C\u4EE5\u6700\u540E\u4FEE\u6539\u65F6\u95F4\u4E3A\u51C6\u3002",successSyncConfigInAccount:"\u6210\u529F\u4E0E\u4E91\u7AEF\u4FDD\u6301\u540C\u6B65",successSyncConfigToAccount:"\u6210\u529F\u540C\u6B65\u5230\u4E91\u7AEF",syncConfigNoUpdate:"\u5DF2\u7ECF\u662F\u6700\u65B0\u7684\u4E86",authFail:"\u6388\u6743\u5931\u8D25",syncTitle:"\u624B\u52A8\u5907\u4EFD\u7BA1\u7406",import_hint:"\u5BFC\u5165",upload:"\u4E0A\u4F20",revokeAuth:"\u64A4\u9500\u6388\u6743",uploadFail:"\u4E0A\u4F20\u5931\u8D25",download:"\u4E0B\u8F7D",importSuccess:"\u5BFC\u5165\u6210\u529F",importFail:"\u5BFC\u5165\u5931\u8D25",deleteFail:"\u5220\u9664\u5931\u8D25",backupToCloud:"\u624B\u52A8\u7BA1\u7406\u5907\u4EFD\u6587\u4EF6",create_new_backup:"\u65B0\u589E\u5907\u4EFD\u8282\u70B9",maxBackupFiles:"\u6700\u591A\u53EF\u4EE5\u5907\u4EFD{count}\u4E2A\u4E0D\u540C\u7684\u8282\u70B9, \u8BF7\u5220\u9664\u4E0D\u9700\u8981\u7684\u8282\u70B9",backupToCloudDescription:"\u624B\u52A8\u4E0A\u4F20\u6216\u6062\u590D\u5907\u4EFD\u6587\u4EF6\uFF0C\u6700\u591A\u5141\u8BB83\u4E2A\u4E0D\u540C\u7684\u5907\u4EFD",successSyncConfig:"\u6210\u529F\u4E0E\u4E91\u7AEF\u4FDD\u6301\u540C\u6B65",syncFail:"\u540C\u6B65\u5931\u8D25",updatedAt:"\u66F4\u65B0\u4E8E {date}",lastSyncedAt:"\u4E0A\u6B21\u68C0\u67E5\u4E8E {date}",downloadFail:"\u4E0B\u8F7D\u5931\u8D25",clickToDownload:"\u70B9\u51FB\u4E0B\u8F7D",aboutLabel:"\u5173\u4E8E - \u53CD\u9988","browser.openAboutPage":"\u5173\u4E8E/\u53CD\u9988",aboutLabelWithoutSponsor:"\u5173\u4E8E - \u53CD\u9988",aboutIntro:"\u5E0C\u671B\u6211\u4EEC\u90FD\u80FD\u66F4\u52A0\u5BB9\u6613\u4E14\u6109\u60A6\u5730\u83B7\u53D6\u4E92\u8054\u7F51\u4E0A\u5DE8\u5927\u7684\u5916\u8BED\u4FE1\u606F \u2764\uFE0F \u4F60\u53EF\u9009\u62E9\u5F00\u901A <6>Pro\u4F1A\u5458</6> \u6765\u4F7F\u7528\u5F00\u7BB1\u5373\u7528\u7684 DeepL \u548C OpenAI \u7FFB\u8BD1\u3002 <br/><br/>\u4F60\u53EF\u4EE5\u5173\u6CE8\u6211\u4EEC\u7684<3>\u63A8\u7279</3>\uFF0C<4>Telegram \u9891\u9053</4>\uFF0C\u5FAE\u4FE1\u516C\u4F17\u53F7\uFF0C\u5FAE\u4FE1\u4EA4\u6D41\u7FA4\uFF0C\u6216\u8005\u4E0B\u65B9\u7684<5>\u90AE\u4EF6\u8BA2\u9605</5>\u8FFD\u8E2A\u66F4\u65B0\u3002<br/> <7>Pro \u4F1A\u5458</7> \u53EF\u4EE5\u901A\u8FC7\u5FEB\u901F\u5BA2\u670D\u90AE\u7BB1 <8>support@immersivetranslate.com</8> \u548C\u6211\u4EEC\u53D6\u5F97\u8054\u7CFB\u3002",aboutIntroWithoutSponsor:"\u5E0C\u671B\u6211\u4EEC\u90FD\u80FD\u66F4\u52A0\u5BB9\u6613\u4E14\u6109\u60A6\u5730\u83B7\u53D6\u4E92\u8054\u7F51\u4E0A\u5DE8\u5927\u7684\u5916\u8BED\u4FE1\u606F \u2764\uFE0F  <br/><br/>\u4F60\u53EF\u4EE5\u5173\u6CE8\u6211\u4EEC\u7684<3>\u63A8\u7279</3>\uFF0C<4>Telegram \u9891\u9053</4>\uFF0C\u5FAE\u4FE1\u516C\u4F17\u53F7\uFF0C\u5FAE\u4FE1\u4EA4\u6D41\u7FA4\uFF0C\u6216\u8005\u4E0B\u65B9\u7684<5>\u90AE\u4EF6\u8BA2\u9605</5>\u8FFD\u8E2A\u66F4\u65B0\u3002",projectHomepage:"\u9879\u76EE\u4E3B\u9875",joinTelegramGroup:"\u52A0\u5165\u7528\u6237\u4EA4\u6D41\u7FA4\u53C2\u4E0E\u529F\u80FD\u8BA8\u8BBA",wechatPublicAccount:"\u5FAE\u4FE1\u516C\u4F17\u53F7",wechatCommunities:"\u5FAE\u4FE1\u4EA4\u6D41\u7FA4",qqCommunities:"QQ \u4EA4\u6D41\u9891\u9053",joinTelegramChannel:"\u5173\u6CE8 Telegram \u9891\u9053\u83B7\u53D6\u6700\u65B0\u66F4\u65B0",feedbackAndJoin:"\u95EE\u9898\u53CD\u9988/\u52A0\u7FA4",autoSync:"\u81EA\u52A8\u5B9A\u65F6\u540C\u6B65",loadingThemeTitle:"Loading \u6837\u5F0F",loadingThemeDescription:"\u8BBE\u7F6E\u7B49\u5F85\u8BD1\u6587\u52A0\u8F7D\u65F6\u7684\u6837\u5F0F","loadingTheme.spinner":"\u8F6C\u5708\u52A8\u753B","loadingTheme.text":"\u9759\u6001\u6587\u5B57 ... ","loadingTheme.none":"\u4E0D\u663E\u793A",developerDescription:"\u53EF\u4EE5\u70B9\u51FB<1>\u8FD9\u91CC</1>\u67E5\u770B\u9AD8\u7EA7\u81EA\u5B9A\u4E49\u76F8\u5173\u7684\u6587\u6863","edit border color":"\u4FEE\u6539\u8FB9\u6846\u989C\u8272",successSyncButNoChange:"\u5F53\u524D\u914D\u7F6E\u4E0E\u4E91\u7AEF\u4E00\u81F4",customTheme:"\u81EA\u5B9A\u4E49\u989C\u8272\u548C\u5927\u5C0F","customThemeLabel.borderColor":"\u8FB9\u6846\u989C\u8272","customThemeLabel.borderRadius":"\u8FB9\u6846\u5706\u89D2","customThemeLabel.textColor":"\u6587\u5B57\u989C\u8272","customThemeLabel.backgroundColor":"\u80CC\u666F\u989C\u8272","customThemeLabel.zoom":"\u5B57\u4F53\u7F29\u653E\u6BD4\u4F8B (%)","customThemeLabel.opacity":"\u6587\u5B57\u4E0D\u900F\u660E\u5EA6 (%)",resetToDefaultColor:"\u6062\u590D\u4E3A\u9ED8\u8BA4\u989C\u8272",resetToDefaultSettings:"\u6062\u590D\u4E3A\u9ED8\u8BA4\u8BBE\u7F6E",isTranslateTitle:"\u5F00\u542F\u7FFB\u8BD1\u7F51\u9875\u6807\u9898",isTranslateTitleDescription:"\u5F00\u542F\u540E\uFF0C\u7F51\u9875\u6807\u9898\u4F1A\u88AB\u7FFB\u8BD1",enableSearchEnhancement:"\u542F\u7528\u53CC\u8BED\u4FE1\u606F\u589E\u5F3A",enableSearchEnhancementDescription:"\u5F00\u542F\u540E\uFF0C\u5728\u652F\u6301\u7684\u7F51\u7AD9\uFF08\u8C37\u6B4C\u65B0\u95FB\uFF0C\u8C37\u6B4C\u641C\u7D22\uFF08\u90E8\u5206\u5173\u952E\u8BCD\uFF09\uFF0C\u96EA\u7403\uFF0C\u4E1C\u65B9\u8D22\u5BCC\uFF0C\u5BCC\u9014\uFF0C\u8001\u864E\u793E\u533A\uFF09\u53F3\u8FB9\u680F\u81EA\u52A8\u663E\u793A\u5BF9\u5E94\u82F1\u6587\u5173\u952E\u8BCD\u7684\u201C\u8C37\u6B4C\u65B0\u95FB\u201D\u641C\u7D22\u7ED3\u679C\u3002",verifyService:"\u70B9\u6B64\u6D4B\u8BD5\u670D\u52A1",verified:"\u9A8C\u8BC1\u6210\u529F","field.langs":"\u652F\u6301\u7684\u8BED\u8A00\u4EE3\u7801","field.model":"\u6A21\u578B","field.translationEngine":"\u7FFB\u8BD1\u5F15\u64CE","field.limitPerMinute":"\u6BCF\u5206\u949F\u6700\u5927\u8BF7\u6C42\u6570","field.limitPerSecond":"\u6BCF\u79D2\u6700\u5927\u8BF7\u6C42\u6570","field.maxTextLengthPerRequest":"\u6BCF\u6B21\u8BF7\u6C42\u6700\u5927\u6587\u672C\u957F\u5EA6","field.maxTextGroupLengthPerRequest":"\u6BCF\u6B21\u8BF7\u6C42\u6700\u5927\u6BB5\u843D\u6570","field.apiUrl":"\u81EA\u5B9A\u4E49 API \u63A5\u53E3\u5730\u5740","field.placeholderDelimiters":"\u4FDD\u7559\u7684\u5360\u4F4D\u7B26","description.custom":"<a href='https://immersivetranslate.com/docs/services/custom/' target='_blank'>\u81EA\u5B9A\u4E49\u63A5\u53E3\u63A5\u5165</a> \u9700\u8981\u53C2\u8003\u6587\u6863","description.limitPerMinute":"\u8BF7\u6C42\u6570\u8D85\u8FC7\u8BE5\u9650\u5236\u65F6\u4F1A\u8FDB\u5165\u6392\u961F\u72B6\u6001\uFF0C\u76F4\u5230\u4E0B\u4E00\u5206\u949F\u5F00\u59CB\u3002\u7531\u4E8EOpenAI\u76EE\u524D\u670D\u52A1\u7684\u5404\u79CD\u9650\u5236\uFF0C\u8BF7\u70B9\u51FB<1>\u8FD9\u91CC</1>\u67E5\u770B\u6700\u65B0\u5EFA\u8BAE\u7684\u6570\u503C","description.limitPerSecond":"\u8BF7\u6C42\u6570\u8D85\u8FC7\u8BE5\u9650\u5236\u65F6\u4F1A\u8FDB\u5165\u6392\u961F\u72B6\u6001\uFF0C\u76F4\u5230\u4E0B\u4E00\u79D2\u949F\u5F00\u59CB\u3002\u7531\u4E8EOpenAI\u76EE\u524D\u670D\u52A1\u7684\u5404\u79CD\u9650\u5236\uFF0C\u8BF7\u70B9\u51FB<1>\u8FD9\u91CC</1>\u67E5\u770B\u6700\u65B0\u5EFA\u8BAE\u7684\u6570\u503C","description.generalLimitPerSecond":"\u8BF7\u6C42\u6570\u8D85\u8FC7\u8BE5\u9650\u5236\u65F6\u4F1A\u8FDB\u5165\u6392\u961F\u72B6\u6001\uFF0C\u76F4\u5230\u4E0B\u4E00\u79D2\u949F\u5F00\u59CB\u3002","description.prompt":"\u4EE5\u7528\u6237\u8EAB\u4EFD\u53D1\u9001\u7ED9 OpenAI \u7684\u5BF9\u8BDD\uFF0C\u5176\u4E2D {{text}} \u8868\u793A\u6BB5\u843D\u7684\u6587\u672C\u5185\u5BB9\uFF0C{{from}} \u8868\u793A\u6BB5\u843D\u7684\u8BED\u8A00\uFF0C{{to}} \u8868\u793A\u76EE\u6807\u8BED\u8A00,\u53EF\u4EE5\u7701\u7565 {{text}} \uFF08\u63A8\u8350\uFF09, \u5C06\u4F1A\u5728\u5355\u72EC\u4F5C\u4E3A\u4E00\u6BB5\u53D1\u9001\u7ED9 OpenAI","description.maxTextLengthPerRequest":"\u6BCF\u6B21\u8BF7\u6C42\u6700\u5927\u5B57\u7B26\u6570\uFF0C\u592A\u5927\u4F1A\u5BFC\u81F4\u63A5\u53E3\u7684\u54CD\u5E94\u53D8\u6162\uFF0C\u56E0\u6B64\u53EF\u4EE5\u5C1D\u8BD5\u8C03\u6574\u8BE5\u9009\u9879\u6765\u4F18\u5316\u901F\u5EA6","description.systemPrompt":"\u4EE5\u7CFB\u7EDF\u8EAB\u4EFD\u53D1\u9001\u7ED9 OpenAI \u7684\u5BF9\u8BDD\uFF0C\u5176\u4E2D {{text}} \u8868\u793A\u6BB5\u843D\u7684\u6587\u672C\u5185\u5BB9\uFF0C{{from}} \u8868\u793A\u6BB5\u843D\u7684\u8BED\u8A00\uFF0C{{to}} \u8868\u793A\u76EE\u6807\u8BED\u8A00","field.domain":"\u9886\u57DF","description.domain":"\u9ED8\u8BA4\u4E3A\uFF1Ageneral\u3002\u4EC5\u5728\u6709\u9053API\u63A7\u5236\u53F0\u5F00\u901A\u9886\u57DF\u5316\u7FFB\u8BD1\u7684\u60C5\u51B5\u4E0B\u53EF\u8BBE\u7F6E\uFF0C\u652F\u6301\u9886\u57DF\u89C1<1>\u8FD9\u91CC</1>","field.scene":"\u573A\u666F","description.scene":"\u9ED8\u8BA4\u4E3A\uFF1Ageneral\u3002\u4EC5\u5728\u963F\u91CC\u4E91API\u63A7\u5236\u53F0\u5F00\u901A\u673A\u5668\u7FFB\u8BD1\u4E13\u4E1A\u7248\u7684\u60C5\u51B5\u4E0B\u53EF\u8BBE\u7F6E\uFF0C\u652F\u6301\u573A\u666F\u89C1<1>\u8FD9\u91CC</1>","field.vocabId":"\u7528\u6237\u8BCD\u5178 ID","description.vocabId":"\u6307\u5B9A\u7684\u8BCD\u5178 out_id\uFF0C\u76EE\u524D\u652F\u6301\u82F1\u8BD1\u4E2D","description.model":"OpenAI \u7684\u6A21\u578B\uFF0C\u53EF\u4EE5\u4E3A gpt-3.5-turbo, gpt-4 \u7B49","description.maxTextGroupLengthPerRequest":"\u6BCF\u6B21\u53D1\u9001\u7ED9\u7FFB\u8BD1\u670D\u52A1\u7684\u6BB5\u843D\u6570\u91CF\uFF0C\u5982\u679C\u6BB5\u843D\u6570\u91CF\u8FC7\u591A\uFF0C\u53EF\u80FD\u4F1A\u5BFC\u81F4\u63A5\u53E3\u7684\u54CD\u5E94\u53D8\u6162","description.apiUrl":"\u8BF7\u6DFB\u52A0\u5177\u4F53\u5E26\u6709\u8DEF\u5F84\u7684\u7F51\u5740\uFF0C<1>\u66F4\u591A\u8BF4\u660E</1>",enabledExtension:"\u542F\u7528\u6269\u5C55",clickToDisableExtension:"\u70B9\u51FB\u7981\u7528\u6269\u5C55",clickToEnableExtension:"\u70B9\u51FB\u542F\u7528\u6269\u5C55",hasBeenDisabled:"\u5DF2\u7981\u7528","show password":"\u663E\u793A\u5BC6\u7801",customContent:"\u8F93\u5165\u81EA\u5B9A\u4E49\u6A21\u578B\u540D\u79F0",inputOptions:"\u8F93\u5165\u6846\u589E\u5F3A",mouseHoverOptions:"\u9F20\u6807\u60AC\u505C",modifyMouseHoverKey:"\u4FEE\u6539\u9F20\u6807\u60AC\u505C\u5FEB\u6377\u952E",enableInputTranslation:"\u662F\u5426\u542F\u7528\u8F93\u5165\u6846\u589E\u5F3A",enableInputTranslationDescription:"\u542F\u7528\u540E\uFF0C\u5728\u8F93\u5165\u6846\u76F4\u63A5\u8F93\u5165 {startingKey}{startingKey} \u4F60\u597D\uFF0C\u7136\u540E\u5FEB\u901F\u8FDE\u51FB{inputTrailingTriggerKeyRepeatTimes}\u6B21{trailingKey}\uFF0C\u5373\u53EF\u7FFB\u8BD1\u4E3A {inputTargetLanguage}",enableInputTranslationDescriptionForNoneKey:"\u542F\u7528\u540E\uFF0C\u5728\u8F93\u5165\u6846\u76F4\u63A5\u8F93\u5165\uFF1A\u4F60\u597D\u4E16\u754C\uFF0C\u7136\u540E\u5FEB\u901F\u8FDE\u51FB{inputTrailingTriggerKeyRepeatTimes}\u6B21{trailingKey}\uFF0C\u5373\u53EF\u7FFB\u8BD1\u4E3A\u9ED8\u8BA4\u76EE\u6807\u8BED\u8A00",inputTargetLanguage:"\u8BBE\u7F6E\u8F93\u5165\u6846\u7684\u9ED8\u8BA4\u76EE\u6807\u8BED\u8A00",inputTargetLanguageDescription:"\u8F93\u5165\u6846\u7FFB\u8BD1\u7684\u9ED8\u8BA4\u76EE\u6807\u8BED\u8A00\uFF0C\u4E5F\u5C31\u662F {startingKey}{startingKey} \u4F5C\u4E3A\u89E6\u53D1\u8BCD\u7684\u9ED8\u8BA4\u8BED\u8A00",inputTargetLanguageDescriptionForNoneKey:"\u8F93\u5165\u6846\u7FFB\u8BD1\u7684\u9ED8\u8BA4\u76EE\u6807\u8BED\u8A00",inputStartingTriggerKeyTitle:"\u8BBE\u7F6E\u8F93\u5165\u6846\u90E8\u5206\u7FFB\u8BD1\u7684\u5206\u5272\u5B57\u7B26",inputStartingTriggerKeyDescription:"\u5F53\u4F60\u4E0D\u9700\u8981\u7FFB\u8BD1\u6574\u4E2A\u8F93\u5165\u6846\u7684\u65F6\u5019\uFF0C\u5206\u5272\u7B26\u5141\u8BB8\u4F60\u53EA\u7FFB\u8BD1 {startingKey}{startingKey} \u5230\u8F93\u5165\u6846\u672B\u5C3E\u7684\u90E8\u5206\uFF0C\u4E5F\u53EF\u4EE5\u6307\u5B9A\u8BED\u8A00\u4EE3\u7801\uFF0C\u6BD4\u5982\uFF1A{startingKey}ja \u8868\u793A\u53EA\u7FFB\u8BD1 {startingKey}ja \u5230\u8F93\u5165\u6846\u672B\u5C3E\u7684\u90E8\u5206",inputStartingTriggerKeyDescriptionForNoneKey:"\u5F53\u524D\u8BBE\u7F6E\u4E3A\u65E0\u9700\u524D\u7F00\uFF0C\u6682\u65E0\u6CD5\u4F7F\u7528\u8F93\u5165\u6846\u7684\u90E8\u5206\u6587\u672C\u7FFB\u8BD1\u529F\u80FD",inputTrailingTriggerKeyTitle:"\u9009\u62E9\u4E00\u4E2A\u8F93\u5165\u7ED3\u675F\u7684\u89E6\u53D1\u5B57\u7B26",inputTrailingTriggerKeyDescription:"\u5FEB\u901F\u8FDE\u51FB 3 \u6B21{trailingKey} \u5C06\u4F1A\u5F00\u59CB\u7FFB\u8BD1",inputTrailingTriggerKeyTimeout:"\u8F93\u5165\u7ED3\u675F\u8FDE\u51FB\u89E6\u53D1\u7684\u95F4\u9694\u65F6\u95F4",inputTrailingTriggerKeyTimeoutDescription:"\u8BBE\u7F6E\u8F93\u5165\u7ED3\u675F\u8FDE\u51FB\u89E6\u53D1\u7684\u95F4\u9694\u65F6\u95F4\uFF08\u6BEB\u79D2\uFF09",spaceKey:"<\u7A7A\u683C\u952E>",noneKey:"\u65E0\u9700\u524D\u7F00\uFF0C\u76F4\u63A5\u7FFB\u8BD1\u6574\u4E2A\u6587\u672C\u6846",inputTranslationBlockUrlsTitle:"\u5207\u52FF\u5728\u4EE5\u4E0B\u7F51\u5740\u4E2D\u542F\u7528\u8F93\u5165\u6846\u589E\u5F3A",inputTranslationBlockUrlsDescription:"\u5728\u4EE5\u4E0B\u7F51\u5740\u4E2D\uFF0C\u8F93\u5165\u6846\u589E\u5F3A\u5C06\u4E0D\u4F1A\u751F\u6548",clickToSeeQuickDemo:"\u70B9\u51FB\u5C55\u5F00 30 \u79D2\u5FEB\u901F\u6559\u5B66\u89C6\u9891",inputHelperInfo:"\u8BF4\u660E\uFF1A\u6211\u4EEC\u7279\u522B\u9488\u5BF9\u5728\u4E2D\u6587\u8F93\u5165\u6CD5\u4E0B\u90E8\u5206\u89E6\u53D1\u5B57\u7B26\u4F1A\u53D8\u6210\u4E2D\u6587\u6807\u70B9\u7B26\u53F7\u8FD9\u4EF6\u4E8B\u505A\u4E86\u4F18\u5316\uFF0C\u6BD4\u5982\u641C\u72D7\u8F93\u5165\u6CD5\u4E0B / \u4F1A\u53D8\u6210\u987F\u53F7 \u3001\uFF0C\u6C89\u6D78\u5F0F\u7FFB\u8BD1\u652F\u6301\u6240\u6709\u89E6\u53D1\u7B26\u5BF9\u5E94\u7684\u4E2D\u6587\u7B26\u53F7\uFF0C\u4E5F\u5C31\u662F\u8BF4 // \u3001\u3001 \u90FD\u4F1A\u88AB\u8BC6\u522B\u4E3A\u89E6\u53D1\u5B57\u7B26\u3002<br/><br/>\u540C\u65F6\u6211\u4EEC\u4E5F\u652F\u6301\u8BED\u8A00\u4EE3\u7801\u7684\u4E2D\u6587\u522B\u540D\u4F5C\u4E3A\u547D\u4EE4\uFF0C\u6BD4\u5982 /\u65E5\u6587 \u4F60\u597D\u4E16\u754C \u4F1A\u88AB\u7FFB\u8BD1\u4E3A\u65E5\u6587\uFF0C<1>\u70B9\u6B64\u67E5\u770B\u6240\u6709\u652F\u6301\u7684\u8BED\u8A00\u4EE3\u7801</1>\u3002",reloadCurrentPage:"\u8BF7\u5148\u5237\u65B0\u5F53\u524D\u9875\u9762\uFF0C\u518D\u5F00\u59CB\u7FFB\u8BD1",noLocalFilePermissionForPDF:"\u6682\u65E0\u6743\u9650\u8BFB\u53D6\u672C\u5730\u6587\u4EF6\uFF0C\u8BF7\u70B9\u51FB\u4E0A\u65B9\u6309\u94AE\uFF0C\u7136\u540E\u5BFC\u5165\u672C\u5730\u6587\u4EF6",noPermissionForThisPage:"\u26A0\uFE0F \u6682\u65E0\u6743\u9650\u7FFB\u8BD1\u5F53\u524D\u9875\u9762",retryAllParagraphs:"\u91CD\u8BD5\u5168\u90E8\u9519\u8BEF\u6BB5\u843D",retryAllButton:"\u91CD\u8BD5\u5168\u90E8\u9519\u8BEF\u6BB5\u843D",errorTooltipTitle:"\u70B9\u51FB\u67E5\u770B\u9519\u8BEF\u539F\u56E0",errorModalTitle:"\u7FFB\u8BD1\u670D\u52A1\u6216\u7F51\u7EDC\u4F3C\u4E4E\u51FA\u4E86\u70B9\u95EE\u9898...",disableConfirm:"\u53CC\u8BED\u4FE1\u606F\u589E\u5F3A\u8BBE\u7F6E",disableOnce:"\u672C\u6B21\u7981\u7528",disableGlobal:"\u6C38\u4E45\u7981\u7528",disableTint:"* \u4F60\u53EF\u4EE5\u5728 {option} \u4E2D\u91CD\u65B0\u542F\u7528\u3002",searchEnhancementNotes:"\u6211\u4EEC\u53D1\u73B0\uFF0C\u4E2D\u6587\u5173\u952E\u8BCD\u548C\u82F1\u6587\u5173\u952E\u8BCD\u7684\u65B0\u95FB\u7ED3\u679C\u6709\u975E\u5E38\u5927\u7684\u4E0D\u540C\uFF0C\u5728\u542F\u7528\u6C89\u6D78\u5F0F\u7FFB\u8BD1\u53CC\u8BED\u4FE1\u606F\u589E\u5F3A\u529F\u80FD\u540E\uFF0C\u6211\u4EEC\u4F1A\u5728\u652F\u6301\u7684\u7F51\u7AD9\uFF08\u8C37\u6B4C\u65B0\u95FB\uFF0C\u8C37\u6B4C\u641C\u7D22\uFF08\u90E8\u5206\u5173\u952E\u8BCD\uFF09\uFF0C\u96EA\u7403\uFF0C\u4E1C\u65B9\u8D22\u5BCC\u7F51\uFF0C\u5BCC\u9014\uFF0C\u8001\u864E\uFF09\u81EA\u52A8\u7528\u82F1\u6587\u4E3A\u4F60\u641C\u7D22\u540C\u6837\u7684\u5173\u952E\u8BCD\u5E76\u5C55\u793A\u5728\u53F3\u4FA7\u3002\u5982\u679C\u4F60\u4E0D\u9700\u8981\u8BE5\u529F\u80FD\u7684\u8BDD\uFF0C\u53EF\u4EE5\u9009\u62E9\u7981\u7528\u5B83\u3002",option:"\u8BBE\u7F6E",saveSettings:"\u4FDD\u5B58\u8BBE\u7F6E",closeModal:"\u5173\u95ED\u7A97\u53E3",enableInputTranslationWithoutTriggerKeyTitle:"\u542F\u7528\u5FEB\u901F\u8FDE\u51FB 3 \u6B21{trailingKey}\uFF0C\u76F4\u63A5\u7FFB\u8BD1\u6574\u4E2A\u8F93\u5165\u6846\u4E3A{inputTargetLanguage}",enableInputTranslationWithoutTriggerKeyDescription:"\u5982\u9700\u6307\u5B9A\u76EE\u6807\u8BED\u8A00\uFF0C\u8BF7\u5728\u524D\u9762\u52A0\u4E0A\u8BED\u8A00\u4EE3\u7801\uFF0C\u5982\uFF1Aja \u4F60\u597D\u4E16\u754C",mouseHoverShortcutPlaceholder:"\u5982\uFF1AShift",deepLProName:"\u6C89\u6D78\u5F0F\u7FFB\u8BD1 Pro \u4F1A\u5458 (\u63A8\u8350)",deepLProDescription:"\u5F53\u524D\u5957\u9910\u53EF\u4EE5\u76F4\u63A5\u4F7F\u7528",deeplProDescriptionForNormal:"\u65E0\u9700\u4EFB\u4F55\u8BBE\u7F6E\uFF0C\u4F1A\u5458\u767B\u5F55\u540E\u5373\u53EF\u4F7F\u7528\uFF0C<1>\u70B9\u6B64\u5347\u7EA7\u4E3A\u4F1A\u5458</1>",deepLCustomDescription:"\u9700\u8981\u56FD\u5916\u4FE1\u7528\u5361\uFF0C\u5728 <1>DeepL</1> \u5B98\u65B9\u5F00\u901A\uFF0C\u70B9\u51FB\u67E5\u770B<2>\u6587\u6863</2>",deepLCustomName:"\u81EA\u5B9A\u4E49 Auth Key",chooseProviderLabel:"\u9009\u62E9\u4E00\u4E2A\u670D\u52A1\u63D0\u4F9B\u5546",openaiProName:"\u6C89\u6D78\u5F0F\u7FFB\u8BD1 Pro \u4F1A\u5458 (\u63A8\u8350)",openaiProDescription:"\u5F53\u524D\u5957\u9910\u53EF\u4EE5\u76F4\u63A5\u4F7F\u7528",openaiProDescriptionForNormal:"\u65E0\u9700\u4EFB\u4F55\u8BBE\u7F6E\uFF0C\u4F1A\u5458\u767B\u5F55\u540E\u5373\u53EF\u4F7F\u7528\uFF0C<1>\u70B9\u6B64\u5347\u7EA7\u4E3A\u4F1A\u5458</1>",openaiCustomDescription:"\u53EF\u5728 OpenAI, Azure OpenAI, \u6216\u5176\u4ED6\u7B2C\u4E09\u65B9\u670D\u52A1\u83B7\u53D6\uFF0C<1>\u70B9\u6B64\u67E5\u770B\u6587\u6863</1>",openaiCustomName:"\u81EA\u5B9A\u4E49 API Key",needLoginAction:"(\u5F00\u901A\u4F1A\u5458\u6216\u81EA\u5B9A\u4E49)",goLoginOrAction:"(\u5F00\u901A\u4F1A\u5458\u6216\u53BB\u8BBE\u7F6E)",yearly:"\u8FDE\u7EED\u5305\u5E74",quarterly:"\u8FDE\u7EED\u5305\u5B63",monthly:"\u8FDE\u7EED\u5305\u6708",yearlyForOnce:"\u4E00\u6B21\u6027\u5E74\u5EA6\u5957\u9910",monthlyForOnce:"\u4E00\u6B21\u6027\u6708\u5EA6\u5957\u9910",daily:"\u8FDE\u7EED\u5305\u65E5",year:"\u8FDE\u7EED\u5305\u5E74",quarter:"\u8FDE\u7EED\u5305\u5B63",month:"\u8FDE\u7EED\u5305\u6708",day:"\u8FDE\u7EED\u5305\u65E5",onetime_7day:"7 \u5929\u4F53\u9A8C\u5305",currentPlanDescriptionForFree:"\u5F53\u524D\u5957\u9910\uFF1A\u514D\u8D39",currentPlanDescriptionForContinuous:"\u5F53\u524D\u5957\u9910\uFF1A{plan}\uFF0C\u5C06\u4E8E {endAt} \u81EA\u52A8\u7EED\u8D39",currentPlanDescriptionForAutoRenewCaceling:"\u5F53\u524D\u5957\u9910\uFF1A{plan}\uFF0C\u5C06\u4E8E {endAt} \u5230\u671F\uFF0C\u5230\u671F\u540E\u5C06\u4E0D\u4F1A\u81EA\u52A8\u7EED\u671F",currentYearlyPlanDescriptionForAutoRenewCacelingWithRealPaiedUser:"\u5F53\u524D\u5957\u9910\uFF1A{plan}\uFF0C\u5C06\u4E8E {endAt} \u5230\u671F\uFF0C\u5230\u671F\u540E\u5C06\u4E0D\u4F1A\u81EA\u52A8\u7EED\u671F\u3002<br/><1>\u70B9\u6B64\u7BA1\u7406\u7EED\u8D39\u65B9\u6848</1>",currentYearlyPlanDescriptionForAutoRenewCacelingWithAdmin:"\u5F53\u524D\u5957\u9910\uFF1A{plan}\uFF0C\u5C06\u4E8E {endAt} \u5230\u671F\uFF0C\u5230\u671F\u540E\u5C06\u4E0D\u4F1A\u81EA\u52A8\u7EED\u671F\u3002<br/><1>\u70B9\u6B64\u542F\u7528\u8FDE\u7EED\u5305\u5E74</1>",currentPlanDescriptionForOneTime:"\u5F53\u524D\u5957\u9910\uFF1A{plan}\uFF0C\u5C06\u4E8E {endAt} \u5230\u671F\uFF0C<1>\u70B9\u6B64\u5347\u7EA7\u4E3A\u5E74\u8D39</1>\u6216<2>\u6708\u8D39</2>\u4F1A\u5458",upgradePlan:"\u70B9\u6B64\u5347\u7EA7\u4E3A Pro \u4F1A\u5458",upgradeToPro:"\u5347\u7EA7\u4E3A Pro \u4F1A\u5458","popup.openPro":"\u5347\u7EA7\u4E3A Pro \u4F1A\u5458\u540E\u53EF\u4EE5\u7545\u4EAB DeepL \u548C OpenAI \u7FFB\u8BD1\uFF0C\u70B9\u6B64\u5347\u7EA7","popup.openProForPro":"\u60A8\u662F Pro \u4F1A\u5458\uFF0C\u53EF\u76F4\u63A5\u4F7F\u7528 DeepL \u548C OpenAI \u7FFB\u8BD1",currentAccount:"\u5F53\u524D\u8D26\u6237",enableAutoSyncUserSettings:"\u542F\u7528\u591A\u8BBE\u5907\u81EA\u52A8\u4E91\u540C\u6B65",modalEnableInputTranslationTitle:"\u6C89\u6D78\u5F0F\u7FFB\u8BD1\u8F93\u5165\u6846\u7FFB\u8BD1\u63D0\u793A",modalEnableInputTranslationDesc:"\u60A8\u521A\u521A\u901A\u8FC7\u5FEB\u901F\u8FDE\u51FB 3 \u6B21\u7A7A\u683C\u952E\u89E6\u53D1\u4E86\u6C89\u6D78\u5F0F\u7FFB\u8BD1\u7684\u8F93\u5165\u6846\u7FFB\u8BD1\uFF0C\u8F93\u5165\u6846\u7684\u5185\u5BB9\u5C06\u88AB\u7FFB\u8BD1\u4E3A\u9ED8\u8BA4\u7684\u76EE\u6807\u8BED\u8A00\u3002\u901A\u8FC7 Ctrl+Z \u53EF\u4EE5\u64A4\u9500\u7FFB\u8BD1\u3002<br /><br />\u5982\u679C\u8FD9\u662F\u4E00\u4E2A\u5931\u8BEF\uFF0C\u4E0D\u7528\u62C5\u5FC3\uFF0C\u60A8\u53EF\u4EE5\u9009\u62E9\u672C\u6B21\u7981\u7528\uFF0C\u6216\u8005\u6C38\u4E45\u7981\u7528\u8F93\u5165\u6846\u7FFB\u8BD1\u3002",saveAndNotShowAgain:"\u4FDD\u5B58\u4E14\u4E0D\u518D\u63D0\u793A",disableInputTranslationTips:"* \u4F60\u4E5F\u53EF\u4EE5\u5728 {option} \u4E2D\u8BBE\u7F6E\u5176\u4ED6\u5FEB\u6377\u952E\u6765\u89E6\u53D1\uFF0C{learnMore}\u3002",learnMore:"\u70B9\u6B64\u4E86\u89E3\u66F4\u591A",continueEnalbeInputTranslation:"\u7EE7\u7EED\u542F\u7528\u8F93\u5165\u6846\u7FFB\u8BD1",autoRenewTrialSuffix:'\uFF08\u8BD5\u7528\u4E2D\uFF0C<a href="https://immersivetranslate.com/profile/?upgradeFromTrial=true" id="upgradeFromTrial">\u7ACB\u523B\u5347\u7EA7\u4E3A\u6B63\u5F0F\u4F1A\u5458</a>\uFF09',upgradeFromTrialTitle:"\u5347\u7EA7\u4E3A\u6B63\u5F0F\u4F1A\u5458",subtitle:"\u89C6\u9891\u5B57\u5E55",youtubeService:"\u6C89\u6D78\u5F0F\u7FFB\u8BD1\u89C6\u9891\u5B57\u5E55\u7FFB\u8BD1\u670D\u52A1","subtitle.disabledSubtitle":"\u6C38\u4E45\u7981\u7528\u89C6\u9891\u5B57\u5E55\u529F\u80FD","subtitle.disabledSubtitleDescription":"\u5982\u679C\u6C89\u6D78\u5F0F\u7FFB\u8BD1\u7684\u89C6\u9891\u5B57\u5E55\u548C\u5176\u4ED6\u6269\u5C55\u6709\u51B2\u7A81\uFF0C\u4F60\u53EF\u4EE5\u9009\u62E9\u6C38\u4E45\u7981\u7528\u6C89\u6D78\u5F0F\u7FFB\u8BD1\u7684\u89C6\u9891\u5B57\u5E55\u529F\u80FD\u6216\u8005\u5378\u8F7D\u5176\u4ED6\u51B2\u7A81\u7684\u6269\u5C55","subtitle.autoEnableSubtitle":"\u81EA\u52A8\u4F7F\u7528\u53CC\u8BED\u5B57\u5E55","subtitle.autoEnableSubtitleDescription":"\u542F\u7528\u540E\uFF0C\u5F53\u89C6\u9891\u64AD\u653E\u7684\u65F6\u5019\uFF0C\u4F1A\u81EA\u52A8\u663E\u793A\u53CC\u8BED\u5B57\u5E55\uFF0C\u5426\u5219\u9700\u8981\u70B9\u51FB\u7FFB\u8BD1\u6309\u94AE\u624D\u4F1A\u663E\u793A\u3002","subtitle.preTranslation":"\u4F7F\u7528\u6C89\u6D78\u5F0F\u7FFB\u8BD1\u6765\u7FFB\u8BD1\u5B57\u5E55","subtitle.preTranslationDescription":"\u542F\u7528\u540E\u4F1A\u4F18\u5148\u7528\u4E0B\u9762\u7684\u6307\u5B9A\u7684\u7FFB\u8BD1\u670D\u52A1\u63D0\u524D\u7FFB\u8BD1\u6574\u4E2A\u5B57\u5E55\uFF0C1 \u5C0F\u65F6\u7684\u89C6\u9891\u5927\u6982\u6D88\u8017 5\u4E07 Tokens \u6216 \u5B57\u7B26\uFF0C\u8BF7\u914C\u60C5\u4F7F\u7528\uFF1B\u5173\u95ED\u540E\u5219\u4F18\u5148\u4F7F\u7528\u539F\u89C6\u9891\u81EA\u5E26\u7684\u673A\u7FFB\u5B57\u5E55","subtitle.humanSubtitlesPreferred":"\u4F18\u5148\u4F7F\u7528\u4EBA\u5DE5\u5B57\u5E55","subtitle.humanSubtitlesPreferredDescription":"\u5F53\u89C6\u9891\u6709\u76EE\u6807\u8BED\u8A00\u4EBA\u5DE5\u5B57\u5E55\u65F6\uFF0C\u4F18\u5148\u4F7F\u7528\u4EBA\u5DE5\u5B57\u5E55\uFF08\u63A8\u8350\uFF09",videoSubtitleTranslationDescription:"\u4E3A\u89C6\u9891\u5B57\u5E55\u5355\u72EC\u6307\u5B9A\u4E00\u4E2A\u7FFB\u8BD1\u670D\u52A1",subtitleTranslating:"\u6B63\u5728\u4F7F\u7528 {service} \u670D\u52A1\u7FFB\u8BD1\u5B57\u5E55\u4E2D\uFF0C\u8BF7\u7A0D\u7B49...\uFF08\u6C89\u6D78\u5F0F\u7FFB\u8BD1\uFF09",subtitleLoading:"\u6B63\u5728\u52A0\u8F7D\u5B57\u5E55...",bilingual:"\u53CC\u8BED","field.action":"\u662F\u5426\u542F\u7528\u767E\u5EA6\u672F\u8BED","description.action":"\u542F\u7528\u540E\u4F1A\u5728\u8BF7\u6C42\u4E2D\u52A0\u5165 action=1 \u7684\u53C2\u6570\uFF0C\u4EE5\u4FBF\u544A\u77E5\u767E\u5EA6\u542F\u7528\u672F\u8BED\uFF0C<1>\u66F4\u591A\u8BF4\u660E\u8BF7\u53C2\u8003\u5B98\u65B9\u6587\u6863</1>",closeQuickTranslation:"\u5173\u95ED\u60AC\u6D6E\u7403","closeQuickTranslation.untilNext":"\u672C\u6B21\u5173\u95ED\u76F4\u5230\u4E0B\u6B21\u8BBF\u95EE","closeQuickTranslation.currentWebsite":"\u5F53\u524D\u7F51\u7AD9\u7981\u7528","closeQuickTranslation.alwaysClose":"\u6C38\u4E45\u7981\u7528","closeQuickTranslation.settingOpen":"\uFF08\u53EF\u5728<1>\u8BBE\u7F6E\u9875</1>\u5F00\u542F\uFF09","closeQuickTranslation.cancel":"\u53D6\u6D88","closeQuickTranslation.confirm":"\u786E\u5B9A","floatBall.popup":"\u6253\u5F00\u5FEB\u6377\u8BBE\u7F6E\u9762\u677F","floatBall.translate":"\u70B9\u51FB\u7FFB\u8BD1\u8BE5\u9875\u9762","floatBall.showOriginal":"\u70B9\u51FB\u5207\u6362\u56DE\u539F\u6587","floatBall.close":"\u5173\u95ED\u60AC\u6D6E\u7403","floatBallOptions.enableDescPc":"\u542F\u7528\u9875\u9762\u60AC\u6D6E\u7403\u540E\uFF0C\u4F1A\u5728\u9875\u9762\u53F3\u4FA7\u663E\u793A\u4E00\u4E2A\u5FEB\u6377\u7FFB\u8BD1\u6309\u94AE\uFF0C\u70B9\u51FB\u5373\u53EF\u7FFB\u8BD1","floatBallOptions.enableDesc":"\u5173\u95ED\u60AC\u6D6E\u7403\u540E\uFF0C\u53EF\u4EE5\u7528{touch}\u5524\u8D77\u3002\u4E3A\u9632\u6B62\u4E0D\u614E\u5173\u95ED\u8BE5\u9009\u9879\u540E\u627E\u4E0D\u5230\u60AC\u6D6E\u7403\uFF0C\u5F3A\u70C8\u5EFA\u8BAE\u6536\u85CF\u672C\u8BBE\u7F6E\u9875","description.azureApiUrl":"\u586B\u5199\u81EA\u5B9A\u4E49\u7684API\u63A5\u53E3\u5730\u5740",shareBtnTitle:"\u70B9\u51FB\u5206\u4EAB\u8BE5\u53CC\u8BED\u9875\u9762\u7ED9\u670B\u53CB","floatBall.share":"\u5206\u4EAB\u9875\u9762",confirmSupportMouse:"\u5F3A\u5236\u542F\u7528\u9F20\u6807\u652F\u6301",confirmSupportMouseDescription:"\u68C0\u6D4B\u5230\u5F53\u524D\u6D4F\u89C8\u5668\u4E0D\u652F\u6301\u9F20\u6807\u529F\u80FD\uFF0C\u662F\u5426\u5F3A\u5236\u542F\u7528\u9F20\u6807\u652F\u6301\uFF1F",sampleTargetText:"\u957F\u591C\u5C06\u81F3\uFF0C\u6211\u4ECE\u4ECA\u5F00\u59CB\u5B88\u671B\uFF0C\u81F3\u6B7B\u65B9\u4F11\u3002\u6211\u5C06\u4E0D\u5A36\u59BB\u3001\u4E0D\u5C01\u5730\u3001\u4E0D\u751F\u5B50\u3002\u6211\u5C06\u4E0D\u6234\u5B9D\u51A0\uFF0C\u4E0D\u4E89\u8363\u5BA0\u3002\u6211\u5C06\u5C3D\u5FE0\u804C\u5B88\uFF0C\u751F\u6B7B\u4E8E\u65AF\u3002",sampleSourceText:"Night gathers, and now my watch begins. It shall not end until my death. I shall take no wife, hold no lands, father no children. I shall wear no crowns and win no glory. I shall live and die at my post.","subtitle.supportedSites":"\u5DF2\u652F\u6301\u5728\u8FD9\u4E9B\u7F51\u7AD9\u4F7F\u7528\u53CC\u8BED\u5B57\u5E55\uFF08\u6CE8\u610F\uFF1A\u7531\u4E8E\u6280\u672F\u9650\u5236\uFF0C\u90E8\u5206\u7F51\u7AD9\u5728\u9996\u6B21\u5F00\u542F\u5B57\u5E55\u540E\u9700\u8981\u91CD\u65B0\u5237\u65B0\u9875\u9762\uFF0C\u6216\u8005\u9700\u7B49\u5F85\u7FFB\u8BD1\u5B8C\u6210\u4EE5\u663E\u793A\u53CC\u8BED\u5B57\u5E55\uFF09\uFF1A",viewWithImmersiveTranslate:"\u53CC\u8BED\u7248\u672C(\u6C89\u6D78\u5F0F\u7FFB\u8BD1)"};var pi={nologin:"\u672A\u767B\u9304",loginForSafari:"\u767B\u5165\u6216\u8A3B\u518A",login:"\u767B\u9304",manageAccount:"\u7BA1\u7406\u8CEC\u6236",openPremium:"\u958B\u901A\u6703\u54E1",logout:"\u9000\u51FA",curentPlan:"\u7576\u524D\u5957\u9910",endAt:"\u5230\u671F",endAuto:"\u81EA\u52D5\u7E8C\u671F",lineBreakMaxTextCount:"\u63DB\u884C\u5F8C\uFF0C\u6BCF\u53E5\u8A71\u5141\u8A31\u7684\u6700\u5927\u5B57\u5143\u6578\u91CF","translate-pdf":"\u9EDE\u9078\u7FFB\u8B6F PDF","noSupportTranslate-pdf":"\u8173\u672C\u4E0D\u652F\u63F4\uFF0C\u8ACB\u4F7F\u7528\u64F4\u5145\u5957\u4EF6","translate-firefox-local-pdf":"\u9EDE\u64CA\u53BB\u5C0E\u5165PDF",enableLineBreak:"\u958B\u555F\u9577\u6BB5\u843D\u81EA\u52D5\u63DB\u884C",sponsorLabel:"$1 \u8D77\u8D0A\u52A9\u958B\u767C\u8005 (\u6708\u4ED8\u6216\u50C5\u8D0A\u52A9\u4E00\u6B21\u5747\u53EF)",help:"\u8AAA\u660E",browserShortcutsNoteForFirefox:"Firefox \u700F\u89BD\u5668\u8B8A\u66F4\u5FEB\u901F\u9375\u9700\u8981\u958B\u555F\u9644\u52A0\u5143\u4EF6\u7BA1\u7406\u9801\u9762 \u300Cabout:addons\u300D\uFF0C\u7136\u5F8C\u9EDE\u9078\u300C\u8A2D\u5B9A\u5716\u793A\u300D\uFF0C\u518D\u9EDE\u9078\u300C\u7BA1\u7406\u64F4\u5145\u5957\u4EF6\u5FEB\u901F\u9375\u300D\u5373\u53EF\u8A2D\u5B9A",browserShortcutsNoteForChrome:"Chromium \u6838\u5FC3\u700F\u89BD\u5668\u8B8A\u66F4\u5FEB\u901F\u9375\u9700\u8981\u958B\u555F\u64F4\u5145\u529F\u80FD\u7BA1\u7406\u9801\u9762\uFF0C\u5728\u300C\u9375\u76E4\u5FEB\u901F\u9375\u300D\u9801\u9762(chrome://extensions/shortcuts)\u8A2D\u5B9A\uFF0C\u9EDE\u9078\u4E0B\u65B9\u6309\u9215\u524D\u5F80\u5FEB\u901F\u9375\u7BA1\u7406\u9801\u9762\u3002",browserShortcutsSucks:"\u81EA\u5B9A\u4E49\u5FEB\u901F\u9375\u683C\u5F0F\u70BA\uFF1A (\u6CA1\u6709\u505A\u81EA\u52A8\u8BC6\u522B\uFF0C\u8BF7\u76F4\u63A5\u8F93\u5165)\uFF1A",enableLineBreakDescription:"\u555F\u7528\u5F8C\uFF0C\u5C07\u6703\u5728\u9577\u6BB5\u843D\u4E2D\u6BCF\u53E5\u8A71\u7D50\u675F\u63D2\u5165\u63DB\u884C\u5B57\u5143\uFF0C\u4EE5\u4FBF\u65BC\u95B1\u8B80","browser.shortBrandName":"\u6C89\u6D78\u5F0F\u7FFB\u8B6F","browser.brandName":"\u6C89\u6D78\u5F0F\u7FFB\u8B6F: \u96D9\u8A9E\u5C0D\u7167\u7DB2\u9801\u7FFB\u8B6F & PDF\u6587\u6A94\u7FFB\u8B6F","browser.brandDescription":"\u6C89\u6D78\u5F0F\u7DB2\u9801\u96D9\u8A9E\u7FFB\u8B6F\u64F4\u5C55\uFF0C\u652F\u6301PDF\u7FFB\u8B6F\uFF0C\u96D9\u8A9EEpub\u96FB\u5B50\u66F8\u88FD\u4F5C\uFF0CYoutube/Netflix/Udemy \u7B49\u5E73\u53F0\u96D9\u8A9E\u5B57\u5E55\uFF0C\u652F\u6301Deepl/Google\u7B49\u591A\u500B\u7FFB\u8B6F\u670D\u52D9\uFF0C\u514D\u8CBB\u4F7F\u7528\u3002","browser.toggleTranslatePage":"\u7FFB\u8B6F\u7DB2\u9801/\u986F\u793A\u539F\u6587","browser.toggleTranslateTheWholePage":"\u7FFB\u8B6F\u9801\u9762\u5168\u90E8\u5340\u57DF/\u986F\u793A\u539F\u6587","browser.toggleOnlyTransation":"\u7FFB\u8B6F\u4E26\u96B1\u85CF\u539F\u6587/\u986F\u793A\u539F\u6587","browser.toggleTranslateToThePageEndImmediately":"\u7ACB\u5373\u7FFB\u8B6F\u5230\u9801\u9762\u5E95\u90E8/\u986F\u793A\u539F\u6587","browser.toggleTranslateTheMainPage":"\u7FFB\u8B6F\u9801\u9762\u4E3B\u8981\u5340\u57DF/\u986F\u793A\u539F\u6587","browser.shareToDraft":"\u5206\u4EAB\u96D9\u8A9E\u9801\u9762","browser.openOptionsPage":"\u958B\u555F\u8A2D\u5B9A\u9801\u9762","browser.toggleTranslationMask":"\u986F\u793A/\u96B1\u85CF\u8B6F\u6587\u6A21\u7CCA\u6548\u679C","browser.translateLocalPdfFile":"\u7FFB\u8B6F\u672C\u6A5F PDF \u6A94\u6848","browser.openEbookViewer":"\u95B1\u8B80\u672C\u6A5F\u96FB\u5B50\u66F8","browser.openEbookBuilder":"\u88FD\u4F5C\u96D9\u8A9E EPUB \u96FB\u5B50\u66F8","browser.translateLocalHtmlFile":"\u7FFB\u8B6F HTML/txt \u6A94\u6848","browser.donateContext":"\u4E86\u89E3\u8D0A\u52A9\u798F\u5229","browser.translateLocalSubtitleFile":"\u7FFB\u8B6F\u5B57\u5E55\u6A94\u6848",confirmResetConfig:"\u4F60\u78BA\u5B9A\u8981\u91CD\u8A2D\u8A2D\u5B9A\u55CE\uFF1F",translationLineBreakSettingTitle:"\u8B6F\u6587\u63DB\u884C\u8A2D\u5B9A",smartLineBreak:"\u667A\u6167\u63DB\u884C",alwaysLineBreak:"\u7E3D\u662F\u63DB\u884C",isShowContextMenu:"\u5C07\u7DB2\u9801\u7FFB\u8B6F\u529F\u80FD\u52A0\u5165\u53F3\u9375\u9078\u55AE",toggleBeta:"\u958B\u555F Beta \u6E2C\u8A66\u529F\u80FD",betaDescription:"\u555F\u7528\u4ECD\u5728\u5BE6\u9A57\u7684\u529F\u80FD\u4EE5\u53CA\u6E2C\u8A66\u4E2D\u7684\u7FFB\u8B6F\u670D\u52D9\u3002\u52A0\u5165 <1>Telegram \u7FA4\u7D44</1>\u4E86\u89E3\u66F4\u591A\u3002",translationLineBreakSettingDescription:"\u7E3D\u662F\u63DB\u884C\u9069\u7528\u65BC\u8F03\u5C11\u5167\u5BB9\u7684\u7248\u9762\uFF0C\u66F4\u6574\u9F4A\u3002(\u5728\u5167\u5BB9\u8F03\u591A\u7684\u9577\u6BB5\u843D(\u8D85\u904E {count} \u500B\u5B57\u5143) \u4F7F\u7528\u667A\u6167\u63DB\u884C\u6703\u66F4\u7701\u7A7A\u9593)",tempTranslateDomainTitle:"\u81E8\u6642\u958B\u555F\u7DB2\u7AD9\u7FFB\u8B6F\u7684\u6642\u9577",tempTranslateDomainDescription:"\u7576\u624B\u52D5\u7FFB\u8B6F\u67D0\u500B\u7DB2\u9801\u7684\u6642\u5019\uFF0C\u81E8\u6642\u958B\u555F\u8A72\u7DB2\u7AD9\u70BA\u81EA\u52D5\u7FFB\u8B6F",xMinutes:"{count} \u5206\u9418",disabled:"\u505C\u7528",changelog:"\u66F4\u65B0\u8A18\u9304",toggleTranslatePageWhenThreeFingersOnTheScreen:"\u591A\u6307\u540C\u6642\u89F8\u6478\u87A2\u5E55\u5247\u7FFB\u8B6F\u7DB2\u9801/\u986F\u793A\u539F\u6587",toggleTranslationMaskWhenThreeFingersOnTheScreen:"\u591A\u6307\u540C\u6642\u89F8\u6478\u5247\u986F\u793A/\u96B1\u85CF\u8B6F\u6587\u6A21\u7CCA\u6548\u679C",fingerCountToToggleTranslagePageOnlyTranslationWhenTouching:"\u591A\u6307\u540C\u6642\u89F8\u78B0\u87A2\u5E55\u5247\u7FFB\u8B6F\u7DB2\u9801(\u50C5\u8B6F\u6587)/\u986F\u793A\u539F\u6587",addUrlDescription:"\u53EF\u4EE5\u70BA\u7DB2\u57DF\u540D\u7A31\uFF0C\u540C\u6642\u652F\u63F4\u842C\u7528\u5B57\u5143\uFF0C\u5982\uFF1A*.google.com, google.com/mail/*, https://www.google.com/*",general:"\u57FA\u672C\u8A2D\u5B9A",clickToExpandConfig:"\u5C55\u958B\u76EE\u524D\u8A2D\u5B9A",import:"\u5F9E\u6A94\u6848\u532F\u5165",export:"\u532F\u51FA\u70BA\u6A94\u6848",toggleDebug:"\u5728\u4E3B\u63A7\u53F0\u986F\u793A\u5075\u932F\u8A18\u9304","fingers.0":"\u95DC\u9589","fingers.2":"\u96D9\u6307\u89F8\u6478","fingers.3":"\u4E09\u6307\u89F8\u6478","fingers.4":"\u56DB\u6307\u89F8\u6478","fingers.5":"\u4E94\u6307\u89F8\u6478",mouseHoldKey:"+ {key} \u7FFB\u8B6F/\u9084\u539F\u8A72\u6BB5",mouseHoldKeyAuto:"\u76F4\u63A5\u7FFB\u8B6F\u8A72\u6BB5",mouseHoldKeyOff:"\u4E0D\u505A\u4EFB\u4F55\u4E8B\u60C5",mouseHoldKeyOther:"\u81EA\u5B9A\u7FA9\u5FEB\u6377\u9375(\u6253\u958B\u8A2D\u7F6E)",mouseHoldKeyCustomKey:"{key} \u7FFB\u8B6F/\u9084\u539F\u8A72\u6BB5",mouseHoverHoldKey:"\u9F20\u6A19\u6ED1\u904E\u540C\u6642\u6309\u4E0B X \u9375\u7FFB\u8B6F\u6BB5\u843D","mouse-translate":"\u9F20\u6A19\u6ED1\u904E",document:"\u8AAA\u660E\u6587\u4EF6",resetSuccess:"\u91CD\u8A2D\u6240\u6709\u8A2D\u5B9A\u6210\u529F",resetThisSuccess:"\u91CD\u8A2D\u6210\u529F",saved:"\u5132\u5B58\u6210\u529F",successImportConfig:"\u6210\u529F\u532F\u5165\u8A2D\u5B9A",goAdvancedSettings:"\u524D\u5F80\u9032\u968E\u8A2D\u5B9A\u9801\u9762",goAdvancedInterfaceSettings:"\u524D\u5F80\u81EA\u8A02\u8A2D\u5B9A\u9801\u9762",advanced:"\u9032\u968E\u8A2D\u5B9A",advancedDescription:"\u6B63\u5E38\u60C5\u6CC1\u7121\u9700\u8A2D\u5B9A\uFF0C\u4FDD\u6301\u9810\u8A2D\u5373\u53EF\u3002\u50C5\u91DD\u5C0D\u66F4\u5C08\u696D\u7684\u4F7F\u7528\u8005\uFF0C\u63D0\u4F9B\u66F4\u500B\u4EBA\u5316\u7684\u8A2D\u5B9A\u9805\u76EE\u3002",developer:"\u958B\u767C\u8005\u8A2D\u5B9A",donateCafe:"\u50F9\u683C","translate to the bottom of the page":"\u9032\u5165\u7DB2\u9801\u5F8C\uFF0C\u662F\u5426\u7ACB\u5373\u7FFB\u8B6F\u5230\u9801\u9762\u5E95\u90E8\uFF1F",feedback:"\u554F\u984C\u56DE\u5831",toggleTranslatePage:"\u7FFB\u8B6F\u7DB2\u9801/\u986F\u793A\u539F\u6587",translateToThePageEndImmediatelyDescription:"\u555F\u7528\u5F8C\uFF0C\u9032\u5165\u7DB2\u9801\u5C07\u7ACB\u5373\u7FFB\u8B6F\u5F9E\u9802\u90E8\u5230\u5E95\u90E8\u7684\u5167\u5BB9\u3002\u95DC\u9589\u5247\u908A\u770B\u908A\u8B6F\u3002\uFF08\u4E0D\u63A8\u85A6\u958B\u555F\uFF09","translate all areas of the page":"\u662F\u5426\u7FFB\u8B6F\u7DB2\u9801\u6240\u6709\u5340\u57DF",translationAreaDescription:"\u555F\u7528\u5F8C\uFF0C\u7DB2\u9801\u7684\u6240\u6709\u5340\u57DF\u90FD\u6703\u88AB\u7FFB\u8B6F\u3002\u95DC\u9589\u5247\u4F7F\u7528\u9810\u8A2D\u7684\u667A\u6167\u8FA8\u8B58\uFF0C\u50C5\u7FFB\u8B6F\u4E3B\u8981\u5340\u57DF\u3002(\u4E0D\u63A8\u85A6\u958B\u555F)","the number of characters to be translated first":"\u76F4\u63A5\u7FFB\u8B6F\u9801\u9762\u524D\u591A\u5C11\u500B\u5B57\u5143\uFF0C\u800C\u7121\u9700\u7B49\u5F85\u6372\u52D5\u81F3\u53EF\u898B\u5340\u57DF","interface language":"\u4ECB\u9762\u8A9E\u8A00","display both the original text and the translation":"\u540C\u6642\u986F\u793A\u539F\u6587\u548C\u8B6F\u6587","keyboard shortcuts":"\u9375\u76E4\u5FEB\u901F\u9375",modify:"\u8B8A\u66F4\u5FEB\u901F\u9375",reset:"\u91CD\u8A2D",close:"\u95DC\u9589",homepage:"\u9996\u9801",more:"\u66F4\u591A",moreOptions:"\u5C55\u958B\u66F4\u591A\u81EA\u8A02\u9078\u9805",translateTheWholePage:"\u7FFB\u8B6F\u9801\u9762\u5168\u90E8\u5340\u57DF\uFF08\u5340\u5206\u65BC\u53EA\u7FFB\u8B6F\u4E3B\u8981\u5340\u57DF\uFF09",changeToTranslateTheWholePage:"\u5207\u63DB\u70BA\u7FFB\u8B6F\u6240\u6709\u5340\u57DF",changeToTranslateTheMainPage:"\u5207\u63DB\u70BA\u7FFB\u8B6F\u4E3B\u8981\u5340\u57DF",changeToOnlyTranslationMode:"\u5207\u63DB\u70BA\u50C5\u986F\u793A\u8B6F\u6587",changeToDualTranslationMode:"\u5207\u63DB\u70BA\u96D9\u8A9E\u7FFB\u8B6F",translateToThePageEndImmediately:"\u7ACB\u5373\u7FFB\u8B6F\u5230\u5E95\u90E8\uFF08\u5340\u5206\u65BC\u770B\u54EA\u8B6F\u54EA\uFF09",translateTheMainPage:"\u667A\u6167\u7FFB\u8B6F\u4E3B\u8981\u5340\u57DF","The local rules are up to date":"\u672C\u6A5F\u898F\u5247\u5DF2\u70BA\u6700\u65B0\uFF1A","Successfully synchronized with the latest official rules:":"\u6210\u529F\u540C\u6B65\u6700\u65B0\u5B98\u65B9\u898F\u5247\uFF1A","Checking for updates":"\u6B63\u5728\u6AA2\u67E5\u66F4\u65B0","Rules are being synchronized":"\u6B63\u5728\u540C\u6B65\u5B98\u65B9\u898F\u5247",localVersionIsTooOld:"\u672C\u6A5F\u5957\u4EF6\u7248\u672C\u904E\u820A\uFF0C\u8ACB\u5347\u7D1A\u5957\u4EF6\u81F3 {minVersion} \u6216\u66F4\u65B0\u7684\u7248\u672C\u518D\u5617\u8A66\u540C\u6B65",badUserscriptBrowser:"\u76EE\u524D\u700F\u89BD\u5668\u7121\u6CD5\u6B63\u78BA\u5BE6\u73FE\u6CB9\u7334\u5957\u4EF6\u7684\u4ECB\u9762\uFF0C\u8ACB\u4F7F\u7528\u5176\u4ED6<1>\u652F\u63F4\u6CB9\u7334\u5957\u4EF6</1>\u7684\u700F\u89BD\u5668\u5982(Firefox Nightly \u7248\u672C)",foundNewVersion:"\u6709\u65B0\u7248\u672C\u53EF\u7528",theLocalExtensionIsUpToUpdate:"\u76EE\u524D\u5957\u4EF6\u5DF2\u662F\u6700\u65B0\u7248\u672C",failToSyncRules:"\u540C\u6B65\u6700\u65B0\u5B98\u65B9\u898F\u5247\u5931\u6557",retry:"\u9EDE\u6B64\u91CD\u8A66",failedReason:"\u5931\u6557\u539F\u56E0",currentRuleVersion:"\u76EE\u524D\u898F\u5247\u7248\u672C",calculating:"\u6B63\u5728\u8A08\u7B97",unknownError:"\u672A\u77E5\u7684\u932F\u8AA4",canNotFetchRemoteRule:"\u7121\u6CD5\u53D6\u5F97\u9060\u7AEF\u898F\u5247",enableAlphaSuccess:"\u5DF2\u555F\u7528 Alpha \u529F\u80FD",disableAlphaSuccess:"\u5DF2\u505C\u7528 Alpha \u529F\u80FD",cacheSize:"\u5FEB\u53D6\u5927\u5C0F\uFF1A",cleaning:"\u6B63\u5728\u6E05\u7406",cleanCache:"\u6E05\u9664\u5FEB\u53D6",options:"\u9078\u9805",about:"\u95DC\u65BC",service:"\u7FFB\u8B6F\u670D\u52D9",needAction:"(\u524D\u5F80\u8A2D\u5B9A)",goSettings:"\u524D\u5F80\u8A2D\u5B9A",needActionForOptions:"(\u9700\u8A2D\u5B9A)",translationEngine:"\u5F15\u64CE\u9078\u9805",sourceLanguage:"\u539F\u6587\u8A9E\u8A00",target:"\u76EE\u6A19\u8A9E\u8A00",popupSourceLanguage:"\u539F\u6587\u8A9E\u8A00",popupTarget:"\u76EE\u6A19\u8A9E\u8A00",popupService:"\u7FFB\u8B6F\u670D\u52D9",forThisSite:"\u7576\u524D\u7DB2\u7AD9",autoEnableSubtitle:"\u81EA\u52D5\u958B\u555F\u96D9\u8A9E\u5B57\u5E55",alwaysTranslateSomeLanguage:"\u7E3D\u662F\u7FFB\u8B6F {language}",neverTranslateSomeLanguage:"\u6C38\u4E0D\u7FFB\u8B6F {language}",alwaysTranslateSomeSite:"\u7E3D\u662F\u7FFB\u8B6F {hostname}",neverTranslateSomeSite:"\u6C38\u4E0D\u7FFB\u8B6F {hostname}",alwaysTranslateSomeSiteOrWildSite:"\u7E3D\u662F\u7FFB\u8B6F\u7DB2\u7AD9",alwaysTranslateSomePage:"\u7E3D\u662F\u7FFB\u8B6F\u8A72\u7DB2\u9801",add:"\u65B0\u589E",default:"\u9810\u8A2D",forThisLanguage:"\u91DD\u5C0D\u8A72\u8A9E\u8A00\uFF1A","add url":"\u8F38\u5165 URL",edit:"\u7DE8\u8F2F","translate other languages into specific language":"\u5C07\u5176\u5B83\u8A9E\u8A00\u7FFB\u8B6F\u70BA\u4F60\u8A2D\u5B9A\u7684\u8A9E\u8A00","select translation service":"\u9078\u64C7\u4F60\u60F3\u7528\u7684\u7FFB\u8B6F\u670D\u52D9",language:"\u8A9E\u8A00","show-original":"\u986F\u793A\u539F\u6587",translate:"\u7FFB\u8B6F",Translated:"\u5DF2\u7FFB\u8B6F",Translating:"\u6B63\u5728\u7FFB\u8B6F",Error:"\u932F\u8AA4",allowCacheTranslations:"\u555F\u7528\u672C\u6A5F\u7FFB\u8B6F\u5FEB\u53D6\uFF08\u6E1B\u5C11\u91CD\u8907\u6BB5\u843D\u7684\u7FFB\u8B6F\u8981\u6C42\uFF09","translation display":"\u8B6F\u6587\u986F\u793A\u6A23\u5F0F","select diplay style":"\u5340\u5206\u8B6F\u6587\u7684\u6A23\u5F0F\uFF0C\u5177\u9AD4\u53EF\u53C3\u8003\u4E0B\u5217\u7BC4\u4F8B",interface:"\u4ECB\u9762\u8A2D\u5B9A",import_export:"\u532F\u5165/\u532F\u51FA",import_export_title:"\u532F\u5165/\u532F\u51FA\u8A2D\u5B9A",syncToGoogleDrive:"\u7ACB\u5373\u8207 Google Drive \u540C\u6B65",floatBallOptions:"\u61F8\u6D6E\u7403\u8A2D\u7F6E","floatBallOptions.enable":"\u555F\u7528\u61F8\u6D6E\u7403","floatBallOptions.blockUrls":"\u7981\u7528\u7DB2\u7AD9","floatBallOptions.add":"\u6DFB\u52A0","floatBallOptions.blockUrlDesc":"\u7576\u9047\u5230\u4EE5\u4E0B\u7DB2\u7AD9\u6642\u4E0D\u986F\u793A\u61F8\u6D6E\u7403","floatBallOptions.clickType":"\u9EDE\u64CA\u884C\u70BA","floatBallOptions.clickTypeDesc":"\u61F8\u6D6E\u7403\u5716\u6A19\u9EDE\u64CA\u6642\u7684\u884C\u70BA","floatBallOptions.clickPopup":"\u986F\u793A\u7FFB\u8B6F\u9762\u677F","floatBallOptions.clickTranslate":"\u7FFB\u8B6F/\u986F\u793A\u539F\u6587",previewAllThemes:"\u9810\u89BD\u5168\u90E8\u6A23\u5F0F","translationTheme.none":"\u7121","translationTheme.grey":"\u9ED1\u7070\u8272","translationTheme.dashed":"\u7834\u6298\u865F\u5E95\u7DDA","translationTheme.dotted":"\u9EDE\u72C0\u5E95\u7DDA","translationTheme.dashedBorder":"\u865B\u7DDA\u6846\u7DDA","translationTheme.solidBorder":"\u5BE6\u7DDA\u6846\u7DDA","translationTheme.underline":"\u76F4\u7DDA\u5E95\u7DDA","translationTheme.mask":"\u6A21\u7CCA\u6548\u679C\uFF08\u5B78\u7FD2\u6A21\u5F0F\uFF09","translationTheme.opacity":"\u900F\u660E\u6548\u679C","translationTheme.paper":"\u767D\u7D19\u9670\u5F71\u6548\u679C","translationTheme.dividingLine":"\u5206\u9694\u7DDA","translationTheme.highlight":"\u9192\u76EE\u63D0\u793A","translationTheme.marker":"\u99AC\u514B\u7B46","translationTheme.marker2":"\u99AC\u514B\u7B462","translationTheme.blockquote":"\u5F15\u7528\u6A23\u5F0F","translationTheme.weakening":"\u5F31\u5316","translationTheme.italic":"\u659C\u9AD4","translationTheme.bold":"\u7C97\u9AD4","translationTheme.thinDashed":"\u7D30\u7834\u6298\u865F\u5E95\u7DDA","translationTheme.nativeDashed":"\u7CFB\u7D71\u5167\u5EFA\u7834\u6298\u865F\u5E95\u7DDA","translationTheme.nativeDotted":"\u7CFB\u7D71\u5167\u5EFA\u9EDE\u72C0\u5E95\u7DDA","translationTheme.nativeUnderline":"\u7CFB\u7D71\u5167\u5EFA\u76F4\u7DDA\u5E95\u7DDA","translationTheme.wavy":"\u6CE2\u5F62\u66F2\u7DDA","translationServices.custom":"\u81EA\u5B9A\u7FA9API","translationServices.tencent":"\u9A30\u8A0A\u7FFB\u8B6F\u541B","translationServices.tenAlpha":"\u9A30\u8A0A\u7FFB\u8B6F\u541B(Alpha)","translationServices.google":"Google \u7FFB\u8B6F","translationServices.bai":"\u767E\u5EA6(Alpha)","translationServices.baidu":"\u767E\u5EA6\u7FFB\u8B6F","translationServices.aliyun":"\u963F\u91CC\u96F2\u7FFB\u8B6F","translationServices.volc":"\u706B\u5C71\u7FFB\u8B6F","translationServices.deeplx":"DeepLX(Beta)","translationServices.bing":"\u5FAE\u8F6F\u7FFB\u8B6F","translationServices.deepl":"DeepL","translationServices.wechat":"\u5FAE\u4FE1\u7FFB\u8B6F","translationServices.azure":"Azure \u7FFB\u8B6F","translationServices.ibm":"IBM Watson","translationServices.aws":"\u4E9E\u99AC\u905C\u7FFB\u8B6F","translationServices.mock":"\u6A21\u64EC\u7FFB\u8B6F","translationServices.mock2":"\u6A21\u64EC\u7FFB\u8B6F2","translationServices.caiyun":"\u5F69\u96F2\u5C0F\u8B6F","translationServices.cai":"\u5F69\u96F2\u5C0F\u8B6F (Alpha)","translationServices.volcAlpha":"\u706B\u5C71\u7FFB\u8B6F(Alpha)","translationServices.openl":"OpenL","translationServices.youdao":"\u6709\u9053\u7FFB\u8B6F","translationServices.you":"\u6709\u9053\u7FFB\u8B6F (Alpha)","translationServices.transmart":"\u9A30\u8A0A\u4EA4\u4E92\u7FFB\u8B6F","translationServices.niu":"\u5C0F\u725B\u7FFB\u8B6F","translationServices.papago":"Papago \u7FFB\u8B6F","translationServices.d":"Deepl(Alpha)","translationServices.dpro":"D Pro (Canary)","translationServices.openai":"OpenAI","translationServices.chatgpt":"ChatGPT Web(3.5 mobile)","translate title":"\u7FFB\u8B6F\u9801\u9762\u6A19\u984C","always languages":"\u7E3D\u662F\u7FFB\u8B6F\u7684\u8A9E\u8A00",neverTranslateLanguagesLabel:"\u6C38\u4E0D\u7FFB\u8B6F\u7684\u8A9E\u8A00",neverTranslateTheFollowingLanguagesDescription:"\u7576\u9801\u9762\u4E2D\u67D0\u4E00\u6BB5\u843D\u7684\u8A9E\u8A00\u70BA\u4E0B\u5217\u8A9E\u8A00\u6642\uFF0C\u5C07\u8DF3\u904E\u7FFB\u8B6F",enableUserscriptPagePopup:"\u5728\u9801\u9762\u4E0A\u986F\u793A\u61F8\u6D6E\u7403",enableUserscriptPagePopupDescription:"\u95DC\u9589\u61F8\u6D6E\u7403\u5F8C\uFF0C\u53EF\u4EE5\u7528\u5FEB\u901F\u9375/{touch}\u518D\u6B21\u986F\u793A\u3002\u70BA\u9632\u6B62\u4E0D\u614E\u95DC\u9589\u8A72\u9078\u9805\u5F8C\u627E\u4E0D\u5230\u61F8\u6D6E\u7403\uFF0C\u5EFA\u8B70\u5C07\u672C\u8A2D\u5B9A\u9801\u9762\u52A0\u5165\u81F3\u6211\u7684\u6700\u611B","always translate the following languages":"\u7576\u9801\u9762\u8A9E\u8A00\u70BA\u4E0B\u5217\u8A9E\u8A00\u6642\uFF0C\u6703\u81EA\u52D5\u7FFB\u8B6F\u70BA\u76EE\u6A19\u8A9E\u8A00","always sites":"\u7E3D\u662F\u7FFB\u8B6F\u7684\u7DB2\u5740","always translate the following sites":"\u7576\u7DB2\u7AD9\u70BA\u4E0B\u5217\u7DB2\u57DF\u540D\u7A31\u6642\uFF0C\u6703\u81EA\u52D5\u7FFB\u8B6F\u70BA\u76EE\u6A19\u8A9E\u8A00","never sites":"\u6C38\u4E0D\u7FFB\u8B6F\u7684\u7DB2\u5740","never translate the following sites":"\u7576\u7DB2\u7AD9\u70BA\u4E0B\u5217\u7DB2\u57DF\u540D\u7A31\u6642\uFF0C\u5C07\u4E0D\u6703\u9032\u884C\u7FFB\u8B6F","please refer to":"\u9700\u8981\u586B\u5BEB\u91D1\u9470\u5F8C\u624D\u53EF\u4F7F\u7528\uFF0C\u8A73\u7D30\u8CC7\u8A0A\u8ACB\u53C3\u8003",KeyAndConfigurationTutorial:"\u300A\u91D1\u9470\u7533\u8ACB\u548C\u8A2D\u5B9A\u6559\u5B78\u300B",useAboveStyleForTheseSites:"\u7576\u7DB2\u7AD9\u70BA\u4E0B\u5217\u7DB2\u57DF\u540D\u7A31\u6642\uFF0C\u7E3D\u662F\u4F7F\u7528 \u2308{theme}\u230B \u8B6F\u6587\u6A23\u5F0F",currentUrl:"\u76EE\u524D\u7DB2\u5740",confirm:"\u5132\u5B58",cancel:"\u53D6\u6D88",delete:"\u522A\u9664","languages.auto":"\u81EA\u52D5\u5075\u6E2C",syncToCloud:"\u540C\u6B65\u81F3\u96F2\u7AEF",syncToCloudDescription:"\u4E0A\u50B3\u81F3\u96F2\u7AEF\u5F8C\uFF0C\u53EF\u4EE5\u5728\u4E0D\u540C\u7684\u700F\u89BD\u5668/\u6CB9\u7334\u8173\u672C\u4E4B\u9593\u540C\u6B65\u8A2D\u5B9A\uFF0C\u4EE5\u6700\u5F8C\u8B8A\u66F4\u6642\u9593\u70BA\u6E96\u3002",syncToAccount:"\u540C\u6B65\u5230\u8CEC\u6236",syncToAccountButton:"\u7ACB\u5373\u8207\u96F2\u7AEF\u540C\u6B65",syncToAccountDescription:"\u4E0A\u50B3\u5230\u5DF2\u767B\u9304\u8CEC\u6236\uFF0C\u53EF\u4EE5\u5728\u4E0D\u540C\u7684\u8A2D\u5099\u4E4B\u9593\u540C\u6B65\u914D\u7F6E\uFF0C\u4EE5\u6700\u5F8C\u4FEE\u6539\u6642\u9593\u70BA\u6E96\u3002",successSyncConfigInAccount:"\u6210\u529F\u8207\u8CEC\u6236\u4FDD\u6301\u540C\u6B65",successSyncConfigToAccount:"\u6210\u529F\u540C\u6B65\u5230\u8CEC\u6236",syncConfigNoUpdate:"\u5DF2\u7D93\u662F\u6700\u65B0\u7684\u4E86",authFail:"\u6388\u6B0A\u5931\u6557",syncTitle:"\u624B\u52D5\u5099\u4EFD\u7BA1\u7406",import_hint:"\u532F\u5165",upload:"\u4E0A\u50B3",revokeAuth:"\u64A4\u92B7\u6388\u6B0A",uploadFail:"\u4E0A\u50B3\u5931\u6557",download:"\u4E0B\u8F09",importSuccess:"\u532F\u5165\u6210\u529F",importFail:"\u532F\u5165\u5931\u6557",deleteFail:"\u522A\u9664\u5931\u6557",backupToCloud:"\u624B\u52D5\u7BA1\u7406\u5099\u4EFD\u6A94\u6848",create_new_backup:"\u65B0\u589E\u5099\u4EFD\u7BC0\u9EDE",maxBackupFiles:"\u6700\u591A\u53EF\u4EE5\u5099\u4EFD{count}\u500B\u4E0D\u540C\u7684\u7BC0\u9EDE\uFF0C\u8ACB\u522A\u9664\u4E0D\u9700\u8981\u7684\u7BC0\u9EDE",backupToCloudDescription:"\u624B\u52D5\u4E0A\u50B3\u6216\u9084\u539F\u5099\u4EFD\u6A94\u6848\uFF0C\u6700\u591A\u5141\u8A31 3 \u500B\u4E0D\u540C\u7684\u5099\u4EFD",successSyncConfig:"\u6210\u529F\u8207\u96F2\u7AEF\u4FDD\u6301\u540C\u6B65",syncFail:"\u540C\u6B65\u5931\u6557",updatedAt:"\u66F4\u65B0\u65BC {date}",lastSyncedAt:"\u4E0A\u6B21\u6AA2\u67E5\u65BC {date}",downloadFail:"\u4E0B\u8F09\u5931\u6557",clickToDownload:"\u9EDE\u9078\u4E0B\u8F09",aboutLabel:"\u95DC\u65BC - \u554F\u984C\u56DE\u5831","browser.openAboutPage":"\u95DC\u65BC/\u554F\u984C\u56DE\u5831",aboutLabelWithoutSponsor:"\u95DC\u65BC - \u554F\u984C\u56DE\u5831",aboutIntro:"\u5E0C\u671B\u6211\u5011\u90FD\u80FD\u66F4\u52A0\u5BB9\u6613\u4E14\u6109\u6085\u5730\u7372\u53D6\u7DB2\u969B\u7DB2\u8DEF\u4E0A\u66F4\u591A\u7684\u5916\u8A9E\u8CC7\u8A0A \u2764\uFE0F \u4F60\u53EF\u4EE5\u9078\u64C7\u958B\u901A <6>Pro\u6703\u54E1</6> \u4F86\u4F7F\u7528\u958B\u7BB1\u5373\u7528\u7684 DeepL \u548C OpenAI \u7FFB\u8B6F\u3002<br/><br/>\u4F60\u53EF\u4EE5\u95DC\u6CE8\u6211\u4EEC\u7684<3>Twitter</3>\uFF0C<4>Telegram \u983B\u9053</4>\u4EE5\u53CA\u4E0B\u65B9\u7684<5>\u90F5\u4EF6\u8A02\u95B1</5>\u8FFD\u8E64\u66F4\u65B0\u3002<br/> <7>Pro \u6703\u54E1</7> \u53EF\u4EE5\u901A\u904E\u5FEB\u901F\u5BA2\u670D\u90F5\u7BB1 <8>support@immersivetranslate.com</8> \u548C\u6211\u5011\u53D6\u5F97\u806F\u7E6B\u3002",aboutIntroWithoutSponsor:"\u5E0C\u671B\u6211\u5011\u90FD\u80FD\u66F4\u52A0\u5BB9\u6613\u4E14\u6109\u6085\u5730\u7372\u53D6\u7DB2\u969B\u7DB2\u8DEF\u4E0A\u66F4\u591A\u7684\u5916\u8A9E\u8CC7\u8A0A \u2764\uFE0F ",projectHomepage:"\u5C08\u6848\u9996\u9801",joinTelegramGroup:"\u52A0\u5165\u7528\u6237\u4EA4\u6D41\u7FA4\u7D44\u53C3\u8207\u529F\u80FD\u8A0E\u8AD6",wechatPublicAccount:"\u5FAE\u4FE1\u516C\u773E\u865F",wechatCommunities:"\u5FAE\u4FE1\u4EA4\u6D41\u7FA4",qqCommunities:"QQ \u4EA4\u6D41\u983B\u9053",joinTelegramChannel:"\u95DC\u6CE8 Telegram \u983B\u9053\u77AD\u89E3\u66F4\u65B0\u8CC7\u8A0A",feedbackAndJoin:"\u554F\u984C\u56DE\u5831/\u52A0\u5165\u7FA4\u7D44",autoSync:"\u81EA\u52D5\u5B9A\u6642\u540C\u6B65",loadingThemeTitle:"Loading \u6A23\u5F0F",loadingThemeDescription:"\u8A2D\u5B9A\u7B49\u5F85\u8B6F\u6587\u8F09\u5165\u6642\u7684\u6A23\u5F0F","loadingTheme.spinner":"\u8F49\u5708\u52D5\u756B","loadingTheme.text":"\u975C\u614B\u6587\u5B57 ... ","loadingTheme.none":"\u4E0D\u986F\u793A",developerDescription:"\u53EF\u4EE5\u9EDE\u9078<1>\u6B64\u8655</1>\u6AA2\u8996\u9032\u968E\u81EA\u8A02\u529F\u80FD\u76F8\u95DC\u7684\u8AAA\u660E\u6587\u4EF6","edit border color":"\u8B8A\u66F4\u908A\u6846\u8272\u5F69",successSyncButNoChange:"\u76EE\u524D\u8A2D\u5B9A\u8207\u96F2\u7AEF\u4E00\u81F4",customTheme:"\u81EA\u8A02\u8272\u5F69\u548C\u5927\u5C0F","customThemeLabel.borderColor":"\u908A\u6846\u8272\u5F69","customThemeLabel.borderRadius":"\u908A\u6846\u5713\u89D2","customThemeLabel.textColor":"\u6587\u5B57\u8272\u5F69","customThemeLabel.backgroundColor":"\u80CC\u666F\u8272\u5F69","customThemeLabel.zoom":"\u5B57\u578B\u7E2E\u653E\u6BD4\u4F8B (%)","customThemeLabel.opacity":"\u6587\u5B57\u4E0D\u900F\u660E\u5EA6(%)",resetToDefaultColor:"\u9084\u539F\u70BA\u9810\u8A2D\u8272\u5F69",resetToDefaultSettings:"\u9084\u539F\u70BA\u9810\u8A2D\u8A2D\u5B9A",isTranslateTitle:"\u555F\u7528\u7DB2\u9801\u6A19\u984C\u7FFB\u8B6F",isTranslateTitleDescription:"\u555F\u7528\u5F8C\uFF0C\u7DB2\u9801\u7684\u6A19\u984C\u6703\u88AB\u7FFB\u8B6F",enableSearchEnhancement:"\u958B\u555F\u641C\u7D22\u589E\u5F37",enableSearchEnhancementDescription:"\u4E2D\u6587\u641C\u7D22\u8C37\u6B4C\u6703\u5728\u53F3\u908A\u51FA\u73FE\u82F1\u6587\u7248\u8C37\u6B4C\u65B0\u805E",verifyService:"\u9EDE\u6B64\u6E2C\u8A66\u670D\u52D9",verified:"\u9A57\u8B49\u6210\u529F","field.langs":"\u652F\u63F4\u7684\u8A9E\u8A00\u4EE3\u78BC","field.model":"\u6A21\u578B","field.translationEngine":"\u7FFB\u8B6F\u5F15\u64CE","field.limitPerMinute":"\u6BCF\u5206\u9418\u6700\u5927\u8981\u6C42\u6578","field.limitPerSecond":"\u6BCF\u79D2\u6700\u5927\u8981\u6C42\u6578","field.maxTextLengthPerRequest":"\u6BCF\u6B21\u8981\u6C42\u7684\u6700\u5927\u6587\u5B57\u9577\u5EA6","field.maxTextGroupLengthPerRequest":"\u6BCF\u6B21\u8981\u6C42\u6700\u5927\u6BB5\u843D\u6578","field.apiUrl":"\u81EA\u8A02 API \u4F4D\u5740","field.placeholderDelimiters":"\u4FDD\u7559\u7684\u4F54\u4F4D\u7B26","description.custom":"<a href='https://immersivetranslate.com/docs/services/custom/' target='_blank'>\u81EA\u5B9A\u7FA9\u63A5\u53E3\u63A5\u5165</a> \u9700\u8981\u53C3\u8003\u6587\u6A94","description.limitPerMinute":"\u8981\u6C42\u6578\u8D85\u904E\u8A72\u9650\u5236\u6642\u6703\u88AB\u66AB\u6642\u505C\u7528\uFF0C\u76F4\u81F3\u4E0B\u4E00\u5206\u9418\u958B\u59CB\u3002\u7531\u4E8EOpenAI\u76EE\u524D\u670D\u52A1\u7684\u5404\u79CD\u9650\u5236\uFF0C\u8BF7\u70B9\u51FB<1>\u8FD9\u91CC</1>\u67E5\u770B\u6700\u65B0\u5EFA\u8BAE\u7684\u6570\u503C","description.limitPerSecond":"\u8981\u6C42\u6578\u8D85\u904E\u8A72\u9650\u5236\u6642\u6703\u88AB\u66AB\u6642\u505C\u7528\uFF0C\u76F4\u81F3\u4E0B\u4E00\u79D2\u9418\u958B\u59CB\u3002\u7531\u4E8EOpenAI\u76EE\u524D\u670D\u52A1\u7684\u5404\u79CD\u9650\u5236\uFF0C\u8BF7\u70B9\u51FB<1>\u8FD9\u91CC</1>\u67E5\u770B\u6700\u65B0\u5EFA\u8BAE\u7684\u6570\u503C","description.generalLimitPerSecond":"\u8ACB\u6C42\u6578\u8D85\u904E\u8A72\u9650\u5236\u6642\u6703\u9032\u5165\u6392\u968A\u72C0\u614B\uFF0C\u76F4\u5230\u4E0B\u4E00\u79D2\u9418\u958B\u59CB\u3002","description.prompt":"\u4EE5\u4F7F\u7528\u8005\u8EAB\u4EFD\u50B3\u9001\u7D66 OpenAI \u7684\u5C0D\u8A71\uFF0C\u5176\u4E2D {{text}} \u8868\u793A\u6BB5\u843D\u7684\u6587\u5B57\u5167\u5BB9\uFF0C{{from}} \u8868\u793A\u6BB5\u843D\u7684\u8A9E\u8A00\uFF0C{{to}} \u8868\u793A\u76EE\u6A19\u8A9E\u8A00,\u53EF\u4EE5\u7701\u7565 {{text}} \uFF08\u63A8\u85A6\uFF09, \u5C07\u6703\u5728\u55AE\u7368\u4F5C\u70BA\u4E00\u6BB5\u767C\u9001\u7D66 OpenAI","description.maxTextLengthPerRequest":"\u9810\u8A2D\u6703\u5408\u4F75\u591A\u500B\u6BB5\u843D\uFF0C\u4EE5\u6E1B\u5C11\u8ACB\u8981\u6C42\u6578\uFF0C\u4F46\u662F\u5982\u679C\u6BB5\u843D\u7E3D\u9577\u5EA6\u904E\u9577\uFF0C\u4E5F\u53EF\u80FD\u6703\u5C0E\u81F4 API \u7684\u56DE\u61C9\u6642\u9593\u589E\u52A0\uFF0C\u56E0\u6B64\u53EF\u4EE5\u5617\u8A66\u8ABF\u6574\u8A72\u9078\u9805\u4F86\u63D0\u5347\u901F\u5EA6","description.systemPrompt":"\u4EE5\u7CFB\u7D71\u50B3\u9001\u767C\u9001\u7D66 OpenAI \u7684\u5C0D\u8A71\uFF0C\u5176\u4E2D {{text}} \u8868\u793A\u6BB5\u843D\u7684\u6587\u5B57\u5167\u5BB9\uFF0C{{from}} \u8868\u793A\u6BB5\u843D\u7684\u8A9E\u8A00\uFF0C{{to}} \u8868\u793A\u76EE\u6A19\u8A9E\u8A00","field.domain":"\u9818\u57DF","description.domain":"\u9ED8\u8A8D\u70BA\uFF1Ageneral\u3002\u50C5\u5728\u6709\u9053API\u63A7\u5236\u53F0\u958B\u901A\u9818\u57DF\u5316\u7FFB\u8B6F\u7684\u60C5\u6CC1\u4E0B\u53EF\u8A2D\u7F6E\uFF0C\u652F\u6301\u9818\u57DF\u898B<1>\u9019\u88E1</1>","field.scene":"\u5834\u666F","description.scene":"\u9ED8\u8A8D\u70BA\uFF1Ageneral\u3002\u50C5\u5728\u963F\u91CC\u96F2API\u63A7\u5236\u53F0\u958B\u901A\u6A5F\u5668\u7FFB\u8B6F\u5C08\u696D\u7248\u7684\u60C5\u6CC1\u4E0B\u53EF\u8A2D\u7F6E\uFF0C\u652F\u6301\u5834\u666F\u898B<1>\u9019\u88E1</1>","field.vocabId":"\u4F7F\u7528\u8005\u8A5E\u5178ID","description.vocabId":"\u6307\u5B9A\u7684\u5B57\u5178out_id\uFF0C\u76EE\u524D\u652F\u63F4\u82F1\u8B6F\u4E2D","description.model":"OpenAI \u7684\u6A21\u578B\uFF0C\u53EF\u4EE5\u70BA gpt-3.5-turbo, gpt-4 \u7B49","description.maxTextGroupLengthPerRequest":"\u6BCF\u6B21\u50B3\u9001\u7D66\u7FFB\u8B6F\u670D\u52D9\u7684\u6BB5\u843D\u6578\u91CF\uFF0C\u5982\u679C\u6BB5\u843D\u6578\u91CF\u904E\u591A\uFF0C\u53EF\u80FD\u6703\u5C0E\u81F4\u56DE\u61C9\u901F\u5EA6\u8B8A\u6162","description.apiUrl":"\u8ACB\u52A0\u5165\u5177\u9AD4\u5305\u542B\u8DEF\u5F91\u7684\u7DB2\u5740",enabledExtension:"\u555F\u7528\u5957\u4EF6",clickToDisableExtension:"\u9EDE\u9078\u505C\u7528\u5957\u4EF6",clickToEnableExtension:"\u9EDE\u9078\u555F\u7528\u5957\u4EF6",hasBeenDisabled:"\u5DF2\u505C\u7528","show password":"\u986F\u793A\u5BC6\u78BC",customContent:"\u8F38\u5165\u81EA\u5B9A\u7FA9\u6A21\u578B",inputOptions:"\u8F38\u5165\u6846\u589E\u5F37",mouseHoverOptions:"\u9F20\u6A19\u6ED1\u904E",modifyMouseHoverKey:"\u4FEE\u6539\u6ED1\u9F20\u61F8\u505C\u5FEB\u6377\u9375",enableInputTranslation:"\u662F\u5426\u555F\u7528\u8F38\u5165\u6846\u589E\u5F37",enableInputTranslationDescription:"\u555F\u7528\u5F8C\uFF0C\u8F38\u5165\u6846\u76F4\u63A5\u8F38\u5165 {startingKey}{startingKey} \u4F60\u597D\uFF0C\u7136\u5F8C\u5FEB\u901F\u9023\u64CA{inputTrailingTriggerKeyRepeatTimes}\u6B21{trailingKey}\uFF0C\u5373\u53EF\u7FFB\u8B6F\u70BA {inputTargetLanguage}",enableInputTranslationDescriptionForNoneKey:"\u555F\u7528\u5F8C\uFF0C\u8F38\u5165\u6846\u76F4\u63A5\u8F38\u5165\uFF1A\u4F60\u597D\u4E16\u754C\uFF0C\u7136\u5F8C\u5FEB\u901F\u9023\u64CA{inputTrailingTriggerKeyRepeatTimes}\u6B21{trailingKey}\uFF0C\u5373\u53EF\u7FFB\u8B6F\u70BA\u9810\u8A2D\u76EE\u6A19\u8A9E\u8A00",inputTargetLanguage:"\u8A2D\u5B9A\u8F38\u5165\u6846\u7684\u9810\u8A2D\u76EE\u6A19\u8A9E\u8A00",inputTargetLanguageDescription:"\u8F38\u5165\u6846\u7FFB\u8B6F\u7684\u9810\u8A2D\u76EE\u6A19\u8A9E\u8A00\uFF0C\u4E5F\u5C31\u662F {startingKey}{startingKey} \u4F5C\u70BA\u89F8\u767C\u8A5E\u7684\u9810\u8A2D\u8A9E\u8A00",inputTargetLanguageDescriptionForNoneKey:"\u8F38\u5165\u6846\u7FFB\u8B6F\u7684\u9810\u8A2D\u76EE\u6A19\u8A9E\u8A00",inputStartingTriggerKeyTitle:"\u8A2D\u5B9A\u8F38\u5165\u6846\u90E8\u5206\u7FFB\u8B6F\u7684\u5206\u5272\u5B57\u7B26",inputStartingTriggerKeyDescription:"\u7576\u4F60\u4E0D\u9700\u8981\u7FFB\u8B6F\u6574\u500B\u8F38\u5165\u6846\u7684\u6642\u5019\uFF0C\u5206\u5272\u7B26\u5141\u8A31\u4F60\u53EA\u7FFB\u8B6F {startingKey}{startingKey} \u5230\u8F38\u5165\u6846\u672B\u5C3E\u7684\u90E8\u5206\uFF0C\u4E5F\u53EF\u4EE5\u6307\u5B9A\u8A9E\u8A00\u4EE3\u78BC\uFF0C\u4F8B\u5982\uFF1A{startingKey}ja \u8868\u793A\u53EA\u7FFB\u8B6F {startingKey}ja \u5230\u8F38\u5165\u6846\u672B\u5C3E\u7684\u90E8\u5206",inputStartingTriggerKeyDescriptionForNoneKey:"\u76EE\u524D\u8A2D\u5B9A\u70BA\u7121\u9700\u524D\u7DB4\uFF0C\u66AB\u7121\u6CD5\u4F7F\u7528\u8F38\u5165\u6846\u7684\u90E8\u5206\u6587\u5B57\u7FFB\u8B6F\u529F\u80FD",inputTrailingTriggerKeyTitle:"\u9078\u64C7\u4E00\u500B\u8F38\u5165\u7D50\u675F\u7684\u89F8\u767C\u5B57\u7B26",inputTrailingTriggerKeyDescription:"\u5FEB\u901F\u9023\u64CA3 \u6B21{trailingKey} \u5C07\u6703\u958B\u59CB\u7FFB\u8B6F",inputTrailingTriggerKeyTimeout:"\u8F38\u5165\u7D50\u675F\u9023\u64CA\u89F8\u767C\u7684\u9593\u9694\u6642\u9593",inputTrailingTriggerKeyTimeoutDescription:"\u8A2D\u7F6E\u8F38\u5165\u7D50\u675F\u9023\u64CA\u89F8\u767C\u7684\u9593\u9694\u6642\u9593\uFF08\u6BEB\u79D2\uFF09",spaceKey:"<\u7A7A\u683C\u9375>",noneKey:"\u7121\u9700\u524D\u7DB4\uFF0C\u76F4\u63A5\u7FFB\u8B6F\u6574\u500B\u6587\u5B57\u6846",inputTranslationBlockUrlsTitle:"\u5207\u52FF\u5728\u4EE5\u4E0B\u7DB2\u5740\u4E2D\u555F\u7528\u8F38\u5165\u6846\u589E\u5F37",inputTranslationBlockUrlsDescription:"\u5728\u4EE5\u4E0B\u7DB2\u5740\u4E2D\uFF0C\u8F38\u5165\u6846\u589E\u5F37\u5C07\u4E0D\u6703\u751F\u6548",clickToSeeQuickDemo:"\u9EDE\u64CA\u5C55\u958B30 \u79D2\u5FEB\u901F\u6559\u5B78\u8996\u983B",inputHelperInfo:"\u8AAA\u660E\uFF1A\u6211\u5011\u7279\u5225\u91DD\u5C0D\u5728\u4E2D\u6587\u8F38\u5165\u6CD5\u4E0B\u90E8\u5206\u89F8\u767C\u5B57\u7B26\u6703\u8B8A\u6210\u4E2D\u6587\u6A19\u9EDE\u7B26\u865F\u9019\u4EF6\u4E8B\u505A\u4E86\u512A\u5316\uFF0C\u6BD4\u5982\u641C\u72D7\u8F38\u5165\u6CD5\u4E0B / \u6703\u8B8A\u6210\u9813\u865F \u3001\uFF0C\u6C89\u6D78\u5F0F\u7FFB\u8B6F\u652F\u6301\u6240\u6709\u89F8\u767C\u7B26\u5C0D\u61C9\u7684\u4E2D\u6587\u7B26\u865F\uFF0C\u4E5F\u5C31\u662F\u8AAA // \u3001\u3001 \u90FD\u6703\u88AB\u8B58\u5225\u70BA\u89F8\u767C\u5B57\u7B26\u3002<br/><br/>\u540C\u6642\u6211\u5011\u4E5F\u652F\u6301\u8A9E\u8A00\u4EE3\u78BC\u7684\u4E2D\u6587\u5225\u540D\u4F5C\u70BA\u547D\u4EE4\uFF0C\u6BD4\u5982 /\u65E5\u6587 \u4F60\u597D\u4E16\u754C \u6703\u88AB\u7FFB\u8B6F\u70BA\u65E5\u6587\uFF0C<1>\u9EDE\u6B64\u67E5\u770B\u6240\u6709\u652F\u63F4\u7684\u8A9E\u8A00\u4EE3\u78BC</1>\u3002",reloadCurrentPage:"\u8ACB\u5148\u5237\u65B0\u76EE\u524D\u9801\u9762\uFF0C\u518D\u958B\u59CB\u7FFB\u8B6F",noLocalFilePermissionForPDF:"\u66AB\u7121\u6B0A\u9650\u8B80\u53D6\u672C\u6A5F\u6587\u4EF6\uFF0C\u8ACB\u9EDE\u9078\u4E0A\u65B9\u6309\u9215\uFF0C\u7136\u5F8C\u532F\u5165\u672C\u6A5F\u6587\u4EF6",noPermissionForThisPage:"\u26A0\uFE0F \u66AB\u7121\u6B0A\u9650\u7FFB\u8B6F\u76EE\u524D\u9801\u9762",retryAllParagraphs:"\u91CD\u8A66\u5168\u90E8\u932F\u8AA4\u6BB5\u843D",retryAllButton:"\u91CD\u8A66\u5168\u90E8\u932F\u8AA4\u6BB5\u843D",errorTooltipTitle:"\u9EDE\u64CA\u770B\u932F\u8AA4\u539F\u56E0",errorModalTitle:"\u7FFB\u8B6F\u670D\u52D9\u6216\u7DB2\u8DEF\u4F3C\u4E4E\u51FA\u4E86\u9EDE\u554F\u984C...",disableConfirm:"\u7981\u7528\u78BA\u8A8D",disableOnce:"\u7981\u7528\u4E00\u6B21",disableGlobal:"\u5168\u5C40\u7981\u7528",disableTint:"* \u60A8\u53EF\u4EE5\u5728 {option} \u4E2D\u91CD\u65B0\u555F\u7528\u3002",searchEnhancementNotes:"\u6211\u5011\u767C\u73FE\uFF0C\u4E2D\u6587\u95DC\u9375\u8A5E\u548C\u82F1\u6587\u95DC\u9375\u8A5E\u7684\u65B0\u805E\u7D50\u679C\u6709\u975E\u5E38\u5927\u7684\u4E0D\u540C\uFF0C\u5728\u555F\u7528\u6C89\u6D78\u5F0F\u7FFB\u8B6F\u96D9\u8A9E\u4FE1\u606F\u589E\u5F37\u529F\u80FD\u5F8C\uFF0C\u6211\u5011\u6703\u5728\u652F\u6301\u7684\u7DB2\u7AD9\uFF08\u8C37\u6B4C\u65B0\u805E\uFF0C\u8C37\u6B4C\u641C\u7D22\uFF08\u90E8\u5206\u95DC\u9375\u8A5E\uFF09\uFF0C\u96EA\u7403\uFF0C\u6771\u65B9\u8CA1\u5BCC\u7DB2\uFF0C\u5BCC\u9014\uFF0C\u8001\u864E\uFF09\u81EA\u52D5\u7528\u82F1\u6587\u70BA\u4F60\u641C\u7D22\u540C\u6A23\u7684\u95DC\u9375\u8A5E\u4E26\u5C55\u793A\u5728\u53F3\u5074\u3002\u5982\u679C\u4F60\u4E0D\u9700\u8981\u8A72\u529F\u80FD\u7684\u8A71\uFF0C\u53EF\u4EE5\u9078\u64C7\u7981\u7528\u5B83\u3002",option:"\u9078\u9805",saveSettings:"\u5132\u5B58\u8A2D\u5B9A",closeModal:"\u95DC\u9589\u8996\u7A97",enableInputTranslationWithoutTriggerKeyTitle:"\u555F\u7528\u5FEB\u901F\u9023\u64CA3 \u6B21{trailingKey}\uFF0C\u76F4\u63A5\u7FFB\u8B6F\u6574\u500B\u8F38\u5165\u6846\u70BA{inputTargetLanguage}",enableInputTranslationWithoutTriggerKeyDescription:"\u5982\u9700\u6307\u5B9A\u76EE\u6A19\u8A9E\u8A00\uFF0C\u8ACB\u5728\u524D\u9762\u52A0\u4E0A\u8A9E\u8A00\u7A0B\u5F0F\u78BC\uFF0C\u5982\uFF1Aja \u4F60\u597D\u4E16\u754C",mouseHoverShortcutPlaceholder:"\u5982\uFF1AShift",deepLProName:"\u6C89\u6D78\u5F0F\u7FFB\u8B6FPro \u6703\u54E1(\u63A8\u85A6)",deepLProDescription:"\u76EE\u524D\u5957\u9910\u53EF\u4EE5\u76F4\u63A5\u4F7F\u7528",deeplProDescriptionForNormal:"\u7121\u9700\u4EFB\u4F55\u8A2D\u7F6E\uFF0C\u6703\u54E1\u767B\u5165\u5F8C\u5373\u53EF\u4F7F\u7528\uFF0C<1>\u9EDE\u6B64\u5347\u7D1A\u70BA\u6703\u54E1</1>",deepLCustomDescription:"\u9700\u8981\u570B\u5916\u4FE1\u7528\u5361\uFF0C\u5728<1>DeepL</1>\u5B98\u65B9\u958B\u901A\uFF0C\u9EDE\u9078\u67E5\u770B<2>\u6587\u6A94</2>",deepLCustomName:"\u81EA\u8A02Auth Key",chooseProviderLabel:"\u9078\u64C7\u4E00\u500B\u670D\u52D9\u63D0\u4F9B\u8005",openaiProName:"\u6C89\u6D78\u5F0F\u7FFB\u8B6FPro \u6703\u54E1(\u63A8\u85A6)",openaiProDescription:"\u76EE\u524D\u5957\u9910\u53EF\u4EE5\u76F4\u63A5\u4F7F\u7528",openaiProDescriptionForNormal:"\u7121\u9700\u4EFB\u4F55\u8A2D\u7F6E\uFF0C\u6703\u54E1\u767B\u5165\u5F8C\u5373\u53EF\u4F7F\u7528\uFF0C<1>\u9EDE\u6B64\u5347\u7D1A\u70BA\u6703\u54E1</1>",openaiCustomDescription:"\u53EF\u5728OpenAI, Azure OpenAI, \u6216\u5176\u4ED6\u7B2C\u4E09\u65B9\u670D\u52D9\u7372\u53D6\uFF0C<1>\u9EDE\u6B64\u67E5\u770B\u6587\u6A94</1>",openaiCustomName:"\u81EA\u8A02API Key",needLoginAction:"(\u958B\u901A\u6703\u54E1\u6216\u81EA\u8A02)",goLoginOrAction:"(\u958B\u901A\u6703\u54E1\u6216\u53BB\u8A2D\u5B9A)",yearly:"\u5E74\u5EA6\u7E8C\u8A02",quarterly:"\u5B63\u5EA6\u7E8C\u8A02",monthly:"\u6BCF\u6708\u7E8C\u8A02",yearlyForOnce:"\u4E00\u6B21\u6027\u5E74\u5EA6\u5957\u9910",monthlyForOnce:"\u4E00\u6B21\u6027\u6708\u5EA6\u5957\u9910",daily:"\u6BCF\u65E5\u7E8C\u8A02",year:"\u5E74\u5EA6\u7E8C\u8A02",quarter:"\u5B63\u5EA6\u7E8C\u8A02",month:"\u6BCF\u6708\u7E8C\u8A02",day:"\u6BCF\u65E5\u7E8C\u8A02",onetime_7day:"7 \u5929\u9AD4\u9A57\u5305",currentPlanDescriptionForFree:"\u76EE\u524D\u5957\u9910\uFF1A\u514D\u8CBB",currentPlanDescriptionForContinuous:"\u76EE\u524D\u5957\u9910\uFF1A{plan}\uFF0C\u5C07\u65BC {endAt} \u81EA\u52D5\u7E8C\u8CBB",currentPlanDescriptionForAutoRenewCaceling:"\u76EE\u524D\u5957\u9910\uFF1A{plan}\uFF0C\u5C07\u65BC {endAt} \u5230\u671F\uFF0C\u5230\u671F\u5F8C\u5C07\u4E0D\u6703\u81EA\u52D5\u7E8C\u7D04",currentYearlyPlanDescriptionForAutoRenewCacelingWithRealPaiedUser:"\u76EE\u524D\u5957\u9910\uFF1A{plan}\uFF0C\u5C07\u65BC {endAt} \u5230\u671F\uFF0C\u5230\u671F\u5F8C\u5C07\u4E0D\u6703\u81EA\u52D5\u7E8C\u7D04\u3002<br/><1>\u9EDE\u6B64\u7BA1\u7406\u7E8C\u8CBB\u65B9\u6848</1>",currentYearlyPlanDescriptionForAutoRenewCacelingWithAdmin:"\u76EE\u524D\u5957\u9910\uFF1A{plan}\uFF0C\u5C07\u65BC {endAt} \u5230\u671F\uFF0C\u5230\u671F\u5F8C\u5C07\u4E0D\u6703\u81EA\u52D5\u7E8C\u7D04\u3002<br/><1>\u9EDE\u6B64\u555F\u7528\u9023\u7E8C\u5305\u5E74</1>",currentPlanDescriptionForOneTime:"\u76EE\u524D\u5957\u9910\uFF1A{plan}\uFF0C\u5C07\u65BC {endAt} \u5230\u671F\uFF0C<1>\u9EDE\u6B64\u5347\u7D1A\u70BA\u5E74\u8CBB</1>\u6216<2>\u6708\u8CBB</2>\u6703\u54E1",upgradePlan:"\u9EDE\u6B64\u5347\u7D1A\u70BAPro \u6703\u54E1",upgradeToPro:"\u5347\u7D1A\u70BA Pro \u6703\u54E1","popup.openPro":"\u5347\u7D1A\u70BA Pro \u6703\u54E1\u5F8C\u53EF\u4EE5\u66A2\u4EAB DeepL \u548C OpenAI \u7FFB\u8B6F\uFF0C\u9EDE\u6B64\u5347\u7D1A","popup.openProForPro":"\u60A8\u662F Pro \u6703\u54E1\uFF0C\u53EF\u76F4\u63A5\u4F7F\u7528 DeepL \u548C OpenAI \u7FFB\u8B6F",currentAccount:"\u7576\u524D\u8CEC\u6236",enableAutoSyncUserSettings:"\u555F\u7528\u591A\u8A2D\u5099\u81EA\u52D5\u96F2\u7AEF\u540C\u6B65",modalEnableInputTranslationTitle:"\u6C89\u6D78\u5F0F\u7FFB\u8B6F\u8F38\u5165\u6846\u7FFB\u8B6F\u63D0\u793A",modalEnableInputTranslationDesc:"\u60A8\u525B\u525B\u900F\u904E\u5FEB\u901F\u9023\u64CA3 \u6B21\u7A7A\u767D\u9375\u89F8\u767C\u4E86\u6C89\u6D78\u5F0F\u7FFB\u8B6F\u7684\u8F38\u5165\u6846\u7FFB\u8B6F\uFF0C\u8F38\u5165\u6846\u7684\u5167\u5BB9\u5C07\u7FFB\u8B6F\u70BA\u9810\u8A2D\u7684\u76EE\u6A19\u8A9E\u8A00\u3002\u900F\u904ECtrl+Z \u53EF\u4EE5\u64A4\u92B7\u7FFB\u8B6F\u3002<br /><br />\u5982\u679C\u9019\u662F\u4E00\u500B\u5931\u8AA4\uFF0C\u4E0D\u7528\u64D4\u5FC3\uFF0C\u60A8\u53EF\u4EE5\u9078\u64C7\u672C\u6B21\u505C\u7528\uFF0C\u6216\u6C38\u4E45\u505C\u7528\u8F38\u5165\u6846\u7FFB\u8B6F\u3002",saveAndNotShowAgain:"\u5132\u5B58\u4E14\u4E0D\u518D\u63D0\u793A",disableInputTranslationTips:"* \u4F60\u4E5F\u53EF\u4EE5\u5728 {option} \u4E2D\u8A2D\u5B9A\u5176\u4ED6\u5FEB\u6377\u9375\u4F86\u89F8\u767C\uFF0C{learnMore}\u3002",learnMore:"\u9EDE\u6B64\u4E86\u89E3\u66F4\u591A",continueEnalbeInputTranslation:"\u7E7C\u7E8C\u555F\u7528\u8F38\u5165\u6846\u7FFB\u8B6F",autoRenewTrialSuffix:'\uFF08\u8A66\u7528\u4E2D\uFF0C<a href="https://immersivetranslate.com/profile/?upgradeFromTrial=true" id="upgradeFromTrial">\u7ACB\u523B\u5347\u7D1A\u70BA\u6B63\u5F0F\u6703\u54E1</a>\uFF09',upgradeFromTrialTitle:"\u5347\u7D1A\u70BA\u6B63\u5F0F\u6703\u54E1",subtitle:"\u5F71\u7247\u5B57\u5E55",youtubeService:"\u6C89\u6D78\u5F0F\u7FFB\u8B6F\u5F71\u7247\u5B57\u5E55\u670D\u52D9","subtitle.disabledSubtitle":"\u6C38\u4E45\u7981\u7528\u8996\u983B\u5B57\u5E55\u529F\u80FD","subtitle.disabledSubtitleDescription":"\u5982\u679C\u6C89\u6D78\u5F0F\u7FFB\u8B6F\u7684\u8996\u983B\u5B57\u5E55\u548C\u5176\u4ED6\u64F4\u5C55\u6709\u885D\u7A81\uFF0C\u4F60\u53EF\u4EE5\u9078\u64C7\u6C38\u4E45\u7981\u7528\u6C89\u6D78\u5F0F\u7FFB\u8B6F\u7684\u8996\u983B\u5B57\u5E55\u529F\u80FD\u6216\u8005\u5378\u8F09\u5176\u4ED6\u885D\u7A81\u7684\u64F4\u5C55","subtitle.autoEnableSubtitle":"\u81EA\u52D5\u4F7F\u7528\u96D9\u8A9E\u5B57\u5E55","subtitle.autoEnableSubtitleDescription":"\u555F\u7528\u5F8C\uFF0C\u7576\u5F71\u7247\u64AD\u653E\u7684\u6642\u5019\uFF0C\u6703\u81EA\u52D5\u986F\u793A\u96D9\u8A9E\u5B57\u5E55\uFF0C\u5426\u5247\u9700\u8981\u9EDE\u64CA\u7FFB\u8B6F\u6309\u9215\u624D\u6703\u986F\u793A\u3002","subtitle.preTranslation":"\u512A\u5148\u4F7F\u7528\u6C89\u6D78\u5F0F\u7FFB\u8B6F\u5B57\u5E55","subtitle.preTranslationDescription":"\u555F\u7528\u5F8C\u6703\u512A\u5148\u7528\u4E0B\u9762\u7684\u7FFB\u8B6F\u670D\u52D9\u63D0\u524D\u7FFB\u8B6F\u6574\u500B\u5B57\u5E55\uFF0C1 \u5C0F\u6642\u7684\u8996\u8A0A\u5927\u6982\u6D88\u8017 5\u842C Tokens \u6216 \u5B57\u7B26\uFF0C\u8ACB\u914C\u60C5\u4F7F\u7528\uFF1B\u95DC\u9589\u5F8C\u5247\u512A\u5148\u4F7F\u7528\u539F\u5F71\u7247\u81EA\u5E36\u7684\u6A5F\u7FFB\u5B57\u5E55","subtitle.humanSubtitlesPreferred":"\u512A\u5148\u4F7F\u7528\u4EBA\u5DE5\u5B57\u5E55","subtitle.humanSubtitlesPreferredDescription":"\u7576\u5F71\u7247\u6709\u76EE\u6A19\u8A9E\u8A00\u4EBA\u5DE5\u5B57\u5E55\u6642\uFF0C\u512A\u5148\u4F7F\u7528\u4EBA\u5DE5\u5B57\u5E55\uFF08\u63A8\u85A6\uFF09",videoSubtitleTranslationDescription:"\u70BA\u5F71\u7247\u5B57\u5E55\u55AE\u7368\u6307\u5B9A\u4E00\u500B\u7FFB\u8B6F\u670D\u52D9",subtitleTranslating:"\u6B63\u5728\u4F7F\u7528 {service} \u670D\u52D9\u7FFB\u8B6F\u5B57\u5E55\u4E2D\uFF0C\u8ACB\u7A0D\u7B49...\uFF08\u6C89\u6D78\u5F0F\u7FFB\u8B6F\uFF09",subtitleLoading:"\u6B63\u5728\u8F09\u5165\u5B57\u5E55...",bilingual:"\u96D9\u8A9E","field.action":"\u662F\u5426\u555F\u7528\u767E\u5EA6\u8853\u8A9E","description.action":"\u555F\u7528\u5F8C\u6703\u5728\u8ACB\u6C42\u4E2D\u52A0\u5165 action=1 \u7684\u53C3\u6578\uFF0C\u4EE5\u4FBF\u544A\u77E5\u767E\u5EA6\u555F\u7528\u8853\u8A9E\uFF0C<1>\u66F4\u591A\u8AAA\u660E\u8ACB\u53C3\u8003\u5B98\u65B9\u6587\u6A94</1>",closeQuickTranslation:"\u95DC\u9589\u61F8\u6D6E\u7403","closeQuickTranslation.untilNext":"\u672C\u6B21\u95DC\u9589\u76F4\u5230\u4E0B\u6B21\u8A2A\u554F","closeQuickTranslation.currentWebsite":"\u7576\u524D\u7DB2\u7AD9\u7981\u7528","closeQuickTranslation.alwaysClose":"\u6C38\u4E45\u7981\u7528","closeQuickTranslation.settingOpen":"\uFF08\u53EF\u5728<1>\u8A2D\u5B9A\u9801</1>\u958B\u555F\uFF09","closeQuickTranslation.cancel":"\u53D6\u6D88","closeQuickTranslation.confirm":"\u78BA\u5B9A","floatBall.popup":"\u6253\u958B\u5FEB\u6377\u8A2D\u5B9A\u9762\u677F","floatBall.translate":"\u9EDE\u64CA\u7FFB\u8B6F\u8A72\u9801\u9762","floatBall.showOriginal":"\u9EDE\u64CA\u5207\u63DB\u5230\u539F\u6587","floatBall.close":"\u95DC\u9589\u61F8\u6D6E\u7403","floatBallOptions.enableDescPc":"\u555F\u7528\u9801\u9762\u61F8\u6D6E\u7403\u5F8C\uFF0C\u6703\u5728\u9801\u9762\u53F3\u5074\u986F\u793A\u4E00\u500B\u5FEB\u6377\u7FFB\u8B6F\u6309\u9215\uFF0C\u9EDE\u64CA\u5373\u53EF\u7FFB\u8B6F","floatBallOptions.enableDesc":"\u95DC\u9589\u61F8\u6D6E\u7403\u5F8C\uFF0C\u53EF\u4EE5\u7528{touch}\u559A\u8D77\u3002\u70BA\u9632\u6B62\u4E0D\u614E\u95DC\u9589\u8A72\u9078\u9805\u5F8C\u627E\u4E0D\u5230\u61F8\u6D6E\u7403\uFF0C\u5F37\u70C8\u5EFA\u8B70\u6536\u85CF\u672C\u8A2D\u5B9A\u9801","description.azureApiUrl":"\u586B\u5165\u81EA\u8A02\u7684API\u4F4D\u5740",shareBtnTitle:"\u9EDE\u64CA\u5206\u4EAB\u8A72\u96D9\u8A9E\u9801\u9762\u7D66\u670B\u53CB","floatBall.share":"\u5206\u4EAB\u9801\u9762",confirmSupportMouse:"\u5F37\u5236\u555F\u7528\u6ED1\u9F20\u652F\u63F4",confirmSupportMouseDescription:"\u6AA2\u6E2C\u5230\u7576\u524D\u700F\u89BD\u5668\u4E0D\u652F\u63F4\u6ED1\u9F20\u529F\u80FD\uFF0C\u662F\u5426\u5F37\u5236\u555F\u7528\u6ED1\u9F20\u652F\u63F4\uFF1F",sampleTargetText:"\u9577\u591C\u5C07\u81F3\uFF0C\u6211\u5F9E\u4ECA\u958B\u59CB\u5B88\u671B\uFF0C\u81F3\u6B7B\u65B9\u4F11\u3002 \u6211\u5C07\u4E0D\u5A36\u59BB\u3001\u4E0D\u5C01\u5730\u3001\u4E0D\u751F\u5B50\u3002 \u6211\u5C07\u4E0D\u6234\u5BF6\u51A0\uFF0C\u4E0D\u722D\u69AE\u5BF5\u3002 \u6211\u5C07\u76E1\u5FE0\u8077\u5B88\uFF0C\u751F\u6B7B\u65BC\u65AF\u3002",sampleSourceText:"Night gathers, and now my watch begins. It shall not end until my death. I shall take no wife, hold no lands, father no children. I shall wear no crowns and win no glory. I shall live and die at my post.","subtitle.supportedSites":"\u5DF2\u652F\u63F4\u5728\u9019\u4E9B\u7DB2\u7AD9\u4F7F\u7528\u96D9\u8A9E\u5B57\u5E55\uFF08\u6CE8\u610F\uFF1A\u7531\u65BC\u6280\u8853\u9650\u5236\uFF0C\u90E8\u5206\u7DB2\u7AD9\u5728\u9996\u6B21\u958B\u555F\u5B57\u5E55\u5F8C\u9700\u8981\u91CD\u65B0\u5237\u65B0\u9801\u9762\uFF0C\u6216\u8005\u9700\u7B49\u5F85\u7FFB\u8B6F\u5B8C\u6210\u4EE5\u986F\u793A\u96D9\u8A9E\u5B57\u5E55\uFF09\uFF1A"};var mi={nologin:"Not logged in",loginForSafari:"Sign In or Sign Up",login:"Login",manageAccount:"Manage Account",openPremium:"Upgrade to Pro",logout:"Logout",curentPlan:"Current Plan",endAt:"Expires",endAuto:"Auto Renew",lineBreakMaxTextCount:"Maximum number of characters allowed per sentence after line break","translate-pdf":"Click to translate PDF","noSupportTranslate-pdf":"The script is not supported, please use a plugin.","translate-firefox-local-pdf":"Click to upload PDF",enableLineBreak:"Whether to turn on automatic line wrapping for long paragraphs",sponsorLabel:"Sponsoring developers from $1 (monthly or one-time)",help:"Help",browserShortcutsNoteForFirefox:`To modify the shortcut key in Firefox browser, you need to open the extension management page 'about:addons', then click "Settings", and then click "Management shortcut key" to set it`,browserShortcutsNoteForChrome:"To modify the shortcut key in Chrome browser, you need to open the extension management page` chrome://extensions/shortcuts `) Settings, click the button below to jump to the shortcut key management page.",browserShortcutsSucks:"Please enter the shortcut key manually in the format:",enableLineBreakDescription:"After opening, a line break will be inserted at the end of each sentence in a long paragraph for easy reading","browser.shortBrandName":"Immersive Translate","browser.brandName":"Immersive Translate: Web Page&PDF Translation","browser.brandDescription":"Bilingual web page translation, also supports PDF, Epub eBook, Video subtitles translation, free to use.","browser.toggleTranslatePage":"Toggle Translate Page","browser.toggleTranslateTheWholePage":"Toggle Translate the Whole Page","browser.toggleOnlyTransation":"Toggle Translate and Hide Original Text","browser.toggleTranslateToThePageEndImmediately":"Toggle Translate to the Bottom of the Page Immediately","browser.toggleTranslateTheMainPage":"Toggle Translate the Main Page","browser.shareToDraft":"Share Bilingual Page","browser.openOptionsPage":"Open Settings Page","browser.toggleTranslationMask":"Toggle translation mask style","browser.translateLocalPdfFile":"Translate local PDF File","browser.openEbookViewer":"Read local e-book","browser.openEbookBuilder":"Make Dual EPUB ebook","browser.translateLocalHtmlFile":"Translate HTML/txt File","browser.donateContext":"Sponsor Benefits","browser.translateLocalSubtitleFile":"Translate Subtitle File",confirmResetConfig:"Are you sure you want to reset the settings?",translationLineBreakSettingTitle:"Line break setting",smartLineBreak:"Smart Wrap",alwaysLineBreak:"Always Wrap",isShowContextMenu:"Create right button menu",toggleBeta:"Enable Beta experimental features",betaDescription:"Enable features that are still experimental, and translation services that are in testing. Join the <1>Telegram group</1> to learn more.",translationLineBreakSettingDescription:"The always line break feature is suitable for layouts with less content, making the layout more neat and tidy. (Use smart line breaks for long paragraphs with more content (more than {count} characters) for saving space)",tempTranslateDomainTitle:"Open the translation time temporarily",tempTranslateDomainDescription:"When a page is translated manually, turn it temporarily on as automatic translation",xMinutes:"{count} minutes",disabled:"Disable",changelog:"Change Log",toggleTranslatePageWhenThreeFingersOnTheScreen:"Multi-finger touch to show/hide translation display",toggleTranslationMaskWhenThreeFingersOnTheScreen:"Multi-finger touch to show/hide the blur effect of the translation",fingerCountToToggleTranslagePageOnlyTranslationWhenTouching:"Multi-finger touch to show/hide only translation display",addUrlDescription:"The domain name is available and wildcard is supported e.g.: *.google.com, google.com/mail/*, https://www.google.com/*",general:"General",clickToExpandConfig:"Expand current configuration",import:"Import configuration from file",export:"Export to file",toggleDebug:"Print debug logs on the console","fingers.0":"Close","fingers.2":"Two-finger touch","fingers.3":"Three-finger touch","fingers.4":"Four-finger touch","fingers.5":"Five-finger touch",mouseHoldKey:"+ {key} translate/restore this paragraph",mouseHoldKeyAuto:"Translate the paragraph directly",mouseHoldKeyOff:"Do nothing",mouseHoldKeyOther:"Custom shortcut key (open settings)",mouseHoldKeyCustomKey:"{key} translate/restore this paragraph",mouseHoverHoldKey:"Mouse over and press X key to translate paragraph","mouse-translate":"Hover",document:"Document",resetSuccess:"All settings reset successful",resetThisSuccess:"Reset successful",saved:"Saved successfully",successImportConfig:"Configuration imported successfully",goAdvancedSettings:"Go to Advanced Settings Page",goAdvancedInterfaceSettings:"Go to Advanced Custom Settings Page",advanced:"Advanced",advancedDescription:"Normally no settings are needed, keep the default. More personalized settings are provided for professional users only.",developer:"Developer settings",donateCafe:"Pricing","translate to the bottom of the page":"Translate to the bottom of the page immediately after opening the page?",feedback:"Feedback",toggleTranslatePage:"Toggle Translate",translateToThePageEndImmediatelyDescription:"Enabled will translate from the top to the bottom of the page immediately after opening. Disable will translate while reading. (Not recommended to enable)","translate all areas of the page":"Whether to translate all areas of the web page",translationAreaDescription:"When enabled, all areas of the entire web page will be translated. Disabled will use the default smart recognition and translate only the main areas. (Not recommended to enable)","the number of characters to be translated first":"Directly translate the number of characters in front of the page without waiting to scroll to the visible area","interface language":"Interface language","display both the original text and the translation":"Display both the original text and the translation","keyboard shortcuts":"Keyboard shortcuts",modify:"Edit",reset:"Reset",close:"Close",homepage:"Home Page",more:"More",moreOptions:"Expand more custom settings",translateTheWholePage:"Translate the whole page area",changeToTranslateTheWholePage:"Translate the Whole Page",changeToTranslateTheMainPage:"Translate the Main Content",changeToOnlyTranslationMode:"Show Translation only",changeToDualTranslationMode:"Show Dual Translation",translateToThePageEndImmediately:"Immediately translate to the bottom ",translateTheMainPage:"Main areas of intelligent translation","The local rules are up to date":"Local  rules are up to date:","Successfully synchronized with the latest official rules:":"Successfully synced latest official rules:","Checking for updates":"Checking for update","Rules are being synchronized":"Syncing official rules",localVersionIsTooOld:"The local extension version is too old, please upgrade the extension to {minVersion} or a newer version and try to sync again.",badUserscriptBrowser:"The current browser does not correctly implement the interface of the Greasemonkey extension, please use another browser that <1>supports the Greasemonkey extension</1> such as (Firefox Nightly version)",foundNewVersion:"New version available",theLocalExtensionIsUpToUpdate:"The current extension version is up to date.",failToSyncRules:"Failed to sync latest adaptive rules",retry:"Retry",failedReason:"Failure reason",currentRuleVersion:"Current Rule Version",calculating:"Calculating",unknownError:"Unknown Error",canNotFetchRemoteRule:"Unable to fetch remote rule",enableAlphaSuccess:"Alpha enabled successfully",disableAlphaSuccess:"Alpha has been disabled",cacheSize:"Cache size:",cleaning:"Cleaning",cleanCache:"Clear cache",options:"Options",about:"About",service:"Translation Service",needAction:"(to set up)",goSettings:"to set up",needActionForOptions:"(need to set)",translationEngine:"Engine Options",sourceLanguage:"Original language",target:"Target Language",popupSourceLanguage:"Source",popupTarget:"Target",popupService:"Service",forThisSite:"Site",autoEnableSubtitle:"Auto-enable bilingual captions",alwaysTranslateSomeLanguage:"Always translate {language}",neverTranslateSomeLanguage:"Never translate {language}",alwaysTranslateSomeSite:"Always translate {hostname}",neverTranslateSomeSite:"Never translate {hostname}",alwaysTranslateSomeSiteOrWildSite:"Always translate this site",alwaysTranslateSomePage:"Always translate this page",add:"Add",default:"Default",forThisLanguage:"For This Language:","add url":"Add URL",edit:"Edit","translate other languages into specific language":"Translate other languages into the language you set","select translation service":"Select a translation service",language:"Language","show-original":"Show Original",translate:"Translate",Translated:"Translated",Translating:"Translating",Error:"Error",allowCacheTranslations:"Enable local translation caching (reduce translation requests for duplicate paragraphs)","translation display":"Translation display style","select diplay style":"Please refer to the following examples",interface:"Interface Settings",import_export:"Import/Export",import_export_title:"Import/Export Configuration",syncToGoogleDrive:"Sync Now with Google Drive",floatBallOptions:"Floating Button","floatBallOptions.enable":"Enable Float Ball","floatBallOptions.blockUrls":"Blocked Websites","floatBallOptions.add":"Add","floatBallOptions.blockUrlDesc":"Do not display the float ball when encountering the following websites","floatBallOptions.clickType":"Click Behavior","floatBallOptions.clickTypeDesc":"Behavior when clicking on the float ball icon","floatBallOptions.clickPopup":"Display Translation Panel","floatBallOptions.clickTranslate":"Translate/Show Original Text",previewAllThemes:"Preview all themes","translationTheme.none":"None","translationTheme.grey":"Black Gray","translationTheme.dashed":"Dashed underline","translationTheme.dotted":"Dotted Underline","translationTheme.dashedBorder":"Dashed Border","translationTheme.solidBorder":"Solid Border","translationTheme.underline":"Straight underline","translationTheme.mask":"Blur effect","translationTheme.opacity":"Opacity effect","translationTheme.paper":"White paper shadow effect","translationTheme.dividingLine":"Dividing line","translationTheme.highlight":"Highlight","translationTheme.marker":"Marker","translationTheme.marker2":"Maker2","translationTheme.blockquote":"quote style","translationTheme.weakening":"Weakening","translationTheme.italic":"Italic","translationTheme.bold":"Bold","translationTheme.thinDashed":"Thin dashed underline","translationTheme.nativeDashed":"System Dash Underline","translationTheme.nativeDotted":"System Dotted Underline","translationTheme.nativeUnderline":"System Straight Line Underline","translationTheme.wavy":"Squiggle","translationServices.custom":"Custom API","translationServices.tencent":"Tencent Translator","translationServices.tenAlpha":"Tencent Translator (Alpha)","translationServices.google":"Google Translate","translationServices.bai":"Baidu (Alpha)","translationServices.baidu":"Baidu translation","translationServices.aliyun":"Aliyun Translator","translationServices.volc":"Volcano Translation","translationServices.deeplx":"DeepLX (Alpha)","translationServices.bing":"Microsoft Translator","translationServices.deepl":"DeepL","translationServices.wechat":"Wechat translation","translationServices.azure":"Azure Translator","translationServices.ibm":"IBM Watson","translationServices.aws":"Amazon Translate","translationServices.mock":"Mock translation","translationServices.mock2":"Mock Translation2","translationServices.caiyun":"Caiyun Translation","translationServices.cai":"Caiyun Translation (Alpha)","translationServices.volcAlpha":"Volcano Translation (Alpha)","translationServices.openl":"OpenL","translationServices.youdao":"Youdao Translation","translationServices.you":"Youdao Translation (Alpha)","translationServices.transmart":"Tencent Smart Translation","translationServices.niu":"Niu Translation","translationServices.papago":"Papago Translation","translationServices.d":"DeeplX (Alpha)","translationServices.dpro":"D Pro (Canary)","translationServices.openai":"OpenAI","translationServices.chatgpt":"ChatGPT Web(3.5 mobile)","translate title":"Translate page title","always languages":"Always translate the following languages",neverTranslateLanguagesLabel:"Never Translated Languages",neverTranslateTheFollowingLanguagesDescription:"When a paragraph on a page is in one of the following languages, the translation will be skipped",enableUserscriptPagePopup:"Always show Popup windows on the page",enableUserscriptPagePopupDescription:"Three-finger touch to show the Popup.","always translate the following languages":"The following languages will always be translated","always sites":"Always translate the following sites","always translate the following sites":"The following sites will always be translated","never sites":"Never translate the following sites","never translate the following sites":"The following sites will never be translated","please refer to":"It can only be used after filling in the key. For details, please refer to",KeyAndConfigurationTutorial:"Key Application and Configuration Tutorial",useAboveStyleForTheseSites:"Sites that always use the {theme} translation style",currentUrl:"Current URL",confirm:"Save",cancel:"Cancel",delete:"Delete","languages.auto":"Detect Language",syncToCloud:"Sync to cloud",syncToCloudDescription:"Upload the configuration to the cloud server, and you can synchronize the configuration between different browsers or Tampermonkey scripts, based on the last modification time.",syncToAccount:"Sync to account",syncToAccountButton:"Sync to account now",syncToAccountDescription:"Uploaded to the logged-in account, the configuration can be synchronized between different devices, and the last modification time shall prevail.",successSyncConfigInAccount:"Successfully synced with account",successSyncConfigToAccount:"Successfully synchronized to account",syncConfigNoUpdate:"Already up to date",authFail:"Authorization Failed",syncTitle:"Please select a file operation",import_hint:"Import",upload:"Upload",revokeAuth:"Revoke Authorization",uploadFail:"Upload Failed",download:"Download",importSuccess:"Upload Success",importFail:"Import Failed",deleteFail:"Delete Failed",backupToCloud:"Manage backup files manually",create_new_backup:"Add backup node",maxBackupFiles:"Up to{count}different nodes can be backed up. Please delete unneeded nodes",backupToCloudDescription:"Upload or restore backup files manually, up to 3 different backups",successSyncConfig:"Successfully synced with cloud",syncFail:"Synchronization failed",updatedAt:"Updated at {date}",lastSyncedAt:"Last checked at {date}",downloadFail:"Download failed",clickToDownload:"Click to download",aboutLabel:"About - Feedback ","browser.openAboutPage":"About / Feedback/Sponsor",aboutLabelWithoutSponsor:"About - Feedback",aboutIntro:"We hope that users will all have more accessible and more enjoyable access to the enormous amount of foreign language information available on the Internet \u2764\uFE0F. You can choose to subscribe to <6>Pro membership</6> to use the out-of-the-box DeepL and OpenAI translation.<br/><br/> You can also follow out <3>Twitter</3>, <4>Telegram Channel</4>, and <5>Email Subscription</5> below to track updates. <br/> <7>Pro members</7> can contact us through the fast customer service email <8>support@immersivetranslate.com</8>.",aboutIntroWithoutSponsor:"The extension is completely free and we hope that users will all have more accessible and more enjoyable access to the enormous amount of foreign language information available on the Internet \u2764\uFE0F. ",projectHomepage:"Project Homepage",joinTelegramGroup:"Join our communities for feature discussion",wechatPublicAccount:"Wechat Official Account",wechatCommunities:"Wechat Group",qqCommunities:"QQ Channel",joinTelegramChannel:"Subscribe to our Telegram channel to get the latest updates",feedbackAndJoin:"Feedback",autoSync:"Auto-Time Sync",loadingThemeTitle:"Loading Style",loadingThemeDescription:"Set the style of waiting for the translation to load","loadingTheme.spinner":"Spinning icon","loadingTheme.text":"Static Text... ","loadingTheme.none":"Disabled",developerDescription:"You can click <1>here</1> to see the documentation related to advanced customization","edit border color":"Edit border color",successSyncButNoChange:"The current configuration is consistent with that in the cloud server",customTheme:"Customize colors and sizes","customThemeLabel.borderColor":"Border color","customThemeLabel.borderRadius":"Border Round Corner","customThemeLabel.textColor":"Text color","customThemeLabel.backgroundColor":"Background color","customThemeLabel.zoom":"Font scale (%)","customThemeLabel.opacity":"Text opacity (%)",resetToDefaultColor:"Reset to default colors",resetToDefaultSettings:"Reset to default settings",isTranslateTitle:"Enable translate page title",isTranslateTitleDescription:"When enabled, the page title will be translated",enableSearchEnhancement:"Enable Search Enhancement",enableSearchEnhancementDescription:'After enabling, the right sidebar will automatically display "Google News" search results for corresponding English keywords on supported websites (such as Google News, Google Search (partial keywords), Xueqiu, East Money, Futu, Tiger Community).',verifyService:"Verify service",verified:"Successful","field.langs":"Supported Language Code","field.model":"Model","field.translationEngine":"Translation engine","field.limitPerMinute":"Max requests per minute","field.limitPerSecond":"Max requests per second","field.maxTextLengthPerRequest":"Maximum text length per request","field.maxTextGroupLengthPerRequest":"Maximum number of paragraphs per request","field.apiUrl":"Custom API interface address","field.placeholderDelimiters":"Reserved placeholders","description.custom":"<a href='https://immersivetranslate.com/docs/services/custom/' target='_blank'>Custom interface access</a> requires reference documents","description.limitPerMinute":"When the number of requests exceeds this limit, it will be temporarily suspended until the beginning of the next minute. Due to various limitations of OpenAI's current services, please click <1>here</1> to view the latest suggested values","description.limitPerSecond":"When the number of requests exceeds this limit, it will be temporarily suspended until the beginning of the next second. Due to various limitations of OpenAI's current services, please click <1>here</1> to view the latest suggested values","description.generalLimitPerSecond":"Requests exceed this limit will be queued until the next seconds.","description.prompt":"Send as a user to OpenAI conversation, where {{text}} indicates the text of the paragraph,{{from}} indicates the language of the paragraph,{{to}} indicates the target language, you can omit {{text}}, if so, it'll be sent as a separated message","description.maxTextLengthPerRequest":"By default multiple paragraphs will be merged to reduce the number of requests, but if the total length of the paragraphs is too long, it may also cause the interface to respond slowly, so you can try to adjust this option to optimize speed","description.systemPrompt":"Send the conversation to OpenAI as a system, where {{text}} represents the text content of the paragraph, {{from}} represents the original language of the paragraph, and {{to}} represents the target language.","field.domain":"Domain","description.domain":"Default is\uFF1Ageneral. Only set up if there is an API console open domain translation, support fields see <1>Here </1>","field.scene":"Scene","description.scene":"Default is\uFF1Ageneral. Only set up if there is an API console open Machine Translation Professional, support fields see<1>Here</1>","field.vocabId":"User dictionary ID","description.vocabId":"Specified dictionary out_id, currently supported in English translation","description.model":"OpenAI's models, such as gpt-3.5-turbo, gpt-4, etc","description.maxTextGroupLengthPerRequest":"The number of paragraphs sent to translation service each time. Sending too many paragraphs to OpenAI at once can slow down the interface.","description.apiUrl":"Please provide a URL with the specific path.",enabledExtension:"Enable extensions",clickToDisableExtension:"Click to disable extension",clickToEnableExtension:"Click to enable the extension",hasBeenDisabled:"Disabled","show password":"Show password",customContent:"Enter customization content",inputOptions:"Writing",mouseHoverOptions:"Mouse Hover",modifyMouseHoverKey:"Modify mouse hover shortcuts",enableInputTranslation:"enhanced input box?",enableInputTranslationDescription:"When enabled, enter {startingKey}{startingKey} direct in the input box and hit{inputTrailingTriggerKeyRepeatTimes}times{trailingKey}, translated into {inputTargetLanguage}",enableInputTranslationDescriptionForNoneKey:'When enabled, simply enter "Hello World" in the input box, then quickly press {inputTrailingTriggerKeyRepeatTimes} times on {trailingKey}, and it will be translated into the default target language.',inputTargetLanguage:"Set the default target language for the input box",inputTargetLanguageDescription:"The default target language for the translation input box, which is {startingKey}{startingKey} as the default language for triggering words.",inputTargetLanguageDescriptionForNoneKey:"Default target language for translation input box",inputStartingTriggerKeyTitle:"Set the delimiter for translating part of the input box.",inputStartingTriggerKeyDescription:"When you don't need to translate the entire input box, the delimiter allows you to only translate the portion from {startingKey}{startingKey} to the end of the input box. You can also specify a language code, for example: {startingKey}ja means only translating the portion from {startingKey}ja to the end of the input box.",inputStartingTriggerKeyDescriptionForNoneKey:"The current setting is no prefix required, the partial text translation function of the input box cannot be used temporarily.",inputTrailingTriggerKeyTitle:"Select a trigger character to indicate the end of input.",inputTrailingTriggerKeyDescription:"Start the translation by quickly pressing 3 times {trailingKey}.",inputTrailingTriggerKeyTimeout:"Enter the interval time to end the trailing trigger",inputTrailingTriggerKeyTimeoutDescription:"Set the interval time (milliseconds) for the input to end the combo trigger",spaceKey:"<spacekey>",noneKey:"Translate the entire text box without prefixes",inputTranslationBlockUrlsTitle:"Do not enable input box enhancement in the following URL",inputTranslationBlockUrlsDescription:"The input box enhancement will not work in the following URL",clickToSeeQuickDemo:"Click to expand the 30s tutorial video",inputHelperInfo:`Note: We have optimized the system to address an issue where certain characters in Chinese input methods were being converted into Chinese punctuation marks. For instance, when using Sogou Input Method, "/" would be changed to "\u3001". We now recognizes all corresponding Chinese symbols as triggering characters, including "//" and "\u3001\u3001".


{{text}}`,optional:!0}]},transmart:{name:"Transmart",homepage:"https://transmart.qq.com/"},youdao:{name:"Youdao",homepage:"https://youdao.com/",docUrl:"https://immersivetranslate.com/docs/services/youdao/",allProps:[{name:"appId",required:!0,type:"text"},{name:"appSecret",required:!0,type:"password"},{name:"limit",required:!1,labelKey:"field.limitPerSecond",descriptionKey:"description.generalLimitPerSecond",type:"number",default:5,optional:!0},{name:"maxTextLengthPerRequest",required:!1,labelKey:"field.maxTextLengthPerRequest",descriptionKey:"description.maxTextLengthPerRequest",type:"number",default:1200,optional:!0},{name:"maxTextGroupLengthPerRequest",required:!1,labelKey:"field.maxTextGroupLengthPerRequest",descriptionKey:"description.maxTextGroupLengthPerRequest",type:"number",default:200,optional:!0},{name:"domain",required:!1,labelKey:"field.domain",descriptionKey:"description.domain",descriptionLink1:"https://fanyi.youdao.com/openapi/",type:"text",default:"general",optional:!0},{name:"vocabId",required:!1,labelKey:"field.vocabId",descriptionKey:"description.vocabId",type:"text",default:"",optional:!0}]},tencent:{name:"Tencent",homepage:"https://fanyi.qq.com/",docUrl:"https://immersivetranslate.com/docs/services/tencent/",allProps:[{name:"secretId",required:!0,type:"text"},{name:"secretKey",required:!0,type:"password"}]},aliyun:{name:"Aliyun",homepage:"https://translate.alibaba.com/",docUrl:"https://immersivetranslate.com/docs/services/aliyun/",allProps:[{name:"AccessKeyID",required:!0,type:"text"},{name:"AccessKeySecret",required:!0,type:"password"},{name:"scene",labelKey:"field.scene",descriptionKey:"description.scene",descriptionLink1:"https://help.aliyun.com/document_detail/158267.html",required:!1,optional:!0,type:"text",default:"general"}]},azure:{name:"azure",homepage:"https://learn.microsoft.com/en-us/azure/cognitive-services/translator/text-translation-overview",docUrl:"https://immersivetranslate.com/docs/services/azure/",allProps:[{name:"region",required:!1,default:"eastasia",type:"text"},{name:"APIKEY",required:!0,type:"password"},{name:"apiUrl",labelKey:"field.apiUrl",required:!1,type:"text",default:"https://api.cognitive.microsofttranslator.com/",descriptionKey:"description.azureApiUrl",optional:!0}]},papago:{name:"Papago",homepage:"https://translate.google.com/",canary:!0},baidu:{name:"Baidu",homepage:"https://fanyi.baidu.com/",docUrl:"https://immersivetranslate.com/docs/services/baidu/",allProps:[{name:"appid",required:!0,type:"text"},{name:"key",required:!0,type:"password"},{name:"limit",required:!1,labelKey:"field.limitPerSecond",descriptionKey:"description.generalLimitPerSecond",type:"number",default:1,optional:!0},{name:"maxTextLengthPerRequest",required:!1,labelKey:"field.maxTextLengthPerRequest",descriptionKey:"description.maxTextLengthPerRequest",type:"number",default:1800,optional:!0},{name:"maxTextGroupLengthPerRequest",required:!1,labelKey:"field.maxTextGroupLengthPerRequest",descriptionKey:"description.maxTextGroupLengthPerRequest",type:"number",default:8,optional:!0},{name:"action",required:!1,labelKey:"field.action",descriptionKey:"description.action",descriptionLink1:"https://fanyi-api.baidu.com/doc/21",type:"boolean",default:!1,optional:!0}]},volc:{name:"Volc",homepage:"https://www.volcengine.com/",docUrl:"https://immersivetranslate.com/docs/services/volcano/",allProps:[{name:"accessKeyId",required:!0,type:"text"},{name:"secretAccessKey",required:!0,type:"password"},{name:"limit",required:!1,labelKey:"field.limitPerSecond",descriptionKey:"description.generalLimitPerSecond",type:"number",default:5,optional:!0},{name:"maxTextLengthPerRequest",required:!1,labelKey:"field.maxTextLengthPerRequest",descriptionKey:"description.maxTextLengthPerRequest",type:"number",default:1800,optional:!0},{name:"maxTextGroupLengthPerRequest",required:!1,labelKey:"field.maxTextGroupLengthPerRequest",descriptionKey:"description.maxTextGroupLengthPerRequest",type:"number",default:8,optional:!0}]},caiyun:{name:"Caiyun",homepage:"https://fanyi.caiyunapp.com/",docUrl:"https://immersivetranslate.com/docs/services/caiyun/",allProps:[{name:"token",required:!0,type:"password"}]},cai:{name:"Cai",homepage:"https://fanyi.caiyunapp.com/",alpha:!0},custom:{name:"Custom",beta:!0,homepage:"https://immersivetranslate.com/docs/services/custom/",titleKey:"description.custom",allProps:[{name:"url",label:"API URL",required:!0,type:"text"},{name:"langs",required:!1,labelKey:"field.langs",type:"textarea",default:"zh-CN,en",optional:!0},{name:"placeholderDelimiters",required:!1,labelKey:"field.placeholderDelimiters",type:"text",default:Di,optional:!0},{name:"limit",required:!1,labelKey:"field.limitPerSecond",descriptionKey:"description.generalLimitPerSecond",type:"number",default:5,optional:!0},{name:"maxTextLengthPerRequest",required:!1,labelKey:"field.maxTextLengthPerRequest",descriptionKey:"description.maxTextLengthPerRequest",type:"number",default:1200,optional:!0},{name:"maxTextGroupLengthPerRequest",required:!1,labelKey:"field.maxTextGroupLengthPerRequest",descriptionKey:"description.maxTextGroupLengthPerRequest",type:"number",default:1,optional:!0}]},mock:{name:"Mock",homepage:"https://www.google.com"},mock2:{name:"Mock2",homepage:"https://www.google.com"},tenAlpha:{name:"TenAlpha",homepage:"https://fanyi.qq.com/",alpha:!0},you:{name:"You",alpha:!0,homepage:"https://youdao.com/"},openl:{name:"Openl",homepage:"https://openl.club/",docUrl:"https://immersivetranslate.com/docs/services/openL/",allProps:[...Pi,{type:"password",name:"apikey",required:!0}],props:Pi},volcAlpha:{name:"Volc Alpha",alpha:!0,homepage:"https://www.volcengine.com/"},d:{name:"D () ",canary:!0,homepage:"https://www.deepl.com/translator"},dpro:{name:"DPro (Canary) ",canary:!0,homepage:"https://www.deepl.com/translator"},deeplx:{name:"DeepLX (Beta)",beta:!0,homepage:"https://www.deepl.com/translator",allProps:[{name:"url",label:"API URL",required:!0,type:"text"},{name:"limit",required:!1,labelKey:"field.limitPerSecond",descriptionKey:"description.generalLimitPerSecond",type:"number",default:5,optional:!0},{name:"maxTextLengthPerRequest",required:!1,labelKey:"field.maxTextLengthPerRequest",descriptionKey:"description.maxTextLengthPerRequest",type:"number",default:1200,optional:!0},{name:"maxTextGroupLengthPerRequest",required:!1,labelKey:"field.maxTextGroupLengthPerRequest",descriptionKey:"description.maxTextGroupLengthPerRequest",type:"number",default:1,optional:!0}]},niu:{name:"niutrans",homepage:"https://niutrans.com/",docUrl:"https://immersivetranslate.com/docs/services/niu",allProps:[{name:"APIKEY",required:!0,type:"password"}]}},$p={type:W+"ChildFrameToRootFrameIdentifier"};var Zp=it()?"https://dash.immersivetranslate.com/#general":"http://localhost:8000/dist/userscript/options/#general";var St="user_info",Jp=it()||dt()?"https://api2.immersivetranslate.com":"https://test-api2.immersivetranslate.com",Xp=it()||dt()?"https://immersivetranslate.com/accounts/login?from=plugin":"https://test.immersivetranslate.com/accounts/login?from=plugin",sl=it()||dt()?"https://immersivetranslate.com/profile":"https://test.immersivetranslate.com/profile",Wa=it()||dt()?"https://immersivetranslate.com/pricing":"https://test.immersivetranslate.com/pricing",ll=it()||dt()?"https://immersivetranslate.com/topup?type=open_ai&":"https://test.immersivetranslate.com/topup?type=open_ai&",cl=it()||dt()?"https://immersivetranslate.com/topup?type=deepl&":"https://test.immersivetranslate.com/topup?type=deepl&",em=Wa+"?utm_source=extension&utm_medium=extension&utm_campaign=popup_more",tm=Wa+"?utm_source=extension&utm_medium=extension&utm_campaign=popup_footer",am=Wa+"?utm_source=extension&utm_medium=extension&utm_campaign=error_modal",nm=ll+"utm_source=extension&utm_medium=extension&utm_campaign=error_modal",im=cl+"utm_source=extension&utm_medium=extension&utm_campaign=error_modal",rm=sl+"?utm_source=extension&utm_medium=extension&utm_campaign=error_modal&upgradeFromTrial=true";var wt=console,ja=class{#e=performance.now();reset(){this.#e=performance.now()}stop(t){let n=performance.now(),a=Math.round(n-this.#e),i=Ke.green;a>1e4?i=Ke.red:a>1e3&&(i=Ke.yellow),wt.debug(Ke.dim(pt+" TIMING:"),t,"in",i(a+"ms")),this.#e=n}},Ft=class{#e=1;get level(){return this.#e}setLevel(t){switch(t){case"debug":this.#e=0;break;case"info":this.#e=1;break;case"warn":this.#e=2;break;case"error":this.#e=3;break;case"fatal":this.#e=4;break}}debug(...t){this.#e<=0&&wt.log(Ke.dim(pt+" DEBUG:"),...t)}v(...t){this.#e<=0}info(...t){this.#e<=1&&wt.log(Ke.green(pt+" INFO:"),...t)}l(...t){this.#e<=1}warn(...t){this.#e<=2&&wt.warn(Ke.yellow(pt+" WARN:"),...t)}error(...t){this.#e<=3&&wt.error(Ke.red(pt+" ERROR:"),...t)}fatal(...t){this.#e<=4&&wt.error(Ke.red(pt+" FATAL:"),...t)}timing(){return this.level===0?new ja:{reset:()=>{},stop:()=>{}}}},je=new Ft;function Ii(e){if(typeof e!="string")return"auto";let t=e.toLowerCase();if(t==="und")return"auto";if(t==="zh"||t==="zh-hans")return"zh-CN";if(t==="zh-hant"||t==="zh-hk")return"zh-TW";if(t==="iw")return"he";if(t==="jv")return"jw";let n=ta.map(i=>i.toLowerCase()),a=n.indexOf(t);if(a===-1)if(t.indexOf("-")>=0){t=t.split("-")[0];let i=n.indexOf(t);return i===-1?"auto":ta[i]}else return"auto";else return ta[a]}function aa(e){return!!(e&&e.subscription&&e.subscription.subscriptionStatus==="active")}var Mi=W+"SyncStoreKey_";function xt(e,t){let n=Mi+e;return oe.storage.sync.get(n).then(a=>a[n]===void 0?t:a[n])}function At(e,t){let n=Mi+e;return oe.storage.sync.set({[n]:t})}var ul=W+"StoreKey_";function Bt(e,t){let n=ul+e;return oe.storage.local.get(n).then(a=>a[n]===void 0?t:a[n])}var gt=W+"CacheKey_";function dl(e,t){let n=gt+e;return oe.storage.local.get(n).then(a=>a[n]===void 0?t:a[n])}function pl(){let e=oe.storage.local.refresh;e&&e()}function ml(e,t){let n=gt+e;return oe.storage.local.get(n).then(a=>{if(a[n]===void 0)return t;let{value:i,expired:r}=a[n];return r&&r<Date.now()?t:i})}function gl(e,t,n){let a=gt+e,i=Date.now()+n;return oe.storage.local.set({[a]:{value:t,expired:i}})}function hl(e,t){let n=gt+e;return oe.storage.local.set({[n]:t})}function fl(e){let t=gt+e;return oe.storage.local.remove(t)}async function bl(){let e=await oe.storage.local.get(null);if(e){let n=Object.keys(e).filter(a=>a.startsWith(gt)).filter(a=>a!==gt+St);if(n.length>0)return oe.storage.local.remove(n)}}var na={get:dl,set:hl,getExpired:ml,setExpired:gl,remove:fl,clear:bl,refresh:pl};var ht=class extends Error{details;constructor(t,n,a){super(n),this.name=t,a&&(this.details=a)}};async function Oi(e){let t;if(e&&e.retry&&e.retry>0)try{t=await Sa(zi.bind(null,e),{multiplier:2,maxAttempts:e.retry})}catch(n){throw n&&n.name==="RetryError"&&n.cause?n.cause:n}else t=await zi(e);return t}async function zi(e){e.body;let{url:t,responseType:n,...a}=e;n||(n="json"),a={mode:"cors",...a};let i=!0;e.fetchPolyfill&&(i=!1);let r=e.fetchPolyfill||fetch,o=3e5;if(e.timeout&&(o=e.timeout),i){let l=new AbortController,u=l.signal;setTimeout(()=>{l.abort()},o),a.signal=u}let s;try{s=await r(t,a)}catch(l){je.debug("fetch error",t,l);let u=l.message||"";throw l.message="\u7F51\u7EDC\u95EE\u9898\uFF0C\u65E0\u6CD5\u8FDE\u63A5\u5230\u670D\u52A1\uFF0C\u8BF7\u68C0\u67E5\u4F60\u7684\u4EE3\u7406\u6216\u672C\u5730\u7F51\u7EDC\u8FDE\u63A5\u540E\u91CD\u8BD5\u3002 "+u,l}if(s.ok&&s.status>=200&&s.status<400){if(n==="json")return await s.json();if(n==="text")return await s.text();if(n==="raw"){let l=await s.text(),u=Object.fromEntries([...s.headers.entries()]),d=s.url;return d||(s.headers.get("X-Final-URL")?d=s.headers.get("X-Final-URL"):d=t),{body:l,headers:u,status:s.status,statusText:s.statusText,url:d}}else if(n==="stream"){let l="",u;if(s.body&&s.body instanceof ReadableStream)for await(let d of Tl(s.body)){let m=new TextDecoder().decode(d);l+=m;let f;for(;(f=l.indexOf(`
`))>=0;){let g=l.slice(0,f).trim();if(l=l.slice(f+1),g.startsWith("event:")||g==="")continue;let A="";if(g.startsWith("data:")&&(A=g.slice(5).trim()),A==="[DONE]")break;let K;try{K=JSON.parse(A??"")}catch(F){je.debug("json error",F);continue}u=K}}return u}}else{let l;try{l=await s.text()}catch(g){je.error("parse response failed",g)}l&&je.error("fail response",l);let u="";l&&(u=l.slice(0,280));let d="\u670D\u52A1\u8FD4\u56DE\u9519\u8BEF\uFF0C\u4EE3\u7801:"+s.status+": "+(s.statusText||"")+u,f=new URL(t).hostname.endsWith(".immersivetranslate.com");throw s.status===429?f?u.includes("quota exceeded")?d="ProQuota:"+u:d=`\u670D\u52A1\u8FD4\u56DE\u9519\u8BEF\u7801\uFF1A429\uFF0C\u5177\u4F53\u539F\u56E0\uFF1A ${u} \u8BF7\u7A0D\u540E\u518D\u8BD5\u3002`:d=`\u670D\u52A1\u8FD4\u56DE\u9519\u8BEF\uFF1A429\uFF0C\u8BF4\u660E\u8BF7\u6C42\u8FC7\u4E8E\u9891\u7E41\u6216\u8D85\u51FA\u989D\u5EA6\u9650\u5236\uFF0C\u8BF7\u7A0D\u540E\u518D\u8BD5\u3002 ${u}`:s.status===403?d=`\u670D\u52A1\u8FD4\u56DE\u9519\u8BEF\uFF1A403\uFF0C \u8BF4\u660E\u6682\u65F6\u6CA1\u6709\u6743\u9650\u8BBF\u95EE\u8BE5\u670D\u52A1\u3002 ${u}`:s.status===400?d=`\u670D\u52A1\u8FD4\u56DE\u9519\u8BEF\uFF1A400\uFF0C \u8BF4\u660E\u8BF7\u6C42\u53C2\u6570\u9519\u8BEF\uFF0C\u8BF7\u68C0\u67E5\u76F8\u5E94\u914D\u7F6E\u3002 ${u}`:s.status===502?d=`\u670D\u52A1\u8FD4\u56DE\u9519\u8BEF\uFF1A502\uFF0C \u8BF4\u660E\u670D\u52A1\u8D85\u65F6\uFF0C\u8BF7\u7A0D\u540E\u518D\u8BD5\u3002 ${u}`:s.status===401&&(d=`\u670D\u52A1\u8FD4\u56DE\u9519\u8BEF\uFF1A401\uFF0C \u8BF4\u660E\u672A\u767B\u5F55\u6216\u767B\u5F55\u6001\u5931\u6548\uFF0C\u8BF7\u91CD\u65B0\u767B\u5F55\u3002 ${u}`),new ht("fetchError",d,l)}}async function*Tl(e){let t=e.getReader();try{for(;;){let{done:n,value:a}=await t.read();if(n)return;yield a}}finally{t.releaseLock()}}var yl=new Map;function Ri(e){let t=vl(64),n=new CustomEvent(Ci,{detail:JSON.stringify({...e,type:"ask",id:t})});return document.dispatchEvent(n),new Promise((a,i)=>{yl.set(t,(r,o)=>{r?i(r):a(o)})})}function vl(e){let t="",n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",a=n.length,i=0;for(;i<e;)t+=n.charAt(Math.floor(Math.random()*a)),i+=1;return t}var Ni={manifest_version:3,name:"__MSG_brandName__",description:"__MSG_brandDescription__",version:"0.12.3",default_locale:"en",background:{service_worker:"background.js"},web_accessible_resources:["styles/inject.css","pdf/index.html","video-subtitle/inject.js"],content_scripts:[{matches:["<all_urls>","file:///*","*://*/*"],js:["content_script.js"],run_at:"document_end",all_frames:!0},{matches:["<all_urls>","file:///*","*://*/*"],js:["content_start.js"],run_at:"document_start",all_frames:!0}],commands:{toggleTranslatePage:{suggested_key:{default:"Alt+A"},description:"__MSG_toggleTranslatePage__"},toggleTranslateTheWholePage:{suggested_key:{default:"Alt+W"},description:"__MSG_toggleTranslateTheWholePage__"},toggleOnlyTransation:{description:"__MSG_toggleOnlyTransation__"},toggleTranslateToThePageEndImmediately:{description:"__MSG_toggleTranslateToThePageEndImmediately__"},toggleTranslateTheMainPage:{description:"__MSG_toggleTranslateTheMainPage__"},toggleTranslationMask:{description:"__MSG_toggleTranslationMask__"},shareToDraft:{description:"__MSG_shareToDraft__"}},options_page:"options.html",options_ui:{page:"options.html",open_in_tab:!0,browser_style:!1},permissions:["storage","activeTab","contextMenus","webRequest","webRequestBlocking","declarativeNetRequestWithHostAccess","declarativeNetRequestFeedback","declarativeNetRequest"],host_permissions:["<all_urls>"],declarative_net_request:{rule_resources:[{id:"ruleset_1",enabled:!0,path:"rules/request_modifier_rule.json"}]},action:{default_popup:"popup.html",default_icon:{"32":"icons/32.png","48":"icons/48.png","64":"icons/64.png","128":"icons/128.png","256":"icons/256.png"}},browser_action:{default_icon:"icons/32.png",default_popup:"popup.html",theme_icons:[{dark:"icons/32.png",light:"icons/dark-32.png",size:32},{dark:"icons/48.png",light:"icons/dark-48.png",size:48},{dark:"icons/64.png",light:"icons/dark-64.png",size:64},{dark:"icons/128.png",light:"icons/dark-128.png",size:128},{dark:"icons/256.png",light:"icons/dark-256.png",size:256}]},icons:{"32":"icons/32.png","48":"icons/48.png","64":"icons/64.png","128":"icons/128.png","256":"icons/256.png"},browser_specific_settings:{gecko:{id:"{5efceaa7-f3a2-4e59-a54b-85319448e305}",strict_min_version:"63.0"},gecko_android:{strict_min_version:"113.0"}},key:"MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA7JPn78UfqI3xIIOPPLPS74UTzLfJL1gQM8hlk/deKWvFP/WqUBnPJPdhQeF45sFpI1OjO70nFqdATT4/RwYAiZK7G/E6m27MDVnhHjszfzReOuoAEn9J3RnE2xEx5pFhRFcelhnwTTLrrn90aaPcaMtNsgXtZA1Ggz/SnX9I4ZygqpJYjx3Ql2t6SyNK222oRQiKMT93Rrjgyc8RFA7FKXsWglG0TvseRjbmG5Jk5gDx+2/YTcWGqCDotQnWnkPj/dBO23UAX7IpyJK3FGYdkvWFih6OVClHIIWY8mfCjjwSGbXNQNesaa9F2hrzBZ5MRTj4m7yj76mGxuPHPIE8mwIDAQAB"};function Fi(){return Ni.version}function ia(){try{let e=nt().PDF_VIEWER_URL;return globalThis.location.href.startsWith(e)?!1:globalThis.self!==globalThis.top}catch{return!0}}var Ut=new Map,qt=class{fromType;logger;constructor(t,n=!1){this.logger=new Ft,n&&this.logger.setLevel("debug"),this.fromType=t,Ut.has(t)||(Ut.set(t,new Map),oe.runtime.onMessage.addListener((a,i,r)=>{let o=a.from,s=a.to,l,u,d;i.tab&&i.tab.id&&(l=i.tab.id,o=`${o}:${l}`,u=i.tab.url,d=i.tab.active),this.logger.debug(`${a.to} received message [${a.payload.method}] from ${a.from}`,a.payload.data?a.payload.data:" ");let m=Ga(s),{type:f,name:g}=m;if(f!==t)return!1;let A=Ga(o),F=Ut.get(f).get(g);if(!F)return this.logger.debug(`no message handler for ${f}:${s}, but it's ok`),!1;let{messageHandler:p,sync:re}=F,O={type:t,name:A.name,id:l,url:u,active:d};if(re){try{let Y=p(a.payload,O);r({ok:!0,data:Y})}catch(Y){r({ok:!1,errorName:Y.name,errorMessage:Y.message,errorDetails:Y.details})}return!1}else return p(a.payload,O).then(Y=>{r({ok:!0,data:Y})}).catch(Y=>{r({ok:!1,errorName:Y.name,errorMessage:Y.message,errorDetails:Y.details})}),!0}))}getConnection(t,n,a){let i=!1;a&&a.sync&&(i=!0);let r=this.fromType,o=Ut.get(r);if(o.has(t))return o.get(t).connectionInstance;{let s=new Ha(`${r}:${t}`,this.logger);return Ut.get(r).set(t,{messageHandler:n,sync:i,connectionInstance:s}),s}}},Ha=class{from;logger;constructor(t,n){this.from=t,this.logger=n}async sendMessage(t,n){let a=Ga(t),{type:i,id:r}=a;if(i!=="content_script"){let o={to:t,from:this.from,payload:n};this.logger.debug(`${o.from} send message [${o.payload.method}] to ${o.to}`,o.payload.data?o.payload.data:" ");try{let s=await oe.runtime.sendMessage(o);return Bi(o,s,this.logger)}catch(s){if(i==="popup"){let l=`popup ${t} is not active, so the message does not send, ignore this error, ${JSON.stringify(n)}`;return this.logger.debug(l,n,t,s),Promise.resolve({message:l})}else throw s}}else{let o={from:this.from,to:t,payload:n};this.logger.debug(`${o.from} send message [${o.payload.method}] to ${o.to}`,o.payload.data?o.payload.data:" ");let s=await oe.tabs.sendMessage(r,o);return Bi(o,s,this.logger)}}};function Bi(e,t,n){if(t){if(t.ok)return n.debug(`${e.from} received response from ${e.to}:`,t.data?t.data:" "),t.data;throw new ht(t.errorName||"UnknownError",t.errorMessage||"Unknown error",t.errorDetails)}else throw new ht("noResponse","Unknown error")}function Ga(e){let t=e.split(":");if(t.length<2)throw new Error("not a valid to string");let n={type:t[0],name:t[1]};if(t[0]==="content_script"){let a=parseInt(t[2]);if(!isNaN(a))n.id=a;else throw new Error("tab id not a valid number")}return n}var ra;function Va(){return ra||(ra=new qt("content_script",!1).getConnection("pure_main",()=>{}),ra)}var Ui="G-MKMD9LWFTR";async function Ki(e,t){try{let n=nt();if(n.INSTALL_FROM==="firefox_store")return;let i=Ge(),r=ia(),o=n.PROD==="1",s="sitc4WmvShWYwfU0dANM3Q",l=await xt("fakeUserId","");l||(l=await Bt("fakeUserId",""),l&&await At("fakeUserId",l));let u=Fi(),d=new Date,m=await xt("installedAt","");m||(m=await Bt("installedAt",""),m&&await At("installedAt",m)),l?m||(m=new Date(0).toISOString(),await At("installedAt",m)):(l=wl(32),await At("fakeUserId",l)),m||(m=d.toISOString(),await At("installedAt",m));let f=new Date(m),g=qi(f),A=qi(d),K=g===A,F=d.getTime()-f.getTime()<7*24*60*60*1e3,p=`https://www.google-analytics.com/mp/collect?measurement_id=${Ui}&api_secret=${s}`;o||(p=`https://www.google-analytics.com/debug/mp/collect?measurement_id=${Ui}&api_secret=${s}`);let re="";typeof navigator<"u"&&(re=window.navigator.userAgent);let O=Zt.parse(re),Y=t.map(P=>{let h=P.params||{};return O.os&&(h.os_name=O.os.name||"unknown",h.os_version=O.os.version||"unknown",h.os_version_name=O.os.versionName||"unknown"),O.browser&&(h.browser_name=O.browser.name||"unknown",h.browser_version=O.browser.version||"unknown"),O.platform&&(h.platform_type=O.platform.type||"unknown"),O.engine&&(h.engine_name=O.engine.name||"unknown",h.engine_version=O.engine.version||"unknown"),u&&(h.version=u),n.INSTALL_FROM&&(h.install_from=n.INSTALL_FROM),g&&(h.install_day=xl(f)),h.userscript=i.toString(),K?h.is_new_user_today="1":h.is_new_user_today="0",F?h.is_new_user_this_week="1":h.is_new_user_this_week="0",r?h.main_frame=0:h.main_frame=1,{...P,params:h}}),ce=await kl({responseType:"text",url:p,method:"POST",body:JSON.stringify({client_id:l,user_id:l,events:Y})})}catch{}}function wl(e){let t="",n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",a=n.length,i=0;for(;i<e;)t+=n.charAt(Math.floor(Math.random()*a)),i+=1;return t}function qi(e){let n=e.toLocaleString("en-US",{timeZone:"Asia/Shanghai"}).split(" ")[0];return n.endsWith(",")&&(n=n.slice(0,-1)),n}function xl(e){try{let n=e.toLocaleString("en-US",{timeZone:"Asia/Shanghai"}).split(" ")[0];n.endsWith(",")&&(n=n.slice(0,-1));let[a,i,r]=n.split("/");return n=`${r}-${a}-${i}`,n}catch{return"unknown"}}async function Al(e){return await Va().sendMessage("background:main",e)}function kl(e){return Tn()?Ri({method:"request",data:e}):Ge()||bn()?(e.fetchPolyfill=globalThis.GM_fetch,Oi(e)):Al({method:"fetch",data:e})}var oa={immediateTranslationTextCount:5e3,interval:36e5,beta:!1,cache:!0,proOpenaiModels:["gpt-3.5-turbo","gpt-3.5-turbo-0613","gpt-3.5-turbo-1106"],translationMode:"dual",enabled:!0,minVersion:"0.6.2",showOpenaiOnSafari:!0,showUnconfiguredTranslationServiceInPopup:!0,donateUrl:"https://immersivetranslate.com/pricing",uninstallUrl:"https://wj.qq.com/s2/12328372/04e0/",feedbackUrl:"https://github.com/immersive-translate/immersive-translate/issues",arxivRule:{injectContainerSelector:".extra-services .full-text ul",validBefore:"2023-10-31",validOnlySelector:".download-format",matches:["https://arxiv.org/abs/*"]},supportedVideoSubtitleSites:["https://www.youtube.com[Youtube]","https://www.netflix.com[NetFlix]","https://vimeo.com/watch[Vimeo]","https://www.khanacademy.org/[Khan Academy]","https://www.coursera.org/[Coursera]","https://www.udemy.com/[Udemy]","https://www.bloomberg.com[Bloomberg]","https://nebula.tv/videos[Nebula]","https://www.bilibili.com[Bilibili]"],isShowContextMenu:!0,enableInputTranslation:!0,enableFloatShare:!0,isShowInputTranslationConsent:!0,inactiveDays:21,enableInputTranslationWithoutTriggerKey:!0,defaultAlwaysTranslatedUrls:["twitter.com","www.reddit.com","www.kadaza.com","en.wikipedia.org","www.reuters.com","www.bloomberg.com","*.medium.com","news.ycombinator.com","edition.cnn.com","www.wsj.com","www.goodreads.com"],modifiedBySystem:!1,enableDefaultAlwaysTranslatedUrls:!0,isChangedAlwaysTranslatedUrls:!1,inputTranslationUrlPattern:{matches:[],excludeMatches:[]},inputTranslationService:"inherit",inputTranslationBlockUrls:["*.feishu.cn","*.larkoffice.com","*.larksuite.com","www.notion.so","www.figma.com/file/*","*.lanhuapp.com"],inputStyleBlockUrls:[],inputTargetLanguage:"en",inputStartingTriggerKey:"/",inputTrailingTriggerKey:"space",inputTrailingTriggerKeyRepeatTimes:3,inputTrailingTriggerKeyTimeout:200,inputTrailingMobileTriggerKeyTimeout:300,mutationBlockUrls:["*.feishu.cn","*.larkoffice.com","*.larksuite.com"],monkeyH5FloatBall:{enable:!0,blockUrls:["*immersivetranslate.com/preview"],clickType:"translate",afterInstalledAt:""},pcFloatBall:{enable:!0,blockUrls:["*immersivetranslate.com/preview"],clickType:"translate",afterInstalledAt:"2023-10-28"},inputLanguageCodeAlias:{en:["\u82F1\u6587","\u82F1\u8BED"],"zh-CN":["zh","zh-Hant","\u4E2D\u6587"],"zh-TW":["zht","zh-Hant","\u7E41\u4E2D"],ja:["\u65E5\u8BED","\u65E5\u6587"],ko:["\u97E9\u8BED","\u97E9\u6587"],fr:["\u6CD5\u8BED","\u53D1\u6587"],es:["\u897F\u73ED\u7259\u8BED","\u897F\u8BED"],ru:["\u4FC4\u8BED","\u4FC4\u6587"],bo:["\u85CF\u8BED"]},inputStartingTriggerKeyAlias:{"/":["\u3001"],".":["\u3002"],",":["\uFF0C"],space:[" "],";":["\uFF1B"],":":["\uFF1A"]},blockUrls:["https://dash.immersivetranslate.com/*","https://immersive-translate.owenyoung.com/options/","https://immersive-translate.owenyoung.com/auth-done/","https://dash.immersivetranslate.com/","https://dash.immersivetranslate.com/auth-done/","http://localhost:8000/dist/userscript/options/","http://localhost:8000/auth-done/","http://192.168.50.9:8000/dist/userscript/options/","https://www.deepl.com/translator","translate.google.com","http://localhost:8000/options/","http://192.168.50.9:8000/options/","googleads.g.doubleclick.net","s1.hdslb.com","oapi.dingtalk.com","login.dingtalk.com","imasdk.googleapis.com","acdn.adnxs.com","pos.baidu.com","js-sec.indexww.com","g.alicdn.com","ads.pubmatic.com","challenges.cloudflare.com","accounts.google.com","images-na.ssl-images-amazon.com","tpc.googlesyndication.com","js.stripe.com","acdn.adnxs-simple.com","s.union.360.cn","s.amazon-adsystem.com","www.recaptcha.net","s7.addthis.com","z.moatads.com","https://www.marketwatch.com/static_html/daa-min.html","tr.snapchat.com","ct.pinterest.com","*.moatads.com","secure-us.imrworldwide.com","static.noeyeon.click","widgets.outbrain.com","www.dianomi.com/smartads.epl","secure-assets.rubiconproject.com","eus.rubiconproject.com","eus.rubiconproject.com","i.liadm.com","eb2.3lift.com","googleads.g.doubleclick.net","https://www.google.com/recaptcha/*","ad.doubanio.com"],telemetry:!0,loadingTheme:"spinner",canary:!1,translationThemePatterns:{},translationLanguagePattern:{matches:[],excludeMatches:[]},translationServices:{volcAlpha:{placeholderDelimiters:["{","}","b"]},volc:{placeholderDelimiters:["{","}","b"]},tencent:{placeholderDelimiters:["{","}","b"]},google:{placeholderDelimiters:["\u{1F6A0}","\u{1F6A0}","b"]},transmart:{placeholderDelimiters:["#","#"]},baidu:{placeholderDelimiters:["#","#"]},caiyun:{placeholderDelimiters:["{","}"]},youdao:{placeholderDelimiters:["\u{1F6A0}","\u{1F6A0}"]},aliyun:{placeholderDelimiters:["{{","}}","b"]},deepl:{immediateTranslationTextCountForImmersiveDeepl:5e4,maxTextLengthPerRequest:2800,qualityDelimiterBetaV3:"<br />",qualityNoSymoblBetaV3:"</b",qualityMinTextLengthV3:40,placeholderDelimiters:["{{","}}","b"],limit:10},mock:{placeholderDelimiters:["<code>","</code>"],limit:5e4},custom:{placeholderDelimiters:["{","}"]},bing:{maxTextLengthPerRequest:1800,placeholderDelimiters:["<code>","</code>","b"]},deeplx:{limit:3},d:{immediateTranslationTextCount:0},papago:{placeholderDelimiters:["{","}"]},dpro:{apiUrl:"https://api.deepl.com/jsonrpc"},openai:{placeholderDelimiters:["{{","}}","b"],ignoreResRegexs:["^\u62B1\u6B49.*\u8981\u6C42","^\u62B1\u6B49.*\u7FFB\u8BD1","^\u62B1\u6B49.*\u6211\u65E0\u6CD5","^I'm sorry, but I cannot","^I'm sorry, but I cannot provide"],immediateTranslationTextCount:3e3,translationDebounce:300,interval:1350,systemPrompt:"You are a professional, authentic translation engine, only returns translations.",prompt:`Translate the text to {{to}} Language, please do not explain my original text.:

{{text}}`,multiplePrompt:`Please translate these subtitles into {{to}}. For smoothness, you may need to include part of the previous sentence in the next sentence. For example, if I give you 5 paragraphs in English, you must return 5 paragraphs of translation.:

{{text}}`,model:"gpt-3.5-turbo-0613",proModel:"gpt-3.5-turbo-0613",proLimit:10,overrides:[{if:"targetLanguage == zh-CN",prompt:`\u8BF7\u7FFB\u8BD1\u4E3A\u7B80\u4F53\u4E2D\u6587\uFF08\u907F\u514D\u89E3\u91CA\u539F\u6587\uFF09:

 {{text}}`,systemPrompt:"\u4F60\u662F\u4E00\u4E2A\u4E13\u4E1A,\u5730\u9053\u7684\u7FFB\u8BD1\u5F15\u64CE\uFF0C\u4F60\u53EA\u8FD4\u56DE\u8BD1\u6587\uFF0C\u4E0D\u542B\u4EFB\u4F55\u89E3\u91CA",multiplePrompt:`\u8BF7\u628A\u8FD9\u51E0\u53E5\u5B57\u5E55\u7FFB\u8BD1\u4E3A\u7B80\u4F53\u4E2D\u6587\uFF0C\u4E3A\u4E86\u901A\u987A\uFF0C\u4F60\u53EF\u80FD\u9700\u8981\u5728\u4E0B\u4E00\u53E5\u4E2D\u5305\u542B\u4E0A\u4E00\u53E5\u7684\u90E8\u5206\u5185\u5BB9\uFF0C\u6BD4\u5982\u6211\u7ED9\u4E86\u4F60 5 \u6BB5\u82F1\u6587\uFF0C\u4F60\u5C31\u5FC5\u987B\u8FD4\u56DE 5 \u6BB5\u8BD1\u6587

{{text}}`},{if:"targetLanguage == zh-TW",prompt:`\u8ACB\u7FFB\u8B6F\u70BA\u7C21\u9AD4\u4E2D\u6587\uFF08\u907F\u514D\u89E3\u91CB\u539F\u6587\uFF09:

 {{text}}`,systemPrompt:"\u4F60\u662F\u4E00\u500B\u5C08\u696D,\u9053\u5730\u7684\u7FFB\u8B6F\u5F15\u64CE\uFF0C\u4F60\u53EA\u6703\u56DE\u8B6F\u6587",multiplePrompt:`\u8ACB\u628A\u9019\u5E7E\u53E5\u5B57\u5E55\u7FFB\u8B6F\u70BA\u7E41\u9AD4\u4E2D\u6587\uFF0C\u70BA\u4E86\u901A\u9806\uFF0C\u4F60\u53EF\u80FD\u9700\u8981\u5728\u4E0B\u4E00\u53E5\u4E2D\u5305\u542B\u4E0A\u4E00\u53E5\u7684\u90E8\u5206\u5167\u5BB9\uFF0C\u6BD4\u5982\u6211\u7D66\u4E86\u4F60 5 \u6BB5\u82F1\u6587\uFF0C\u4F60\u5C31\u5FC5\u9808\u8FD4\u56DE 5 \u6BB5\u8B6F\u6587

{{text}}`},{if:"targetLanguage == fr",prompt:`Traduisez le texte en fran\xE7ais, s'il vous pla\xEEt ne pas expliquer mon texte d'origine.:

{{text}}`,systemPrompt:"Vous \xEAtes un moteur de traduction professionnel et authentique qui ne renvoie que des traductions.",multiplePrompt:`Veuillez traduire ces sous-titres en chinois simplifi\xE9. Pour plus de fluidit\xE9, vous devrez peut-\xEAtre inclure une partie de la phrase pr\xE9c\xE9dente dans la phrase suivante. Par exemple, si je vous donne 5 paragraphes en anglais, vous devez renvoyer 5 paragraphes de traduction:

{{text}}`},{if:"targetLanguage == en",prompt:`Translate the text to {{to}} Language, please do not explain my original text.:

{{text}}`,systemPrompt:"You are a professional, authentic translation engine that only returns translations.",multiplePrompt:`Please translate these subtitles into {{to}}. For smoothness, you may need to include part of the previous sentence in the next sentence. For example, if I give you 5 paragraphs in English, you must return 5 paragraphs of translation.:

{{text}}`}],maxTextGroupLengthPerRequest:1,maxTextGroupLengthPerRequestForSubtitle:5,translationTextSeparator:`

%%

`,newlinePlaceholderDelimiters:[`
<br>
`]},chatgpt:{placeholderDelimiters:["{{","}}","b"],immediateTranslationTextCount:2e3,maxTextGroupLengthPerRequest:1,maxTextLengthPerRequest:2e3,prompt:`Translate the text to {{to}}:

{{text}}`,newlinePlaceholderDelimiters:[`

-|`,`|-

`,`
?
?-\\|\\d+\\|-
?
?`]}},shortcuts:{toggleTranslatePage:"Alt+A",toggleTranslateTheWholePage:"Alt+W",toggleOnlyTransation:"",toggleTranslateToThePageEndImmediately:"",toggleTranslationMask:"",shareToDraft:""},tempTranslateDomainMinutes:0,immediateTranslationPattern:{matches:["www.tumblr.com","twitter.com","*.twitter.com","medium.com","*.medium.com","www.facebook.com","www.youtube.com","m.youtube.com","mail.google.com","discord.com","google.com","facebook.com","*.facebook.com","web.telegram.org","github.com","*.instagram.com","instagram.com","*.slack.com","https://old.reddit.com/","https://www.reddit.com/r/popular/","https://www.reddit.com/","https://www.reddit.com/hot/","https://www.reddit.com/new/","https://www.reddit.com/top/","https://www.reddit.com/.compact","https://app.immersivetranslate.com/pdf*"],excludeMatches:[],selectorMatches:["meta[property='al:ios:url'][content^='medium://']"],selectorExcludeMatches:[]},translationParagraphLanguagePattern:{matches:["onboarding.immersivetranslate.com","www.reddit.com","old.reddit.com","twitter.com","www.tumblr.com","*.twitter.com","medium.com","*.medium.com","github.com","gist.github.com","www.facebook.com","www.youtube.com","m.youtube.com","read.readwise.io","www.inoreader.com","mail.google.com","google.com","discord.com","*.instagram.com","instagram.com","web.telegram.org","web.whatsapp.com","*.slack.com","*.indeed.com","outlook.live.com"],excludeMatches:[],selectorMatches:["meta[property='al:ios:url'][content^='medium://']"],selectorExcludeMatches:[]},sourceLanguageUrlPattern:{},generalRule:{_comment:"",paragraphFirstLetterFontSize:35,enableSubtitle:!1,"subtitle.autoEnableSubtitle":!1,disableNewTextTranslate:!1,skipEditableCheck:!1,mutationObserverLimitTargetSelectors:[],condition:{},normalizeBody:"",inputExecCommandDeleteEnable:!1,mutationExcludeSelectors:["span.highlighter--highlighted","span.highlighter-ext","mark","msreadoutspan","rw-highlight","web-highlight"],shareConfig:{injectCss:!0,removeSelectors:["noscript","script"]},useIframePostMessage:!1,searchEnhancementConfig:[],injectedCss:[],isOnBoardingPage:!1,isEbook:!1,isEbookBuilder:!1,ignoreZhCNandZhTW:!1,showSponsorOnSafari:!1,noTranslateRegexp:["^\\d+.+ago$","^\\d+\\s+MIN\\s+READ$"],waitForSelectors:[],isInjectOptionsUrl:!1,isInjectVersion:!1,isInjectMeta:!1,waitForSelectorsTimeout:3e3,pairs:{},aiRule:{},subtitleRule:{autoEnableSubtitle:!1,preTranslation:!1,humanPreferred:!0,disabled:!1,hookType:"xhr"},bodyRule:{enable:!0,maxBodyScreenLength:25,articleChildTags:["P"],articleChildTagsNum:4,bodyIsRoot:!1,humanPreferred:!0,preTranslation:!0,xpathRule:["name:P"]},isSubtitleBuilder:!1,minZIndex:0,initTranslationServiceAsSoonAsPossible:!0,targetWrapperTag:"font",additionalInjectedCss:[],isTranslateTitle:!0,enableSearchEnhancement:!0,searchEnhancementSelector:"#rhs",languageDetectMinTextCount:50,wrapperPrefix:"smart",wrapperSuffix:"smart",isPdf:!1,isTransformPreTagNewLine:!1,urlChangeDelay:50,mutationChangeDelay:10,mainFrameMinTextCount:50,mainFrameMinWordCount:5,visibleDelay:0,additionalStayOriginalSelectors:["span.katex","span.notranslate",".MathJax_Preview",".MathJax",".MathJax_SVG",".mwe-math-element","span[translate=no]","em[translate=no]","code[translate=no]","span.math.inline","span.math.display",".ltx_Math",".mathjax-block",".MathJax_CHTML","kbd","span.pretex-inline","span.math-inline"],translationBlockStyle:"",isShowUserscriptPagePopup:!0,observeUrlChange:!1,paragraphMinTextCount:4,paragraphMinWordCount:2,shadowRootSelectors:[],blockMinTextCount:24,blockMinWordCount:4,asideMaxTextCount:1e3,asideMaxWordCount:200,asideMaxTextCountPerParagraph:67,asideMaxWordCountPerParagraph:12,lineBreakMaxTextCount:0,globalAttributes:{},inputTutorialsText:"",inputTutorialsSelectors:[],globalMeta:{},globalStyles:{".sr-only":"display:none"},initialGlobalAttributes:{},initialSelectorGlobalAttributes:{header:{translate:"no"},"footer:last-of-type":{translate:"no"},"nav:last-of-type":{translate:"no"},nav:{translate:"no"}},selectors:[],preWhitespaceDetectedTags:["DIV","SPAN"],stayOriginalSelectors:[],additionalSelectors:["h1","section h2","section h3","section h4","main h2","main h3","main h4",".article-title",".article-subtitle",".article_title",".article_subtitle",".article__title",".articleTitle",".Article__content",".titleLink",".summary",".headline",".page-content","aside.note","aside.article-comments","aside.onebox"],atomicBlockTags:[],excludeSelectors:[],additionalExcludeSelectors:["#monica-content-root","#immersive-translate-popup",".social-share",".breadcrumbs",".post__footer",".btn",".reference-citations",".share-nav",".o-share","[data-toolbar=share]","rp","rt",".prism-code","[role=code]","#omni-extension",".omni-item","div[data-paste-markdown-skip]","table.highlight","div[class^=codeBlockContent]","div[class^=codeBlockLines]","div[class^=token-line]","#liuchan-window > .liuchan-container > *",".material-icons","i.fa","i[class^=fa-]",".notranslate","[translate=no]",".navmenu-container",".google-symbols","markerow8","h1 br","h2 br","h3 br","h4 br"],translationClasses:[],atomicBlockSelectors:[],excludeTags:["TITLE","LINK","SCRIPT","STYLE","TEXTAREA","SVG","svg","G","NOSCRIPT","INPUT","BUTTON","BASE","SELECT","OPTION","HR","PRE","KBD","WBR","RT","RP","META","MATH","TTS-SENTENCE","AIO-CODE","RELIN-TARGET"],bodyTranslateTags:["FOOTER","ASIDE","BUTTON","NAV"],forceTranslateTags:[],metaTags:["META","SCRIPT","STYLE","NOSCRIPT"],additionalExcludeTags:[],stayOriginalTags:["CODE","TT","IMG","SUP","SUB","SAMP","math","semantics","mrow","mo","mfrac","msup","mi","mn","msqrt"],additionalStayOriginalTags:[],inlineTags:["A","ABBR","FONT","ACRONYM","B","INS","DEL","RUBY","RP","RB","BDO","MARK","BIG","RT","NOBR","CITE","DFN","EM","I","LABEL","Q","S","SMALL","SPAN","STRONG","SUB","SUP","U","KBD","TT","VAR","IMG","CODE","SCRIPT","STYLE","LINK","TIME","META","WBR","RELIN-HC","RELIN-HIGHLIGHT","RELIN-ORIGIN","RELIN-TARGET","XQDD_HIGHLIGHT_NEW_WORD","NOBR","RW-HIGHLIGHT","HYPOTHESIS-HIGHLIGHT"],additionalInlineTags:[],extraInlineSelectors:[],additionalInlineSelectors:[".MathJax_Preview",".MathJax",".highlighter--highlighted",".rw-highlight"],extraBlockSelectors:["turbo-frame","readme-toc","#hs_cos_wrapper_post_body","#hs_cos_wrapper_post_body"],allBlockTags:["BODY","HGROUP","CONTENT","ADDRESS","ARTICLE","ASIDE","DETAILS","BLOCKQUOTE","CANVAS","DD","DL","DT","FIELDSET","FIGCAPTION","FIGURE","FOOTER","HEADER","FORM","HR","MAIN","SUMMARY","NAV","NOSCRIPT","PRE","SECTION","TABLE","TFOOT","UL","VIDEO","P","DIV","H1","H2","H3","H4","H5","H6","UL","LI","OL","BR","PICTURE","TBODY","TR","TD","TH","SOURCE","C-WIZ","BUTTON","TURBO-FRAME","README-TOC"],mutationObserverContainerSelectors:[],pdfNewParagraphLineHeight:2.4,pdfNewParagraphIndent:1.2,pdfNewParagraphIndentRightIndentPx:130,fingerCountToToggleTranslagePageWhenTouching:4,fingerCountToToggleTranslationMaskWhenTouching:0,fingerCountToToggleTranslagePageOnlyTranslationWhenTouching:0,mouseHoverHoldKey:"Off"},rules:[{id:"isSubtitleBuilder",isSubtitleBuilder:!0,selectorMatches:["meta[name='immersive-translate-subtitle-builder'][content='true']"],pairs:{".source-text":".target-text"},paragraphMinTextCount:4,paragraphMinWordCount:2,isTranslateTitle:!1,wrapperPrefix:"",wrapperSuffix:"","bodyRule.add":{enable:!1}},{id:"isEbook",isEbook:!0,isTranslateTitle:!1,urlChangeDelay:200,selectorMatches:["meta[name='immersive-translate-ebook-viewer'][content='true']"],injectedCss:[".immersive-translate-target-translation-block-wrapper {display:block;}"],excludeSelectors:["#drop-target","#drop-target h1","#side-bar","h1#side-bar-title"],extraInlineSelectors:["span.dropcaps"],"bodyRule.add":{enable:!1},paragraphMinTextCount:4,paragraphMinWordCount:2,blockMinTextCount:1,blockMinWordCount:1,containerMinTextCount:1,wrapperPrefix:"<br />",targetWrapperTag:"span"},{id:"pdf",selectorMatches:["meta[name='immersive-translate-pdf-viewer'][content='true']"],translationMode:"translation",skipEditableCheck:!0,selectors:["p"],"bodyRule.add":{enable:!1},"shareConfig.add":{removeSelectors:["noscript","script",".toolbar","#sidebarContainer",'[class="page"]',".editorParamsToolbar",".image-mode",".im_db",".im_cb"]},wrapperPrefix:"",isInjectVersion:!0,isPdf:!0},{id:"pdfWebPage",selectorMatches:["embed[type='application/pdf']"]},{id:"isEbookBuilder",isEbookBuilder:!0,isTranslateTitle:!1,targetWrapperTag:"span",selectorMatches:["meta[name='immersive-translate-ebook-builder'][content='true']"],injectedCss:[".immersive-translate-target-translation-block-wrapper {display:block;}"],globalMeta:{},excludeSelectors:["h1.notranslate","#drop-target","#drop-target h1","#side-bar","h1#side-bar-title","#tool",".Code"],"bodyRule.add":{enable:!1},isInjectMeta:!0,paragraphMinTextCount:4,paragraphMinWordCount:2,blockMinTextCount:1,blockMinWordCount:1,containerMinTextCount:1,wrapperPrefix:"<br />"},{id:"immersiveTranslateIosOnBoarding",selectorMatches:["meta[name=immersiveTranslateIosOnBoarding]"],initialGlobalAttributes:{"input#immersiveTranslateDetectedSlot":{value:"true"}},isInjectOptionsUrl:!0,isInjectVersion:!0,isInjectMeta:!0},{id:"immersiveTranslateIosOnBoardingStep1",selectorMatches:["meta[name=immersiveTranslateIosOnBoardingStep1]"],isOnBoardingPage:!0,isInjectOptionsUrl:!0,isInjectVersion:!0,isInjectMeta:!0},{id:"immersivePreview",matches:["https://immersivetranslate.com/preview*","https://test.immersivetranslate.com/preview*","https://immersivetranslate.com/drafts*","https://test.immersivetranslate.com/drafts*"],isInjectVersion:!0,isInjectMeta:!0},{id:"immersive",matches:["https://immersivetranslate.com","https://onboarding.immersivetranslate.com","https://app.immersivetranslate.com"],isInjectVersion:!0,isInjectMeta:!0},{id:"simpread",selectorMatches:"div.simpread-read-root.simpread-read-root-show > sr-read",mainFrameSelector:"div.simpread-read-root.simpread-read-root-show > sr-read"},{id:"txt",matches:["*://*/*.txt","file://*/*.txt"],selectorMatches:["body > pre"],isTransformPreTagNewLine:!0,"excludeTags.remove":["PRE"]},{id:"hangejp",matches:["arad.hange.jp","arad.nexon.co.jp","oapi.dingtalk.com","login.dingtalk.com"],useIframePostMessage:!1},{id:"preSites",matches:["mail.jabber.org","antirez.com","patchwork.kernel.org"],isTransformPreTagNewLine:!0},{id:"wikipedia",matches:"*.wikipedia.org",paragraphMinWordCount:2,paragraphMinTextCount:4,injectedCss:[".immersive-translate-target-translation-block-wrapper { display: block; }"],excludeSelectors:[".mw-editsection",".mw-cite-backlink","#p-lang-btn","#right-navigation","#p-associated-pages",".vector-header"],stayOriginalSelectors:[".chemf",".mwe-math-element","[role=math]",".nowrap"],extraInlineSelectors:[".chemf",".mwe-math-element","[role=math]",".nowrap"],"bodyRule.add":{bodySelector:"#content",articleSelector:"#bodyContent"}},{id:"twitter",matches:["twitter.com","mobile.twitter.com","tweetdeck.twitter.com","pro.twitter.com","https://platform.twitter.com/embed*"],additionalStayOriginalSelectors:['[data-testid="tweetText"] a',"[data-testid='UserDescription'] a","[data-testid='HoverCard'] a","[data-testid='UserCell'] a","[data-testid='birdwatch-pivot']  a"],blockMinTextCount:0,blockMinWordCount:0,excludeSelectors:["[aria-describedby][role=button]","header","[data-testid='radioGroupplayback_rate'] div","[data-testid='userFollowIndicator']","[class='css-901oao r-14j79pv r-37j5jr r-n6v787 r-16dba41 r-1cwl3u0 r-bcqeeo r-qvutc0']","[class='css-175oi2r r-1wbh5a2 r-dnmrzs']"],extraBlockSelectors:['[data-testid="tweetText"] div.r-6koalj'],extraInlineSelectors:['[data-testid="tweetText"] div.r-xoduu5','[data-testid="tweetText"] span','[data-testid="UserDescription"] div',"[data-testid='HoverCard'] div[dir=auto] div","[data-testid='HoverCard'] span[dir=auto] div"],globalStyles:{"[data-testid='card.layoutLarge.detail'] > div:nth-child(2)":"-webkit-line-clamp: unset;","[data-testid='card.layoutSmall.detail'] > div:nth-child(2)":"-webkit-line-clamp: unset;","[data-testid='tweetText']":"-webkit-line-clamp: unset;"},ignoreZhCNandZhTW:!0,isTranslateTitle:!1,useIframePostMessage:!1,observeUrlChange:!1,paragraphMinTextCount:2,paragraphMinWordCount:1,selectors:['[data-testid="tweetText"]',".tweet-text",".js-quoted-tweet-text","[data-testid='card.layoutSmall.detail'] > div:nth-child(2)","[data-testid='developerBuiltCardContainer'] > div:nth-child(2)","[data-testid='card.layoutLarge.detail'] > div:nth-child(2)","[data-testid='cellInnerDiv'] div[data-testid='UserCell'] > div> div:nth-child(2)","[data-testid='UserDescription']","[data-testid='HoverCard'] div[dir=auto]","[data-testid='HoverCard'] span[dir=auto]","[data-testid='HoverCard'] [role='dialog'] div[dir=ltr]","[data-testid='birdwatch-pivot'] div[dir=ltr]"]},{id:"threads",matches:"www.threads.net",selectors:["p",".x1npkx4u.x1exu5d8",".xw7yly9",".xgkxs2y",".x1xdureb.xqti54a.x13vxnyz",".xqti54a.x13vxnyz.x49hn82.xcrlgei.x889kno"],stayOriginalSelectors:[".x1rg5ohu",".xat24cr.xdj266r a"],"excludeSelectors.add":[".x6s0dn4.x78zum5",".xpvyfi4.x1npkx4u.x1ms6mhf"],globalStyles:{span:"max-height:unset;-webkit-line-clamp:unset;height:unset;white-space:unset;"}},{id:"stackoverflow",matches:["stackoverflow.com","*.stackexchange.com","superuser.com","askubuntu.com","serverfault.com"],extraBlockSelectors:["span.comment-copy"],globalStyles:{".s-post-summary--content-excerpt":"-webkit-line-clamp:unset;"},"excludeSelectors.add":[".votecell","header","#footer","#question-header + div","div.postcell div.mb0","div[id^=comments-link-]","#answers-header",".new-post-login",".form-submit","a[href='/questions/ask']","#left-sidebar","a.comment-user","span.comment-date","div.s-prose.js-post-body + div",".bottom-notice","div[data-campaign-name=stk]",".s-post-summary--stats",".s-post-summary--meta"],paragraphMinTextCount:4,paragraphMinWordCount:2},{id:"appleDeveloper",matches:"developer.apple.com/documentation/*",selectors:[".container","h3.title","div.content"]},{id:"hackerNews",matches:"news.ycombinator.com",selectors:[".titleline > a",".comment > .commtext",".toptext","a.hn-item-title",".hn-comment-text",".hn-story-title"],excludeSelectors:[".reply"]},{id:"quora",matches:["*.quora.com","quora.com"],excludeSelectors:[".dom_annotate_multifeed_bundle_AskQuestionPromptBundle",".dom_annotate_feed_switcher","[class='q-box qu-py--small qu-color--gray_light']","[class='q-box spacing_log_answer_header']","[class='q-box qu-flex--auto']","[class='q-text qu-dynamicFontSize--small qu-mt--small qu-color--gray_light qu-passColorToLinks']",".AnswerFooter___StyledFlex-sc-2xbo88-0","[class='q-box qu-mb--small']"],globalStyles:{".qu-truncateLines--3":"-webkit-line-clamp: unset;"}},{id:"oldReddit",matches:["old.reddit.com/*/.compact","old.reddit.com/.compact","www.reddit.com/*/.compact","www.reddit.com/.compact"],selectors:[".title > a",".usertext-body"],detectParagraphLanguage:!0},{id:"otherOldReddit",matches:"old.reddit.com",selectors:["p.title > a","[role=main] .md-container"],detectParagraphLanguage:!0},{id:"redditList",matches:["https://www.reddit.com/r/*/comments/*/*","https://www.reddit.com/","https://www.reddit.com/hot/","https://www.reddit.com/new/","https://www.reddit.com/top/"],excludeMatches:["https://www.reddit.com/r/*/wiki/*"],observeUrlChange:!0,selectors:["h1",".PostHeader__post-title-line","[data-click-id=body] h3","[data-click-id=background] h3","[data-testid=comment]","[data-adclicklocation='title'] h3","[data-adclicklocation=media]","[data-testid='post-title-text']",".PostContent",".post-content",".Comment__body","faceplate-batch .md","[slot=comment]",".RichTextJSON-root","[slot=title]","[slot=text-body]","p.title > a","[role=main] .md-container"],detectParagraphLanguage:!0,globalStyles:{"div.XPromoBottomBar":"display:none","[class*='line-clamp']":"-webkit-line-clamp: unset"},waitForSelectors:["[data-testid=post_author_link]"]},{id:"reddit",matches:"www.reddit.com",selectors:["#search-results-tab-slot","h1",".PostHeader__post-title-line","[data-click-id=body] h3","[data-click-id=background] h3","[data-testid=comment]","[data-adclicklocation='title'] h3","[data-testid='post-title-text']","[slot=comment]","[data-adclicklocation=media]",".PostContent",".post-content",".Comment__body","faceplate-batch .md","[slot=text-body]","p.title > a","[role=main] .md-container","#-post-rtjson-content",".RichTextJSON-root","[slot='title']"],excludeSelectors:[".text-neutral-content-weak"],paragraphMinTextCount:5,paragraphMinWordCount:2,excludeMatches:["https://www.reddit.com/r/*/wiki/*","https://www.reddit.com/settings/*"],detectParagraphLanguage:!0,globalStyles:{"div.XPromoBottomBar":"display:none","[class*='line-clamp']":"-webkit-line-clamp: unset"}},{id:"reuters",matches:"www.reuters.com",excludeSelectors:["[promotext]","[data-testid=Leaderboard]","[data-testid=HomeTickerV2]","[data-testid=SiteFooter]"]},{id:"npmjs",matches:"https://www.npmjs.com/package/*",selectors:["#tabpanel-readme > div:first-child"]},{id:"github",matches:"github.com",useIframePostMessage:!1,excludeMatches:["https://github.com/*/*/settings","https://github.com/settings/*","https://github.com/sponsors/*","https://github.com/readme/*","https://github.com/readme/"],selectors:["h1","[aria-label=Issues] .markdown-title","[aria-labelledby=discussions-list] .markdown-title","h3 .markdown-title",".markdown-body",".Layout-sidebar p","div > span.search-match","li.repo-list-item p","#responsive-meta-container p","article p","div.repo-description p","[itemprop=description]",".integrations-auth-wrapper",".new-feed-onboarding-notice","article section[aria-label='card content'] > div > div > div  > div:nth-child(2)"],atomicBlockSelectors:["[itemprop=description]"],excludeSelectors:[".css-truncate","[data-test-selector='commit-tease-commit-message']","[data-test-selector='create-branch.developmentForm']","div.Box-header.position-relative","div.blob-wrapper-embedded","div.Box.Box--condensed.my-2","div.jp-CodeCell",'[aria-label="Account"] .markdown-title',".js-repos-container .markdown-title","a.anchor","div.file-navigation + div.Box"],extraBlockSelectors:[],extraInlineSelectors:["g-emoji","a.anchor"],stayOriginalTags:["CODE","TT","G-EMOJI","IMG","SUP","SUB"],detectParagraphLanguage:!0},{id:"githubNotebook",matches:"notebooks.githubusercontent.com",useIframePostMessage:!1,excludeSelectors:["div.jp-CodeCell"]},{id:"facebook",matches:"www.facebook.com",excludeMatches:["https://www.facebook.com/business/*","https://www.facebook.com/help*"],selectors:["div[dir=auto][style]","div[dir=auto][class]","span[lang]"],atomicBlockSelectors:["div[dir=auto][style]","div[dir=auto][class]","span[lang]"],insertPosition:"afterend",preWhitespaceDetectedTags:["DIV","SPAN"],extraBlockSelectors:["span.x1vvkbs"],excludeSelectors:["[role=button]"],translationClasses:["immersive-translate-text"],detectParagraphLanguage:!0},{id:"youtubeMobile",matches:"m.youtube.com",selectors:[".comment-text","#content-text",".media-item-headline",".slim-video-information-title",".yt-spec-button-view-model",".yt-core-attributed-string > span",".title"],shareConfig:{injectCss:!1,removeSelectors:["iron-iconset-svg","iframe","ytd-watch-next-secondary-results-renderer","noscript","script"]},"excludeTags.remove":["BUTTON"],additionalExcludeSelectors:[".ytp-caption-window-container"],"subtitleRule.add":{type:"youtube",subtitleUrlRegExp:"/api/timedtext",translateSelectors:[".caption-window",".caption-visual-line"],videoPlayerSelector:".html5-video-player",loadingContainerSelector:".ytp-caption-window-container",videoADSelector:".ytp-ad-player-overlay",injectedCss:["#player-shorts-container .ytp-caption-window-bottom {top: 40px; bottom: unset!important;}"],translationOnlyPattern:["m.youtube.com/watch*","m.youtube.com/embed*","m.youtube.com/shorts*"]},wrapperPrefix:"",wrapperSuffix:"",observeUrlChange:!0,atomicBlockSelectors:[".comment-text"],globalStyles:{".comment-text":"max-height:unset;",".media-item-headline":"max-height:unset;-webkit-line-clamp:unset;"},injectedCss:[".immersive-translate-target-wrapper img { width: 16px; height: 16px }"],extraBlockSelectors:[".caption-visual-line"]},{id:"youtube",matches:"www.youtube.com",blockMinTextCount:0,blockMinWordCount:0,detectParagraphLanguage:!0,excludeSelectors:["[class^='lln-']"],shareConfig:{injectCss:!1,removeSelectors:["iron-iconset-svg","iframe","ytd-watch-next-secondary-results-renderer","noscript","script"]},"additionalExcludeSelectors.add":[".ytp-caption-window-container"],globalStyles:{"#video-title":"-webkit-line-clamp: unset;max-height: unset;","h1.ytd-watch-metadata":"-webkit-line-clamp: unset;max-height: unset;","yt-formatted-string#video-title":"-webkit-line-clamp: unset;max-height: unset;","ytd-expander.ytd-comment-renderer":"--ytd-expander-max-lines: 1000;"},injectedCss:[".immersive-translate-target-wrapper img { width: 16px; height: 16px }",".metadata-snippet-container {max-height: unset !important;}"],isTranslateTitle:!1,observeUrlChange:!0,selectors:["yt-formatted-string[slot=content].ytd-comment-renderer","yt-formatted-string.ytd-video-renderer","yt-formatted-string#content-text","h1","yt-formatted-string#video-title","span#video-title","a#video-title","yt-formatted-string.ytd-transcript-segment-renderer","#description-inline-expander > yt-attributed-string > span","ytd-notification-renderer .message","#message"],extraBlockSelectors:["yt-formatted-string.ytd-transcript-segment-renderer",".caption-visual-line"],"subtitleRule.add":{type:"youtube",subtitleUrlRegExp:"/api/timedtext",translateSelectors:[".caption-window",".caption-visual-line"],videoPlayerSelector:".html5-video-player",loadingContainerSelector:".ytp-caption-window-container",videoADSelector:".ytp-ad-player-overlay",translationOnlyPattern:["www.youtube.com/watch*","www.youtube.com/embed*","www.youtube.com/shorts*"],subtitleButtonSelector:".ytp-subtitles-button",languageSelector:".ytp-menuitem-label",injectedCss:["#shorts-player .ytp-caption-window-bottom {top: 2%; bottom: unset!important;}"]},urlChangeDelay:2e3,wrapperPrefix:"<br/>",wrapperSuffix:""},{id:"youtube-nocookie",matches:"www.youtube-nocookie.com",extraBlockSelectors:[".caption-visual-line"],mainFrameMinTextCount:0,"subtitleRule.add":{type:"youtube",subtitleUrlRegExp:"/api/timedtext",translateSelectors:[".caption-window",".caption-visual-line"],videoPlayerSelector:".html5-video-player",loadingContainerSelector:".ytp-caption-window-container",videoADSelector:".ytp-ad-player-overlay",translationOnlyPattern:["www.youtube-nocookie.com/embed*"],subtitleButtonSelector:".ytp-subtitles-button",languageSelector:".ytp-menuitem-label",injectedCss:["#shorts-player .ytp-caption-window-bottom {top: 2%; bottom: unset!important;}"]}},{id:"instagramMessage",matches:["https://www.instagram.com/direct/*"],wrapperPrefix:"<br/>",selectors:["div[dir=auto][role=none]"]},{id:"instagramPost",matches:["https://www.instagram.com/p/*","https://www.instagram.com/reels/*"],blockMinTextCount:1,paragraphMinTextCount:2,selectors:["h1","div[class='x9f619 xjbqb8w x78zum5 x168nmei x13lgxp2 x5pf9jr xo71vjh x1uhb9sk x1plvlek xryxfnj x1c4vz4f x2lah0s xdt5ytf xqjyukv x1cy8zhl x1oa3qoh x1nhvcw1'] > span[class='x1lliihq x1plvlek xryxfnj x1n2onr6 x193iq5w xeuugli x1fj9vlw x13faqbe x1vvkbs x1s928wv xhkezso x1gmr53x x1cpjm7i x1fgarty x1943h6x x1i0vuye xvs91rp xo1l8bm x5n08af x10wh9bi x1wdrske x8viiok x18hxmgj']","h3 div > span[dir=auto]"],wrapperPrefix:"<br/>"},{id:"otherInstagram",blockMinWordCount:1,matches:"https://www.instagram.com/*",paragraphMinTextCount:2,selectors:["h1","article span[dir=auto] > span[dir=auto]","._ab1y"],wrapperSuffix:""},{id:"1paragraph",matches:"1paragraph.app",selectors:["#book"]},{id:"poeditor",matches:"https://poeditor.com/projects/*",selectors:[".comment-body",".reference_language .source-string"]},{id:"substack",matches:["*.substack.com","newsletter.rootsofprogress.org"],selectorMatches:["link[href^='https://substackcdn.com/bundle/'][rel=preload]"],excludeSelectors:["[style^=top]",".publication-footer",".subscribe-footer",".main-menu",".navbar-title-link","[data-testid='navbar']",".navbar-title",".captioned-button-wrap",".subscription-widget-wrap",".tweet-header",".tweet-link-bottom",".expanded-link",".meta-subheader",".comment-meta",".comment-actions"],globalStyles:{".reader2-clamp-lines":"max-height: unset; -webkit-line-clamp: unset;","[class*='clamp-']":"max-height: unset; -webkit-line-clamp:unset;",".blurb-text":"max-height: unset;",".comment-body":"max-height: unset;"},extraBlockSelectors:[".reader2-post-title",".tweet-link-top",".tweet-link-bottom",".expanded-link"]},{id:"seekingalpha",matches:["seekingalpha.com/article/*","seekingalpha.com/news/*"],selectors:["[data-test-id=card-container]","[data-test-id=comments-section]"],excludeSelectors:["[data-test-id=post-page-meta]","header > div:first-child"]},{id:"hnAlgolia",matches:"hn.algolia.com",selectors:[".Story_title > a:first-child",".Story_comment > span"]},{id:"readwise",matches:"read.readwise.io",selectors:["div[class^='_titleRow_']","#document-text-content"],detectParagraphLanguage:!0},{id:"inoreader",matches:["www.inoreader.com","*.inoreader.com"],selectors:[".article_header_title",".article_title_link",".article_content",".article_magazine_title_link",".blog-post-page","#welcome_center",".gad_overview_articles_wrapper",".library_article_text h4",".header_name"],excludeMatches:["https://www.inoreader.com/features/"],observeUrlChange:!1,globalStyles:{".article_title_link,.library_article_text h4,.gadget_overview_article_title":"-webkit-line-clamp: unset;max-height: unset;"}},{id:"aha",matches:"*.ideas.aha.io",excludeSelectors:[".comment-header",".vote-status",".idea-meta",".filters-title",".ideas-showing-count",".my-ideas-filters-wrapper",".statuses-filters-wrapper",".categories-filters-wrapper","[class^='attachment']","span[class^='attachment-name']"]},{id:"googleScholar",matches:["scholar.google.*/*","scholar.google.com.*/*","scholar.google.co.*/*"],wrapperPrefix:`
`,selectors:["h3 a[data-clk]","div.gs_rs","td a.gsc_a_at","td div.gs_gray:last-of-type","div.gsc_oci_value","#gs_opinion"],extraInlineSelectors:["br"],atomicBlockSelectors:["h3 a[data-clk]"]},{id:"googleMail",matches:"mail.google.com",detectParagraphLanguage:!0,selectors:["h2[data-thread-perm-id]","span[data-thread-id]","div[data-message-id] div[class='']",".messageBody","#views"],globalStyles:{".Nk,.Pk":"height:auto!important;",".kf,.mf":"white-space:unset!important;"}},{id:"googleNews",matches:"news.google.com",blockMinTextCount:26,blockMinWordCount:5,globalStyles:{".MCAGUe":"height: auto;",".To2ZZb.DbQnIe":"height: unset;",".cp7Yvc > h2":"display: block;",".oovtQ":"height: auto;",h4:"-webkit-line-clamp: unset;"},excludeSelectors:[".EyERq",".AOl7G.eejsDc","[aria-label='Home']","[aria-label='For you']","[aria-label='Following']","[aria-label='World']","[aria-label='Local']",".gb_Fc",".wBQf7b",".yPI8Rb",".jKHa4e",".u43Gd",".Zgjpyb","[role='button']","[jsname='rymPhb']",".cbz1ld",".VfPpkd-P5QLlc",".XvhY1d"]},{id:"outlook",matches:"outlook.live.com",excludeSelectors:[".jHAG3.XG5Jd",".OZZZK",".lDdSm"]},{id:"producthunt",matches:"www.producthunt.com",excludeMatches:"https://www.producthunt.com/stories/*",selectors:["h2","div[class^='styles_htmlText__']","[class^='styles_tagline']","a[href^='/discussions/'].fontWeight-600","button[class^='styles_textButton'] > div > span","h5 + p","div[data-test=product-item-name] + div",".noOfLines-1,.noOfLines-2,.noOfLines-3",".fontWeight-600","[class*='styles_dropdown']","[class*='styles_aboutText']"],globalStyles:{"h5 + p":"height:unset;",".noOfLines-1,.noOfLines-2,.noOfLines-3":"-webkit-line-clamp:unset;"},"excludeTags.remove":["PRE"]},{id:"codeforces",matches:"https://codeforces.com/*","stayOriginalTags.add":["[class^='MathJax']"]},{id:"discord",matches:"https://discord.com/channels/*",isTranslateTitle:!1,selectors:["li[id^=chat-messages] div[id^=message-content]","div[class^=headerText]","section[aria-label='Search Results'] div[id^=message-content]"],extraBlockSelectors:["[class^='embedFieldValue']","li[class^='card'] div[class^='message']","[data-list-item-id^='forum-channel-list'] div[class^='headerText']"],globalStyles:{"div[class^=headerText]":"max-height: unset;","div[class^=message]":"max-height: unset;","div[class^=text]":"max-height: unset;","h3[data-text-variant='heading-lg/semibold']":"-webkit-line-clamp: none;"},detectParagraphLanguage:!0,wrapperPrefix:"<br />",wrapperSuffix:"",paragraphMinTextCount:4,paragraphMinWordCount:2},{id:"telegram",matches:["web.telegram.org/z/*","web.telegram.org/a/*"],isTranslateTitle:!1,selectors:[".text-content",".message",".reply-markup-button-text",".bot-commands-list-element-description"],"extraBlockSelectors.add":[".message.spoilers-container em",".message.spoilers-container strong"],excludeSelectors:[".time",".peer-title",".document-wrapper",".message.spoilers-container custom-emoji-element"],detectParagraphLanguage:!0},{id:"telegramK",matches:["web.telegram.org/k/*","web.telegram.org/k/"],selectors:[".message",".reply-markup-button-text",".bot-commands-list-element-description"],"extraBlockSelectors.add":[".message.spoilers-container em",".message.spoilers-container strong"],excludeSelectors:[".time",".peer-title",".document-wrapper",".message.spoilers-container custom-emoji-element"],detectParagraphLanguage:!0},{id:"githubGist",matches:"gist.github.com",selectors:[".markdown-body",".readme"],detectParagraphLanguage:!0},{id:"lobste",matches:"lobste.rs",excludeMatches:["https://lobste.rs/about","https://lobste.rs/chat"],selectors:[".u-repost-of",".comment_text",".story_text"]},{id:"slack",matches:"*.slack.com",selectors:[".p-rich_text_block",".p-message_pane__foreword",".c-alert__message","[data-qa=message_attachment_text]"],additionalStayOriginalSelectors:["[data-qa=emoji]"],detectParagraphLanguage:!0},{id:"artstationArtwork",matches:"www.artstation.com/artwork/*",excludeSelectors:".project-description a",selectors:[".project-description","div.project-comment-text"],detectParagraphLanguage:!0},{id:"artstationLearning",matches:"www.artstation.com/learning/courses/*",additionalSelectors:["footer.learning-course-description.ng-star-inserted > span"],excludeSelectors:[".learning-card-meta"]},{id:"artstationBlog",matches:["https://www.artstation.com/blogs","https://www.artstation.com/blogs/*"],detectParagraphLanguage:!0,additionalSelectors:[".comment-item-body"],atomicBlockSelectors:[".author-headline",".author-location"],excludeSelectors:["blog-card-thumbnail","blog-card-header",".blog-card-author",".blog-card-meta",".blog-view-header",".blog-grid-title",".post-meta-header"]},{id:"figmaCommunity",matches:"www.figma.com/community/*",normalizeBody:"div.ql-editor[contenteditable='false']",excludeSelectors:["div[class*='metadataRight']","div[class*='commentMetaAndOptions']"],globalStyles:{"div[class*='mini_cardBottomRowSizing']":"height: 3em;"},additionalSelectors:["div[class*='mini_cardBottomRow_Metadata']"],stayOriginalSelectors:["[data-tooltip='tooltip-user-info']"]},{id:"googleIndex",matches:["https://www.google.com/","https://www.google.com.hk/"],excludeSelectors:["#gb","#SIvCob"],inputTutorialsText:"\u8BD5\u8BD5\u8F93\u5165\u4E2D\u6587\u540E\u5FEB\u901F\u8FDE\u51FB 3 \u6B21\u7A7A\u683C\u952E\u7FFB\u8BD1\uFF08\u4EC5\u63D0\u793A\u4E00\u6B21\uFF09",inputTutorialsSelectors:["textarea#APjFqb"]},{id:"googleSearch",matches:"www.google.*/search*",blockMinTextCount:32,blockMinWordCount:3,wrapperSuffix:"",detectParagraphLanguage:!0,excludeSelectors:["a h3 + div","div#sfooter","a[role=presentation] > div > div:first-child",".b5ZQcf",".CEMjEf",".MgUUmf.NUnG9d","#result-stats","[role=navigation]","div.sCuL3","div.eFM0qc.BCF2pd","div.WZ8Tjf","div.adDDi","#headerSection","#rateChatDiv","[id=bres]",".title-D5Lgyj","[data-attrid='VisualDigestVideoResult']",".search-enhance-WDIEkP h4",".SPZz6b h2",".CtCigf",".VLkRKc",".EbH0bb",".Wr0c6d",".jleFbf","#searchform",".yg51vc",".CbAZb"],extraBlockSelectors:[".MUFPAc"],globalStyles:{".V82bz":"-webkit-line-clamp: unset;max-height: unset;margin-bottom:30px",".pe7FNb":"-webkit-line-clamp: unset;",".promotion-3PDMAb":"display: none;",".uAKcGb":"-webkit-line-clamp: unset;max-height: unset;margin-bottom:30px","div[data-content-feature='1'] > div":"-webkit-line-clamp: unset;max-height: unset;","div[style='-webkit-line-clamp:2']":"-webkit-line-clamp: unset;max-height: unset;","div[style='-webkit-line-clamp:3']":"-webkit-line-clamp: unset;max-height: unset;","div[style='-webkit-line-clamp:4']":"-webkit-line-clamp: unset;max-height: unset;",".Pw4Ldf.RsCEN":"height:unset;",".related-question-pair":"overflow:auto;"},ignoreZhCNandZhTW:!0,isTranslateTitle:!1,searchEnhancementConfig:[{id:"google",urlMatch:"https://www\\.google\\..+/search",style:{source:"font-size:12px; margin-bottom: 6px;",enTitle:"margin-top:6px;font-size:14px;",searchTitle:"margin-top:6px;position:relative;padding-right:24px;",more:"color:#1a0dab;margin-top:8px;",enTitleClassName:"immersive-translate-search-enhancement-en-title"},keyword:{value:"[0]$1",matches:[{source:"url",matchRegex:"q=(.+?)&"}]},showCount:5}]},{id:"lowendtalk",matches:"lowendtalk.com",selectors:["[role=heading]","h1",".userContent"]},{id:"linkedinJobs",matches:"www.linkedin.com/jobs/*",selectors:["#job-details > span",".decorated-job-posting__details"]},{id:"linkedinFeed",matches:"https://linkedin.com/feed/*",selectors:["h1",".feed-shared-update-v2__description-wrapper"]},{id:"indiehackers",matches:"www.indiehackers.com",selectors:[".content","h1","h3.story__title",".feed-item__title-link",".article-body",".interview-body"]},{id:"libreddit",matches:"libreddit.de",selectors:["h2.post_title",".comment_body > .md"]},{id:"notionSite",matches:["notion.site","*.notion.site"],normalizeBody:"body",selectors:["div[data-block-id]"]},{id:"notion_so",matches:["www.notion.so"],injectedCss:["[aria-label='Templates'] font br {display:none;}"]},{id:"newyorker",matches:"www.newyorker.com",additionalSelectors:["h1","[data-testid=SummaryItemHed]"],excludeSelectors:["[data-testid=PersistentTop]","[data-testid=StackedNavigationHeader]"],urlChangeDelay:2e3},{id:"startme",matches:"start.me",selectors:[".rss-article__title",".rss-articles-list__article-link",".rss-showcase__title",".rss-showcase__text"]},{id:"scmp",matches:"www.scmp.com",additionalSelectors:[".info__subHeadline",".section-content h2"],globalStyles:{".topic__article-list":"height: unset;",".adverisers__adveriser":"height: unset;",".advertiser__content":"height: unset;",".content-title__link":"display:unset;overflow:unset;-webkit-line-clamp:unset;",".title__text":"max-height:unset; -webkit-line-clamp:unset;",".news-list-item__news-title":"max-height:unset; -webkit-line-clamp:unset;","a[class*='link'] > .link__headline":"max-height:unset; -webkit-line-clamp:unset;"},"bodyRule.add":{bodySelector:"[data-qa='ArticleList-Item']",articleSelector:"[data-qa='GenericArticle-Content']",xpathRule:["datatype:p"]}},{id:"lesswrong",matches:"www.lesswrong.com",extraBlockSelectors:["span.commentOnSelection"]},{id:"mastodon",matches:["mastodon.social","mastodon.online","kolektiva.social","indieweb.social","mastodon.world","infosec.exchange"],isTranslateTitle:!1,selectorMatches:["div#mastodon"],selectors:["div.status__content__text",".about__section__body",".content",".form-container",".account__header__extra"],globalAttributes:{"[class='notranslate app-holder']":{class:"app-holder"}},detectLanguage:!0},{id:"cnbc",matches:"www.cnbc.com",urlChangeDelay:1e3,globalStyles:{"div.Card-titleContainer > div":"-webkit-line-clamp: unset;max-height: unset;"},"excludeSelectors.add":["#GlobalNavigation","#GlobalFooter",".LiveBlogHeader-timestampAndShareBarContainer",".LiveBlogHeader-liveUpdatesPill"]},{id:"dailyDev",matches:"app.daily.dev",selectors:["h1",".typo-body","article h3","[class^=markdown_markdown]"],globalStyles:{".line-clamp-3":"-webkit-line-clamp: unset"}},{id:"pornhub",matches:["*.pornhub.com","pornhub.com"],excludeMatches:["*.pornhub.com/insights/*","pornhub.com/insights/*"],extraBlockSelectors:[".trendingNow",".searchItem",".tagcloud > a"],detectParagraphLanguage:!0,wrapperPrefix:"<br/>",wrapperSuffix:`
`,globalStyles:{"span.title":"height:unset; max-height:unset;",".detailedInfo":"max-height:unset;",".pcVideoListItem":"max-height:unset;",".wrap":"height:unset;",".entry-header":"height:unset;",".entry-title > a":"height:unset;-webkit-line-clamp:unset;"}},{id:"yourporn",matches:"https://www.youporn.com/*",extraBlockSelectors:[".button"],globalStyles:{".video-box":"max-height:unset;",".video-box-title":"white-space:unset;"}},{id:"modelhub",matches:"https://www.modelhub.com/*",globalStyles:{".videoTitle":"height:unset;",a:"height:unset;"}},{id:"xvideos",matches:"https://www.xvideos.com/*",globalStyles:{".title":"-webkit-line-clamp:unset;max-height:unset;",".mozaique":"display:flex; flex-wrap:wrap;"},excludeSelectors:[".video-hd-mark"]},{id:"missav",matches:"https://missav.com/*",globalStyles:{".truncate":"white-space:unset;",".overflow-y-hidden":"max-height:unset;overflow-y:unset;"}},{id:"javbus",matches:"https://www.javbus.com/*",globalStyles:{".photo-info":"height:unset;"},excludeSelectors:[".item-tag","date"]},{id:"spankbang",matches:"https://spankbang.com/*",globalStyles:{".video-item > a":"white-space:unset;"},excludeSelectors:[".stats",".thumb"],extraBlockSelectors:[".searches > a",".tag > a",".extra > a",".positions > li"]},{id:"javdb",matches:"https://javdb*.com/*",globalStyles:{".video-title":"white-space:unset;"},excludeSelectors:[".video-number",".score",".has-addons"]},{id:"jable",matches:"https://jable.tv/*",globalStyles:{".title":"white-space:unset;max-height:unset;",".img-box > a":"position:relative;"}},{id:"netflav",matches:"https://netflav*.com/*",globalStyles:{".grid_title":"max-height:unset;"},extraBlockSelectors:[".genre_filter_item","button"]},{id:"czechvideo",matches:"https://czechvideo.co/*",globalStyles:{".short-story":"height:unset;",".short-title":"height:unset;"},globalAttributes:{header:{translate:"unset;"}}},{id:"weibo",matches:["weibo.com"],selectors:["div[class^='detail_wbtext']"]},{id:"medium",matches:["medium.com","*.medium.com"],selectorMatches:["meta[property='al:ios:url'][content^='medium://']"],urlChangeDelay:20,"additionalExcludeSelectors.remove":["i.fa","i[class^=fa-]",".navmenu-container",".google-symbols","markerow8"],selectors:["h1","h2","h3","article section","[aria-hidden='false'] pre","article p",".postMetaInline","a .u-fontSize24"],excludeSelectors:["[aria-label='Post Preview Reading Time']",".al.b.bl.ag.bp",".al.b.bl.ag.ai",".hx.hy.hz.ia.ib.ab",".qb.ab",".ai.bn.n.mj",".speechify-ignore","mark"],globalStyles:{"h2,h3":"-webkit-line-clamp: unset;max-height:unset;","article p":"-webkit-line-clamp: unset;max-height:unset;"},injectedCss:[".u-lineClamp4,.u-lineClamp3,.u-lineClamp2 {-webkit-line-clamp:unset!important;max-height:unset!important;}"]},{id:"nitter",selectorMatches:["meta[property='og:site_name'][content='Nitter']"],selectors:[".tweet-content",".quote-text"]},{id:"economist",matches:"www.economist.com",extraInlineSelectors:["span[data-caps='initial']"],excludeSelectors:["footer.ds-footer"],injectedCss:["a::before {position:relative!important;}"]},{id:"healthline",matches:"www.healthline.com",excludeSelectors:[".icon-hl-trusted-source-after"]},{id:"ebay",matches:"www.ebay.com",excludeSelectors:["headers","[itemprop=offers]",".dne-itemtile-original-price"],paragraphMinTextCount:4,paragraphMinWordCount:2,globalStyles:{"[itemprop=name]":"-webkit-line-clamp: unset;max-height: unset;",".merch-item-title":"-webkit-line-clamp: unset;max-height: unset;"}},{id:"skinstore",matches:"www.skinstore.com",excludeSelectors:[".responsiveFlyoutMenu_levelOneLink"],paragraphMinTextCount:4,paragraphMinWordCount:2},{id:"tripadvisor",matches:"www.tripadvisor.com",paragraphMinTextCount:4,paragraphMinWordCount:2},{id:"amazon",matches:"www.amazon.com",paragraphMinTextCount:4,paragraphMinWordCount:2,extraBlockSelectors:[".a-size-small.a-link-normal.page-banner-link.a-nowrap"],globalStyles:{".a-carousel-viewport":"height:unset;","[class*='clamp']":"max-height: unset;-webkit-line-clamp: unset;","[data-rows]":"max-height: unset;-webkit-line-clamp: unset;","[data-a-expander-name='review_text_read_more']":" max-height: unset;"},excludeSelectors:["#navFooter","#navbar-main",".s-price-instructions-style","[class*='-star ']","[data-hook='acr-average-stars-rating-text']",".a-color-price"]},{id:"visualstudioMarketplace",matches:"marketplace.visualstudio.com",additionalExcludeSelectors:[".core-info-second-row",".core-info-third-row",".meta-data-list",".item-title",".breadcrumb",".itemDetails-right",".ux-user-name",".ux-updated-date",".ux-item-second-row-wrapper",".stats-and-offer",".header-container"],atomicBlockSelectors:[".core-info-cell > div.name"],globalStyles:{".item-details-control-root.ux-item-shortdesc":"height: unset; overflow: visible; max-height:unset;"}},{id:"bloomberg",matches:"www.bloomberg.com",urlChangeDelay:2e3,excludeSelectors:[".ticker-bar","nav","[aria-label=Banner]","aside","[data-component=ticker-bar]","footer.bb-global-footer",".vjs-text-track-display"],"bodyRule.add":{bodySelector:"main article",articleSelector:".body-content"},"subtitleRule.add":{type:"webvtt",subtitleUrlRegExp:"webvtt$",loadingContainerSelector:".vjs-text-track-display"}},{id:"baiduXueshu",matches:"xueshu.baidu.com",globalStyles:{".abstract_wr":"height: unset; overflow: visible; max-height:unset;"}},{id:"sciencedirect",matches:"www.sciencedirect.com",urlChangeDelay:2e3,stayOriginalSelectors:["span.display","span.math"],extraBlockSelectors:["span.captions","span[id^=cap]"],globalAttributes:{"#abspara0010 br":{style:"display:none;"}}},{id:"thehighestofthemountains",matches:"www.thehighestofthemountains.com",extraBlockSelectors:"div"},{id:"telegraph1",matches:"te.legra.ph",normalizeBody:"div.ql-editor[contenteditable='false']",urlChangeDelay:500},{id:"telegraph2",matches:["telegra.ph"],normalizeBody:"div.ql-editor[contenteditable='false']",wrapperPrefix:`
`},{id:"annasArchive",matches:["*.annas-archive.org","annas-archive.org"],selectors:[],globalStyles:{"div[id^='link-index-']":"height: unset; max-height: unset;","main div[class*='h-[125]']":"height:auto"},normalizeBody:"body",extraBlockSelectors:["a.custom-a"]},{id:"explainshell",matches:["explainshell.com"],selectors:["[class='help-box']"]},{id:"apnews",matches:["apnews.com"],urlChangeDelay:2e3},{id:"googlePlay",matches:"play.google.com",excludeSelectors:[".vlGucd",".ubGTjb"],globalStyles:{".Epkrse":"-webkit-line-clamp:unset;"}},{id:"tumblr",matches:["www.tumblr.com"],selectors:["article h1","article > header + div","[data-testid=notes-root] p","div.k31gt","p","article ul","article h2","article h3","article h4","article h5","article h6","article blockquote","article ol"],excludeSelectors:["div.fAAi8","div.wvu3V"],preWhitespaceDetectedTags:["DIV","SPAN","P"]},{id:"tinytask",matches:"https://www.tinytask.net",globalStyles:{"table > tbody > tr > td > center > table > tbody > tr > td > ul > li":"height: 100%"}},{id:"foxnews",matches:"www.foxnews.com",shadowRootSelectors:["[data-spot-im-module-default-area='conversation'] > div"],"excludeTags.add":["TEXT","IMG","SUB","SUP","CODE","TT","ASIDE"],excludeSelectors:[".site-footer",".components-MessageDetails-index__message-details-wrapper","div[class^=SlideDown__container]",".components-MessageActions-index__messageActionsWrapper","span[data-openweb-allow-amp]","div.spcv_typing-users"]},{id:"afreecatv",matches:"www.afreecatv.com",globalStyles:{"a.title":"max-height:unset;-webkit-line-clamp:unset;"}},{id:"opennet",matches:"opennet.ru","excludeTags.add":["LABEL","IMG","SUB","SUP","CODE","TT"],"excludeTags.remove":["LINK","G","MATH","TTS-SENTENCE","AIO-CODE"]},{id:"construct",matches:["www.construct.net"],excludeMatches:["preview.construct.net","editor.construct.net"],additionalSelectors:["aside","div.manualContent"],atomicBlockSelectors:[],stayOriginalSelectors:["a.usernameReference"],additionalInlineSelectors:["a.forumLink"],additionalExcludeSelectors:["div.topNav","div.usernameLink","ul.authorDetails","ul.tagViewer","ul.breadCrumbNav","ul.subForumForums","ul.postTools","li.comment ul.controls","div.forumTopNavWrap","div.downloadWrap","div.articleLeftMenu","div.usernameTextWrap","div.favouriteWrap","div.bannerWrapper","div.viewAddonRightMenu","div.extendedMenu.addonsSubMenu","#BottomLinks.bottomLinks","div#LeftSide.leftSide","div#BottomWrap.bottomWrap","div.courseListWrap div.overview","div.conversationControls","div.contentWrapper h1","div.conversationControls","td.location a#LocationLink","#TopLevelComments .topBar","#TopLevelComments .controls",".tagViewWrap",".changeCount",".otherStats",".FilterMenu",".mobileTopicStats",".forumControlsWrapper",".forumsBottomNavWrap",".breadCrumbNav",".favouriteWrap",".usernameLink",".followWrapper",".blogPostStats",".manualContent dl dt"],globalStyles:{"td.location a#LocationLink":"padding-top: 4px;","div.articleMain .tutCourseWrap":"align-items: flex-start;"}},{id:"getpocket",matches:"getpocket.com",selectors:["h2","div.excerpt p","article","h1"],globalStyles:{"h2.title":"max-height:unset;-webkit-line-clamp:unset;","div.excerpt p":"max-height:unset;-webkit-line-clamp:unset;"}},{id:"fandom",matches:"*.fandom.com",urlChangeDelay:800,normalizeBody:"#mw-content-text",globalStyles:{"#mw-content-text > div > div:nth-child(1)":"height:100%;"},additionalExcludeSelectors:["header.fandom-community-header","div.ph-registration-buttons"]},{id:"huggingface",matches:"huggingface.co",globalStyles:{".line-clamp-2":"-webkit-line-clamp:unset;max-height:unset;"}},{id:"statista",matches:"www.statista.com",globalStyles:{".itemContent__text":"height:unset;max-height:unset;",".itemContent__subline":"height:unset;max-height:unset;"}},{id:"epubReader",matches:"epub-reader.online",globalStyles:{"span.slide-contents-item-label":"overflow:visible;max-height:unset;white-space:normal;"},atomicBlockSelectors:["div.slide-contents-item"]},{id:"you",matches:"https://you.com/search",globalStyles:{h3:"max-height:unset;-webkit-line-clamp:unset;",".caKYaC":"max-height:unset;-webkit-line-clamp:unset;",".dDwDsu":"max-height:unset;-webkit-line-clamp:unset;"},excludeSelectors:["div.hpIWZO"]},{id:"auth0Openai",matches:"auth0.openai.com",excludeSelectors:["form","header > h1"]},{id:"chatOpenai",matches:"chat.openai.com",excludeSelectors:["div.absolute.bottom-0.left-0.w-full","h1","div#headlessui-portal-root","nav","ul[aria-multiselectable]",".markdown *","div[class='flex flex-col items-start']","div[class='flex items-center justify-center gap-1 border-b border-black/10 bg-gray-50 p-3 text-gray-500 dark:border-gray-900/50 dark:bg-gray-700 dark:text-gray-300']"],"excludeTags.remove":["BUTTON"],isTranslateTitle:!1,wrapperPrefix:"",globalStyles:{"[class*='line-clamp']":"max-height:unset;-webkit-line-clamp:unset;height:unset;white-space:unset;"},aiRule:{streamingSelector:".result-streaming.markdown",messageWrapperSelector:".markdown",streamingChange:!0,streamingDeepChild:!0}},{id:"newstop",matches:["chat.newstop.asia","chat.waixingyun.cn"],excludeSelectors:[".markdown-body *"],aiRule:{streamingSelector:".n-button.n-button--warning-type.n-button--medium-type",messageWrapperSelector:".markdown-body",streamingChange:!1,streamingDeepChild:!0}},{id:"askgpt",matches:["askgpt.cn","chatcat.zhaoyoung.me"],excludeSelectors:[".markdown-body *"],aiRule:{streamingSelector:".home_chat-message-status__EsVNi",messageWrapperSelector:".markdown-body",streamingChange:!0,streamingDeepChild:!0}},{id:"poe",matches:["https://poe.com/*"],excludeSelectors:[".Markdown_markdownContainer__UyYrv *",".MarkdownLink_linkifiedLink__KxC9G"],aiRule:{streamingSelector:".ChatStopMessageButton_stopButton__LWNj6",messageWrapperSelector:".Markdown_markdownContainer__UyYrv",streamingChange:!1,streamingDeepChild:!0}},{id:"glasp",matches:"glasp.co",excludeSelectors:[".home_overview_list_content_wrapper"]},{id:"developerChrome",matches:"developer.chrome.com",excludeSelectors:["web-tabs","ul.code-sections--summary"]},{id:"android",matches:["developer.android.google.cn","developer.android.com"],observeUrlChange:!0,additionalSelectors:["aside","google-codelab-step"]},{id:"ft",matches:"www.ft.com",excludeSelectors:["header","[aria-labelledby=cookie-banner-aria-label]","footer","[aria-label='Primary navigation']"]},{id:"microsoft",matches:"https://apps.microsoft.com/store/detail/*",additionalSelectors:["pre"],globalStyles:{".line-clamp":"-webkit-line-clamp:unset;max-height:unset;"},isTransformPreTagNewLine:!0},{id:"gitlab",matches:"gitlab.com",excludeSelectors:[".tree-content-holder","nav",".home-panel-metadata","div[data-testid=project_topic_list]",".commit"]},{id:"newthingsunderthesun",matches:"www.newthingsunderthesun.com",additionalSelectors:["[translate=no]"]},{id:"tiktok",matches:"https://www.tiktok.com/*/video/*",selectors:["[data-e2e^=comment-level]","[data-e2e=browse-video-desc] > span"]},{id:"rfcEditor",matches:["www.rfc-editor.org","docs.haproxy.org"],isTransformPreTagNewLine:!0,"excludeTags.add":["IMG","SUB","SUP","CODE","TT","ASIDE","FOOTER"],"excludeTags.remove":["LINK","G","PRE","TTS-SENTENCE","AIO-CODE"]},{id:"steamcommunity",matches:"https://steamcommunity.com/app/*",globalStyles:{".forum_topic":"height:auto;",".forum_topic_name":"white-space:normal;"},excludeSelectors:[".forum_paging",".forum_topic_reply_count",".forum_topic_lastpost",".forum_topic_award_count",".discussion_search_pagingcontrols"]},{id:"steampowered",matches:"store.steampowered.com/app/*",selectors:[".game_description_snippet",".game_area_description","#earlyAccessHeader","[id^='ReviewContent'] .content"],excludeSelectors:["#global_actions","#store_controls","#foryou_tab","[class*=persona]","[class*=game_title_area]","a.btn_medium",".persona_name",".hours.ellipsis",".checkcol",".postedDate",".dev_row .summary",".already_in_library",".game_header_image_ctn .grid_content",".ds_flag.ds_wishlist_flag",".early_access_review.tooltip",".communitylink_achievement_images",".user_reviews_summary_row.summary",".review_award_ctn",".add_to_wishlist_area",".next_in_queue_content",".glance_tags.popular_tags",".game_purchase_action",".vote_button_ctn","#VoteUpDownBtnCtn","#footer","#ViewAllReviewssummary"],atomicBlockSelectors:[".game_area_sys_req_leftCol",".game_area_sys_req_rightCol"],extraInlineSelectors:[".pulldown"],additionalSelectors:[".game_page_autocollapse_ctn iframe"],globalStyles:{".game_description_snippet":"max-height:unset; overflow: scroll;",".game_purchase_area_friends_want":"height: auto; padding-bottom: 6px;",".div.early_access_banner":"height: 84px",".franchise_notice > *":"height: 84px"},detectParagraphLanguage:!0},{id:"nature",matches:"https://www.nature.com/articles/*",excludeSelectors:[".c-header",".c-recommendations-header",".c-recommendations-list-container",".c-article-references__links",".c-article-identifiers",".c-article-author-list",".c-article-metrics-bar__wrapper",".c-article__pill-button","#author-information-content","#article-info-section"]},{id:"webofscience",matches:"https://www.webofscience.com/*",globalStyles:{".abstract":"height:auto !important;",".show-more-lines":"height:unset !important;"},excludeSelectors:[".summary-left-panel",".authors","app-full-record-keywords mark"],mutationObserverContainerSelectors:["[data-ta='summary-record-title-link']","#FullRTa-fullRecordtitle-0"],extraBlockSelectors:["app-summary-authors + div","app-full-record-keywords span span"],observeUrlChange:!0,urlChangeDelay:600,mutationChangeDelay:600},{id:"appleinsider",matches:["appleinsider.com"],excludeSelectors:["#topic-nav"]},{id:"jetbrains",matches:"https://www.jetbrains.com/help/*",extraBlockSelectors:["[data-test=prompt]"]},{id:"crates",matches:["https://crates.io/search*"],selectors:["div[class^=_description-box] div[class^=_description]"]},{id:"theverge",matches:"www.theverge.com",shadowRootSelectors:["div#coral_thread > div"]},{id:"simp",matches:"https://beta.simp.red/trans*",mainFrameSelector:".simpread-read-root"},{id:"lookintobitcoin",matches:"https://www.lookintobitcoin.com/charts/*",excludeSelectors:["svg"]},{id:"openaiAccount",matches:"https://platform.openai.com/account/api-keys*",urlChangeDelay:1500},{id:"openaiDocs",matches:"https://platform.openai.com/docs*","excludeSelectors.add":[".pheader"]},{id:"pkgStd",matches:"https://pkg.go.dev/std",selectors:["td.UnitDirectories-desktopSynopsis"]},{id:"pkg",matches:"https://pkg.go.dev/*",selectors:["div.UnitDetails p"]},{id:"explainpaper",matches:["https://www.explainpaper.com/reader*"],isTranslateTitle:!1,selectors:[".leading-relaxed",".chat-messages p",".text-sm"]},{id:"colab",matches:"https://colab.research.google.com/*",excludeSelectors:["code","view-line"]},{id:"gatesnotes",matches:"www.gatesnotes.com",minZIndex:-1},{id:"kakao",matches:"page.kakao.com",shadowRootSelectors:["div[style^='visibility: visible'"]},{id:"coinmarketcap",matches:"coinmarketcap.com",extraBlockSelectors:["div[class='sc-3502f6cd-0 JxHqg']"]},{id:"wandb",matches:"wandb.ai",additionalSelectors:[".report-page-top"],additionalStayOriginalSelectors:["span[data-slate-inline=true]"],extraInlineSelectors:[]},{id:"paulgraham",matches:"paulgraham.com",additionalSelectors:["font[face=verdana]"],extraBlockSelectors:"font[face=verdana]"},{id:"zendesk",matches:"https://*.zendesk.com/agent/*",selectors:["[data-test-id*=subject]",".zd-comment",".title"]},{id:"migadu",matches:"webmail.migadu.com",selectors:[".bodyText"]},{id:"thehackernews",matches:"thehackernews.com",excludeSelectors:["span#blog-pager-older-link","span.h-datetime"],additionalSelectors:[".pop-title"]},{id:"brown",matches:"cs.brown.edu",excludeSelectors:[".SCodeFlow"]},{id:"tass",matches:"tass.ru",globalStyles:{"#__next":"font-size: 19px;line-height:28px;"}},{id:"chatGoogle",matches:"chat.google.com",selectors:["[jsname=bgckF]"]},{id:"fiverr",matches:"https://www.fiverr.com/inbox/*",selectors:[".message-body"]},{id:"fiverr-main",matches:"*.fiverr.com",globalStyles:{"h3 > a":"-webkit-line-clamp:unset;overflow:unset;",h3:"-webkit-line-clamp:unset;overflow:unset;",h5:"-webkit-line-clamp:unset;overflow:unset;",p:"-webkit-line-clamp:unset;overflow:unset;",".YLycza2.u9KHmsf":"height:unset;max-height:unset;",".lt2ar2q.EhHcMiw":"height:unset; max-height: unset;"},excludeSelectors:[".popular"]},{id:"jira",matches:["jira.*.com/browse/*","jira.*.com/projects/*"],selectors:["[id=descriptionmodule]","[id=summary-val]","div.action-body","td.stsummary"]},{id:"ahaIo",matches:["*.aha.io"],selectors:["[tabindex='0']","div.user-content","div.comments__body","span.name"]},{id:"thehill",matches:"thehill.com",injectedCss:[".most-popular-item { max-height: unset !important; }",".most-popular-item__link { -webkit-line-clamp: unset !important; }"],excludeSelectors:["div.featured-cards__byline","div.list-item__meta",".tags__item","div.extended-scroll__header",".submitted-by",".site-header--has-alert-banner",".homepage__container__opinion__item__byline",".homepage__container__header",".archive__item__meta"]},{id:"ubuntu",matches:"manpages.ubuntu.com",selectors:["pre"],atomicBlockTags:["pre"]},{id:"spiedigitallibrary",matches:"www.spiedigitallibrary.org","excludeTags.add":["IMG","SUB","SUP","CODE","TT","ASIDE","FOOTER"],"excludeTags.remove":["LINK"]},{id:"promptingguide",matches:"www.promptingguide.ai",selectors:["article","li"]},{id:"ground",matches:"ground.news",globalStyles:{".line-clamp-3":"-webkit-line-clamp: unset !important;"}},{id:"ietf",matches:"*.ietf.org/doc/html/*",additionalSelectors:["pre"],isTransformPreTagNewLine:!0,preWhitespaceDetectedTags:["DIV","SPAN","PRE"]},{id:"newsminimalist",matches:"https://www.newsminimalist.com/",extraBlockSelectors:[".inline-flex"],"excludeTags.remove":["BUTTON"]},{id:"yandexIndex",matches:"https://yandex.com/",selectors:[".tabs__item-text"]},{id:"yandexSearch",matches:"https://yandex.com/search/*",excludeSelectors:[".KeyValue-Row",".EntityFeedbackFooter",".Organic-Subtitle",".SerpFooter-Content",".serp-user",".Pager"],globalStyles:{".ExtendedText-Toggle":"white-space:normal;"}},{id:"yandex",matches:"https://yandex.com/video/*",selectors:[".serp-item__title",".serp-item__text",".Keypoints-ItemTitle",".bes-epmjnzm-idtktyj",".OrganicTitle-LinkText","h1.VideoTitle"],globalStyles:{".serp-item__title":"-webkit-line-clamp: unset;max-height:unset;",".serp-item__text":"-webkit-line-clamp: unset;max-height:unset;",".OrganicTitle-LinkText":"-webkit-line-clamp: unset;max-height:unset;","h1.VideoTitle":"-webkit-line-clamp: unset;max-height:unset;",".link .serp-item__keypoints":"bottom:2px;",".OrganicTitle":"max-height:unset;"}},{id:"perplexityAi",matches:"https://www.perplexity.ai/search/*",extraBlockSelectors:[".prose > span"],additionalStayOriginalSelectors:["a.citation"],insertPosition:"afterend"},{id:"perplexity",matches:"https://www.perplexity.ai",globalStyles:{".line-clamp-1":"-webkit-line-clamp: unset !important;",".line-clamp-2":"-webkit-line-clamp: unset !important;"}},{id:"allmyfaves",matches:"https://allmyfaves.com/",selectors:["p"],paragraphMinTextCount:2,paragraphMinWordCount:1},{id:"man7",matches:"man7.org",isTransformPreTagNewLine:!0,globalStyles:{pre:"white-space: inherit;"}},{id:"kadaza",matches:"https://www.kadaza.com/",selectors:[".header span.title",".custom-content-footer"],containerMinTextCount:2,containerMinWordCount:1,paragraphMinTextCount:2,paragraphMinWordCount:1},{id:"urlChangeDelay",matches:["https://babelnovel.com/books/*","https://www.webnovel.com/book/*","https://platform.openai.com/docs/*","docs.oracle.com","docs-cortex.paloaltonetworks.com","forum.m5stack.com/topic/*","community.m5stack.com/topic/*"],urlChangeDelay:0,_comment:"\u89E3\u51B3url\u53D8\u5316\u91CD\u590D\u7FFB\u8BD1\u95EE\u9898"},{id:"genuine",matches:"blog.genuine.com",excludeSelectors:["div.enlighter"]},{id:"chinadaily",matches:"www.chinadaily.com.cn",injectedCss:["a { height: unset !important; }","li { height: unset !important; }","div { height: unset !important; }",".immersive-translate-target-inner {color:black;}"],excludeSelectors:[".topNav",".topNav2_art > span",".topNav_art2 > .dropdown",".dibu-three",".topBar"]},{id:"braynzarsoft",matches:"www.braynzarsoft.net",selectors:["div#view-question-desc"]},{globalAttributes:{"#stimulus":{translate:"off",class:"stimulus"},"#stem":{translate:"off",class:"stem"}},id:"lawhub",matches:"https://lawhub.lsac.org/question/*"},{id:"yuque",matches:"https://www.yuque.com/*",excludeSelectors:[".lark-virtual-tree"]},{id:"bearblog",matches:"https://bearblog.dev/discover/*",excludeTags:["small"]},{id:"researchgate",matches:"www.researchgate.net",excludeSelectors:[".nova-legacy-v-publication-item__meta-data",".nova-legacy-v-publication-item__person-list",".js-authors-list"]},{id:"theatlantic",matches:["www.theatlantic.com","https://mashable.com/*"],"excludeSelectors.add":["footer:last-of-type","nav","header div.subtitle-2.w-full"],initialSelectorGlobalAttributes:{"footer:last-of-type":{translate:"no"},"nav:last-of-type":{translate:"no"},nav:{translate:"no"}}},{id:"youtrackJetbrains",matches:"youtrack.jetbrains.com/articles/*",selectors:["[role=presentation]","[data-test=article-content]"],excludeSelectors:[".toolbar__ee8"]},{id:"bbc",matches:"www.bbc.com",excludeSelectors:["section.module--languages",".drop-capped"]},{id:"dw",matches:"www.dw.com",initialSelectorGlobalAttributes:{"footer:last-of-type":{translate:"no"},"nav:last-of-type":{translate:"no"},nav:{translate:"no"}},excludeSelectors:[".focus-menu-shown"]},{id:"sentry",matches:"docs.sentry.io",initialSelectorGlobalAttributes:{"footer:last-of-type":{translate:"no"},".navbar":{translate:"no"}},"extraInlineSelectors.add":[".term-wrapper","span.description"]},{id:"openai-blog",matches:"https://openai.com/blog/*","stayOriginalTags.remove":["CODE"]},{id:"urlComment",selectorMatches:["meta[name='generator'][content^='Discourse']"],urlChangeDelay:0,_comment:"\u89E3\u51B3url\u53D8\u5316\u4F46\u662F\u9875\u9762\u4E0D\u53D8\u7684\u95EE\u9898"},{id:"feedly",matches:"feedly.com",globalStyles:{".TitleOnlyLayout":"height:unset !important;",".EntrySummary--u4":"-webkit-line-clamp: unset;max-height:unset;",".EntrySummary--u5":"-webkit-line-clamp: unset;max-height:unset;"},excludeSelectors:[".Leftnav"]},{id:"bardGoogle",matches:"bard.google.com",excludeSelectors:["mat-sidenav","div.capabilities-disclaimer","#cdk-overlay-6","message-actions button",".mdc-button__label .ng-star-inserted",".mdc-list-item__primary-text"],isTranslateTitle:!1,"excludeTags.add":["mat-tooltip-component"],"excludeTags.remove":["BUTTON"]},{id:"whatsapp",matches:"web.whatsapp.com",selectors:[".copyable-text > span"],wrapperPrefix:`
`,wrapperSuffix:"<br/>"},{id:"bing",matches:"https://*.bing.com/search*",extraInlineSelectors:["a","i"],globalStyles:{"[class*='lineclamp']":"-webkit-line-clamp:unset;"}},{id:"yahoo",matches:"*.yahoo.*",excludeSelectors:["._ys_jiqava","#ybar-inner-wrap","#Col2-5-Rmp-Proxy"],extraBlockSelectors:[".SIPGg",".sc-kzMCTH.pSZXj"],globalStyles:{"#atomic .Mt\\(20px\\)":"margin-top: 100px;","[class*='LineClamp']":"-webkit-line-clamp:unset;max-height:unset;","a[class*='js-content-viewer']> div[class*='Td\\(n\\)']":"overflow: scroll;","[class*='_ys_24482e']":"-webkit-line-clamp:unset;","#Aside > :first-child":"overflow:scroll;"}},{id:"wsj",matches:"www.wsj.com",excludeSelectors:["header","footer","nav","[aria-label='Markets summary']"]},{id:"businessinsider",matches:"www.businessinsider.com",excludeSelectors:["header","nav","section.live-updates-module "]},{id:"goodreads",matches:"www.goodreads.com",excludeSelectors:[".badgeYear",".gr-mediaBox__desc",".bookVotedRow",".minirating","div[itemprop='aggregateRating']",".wtrButtonContainer",".RatingsHistogram__labelTitle",".FollowButton",".siteHeader__topLevelLink","#books > thead","td[class*='rating']","td[class*='shelves']","td[class*='date_read']","td[class*='date_added']","td[class*='actions']"]},{id:"feeder",matches:"https://feeder.co/*",globalStyles:{".item-summary":"-webkit-line-clamp:unset;"}},{id:"elektrotechnik",matches:"https://www.elektrotechnik.rwth-aachen.de/*",globalAttributes:{"[class='notranslate']":{class:""}}},{id:"nytimes",matches:"www.nytimes.com",excludeSelectors:["#app > div > div > header","#app > div > div > div > div > header","#in-story-masthead"],injectedCss:["a::after {position:relative!important;}"]},{id:"bugsKde",matches:"bugs.kde.org","excludeTags.remove":["svg","PRE"],additionalExcludeSelectors:[".bz_first_comment_head",".bz_comment_head",".related_actions"]},{id:"eastmoney",matches:"guba.eastmoney.com",searchEnhancementConfig:[{id:"eastmoney",urlMatch:"guba.eastmoney.com/news,us\\w+,\\w+.html",delayTime:0,selector:".moneyFlowContainer",selectorAction:"insertBefore",style:{container:"background:white;border:none;border-radius: 4px;box-shadow: 0 2px 4px hsla(216,5%,62%,.14);",source:"font-size:12px; margin-bottom: 0px;",keyword:"color:#294688",title:"font-size:14px;color:#294688;",enTitle:"margin-top:4px;font-size:12px;",searchTitle:"margin:4px 0 16px;position:relative;padding-right:24px;font-size: 16px;",time:"margin: 0px 0 16px;",more:"color:#294688;margin-top:8px;"},keyword:{value:"[0]$1 stock",matches:[{source:"url",matchRegex:"guba.eastmoney.com/news,us(\\w+?),\\S+.html"}]},showCount:8},{id:"eastmoney",urlMatch:"guba.eastmoney.com/list,us\\w+.*.html",delayTime:0,selector:".qualityContentContainer",selectorAction:"insertBefore",style:{container:"background:white;border:none;border-radius: 4px;box-shadow: 0 2px 4px hsla(216,5%,62%,.14);",source:"font-size:12px; margin-bottom: 0px;",keyword:"color:#294688",title:"font-size:14px;color:#294688;",enTitle:"margin-top:4px;font-size:12px;",searchTitle:"margin:4px 0 16px;position:relative;padding-right:24px;font-size: 16px;",time:"margin:0px 0 16px;",more:"color:#294688;margin-top:8px;"},keyword:{value:"[0]$1:[0]$2",matches:[{source:{type:"selector",attribute:"href"},matchRegex:"code=(\\w+)_(\\w+)",match:"a[href*='rank/stock?code=']"}]},showCount:8}]},{id:"xueqiu",matches:"xueqiu.com",searchEnhancementConfig:[{id:"xueqiu",urlMatch:"xueqiu.com/S/[a-zA-Z]+/?$",delayTime:0,selector:".container-side-sm.float-right.stock__side",selectorAction:"appendChild",style:{container:"background:white;border:none;border-radius: 4px;padding:0;",source:"font-size:12px; margin-bottom: 0px;",keyword:"color:#06c",title:"font-size:14px;color:#06c;",enTitle:"margin-top:4px;font-size:12px;",searchTitle:"margin:4px 0 16px;position:relative;padding-right:24px;font-size: 16px;font-weight: bold;",time:"margin:0px 0 16px;",more:"color:#06c;margin-top:8px;"},showCount:8,keyword:{value:"[0]$1",matches:[{source:{type:"selector",attribute:"text"},matchRegex:"\\((.+)\\)",match:".stock-name"}]}}]},{id:"laohu8",matches:"www.laohu8.com",searchEnhancementConfig:[{id:"laohu8",urlMatch:"www.laohu8.com/stock/[a-zA-Z]+/?$",delayTime:0,selector:".hot-stocks-root",selectorAction:"insertBefore",style:{container:"background:white;border:none;border-radius: 4px;box-shadow: 0 2px 4px hsla(216,5%,62%,.14);",source:"font-size:12px; margin-bottom: 0px;",title:"font-size:14px;color: #007bff;",enTitle:"margin-top:4px;color: #4d5156;font-size:12px;",searchTitle:"margin:4px 0 16px;position:relative;padding-right:24px;font-size: 16px;",time:"margin: 0px 0 16px;"},keyword:{value:"[0]$1 stock",matches:[{source:"url",matchRegex:"stock/([a-zA-Z]+)"}]},showCount:8}]},{id:"futunn",matches:"www.futunn.com",searchEnhancementConfig:[{id:"futunn",urlMatch:"www.futunn.com/stock/\\w+-US",delayTime:0,selector:".right",selectorAction:"appendChild",style:{container:"background:white;border:none;border-radius: 4px;box-shadow: 0 2px 4px hsla(216,5%,62%,.14);",source:"font-size:12px; margin-bottom: 4px;",title:"font-size:14px;color: #007bff;",enTitle:"margin-top:4px;color: #4d5156;font-size:12px;",searchTitle:"margin:4px 0 16px;position:relative;padding-right:24px;font-size: 16px;",time:"margin: 4px 0 20px;"},keyword:{value:"[0]$1 stock",matches:[{source:"url",matchRegex:"stock/([a-zA-Z]+)-US"}]},showCount:8}]},{id:"bmvrMarseille",matches:"www.bmvr.marseille.fr",globalStyles:{"a > div":"display:block;","[style*='358px;']":"width: 33.3333%; height: auto; padding: 0px; position: relative; margin: 0px;"},globalAttributes:{"#app":{class:""}}},{id:"haproxy",matches:["docs.haproxy.org","www.oreilly.com/openbook/opensources/book/*"],excludeTags:[],stayOriginalSelectors:[],stayOriginalTags:[],isTransformPreTagNewLine:!0},{id:"piAi",matches:"pi.ai/talk",excludeSelectors:[".whitespace-pre-wrap > span *"],aiRule:{streamingSelector:"button[class*='fixed'][disabled]",messageWrapperSelector:".whitespace-pre-wrap",streamingChange:!1,streamingDeepChild:!1},globalStyles:{"[class*='text-brand-green']":"flex-direction:column;"}},{id:"claudeAi",matches:"claude.ai",excludeSelectors:[".contents *"],"excludeTags.remove":["PRE"],injectedCss:"[data-testid='chat-menu-trigger'] br {display:none;}",aiRule:{messageWrapperSelector:".contents",messageContainerSelector:".ReactMarkdown",messageStreamEndSelector:".contents > button",streamingChange:!0,streamingDeepChild:!1}},{id:"feishu",matches:["*.feishu.cn","*.larkoffice.com","*.larksuite.com"],"additionalExcludeSelectors.remove":[".notranslate","[translate=no]"],mutationObserverLimitTargetSelectors:[".maindocbody","div[class*='render']","div[class*='block']"],excludeSelectors:[".catalogue__list"]},{id:"gitbook",selectorMatches:[".gitbook-root"],"additionalExcludeSelectors.remove":[".notranslate","[translate=no]"],"additionalExcludeSelectors.add":["[spellcheck='false']"]},{id:"bugsWebkit",matches:"bugs.webkit.org",isTransformPreTagNewLine:!0},{id:"mitre",matches:"cwe.mitre.org",globalStyles:{"span.list_entry":"height: unset;"}},{id:"kaggle",matches:"www.kaggle.com",excludeTags:["i","button"]},{id:"ieee",matches:"spectrum.ieee.org",extraBlockSelectors:["small"]},{id:"ieeexplore",matches:"ieeexplore.ieee.org",stayOriginalSelectors:["a[ref-type]",".inline-formula",".display-formula"]},{id:"cnn",matches:"*.cnn.com","excludeSelectors.add":[".ad-slot-header__wrapper","#pageFooter"],"bodyRule.add":{bodySelector:".layout__content-wrapper",articleSelector:".article__content-container"}},{id:"marginalrevolution",matches:"marginalrevolution.com",globalAttributes:{header:{translate:"unset;"}}},{id:"highfrequencyelectronics",matches:"www.highfrequencyelectronics.com",globalStyles:{"#main-content":"overflow:unset;"}},{id:"githubBlog",matches:"github.blog",globalStyles:{".font-mktg":"word-break:normal;"}},{id:"semanticscholar",matches:"www.semanticscholar.org",selectors:[".cl-paper-title",".cl-paper-abstract",".tldr-abstract-replacement",".text-truncator",".paper-detail-title"]},{id:"uni-trier",matches:"dblp.uni-trier.de",selectors:["h1","h2",".title",".external","dd p"],excludeSelectors:[".side-column"]},{id:"bilibili",matches:"www.bilibili.com","excludeSelectors.add":[".bpx-player-subtitle-panel-text br"],"subtitleRule.add":{type:"bilibili",subtitleUrlRegExp:"aisubtitle.hdslb.com/bfs"}},{id:"time",matches:"time.com",excludeSelectors:[".date-and-duration"],globalStyles:{".headline":"-webkit-line-clamp:unset;overflow:unset;height:unset;",h3:"-webkit-line-clamp:unset;overflow:unset;",p:"-webkit-line-clamp:unset;overflow:unset;"}},{id:"docs-swift",matches:"docs.swift.org",selectors:[".content","#menu"]},{id:"uzh",matches:"www.uzh.ch",injectedCss:[".TextImage--inner {overflow:auto !important;}"]},{id:"mail-yandex",matches:"mail.yandex.com",selectors:["article",".Text_color_primary",".mail-MessageSnippet-Item_subject"],globalStyles:{".mail-MessageSnippet":"height: unset; line-height:unset;",".immersive-translate-target-translation-block-wrapper":"margin:unset;"}},{id:"edstem",matches:"edstem.org","additionalExcludeSelectors.remove":[".notranslate","[translate=no]"]},{id:"forums.zotero",matches:"forums.zotero.org",selectors:[".page-sidebar",".page-content"]},{id:"pubmed.ncbi.nlm.nih.gov",matches:"pubmed.ncbi.nlm.nih.gov",urlChangeDelay:0,excludeSelectors:[".docsum-journal-citation",".citation-part",".docsum-authors",".top-wrapper",".article-source",".citation-doi",".identifiers",".cite",".share",".arrow-link"]},{id:"chosun",matches:"www.chosun.com",injectedCss:"body {word-break: unset!important;}"},{id:"yna",matches:"*.yna*",injectedCss:["font > br {display:none}"],globalStyles:{"a,strong":"max-height:unset;-webkit-line-clamp:unset;height:unset;white-space:unset;","div,p,li,.item-box01,.news-con":"height:unset;max-height:unset;-webkit-line-clamp:unset;"},"additionalExcludeSelectors.remove":[".notranslate","[translate=no]"]},{id:"cnet",matches:"www.cnet.com",globalStyles:{"h3,div,span,p":"max-height:unset;-webkit-line-clamp:unset;height:unset;white-space:unset;"}},{id:"dolmods",matches:"dolmods.net",globalStyles:{"[class*='max-h']":"max-height:unset!important;"}},{id:"digitimes",matches:"www.digitimes.com",globalStyles:{"a,.title,.abstract,.display-5,.top":"max-height:unset;-webkit-line-clamp:unset;height:unset;white-space:unset;"},"excludeSelectors.add":[".main-nav-frame",".sub-header-wrapper",".footer",".date"],"additionalExcludeSelectors.remove":[".notranslate","[translate=no]"]},{id:"vdi-nachrichten",matches:"www.vdi-nachrichten.com","excludeSelectors.add":[".header-menu__item > a",".linkbar__item",".header__button-group"]},{id:"tldrnewsletter",matches:"actions.tldrnewsletter.com","additionalExcludeSelectors.remove":[".notranslate","[translate=no]"]},{id:"htdp",matches:"htdp.org",excludeTags:["blockquote"],stayOriginalSelectors:[".RktIn"]},{id:"bugzilla",matches:"bugzilla.mozilla.org","excludeTags.remove":["PRE"],isTransformPreTagNewLine:!0},{id:"newsletterss",matches:"newsletterss.com",initialGlobalAttributes:{iframe:{scrolling:"auto"}}},{id:"docusaurus",selectorMatches:["#__docusaurus"],"excludeSelectors.add":["aside",".DocSearch-Modal"]},{id:"mercari",matches:"*.mercari.com","excludeTags.remove":["PRE"]},{id:"qqMail",matches:"mail.qq.com",useIframePostMessage:!1},{id:"nikkei",matches:"www.nikkei.com",globalStyles:{"h3,div,span,p":"max-height:unset;-webkit-line-clamp:unset;height:unset;white-space:unset;"}},{id:"pubs.rsc.org",matches:"pubs.rsc.org",excludeSelectors:[".eqn"]},{id:"indeed",matches:"*.indeed.com",globalStyles:{"span,.css-19rjr9w.e1wnkr790":"max-height:unset;-webkit-line-clamp:unset;height:unset;white-space:unset;"},"excludeTags.remove":["BUTTON"]},{id:"brutalist",matches:"brutalist.report",selectors:["li > a:first-child","aside","nav > a","h1 > a","h3 > a","h2 >a"],"additionalExcludeSelectors.remove":[".notranslate","[translate=no]"]},{id:"maxroll",matches:["maxroll.gg"],extraInlineSelectors:[".d4t-sprite-icon",".d4t-icon"],injectedCss:["font {font-family: sans-serif !important;}"]},{id:"microsoftTeams",matches:["teams.live.com"],"stayOriginalSelectors.add":["span[title][style='min-width: 20px; height: 20px;']"]},{id:"gradioappdocs",matches:"www.gradio.app/docs/*",selectors:["div.obj"],excludeSelectors:["div#examples"]},{id:"arca",matches:"arca.live","excludeTags.remove":["PRE"]},{id:"chatpdf",matches:["www.chatpdf.com"],"additionalExcludeSelectors.remove":[".notranslate"],excludeSelectors:[".chat-message-row.ai *",".pdf-viewer"],aiRule:{streamingSelector:"",messageWrapperSelector:".chat-message-row.ai",streamingChange:!1,streamingDeepChild:!0}},{id:"inciteful",matches:["inciteful.xyz"],"excludeTags.remove":["BUTTON"]},{id:"app.element.io",matches:["app.element.io"],"additionalExcludeSelectors.remove":[".notranslate"],"excludeSelectors.add":[".mx_DisambiguatedProfile",".mx_ReplyChain_wrapper",".mx_ThreadSummary_replies_amount"]},{id:"lwn.net",matches:["lwn.net/Articles/*"],isTransformPreTagNewLine:!0},{id:"fastapi.tiangolo.com",matches:"fastapi.tiangolo.com",selectors:["article"]},{id:"termynal",selectorMatches:["link[href*='termynal.css']"],"stayOriginalSelectors.add":[".termy"]},{id:"cpb-nl",matches:["www.cpb.nl"],"bodyRule.add":{enable:!1}},{id:"hub.logseq",matches:["hub.logseq.com"],globalStyles:{"[class*=':h-[']":"height:unset;"}},{id:"chat.zalo",matches:["chat.zalo.me"],"additionalExcludeSelectors.remove":[".notranslate"],inputExecCommandDeleteEnable:!0},{id:"epam",matches:"*.epam.com",globalStyles:{"[class*='ContentAnchorLinkList']":"word-break:unset;"},"excludeSelectors.add":["#blog-page-sidebar-wrapper"],"excludeTags.remove":["BUTTON"]},{id:"discussions.apple",matches:"discussions.apple.com","excludeSelectors.add":[".page-number"]},{id:"www.sixthtone.com",matches:["www.sixthtone.com"],"excludeSelectors.add":["#footer","[class^=index_time]","[class^=index_anthorList]","[class^=index_node]","[class^=index_popupWrapper]"]},{id:"forum.unity",matches:["forum.unity.com"],"excludeSelectors.add":[".bbCodeCode"]},{id:"wattpad",matches:["www.wattpad.com"],"excludeTags.remove":["PRE"],globalAttributes:{header:{translate:"unset;"}},globalStyles:{".story-info .item-description":"overflow: scroll;"}},{id:"netflix",matches:["www.netflix.com"],"excludeSelectors.add":[".player-timedtext-text-container"],"subtitleRule.add":{type:"netflix",loadingContainerSelector:".watch-video",subtitleUrlRegExp:"^https://.+?.oca.nflxvideo.net/\\?([ovet]=[^=]+){4}$",loadingStyle:"bottom: 15%;"}},{id:"udemy",matches:["www.udemy.com"],"subtitleRule.add":{type:"udemy",subtitleUrlRegExp:"^https://.*\\.udemycdn\\.com/.*\\.vtt",humanTrust:85,loadingContainerSelector:".video-player--video-wrapper--2mFBT",loadingStyle:"bottom: 15%;"}},{id:"boringreport",matches:["www.boringreport.org"],"excludeTags.remove":["BUTTON"]},{id:"khanacademy",matches:["www.khanacademy.org"],"subtitleRule.add":{type:"khanacademy",subtitleUrlRegExp:"GetSubtitles",hookType:"fetch"}},{id:"nebula",matches:["nebula.tv"],"subtitleRule.add":{type:"webvtt",subtitleUrlRegExp:"\\.vtt$",loadingContainerSelector:".video-poster"}},{id:"coursera",matches:["www.coursera.org"],"subtitleRule.add":{type:"text_track",videoPlayerSelector:".vjs-tech",loadingContainerSelector:".rc-VideoControlsContainer"}},{id:"vimeo",matches:["vimeo.com"],"subtitleRule.add":{type:"text_track",videoPlayerSelector:"video",loadingContainerSelector:".player_container"}},{id:"player.vimeo",matches:"https://player.vimeo.com/video/*",extraBlockSelectors:["span.vp-captions-line","span[class^=CaptionsRenderer_]"],"subtitleRule.add":{type:"text_track",videoPlayerSelector:"video",loadingContainerSelector:".vp-telecine"}}]};function ft(e){return Array.isArray(e)?e:e?[e]:[]}function sa(e,t){let n={...e};return ji(n,t),Cl(n,t),n}function Wi(e,t,n){let a={...t};return El(e,a,n),a}function Cl(e,t){if(!t.condition)return;let n=t.condition.enableSubtitle?.true||{},a=t.condition.enableSubtitle?.false||{},i=e.enableSubtitle?n:a;ji(e,i)}function El(e,t,n){try{return Object.keys(t).forEach(a=>{let[i,r]=a.split(".");if(r){let o=t[a];if(Array.isArray(e[i])&&(o=ft(t[a])),r==="add"){t[i]=Kt(e[i],o),delete t[a];return}else if(r=="remove"){t[i]=Qa(e[i],o),delete t[a];return}}}),Object.keys(n).forEach(a=>{let[i,r]=a.split(".");if(!i||n[a]===void 0)return;let o=n[a],s=t[i];if(Array.isArray(e[i])&&(o=ft(n[a]),s=ft(t[i])),r==="add"){t[i]=Kt(s,o);return}else if(r=="remove"){t[i]=Qa(s,o);return}Array.isArray(s)&&i.startsWith("additional")?t[i]=Kt(s,o):t[i]=o}),t}catch{}}function ji(e,t){return Object.keys(t).forEach(n=>{let[a,i]=n.split(".");if(!a||t[n]===void 0)return;let r=t[n];if(Array.isArray(e[a])&&(r=ft(t[n])),i==="add"){e[a]=Kt(e[a],r);return}else if(i=="remove"){e[a]=Qa(e[a],r);return}Array.isArray(e[a])&&a.startsWith("additional")?e[a]=Kt(e[a],r):e[a]=r}),e}function Kt(e,t){let n;if(Array.isArray(e)){let a=ft(t);n=[...e,...a],n=Array.from(new Set(n))}else typeof e=="object"&&typeof t=="object"&&(n={...e,...t});return n}function Qa(e,t){if(Array.isArray(e)){let n=ft(t);return e=e.filter(a=>!n.includes(a)),Array.from(new Set(e))}else typeof e=="object"&&typeof t=="object"&&Object.keys(t).forEach(n=>{delete e[n]});return e}function Dl(){if(X.PROD==="1")return{};let e={};if(X.IMMERSIVE_TRANSLATE_SECRET_TENCENT_SECRET_ID&&X.IMMERSIVE_TRANSLATE_SECRET_TENCENT_SECRET_KEY){let n={secretId:X.IMMERSIVE_TRANSLATE_SECRET_TENCENT_SECRET_ID,secretKey:X.IMMERSIVE_TRANSLATE_SECRET_TENCENT_SECRET_KEY};e.translationServices={},e.translationServices.tencent=n}if(X.IMMERSIVE_TRANSLATE_SECRET_BAIDU_APPID&&X.IMMERSIVE_TRANSLATE_SECRET_BAIDU_KEY){let n={appid:X.IMMERSIVE_TRANSLATE_SECRET_BAIDU_APPID,key:X.IMMERSIVE_TRANSLATE_SECRET_BAIDU_KEY};e.translationServices||(e.translationServices={}),e.translationServices.baidu=n}if(X.IMMERSIVE_TRANSLATE_SECRET_CAIYUN_TOKEN){let n={token:X.IMMERSIVE_TRANSLATE_SECRET_CAIYUN_TOKEN};e.translationServices||(e.translationServices={}),e.translationServices.caiyun=n}if(X.IMMERSIVE_TRANSLATE_SECRET_OPENL_APIKEY){let n={apikey:X.IMMERSIVE_TRANSLATE_SECRET_OPENL_APIKEY};e.translationServices||(e.translationServices={}),e.translationServices.openl=n}if(X.IMMERSIVE_TRANSLATE_SECRET_YOUDAO_APP_ID&&X.IMMERSIVE_TRANSLATE_SECRET_YOUDAO_APP_SECRET){let n={appId:X.IMMERSIVE_TRANSLATE_SECRET_YOUDAO_APP_ID,appSecret:X.IMMERSIVE_TRANSLATE_SECRET_YOUDAO_APP_SECRET};e.translationServices||(e.translationServices={}),e.translationServices.youdao=n}if(X.IMMERSIVE_TRANSLATE_SECRET_VOLC_ACCESS_KEY_ID&&X.IMMERSIVE_TRANSLATE_SECRET_VOLC_SECRET_ACCESS_KEY){let n={accessKeyId:X.IMMERSIVE_TRANSLATE_SECRET_VOLC_ACCESS_KEY_ID,secretAccessKey:X.IMMERSIVE_TRANSLATE_SECRET_VOLC_SECRET_ACCESS_KEY};e.translationServices||(e.translationServices={}),e.translationServices.volc=n}if(X.IMMERSIVE_TRANSLATE_SECRET_DEEPL_AUTH_KEY){let n={authKey:X.IMMERSIVE_TRANSLATE_SECRET_DEEPL_AUTH_KEY};e.translationServices||(e.translationServices={}),e.translationServices.deepl=n}if(X.DEEPL_PROXY_ENDPOINT&&(e.translationServices||(e.translationServices={}),e.translationServices.deepl||(e.translationServices.deepl={}),e.translationServices.deepl.immersiveTranslateApiUrl=X.DEEPL_PROXY_ENDPOINT),X.IMMERSIVE_TRANSLATE_DEEPL_ENDPOINT&&(e.translationServices||(e.translationServices={}),e.translationServices.deepl||(e.translationServices.deepl={}),e.translationServices.deepl.immersiveTranslateDeeplTokenUrl=X.IMMERSIVE_TRANSLATE_DEEPL_ENDPOINT),X.IMMERSIVE_TRANSLATE_SECRET_OPENAI_API_KEY){let n={APIKEY:X.IMMERSIVE_TRANSLATE_SECRET_OPENAI_API_KEY};e.translationServices||(e.translationServices={}),e.translationServices.openai=n}X.IMMERSIVE_TRANSLATE_SERVICE&&(e.translationService=X.IMMERSIVE_TRANSLATE_SERVICE);let t={};return X.DEBUG==="1"&&(t.debug=!0,t.cache=!1),X.MOCK==="1"&&(t.translationService="mock"),t}async function Ya(){let e=await oe.storage.local.get(Nt);if(e[Nt]){let t=e[Nt],n=t.tempTranslationUrlMatches||[],a=n.filter(o=>o.expiredAt>Date.now()),i=!1;a.length!==n.length&&(n=a,i=!0);let r={...t,tempTranslationUrlMatches:[...n]};return i&&await Ll(r),r}else return{}}async function Ll(e){await oe.storage.local.set({[Nt]:e})}async function Hi(){let e=await oe.storage.local.get(mt),n={...Vi(),...oa,buildinConfigUpdatedAt:X.BUILD_TIME};if(e[mt]){let a=e[mt];if(a&&a.buildinConfigUpdatedAt){let i=new Date(a.buildinConfigUpdatedAt),r=new Date(n.buildinConfigUpdatedAt);i>r&&(n=a)}}return n}async function Gi(){let e=await oe.storage.local.get(mt),t={...oa,buildinConfigUpdatedAt:X.BUILD_TIME};if(e[mt]){let ae=e[mt];if(ae&&ae.buildinConfigUpdatedAt){let x=new Date(ae.buildinConfigUpdatedAt),Q=new Date(t.buildinConfigUpdatedAt);x>Q&&(t=ae)}}let n=await na.get(St,null),a={};if(!Ge()&&oe.commands&&oe.commands.getAll){let ae=await oe.commands.getAll();for(let x of ae)x.name&&x.shortcut&&(a[x.name]=x.shortcut)}let i=Vi(),r=Dl(),o=await _l(),s=globalThis.IMMERSIVE_TRANSLATE_CONFIG||{},l=await Ya(),u=new Date;if(l&&l.tempTranslationUrlMatches&&l.tempTranslationUrlMatches.length>0){let ae=l.tempTranslationUrlMatches.filter(x=>new Date(x.expiredAt)>u);if(ae.length>0){let x=o.translationUrlPattern?o.translationUrlPattern?.matches||[]:[],Q=Array.isArray(x)?x:[x],fe=Array.from(new Set(Q.concat(ae.map(ne=>ne.match))));o.translationUrlPattern={...o.translationUrlPattern,matches:fe}}}let d=Object.assign({},s,r,o);if(!d.interfaceLanguage){let ae=await Ml();d.interfaceLanguage=ae}let m=d.interfaceLanguage==="en",f=d.targetLanguage==="en",g=t&&t.translationLanguagePattern&&t.translationLanguagePattern.matches&&t.translationLanguagePattern.matches.length===0,A=["bing","google","transmart","mock"].includes(d.translationService)||!d.translationService;!m&&!f&&!g&&A?t.translationLanguagePattern||(t.translationLanguagePattern={matches:["en"],excludeMatches:[]}):t.translationLanguagePattern={matches:[],excludeMatches:[]};let K=t&&t.enableDefaultAlwaysTranslatedUrls;d.enableDefaultAlwaysTranslatedUrls===!1&&(K=!1);let F=d&&d.isChangedAlwaysTranslatedUrls,p=[];d.translationUrlPattern&&d.translationUrlPattern.matches&&(p=d.translationUrlPattern.matches||[]);let re=!1;F===void 0&&(p.length>0?F=!0:F=!1,d.isChangedAlwaysTranslatedUrls=F,o.isChangedAlwaysTranslatedUrls=F,re=!0);let O=(d?.translationLanguagePattern?.matches?.length||0)>0,Y=await xt("installedAt",""),ce=Number(await Bt("translage_page_daily",0)),P=Number(await xt(Ei,0)),h;P>0&&(Date.now()-P<t.inactiveDays*24*60*60*1e3?h=!0:h=!1);let v;ce>0&&(Date.now()-ce<t.inactiveDays*24*60*60*1e3?v=!0:v=!1);let y;if(Y){let ae=new Date(Y);Date.now()-ae.getTime()<24*60*60*1e3?y=!0:y=!1}let R=d.modifiedBySystem;K&&!F&&!m&&!f&&A&&!O&&(R===!0||y||v===!1||h===!1||v===void 0&&h===void 0)&&zl(p,t.defaultAlwaysTranslatedUrls)&&(d.translationUrlPattern||(d.translationUrlPattern={}),d.translationUrlPattern.matches||(d.translationUrlPattern.matches=[]),d.translationUrlPattern.excludeMatches||(d.translationUrlPattern.excludeMatches=[]),d.translationUrlPattern.matches=[...t.defaultAlwaysTranslatedUrls],o.translationUrlPattern=d.translationUrlPattern,o.modifiedBySystem=!0,re=!0,Ki("modifyAlwaysTranslatedUrls",[{name:"modifyAlwaysTranslatedUrls"}])),re&&(je.debug("isChangedUserConfig",re),await Il(o));let k=Object.assign(i,t),j=aa(n),_={};d.translationServices&&d.translationServices.deepl&&(_=d.translationServices.deepl);let J={};d.translationServices&&d.translationServices.openai&&(J=d.translationServices.openai),!j&&_.authKey&&!_.provider?(k.translationServices.deepl||(k.translationServices.deepl={}),k.translationServices.deepl.provider="custom"):_&&_.provider||(k.translationServices.deepl||(k.translationServices.deepl={}),k.translationServices.deepl.provider="pro"),!j&&J.APIKEY&&!J.provider?(k.translationServices.openai||(k.translationServices.openai={}),k.translationServices.openai.provider="custom"):J&&J.provider||(k.translationServices.openai||(k.translationServices.openai={}),k.translationServices.openai.provider="pro");let H=Object.keys(k),he=["translationUrlPattern","translationLanguagePattern","immediateTranslationPattern","translationBodyAreaPattern","translationParagraphLanguagePattern","translationThemePatterns","translationGeneralConfig","shortcuts","inputTranslationUrlPattern","inputLanguageCodeAlias"];for(let ae of H){let x=ae;if(x==="generalRule")typeof d[x]=="object"&&(k[x]=sa(i[x],d[x]));else if(x==="translationServices"){let Q=d[x]||{},fe=t[x]||{},ne=Object.keys(fe),b=Object.keys(Q),S=[...new Set([...ne,...b])],D={};for(let G of S)D[G]={...fe[G],...Q[G]};k[x]=D}else if(typeof d[x]!="string"&&typeof d[x]!="boolean"&&typeof d[x]!="number"&&he.includes(x))d[x]&&(k[x]=Object.assign(k[x],d[x])),x==="shortcuts"&&(Ge()||fn()?k[x]={...k[x],...a}:k[x]={...a});else if(x==="rules"){if(Array.isArray(d[x])){let Q=k.rules||[],fe={};for(let b of Q)b.id&&(fe[b.id]=b);let ne=d[x].map(b=>b.id&&fe[b.id]?Wi(t.generalRule,fe[b.id],b):b);k[x]=[...ne,...k[x]]}if(X.PROD==="0"&&X.DEV_RULES){let Q=JSON.parse(X.DEV_RULES);k[x]=[...Q,...k[x]]}}else d[x]!==void 0&&(k[x]=d[x])}return k.donateUrl=t.donateUrl,k.minVersion=t.minVersion,k.feedbackUrl=t.feedbackUrl,k.rawUserConfig=o,k}async function _l(){return(await oe.storage.sync.get("userConfig")||{}).userConfig||{}}async function Il(e){await oe.storage.sync.set({userConfig:e})}var Ml=async()=>{let e=["zh-CN"];try{e=await oe.i18n.getAcceptLanguages()}catch(a){je.warn("get browser language error:",a)}let n=e.map(a=>Ii(a)).find(a=>Ka[a]);return n||"en"},Vi=()=>{let e={...oa,buildinConfigUpdatedAt:X.BUILD_TIME};return{...e,targetLanguage:_i,interfaceLanguage:"en",translationMode:"dual",debug:!1,alpha:!1,translationUrlPattern:{matches:[],excludeMatches:[]},translationLanguagePattern:{matches:[],excludeMatches:[]},translationThemePatterns:{},translationParagraphLanguagePattern:{matches:[],excludeMatches:[],selectorMatches:[],excludeSelectorMatches:[]},translationBodyAreaPattern:{matches:[],excludeMatches:[],selectorMatches:[],excludeSelectorMatches:[]},translationTheme:"none",translationService:"bing",inputTranslationService:"inherit",mouseHoverTranslationService:"inherit",subtitleTranslateService:"inherit",translationArea:"main",translationStartMode:"dynamic",translationServices:{},monkeyH5FloatBall:{...e.monkeyH5FloatBall},pcFloatBall:{...e.pcFloatBall},generalRule:{...e.generalRule},translationGeneralConfig:{engine:"bing"},rules:[]}};function zl(e,t){return e=e||[],t=t||[],e.length!==t.length?!0:t.filter(a=>!e.includes(a)).length>0}var jg=Ge();function la(e){return e?typeof e=="string"?document.querySelector(e)!==null:e.some(t=>document.querySelector(t)):!1}function Qi(){if(!globalThis||!globalThis.location)return"https://example.com";if(!ia())return globalThis.location.href;try{let t=globalThis.location.href,n=new URL(t);if(n.protocol==="about:"||n.protocol==="blob:"){if(globalThis.location.ancestorOrigins&&globalThis.location.ancestorOrigins.length>0)return globalThis.location.ancestorOrigins[0];let a="";try{a=globalThis.parent.location.href}catch{}return a||(globalThis.location!=globalThis.parent.location?document.referrer:document.location.href)}else return t}catch{}return globalThis.location.href}var Yi=["*://*/*","*","*://*"],Zi="immersive-translate-wildcard-placeholder.com";function $a(e,t){let n=[];if(!t||(t&&!Array.isArray(t)?n=[t]:n=t,n.length===0))return null;if(n.some(o=>Yi.includes(o)))return e;let a=new URL(e);a.hash="",a.search="";let i=a.href,r=a.hostname;if(n&&n.length>0){let o=n.find(s=>{let l=s;if(s===r)return!0;if(Yi.includes(s))return!0;if(!s.includes("*")&&s.includes("://")){try{let u=new URL(s);return u.pathname==="/"&&!s.endsWith("/")?u.hostname===r:Rl(i,s)}catch{}return!1}else{let u,d=s;if(s.includes("://")){let F=s.split("://");u=F[0],u==="*"&&F.length>1&&(u="*",s="https://"+F[1])}else u="*",s="https://"+s;let m=s.replace(/\*/g,Zi),f;try{f=new URL(m)}catch{return je.debug("invalid match pattern",m,"raw match value:",d),!1}let g=f.hostname,A=f.pathname;A==="/"&&(d.replace("://","").includes("/")||(A="/*"));let K=Ol(u+":",$i(g),$i(A));if(K){let F=new URL(i);return F.port="",K.test(F.href)}else return!1}});if(o)return o}return null}function $i(e){return e.replaceAll(Zi,"*")}function Ol(e,t,n){let a="^";return e==="*:"?a+="(http:|https:|file:)":a+=e,a+="//",t&&(e==="file:"||(t==="*"?a+="[^/]+?":(t.match(/^\*\./)&&(a+="[^/]*?",t=t.substring(2)),a+=t.replace(/\./g,"\\.").replace(/\*/g,"[^/]*")))),n?n==="*"||n==="/*"?a+="(/.*)?":n.includes("*")?(a+=n.replace(/\*/g,".*?"),a+="/?"):a+=n.replace(/[-[\]{}()*+?.,\\^$|#\s]/g,"\\$&"):a+="/?",a+="$",new RegExp(a)}function st(e,t){return $a(e,t)!==null}function Rl(e,t){let n=new URL(e),a=new URL(t);return n.hostname===a.hostname&&n.pathname===a.pathname&&n.protocol===a.protocol&&n.port===a.port}var kt="input is invalid type",Za=typeof window=="object",lt=Za?window:{};lt.JS_SHA256_NO_WINDOW&&(Za=!1);var Nl=!Za&&typeof self=="object",Fl=!lt.JS_SHA256_NO_NODE_JS&&typeof process=="object"&&process.versions&&process.versions.node;Fl?lt=global:Nl&&(lt=self);var Jg=!lt.JS_SHA256_NO_COMMON_JS&&typeof module=="object"&&module.exports,Xg=typeof define=="function"&&define.amd,Wt=!lt.JS_SHA256_NO_ARRAY_BUFFER&&typeof ArrayBuffer<"u",I="0123456789abcdef".split(""),Bl=[-2147483648,8388608,32768,128],Ye=[24,16,8,0],ca=[1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298],ua=["hex","array","digest","arrayBuffer"],Pe=[];(lt.JS_SHA256_NO_NODE_JS||!Array.isArray)&&(Array.isArray=function(e){return Object.prototype.toString.call(e)==="[object Array]"});Wt&&(lt.JS_SHA256_NO_ARRAY_BUFFER_IS_VIEW||!ArrayBuffer.isView)&&(ArrayBuffer.isView=function(e){return typeof e=="object"&&e.buffer&&e.buffer.constructor===ArrayBuffer});var Ji=function(e,t){return function(n){return new Ce(t,!0).update(n)[e]()}},er=function(e){var t=Ji("hex",e);t.create=function(){return new Ce(e)},t.update=function(i){return t.create().update(i)};for(var n=0;n<ua.length;++n){var a=ua[n];t[a]=Ji(a,e)}return t},Xi=function(e,t){return function(n,a){return new da(n,t,!0).update(a)[e]()}},tr=function(e){var t=Xi("hex",e);t.create=function(i){return new da(i,e)},t.update=function(i,r){return t.create(i).update(r)};for(var n=0;n<ua.length;++n){var a=ua[n];t[a]=Xi(a,e)}return t};function Ce(e,t){t?(Pe[0]=Pe[16]=Pe[1]=Pe[2]=Pe[3]=Pe[4]=Pe[5]=Pe[6]=Pe[7]=Pe[8]=Pe[9]=Pe[10]=Pe[11]=Pe[12]=Pe[13]=Pe[14]=Pe[15]=0,this.blocks=Pe):this.blocks=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],e?(this.h0=3238371032,this.h1=914150663,this.h2=812702999,this.h3=4144912697,this.h4=4290775857,this.h5=1750603025,this.h6=1694076839,this.h7=3204075428):(this.h0=1779033703,this.h1=3144134277,this.h2=1013904242,this.h3=2773480762,this.h4=1359893119,this.h5=2600822924,this.h6=528734635,this.h7=1541459225),this.block=this.start=this.bytes=this.hBytes=0,this.finalized=this.hashed=!1,this.first=!0,this.is224=e}Ce.prototype.update=function(e){if(!this.finalized){var t,n=typeof e;if(n!=="string"){if(n==="object"){if(e===null)throw new Error(kt);if(Wt&&e.constructor===ArrayBuffer)e=new Uint8Array(e);else if(!Array.isArray(e)&&(!Wt||!ArrayBuffer.isView(e)))throw new Error(kt)}else throw new Error(kt);t=!0}for(var a,i=0,r,o=e.length,s=this.blocks;i<o;){if(this.hashed&&(this.hashed=!1,s[0]=this.block,s[16]=s[1]=s[2]=s[3]=s[4]=s[5]=s[6]=s[7]=s[8]=s[9]=s[10]=s[11]=s[12]=s[13]=s[14]=s[15]=0),t)for(r=this.start;i<o&&r<64;++i)s[r>>2]|=e[i]<<Ye[r++&3];else for(r=this.start;i<o&&r<64;++i)a=e.charCodeAt(i),a<128?s[r>>2]|=a<<Ye[r++&3]:a<2048?(s[r>>2]|=(192|a>>6)<<Ye[r++&3],s[r>>2]|=(128|a&63)<<Ye[r++&3]):a<55296||a>=57344?(s[r>>2]|=(224|a>>12)<<Ye[r++&3],s[r>>2]|=(128|a>>6&63)<<Ye[r++&3],s[r>>2]|=(128|a&63)<<Ye[r++&3]):(a=65536+((a&1023)<<10|e.charCodeAt(++i)&1023),s[r>>2]|=(240|a>>18)<<Ye[r++&3],s[r>>2]|=(128|a>>12&63)<<Ye[r++&3],s[r>>2]|=(128|a>>6&63)<<Ye[r++&3],s[r>>2]|=(128|a&63)<<Ye[r++&3]);this.lastByteIndex=r,this.bytes+=r-this.start,r>=64?(this.block=s[16],this.start=r-64,this.hash(),this.hashed=!0):this.start=r}return this.bytes>4294967295&&(this.hBytes+=this.bytes/4294967296<<0,this.bytes=this.bytes%4294967296),this}};Ce.prototype.finalize=function(){if(!this.finalized){this.finalized=!0;var e=this.blocks,t=this.lastByteIndex;e[16]=this.block,e[t>>2]|=Bl[t&3],this.block=e[16],t>=56&&(this.hashed||this.hash(),e[0]=this.block,e[16]=e[1]=e[2]=e[3]=e[4]=e[5]=e[6]=e[7]=e[8]=e[9]=e[10]=e[11]=e[12]=e[13]=e[14]=e[15]=0),e[14]=this.hBytes<<3|this.bytes>>>29,e[15]=this.bytes<<3,this.hash()}};Ce.prototype.hash=function(){var e=this.h0,t=this.h1,n=this.h2,a=this.h3,i=this.h4,r=this.h5,o=this.h6,s=this.h7,l=this.blocks,u,d,m,f,g,A,K,F,p,re,O;for(u=16;u<64;++u)g=l[u-15],d=(g>>>7|g<<25)^(g>>>18|g<<14)^g>>>3,g=l[u-2],m=(g>>>17|g<<15)^(g>>>19|g<<13)^g>>>10,l[u]=l[u-16]+d+l[u-7]+m<<0;for(O=t&n,u=0;u<64;u+=4)this.first?(this.is224?(F=300032,g=l[0]-1413257819,s=g-150054599<<0,a=g+24177077<<0):(F=704751109,g=l[0]-210244248,s=g-1521486534<<0,a=g+143694565<<0),this.first=!1):(d=(e>>>2|e<<30)^(e>>>13|e<<19)^(e>>>22|e<<10),m=(i>>>6|i<<26)^(i>>>11|i<<21)^(i>>>25|i<<7),F=e&t,f=F^e&n^O,K=i&r^~i&o,g=s+m+K+ca[u]+l[u],A=d+f,s=a+g<<0,a=g+A<<0),d=(a>>>2|a<<30)^(a>>>13|a<<19)^(a>>>22|a<<10),m=(s>>>6|s<<26)^(s>>>11|s<<21)^(s>>>25|s<<7),p=a&e,f=p^a&t^F,K=s&i^~s&r,g=o+m+K+ca[u+1]+l[u+1],A=d+f,o=n+g<<0,n=g+A<<0,d=(n>>>2|n<<30)^(n>>>13|n<<19)^(n>>>22|n<<10),m=(o>>>6|o<<26)^(o>>>11|o<<21)^(o>>>25|o<<7),re=n&a,f=re^n&e^p,K=o&s^~o&i,g=r+m+K+ca[u+2]+l[u+2],A=d+f,r=t+g<<0,t=g+A<<0,d=(t>>>2|t<<30)^(t>>>13|t<<19)^(t>>>22|t<<10),m=(r>>>6|r<<26)^(r>>>11|r<<21)^(r>>>25|r<<7),O=t&n,f=O^t&a^re,K=r&o^~r&s,g=i+m+K+ca[u+3]+l[u+3],A=d+f,i=e+g<<0,e=g+A<<0;this.h0=this.h0+e<<0,this.h1=this.h1+t<<0,this.h2=this.h2+n<<0,this.h3=this.h3+a<<0,this.h4=this.h4+i<<0,this.h5=this.h5+r<<0,this.h6=this.h6+o<<0,this.h7=this.h7+s<<0};Ce.prototype.hex=function(){this.finalize();var e=this.h0,t=this.h1,n=this.h2,a=this.h3,i=this.h4,r=this.h5,o=this.h6,s=this.h7,l=I[e>>28&15]+I[e>>24&15]+I[e>>20&15]+I[e>>16&15]+I[e>>12&15]+I[e>>8&15]+I[e>>4&15]+I[e&15]+I[t>>28&15]+I[t>>24&15]+I[t>>20&15]+I[t>>16&15]+I[t>>12&15]+I[t>>8&15]+I[t>>4&15]+I[t&15]+I[n>>28&15]+I[n>>24&15]+I[n>>20&15]+I[n>>16&15]+I[n>>12&15]+I[n>>8&15]+I[n>>4&15]+I[n&15]+I[a>>28&15]+I[a>>24&15]+I[a>>20&15]+I[a>>16&15]+I[a>>12&15]+I[a>>8&15]+I[a>>4&15]+I[a&15]+I[i>>28&15]+I[i>>24&15]+I[i>>20&15]+I[i>>16&15]+I[i>>12&15]+I[i>>8&15]+I[i>>4&15]+I[i&15]+I[r>>28&15]+I[r>>24&15]+I[r>>20&15]+I[r>>16&15]+I[r>>12&15]+I[r>>8&15]+I[r>>4&15]+I[r&15]+I[o>>28&15]+I[o>>24&15]+I[o>>20&15]+I[o>>16&15]+I[o>>12&15]+I[o>>8&15]+I[o>>4&15]+I[o&15];return this.is224||(l+=I[s>>28&15]+I[s>>24&15]+I[s>>20&15]+I[s>>16&15]+I[s>>12&15]+I[s>>8&15]+I[s>>4&15]+I[s&15]),l};Ce.prototype.toString=Ce.prototype.hex;Ce.prototype.digest=function(){this.finalize();var e=this.h0,t=this.h1,n=this.h2,a=this.h3,i=this.h4,r=this.h5,o=this.h6,s=this.h7,l=[e>>24&255,e>>16&255,e>>8&255,e&255,t>>24&255,t>>16&255,t>>8&255,t&255,n>>24&255,n>>16&255,n>>8&255,n&255,a>>24&255,a>>16&255,a>>8&255,a&255,i>>24&255,i>>16&255,i>>8&255,i&255,r>>24&255,r>>16&255,r>>8&255,r&255,o>>24&255,o>>16&255,o>>8&255,o&255];return this.is224||l.push(s>>24&255,s>>16&255,s>>8&255,s&255),l};Ce.prototype.array=Ce.prototype.digest;Ce.prototype.arrayBuffer=function(){this.finalize();var e=new ArrayBuffer(this.is224?28:32),t=new DataView(e);return t.setUint32(0,this.h0),t.setUint32(4,this.h1),t.setUint32(8,this.h2),t.setUint32(12,this.h3),t.setUint32(16,this.h4),t.setUint32(20,this.h5),t.setUint32(24,this.h6),this.is224||t.setUint32(28,this.h7),e};function da(e,t,n){var a,i=typeof e;if(i==="string"){var r=[],o=e.length,s=0,l;for(a=0;a<o;++a)l=e.charCodeAt(a),l<128?r[s++]=l:l<2048?(r[s++]=192|l>>6,r[s++]=128|l&63):l<55296||l>=57344?(r[s++]=224|l>>12,r[s++]=128|l>>6&63,r[s++]=128|l&63):(l=65536+((l&1023)<<10|e.charCodeAt(++a)&1023),r[s++]=240|l>>18,r[s++]=128|l>>12&63,r[s++]=128|l>>6&63,r[s++]=128|l&63);e=r}else if(i==="object"){if(e===null)throw new Error(kt);if(Wt&&e.constructor===ArrayBuffer)e=new Uint8Array(e);else if(!Array.isArray(e)&&(!Wt||!ArrayBuffer.isView(e)))throw new Error(kt)}else throw new Error(kt);e.length>64&&(e=new Ce(t,!0).update(e).array());var u=[],d=[];for(a=0;a<64;++a){var m=e[a]||0;u[a]=92^m,d[a]=54^m}Ce.call(this,t,n),this.update(d),this.oKeyPad=u,this.inner=!0,this.sharedMemory=n}da.prototype=new Ce;da.prototype.finalize=function(){if(Ce.prototype.finalize.call(this),this.inner){this.inner=!1;var e=this.array();Ce.call(this,this.is224,this.sharedMemory),this.update(this.oKeyPad),this.update(e),Ce.prototype.finalize.call(this)}};var Pt=er();Pt.sha256=Pt;Pt.sha224=er(!0);Pt.sha256.hmac=tr();Pt.sha224.hmac=tr(!0);var ar=Pt;var Ul=ar.sha256;function Ja(e){return Promise.resolve(Ul(e))}var ql="auto";function nr(e){ql=e}async function Xa(e){let{url:t,config:n,state:a}=e,i=new URL(t),r="auto",{translationParagraphLanguagePattern:o,translationService:s,translationServices:l,translationTheme:u,translationThemePatterns:d,translationUrlPattern:m,targetLanguage:f,sourceLanguageUrlPattern:g,immediateTranslationPattern:A}=n,K=f||"zh-CN",F=Ct(t,o),p=Ct(t,A),re=s,O=Object.keys(l);for(let M of O){let C=l[M];if(Ct(t,C)){re=M;break}}let Y=u,ce=Object.keys(d);for(let M of ce){let C=d[M];if(C&&Ct(t,C)){Y=M;break}}let P=Ct(t,m),h=ir(t,m);h||(h=st(t,Li)),h||(h=st(t,n.blockUrls));let v=ir(t,n.inputTranslationUrlPattern);v||(v=st(t,n.inputTranslationBlockUrls));let y=st(t,n.mutationBlockUrls),R=Object.keys(g),k={};for(let M of R){let C=g[M];if(C&&C.matches)for(let V of C.matches)k[V]=M}let j=Object.keys(k),_=$a(t,j);_&&(r=k[_]??"auto",k[_]&&k[_]!=="auto"&&nr(k[_]));let J=i.hostname,H=await Ja(J),he=i.pathname+i.search+i.hash,ae=await Ja(he),x=`https://${H}.com/${ae}`,Q=await Ya(),fe=await Hi(),ne=n.translationStartMode;ne==="dynamic"&&p&&(ne="immediate");let b=re;n.inputTranslationService&&n.inputTranslationService!=="inherit"&&(b=n.inputTranslationService);let S=re;n.mouseHoverTranslationService&&n.mouseHoverTranslationService!=="inherit"&&(S=n.mouseHoverTranslationService);let D=re;n.subtitleTranslateService&&n.subtitleTranslateService!=="inherit"&&(D=n.subtitleTranslateService);let G=await na.get(St,null),q=!1;G&&(q=aa(G));let z={targetLanguage:K,config:n,translationService:re,inputTranslationService:b,mouseHoverTranslationService:S,subtitleTranslateService:D,isTranslateUrl:P,sourceLanguage:r,mainFrame:document.body,isTranslateExcludeUrl:h,isMutationTranslationExcludeUrl:y,isInputTranslationExcludeUrl:v,rule:n.generalRule,url:t,encryptedUrl:x,state:a?Object.assign({translationMode:n.translationMode,translationArea:n.translationArea,translationStartMode:ne,immediateTranslationTextCount:n.immediateTranslationTextCount,isAutoTranslate:!1,translationDebounce:300,isNeedClean:!1,isDetectParagraphLanguage:F,cache:n.cache,translationTheme:Y},a):{translationMode:n.translationMode,translationArea:n.translationArea,translationStartMode:ne,immediateTranslationTextCount:n.immediateTranslationTextCount,isAutoTranslate:!1,translationDebounce:300,isNeedClean:!1,isDetectParagraphLanguage:F,cache:n.cache,translationTheme:Y},localConfig:Q};G&&(z.user=G,q?z.isPro=!0:z.isPro=!1),z.state.translationArea==="body"&&(z.config.generalRule.excludeTags=z.config.generalRule.excludeTags.filter(M=>!z.config.generalRule.bodyTranslateTags.includes(M)),z.config.generalRule.additionalExcludeSelectors=z.config.generalRule.additionalExcludeSelectors.filter(M=>M!==".btn"));let te=n.translationServices[z.translationService]||{};te.immediateTranslationTextCount!==void 0&&Kl(te.immediateTranslationTextCount)&&te.immediateTranslationTextCount>=0&&(z.state.immediateTranslationTextCount=te.immediateTranslationTextCount),z.translationService==="deepl"&&(te&&te.authKey&&te.authKey.startsWith("immersive_")||te&&te.provider==="pro"&&z.user?.token)&&te.immediateTranslationTextCountForImmersiveDeepl!==void 0&&te.immediateTranslationTextCountForImmersiveDeepl>=0&&(z.state.immediateTranslationTextCount=te.immediateTranslationTextCountForImmersiveDeepl),te&&te.translationDebounce&&typeof te.translationDebounce=="number"&&(z.state.translationDebounce=te.translationDebounce);let de=fe.immediateTranslationTextCount;n.immediateTranslationTextCount!==de&&(z.state.immediateTranslationTextCount=n.immediateTranslationTextCount);let B=n.rules,N;globalThis.PDFViewerApplication?N=B.find(M=>M.isPdf):globalThis.immersiveTranslateEbookViewer?N=B.find(M=>M.isEbook):globalThis.immersiveTranslateEbookBuilder?N=B.find(M=>M.isEbookBuilder):N=B.find(M=>Ct(t,M)),z.state.translationArea==="body"&&(z.rule.paragraphMinTextCount=1,z.rule.paragraphMinWordCount=1),N&&N.isEbookBuilder&&(z.state.translationStartMode="immediate");let ee=n.generalRule;if(N&&(z.rule=sa(ee,N)),z.rule.selectors.length>0&&(z.rule.paragraphMinTextCount=2,z.rule.paragraphMinWordCount=1),z.state.translationArea==="body"&&z.rule.excludeTags&&(z.rule.excludeTags=z.rule.excludeTags.filter(M=>!z.rule.bodyTranslateTags.includes(M)&&!z.rule.forceTranslateTags.includes(M))),z.rule.mainFrameSelector){let M=document.querySelector(z.rule.mainFrameSelector);M&&(z.mainFrame=M)}return z}function Ct(e,t){if(!t)return!1;let{matches:n,excludeMatches:a,selectorMatches:i,excludeSelectorMatches:r}=t;return a&&a.length>0&&st(e,a)?!1:n&&n.length>0&&st(e,n)?!0:r&&r.length>0&&la(r)?!1:!!(i&&i.length>0&&la(i))}function ir(e,t){if(!t)return!1;let{excludeMatches:n,excludeSelectorMatches:a}=t;return!!(n&&n.length>0&&st(e,n)||a&&a.length>0&&la(a))}function Kl(e){return typeof e=="number"}var Et="imt-subtitle-inject",pa=class{from;to;constructor(t,n){this.from=t,this.to=n}sendMessages(t){globalThis.postMessage({type:Et,to:this.to,from:this.from,action:t.action,data:t.data,id:t.id||new Date().getTime(),isAsync:!1})}sendAsyncMessages({action:t,data:n}){return new Promise(a=>{let i=new Date().getTime();globalThis.postMessage({type:Et,to:this.to,from:this.from,action:t,data:n,id:i,isAsync:!0});let r=({data:o})=>{Et===o.type&&o.id===i&&o.to===this.from&&(a(o.data),globalThis.removeEventListener("message",r))};globalThis.addEventListener("message",r)})}handleMessageOnce(t){return new Promise(n=>{let a=({data:i})=>{Et===i.type&&i.action===t&&i.to===this.from&&(n(i.data),globalThis.removeEventListener("message",a))};globalThis.addEventListener("message",a)})}handleMessage(t,n){let a=({data:i})=>{Et===i.type&&i.action===t&&i.to===this.from&&n(i)};return globalThis.addEventListener("message",a),()=>{globalThis.removeEventListener("message",a)}}handleMessages(t){let n=({data:a})=>{Et===a.type&&a.to===this.from&&t(a)};return globalThis.addEventListener("message",n),()=>{globalThis.removeEventListener("message",n)}}},ma=new pa("content-script","inject"),Wl=new pa("inject","content-script"),rr={get(e,t,n){return t in e?(...a)=>{let i=e[t];return typeof i=="function"?i.apply(e,a):Reflect.get(e,t,n)}:a=>e.sendAsyncMessages({action:t,data:a})}},Sh=new Proxy(Wl,rr),wh=new Proxy(ma,rr);async function jl(){try{let e=await Vl(Qi(),{});if(!e.rule.subtitleRule.type||e.rule.subtitleRule.disabled)return;Gl(e),Hl(e)}catch{}}function Hl(e){if(Ge()){let n=nt().IMMERSIVE_TRANSLATE_VIDEO_SUBTITLE_INJECT,a=document.createElement("script");a.id="imt-subtitles-inject",a.textContent=n,document.head.appendChild(a)}else oe.storage.sync.get("open").then(()=>{let t=oe.runtime.getURL("video-subtitle/inject.js");if(document.querySelector(`script[src='${t}']`))return;let a=document.createElement("script");a.src=t,a.id="imt-subtitles-inject",document.head.appendChild(a)})}function Gl(e){ma.handleMessages(({id:t,action:n})=>{if(n==="getConfig"){let a=e.rule.subtitleRule;ma.sendMessages({id:t,data:a})}})}jl();var Dt=null;async function Vl(e,t){let n=Object.keys(t);if(Dt){let a={url:e,config:Dt.config,state:{...Dt.state,...t}};Dt=await Xa(a)}else{let a=await Ql(),i=t;n.length===0&&(i=void 0),Dt=await Xa({url:e,config:a,state:i})}return Dt}function Ql(){return Ge()?Gi():Yl({method:"getConfig"})}async function Yl(e){return await Va().sendMessage("background:main",e)}})();
/*! Bundled license information:

bowser/src/bowser.js:
  (*!
   * Bowser - a browser detector
   * https://github.com/lancedikson/bowser
   * MIT License | (c) Dustin Diaz 2012-2015
   * MIT License | (c) Denis Demchenko 2015-2019
   *)
*/
/*! Bundled license information:

dompurify/dist/purify.es.js:
  (*! @license DOMPurify 3.0.3 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/3.0.3/LICENSE *)
*/