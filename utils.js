import {dirname} from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

export {__filename, __dirname}  


//esta variables es necesario configurarla manualmente debido a que ENscript module no la incluye por default