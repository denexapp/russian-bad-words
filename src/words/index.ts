import { Word } from '../types'
import adverbs from './adverbs'
import interjections from './interjections'
import nouns from './nouns'
import verbs from './verbs'
import predicatives from './predicatives'

const words: Array<Word> = [...adverbs, ...interjections, ...nouns, ...verbs, ...predicatives]

export default words
