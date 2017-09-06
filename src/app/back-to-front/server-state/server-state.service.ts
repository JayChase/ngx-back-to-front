import { Injectable, RendererFactory2, ViewEncapsulation } from '@angular/core';
import { PlatformState } from '@angular/platform-server';
import { StateService } from '../state.service';
import * as serialize from 'serialize-javascript';

@Injectable()
export class ServerStateService extends StateService {

  constructor(
    private rendererFactory: RendererFactory2,
    private platformState: PlatformState
  ) {
    super();

  }

  get(key: string, persist?: boolean): string | undefined {
    return undefined;
  }

  set(key: string, value: any) {
    const document: Document = this.platformState.getDocument();
    const transferStateString = serialize(value);
    const renderer = this.rendererFactory.createRenderer(document, {
      id: '-1',
      encapsulation: ViewEncapsulation.None,
      styles: [],
      data: {}
    });

    if (!document.head) {
      throw new Error('Please have <head> as the first element in your document');
    }

    const script = renderer.createElement('script');
    renderer.setValue(script, `if(!window.state){ window.state = {}}; window.state['${key}'] = ${transferStateString}`);
    renderer.appendChild(document.head, script);

  }
}
