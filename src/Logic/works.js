import { nanoid } from 'nanoid';

const works = [
  {
    id: nanoid(),
    title: 'Work 1',
    description: 'Work 1 description',
    src: 'https://picsum.photos/200/300',
    alt: 'Work 1',
    skills: [
      { id: nanoid(), name: 'Skill 1' },
      { id: nanoid(), name: 'Skill 2' },
      { id: nanoid(), name: 'Skill 3' },
    ],
  },
  {
    id: nanoid(),
    title: 'Work 2',
    description: 'Work 2 description',
    src: 'https://picsum.photos/200/300',
    alt: 'Work 2',
    skills: [
      { id: nanoid(), name: 'Skill 1' },
      { id: nanoid(), name: 'Skill 2' },
      { id: nanoid(), name: 'Skill 3' },
    ],
  },
  {
    id: nanoid(),
    title: 'Work 3',
    description: 'Work 3 description',
    src: 'https://picsum.photos/200/300',
    alt: 'Work 3',
    skills: [
      { id: nanoid(), name: 'Skill 1' },
      { id: nanoid(), name: 'Skill 2' },
      { id: nanoid(), name: 'Skill 3' },
    ],
  },
];

export default works;
