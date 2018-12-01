import {Injectable} from "@angular/core";
import {CommandListener} from "./command-listener.service";


@Injectable()
export class CommandManager {
    private cmdListeners: CommandListener[] = [];

    // append listener
    public appendCommandListener(ins: CommandListener): void {
        // add to the cmd list
        this.cmdListeners.push(ins);
    }

    public removeCommandListener(ins: CommandListener): void {
        for(let [idx, cmdListener] of this.cmdListeners.entries()) {
            if(cmdListener == ins) {
                this.cmdListeners.splice(idx, 1);
            }
        }
    }

    // send command
    public pushCommand(cmd: string, dic?: Object): void {
        for(let cmdListener of this.cmdListeners) {
            if(cmdListener != null) {
                cmdListener.onCommand(cmd, dic);
            }
        }
    }
}
