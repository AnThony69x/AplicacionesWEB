import {insertarUser} from './crud'
import {iniciar} from './database'

async function main() {
    await iniciar()
    const walter = await insertarUser("Walter", "walter@gmail.com")
    console.log(walter)
}

main()