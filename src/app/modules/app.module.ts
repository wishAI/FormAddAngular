import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from '../components/app.component';
import {TitleBarComponent} from '../components/title/title-bar.component';
import {RibbonToolComponent} from '../components/ribbon/ribbon-tool/ribbon-tool.component';
import {RibbonWrapperComponent} from '../components/ribbon/ribbon.component';
import {BlockListWrapperComponent} from '../components/blocklist/block-list/block-list.component';
import {BlockContentWrapperComponent} from '../components/block-content-wrapper/block-content-wrapper.component';
import {CommandManager} from '../services/command-manager.service';
import {BlockListItemComponent} from '../components/blocklist/block-list-item/block-list-item.component';
import {ParagraphBlock} from '../models/paragraph-block';
import {ParagraphContentComponent} from '../components/block_content/paragraph/paragraph-content.component';
import {ImageContentComponent} from '../components/block_content/image/image-content.component';
import {TitleContentComponent} from '../components/block_content/title/title-content.component';


@NgModule({
    declarations: [
        AppComponent,
        TitleBarComponent,
        RibbonWrapperComponent,
        RibbonToolComponent,
        BlockListWrapperComponent,
        BlockListItemComponent,
        BlockContentWrapperComponent,
        ParagraphContentComponent,
        ImageContentComponent,
        TitleContentComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule
    ],
    providers: [
        CommandManager
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
