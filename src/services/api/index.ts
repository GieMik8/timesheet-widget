import Base from './base'
import Events from './events'

const baseUrl: string = process.env.REACT_APP_BASE_URL!

export const base = new Base(baseUrl)
export const events = new Events(baseUrl)
