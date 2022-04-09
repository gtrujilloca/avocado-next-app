import { NextApiRequest, NextApiResponse} from 'next'
import enablePublicAccess from '@cors'
import DB from '@database'

const getAvo = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    // Generally, you would not want this in your apps.
    // See more in 'cors.js'
    await enablePublicAccess(req, res)

    const db = new DB()
    const avoId = req.query.id as string

    const avo = await db.getById(avoId)
    // Notice: We're using Next.JS response helpers here :)
    // https://nextjs.org/docs/api-routes/response-helpers
    res.status(200).json(avo)
  } catch (error) {
    console.error(error)
    res.status(404).end()
  }
}

export default getAvo;