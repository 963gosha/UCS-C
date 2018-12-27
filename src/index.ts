import * as ace   from '@adonisjs/ace'
import {Pipeline} from './Pipeline'

ace.onError((error, commandName) => {
    // tslint:disable-next-line
    console.log(`${ commandName } reported ${ error.message }`)
    process.exit(1)
})

ace.addCommand(Pipeline)
ace.wireUpWithCommander()
ace.invoke()
