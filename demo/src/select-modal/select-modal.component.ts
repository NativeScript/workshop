import { Component, OnInit } from '@angular/core';

import { ModalDialogParams } from "nativescript-angular/directives/dialogs";

@Component({
  selector: 'my-select-modal',
  templateUrl: './select-modal.component.html',
  styleUrls: ['./select-modal.component.css']
})
export class SelectModalComponent implements OnInit{
  public options: Array<string> = [];

  constructor(private modal: ModalDialogParams) {
  }

  ngOnInit() {
    this.options = this.modal.context.options;
  }

  public close(value: string) {
    this.modal.closeCallback(value);
  }
}
