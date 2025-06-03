/* Source for WritingsPage */
export type writingsContentsType = {
  type: string;
  title: string;
  content: string;
  datetime: string;
  year: number;
  month: number;
  day: number;
  time: string;
};
export type writingsType = {
  section: string;
  contents: writingsContentsType[];
};
export const writings: writingsType[] = [
  {
    section: "Poems",
    contents: [
      {
        type: "poem",
        title: "Nothing At All",
        content: `Nothing at all
        I wish I thought
        Too much, to recall
        
        Consumed in thoughts
        I had it all
        Only in mind
        Nothing to recall
        
        Nothing at all
        Matters in these halls
        Too much, to fall
        
        Consumed in memories
        Bitter and sour
        Always in mind
        Dour the tone,
        Grim the reflection
        
        Nothing at all
        Really matters
        Too much, to recall.
        `,
        datetime: "2025-01-23 1438",
        year: 2025,
        month: 1,
        day: 23,
        time: "1438",
      },
      {
        type: "poem",
        title: "Just Testing",
        content: `Testing,
        Just a thing to see
        Does it really work?
        
        Not really;
        Even if you think it did,
        it was merely a mirage,
        A meaningless mirage,
        Just like you.
        `,
        datetime: "2025-01-23 2110",
        year: 2025,
        month: 1,
        day: 23,
        time: "2110",
      },
      {
        type: "poem",
        title: "Burning Forgiveness",
        content: `Burned away, tucked away
It never goes away
Memories hotter than a searing knife
It never goes away

Days of wishing
Wishing it would go away
When you remember who started it:
Does everyone deserve forgiveness?
        `,
        datetime: "2025-01-26 0850",
        year: 2025,
        month: 1,
        day: 26,
        time: "0850",
      },
      {
        type: "poem",
        title: "Nourish Me",
        content: `Deep spinning void
A depth unseen
Cast me out into an unknown ocean
Nourish me with your depth

Staring out, hoping it stares back
I never know, if I'll come back
Staring out, where will I go
Nourish me, and never let go`,
        datetime: "2025-04-27 1039",
        year: 2025,
        month: 4,
        day: 27,
        time: "1039",
      },
      {
        type: "poem",
        title: "The Chasm of Doubt",
        content: `Swirling inside
No way out
But no way in
The chasm is unknowing

Vacuum of void
Pulling me under
I am within
I am without
The chasm of doubt`,
        datetime: "2025-05-21 0800",
        year: 2025,
        month: 5,
        day: 21,
        time: "0800",
      },
      {
        type: "poem",
        title: "How Lovely",
        content: `Oh how lovely it would be...
A possibility of happiness
Oh how charming it could be,
A world with a glimmer of joy

Oh how lovely it could be,
To be more than a common toy
Oh how lovely it would be...
To be something that brings joy`,
        datetime: "2025-06-03 1151",
        year: 2025,
        month: 6,
        day: 3,
        time: "1151",
      },
    ],
  },
  {
    section: "Ramblings",
    contents: [
      {
        type: "rant",
        title: "Allergies - Taking Them Seriously",
        content: `I wish that allergies were taken more seriously.
        For me, this can be incredibly disabling/dehabilitating.
        There is no cure for allergies, only treatment, 
        and even those have severe limitations.

        When allergies hit hard, I am unable to participate in society,
        unable to breathe, eat, move, or even really think. 
        They close my airways, overheat my body, overload my immune
        system, and rob me of any energy or strength.
        Prescriptions and meds only help to alleviate the baseline and 
        try to act as a preventative, and can help reduce harm, but
        once a full-blown allergy attack hits, there is nothing you
        can do except try not to make it worse, and rest. 
        I have tried experimental treatments and shots, but they
        did nothing. From what I can tell, the medical field has
        made no advances in decades on this.

        And yet, society as a whole treats allergies as mere "sniffles"
        and an inconvenience to them. People get annoyed if you show any
        signs, and are frightened of coughs. And yet, they refuse to
        do anything to help, and society at large refuses to look into
        a cure or real, proper treatment to fully alleviate symptoms.
        We are just expected to suffer.
        `,
        datetime: "2025-05-21 1113",
        year: 2025,
        month: 5,
        day: 21,
        time: "1113",
      },
    ],
  },
  {
    section: "Phrases",
    contents: [],
  },
];
