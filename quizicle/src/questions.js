 const qBank = [
  {
    qId:1,
    questionText: 'What is the capital of France?',
    answerOptions: [
      { answerText: 'New York', isCorrect: false ,oid:1},
      { answerText: 'London', isCorrect: false ,oid:2},
      { answerText: 'Paris', isCorrect: true ,oid:3},
      { answerText: 'Dublin', isCorrect: false,oid:4 },
    ],
  },
  {
    qId:2,
    questionText: 'Who is CEO of Tesla?',
    answerOptions: [
      { answerText: 'JeffBezos', isCorrect: false,oid:1 },
      { answerText: 'ElonMusk', isCorrect: true,oid:2},
      { answerText: 'BillGates', isCorrect: false,oid:3 },
      { answerText: 'TonyStark', isCorrect: false ,oid:4},
    ],
  },
  {
    qId:3,
    questionText: 'The iPhone was created by which company?',
    answerOptions: [
      { answerText: 'Apple', isCorrect: true,oid:1 },
      { answerText: 'Intel', isCorrect: false,oid:2 },
      { answerText: 'Amazon', isCorrect: false,oid:3 },
      { answerText: 'Microsoft', isCorrect: false,oid:4},
    ],
  },
  {
    qId:4,
    questionText: 'How many Harry Potter books are there?',
    answerOptions: [
      { answerText: '1', isCorrect: false ,oid:1},
      { answerText: '4', isCorrect: false ,oid:2},
      { answerText: '6', isCorrect: false ,oid:3},
      { answerText: '7', isCorrect: true,oid:4 },
    ],
  }]
    export default qBank;