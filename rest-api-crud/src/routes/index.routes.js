import { Router } from 'express'
const router = Router()

router.get('/', (req, res) => res.send('Hello World!'))
router.get('/p', (req, res) => res.send('Piong!'))

export default router
