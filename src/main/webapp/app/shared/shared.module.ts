import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ApiGatwaySharedLibsModule, ApiGatwaySharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective } from './';

@NgModule({
  imports: [ApiGatwaySharedLibsModule, ApiGatwaySharedCommonModule],
  declarations: [JhiLoginModalComponent, HasAnyAuthorityDirective],
  entryComponents: [JhiLoginModalComponent],
  exports: [ApiGatwaySharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ApiGatwaySharedModule {
  static forRoot() {
    return {
      ngModule: ApiGatwaySharedModule
    };
  }
}
