import * as Listr               from 'listr'
import {Command as BaseCommand} from '@adonisjs/ace'

export class Pipeline extends BaseCommand {
    static get signature() {
        return 'pipe {repo: The name of the repository "user/repo"}'
    }

    static get description() {
        return 'Run the dictionary generation pipeline'
    }

    async handle({name}) {
        await new Listr([
            {
                title: 'Fetch the repository from GitHub',
                task() {
                    // Check the existence of the repository
                    // Download a local copy to a temp directory
                },
            },
            {
                title: 'Recursively read all files',
                task:  () => {
                    return new Listr([
                        {
                            title: 'Create an ignored directory list',
                            task() {
                                // Load .gitignore to determine unnecessary files
                                // Ignore common directories like assets|dist|test|build
                            },
                        },
                        {
                            title: 'Load all non-ignored files',
                            task() {
                            },
                        },
                    ])
                },
            },
            {
                title: 'Generate AST from file',
                task() {
                    // Using esprima
                },
            },
            {
                title: 'Recursively extract identifiers',
                task() {
                    // Get all:
                    // - Variable names
                    // - Parameter names
                    // - Class names
                    // - Method names
                    // - Function names
                },
            },
            {
                title: 'Normalize tokens',
                task() {
                    // Convert: camelCase, PascalCase, kabob-case, snake_case
                    // to: camel case, pascal case, kabob case, snake case

                    // remove all symbols and digits from tokens

                    // convert all tokens to singular case
                },
            },
            {
                title: 'Noise removal',
                task() {
                    // Remove unrecognizable words
                    // Common connection words like to|and|the|a|an
                },
            },
            {
                title: 'Categorize found words',
                task() {
                    // Into nouns, verbs, adjectives
                },
            },
        ]).run()
    }
}
