import { Word } from '../types'
import adverbs from './adverbs'
import interjections from './interjections'
import nouns from './nouns'
import verbs from './verbs'

const words: Array<Word> = [
  ...adverbs,
  ...interjections,
  ...nouns,
  ...verbs
]

export default words
