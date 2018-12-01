

export interface CommandListener {
    onCommand(cmd: string, dec: Object): void;
}
