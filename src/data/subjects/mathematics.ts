import { KnowledgeSubject } from '../../types/knowledge';

export const mathematics: KnowledgeSubject = {
  id: 'mathematics',
  name: 'Mathematics',
  description: 'Study of numbers, quantities, shapes, and patterns',
  icon: 'Calculator',
  facts: [
    {
      id: 'math-001',
      term: 'Pythagorean Theorem',
      definition: 'In a right triangle, the square of the hypotenuse equals the sum of squares of the other two sides (a² + b² = c²)',
      topic: 'Geometry',
      moreInfo: {
        text: 'This fundamental theorem is essential in geometry and has practical applications in architecture, engineering, and physics.',
        links: ['https://www.google.com/search?q=pythagorean+theorem']
      }
    },
    {
      id: 'math-002',
      term: 'Pi (π)',
      definition: 'The ratio of a circle\'s circumference to its diameter, approximately equal to 3.14159',
      topic: 'Constants',
      moreInfo: {
        text: 'Pi is an irrational number that continues infinitely without repeating. It appears in many mathematical formulas and has applications across science and engineering.',
        links: ['https://www.google.com/search?q=pi+constant+mathematics']
      }
    },
    {
      id: 'math-003',
      term: 'Golden Ratio',
      definition: 'A special number approximately equal to 1.618, often found in nature and considered aesthetically pleasing',
      topic: 'Constants',
      moreInfo: {
        text: 'The golden ratio, denoted by φ (phi), appears in art, architecture, and nature. It\'s found in the proportions of many natural objects and is used in design for its aesthetic appeal.',
        links: ['https://www.google.com/search?q=golden+ratio+mathematics']
      }
    },
    {
      id: 'math-004',
      term: 'Quadratic Formula',
      definition: 'For a quadratic equation ax² + bx + c = 0, the solution is given by x = (-b ± √(b² - 4ac)) / (2a)',
      topic: 'Algebra',
      moreInfo: {
        text: 'The quadratic formula is used to solve quadratic equations and find the x-intercepts of parabolas. The term under the square root (b² - 4ac) is called the discriminant.',
        links: ['https://www.google.com/search?q=quadratic+formula']
      }
    },
    {
      id: 'math-005',
      term: 'Compound Interest',
      definition: 'A = P(1 + r/n)^(nt), where A is final amount, P is principal, r is interest rate, n is number of times interest is compounded per year, and t is time in years',
      topic: 'Finance',
      moreInfo: {
        text: 'Compound interest is the addition of interest to the principal sum of a loan or deposit, resulting in interest earned on previously accumulated interest.',
        links: ['https://www.google.com/search?q=compound+interest+formula']
      }
    },
    {
      id: 'math-006',
      term: 'Area of Trapezium',
      definition: 'A = ½(a + b)h, where a and b are the parallel sides and h is the height (perpendicular distance between parallel sides)',
      topic: 'Geometry',
      moreInfo: {
        text: 'The trapezium (trapezoid) is a quadrilateral with at least one pair of parallel sides. The area formula averages the parallel sides and multiplies by height.',
        links: ['https://www.google.com/search?q=area+of+trapezoid']
      }
    },
    {
      id: 'math-007',
      term: 'Volume of Cylinder',
      definition: 'V = πr²h, where r is the radius of the base and h is the height',
      topic: '3D Geometry',
      moreInfo: {
        text: 'The volume of a cylinder is calculated by multiplying the area of the circular base (πr²) by the height.',
        links: ['https://www.google.com/search?q=volume+of+cylinder']
      }
    },
    {
      id: 'math-008',
      term: 'Volume of Pyramid',
      definition: 'V = ⅓Bh, where B is the area of the base and h is the height (perpendicular distance from base to apex)',
      topic: '3D Geometry',
      moreInfo: {
        text: 'The volume of any pyramid is one-third the product of the base area and height, regardless of the shape of the base.',
        links: ['https://www.google.com/search?q=volume+of+pyramid']
      }
    },
    {
      id: 'math-009',
      term: 'Volume of Cone',
      definition: 'V = ⅓πr²h, where r is the radius of the base and h is the height',
      topic: '3D Geometry',
      moreInfo: {
        text: 'A cone is a pyramid with a circular base. Its volume is one-third the product of the base area (πr²) and height.',
        links: ['https://www.google.com/search?q=volume+of+cone']
      }
    },
    {
      id: 'math-010',
      term: 'Volume of Sphere',
      definition: 'V = ⁴⁄₃πr³, where r is the radius',
      topic: '3D Geometry',
      moreInfo: {
        text: 'The volume of a sphere is proportional to the cube of its radius. This formula was first derived by Archimedes.',
        links: ['https://www.google.com/search?q=volume+of+sphere']
      }
    },
    {
      id: 'math-011',
      term: 'Surface Area of Cylinder',
      definition: 'A = 2πr² + 2πrh, where r is the radius and h is the height',
      topic: '3D Geometry',
      moreInfo: {
        text: 'The surface area consists of two circular bases (2πr²) plus the curved lateral surface (2πrh).',
        links: ['https://www.google.com/search?q=surface+area+of+cylinder']
      }
    },
    {
      id: 'math-012',
      term: 'Surface Area of Pyramid',
      definition: 'A = B + ½Pl, where B is base area, P is base perimeter, and l is slant height',
      topic: '3D Geometry',
      moreInfo: {
        text: 'The surface area is the sum of the base area and the areas of all triangular faces. For a regular pyramid, all triangular faces are identical.',
        links: ['https://www.google.com/search?q=surface+area+of+pyramid']
      }
    },
    {
      id: 'math-013',
      term: 'Surface Area of Cone',
      definition: 'A = πr² + πrs, where r is the radius and s is the slant height',
      topic: '3D Geometry',
      moreInfo: {
        text: 'The surface area consists of a circular base (πr²) plus the curved lateral surface (πrs). The slant height is the distance from any point on the base circle to the apex.',
        links: ['https://www.google.com/search?q=surface+area+of+cone']
      }
    },
    {
      id: 'math-014',
      term: 'Surface Area of Sphere',
      definition: 'A = 4πr², where r is the radius',
      topic: '3D Geometry',
      moreInfo: {
        text: 'The surface area of a sphere is four times the area of its great circle. This elegant formula was also discovered by Archimedes.',
        links: ['https://www.google.com/search?q=surface+area+of+sphere']
      }
    }
  ]
};