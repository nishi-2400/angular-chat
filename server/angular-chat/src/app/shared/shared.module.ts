import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommentDatePipe } from '../pipes/comment-date.pipe';
import { FormsModule } from '@angular/forms';

// 共通モジュール ＊全てのモジュールで使う他モジュール、パイプ、カスタムディレクティブなど
@NgModule({
  declarations: [CommentDatePipe],
  imports: [CommonModule, FormsModule],
  exports: [FormsModule, CommentDatePipe] // 他モジュールから利用できるようexport
})
export class SharedModule {}
