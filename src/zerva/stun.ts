import { on } from '@zerva/core'
import Ministun from 'ministun'
import { Logger } from 'zeed'

const log = Logger('stun')

const config = {
  udp4: true,
  udp6: true,
  port: 3478,
  log: log.debug,
  err: log.error,
  sw: true,
}

export function useStun() {
  log('setup', config)

  const server = new Ministun(config)

  on('serveInit', async () => {
    await server.start()
  })

  on('serveStop', async () => {
    await server.stop()
  })
}
