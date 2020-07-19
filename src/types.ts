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

type SingularNoun =
  & WordType<'singular noun'>
  & SingularNounForms

type PluralNoun =
  & WordType<'plural noun'>
  & SingularNounForms

type Noun =
  & WordType<'noun'>
  & SingularNounForms
  & PluralNounForms

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

type ImperfectiveVerb =
  & WordType<'imperfective verb'>
  & InvfinitiveVerbForms
  & IndicativePastVerbForms
  & IndicativePresentVerbForms
  & ImperativeVerbForms

type PerfectiveVerb = 
  & WordType<'perfective verb'>
  & InvfinitiveVerbForms
  & IndicativePastVerbForms
  & IndicativeFutureVerbForms
  & ImperativeVerbForms

interface InterjectionForms {
  interjection: string
}

type Interjection = 
  & WordType<'interjection'>
  & InterjectionForms

type Word = SingularNoun | PluralNoun | Noun | ImperfectiveVerb | PerfectiveVerb | Interjection
