import PageSection from '../components/PageSection.jsx'

const sections = [
  {
    id: 'hero',
    label: '01',
    title: 'Hero',
    dark: true,
    text: '여기는 Hero 섹션입니다. 메인 비주얼, 이름, 간단 소개가 들어갈 예정입니다.',
  },
  {
    id: 'about',
    label: '02',
    title: 'About Me',
    text: "여기는 About Me 섹션입니다. 간단한 자기소개와 '더 알아보기' 버튼이 들어갈 예정입니다.",
  },
  {
    id: 'skill-tree',
    label: '03',
    title: 'Skill Tree',
    bg: 'var(--color-bg-tertiary)',
    text: '여기는 Skill Tree 섹션입니다. 기술 스택을 트리나 프로그레스바로 시각화할 예정입니다.',
  },
  {
    id: 'projects',
    label: '04',
    title: 'Projects',
    text: "여기는 Projects 섹션입니다. 대표작 썸네일 3-4개와 '더 보기' 버튼이 들어갈 예정입니다.",
  },
  {
    id: 'contact',
    label: '05',
    title: 'Contact',
    dark: true,
    text: '여기는 Contact 섹션입니다. 연락처, SNS, 간단한 메시지 폼이 들어갈 예정입니다.',
  },
]

export default function HomePage() {
  return (
    <main>
      {sections.map(({ id, text, ...rest }) => (
        <div key={id} id={id}>
          <PageSection {...rest}>{text}</PageSection>
        </div>
      ))}
    </main>
  )
}
