import { NgModule } from '@angular/core';

import { ApiGatwaySharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
  imports: [ApiGatwaySharedLibsModule],
  declarations: [JhiAlertComponent, JhiAlertErrorComponent],
  exports: [ApiGatwaySharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class ApiGatwaySharedCommonModule {}
