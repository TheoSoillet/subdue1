"use client";
import React, { useState } from "react";
import Accordion from "./accordion";
import { Heading } from "./heading";

const questions = [
  {
    id: 1,
    title: "What is Subdue Consulting?",
    description:
      "Subdue Consulting is a consulting company that specializes in combining neuroscience with digital marketing to drive growth.",
  },
  {
    id: 2,
    title: "How does it work?",
    description:
      "Subdue Consulting uses cutting-edge neuroscience techniques to understand human behavior and apply them to digital marketing strategies.",
  },
  {
    id: 3,
    title: "Does Subdue Consulting implement the strategies?",
    description:
      "need to write",
  },
  {
    id: 4,
    title: "How long does a project last?",
    description:
      "need to write",
  },
  {
    id: 5,
    title: "How can I track my project?",
    description:
      "need to write",
  },
  {
    id: 6,
    title: "Is Subdue Consulting suitable for small businesses?",
    description:
      "Yes, Subdue Consulting adapts its strategies to every business size, from small to large.",
  },
  {
    id: 7,
    title: "Will we have regular meetings?",
    description:
      "Yes, Subdue Consulting provides regular meetings to discuss the progress of your project and to set goals for the next phase.",
  },
  {
    id: 8,
    title: "Does Subdue Consulting provides refunds?",
    description:
      "need to write",
  },
  {
    id: 9,
    title: "How does neuroscience help your strategies?",
    description:
      "need to write",
  },
  {
    id: 10,
    title: "How can I get started with Subdue Consulting?",
    description:
      "To get started with Subdue Consulting, simply schedule a free meeting.",
  },
];

export const FAQs = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="max-w-3xl mx-auto py-20 px-8">
      <Heading className="pt-4">Frequently asked questions</Heading>
      <div className="grid  gap-10 pt-20">
        {questions.map((item, i) => (
          <Accordion
            key={i}
            i={i}
            expanded={expanded}
            setExpanded={setExpanded}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
    </div>
  );
};
