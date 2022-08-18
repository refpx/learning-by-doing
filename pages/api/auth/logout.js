import { verify } from 'jsonwebtoken'
import { serialize } from 'cookie'

export default function logoutHandler(req, res) {
  const { myTokenName } = req.cookies

  if (!myTokenName) {
    return res.status(401).json({ error: 'unauthorized' })
  }

  try {
    verify(myTokenName, 'secret')
    const serealized = serialize('myTokenName', null, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: 0,
      path: '/',
    })
    res.setHeader('Set-Cookie', serealized)
    res.status(200).json('logout success')
  } catch (error) {
    return res.status(401).json({ error: 'unauthorized' })
  }
}
