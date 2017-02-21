import {Injectable, ViewContainerRef} from '@angular/core';

import { ModalDialogService, ModalDialogOptions } from 'nativescript-angular/directives/dialogs';

import { SelectModalComponent } from './select-modal/select-modal.component';

@Injectable()
export class SelectModalService {

  // private open: boolean = false;

  constructor(private modalService: ModalDialogService) {}

  public showModal(vcRef: ViewContainerRef, options: Array<string>): Promise<string> {
    // if (this.open)
    //   return;

    let modalOptions: ModalDialogOptions = {
      context: { options: options },
      fullscreen: true,
      viewContainerRef: vcRef
    };

    // this.open = true;
    
    return this.modalService.showModal(SelectModalComponent, modalOptions)
    .then(res => {
      // this.open = false;

      return (res !== undefined) ? res : '';
    });
  }
}
