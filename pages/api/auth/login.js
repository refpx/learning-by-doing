import jwt from 'jsonwebtoken'
import { serialize } from 'cookie'

export default function loginHandler(req, res) {
  const { email, password } = req.body

  if (email === 'admin@local.local' && password === 'admin') {
    const token = jwt.sign(
      {
        exp: Math.floor(Date.now() / 1000) + 60 * 60 * 24 * 30,
        email: 'admin@local.local',
        username: 'refpx',
      },
      'secret'
    )

    const serealized = serialize('myTokenName', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: 1000 * 60 * 60 * 24 * 30,
      path: '/',
    })

    res.setHeader('Set-Cookie', serealized)
    return res.json('login success')
  }

  return res.status(401).json({ error: 'login failed' })
}
