// import { Component, OnDestroy } from '@angular/core';
// import { MatDialogRef } from '@angular/material/dialog';

// @Component({
//     selector: 'dialog-animations-example-dialog',
//     template: `<h2 mat-dialog-title style="margin-top: 0px;">Session Timeout</h2>
//   <div mat-dialog-content>
//     Your session will be logged out in {{timeout}} sec, Please continue to refresh token.     
//   </div>
//   <div mat-dialog-actions align="end">
//     <button mat-button mat-dialog-close="true">Continue</button>
//   </div>`,
// })
// export class DialogAnimationsExampleDialog implements OnDestroy{
//     timeout: number;
//     timerCbk: ReturnType<typeof setTimeout> | null;
//     constructor(public dialogRef: MatDialogRef<DialogAnimationsExampleDialog>) {
//         this.timeoutCall()
//     }
//     timeoutCall() {
//         this.timeout = 60;
//         const callbk = () => {
//             this.timeout = this.timeout - 1;
//             this.clearTimerCbk();
//             if (this.timeout > 0) {
//                 this.timerCbk = setTimeout(callbk, 1000);
//             }else{
//                 this.dialogRef.close(false);
//             }
//         }
//         this.timerCbk = setTimeout(callbk, 1000);
//     }
//     clearTimerCbk(){
//         if(this.timerCbk){
//             clearTimeout(this.timerCbk)
//         }
//     }
//     ngOnDestroy(){
//         this.clearTimerCbk();
//     }
// }
