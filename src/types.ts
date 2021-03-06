interface WordType<Type extends string> {
  type: Type
}

interface SingularNounForms {
  nominativeSingular: string
  genitiveSingular: string
  dativeSingular: string
  accusativeSingular: string
  instrumentalSingular: string
  prepositionalSingular: string
}

interface PluralNounForms {
  nominativePlural: string
  genitivePlural: string
  dativePlural: string
  accusativePlural: string
  instrumentalPlural: string
  prepositionalPlural: string
}

export type SingularNoun = WordType<'singular noun'> & SingularNounForms

export type PluralNoun = WordType<'plural noun'> & SingularNounForms

export type Noun = WordType<'noun'> & SingularNounForms & PluralNounForms

interface InvfinitiveVerbForms {
  infinitive: string
}

interface IndicativePastVerbForms {
  indicativePastSingularMasculine: string
  indicativePastSingularFeminine: string
  indicativePastSingularNeuter: string
  indicativePastPlural: string
}

interface IndicativePresentVerbForms {
  indicativePresentSingularFirstPerson: string
  indicativePresentSingularSecondPerson: string
  indicativePresentSingularThirdPerson: string
  indicativePresentPluralFirstPerson: string
  indicativePresentPluralSecondPerson: string
  indicativePresentPluralThirdPerson: string
}

interface IndicativeFutureVerbForms {
  indicativeFutureSingularFirstPerson: string
  indicativeFutureSingularSecondPerson: string
  indicativeFutureSingularThirdPerson: string
  indicativeFuturePluralFirstPerson: string
  indicativeFuturePluralSecondPerson: string
  indicativeFuturePluralThirdPerson: string
}

interface ImperativeVerbForms {
  imperativeSingularSecondPerson: string
  imperativePluralSecondPerson: string
}

// Future imperfecitve verbs use infinitive form of verb
// No need to define them

// Subjunctive verbs look like Indicative past verbs
// No need to define them

// Imperative verbs use same forms of words as Indivative words
// Except of second person words

export type ImperfectiveVerb = WordType<'imperfective verb'> &
  InvfinitiveVerbForms &
  IndicativePastVerbForms &
  IndicativePresentVerbForms &
  ImperativeVerbForms

export type PerfectiveVerb = WordType<'perfective verb'> &
  InvfinitiveVerbForms &
  IndicativePastVerbForms &
  IndicativeFutureVerbForms &
  ImperativeVerbForms

interface InterjectionForms {
  interjection: string
}

export type Interjection = WordType<'interjection'> & InterjectionForms

interface AdverbForms {
  adverb: string
}

interface QualifyingAdverbForms {
  comparative: string
  superlative: string
}

export type NonQualifyingAdverb = WordType<'non qualifying adverb'> & AdverbForms

export type QualifyingAdverb = WordType<'qualifying adverb'> & AdverbForms & QualifyingAdverbForms

interface PredicativeForms {
  predicative: string
}

export type Predicative = WordType<'predicative'> & PredicativeForms

export type Word =
  | SingularNoun
  | PluralNoun
  | Noun
  | ImperfectiveVerb
  | PerfectiveVerb
  | Interjection
  | NonQualifyingAdverb
  | QualifyingAdverb
  | Predicative
