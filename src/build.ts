import * as fs from 'fs'
import * as path from 'path'
import template from './template'

fs.writeFileSync(
	path.join(process.cwd(), `/ayu-midas.json`), //
	JSON.stringify(template(), null, '\t'),
)
console.log(`Updated ayu MiDas`)
