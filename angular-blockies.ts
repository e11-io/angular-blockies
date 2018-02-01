import { NgModule, ModuleWithProviders } from "@angular/core";
import { BlockiesComponent } from './src/blockies/blockies';
import { CommonModule } from "@angular/common";

@NgModule({
    imports: [
        CommonModule,
    ],
    declarations: [
        BlockiesComponent
    ],
    exports: [
        BlockiesComponent
    ]
})

export class BlockiesModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: BlockiesModule,
            providers: []
        };
    }
}
