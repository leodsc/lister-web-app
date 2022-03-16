import { Button } from "./button"
import { Label } from "./label"

export interface Form {
    method: string,
    action: string,
    button: Button,
    labels: Label[]
}