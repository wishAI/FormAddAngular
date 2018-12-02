import {Component, Input} from '@angular/core';
import { Block } from 'app/models/block';


export abstract class BlockContentComponent {

    @Input() public block: Block;

    public abstract makeBlock(): Block;

    public abstract loadBlock(block: Block);

}
