export const SIDE_BAR_LIST = [
  {
    id: 1,
    code: 'functional-implement',
    category: '기능 단위 구현',
    children: [
      {
        id: 2,
        title: '상품 주문 절차',
        path: '/order-product',
        description:
          '상품 주문, 주문 요약, 주문 환료 페이지를 스텝 별로 진행되도록 구현합니다.',
        feat: ['nextjs', 'contextAPI', 'jest'],
      },
      {
        id: 3,
        title: '로그인 & 회원가입',
        path: '/auth',
        description: '로그인 & 회원가입을 실제 사용가능 수준을 퀄리티로 구현합니다.',
        feat: ['nextjs', 'contextAPI', 'jest'],
      },
      {
        id: 6,
        title: '실시간 채팅',
        path: '/chat',
        description: '채팅창 구현합니다.',
        feat: ['nextjs', 'contextAPI', 'jest'],
      },
    ],
  },
  {
    id: 4,
    code: 'toy-project',
    category: '토이 프로젝트',
    children: [
      {
        id: 5,
        title: '투두 리스트',
        path: '/todo-list',
        description: '투두리스트 구현합니다.',
        feat: ['nextjs', 'contextAPI', 'jest'],
      },
      {
        id: 7,
        title: '네이버 지도',
        path: '/map',
        description: '네이버 지도 구현합니다.',
        feat: ['nextjs', 'contextAPI', 'jest'],
      },
    ],
  },
  {
    id: 8,
    code: 'data-visualization',
    category: '데이터 시각화',
    children: [
      {
        id: 9,
        title: '막대차트',
        path: '/bar',
        description: '막대차트 구현합니다.',
        feat: ['nextjs', 'contextAPI', 'jest'],
      },
      {
        id: 10,
        title: '꺾은선 차트',
        path: '/line',
        description: '꺾은선 차트 구현합니다.',
        feat: ['nextjs', 'contextAPI', 'jest'],
      },
    ],
  },
]
