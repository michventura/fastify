import fastify from 'fastify'

const app = fastify()

app.get('/', async (request, reply) => {
  reply.code(200).send({message: 'Hello mich!'})
})

app.listen(process.env.PORT || 3000, '0.0.0.0', (e, address) => {
  if (e) {
    console.error(e)
    process.exit(1)
  }
  console.log(`Server listening at ${address}`)
})
