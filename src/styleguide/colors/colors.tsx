import { Component, h } from "@stencil/core";

@Component({
  tag: 'frp-colors',
  styleUrl: './colors.scss',
  shadow: true
})

export class Colors{
  render(){
    return [
      <div class="container max-width-md padding-y-md">
        <div class="theme" data-theme='beko'>
            <h5 class="padding-sm">Beko</h5>
            <div class="grid margin-top">
            <div class="col square bg-primary-lighter"></div>
            <div class="col square bg-primary-light"></div>
            <div class="col square bg-primary"></div>
            <div class="col square bg-primary-dark"></div>
            <div class="col square bg-primary-darker"></div>
            </div>
            <div class="grid">
            <div class="col text-xs text-center padding-top-sm">--color-primary-lighter</div>
            <div class="col text-xs text-center padding-top-sm">--color-primary-light</div>
            <div class="col text-xs text-center padding-top-sm">--color-primary: #0083BE</div>
            <div class="col text-xs text-center padding-top-sm">--color-primary-dark</div>
            <div class="col text-xs text-center padding-top-sm">--color-primary-darker</div>
            </div>
        </div>
        <div class="theme" data-theme='hoover'>
            <h5 class="padding-sm">Hoover</h5>
            <div class="grid margin-top">
            <div class="col square bg-primary-lighter"></div>
            <div class="col square bg-primary-light"></div>
            <div class="col square bg-primary"></div>
            <div class="col square bg-primary-dark"></div>
            <div class="col square bg-primary-darker"></div>
            </div>
            <div class="grid">
            <div class="col text-xs text-center padding-top-sm">--color-primary-lighter</div>
            <div class="col text-xs text-center padding-top-sm">--color-primary-light</div>
            <div class="col text-xs text-center padding-top-sm">--color-primary: #DD052b</div>
            <div class="col text-xs text-center padding-top-sm">--color-primary-dark</div>
            <div class="col text-xs text-center padding-top-sm">--color-primary-darker</div>
            </div>
        </div>
        <div class="theme" data-theme='candy'>
            <h5 class="padding-sm">Candy</h5>
            <div class="grid margin-top">
            <div class="col square bg-primary-lighter"></div>
            <div class="col square bg-primary-light"></div>
            <div class="col square bg-primary"></div>
            <div class="col square bg-primary-dark"></div>
            <div class="col square bg-primary-darker"></div>
            </div>
            <div class="grid">
            <div class="col text-xs text-center padding-top-sm">--color-primary-lighter</div>
            <div class="col text-xs text-center padding-top-sm">--color-primary-light</div>
            <div class="col text-xs text-center padding-top-sm">--color-primary: #00AEE6</div>
            <div class="col text-xs text-center padding-top-sm">--color-primary-dark</div>
            <div class="col text-xs text-center padding-top-sm">--color-primary-darker</div>
            </div>
        </div>
        <div class="theme" data-theme='hotpoint'>
            <h5 class="padding-sm">Hotpoint</h5>
            <div class="grid margin-top">
            <div class="col square bg-primary-lighter"></div>
            <div class="col square bg-primary-light"></div>
            <div class="col square bg-primary"></div>
            <div class="col square bg-primary-dark"></div>
            <div class="col square bg-primary-darker"></div>
            </div>
            <div class="grid">
            <div class="col text-xs text-center padding-top-sm">--color-primary-lighter</div>
            <div class="col text-xs text-center padding-top-sm">--color-primary-light</div>
            <div class="col text-xs text-center padding-top-sm">--color-primary: #1FB5BE</div>
            <div class="col text-xs text-center padding-top-sm">--color-primary-dark</div>
            <div class="col text-xs text-center padding-top-sm">--color-primary-darker</div>
            </div>
        </div>
        <div class="theme">
          <h5 class="padding-sm">Color Success</h5>
          <div class="grid margin-top">
          <div class="col square bg-success-lighter"></div>
          <div class="col square bg-success-light"></div>
          <div class="col square bg-success"></div>
          <div class="col square bg-success-dark"></div>
          <div class="col square bg-success-darker"></div>
          </div>
          <div class="grid">
          <div class="col text-xs text-center padding-top-sm">--color-success-lower</div>
          <div class="col text-xs text-center padding-top-sm">--color-success-low</div>
          <div class="col text-xs text-center padding-top-sm">--color-success-medium</div>
          <div class="col text-xs text-center padding-top-sm">--color-success-high</div>
          <div class="col text-xs text-center padding-top-sm">--color-success-higher</div>
          </div>
        </div>
        <div class="theme">
            <h5 class="padding-sm">Color Error</h5>
            <div class="grid margin-top">
            <div class="col square bg-error-lighter"></div>
            <div class="col square bg-error-light"></div>
            <div class="col square bg-error"></div>
            <div class="col square bg-error-dark"></div>
            <div class="col square bg-error-darker"></div>
            </div>
            <div class="grid">
            <div class="col text-xs text-center padding-top-sm">--color-error-lower</div>
            <div class="col text-xs text-center padding-top-sm">--color-error-low</div>
            <div class="col text-xs text-center padding-top-sm">--color-error-medium</div>
            <div class="col text-xs text-center padding-top-sm">--color-error-high</div>
            <div class="col text-xs text-center padding-top-sm">--color-error-higher</div>
            </div>
        </div>
        <div class="theme">
            <h5 class="padding-sm">Color Warning</h5>
            <div class="grid margin-top">
            <div class="col square bg-warning-lighter"></div>
            <div class="col square bg-warning-light"></div>
            <div class="col square bg-warning"></div>
            <div class="col square bg-warning-dark"></div>
            <div class="col square bg-warning-darker"></div>
            </div>
            <div class="grid">
            <div class="col text-xs text-center padding-top-sm">--color-warning-lower</div>
            <div class="col text-xs text-center padding-top-sm">--color-warning-low</div>
            <div class="col text-xs text-center padding-top-sm">--color-warning-medium</div>
            <div class="col text-xs text-center padding-top-sm">--color-warning-high</div>
            <div class="col text-xs text-center padding-top-sm">--color-warning-higher</div>
            </div>
        </div>
        <div class="theme">
            <h5 class="padding-sm">Contrast Scale</h5>
            <div class="grid margin-top">
            <div class="col square bg"></div>
            <div class="col square bg-contrast-lower"></div>
            <div class="col square bg-contrast-low"></div>
            <div class="col square bg-contrast-medium"></div>
            <div class="col square bg-contrast-high"></div>
            <div class="col square bg-contrast-higher"></div>
            </div>
            <div class="grid">
            <div class="col text-xs text-center padding-top-sm">--color-bg</div>
            <div class="col text-xs text-center padding-top-sm">--color-contrast-lower</div>
            <div class="col text-xs text-center padding-top-sm">--color-contrast-low</div>
            <div class="col text-xs text-center padding-top-sm">--color-contrast-medium</div>
            <div class="col text-xs text-center padding-top-sm">--color-contrast-high</div>
            <div class="col text-xs text-center padding-top-sm">--color-contrast-higher</div>
            </div>
        </div>
        <div class="theme">
            <h5 class="padding-sm">Color Black</h5>
            <div class="grid margin-top">
            <div class="col square bg-black"></div>
            </div>
            <div class="grid">
            <div class="col text-xs text-center padding-top-sm">--bg-black</div>
            </div>
        </div>
        <div class="theme">
          <h5 class="padding-sm">Color White</h5>
          <div class="grid margin-top">
          <div class="col square bg-white border border-contrast-low border-2"></div>
          </div>
          <div class="grid">
          <div class="col text-xs text-center padding-top-sm">--bg-white</div>
          </div>
        </div>
      </div>
    ];
  }
}