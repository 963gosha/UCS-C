import ace from '@adonisjs/ace'

// ace.addCommand()

ace.onError((error, commandName) => {
  console.log(`${commandName} reported ${error.message}`)
  process.exit(1)
})

// Boot ace to execute commands
ace.wireUpWithCommander()
ace.invoke()
