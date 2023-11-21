import {TypeormDatabase} from '@subsquid/typeorm-store'
import {processor} from './processor'

processor.run(new TypeormDatabase({supportHotBlocks: true}), async (ctx) => {
    ctx.log.info(`Processing nothing.`)
})
