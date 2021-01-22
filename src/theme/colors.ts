import { type } from "os";

export type Colors = 'primary' | 'secundary' |  'error'

export const colors: Record <Colors, string> = {
    primary: '#0098DB',
    secundary: '#E5E5E5',

    error: '#DB4300'
}