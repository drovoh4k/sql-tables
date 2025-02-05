import React from "react";
import BoxQuestion from "@/components/boxQuestion";
import getDummyQuestions, { getDummyQuestion } from "@/utils/getRandomQ"

// export default function Questions({ params }: { params: { slug: string }  }) {
  export default function Questions() {
    const questions = getDummyQuestions()
    const data = getDummyQuestion()
    // destructuring object 
    let question = data.question
    let answersNumber = data.answersNumber
    let createdAt = data.createdAt
    // change type of created At to Date
    const createdAtFormat = new Date(createdAt);
    
    console.log("type of createAt fromated", typeof createdAtFormat )
    
  return (
    <div>
      <h1 className="text-black">¿Que piensas de esta pregunta?</h1>
      <BoxQuestion 
      question={question}
      answersNumber={answersNumber}
      createdAt={createdAtFormat}
      />
      <pre className="text-black">{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}
