import { KnowledgeSubject } from '../../types/knowledge';
import { DollarSign } from 'lucide-react';

export const economics: KnowledgeSubject = {
  id: 'economics',
  name: 'Economics',
  description: 'The study of production, distribution, and consumption of goods and services',
  icon: DollarSign,
  facts: [
    {
      id: 'econ-001',
      term: 'Innovation',
      definition: 'Technological advancement and new methods that improve efficiency, productivity, or market competitiveness',
      topic: 'Economic Growth',
      moreInfo: {
        text: 'Involves introducing new products or processes that improve efficiency, productivity, or market competitiveness.'
      }
    },
    {
      id: 'econ-002',
      term: 'Capital Stock',
      definition: 'Physical resources and equipment used in production',
      topic: 'Production',
      moreInfo: {
        text: 'Refers to the total value of machinery, buildings, and tools available for production in an economy.'
      }
    },
    {
      id: 'econ-003',
      term: 'Agricultural Output',
      definition: 'The total quantity of agricultural products produced, including genetically modified crops',
      topic: 'Production',
      moreInfo: {
        text: 'Includes biotechnology such as GMOs boosting yields and resistance.'
      }
    },
    {
      id: 'econ-004',
      term: 'Education and Training',
      definition: 'Investments in human capital that enhance worker productivity and adaptability',
      topic: 'Human Capital',
      moreInfo: {
        text: 'Improving workforce skills through education and training programs.'
      }
    },
    {
      id: 'econ-005',
      term: 'Increased Population',
      definition: 'Growing labor force that can expand economic output',
      topic: 'Labor Market',
      moreInfo: {
        text: 'Can expand the supply of labour, potentially boosting output but also requiring more jobs and services.'
      }
    },
    {
      id: 'econ-006',
      term: 'Demand Side Shock',
      definition: 'Unexpected changes in demand that disrupt the economy',
      topic: 'Economic Fluctuations',
      moreInfo: {
        text: 'Can be domestic or global, possibly caused by another country in recession, financial crises, pandemics, or geopolitical conflicts.'
      }
    },
    {
      id: 'econ-007',
      term: 'Animal Spirits',
      definition: 'Emotional factors and confidence levels that influence economic decisions',
      topic: 'Behavioral Economics',
      moreInfo: {
        text: 'A Keynesian term describing how humans act irrationally in economic decisions.'
      }
    },
    {
      id: 'econ-008',
      term: 'Speculation',
      definition: 'Buying assets and selling for profit later',
      topic: 'Financial Markets',
      moreInfo: {
        text: 'Involves risk-taking to gain from changes in asset prices, often leading to volatility in markets.'
      }
    },
    {
      id: 'econ-009',
      term: 'Asset Price Bubbles',
      definition: 'When asset prices rise greatly above their intrinsic value before crashing',
      topic: 'Financial Markets',
      moreInfo: {
        text: 'Prices rise greatly then crash when the bubble bursts.'
      }
    },
    {
      id: 'econ-010',
      term: 'Sustainable Growth',
      definition: 'Economic growth that can be maintained long-term without depleting resources',
      topic: 'Economic Growth',
      moreInfo: {
        text: 'Thinking of the future while growing the economy without depleting resources or harming the environment.'
      }
    },
    {
      id: 'econ-011',
      term: 'Full Employment',
      definition: 'When unemployment is at its natural rate with no cyclical unemployment',
      topic: 'Labor Market',
      moreInfo: {
        text: 'Occurs when everyone able to work can find work, with only frictional and structural unemployment remaining.'
      }
    },
    {
      id: 'econ-012',
      term: 'Under-employment',
      definition: 'Workers employed below their skill level or desired hours',
      topic: 'Labor Market',
      moreInfo: {
        text: 'A job but not utilizing someone\'s skills or experience, or working part-time when full-time is desired.'
      }
    },
    {
      id: 'econ-013',
      term: 'Cyclical Unemployment',
      definition: 'Unemployment caused by economic downturns and recessions',
      topic: 'Unemployment',
      moreInfo: {
        text: 'Rises during a recession due to reduced demand and falls during booms.'
      }
    },
    {
      id: 'econ-014',
      term: 'Seasonal Unemployment',
      definition: 'Job losses due to regular seasonal changes',
      topic: 'Unemployment',
      moreInfo: {
        text: 'A predictable pattern of job availability linked to the season, e.g., farming, tourism, retail.'
      }
    },
    {
      id: 'econ-015',
      term: 'Structural Unemployment',
      definition: 'When workers\' skills don\'t match available jobs due to economic changes',
      topic: 'Unemployment',
      moreInfo: {
        text: 'Caused by long-term shifts in the economy, such as automation or globalisation.'
      }
    },
    {
      id: 'econ-016',
      term: 'Frictional Unemployment',
      definition: 'Temporary unemployment while people search for new jobs',
      topic: 'Unemployment',
      moreInfo: {
        text: 'Often short-term and part of the normal job search process.'
      }
    },
    {
      id: 'econ-017',
      term: 'Time Lag',
      definition: 'The delay between implementing a policy and seeing its effects',
      topic: 'Economic Policy',
      moreInfo: {
        text: 'Can hinder policymakers\' ability to respond quickly to economic changes.'
      }
    },
    {
      id: 'econ-018',
      term: 'Real Wage Unemployment',
      definition: 'When wages are kept above market-clearing level',
      topic: 'Labor Market',
      moreInfo: {
        text: 'Occurs when minimum wages or strong unions prevent wages from falling to equilibrium, creating excess supply of labour.'
      }
    },
    {
      id: 'econ-019',
      term: 'Migration',
      definition: 'Movement of people between regions or countries, affecting labor markets',
      topic: 'Labor Market',
      moreInfo: {
        text: 'Can help fill labour shortages or increase unemployment depending on conditions and policies.'
      }
    },
    {
      id: 'econ-020',
      term: 'Cost-push Inflation',
      definition: 'Price rises due to increased production costs',
      topic: 'Inflation',
      moreInfo: {
        text: 'Triggered when input costs like wages or raw materials increase, reducing supply.'
      }
    },
    {
      id: 'econ-021',
      term: 'Wage Spiral',
      definition: 'When wages and prices continuously push each other higher',
      topic: 'Inflation',
      moreInfo: {
        text: 'A feedback loop where higher wages lead to higher prices, prompting further wage demands.'
      }
    },
    {
      id: 'econ-022',
      term: 'Demand-pull Inflation',
      definition: 'Price rises due to excess demand in the economy',
      topic: 'Inflation',
      moreInfo: {
        text: 'When demand exceeds productive capacity, pulling prices up.'
      }
    },
    {
      id: 'econ-023',
      term: 'Fisher\'s Equation of Exchange',
      definition: 'MV = PT (Money supply × Velocity = Price level × Transactions)',
      topic: 'Monetary Theory',
      moreInfo: {
        text: 'A classical theory relating money supply and economic activity, where velocity and transactions help determine inflation.'
      }
    },
    {
      id: 'econ-024',
      term: 'Shoe Leather Costs',
      definition: 'Costs of frequently converting money during inflation',
      topic: 'Inflation',
      moreInfo: {
        text: 'The cost of frequently converting money to interest-bearing assets during inflation to get the most up to date prices.'
      }
    },
    {
      id: 'econ-025',
      term: 'Menu Costs',
      definition: 'The cost of changing prices for businesses',
      topic: 'Inflation',
      moreInfo: {
        text: 'Costs of updating price tags, menus, catalogs, and other pricing materials during inflation.'
      }
    },
    {
      id: 'econ-026',
      term: 'Hyperinflation',
      definition: 'Extremely high and accelerating inflation, typically over 50% per month',
      topic: 'Inflation',
      moreInfo: {
        text: 'Leads to collapse in currency value, economic instability, and public loss of confidence.'
      }
    },
    {
      id: 'econ-027',
      term: 'Deflation',
      definition: 'A sustained decrease in the general price level',
      topic: 'Price Levels',
      moreInfo: {
        text: 'Often associated with reduced demand, increased unemployment, and economic stagnation.'
      }
    },
    {
      id: 'econ-028',
      term: 'Stable Inflation',
      definition: 'When prices rise at a steady, predictable rate',
      topic: 'Inflation',
      moreInfo: {
        text: 'Typically targeted by central banks (e.g., 2%) to avoid economic shocks.'
      }
    },
    {
      id: 'econ-029',
      term: 'Trade-off',
      definition: 'Giving up one benefit to gain another benefit',
      topic: 'Economic Principles',
      moreInfo: {
        text: 'The concept of opportunity cost: choosing one option usually means forgoing another.'
      }
    },
    {
      id: 'econ-030',
      term: 'Current Account',
      definition: 'Record of a country\'s transactions with the rest of the world',
      topic: 'International Trade',
      moreInfo: {
        text: 'Includes trade, income flows, and transfers—reflecting net economic transactions.'
      }
    },
    {
      id: 'econ-031',
      term: 'Trade of Goods and Services',
      definition: 'Physical goods and services exchanged between countries',
      topic: 'International Trade',
      moreInfo: {
        text: 'Part of the current account—includes imports and exports.'
      }
    },
    {
      id: 'econ-032',
      term: 'Investment and Employment Income',
      definition: 'Money earned from foreign investments and work',
      topic: 'International Finance',
      moreInfo: {
        text: 'Includes dividends, interest, and wages from overseas sources.'
      }
    },
    {
      id: 'econ-033',
      term: 'Transfers',
      definition: 'Movement of money overseas without buying or investing',
      topic: 'International Finance',
      moreInfo: {
        text: 'One-way transactions with no return expected—includes aid and remittances.'
      }
    },
    {
      id: 'econ-034',
      term: 'Trade Deficit',
      definition: 'When a country\'s imports exceed its exports',
      topic: 'International Trade',
      moreInfo: {
        text: 'Means a country is spending more abroad than it earns from exports.'
      }
    },
    {
      id: 'econ-035',
      term: 'Trade Surplus',
      definition: 'When a country\'s exports exceed its imports',
      topic: 'International Trade',
      moreInfo: {
        text: 'Indicates net earnings from foreign trade.'
      }
    },
    {
      id: 'econ-036',
      term: 'Current Account Balance',
      definition: 'Sum of all factors in the current account',
      topic: 'International Trade',
      moreInfo: {
        text: 'Includes trade, income, and transfers—can be positive or negative.'
      }
    },
    {
      id: 'econ-037',
      term: 'Spending-switching Policies',
      definition: 'Policies to encourage domestic over foreign spending',
      topic: 'Economic Policy',
      moreInfo: {
        text: 'Includes tariffs, currency devaluation, and import restrictions to boost domestic demand.'
      }
    },
    {
      id: 'econ-038',
      term: 'Capital Account',
      definition: 'Transfers of assets between countries',
      topic: 'International Finance',
      moreInfo: {
        text: 'Covers capital transfers such as debt forgiveness or migrant assets.'
      }
    },
    {
      id: 'econ-039',
      term: 'Financial Account',
      definition: 'Movement of financial assets between countries',
      topic: 'International Finance',
      moreInfo: {
        text: 'Part of balance of payments showing investment flows like stocks, bonds, and property.'
      }
    },
    {
      id: 'econ-040',
      term: 'Long Term Flows',
      definition: 'Stable, predictable investment movements',
      topic: 'International Finance',
      moreInfo: {
        text: 'Refers to stable investment like direct foreign investment.'
      }
    },
    {
      id: 'econ-041',
      term: 'Short Term Flows',
      definition: 'Volatile investment movements based on speculation',
      topic: 'International Finance',
      moreInfo: {
        text: 'Involves volatile movements like currency trading or short-term investment.'
      }
    },
    {
      id: 'econ-042',
      term: 'Capital Flows',
      definition: 'Movement of money for investment purposes across borders',
      topic: 'International Finance',
      moreInfo: {
        text: 'Many firms have investments abroad, contributing to international capital movement.'
      }
    },
    {
      id: 'econ-043',
      term: 'Labour Skill',
      definition: 'Worker capabilities gained through training and education',
      topic: 'Labor Market',
      moreInfo: {
        text: 'Refers to the capabilities of the workforce, which determine productivity and adaptability.'
      }
    },
    {
      id: 'econ-044',
      term: 'Distribution of income',
      definition: 'Difference between poorest and richest wages.',
      topic: 'Income and Wealth',
      moreInfo: {
        text: 'Refers to how evenly or unevenly income is shared across a population, indicating levels of inequality.'
      }
    },
    {
      id: 'econ-045',
      term: 'Economic stability',
      definition: 'Less fluctuations in booms and slumps',
      topic: 'Macroeconomics',
      moreInfo: {
        text: 'A condition where the economy experiences steady growth with low inflation and minimal fluctuations in output or employment.'
      }
    },
    {
      id: 'econ-046',
      term: 'Aggregate demand',
      definition: 'Total demand for all goods and services within an economy at a given time and price level',
      topic: 'Macroeconomics',
      moreInfo: {
        text: 'Composed of consumption, investment, government spending, and net exports (C + I + G + (X-M)).'
      }
    },
    {
      id: 'econ-047',
      term: 'Progressive tax',
      definition: 'A tax system where the tax rate increases as the taxable income increases',
      topic: 'Taxation',
      moreInfo: {
        text: 'Ensures wealthier individuals pay a higher proportion of their income in tax, aiming to reduce inequality.'
      }
    },
    {
      id: 'econ-048',
      term: 'Natural rate of unemployment',
      definition: 'The lowest sustainable unemployment rate that an economy can achieve without causing inflation to rise',
      topic: 'Labor Market',
      moreInfo: {
        text: 'Includes frictional and structural unemployment and is consistent with stable inflation.'
      }
    },
    {
      id: 'econ-049',
      term: 'Phillips curve',
      definition: 'Shows the trade off between unemployment and inflation rates',
      topic: 'Macroeconomics',
      moreInfo: {
        text: 'Suggests an inverse short-term relationship between unemployment and inflation.'
      }
    },
    {
      id: 'econ-050',
      term: 'Wage flexibility',
      definition: 'How wages change with labour.',
      topic: 'Labor Market',
      moreInfo: {
        text: 'Describes how responsive wages are to changes in labour supply and demand, important in reducing unemployment.'
      }
    },
    {
      id: 'econ-051',
      term: 'Zero-hour contracts',
      definition: 'Employment contracts where workers have no guaranteed hours and work only when needed by employers',
      topic: 'Labor Market',
      moreInfo: {
        text: 'Provides labour flexibility but can cause income insecurity for workers.'
      }
    },
    {
      id: 'econ-052',
      term: 'Monetary policy',
      definition: 'Central bank controlling money supply and interest rates to achieve economic goals.',
      topic: 'Economic Policy',
      moreInfo: {
        text: 'Used to control inflation, stabilise currency, and promote economic growth via interest rates and money supply.'
      }
    },
    {
      id: 'econ-053',
      term: 'Wealth',
      definition: 'Total value of assets owned by an individual or household minus their liabilities',
      topic: 'Income and Wealth',
      moreInfo: {
        text: 'Includes savings, property, investments, and other valuable resources.'
      }
    },
    {
      id: 'econ-054',
      term: 'Income',
      definition: 'Money received in a time frame',
      topic: 'Income and Wealth',
      moreInfo: {
        text: 'Typically from work (wages/salary), investments, or transfers, measured over a period like a week or year.'
      }
    },
    {
      id: 'econ-055',
      term: 'Lorenz curve',
      definition: 'Shows income distribution in an economy',
      topic: 'Income and Wealth',
      moreInfo: {
        text: 'A graphical representation showing how equally income is distributed across a population.'
      }
    },
    {
      id: 'econ-056',
      term: 'Gini coefficient',
      definition: 'Area A/ Area A + Area B',
      topic: 'Income and Wealth',
      moreInfo: {
        text: 'A numerical measure of income inequality (0 = perfect equality, 1 = complete inequality).'
      }
    },
    {
      id: 'econ-057',
      term: 'Horizontal equity',
      definition: 'People in the same circumstances are treated fairly',
      topic: 'Taxation',
      moreInfo: {
        text: 'Ensures taxpayers or citizens with similar incomes and needs are taxed or supported similarly.'
      }
    },
    {
      id: 'econ-058',
      term: 'Vertical equity',
      definition: 'People in different circumstances are treated fairly.',
      topic: 'Taxation',
      moreInfo: {
        text: 'Recognises that people with different abilities to pay or different needs should be treated differently.'
      }
    },
    {
      id: 'econ-059',
      term: 'Complete equality',
      definition: 'Everyone earns the exact same',
      topic: 'Income and Wealth',
      moreInfo: {
        text: 'An economic state where income is perfectly equally distributed.'
      }
    },
    {
      id: 'econ-060',
      term: 'Complete inequality',
      definition: 'One person earns everything',
      topic: 'Income and Wealth',
      moreInfo: {
        text: 'An extreme case of income inequality where all income or wealth is concentrated in one individual.'
      }
    },
    {
      id: 'econ-061',
      term: 'Relative poverty',
      definition: 'Low income compared to other incomes',
      topic: 'Poverty',
      moreInfo: {
        text: 'Defined in relation to societal standards, often measured as earning below 60% of median income.'
      }
    },
    {
      id: 'econ-062',
      term: 'Absolute poverty',
      definition: 'Can\'t afford basic necessities',
      topic: 'Poverty',
      moreInfo: {
        text: 'Lacks access to essentials like food, clean water, housing, or healthcare.'
      }
    },
    {
      id: 'econ-063',
      term: 'Fiscal policy',
      definition: 'Government plan to manage government spending and taxation, debt and borrowing.',
      topic: 'Economic Policy',
      moreInfo: {
        text: 'Used to influence economic activity, especially aggregate demand and employment.'
      }
    },
    {
      id: 'econ-064',
      term: 'Expansionary FP',
      definition: 'Boosting AD, lower tax and more govt spending',
      topic: 'Economic Policy',
      moreInfo: {
        text: 'Used during recessions to stimulate economic activity by increasing government expenditure or cutting taxes.'
      }
    },
    {
      id: 'econ-065',
      term: 'Contractionary FP',
      definition: 'Reducing AD, higher taxes and less govt spending',
      topic: 'Economic Policy',
      moreInfo: {
        text: 'Used to reduce inflation or budget deficits by decreasing spending or raising taxes.'
      }
    },
    {
      id: 'econ-066',
      term: 'Demand-side fiscal policy',
      definition: 'Affects aggregate demand',
      topic: 'Economic Policy',
      moreInfo: {
        text: 'Aims to directly influence total demand in the economy to stabilise or grow GDP.'
      }
    },
    {
      id: 'econ-067',
      term: 'Automatic stabilisers',
      definition: 'FP can automatically change due to the business cycle',
      topic: 'Economic Policy',
      moreInfo: {
        text: 'Includes unemployment benefits and progressive taxes which adjust without new policy decisions.'
      }
    },
    {
      id: 'econ-068',
      term: 'Discretionary policy',
      definition: 'When fiscal policy is changed on purpose',
      topic: 'Economic Policy',
      moreInfo: {
        text: 'Deliberate changes in spending or taxation by the government to influence the economy.'
      }
    },
    {
      id: 'econ-069',
      term: 'Current expenditure',
      definition: 'Repeated spending on things used quickly',
      topic: 'Government Finance',
      moreInfo: {
        text: 'Day-to-day government expenses like salaries, maintenance, or consumables.'
      }
    },
    {
      id: 'econ-070',
      term: 'Capital expenditure',
      definition: 'Spending on assets',
      topic: 'Government Finance',
      moreInfo: {
        text: 'Funds used to acquire or improve physical assets like buildings, roads, or equipment.'
      }
    },
    {
      id: 'econ-071',
      term: 'Regressive tax',
      definition: 'Taxes fall as income rises, encourages growth.',
      topic: 'Taxation',
      moreInfo: {
        text: 'Takes a larger percentage from low-income earners; may worsen inequality but can incentivise investment.'
      }
    },
    {
      id: 'econ-072',
      term: 'Laffer curve',
      definition: 'Shows how as taxes increase, eventually there is less tax revenue after a point due to less incentive to work.',
      topic: 'Taxation',
      moreInfo: {
        text: 'Illustrates that beyond a certain tax rate, revenue may decline due to disincentivised effort.'
      }
    },
    {
      id: 'econ-073',
      term: 'Proportional tax',
      definition: 'Everyone pays the same tax',
      topic: 'Taxation',
      moreInfo: {
        text: 'A flat tax rate regardless of income, where all individuals are taxed the same percentage.'
      }
    },
    {
      id: 'econ-074',
      term: 'Tax free allowance',
      definition: 'People don\'t get taxed until they earn a certain amount.',
      topic: 'Taxation',
      moreInfo: {
        text: 'A threshold below which no income tax is paid, helping low-income earners.'
      }
    },
    {
      id: 'econ-075',
      term: 'Marginal tax rate',
      definition: 'Rate of tax on extra money (Last £1 for income tax)',
      topic: 'Taxation',
      moreInfo: {
        text: 'The percentage of tax applied to your next pound of income.'
      }
    },
    {
      id: 'econ-076',
      term: 'Expansionary MP',
      definition: 'More AD, low interest rates, weak exchange rate',
      topic: 'Monetary Policy',
      moreInfo: {
        text: 'Monetary policy designed to stimulate the economy through lower rates and more borrowing.'
      }
    },
    {
      id: 'econ-077',
      term: 'Contractionary MP',
      definition: 'Less AD, High interest rates, strong exchange rate',
      topic: 'Monetary Policy',
      moreInfo: {
        text: 'Used to slow the economy and curb inflation by making borrowing costlier.'
      }
    },
    {
      id: 'econ-078',
      term: 'Transmission mechanism',
      definition: 'Effects of changes to interest rates',
      topic: 'Monetary Policy',
      moreInfo: {
        text: 'The path through which interest rate changes affect consumption, investment, and AD.'
      }
    },
    {
      id: 'econ-079',
      term: 'Bank rate',
      definition: 'Lowest rate the BoE will lend to banks',
      topic: 'Monetary Policy',
      moreInfo: {
        text: 'Central interest rate set by the Bank of England that influences all other rates in the economy.'
      }
    },
    {
      id: 'econ-080',
      term: 'Supply-side policies',
      definition: 'Aim to increase trend growth rate',
      topic: 'Economic Policy',
      moreInfo: {
        text: 'Focus on improving productivity, efficiency, and long-run aggregate supply.'
      }
    },
    {
      id: 'econ-081',
      term: 'Free market Supply-Side policy',
      definition: 'Increase efficiency by removing things that interfere such as the government',
      topic: 'Economic Policy',
      moreInfo: {
        text: 'E.g., privatisation, deregulation—reduce state control to increase competition.'
      }
    },
    {
      id: 'econ-082',
      term: 'Interventionist S-SP',
      definition: 'Correcting market failure',
      topic: 'Economic Policy',
      moreInfo: {
        text: 'Includes government investment in education, infrastructure, or healthcare to improve economic performance.'
      }
    },
    {
      id: 'econ-083',
      term: 'Great Depression',
      definition: '1929. Low output, deflation, high unemployment',
      topic: 'Economic History',
      moreInfo: {
        text: 'A severe worldwide economic depression beginning in the US stock market crash.'
      }
    },
    {
      id: 'econ-084',
      term: 'Consequences of great depression',
      definition: 'Govt revenue fell, unemployment costs up, budget deficit up',
      topic: 'Economic History',
      moreInfo: {
        text: 'Governments faced fiscal crises and widespread social hardship.'
      }
    },
    {
      id: 'econ-085',
      term: 'Balancing the budget',
      definition: 'Idea in the 1920\'s for classical economists, the primary goal.',
      topic: 'Government Finance',
      moreInfo: {
        text: 'The principle of not spending more than the government earns in taxes.'
      }
    },
    {
      id: 'econ-086',
      term: 'Gold standard',
      definition: 'Currency can be swapped for gold from the central bank',
      topic: 'Monetary Systems',
      moreInfo: {
        text: 'A fixed monetary system where currency is directly linked to gold value.'
      }
    },
    {
      id: 'econ-087',
      term: 'Gold standard impact',
      definition: 'No expansionary MP, fixed exchange rates at a strong pound',
      topic: 'Monetary Systems',
      moreInfo: {
        text: 'Restricted flexibility in responding to economic crises due to fixed money supply.'
      }
    },
    {
      id: 'econ-088',
      term: 'Keynesian policies',
      definition: 'Popular in the middle of the 20th century.',
      topic: 'Economic Theory',
      moreInfo: {
        text: 'Advocate government intervention to manage demand and prevent unemployment.'
      }
    },
    {
      id: 'econ-089',
      term: 'Keynesian view',
      definition: 'Govt needs to intervene to reach full employment..',
      topic: 'Economic Theory',
      moreInfo: {
        text: 'Markets may not self-correct quickly enough; public spending can fill demand gaps.'
      }
    },
    {
      id: 'econ-090',
      term: 'Keynesian view reasoning',
      definition: 'When there is a shock, the free market repairs itself very slowly and requires the government to boost demand to speed up the process.',
      topic: 'Economic Theory',
      moreInfo: {
        text: 'Government spending can \'prime the pump\' of economic activity during downturns.'
      }
    },
    {
      id: 'econ-091',
      term: 'Classical views',
      definition: 'Economy operates at full capacity on its own.',
      topic: 'Economic Theory',
      moreInfo: {
        text: 'Belief in free markets self-regulating through flexible prices and wages.'
      }
    },
    {
      id: 'econ-092',
      term: 'Classical views reasoning',
      definition: 'When demand falls the economy does recover quickly because wages and prices easily adjust',
      topic: 'Economic Theory',
      moreInfo: {
        text: 'Suggests no need for government intervention as markets are efficient.'
      }
    },
    {
      id: 'econ-093',
      term: 'Utility',
      definition: 'Satisfaction / Benefit',
      topic: 'Consumer Theory',
      moreInfo: {
        text: 'A measure of personal happiness or satisfaction from consuming a good or service.'
      }
    },
    {
      id: 'econ-094',
      term: 'Herd behaviour',
      definition: 'Cognitive bias, people influenced by people around them.',
      topic: 'Behavioral Economics',
      moreInfo: {
        text: 'Describes groupthink in markets where individuals mimic others, possibly irrationally.'
      }
    },
    {
      id: 'econ-095',
      term: 'Price mechanism',
      definition: 'When consumers buy G+S from producers.',
      topic: 'Market Mechanisms',
      moreInfo: {
        text: 'The interaction of supply and demand to determine prices and allocate resources.'
      }
    },
    {
      id: 'econ-096',
      term: 'Welfare gain/loss',
      definition: 'How much society benefits from an externality.',
      topic: 'Welfare Economics',
      moreInfo: {
        text: 'Measures changes in societal well-being due to production or consumption effects.'
      }
    },
    {
      id: 'econ-097',
      term: 'Demand',
      definition: 'The quantity of a product that consumers are willing and able to buy at a given price',
      topic: 'Market Mechanisms',
      moreInfo: {
        text: 'One half of market interaction—demand changes with price, income, and preferences.'
      }
    },
    {
      id: 'econ-098',
      term: 'Substitute good',
      definition: 'Alternatives. If the price of one good goes up, demand for the other goes up. (beef and lamb)',
      topic: 'Consumer Theory',
      moreInfo: {
        text: 'Goods that can replace each other; price change in one affects demand for the other.'
      }
    },
    {
      id: 'econ-099',
      term: 'PED',
      definition: 'Measure of how demand responds to changes in price.',
      topic: 'Market Analysis',
      moreInfo: {
        text: 'Price Elasticity of Demand shows how sensitive consumers are to price changes.'
      }
    },
    {
      id: 'econ-100',
      term: 'Economies of scale',
      definition: 'As output increases, cost per unit decreases',
      topic: 'Production',
      moreInfo: {
        text: 'Occurs when larger firms benefit from lower average costs due to efficiency.'
      }
    },
    {
      id: 'econ-101',
      term: 'Opportunity cost',
      definition: 'The benefit gained from giving up the next best alternative',
      topic: 'Economic Principles',
      moreInfo: {
        text: 'Represents trade-offs in resource use—key concept in decision making.'
      }
    },
    {
      id: 'econ-102',
      term: 'Ceteris paribus',
      definition: 'All other things remaining equal',
      topic: 'Economic Principles',
      moreInfo: {
        text: 'Assumption used in economics to isolate the effect of one variable by holding others constant.'
      }
    },
    {
      id: 'econ-103',
      term: 'Monopoly',
      definition: 'When a large firm dominates a market, low barriers to entry',
      topic: 'Market Structure',
      moreInfo: {
        text: 'A market structure with one seller, potentially leading to higher prices and less choice.'
      }
    },
    {
      id: 'econ-104',
      term: 'Government intervention',
      definition: 'Taxes and subsidies in order to try and correct market failure.',
      topic: 'Economic Policy',
      moreInfo: {
        text: 'Used to address issues like externalities, public goods, and inequality.'
      }
    },
    {
      id: 'econ-105',
      term: 'Market failure',
      definition: 'When the price mechanism fails to allocate resources efficiently',
      topic: 'Market Efficiency',
      moreInfo: {
        text: 'Occurs when the market fails to achieve an efficient allocation of resources, often requiring government intervention.'
      }
    },
    {
      id: 'econ-106',
      term: 'Restricted choice',
      definition: 'Options are available but some are harder than others',
      topic: 'Consumer Choice',
      moreInfo: {
        text: 'Describes situations where all options are technically available but some are more difficult to access or choose than others.'
      }
    },
    {
      id: 'econ-107',
      term: 'Default choice',
      definition: 'Automatic enrolment into a choice',
      topic: 'Behavioral Economics',
      moreInfo: {
        text: 'The option automatically selected if no active choice is made, often used to influence decision-making.'
      }
    },
    {
      id: 'econ-108',
      term: 'Altruism',
      definition: 'Thinking of others satisfaction over your own irrational decisions',
      topic: 'Behavioral Economics',
      moreInfo: {
        text: 'Economic behavior where individuals prioritize others\' well-being over their own self-interest.'
      }
    },
    {
      id: 'econ-109',
      term: 'Positive externalities',
      definition: 'Benefit to a third party outside the price mechanism',
      topic: 'Market Efficiency',
      moreInfo: {
        text: 'External benefits that affect parties not directly involved in the economic transaction.'
      }
    },
    {
      id: 'econ-110',
      term: 'Cross elasticity of demand (XED)',
      definition: 'How demand of good A responds to a change in the price of good B',
      topic: 'Market Analysis',
      moreInfo: {
        text: 'Measures the responsiveness of demand for one good when the price of another good changes.'
      }
    },
    {
      id: 'econ-111',
      term: 'Supply',
      definition: 'Quantity of goods or services that producers supply to the market at a given price',
      topic: 'Market Mechanisms',
      moreInfo: {
        text: 'Represents the amount producers are willing and able to sell at different price levels.'
      }
    },
    {
      id: 'econ-112',
      term: 'Competitive supply',
      definition: 'Alternative goods can be produced from the same factors of production',
      topic: 'Production',
      moreInfo: {
        text: 'Occurs when the same resources can be used to produce different goods, creating competition for those resources.'
      }
    },
    {
      id: 'econ-113',
      term: 'Elastic demand',
      definition: 'Change in price or income has a larger effect on demand',
      topic: 'Market Analysis',
      moreInfo: {
        text: 'PED or S greater than 1, indicating demand is highly responsive to price changes.'
      }
    },
    {
      id: 'econ-114',
      term: 'Consumer surplus',
      definition: 'On a graph below the demand curve and above the equilibrium',
      topic: 'Market Analysis',
      moreInfo: {
        text: 'Represents the difference between what consumers are willing to pay and what they actually pay.'
      }
    },
    {
      id: 'econ-115',
      term: 'Producer surplus',
      definition: 'On a graph above the supply curve and below equilibrium',
      topic: 'Market Analysis',
      moreInfo: {
        text: 'Difference between what producers are paid and the minimum they are willing to accept.'
      }
    },
    {
      id: 'econ-116',
      term: 'Cap and trade',
      definition: 'Government sets a pollution cap annually',
      topic: 'Environmental Economics',
      moreInfo: {
        text: 'Permits are sold to firms to pollute more and are tradeable between companies.'
      }
    },
    {
      id: 'econ-117',
      term: 'Regulation',
      definition: 'Laws by the government to reduce consumption of a demerit good',
      topic: 'Government Policy',
      moreInfo: {
        text: 'Government intervention through rules and restrictions to influence market behavior.'
      }
    },
    {
      id: 'econ-118',
      term: 'Law of diminishing returns',
      definition: 'If one variable factor increases while all others remain fixed, eventually the marginal returns from that factor will begin to decrease',
      topic: 'Production',
      moreInfo: {
        text: 'A fundamental economic principle explaining why productivity gains eventually slow down.'
      }
    },
    {
      id: 'econ-119',
      term: 'Composite demand',
      definition: 'An increase in demand for one good restricts its other uses',
      topic: 'Demand Theory',
      moreInfo: {
        text: 'When a resource has multiple uses, increased demand for one use affects availability for others.'
      }
    },
    {
      id: 'econ-120',
      term: 'Geographical immobility',
      definition: 'Unable to travel to work easily',
      topic: 'Labor Market',
      moreInfo: {
        text: 'Physical barriers preventing workers from moving to where jobs are available.'
      }
    },
    {
      id: 'econ-121',
      term: 'Occupational immobility',
      definition: 'Do not have the skills for certain types of work',
      topic: 'Labor Market',
      moreInfo: {
        text: 'Barriers preventing workers from switching between different types of jobs due to skill requirements.'
      }
    },
    {
      id: 'econ-122',
      term: 'Asymmetric information',
      definition: 'Consumer and producer have different levels of information',
      topic: 'Market Efficiency',
      moreInfo: {
        text: 'When one party in an economic transaction has more information than the other.'
      }
    },
    {
      id: 'econ-123',
      term: 'Conglomerate merger',
      definition: 'Merge of firms in unrelated markets',
      topic: 'Business Structure',
      moreInfo: {
        text: 'When companies from different industries combine, often to diversify risk.'
      }
    },
    {
      id: 'econ-124',
      term: 'Price discrimination',
      definition: 'Charging different prices to different customers for the same product',
      topic: 'Pricing Strategies',
      moreInfo: {
        text: 'A pricing strategy where the same product is sold at different prices to different customers.'
      }
    },
    {
      id: 'econ-125',
      term: '1st degree price disc',
      definition: 'Each person is charged the maximum they are willing to pay',
      topic: 'Pricing Strategies',
      moreInfo: {
        text: 'Perfect price discrimination where each customer pays their maximum willingness to pay.'
      }
    },
    {
      id: 'econ-126',
      term: '2nd degree price disc',
      definition: 'Lower prices for people who buy large quantities',
      topic: 'Pricing Strategies',
      moreInfo: {
        text: 'Quantity-based price discrimination offering bulk discounts.'
      }
    },
    {
      id: 'econ-127',
      term: '3rd degree price disc',
      definition: 'Different prices to different segments for the same product',
      topic: 'Pricing Strategies',
      moreInfo: {
        text: 'Charging different prices to different market segments based on characteristics.'
      }
    },
    {
      id: 'econ-128',
      term: 'Prisoners dilemma',
      definition: 'One firm does not know what the other is thinking',
      topic: 'Game Theory',
      moreInfo: {
        text: 'Used to explain strategic decision making in oligopoly markets where firms must consider competitors\' actions.'
      }
    },
    {
      id: 'econ-129',
      term: 'Exchange rate',
      definition: 'Value of one currency relative to another',
      topic: 'International Finance',
      moreInfo: {
        text: 'The rate at which one currency can be exchanged for another in foreign exchange markets.'
      }
    },
    {
      id: 'econ-130',
      term: 'Margin of safety',
      definition: 'Difference between profit and the break-even point',
      topic: 'Business Finance',
      moreInfo: {
        text: 'Represents how much output or sales can fall before a firm begins to incur a loss.'
      }
    },
    {
      id: 'econ-131',
      term: 'Taxation',
      definition: 'A mandatory charge by the government on goods, services, income or capital',
      topic: 'Government Finance',
      moreInfo: {
        text: 'A key source of government revenue used to fund public services and influence behavior.'
      }
    },
    {
      id: 'econ-132',
      term: 'Privatisation',
      definition: 'Transfer of firm ownership from public to private sector',
      topic: 'Economic Policy',
      moreInfo: {
        text: 'The process of selling state-owned enterprises to private investors.'
      }
    },
    {
      id: 'econ-133',
      term: 'Government bureaucracy',
      definition: 'Enforcement of too many rules and regulations',
      topic: 'Government Policy',
      moreInfo: {
        text: 'May reduce efficiency in public services through excessive administrative procedures.'
      }
    },
    {
      id: 'econ-134',
      term: 'CPI',
      definition: 'Consumer Price Index',
      topic: 'Economic Indicators',
      moreInfo: {
        text: 'Measures the average price level of a basket of goods and services commonly purchased by households.'
      }
    },
    {
      id: 'econ-135',
      term: 'Oligopoly',
      definition: 'Market dominated by a few firms with high barriers to entry',
      topic: 'Market Structure',
      moreInfo: {
        text: 'A market structure where a small number of firms have significant market power.'
      }
    },
    {
      id: 'econ-136',
      term: 'Merit goods',
      definition: 'Goods where the social benefit exceeds the private benefit',
      topic: 'Market Efficiency',
      moreInfo: {
        text: 'Products or services that generate positive externalities and are often underprovided by the market.'
      }
    },
    {
      id: 'econ-137',
      term: 'Public goods',
      definition: 'Goods that are non-excludable and non-rivalrous',
      topic: 'Market Efficiency',
      moreInfo: {
        text: 'Products or services that cannot be effectively provided through private markets.'
      }
    },
    {
      id: 'econ-138',
      term: 'Non-excludable',
      definition: 'Cannot stop people from consuming it',
      topic: 'Public Goods',
      moreInfo: {
        text: 'A characteristic of public goods where it\'s impossible or impractical to prevent consumption.'
      }
    },
    {
      id: 'econ-139',
      term: 'Non-rivalry',
      definition: 'One person\'s use does not reduce availability for others',
      topic: 'Public Goods',
      moreInfo: {
        text: 'A characteristic where consumption by one person doesn\'t reduce availability for others.'
      }
    },
    {
      id: 'econ-140',
      term: 'Information failure',
      definition: 'Leads to overconsumption of demerit goods',
      topic: 'Market Efficiency',
      moreInfo: {
        text: 'Consumers or producers do not have full information to make rational decisions.'
      }
    },
    {
      id: 'econ-141',
      term: 'Pure monopoly',
      definition: 'Market with only one supplier',
      topic: 'Market Structure',
      moreInfo: {
        text: 'Typically has 100 percent market share and significant market power.'
      }
    },
    {
      id: 'econ-142',
      term: 'Specific taxes',
      definition: 'Fixed amount of tax on a good',
      topic: 'Taxation',
      moreInfo: {
        text: 'A set amount of tax per unit regardless of the price.'
      }
    },
    {
      id: 'econ-143',
      term: 'Ad valorem taxes',
      definition: 'Tax charged as a proportion of the price',
      topic: 'Taxation',
      moreInfo: {
        text: 'A percentage-based tax that varies with the price of the good or service.'
      }
    },
    {
      id: 'econ-144',
      term: 'Maximum price',
      definition: 'A price ceiling to increase the consumption of merit goods',
      topic: 'Price Controls',
      moreInfo: {
        text: 'Government-imposed upper limit on prices to make goods more affordable.'
      }
    },
    {
      id: 'econ-145',
      term: 'Minimum price',
      definition: 'Price floor often set to ensure suppliers receive a fair price',
      topic: 'Price Controls',
      moreInfo: {
        text: 'Government-imposed lower limit on prices to protect producers.'
      }
    },
    {
      id: 'econ-146',
      term: 'Buffer stock',
      definition: 'Scheme to stabilize commodity prices',
      topic: 'Price Stability',
      moreInfo: {
        text: 'Goods are stored when supply is high and released when supply is low to stabilize prices.'
      }
    },
    {
      id: 'econ-147',
      term: 'Competition and Markets Authority (CMA)',
      definition: 'UK regulatory body for competition policy',
      topic: 'Regulation',
      moreInfo: {
        text: 'Promotes competition and prevents anti-competitive practices in UK markets.'
      }
    },
    {
      id: 'econ-148',
      term: 'Regulating bodies',
      definition: 'Organizations that monitor specific industries',
      topic: 'Regulation',
      moreInfo: {
        text: 'Ensure fair practices and protect consumer interest in specific sectors.'
      }
    },
    {
      id: 'econ-149',
      term: 'ETS',
      definition: 'Emissions trading system',
      topic: 'Environmental Economics',
      moreInfo: {
        text: 'A market-based approach to controlling pollution through tradeable permits.'
      }
    },
    {
      id: 'econ-150',
      term: 'Market mechanism',
      definition: 'Interaction of supply and demand',
      topic: 'Market Operation',
      moreInfo: {
        text: 'Determines prices in a free market through the interaction of buyers and sellers.'
      }
    },
    {
      id: 'econ-151',
      term: 'Trade unions',
      definition: 'Groups of workers advocating for improved pay and conditions',
      topic: 'Labor Market',
      moreInfo: {
        text: 'Organizations representing workers\' interests in negotiations with employers.'
      }
    },
    {
      id: 'econ-152',
      term: 'RPI',
      definition: 'Retail Price Index',
      topic: 'Economic Indicators',
      moreInfo: {
        text: 'Similar to CPI but includes housing costs in its measurement of inflation.'
      }
    },
    {
      id: 'econ-153',
      term: 'Derived demand',
      definition: 'Demand for a good or service that stems from demand for another',
      topic: 'Demand Theory',
      moreInfo: {
        text: 'Example: demand for steel due to demand for cars.'
      }
    },
    {
      id: 'econ-154',
      term: 'GDP',
      definition: 'Gross Domestic Product',
      topic: 'Economic Indicators',
      moreInfo: {
        text: 'Total value of goods and services produced in an economy over a specific period.'
      }
    },
    {
      id: 'econ-155',
      term: 'Real GDP',
      definition: 'GDP adjusted for inflation',
      topic: 'Economic Indicators',
      moreInfo: {
        text: 'Measures actual economic growth by removing the effects of price changes.'
      }
    },
    {
      id: 'econ-156',
      term: 'GNI',
      definition: 'Gross National Income',
      topic: 'Economic Indicators',
      moreInfo: {
        text: 'Total income earned by residents of a country including overseas income.'
      }
    },
    {
      id: 'econ-157',
      term: 'Macroeconomic objectives',
      definition: 'Main goals of economic policy',
      topic: 'Economic Policy',
      moreInfo: {
        text: 'Typically includes growth, inflation, unemployment and balance of payments targets.'
      }
    },
    {
      id: 'econ-158',
      term: 'Inflation target',
      definition: 'UK government target is 2 percent with allowable variation',
      topic: 'Monetary Policy',
      moreInfo: {
        text: 'The Bank of England\'s target for annual price increases to maintain price stability.'
      }
    },
    {
      id: 'econ-159',
      term: 'Economic growth',
      definition: 'Increase in real GDP',
      topic: 'Macroeconomics',
      moreInfo: {
        text: 'Measured as a percentage increase in the economy\'s output over time.'
      }
    },
    {
      id: 'econ-160',
      term: 'Short run',
      definition: 'Period when at least one factor of production is fixed',
      topic: 'Production',
      moreInfo: {
        text: 'Time period where some inputs cannot be changed, affecting production flexibility.'
      }
    },
    {
      id: 'econ-161',
      term: 'Long run growth',
      definition: 'Increase in productive capacity of the economy',
      topic: 'Economic Growth',
      moreInfo: {
        text: 'Expansion of the economy\'s ability to produce goods and services over time.'
      }
    },
    {
      id: 'econ-162',
      term: 'Trend growth rate',
      definition: 'Average rate of economic growth over time',
      topic: 'Economic Growth',
      moreInfo: {
        text: 'The underlying rate of growth in an economy, excluding short-term fluctuations.'
      }
    },
    {
      id: 'econ-163',
      term: 'PPF',
      definition: 'Production Possibility Frontier',
      topic: 'Production',
      moreInfo: {
        text: 'Shows maximum output combinations of two goods possible with available resources.'
      }
    },
    {
      id: 'econ-164',
      term: 'Economic cycle',
      definition: 'Fluctuations in actual GDP over time',
      topic: 'Macroeconomics',
      moreInfo: {
        text: 'Includes boom, recession, recovery and slump phases.'
      }
    },
    {
      id: 'econ-165',
      term: 'Boom',
      definition: 'Period of very fast economic growth',
      topic: 'Economic Cycle',
      moreInfo: {
        text: 'A phase of rapid expansion in economic activity and output.'
      }
    },
    {
      id: 'econ-166',
      term: 'Recession',
      definition: 'Two consecutive quarters of negative growth',
      topic: 'Economic Cycle',
      moreInfo: {
        text: 'A period of declining economic activity and output.'
      }
    },
    {
      id: 'econ-167',
      term: 'Recovery',
      definition: 'When the economy starts to grow again after a recession',
      topic: 'Economic Cycle',
      moreInfo: {
        text: 'The phase where economic activity begins to increase following a downturn.'
      }
    },
    {
      id: 'econ-168',
      term: 'Output gap',
      definition: 'Difference between actual and potential output',
      topic: 'Macroeconomics',
      moreInfo: {
        text: 'Measures how far the economy is operating from its full potential.'
      }
    },
    {
      id: 'econ-169',
      term: 'Full capacity',
      definition: 'When all resources are fully employed',
      topic: 'Production',
      moreInfo: {
        text: 'The maximum sustainable level of output an economy can produce.'
      }
    },
    {
      id: 'econ-170',
      term: 'Income inequality',
      definition: 'Differences in income between individuals or households',
      topic: 'Income Distribution',
      moreInfo: {
        text: 'Measures the gap between high and low income earners in an economy.'
      }
    },
    {
      id: 'econ-171',
      term: 'BoE deficit',
      definition: 'Deficit linked to high levels of imports',
      topic: 'International Trade',
      moreInfo: {
        text: 'A balance of payments deficit caused by importing more than exporting.'
      }
    },
    {
      id: 'econ-172',
      term: 'Lower interest rates',
      definition: 'Encourages investment and consumption',
      topic: 'Monetary Policy',
      moreInfo: {
        text: 'A monetary policy tool used to stimulate economic activity by reducing borrowing costs.'
      }
    }
  ]
};